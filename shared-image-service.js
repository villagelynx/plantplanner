(function initializeSharedImageService() {
  const SUPABASE_BROWSER_BUNDLE_URL = "https://unpkg.com/@supabase/supabase-js@2.81.1/dist/umd/supabase.js";
  const DEFAULT_CONFIG = {
    url: "",
    anonKey: "",
    bucket: "plant-images",
    table: "plant_image_overrides",
    folder: "plants"
  };

  const config = Object.assign({}, DEFAULT_CONFIG, window.GARDENING_SUPABASE_CONFIG || {});
  const state = {
    client: null,
    session: null,
    authSubscription: null,
    overrides: {},
    sdkLoadPromise: null,
    clientLoadPromise: null,
    overridesLoadPromise: null,
    lastError: null
  };

  window.GARDENING_SHARED_IMAGE_OVERRIDES = window.GARDENING_SHARED_IMAGE_OVERRIDES || {};

  function isConfigured() {
    return Boolean(config.url && config.anonKey);
  }

  function slugifyPlantName(name) {
    return String(name || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function dispatchSharedImagesUpdated(extraDetail = {}) {
    window.dispatchEvent(new CustomEvent("gardening:shared-images-updated", {
      detail: Object.assign(
        {
          overrides: state.overrides,
          count: Object.keys(state.overrides).length,
          configured: isConfigured()
        },
        extraDetail
      )
    }));
  }

  function dispatchSharedAuthUpdated(extraDetail = {}) {
    window.dispatchEvent(new CustomEvent("gardening:shared-auth-updated", {
      detail: Object.assign(
        {
          configured: isConfigured(),
          session: state.session,
          email: state.session?.user?.email || "",
          lastError: state.lastError
        },
        extraDetail
      )
    }));
  }

  function mapOverrideRow(row) {
    const plantName = row?.plant_name || row?.plantName || "";
    const plantKey = row?.plant_key || row?.plantKey || slugifyPlantName(plantName);
    const updatedAt = row?.updated_at || row?.updatedAt || "";
    const basePublicUrl = row?.public_url || row?.publicUrl || "";
    return {
      plantKey,
      plantName,
      storagePath: row?.storage_path || row?.storagePath || "",
      publicUrl: appendCacheBuster(basePublicUrl, updatedAt),
      updatedAt,
      updatedBy: row?.updated_by || row?.updatedBy || ""
    };
  }

  function appendCacheBuster(url, updatedAt) {
    const normalizedUrl = String(url || "").trim();
    if (!normalizedUrl) {
      return "";
    }

    const versionValue = String(updatedAt || "").trim();
    if (!versionValue) {
      return normalizedUrl;
    }

    const joiner = normalizedUrl.includes("?") ? "&" : "?";
    return `${normalizedUrl}${joiner}v=${encodeURIComponent(versionValue)}`;
  }

  function setOverrides(rows) {
    const mappedOverrides = {};
    (rows || []).forEach((row) => {
      const mappedRow = mapOverrideRow(row);
      if (!mappedRow.plantKey || !mappedRow.publicUrl) {
        return;
      }

      mappedOverrides[mappedRow.plantKey] = mappedRow;
    });

    state.overrides = mappedOverrides;
    window.GARDENING_SHARED_IMAGE_OVERRIDES = mappedOverrides;
    dispatchSharedImagesUpdated();
  }

  function getSharedImageEntry(plantName) {
    const plantKey = slugifyPlantName(plantName);
    return state.overrides[plantKey] || null;
  }

  function getSharedImageUrl(plantName) {
    return getSharedImageEntry(plantName)?.publicUrl || "";
  }

  function buildPublicUrl(client, storagePath) {
    const { data } = client.storage.from(config.bucket).getPublicUrl(storagePath);
    return data?.publicUrl || "";
  }

  function loadSupabaseSdk() {
    if (window.supabase && typeof window.supabase.createClient === "function") {
      return Promise.resolve(window.supabase);
    }

    if (state.sdkLoadPromise) {
      return state.sdkLoadPromise;
    }

    state.sdkLoadPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector('script[data-supabase-browser-sdk="true"]');
      if (existingScript) {
        existingScript.addEventListener("load", () => resolve(window.supabase), { once: true });
        existingScript.addEventListener("error", () => reject(new Error("Supabase browser SDK failed to load.")), { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = SUPABASE_BROWSER_BUNDLE_URL;
      script.async = true;
      script.dataset.supabaseBrowserSdk = "true";
      script.onload = () => resolve(window.supabase);
      script.onerror = () => reject(new Error("Supabase browser SDK failed to load."));
      document.head.appendChild(script);
    }).finally(() => {
      state.sdkLoadPromise = null;
    });

    return state.sdkLoadPromise;
  }

  async function ensureClient() {
    if (!isConfigured()) {
      return null;
    }

    if (state.client) {
      return state.client;
    }

    if (state.clientLoadPromise) {
      return state.clientLoadPromise;
    }

    state.clientLoadPromise = loadSupabaseSdk()
      .then((sdk) => {
        if (!sdk || typeof sdk.createClient !== "function") {
          throw new Error("Supabase browser SDK is not available.");
        }

        const client = sdk.createClient(config.url, config.anonKey, {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
          }
        });

        state.client = client;

        if (!state.authSubscription) {
          const { data } = client.auth.onAuthStateChange((event, session) => {
            state.session = session || null;
            dispatchSharedAuthUpdated({ event });

            if (session) {
              loadSharedImageOverrides().catch((error) => {
                state.lastError = error;
                dispatchSharedAuthUpdated({ event: "IMAGE_REFRESH_ERROR" });
              });
            }
          });

          state.authSubscription = data?.subscription || null;
        }

        return client;
      })
      .finally(() => {
        state.clientLoadPromise = null;
      });

    return state.clientLoadPromise;
  }

  async function initializeSession() {
    const client = await ensureClient();
    if (!client) {
      state.session = null;
      dispatchSharedAuthUpdated({ event: "NOT_CONFIGURED" });
      return null;
    }

    const { data, error } = await client.auth.getSession();
    if (error) {
      state.lastError = error;
      dispatchSharedAuthUpdated({ event: "SESSION_ERROR" });
      throw error;
    }

    state.session = data?.session || null;
    state.lastError = null;
    dispatchSharedAuthUpdated({ event: "SESSION_LOADED" });
    return state.session;
  }

  async function loadSharedImageOverrides() {
    if (!isConfigured()) {
      setOverrides([]);
      return [];
    }

    if (state.overridesLoadPromise) {
      return state.overridesLoadPromise;
    }

    state.overridesLoadPromise = (async () => {
      const client = await ensureClient();
      if (!client) {
        return [];
      }

      const { data, error } = await client
        .from(config.table)
        .select("plant_key, plant_name, storage_path, public_url, updated_at, updated_by");

      if (error) {
        state.lastError = error;
        dispatchSharedAuthUpdated({ event: "OVERRIDES_ERROR" });
        throw error;
      }

      state.lastError = null;
      setOverrides(data || []);
      return Object.values(state.overrides);
    })().finally(() => {
      state.overridesLoadPromise = null;
    });

    return state.overridesLoadPromise;
  }

  async function signIn(email, password) {
    if (!isConfigured()) {
      throw new Error("Supabase is not configured yet.");
    }

    const client = await ensureClient();
    const { data, error } = await client.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      state.lastError = error;
      dispatchSharedAuthUpdated({ event: "SIGN_IN_ERROR" });
      throw error;
    }

    state.session = data?.session || null;
    state.lastError = null;
    dispatchSharedAuthUpdated({ event: "SIGNED_IN" });
    await loadSharedImageOverrides();
    return data;
  }

  async function signOut() {
    const client = await ensureClient();
    if (!client) {
      return;
    }

    const { error } = await client.auth.signOut();
    if (error) {
      state.lastError = error;
      dispatchSharedAuthUpdated({ event: "SIGN_OUT_ERROR" });
      throw error;
    }

    state.session = null;
    state.lastError = null;
    dispatchSharedAuthUpdated({ event: "SIGNED_OUT" });
  }

  async function uploadSharedPlantImage(plantName, file) {
    if (!isConfigured()) {
      throw new Error("Supabase is not configured yet.");
    }

    const client = await ensureClient();
    if (!state.session?.user) {
      throw new Error("Sign in before saving to the shared image library.");
    }

    const plantKey = slugifyPlantName(plantName);
    const extension = resolveFileExtension(file);
    const storagePath = `${config.folder}/${plantKey}.${extension}`;
    const existingEntry = getSharedImageEntry(plantName);

    if (existingEntry?.storagePath && existingEntry.storagePath !== storagePath) {
      const { error: removeError } = await client.storage.from(config.bucket).remove([existingEntry.storagePath]);
      if (removeError) {
        console.warn("Previous shared plant image could not be removed", existingEntry.storagePath, removeError);
      }
    }

    const { error: uploadError } = await client.storage
      .from(config.bucket)
      .upload(storagePath, file, {
        cacheControl: "3600",
        upsert: true,
        contentType: file.type || undefined
      });

    if (uploadError) {
      state.lastError = uploadError;
      dispatchSharedAuthUpdated({ event: "UPLOAD_ERROR" });
      throw uploadError;
    }

    const publicUrl = buildPublicUrl(client, storagePath);
    const updatedAt = new Date().toISOString();
    const row = {
      plant_key: plantKey,
      plant_name: plantName,
      storage_path: storagePath,
      public_url: publicUrl,
      updated_at: updatedAt,
      updated_by: state.session.user.id
    };

    const { error: upsertError } = await client.from(config.table).upsert(row, {
      onConflict: "plant_key"
    });

    if (upsertError) {
      state.lastError = upsertError;
      dispatchSharedAuthUpdated({ event: "UPSERT_ERROR" });
      throw upsertError;
    }

    await loadSharedImageOverrides();
    return getSharedImageEntry(plantName);
  }

  async function deleteSharedPlantImage(plantName) {
    if (!isConfigured()) {
      throw new Error("Supabase is not configured yet.");
    }

    const client = await ensureClient();
    if (!state.session?.user) {
      throw new Error("Sign in before deleting from the shared image library.");
    }

    const existingEntry = getSharedImageEntry(plantName);
    const plantKey = slugifyPlantName(plantName);

    if (existingEntry?.storagePath) {
      const { error: storageDeleteError } = await client.storage
        .from(config.bucket)
        .remove([existingEntry.storagePath]);

      if (storageDeleteError) {
        state.lastError = storageDeleteError;
        dispatchSharedAuthUpdated({ event: "DELETE_STORAGE_ERROR" });
        throw storageDeleteError;
      }
    }

    const { error: rowDeleteError } = await client
      .from(config.table)
      .delete()
      .eq("plant_key", plantKey);

    if (rowDeleteError) {
      state.lastError = rowDeleteError;
      dispatchSharedAuthUpdated({ event: "DELETE_ROW_ERROR" });
      throw rowDeleteError;
    }

    await loadSharedImageOverrides();
  }

  function resolveFileExtension(file) {
    const fileName = String(file?.name || "");
    const fileType = String(file?.type || "").toLowerCase();

    if (fileName.includes(".")) {
      return fileName.split(".").pop().toLowerCase();
    }

    if (fileType.startsWith("image/")) {
      const subtype = fileType.split("/")[1] || "jpg";
      return subtype === "jpeg" ? "jpg" : subtype;
    }

    return "jpg";
  }

  window.GARDENING_SHARED_IMAGE_SERVICE = {
    config,
    isConfigured,
    getSession: () => state.session,
    getSharedImageEntry,
    getSharedImageUrl,
    loadSharedImageOverrides,
    signIn,
    signOut,
    uploadSharedPlantImage,
    deleteSharedPlantImage
  };

  if (!isConfigured()) {
    dispatchSharedAuthUpdated({ event: "NOT_CONFIGURED" });
    dispatchSharedImagesUpdated();
    return;
  }

  initializeSession()
    .then(() => loadSharedImageOverrides())
    .catch((error) => {
      state.lastError = error;
      dispatchSharedAuthUpdated({ event: "BOOT_ERROR" });
      dispatchSharedImagesUpdated({ error });
    });
})();
