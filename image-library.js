const IMAGE_LIBRARY_STORAGE_PREFIX = "gardeningPlannerImage:";
const IMAGE_LIBRARY_PREVIEW_CLEAR_PREFIX = "gardeningPlannerImagePreviewClear:";
const IMAGE_LIBRARY_SAVE_MODE_KEY = "gardeningPlannerImageSaveMode";
const imageLibraryGrid = document.getElementById("imageLibraryGrid");
const imageLibraryStatus = document.getElementById("imageLibraryStatus");
const imageLibraryCount = document.getElementById("imageLibraryCount");
const imageLibrarySearch = document.getElementById("imageLibrarySearch");
const imageLibraryLoadMore = document.getElementById("imageLibraryLoadMore");
const sharedImageAuthForm = document.getElementById("sharedImageAuthForm");
const sharedImageEmail = document.getElementById("sharedImageEmail");
const sharedImagePassword = document.getElementById("sharedImagePassword");
const sharedImageSignInButton = document.getElementById("sharedImageSignIn");
const sharedImageSignOutButton = document.getElementById("sharedImageSignOut");
const sharedImageConfigStatus = document.getElementById("sharedImageConfigStatus");
const sharedImageAuthStatus = document.getElementById("sharedImageAuthStatus");
const sharedImageConnectionSummary = document.getElementById("sharedImageConnectionSummary");
const imageSaveModeBrowserButton = document.getElementById("imageSaveModeBrowser");
const imageSaveModeSharedButton = document.getElementById("imageSaveModeShared");
const imageSaveModeHint = document.getElementById("imageSaveModeHint");
const libraryAdminCard = document.querySelector(".library-admin-card");
const imageLibraryGate = document.getElementById("imageLibraryGate");
const imageLibraryGateStatus = document.getElementById("imageLibraryGateStatus");
const imageLibraryContent = document.getElementById("imageLibraryContent");
const DEFAULT_VISIBLE_SLOTS = 50;
const PREFERRED_IMAGE_LIBRARY_ORIGIN = "https://plantplanner.ca";
const SHARED_UPLOAD_MAX_DIMENSION = 1800;
const SHARED_UPLOAD_SOFT_MAX_BYTES = 4.5 * 1024 * 1024;
const SUPPORTED_SHARED_UPLOAD_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif"
]);
const imageFileMaps = window.GARDENING_IMAGE_FILE_MAPS || {
  popularLocal: {},
  mappedLocal: {},
  remote: {}
};

let allPlantSlots = [];
let matchedPlantSlots = [];
let filteredPlantSlots = [];
let activePasteSlotIndex = -1;
let imageSaveMode = getStoredSaveMode();
let lastSharedSavedPlantName = "";
let hasCompletedAdminGateCheck = false;
let visibleSlotLimit = DEFAULT_VISIBLE_SLOTS;

redirectImageLibraryToPreferredOrigin();
initializeImageLibrary().catch((error) => {
  const message = `Could not open the admin image library. ${getErrorMessage(error)}`;
  setGateStatus(message);
  setStatus(message);
});

function redirectImageLibraryToPreferredOrigin() {
  if (typeof window === "undefined" || !window.location) {
    return;
  }

  const { protocol, hostname, pathname, search, hash } = window.location;
  const isNetlifyHost = /\.netlify\.app$/i.test(hostname);
  if (!isNetlifyHost || !/^https?:$/i.test(protocol)) {
    return;
  }

  const targetUrl = `${PREFERRED_IMAGE_LIBRARY_ORIGIN}${pathname}${search}${hash}`;
  if (window.location.href === targetUrl) {
    return;
  }

  window.location.replace(targetUrl);
}

async function initializeImageLibrary() {
  if (!imageLibraryGrid || !window.GARDENING_PLANTS) {
    return;
  }

  const hasAdminAccess = await ensureAdminAccess();
  if (!hasAdminAccess) {
    return;
  }

  initializeSharedAdminControls();

  allPlantSlots = [...window.GARDENING_PLANTS]
    .sort((a, b) => a.commonName.localeCompare(b.commonName))
    .map((plant) => {
      const mappedLocalSource = imageFileMaps.popularLocal[plant.commonName] || imageFileMaps.mappedLocal[plant.commonName] || "";
      const mappedRemoteSource = imageFileMaps.remote[plant.commonName] || "";

      return {
        name: plant.commonName,
        latinName: plant.latinName,
        category: plant.category,
        fileHint: `plants/${slugifyPlantName(plant.commonName)}.jpg`,
        fallbackImage: plant.fallbackImage || "",
        previewCandidates: dedupeValues([
          mappedLocalSource ? normalizePlantImagePath(mappedLocalSource) : "",
          mappedRemoteSource
        ])
      };
    });

  matchedPlantSlots = getMatchedSlots("");
  filteredPlantSlots = getVisibleFilteredSlots();
  renderImageLibrary();

  if (imageLibrarySearch) {
    imageLibrarySearch.addEventListener("input", () => {
      const query = imageLibrarySearch.value.trim().toLowerCase();
      visibleSlotLimit = DEFAULT_VISIBLE_SLOTS;
      matchedPlantSlots = getMatchedSlots(query);
      filteredPlantSlots = getVisibleFilteredSlots();
      renderImageLibrary();
    });
  }

  if (imageLibraryLoadMore) {
    imageLibraryLoadMore.addEventListener("click", () => {
      visibleSlotLimit += DEFAULT_VISIBLE_SLOTS;
      filteredPlantSlots = getVisibleFilteredSlots();
      renderImageLibrary();
    });
  }

  document.addEventListener("paste", handleImagePaste);
  window.addEventListener("gardening:shared-images-updated", handleSharedImagesUpdated);
  window.addEventListener("gardening:shared-auth-updated", syncSharedAdminControls);

  setImageLibraryVisibility(true);
}

async function ensureAdminAccess() {
  const sharedImageService = getSharedImageService();
  if (!sharedImageService?.isConfigured || !sharedImageService.isConfigured()) {
    setGateStatus("Supabase is not configured for the admin image library yet.");
    return false;
  }

  setGateStatus("Checking your admin sign-in...");

  try {
    if (typeof sharedImageService.whenReady === "function") {
      await sharedImageService.whenReady();
    }
  } catch (error) {
    setGateStatus(`Could not verify admin access. ${getErrorMessage(error)}`);
    return false;
  }

  const currentSession = sharedImageService.getSession?.();
  if (!currentSession?.user?.email) {
    redirectToAdminLogin("Sign in to open the Plant Planner Image Library.");
    return false;
  }

  hasCompletedAdminGateCheck = true;
  return true;
}

function setImageLibraryVisibility(isVisible) {
  if (imageLibraryContent) {
    imageLibraryContent.hidden = !isVisible;
  }

  if (imageLibraryGate) {
    imageLibraryGate.hidden = isVisible;
  }
}

function setGateStatus(message) {
  if (imageLibraryGateStatus) {
    imageLibraryGateStatus.textContent = message;
  }
}

function redirectToAdminLogin(message) {
  const redirectUrl = new URL("./admin-login.html", window.location.href);
  redirectUrl.searchParams.set("next", "./images.html");
  if (message) {
    redirectUrl.searchParams.set("message", message);
  }

  window.location.replace(redirectUrl.toString());
}

function getMatchedSlots(query) {
  if (!query) {
    return [...allPlantSlots];
  }

  return allPlantSlots.filter((slot) =>
    slot.name.toLowerCase().includes(query) ||
    slot.latinName.toLowerCase().includes(query)
  );
}

function getVisibleFilteredSlots() {
  return matchedPlantSlots.slice(0, visibleSlotLimit);
}

function renderImageLibrary() {
  imageLibraryGrid.innerHTML = filteredPlantSlots
    .map((slot, index) => renderSlotCard(slot, index))
    .join("");

  filteredPlantSlots.forEach((slot, index) => {
    attachSlotEvents(slot, index);
  });

  if (filteredPlantSlots.length === 1) {
    setActivePasteSlot(0);
  } else if (activePasteSlotIndex >= filteredPlantSlots.length) {
    activePasteSlotIndex = -1;
  }

  if (imageLibraryCount) {
    const showingCount = filteredPlantSlots.length;
    const totalMatches = matchedPlantSlots.length;
    imageLibraryCount.textContent = totalMatches > showingCount
      ? `${showingCount} of ${totalMatches} plants shown`
      : `${showingCount} plants shown`;
  }

  if (imageLibraryLoadMore) {
    const remainingCount = Math.max(0, matchedPlantSlots.length - filteredPlantSlots.length);
    if (remainingCount > 0) {
      const nextBatchCount = Math.min(DEFAULT_VISIBLE_SLOTS, remainingCount);
      imageLibraryLoadMore.hidden = false;
      imageLibraryLoadMore.textContent = `See next ${nextBatchCount} image spots`;
    } else {
      imageLibraryLoadMore.hidden = true;
      imageLibraryLoadMore.textContent = `See next ${DEFAULT_VISIBLE_SLOTS} image spots`;
    }
  }
}

function renderSlotCard(slot, index) {
  const storedImage = getStoredImage(slot.name);
  const previewState = getPreviewState(slot, storedImage, isPreviewCleared(slot.name));
  const actionState = getSlotActionState();
  const justSavedSharedImage = lastSharedSavedPlantName === slot.name && Boolean(previewState.sharedImage) && !storedImage;
  const selectedClass = activePasteSlotIndex === index ? " is-selected" : "";
  const successClass = justSavedSharedImage ? " is-shared-success" : "";
  const deleteLabel = previewState.src ? "Delete Current Image" : "No Image to Delete";
  const deleteDisabled = previewState.src ? "" : " disabled";
  const restoreButton = previewState.isCleared && previewState.restoreCandidates.length > 0
    ? `<button class="secondary-button compact-button ghost-button" type="button" data-action="restore" data-index="${index}">Restore Wired Image</button>`
    : "";
  const deleteSharedButton = previewState.sharedImage
    ? `<button class="secondary-button compact-button ghost-button" type="button" data-action="delete-shared" data-index="${index}">Delete Shared</button>`
    : "";
  const successBanner = justSavedSharedImage
    ? `<div class="image-slot-success-banner">Saved for everyone in Shared Library</div>`
    : "";

  return `
    <article class="image-slot-card${selectedClass}${successClass}" id="image-slot-card-${index}" data-index="${index}" tabindex="0">
      <div class="image-slot-header">
        <div>
          <h3>${escapeHtml(slot.name)}</h3>
          <p class="latin-name">${escapeHtml(slot.latinName)}</p>
          <p class="image-slot-file">${escapeHtml(slot.category)} | suggested file: ${escapeHtml(slot.fileHint)}</p>
        </div>
      </div>
      ${successBanner}
      <div class="image-dropzone" id="image-dropzone-${index}" tabindex="0" role="button" aria-label="Photo slot for ${escapeAttribute(slot.name)}">
        ${renderDropzoneContent(slot, index, previewState)}
      </div>
      <input class="image-slot-input" id="image-slot-input-${index}" type="file" accept="image/*">
      <div class="image-slot-actions">
        <button class="secondary-button compact-button" type="button" data-action="choose" data-index="${index}">${escapeHtml(actionState.chooseLabel)}</button>
        <button class="secondary-button compact-button ghost-button" type="button" data-action="paste" data-index="${index}"${actionState.pasteDisabled ? " disabled" : ""}>${escapeHtml(actionState.pasteLabel)}</button>
        ${restoreButton}
        ${deleteSharedButton}
        <button class="secondary-button compact-button danger-button" type="button" data-action="delete" data-index="${index}"${deleteDisabled}>${deleteLabel}</button>
      </div>
    </article>
  `;
}

function renderDropzoneContent(slot, index, previewState) {
  const previewMarkup = previewState.src
    ? `<img
        src="${escapeAttribute(previewState.src)}"
        alt="${escapeAttribute(`${slot.name} preview`)}"
        class="image-slot-preview"
        loading="lazy"
        decoding="async"
        ${previewState.candidates.length > 0 ? `data-image-candidates="${escapeAttribute(serializeImageCandidates(previewState.candidates))}" data-image-candidate-index="0" data-fallback="${escapeAttribute(previewState.fallback)}" onerror="window.GARDENING_HANDLE_PLANT_IMAGE_ERROR && window.GARDENING_HANDLE_PLANT_IMAGE_ERROR(this)"` : ""}
      >`
    : `<div class="image-slot-placeholder">${previewState.isCleared ? getClearedPreviewMessage() : "No wired image yet"}</div>`;

  return `
    ${previewMarkup}
    <div class="image-dropzone-overlay">
      <span class="image-source-chip ${previewState.badgeClass}" id="image-source-chip-${index}">${escapeHtml(previewState.label)}</span>
      <span class="image-dropzone-hint">${escapeHtml(previewState.hint)}</span>
    </div>
  `;
}

function getPreviewState(slot, storedImage, isCleared) {
  const sharedImage = getSharedImageUrl(slot.name);
  const wiredCandidates = dedupeValues([sharedImage, ...slot.previewCandidates]);
  const saveModeHint = getSlotSaveHint(Boolean(wiredCandidates.length));

  if (storedImage) {
    return {
      src: storedImage,
      candidates: dedupeValues([storedImage, ...wiredCandidates]),
      fallback: slot.fallbackImage || "",
      label: "Saved on this computer",
      badgeClass: "is-saved",
      hint: saveModeHint,
      isCleared: false,
      restoreCandidates: wiredCandidates,
      sharedImage
    };
  }

  if (isCleared) {
    return {
      src: "",
      candidates: [],
      fallback: "",
      label: shouldUseSharedSaveMode() ? "Replacement-ready slot" : "Paste-ready slot",
      badgeClass: "is-empty",
      hint: shouldUseSharedSaveMode()
        ? "Choose File or drop a replacement to share it"
        : (wiredCandidates.length > 0
          ? "Paste or choose a replacement"
          : "Drop, paste, or choose a new image"),
      isCleared: true,
      restoreCandidates: wiredCandidates,
      sharedImage
    };
  }

  if (wiredCandidates.length > 0) {
    const firstCandidate = wiredCandidates[0];
    const sourceMeta = getSourceBadgeMeta(firstCandidate, "", sharedImage);

    return {
      src: firstCandidate,
      candidates: wiredCandidates,
      fallback: slot.fallbackImage || "",
      label: sourceMeta.label,
      badgeClass: sourceMeta.badgeClass,
      hint: saveModeHint,
      isCleared: false,
      restoreCandidates: wiredCandidates,
      sharedImage
    };
  }

  return {
    src: "",
    candidates: [],
    fallback: "",
    label: "Drop-in ready",
    badgeClass: "is-empty",
    hint: getSlotSaveHint(false),
    isCleared: false,
    restoreCandidates: [],
    sharedImage: ""
  };
}

function getSlotActionState() {
  if (shouldUseSharedSaveMode()) {
    return {
      chooseLabel: "Choose File to Share",
      pasteLabel: "Paste (This Computer Only)",
      pasteDisabled: true
    };
  }

  return {
    chooseLabel: "Choose File",
    pasteLabel: "Paste",
    pasteDisabled: false
  };
}

function getSlotSaveHint(hasPreview) {
  if (shouldUseSharedSaveMode()) {
    return hasPreview
      ? "Choose File or drop a replacement to share it"
      : "Choose File or drop an image to share it";
  }

  return hasPreview
    ? "Drop, paste, or choose a replacement"
    : "Drop, paste, or double-click";
}

function getClearedPreviewMessage() {
  return shouldUseSharedSaveMode()
    ? "Preview cleared. Choose or drop a replacement to share it."
    : "Preview cleared. Paste or choose a replacement.";
}

function attachSlotEvents(slot, index) {
  const input = document.getElementById(`image-slot-input-${index}`);
  const dropzone = document.getElementById(`image-dropzone-${index}`);
  const chooseButton = document.querySelector(`[data-action="choose"][data-index="${index}"]`);
  const pasteButton = document.querySelector(`[data-action="paste"][data-index="${index}"]`);
  const deleteButton = document.querySelector(`[data-action="delete"][data-index="${index}"]`);
  const restoreButton = document.querySelector(`[data-action="restore"][data-index="${index}"]`);
  const deleteSharedButton = document.querySelector(`[data-action="delete-shared"][data-index="${index}"]`);
  const card = document.getElementById(`image-slot-card-${index}`);

  if (card) {
    ["click", "focusin"].forEach((eventName) => {
      card.addEventListener(eventName, () => {
        setActivePasteSlot(index);
      });
    });
  }

  if (input) {
    input.addEventListener("change", async (event) => {
      const target = event.currentTarget;
      const file = target.files && target.files[0];
      if (!file) {
        target.value = "";
        return;
      }

      try {
        const didSave = await saveImageFromFile(slot.name, file);
        if (didSave) {
          updateSlotPreview(slot, index);
        }
      } finally {
        target.value = "";
      }
    });
  }

  if (dropzone) {
    bindPreviewSourceStatus(slot, index, dropzone);

    ["click", "focus"].forEach((eventName) => {
      dropzone.addEventListener(eventName, () => {
        setActivePasteSlot(index);
      });
    });

    dropzone.addEventListener("contextmenu", () => {
      setActivePasteSlot(index);
      dropzone.focus();
    });

    dropzone.addEventListener("keydown", (event) => {
      const isPasteShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "v";
      if (isPasteShortcut) {
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (input) {
          input.click();
        }
        return;
      }

      if (event.key.length === 1) {
        event.preventDefault();
      }
    });

    dropzone.addEventListener("dblclick", () => {
      if (input) {
        input.click();
      }
    });

    dropzone.addEventListener("paste", async (event) => {
      const didSave = await trySavePastedImage(event, index);
      if (didSave) {
        event.preventDefault();
      }
    });

    ["dragenter", "dragover"].forEach((eventName) => {
      dropzone.addEventListener(eventName, (event) => {
        event.preventDefault();
        dropzone.classList.add("dragging");
      });
    });

    ["dragleave", "drop"].forEach((eventName) => {
      dropzone.addEventListener(eventName, (event) => {
        event.preventDefault();
        dropzone.classList.remove("dragging");
      });
    });

    dropzone.addEventListener("drop", async (event) => {
      const file = event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0];
      if (!file) {
        return;
      }
      const didSave = await saveImageFromFile(slot.name, file);
      if (didSave) {
        updateSlotPreview(slot, index);
      }
    });
  }

  if (chooseButton) {
    chooseButton.addEventListener("click", () => {
      setActivePasteSlot(index);
      if (input) {
        input.click();
      }
    });
  }

  if (pasteButton) {
    pasteButton.addEventListener("click", async () => {
      setActivePasteSlot(index);
      const didSave = await pasteImageFromClipboard(slot, index);
      if (!didSave) {
        focusSlotDropzone(index);
      }
    });
  }

  if (restoreButton) {
    restoreButton.addEventListener("click", () => {
      restorePreviewImage(slot.name);
      updateSlotPreview(slot, index);
      focusSlotDropzone(index);
    });
  }

  if (deleteSharedButton) {
    deleteSharedButton.addEventListener("click", async () => {
      setActivePasteSlot(index);
      const didDelete = await deleteSharedImage(slot.name);
      if (!didDelete) {
        focusSlotDropzone(index);
        return;
      }

      updateSlotPreview(slot, index);
      focusSlotDropzone(index);
    });
  }

  if (deleteButton) {
    deleteButton.addEventListener("click", () => {
      deletePreviewImage(slot);
      updateSlotPreview(slot, index);
      setActivePasteSlot(index);
      focusSlotDropzone(index);
      setStatus(`Cleared the current preview for ${slot.name}. Paste or choose a replacement image now.`);
    });
  }
}

function focusSlotDropzone(index) {
  const dropzone = document.getElementById(`image-dropzone-${index}`);
  if (dropzone) {
    dropzone.focus();
  }
}

function deletePreviewImage(slot) {
  clearStoredImage(slot.name, true);
  setPreviewCleared(slot.name, true);
}

function restorePreviewImage(plantName) {
  setPreviewCleared(plantName, false);
  setStatus(`Restored the wired preview for ${plantName}.`);
}

function bindPreviewSourceStatus(slot, index, dropzone) {
  const previewImage = dropzone.querySelector(".image-slot-preview");
  if (!previewImage) {
    return;
  }

  const syncSourceChip = () => {
    const storedImage = getStoredImage(slot.name);
    const sourceMeta = getSourceBadgeMeta(previewImage.currentSrc || previewImage.src, storedImage, getSharedImageUrl(slot.name));
    updateSourceChip(index, sourceMeta);
  };

  previewImage.addEventListener("load", syncSourceChip);

  if (previewImage.complete) {
    syncSourceChip();
  }
}

function updateSourceChip(index, sourceMeta) {
  const chip = document.getElementById(`image-source-chip-${index}`);
  if (!chip || !sourceMeta) {
    return;
  }

  chip.textContent = sourceMeta.label;
  chip.className = `image-source-chip ${sourceMeta.badgeClass}`;
}

async function handleImagePaste(event) {
  const slotIndex = resolvePasteSlotIndex(event);
  if (slotIndex < 0) {
    return;
  }

  const didSave = await trySavePastedImage(event, slotIndex);
  if (didSave) {
    event.preventDefault();
  }
}

async function trySavePastedImage(event, index) {
  const slot = filteredPlantSlots[index];
  if (!slot) {
    return false;
  }

  if (shouldUseSharedSaveMode()) {
    setStatus(`Paste saves on this computer only right now. Use Choose File or drag and drop to save ${slot.name} in Shared Library.`);
    return false;
  }

  const clipboardImage = await extractClipboardImage(event);
  if (clipboardImage.file) {
    const didSave = await saveImageFromFile(slot.name, clipboardImage.file);
    if (didSave) {
      updateSlotPreview(slot, index);
      return true;
    }

    return false;
  }

  if (clipboardImage.src) {
    if (isLocalFileClipboardReference(clipboardImage.src)) {
      setStatus(`Paste is not available for ${slot.name} from a copied Windows file reference. Use Choose File instead.`);
      return false;
    }

    const didSave = await saveImageValue(slot.name, clipboardImage.src);
    if (didSave) {
      updateSlotPreview(slot, index);
      return true;
    }

    return false;
  }

  setStatus(`Clipboard did not include a usable image for ${slot.name}. Try drag and drop or Choose File.`);
  return false;
}

async function pasteImageFromClipboard(slot, index) {
  if (shouldUseSharedSaveMode()) {
    setStatus(`Paste saves on this computer only right now. Use Choose File or drag and drop to save ${slot.name} in Shared Library.`);
    return false;
  }

  const clipboardImage = await extractClipboardImage();
  if (clipboardImage.file) {
    const didSave = await saveImageFromFile(slot.name, clipboardImage.file);
    if (didSave) {
      updateSlotPreview(slot, index);
      return true;
    }

    return false;
  }

  if (clipboardImage.src) {
    if (isLocalFileClipboardReference(clipboardImage.src)) {
      setStatus(`Paste is not available for ${slot.name} from this clipboard source. Use Choose File instead.`);
      return false;
    }

    const didSave = await saveImageValue(slot.name, clipboardImage.src);
    if (didSave) {
      updateSlotPreview(slot, index);
      return true;
    }

    return false;
  }

  setStatus(`Clipboard did not expose a usable image for ${slot.name}. Try Ctrl+V after clicking the card, or use Choose File.`);
  return false;
}

async function saveImageFromFile(plantName, file) {
  if (shouldUseSharedSaveMode()) {
    return saveSharedImageFromFile(plantName, file);
  }

  const dataUrl = await readFileAsDataUrl(file);
  return saveBrowserImageValue(plantName, dataUrl);
}

async function saveImageValue(plantName, value) {
  if (shouldUseSharedSaveMode()) {
    return saveSharedImageValue(plantName, value);
  }

  return saveBrowserImageValue(plantName, value);
}

function saveBrowserImageValue(plantName, value) {
  try {
    clearPreviewClearedState(plantName);
    window.localStorage.setItem(getImageKey(plantName), value);
    setStatus(`Saved image for ${plantName} on this computer only. It is not in the Shared Library yet.`);
    return true;
  } catch {
    setStatus("Image could not be saved. The browser storage limit may have been reached.");
    return false;
  }
}

async function saveSharedImageFromFile(plantName, file) {
  const sharedImageService = getSharedImageService();
  if (!sharedImageService?.isConfigured || !sharedImageService.isConfigured()) {
    setStatus("Supabase is not configured yet. Add your project URL and anon key in supabase-config.js first.");
    return false;
  }

  if (!sharedImageService.getSession || !sharedImageService.getSession()?.user) {
    setStatus("Sign in on the Admin Login page before saving to the shared image library.");
    return false;
  }

  try {
    setStatus(`Uploading shared image for ${plantName}...`);
    const preparedFile = await prepareSharedUploadFile(file, plantName);
    await sharedImageService.uploadSharedPlantImage(plantName, preparedFile);
    clearStoredImage(plantName, true);
    clearPreviewClearedState(plantName);
    lastSharedSavedPlantName = plantName;
    setStatus(`Saved image for ${plantName} in Shared Library. This photo is now available to everyone.`);
    return true;
  } catch (error) {
    setStatus(`Shared upload failed for ${plantName}. ${getErrorMessage(error)}`);
    return false;
  }
}

async function saveSharedImageValue(plantName, value) {
  try {
    const imageFile = await createFileFromImageSource(plantName, value);
    return saveSharedImageFromFile(plantName, imageFile);
  } catch (error) {
    setStatus(`Shared upload needs real image bytes for ${plantName}. If you copied from a webpage or Windows file list, use Choose File instead. ${getErrorMessage(error)}`);
    return false;
  }
}

async function deleteSharedImage(plantName) {
  const sharedImageService = getSharedImageService();
  if (!sharedImageService?.isConfigured || !sharedImageService.isConfigured()) {
    setStatus("Supabase is not configured yet, so there is no shared image library to delete from.");
    return false;
  }

  if (!sharedImageService.getSession || !sharedImageService.getSession()?.user) {
    setStatus("Sign in on the Admin Login page before deleting from the shared image library.");
    return false;
  }

  try {
    await sharedImageService.deleteSharedPlantImage(plantName);
    if (lastSharedSavedPlantName === plantName) {
      lastSharedSavedPlantName = "";
    }
    setStatus(`Deleted the shared image for ${plantName}.`);
    return true;
  } catch (error) {
    setStatus(`Could not delete the shared image for ${plantName}. ${getErrorMessage(error)}`);
    return false;
  }
}

function updateSlotPreview(slot, index) {
  const card = document.getElementById(`image-slot-card-${index}`);
  if (!card) {
    return;
  }

  card.outerHTML = renderSlotCard(slot, index);
  attachSlotEvents(slot, index);

  if (activePasteSlotIndex === index) {
    setActivePasteSlot(index);
  }
}

function getStoredImage(plantName) {
  try {
    return window.localStorage.getItem(getImageKey(plantName)) || "";
  } catch {
    return "";
  }
}

function resolvePasteSlotIndex(event) {
  const target = event.target;
  const isDropzoneTarget = target instanceof HTMLElement && target.classList.contains("image-dropzone");
  const isSearchTarget = target === imageLibrarySearch;

  if (isSearchTarget && filteredPlantSlots.length === 1) {
    return 0;
  }

  if (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    (target instanceof HTMLElement && target.isContentEditable && !isDropzoneTarget)
  ) {
    return -1;
  }

  if (activePasteSlotIndex >= 0 && activePasteSlotIndex < filteredPlantSlots.length) {
    return activePasteSlotIndex;
  }

  if (filteredPlantSlots.length === 1) {
    return 0;
  }

  return -1;
}

async function extractClipboardImage(event) {
  const eventClipboardImage = extractClipboardImageFromDataTransfer(event?.clipboardData);
  if (eventClipboardImage.file || eventClipboardImage.src) {
    return eventClipboardImage;
  }

  const navigatorClipboardImage = await extractClipboardImageFromNavigator();
  if (navigatorClipboardImage.file || navigatorClipboardImage.src) {
    return navigatorClipboardImage;
  }

  return { file: null, src: "" };
}

function extractClipboardImageFromDataTransfer(clipboardData) {
  if (!clipboardData) {
    return { file: null, src: "" };
  }

  const files = Array.from(clipboardData.files || []);
  const imageFile = files.find((file) => file && file.type && file.type.startsWith("image/"));
  if (imageFile) {
    return { file: imageFile, src: "" };
  }

  const items = Array.from(clipboardData.items || []);
  const imageItem = items.find((item) => item.type && item.type.startsWith("image/"));
  if (imageItem) {
    const file = imageItem.getAsFile();
    if (file) {
      return { file, src: "" };
    }
  }

  const html = clipboardData.getData("text/html") || "";
  if (html) {
    try {
      const doc = new DOMParser().parseFromString(html, "text/html");
      const image = doc.querySelector("img[src]");
      if (image && image.getAttribute("src")) {
        return { file: null, src: image.getAttribute("src") };
      }
    } catch {
    }
  }

  const text = clipboardData.getData("text/plain") || "";
  if (/^(data:image\/|https?:\/\/)/i.test(text.trim())) {
    return { file: null, src: text.trim() };
  }

  if (/^(file:\/\/|[a-zA-Z]:\\)/.test(text.trim())) {
    return { file: null, src: text.trim() };
  }

  return { file: null, src: "" };
}

async function extractClipboardImageFromNavigator() {
  if (!navigator.clipboard) {
    return { file: null, src: "" };
  }

  if (typeof navigator.clipboard.read === "function") {
    try {
      const items = await navigator.clipboard.read();
      for (const item of items) {
        const imageType = item.types.find((type) => /^image\//i.test(type));
        if (!imageType) {
          continue;
        }

        const blob = await item.getType(imageType);
        if (!blob) {
          continue;
        }

        const extension = imageType.split("/")[1] || "png";
        const file = new File([blob], `clipboard-image.${extension}`, { type: imageType });
        return { file, src: "" };
      }
    } catch {
    }
  }

  if (typeof navigator.clipboard.readText === "function") {
    try {
      const text = (await navigator.clipboard.readText()).trim();
      if (/^(data:image\/|https?:\/\/|file:\/\/|[a-zA-Z]:\\)/i.test(text)) {
        return { file: null, src: text };
      }
    } catch {
    }
  }

  return { file: null, src: "" };
}

function clearStoredImage(plantName, quiet = false) {
  try {
    window.localStorage.removeItem(getImageKey(plantName));
    if (!quiet) {
      setStatus(`Cleared saved override for ${plantName}.`);
    }
  } catch {
    if (!quiet) {
      setStatus("Could not clear that image.");
    }
  }
}

function isPreviewCleared(plantName) {
  try {
    return window.sessionStorage.getItem(getPreviewClearKey(plantName)) === "1";
  } catch {
    return false;
  }
}

function setPreviewCleared(plantName, value) {
  try {
    if (value) {
      window.sessionStorage.setItem(getPreviewClearKey(plantName), "1");
    } else {
      window.sessionStorage.removeItem(getPreviewClearKey(plantName));
    }
  } catch {
  }
}

function clearPreviewClearedState(plantName) {
  setPreviewCleared(plantName, false);
}

function getPreviewClearKey(plantName) {
  return `${IMAGE_LIBRARY_PREVIEW_CLEAR_PREFIX}${slugifyPlantName(plantName)}`;
}

function getImageKey(plantName) {
  return `${IMAGE_LIBRARY_STORAGE_PREFIX}${slugifyPlantName(plantName)}`;
}

function slugifyPlantName(name) {
  return String(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizePlantImagePath(path) {
  if (typeof window.GARDENING_NORMALIZE_PLANT_IMAGE_PATH === "function") {
    return window.GARDENING_NORMALIZE_PLANT_IMAGE_PATH(path);
  }

  if (/^(data:|https?:\/\/|\.\/|\/)/i.test(path)) {
    return path;
  }

  return `./images/${path}`;
}

function serializeImageCandidates(candidates) {
  try {
    return encodeURIComponent(JSON.stringify(candidates || []));
  } catch {
    return "";
  }
}

function getSourceBadgeMeta(src, storedImage = "", sharedImage = "") {
  if (storedImage) {
    return {
      label: "Saved on this computer",
      badgeClass: "is-saved"
    };
  }

  const value = String(src || "");
  if (sharedImage && value === sharedImage) {
    return {
      label: "Saved in Shared Library",
      badgeClass: "is-shared"
    };
  }

  if (isRemoteImagePath(value)) {
    return {
      label: "Wired remote image",
      badgeClass: "is-remote"
    };
  }

  if (isProjectImagePath(value)) {
    return {
      label: "Project image",
      badgeClass: "is-project"
    };
  }

  return {
    label: "Drop-in ready",
    badgeClass: "is-empty"
  };
}

function isRemoteImagePath(value) {
  return /^https?:\/\//i.test(String(value || ""));
}

function isProjectImagePath(value) {
  return /(^|\/)images\//i.test(String(value || ""));
}

function dedupeValues(values) {
  return Array.from(new Set((values || []).filter(Boolean)));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function getSharedImageService() {
  return window.GARDENING_SHARED_IMAGE_SERVICE || null;
}

function getSharedImageUrl(plantName) {
  const sharedImageService = getSharedImageService();
  if (!sharedImageService?.getSharedImageUrl) {
    return "";
  }

  return sharedImageService.getSharedImageUrl(plantName) || "";
}

function getStoredSaveMode() {
  try {
    return window.localStorage.getItem(IMAGE_LIBRARY_SAVE_MODE_KEY) === "shared" ? "shared" : "browser";
  } catch {
    return "browser";
  }
}

function storeSaveMode(mode) {
  try {
    window.localStorage.setItem(IMAGE_LIBRARY_SAVE_MODE_KEY, mode === "shared" ? "shared" : "browser");
  } catch {
  }
}

function shouldUseSharedSaveMode() {
  return imageSaveMode === "shared";
}

function initializeSharedAdminControls() {
  if (sharedImageAuthForm) {
    sharedImageAuthForm.addEventListener("submit", handleSharedSignIn);
  }

  if (sharedImageSignOutButton) {
    sharedImageSignOutButton.addEventListener("click", handleSharedSignOut);
  }

  if (imageSaveModeBrowserButton) {
    imageSaveModeBrowserButton.addEventListener("click", () => {
      setImageSaveMode("browser");
    });
  }

  if (imageSaveModeSharedButton) {
    imageSaveModeSharedButton.addEventListener("click", () => {
      const sharedImageService = getSharedImageService();
      if (!sharedImageService?.isConfigured || !sharedImageService.isConfigured()) {
        setStatus("Supabase is not configured yet. Add your project URL and anon key in supabase-config.js first.");
        return;
      }

      setImageSaveMode("shared");
    });
  }

  syncSharedAdminControls();
}

function handleSharedImagesUpdated() {
  if (imageLibraryGrid) {
    renderImageLibrary();
  }

  syncSharedAdminControls();
}

function setImageSaveMode(mode) {
  const nextMode = mode === "shared" ? "shared" : "browser";
  const didChange = imageSaveMode !== nextMode;
  imageSaveMode = nextMode;
  storeSaveMode(imageSaveMode);
  syncSaveModeButtons();

  if (didChange && imageLibraryGrid) {
    renderImageLibrary();
  }
}

function syncSharedAdminControls() {
  const sharedImageService = getSharedImageService();
  const isConfigured = Boolean(sharedImageService?.isConfigured && sharedImageService.isConfigured());
  const currentSession = sharedImageService?.getSession ? sharedImageService.getSession() : null;
  const signedInEmail = currentSession?.user?.email || "";
  const savedMode = getStoredSaveMode();

  if (hasCompletedAdminGateCheck && isConfigured && !signedInEmail) {
    redirectToAdminLogin("Sign in to open the Plant Planner Image Library.");
    return;
  }

  if (imageSaveMode === "shared" && !isConfigured) {
    imageSaveMode = "browser";
    storeSaveMode(imageSaveMode);
  }

  if (signedInEmail && savedMode !== "browser" && imageSaveMode !== "shared") {
    setImageSaveMode("shared");
    return;
  }

  if (libraryAdminCard) {
    libraryAdminCard.classList.toggle("is-connected", Boolean(signedInEmail));
  }

  if (sharedImageConfigStatus) {
    sharedImageConfigStatus.textContent = isConfigured ? "Supabase ready" : "Supabase not configured";
    sharedImageConfigStatus.className = `image-source-chip ${isConfigured ? "is-project" : "is-empty"}`;
  }

  if (sharedImageAuthStatus) {
    sharedImageAuthStatus.textContent = signedInEmail ? signedInEmail : (isConfigured ? "Signed out" : "Shared sign-in unavailable");
    sharedImageAuthStatus.className = `image-source-chip ${signedInEmail ? "is-shared" : "is-empty"}`;
  }

  if (sharedImageEmail) {
    sharedImageEmail.disabled = !isConfigured || Boolean(signedInEmail);
  }

  if (sharedImagePassword) {
    sharedImagePassword.disabled = !isConfigured || Boolean(signedInEmail);
  }

  if (sharedImageSignInButton) {
    sharedImageSignInButton.disabled = !isConfigured || Boolean(signedInEmail);
    sharedImageSignInButton.classList.add("auth-action-button");
    sharedImageSignInButton.classList.toggle("is-ready", isConfigured && !signedInEmail);
    sharedImageSignInButton.classList.remove("is-connected");
    sharedImageSignInButton.textContent = signedInEmail ? "Signed In" : "Sign In";
  }

  if (sharedImageSignOutButton) {
    sharedImageSignOutButton.disabled = !signedInEmail;
    sharedImageSignOutButton.classList.add("auth-action-button");
    sharedImageSignOutButton.classList.toggle("is-connected", Boolean(signedInEmail));
    sharedImageSignOutButton.textContent = signedInEmail ? "Sign Out" : "Sign Out";
  }

  if (sharedImageConnectionSummary) {
    if (!isConfigured) {
      sharedImageConnectionSummary.textContent = "Supabase is not configured on this page yet.";
    } else if (signedInEmail) {
      sharedImageConnectionSummary.textContent = imageSaveMode === "shared"
        ? `Connected to Supabase as ${signedInEmail}. Shared uploads are live, and Shared Library is selected.`
        : `Connected to Supabase as ${signedInEmail}. You are still in This Browser Only mode right now.`;
    } else {
      sharedImageConnectionSummary.textContent = "Supabase is ready, but you are not signed in yet.";
    }
  }

  syncSaveModeButtons();
}

function syncSaveModeButtons() {
  const sharedImageService = getSharedImageService();
  const isConfigured = Boolean(sharedImageService?.isConfigured && sharedImageService.isConfigured());
  const signedIn = Boolean(sharedImageService?.getSession && sharedImageService.getSession()?.user);

  if (imageSaveModeBrowserButton) {
    imageSaveModeBrowserButton.classList.toggle("is-active", imageSaveMode === "browser");
  }

  if (imageSaveModeSharedButton) {
    imageSaveModeSharedButton.disabled = !isConfigured;
    imageSaveModeSharedButton.classList.toggle("is-active", imageSaveMode === "shared");
  }

  if (imageSaveModeHint) {
    if (!isConfigured) {
      imageSaveModeHint.textContent = "Fill in supabase-config.js first to turn on shared uploads for everyone.";
      return;
    }

    if (imageSaveMode === "shared" && !signedIn) {
      imageSaveModeHint.textContent = "Shared Library is selected, but you still need to sign in on the Admin Login page before Choose File or drag and drop can save for everyone. Paste stays local-only.";
      return;
    }

    imageSaveModeHint.textContent = imageSaveMode === "shared"
      ? "Shared Library mode is active. Use Choose File or drag and drop to save for everyone. Paste is disabled here so it does not quietly stay on this computer only."
      : "This Browser Only mode is active. New uploads are saved on this computer only and are not shared.";
  }
}

async function handleSharedSignIn(event) {
  event.preventDefault();

  const email = sharedImageEmail?.value.trim() || "";
  const password = sharedImagePassword?.value || "";
  const sharedImageService = getSharedImageService();

  if (!sharedImageService?.isConfigured || !sharedImageService.isConfigured()) {
    setStatus("Supabase is not configured yet. Add your project URL and anon key in supabase-config.js first.");
    return;
  }

  if (!email || !password) {
    setStatus("Enter both the admin email and password to sign in.");
    return;
  }

  try {
    setStatus("Signing in to the shared image library...");
    await sharedImageService.signIn(email, password);
    if (sharedImagePassword) {
      sharedImagePassword.value = "";
    }
    setImageSaveMode("shared");
    setStatus(`Signed in as ${email}. Shared uploads are ready.`);
  } catch (error) {
    setStatus(`Could not sign in. ${getErrorMessage(error)}`);
  }
}

async function handleSharedSignOut() {
  const sharedImageService = getSharedImageService();
  if (!sharedImageService?.signOut) {
    setStatus("Shared image sign-out is not available right now.");
    return;
  }

  try {
    await sharedImageService.signOut();
    setImageSaveMode("browser");
    redirectToAdminLogin("Signed out of the Plant Planner Image Library.");
  } catch (error) {
    setStatus(`Could not sign out. ${getErrorMessage(error)}`);
  }
}

async function createFileFromImageSource(plantName, value) {
  const imageSource = String(value || "").trim();
  if (!imageSource) {
    throw new Error("Clipboard did not include a usable image source.");
  }

  if (/^data:image\//i.test(imageSource)) {
    return createFileFromDataUrl(plantName, imageSource);
  }

  if (/^(blob:|file:)/i.test(imageSource)) {
    throw new Error("This pasted image came through as a browser or local-file reference. Use Choose File for shared uploads.");
  }

  if (/^[a-zA-Z]:\\/.test(imageSource)) {
    throw new Error("This pasted content is only a Windows file path. Web pages cannot read that directly, so use Choose File.");
  }

  const response = await fetch(imageSource);
  if (!response.ok) {
    throw new Error(`The image source returned ${response.status}.`);
  }

  const blob = await response.blob();
  if (!blob || !String(blob.type || "").startsWith("image/")) {
    throw new Error("The copied source was not an image file.");
  }

  const extension = getImageExtension(blob.type, imageSource);
  return new File([blob], `${slugifyPlantName(plantName)}.${extension}`, {
    type: blob.type || `image/${extension}`
  });
}

function createFileFromDataUrl(plantName, dataUrl) {
  const match = String(dataUrl || "").match(/^data:(image\/[^;]+);base64,(.+)$/i);
  if (!match) {
    throw new Error("The pasted image data URL could not be parsed.");
  }

  const contentType = match[1];
  const base64 = match[2];
  const extension = getImageExtension(contentType, "");
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return new File([bytes], `${slugifyPlantName(plantName)}.${extension}`, {
    type: contentType
  });
}

function getImageExtension(contentType, imageSource) {
  const normalizedType = String(contentType || "").toLowerCase();
  if (normalizedType.startsWith("image/")) {
    const subtype = normalizedType.split("/")[1] || "jpg";
    return subtype === "jpeg" ? "jpg" : subtype;
  }

  const sourcePath = String(imageSource || "").split("?")[0];
  if (sourcePath.includes(".")) {
    return sourcePath.split(".").pop().toLowerCase();
  }

  return "jpg";
}

function isLocalFileClipboardReference(value) {
  const text = String(value || "").trim();
  return /^(file:\/\/|[a-zA-Z]:\\)/i.test(text);
}

async function prepareSharedUploadFile(file, plantName) {
  if (!file || !String(file.type || "").startsWith("image/")) {
    throw new Error("Choose an image file before uploading.");
  }

  const normalizedType = String(file.type || "").toLowerCase();
  const needsNormalization = !SUPPORTED_SHARED_UPLOAD_TYPES.has(normalizedType);
  const needsCompression = file.size > SHARED_UPLOAD_SOFT_MAX_BYTES;

  if (!needsNormalization && !needsCompression) {
    return file;
  }

  let compressedFile;
  try {
    compressedFile = await compressImageFile(file, plantName);
  } catch (error) {
    if (needsNormalization) {
      throw new Error("That file type could not be prepared for Shared Library. Try JPG, PNG, or WEBP.");
    }

    throw error;
  }

  if (compressedFile.size <= SHARED_UPLOAD_SOFT_MAX_BYTES) {
    return compressedFile;
  }

  throw new Error("That image is still too large after compression. Try a smaller file or crop it before uploading.");
}

async function compressImageFile(file, plantName) {
  const imageBitmap = await loadImageBitmap(file);
  const dimensions = fitWithinBox(imageBitmap.width, imageBitmap.height, SHARED_UPLOAD_MAX_DIMENSION);
  const canvas = document.createElement("canvas");
  canvas.width = dimensions.width;
  canvas.height = dimensions.height;

  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("The browser could not prepare this image for upload.");
  }

  context.drawImage(imageBitmap, 0, 0, dimensions.width, dimensions.height);
  if (typeof imageBitmap.close === "function") {
    imageBitmap.close();
  }

  const qualities = [0.92, 0.84, 0.76, 0.68];
  let bestBlob = null;
  for (const quality of qualities) {
    const blob = await canvasToBlob(canvas, "image/webp", quality);
    if (!blob) {
      continue;
    }

    bestBlob = blob;
    if (blob.size <= SHARED_UPLOAD_SOFT_MAX_BYTES) {
      break;
    }
  }

  if (!bestBlob) {
    throw new Error("The browser could not compress this image for upload.");
  }

  return new File([bestBlob], `${slugifyPlantName(plantName)}.webp`, {
    type: "image/webp"
  });
}

function loadImageBitmap(file) {
  if (typeof createImageBitmap === "function") {
    return createImageBitmap(file);
  }

  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      resolve(image);
      URL.revokeObjectURL(url);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("The selected image could not be read."));
    };
    image.src = url;
  });
}

function fitWithinBox(width, height, maxDimension) {
  if (!width || !height || (width <= maxDimension && height <= maxDimension)) {
    return { width, height };
  }

  const scale = Math.min(maxDimension / width, maxDimension / height);
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale))
  };
}

function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve) => {
    canvas.toBlob(resolve, type, quality);
  });
}

function getErrorMessage(error) {
  return error?.message || "Please try again.";
}

function setStatus(message) {
  if (imageLibraryStatus) {
    imageLibraryStatus.textContent = message;
  }
}

function setActivePasteSlot(index) {
  activePasteSlotIndex = index;
  document.querySelectorAll(".image-slot-card").forEach((card) => {
    card.classList.toggle("is-selected", Number(card.dataset.index) === index);
  });

  const slot = filteredPlantSlots[index];
  if (!slot) {
    return;
  }

  if (isPreviewCleared(slot.name)) {
    setStatus(`Selected ${slot.name}. This slot is cleared and ready for paste, the Paste button, or Choose File.`);
    return;
  }

  if (getStoredImage(slot.name) || getSharedImageUrl(slot.name) || slot.previewCandidates.length > 0) {
    setStatus(`Selected ${slot.name}. Drop, choose, use Paste, or press Ctrl+V to replace the current preview.`);
    return;
  }

  setStatus(`Selected ${slot.name}. You can drop, choose, use Paste, or press Ctrl+V here.`);
}
