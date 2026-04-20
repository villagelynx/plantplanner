(function initializeAdminLoginPage() {
  const PREFERRED_ADMIN_ORIGIN = "https://plantplanner.ca";
  const DEFAULT_IMAGE_LIBRARY_PATH = "./images.html";

  const adminLoginForm = document.getElementById("adminLoginForm");
  const adminLoginEmail = document.getElementById("adminLoginEmail");
  const adminLoginPassword = document.getElementById("adminLoginPassword");
  const adminLoginSubmit = document.getElementById("adminLoginSubmit");
  const adminLoginSignOut = document.getElementById("adminLoginSignOut");
  const adminLoginStatus = document.getElementById("adminLoginStatus");
  const adminLoginConfigStatus = document.getElementById("adminLoginConfigStatus");
  const adminLoginAuthStatus = document.getElementById("adminLoginAuthStatus");

  redirectAdminLoginToPreferredOrigin();
  initializeAdminLogin().catch((error) => {
    setStatus(`Could not open admin login. ${getErrorMessage(error)}`);
  });

  function redirectAdminLoginToPreferredOrigin() {
    if (typeof window === "undefined" || !window.location) {
      return;
    }

    const { protocol, hostname, pathname, search, hash } = window.location;
    const isNetlifyHost = /\.netlify\.app$/i.test(hostname);
    if (!isNetlifyHost || !/^https?:$/i.test(protocol)) {
      return;
    }

    const targetUrl = `${PREFERRED_ADMIN_ORIGIN}${pathname}${search}${hash}`;
    if (window.location.href === targetUrl) {
      return;
    }

    window.location.replace(targetUrl);
  }

  async function initializeAdminLogin() {
    if (!adminLoginForm) {
      return;
    }

    adminLoginForm.addEventListener("submit", handleAdminLoginSubmit);
    if (adminLoginSignOut) {
      adminLoginSignOut.addEventListener("click", handleAdminLoginSignOut);
    }

    window.addEventListener("gardening:shared-auth-updated", syncAdminLoginUi);
    syncAdminLoginUi();

    const sharedImageService = getSharedImageService();
    if (!sharedImageService?.isConfigured || !sharedImageService.isConfigured()) {
      setStatus("Supabase is not configured for admin login yet.");
      return;
    }

    const redirectMessage = getRedirectMessage();
    if (redirectMessage) {
      setStatus(redirectMessage);
    } else {
      setStatus("Checking admin login status...");
    }

    try {
      if (typeof sharedImageService.whenReady === "function") {
        await sharedImageService.whenReady();
      }
    } catch (error) {
      setStatus(`Could not verify admin login. ${getErrorMessage(error)}`);
      syncAdminLoginUi();
      return;
    }

    const session = sharedImageService.getSession?.();
    syncAdminLoginUi();

    if (session?.user?.email) {
      setStatus(`Already signed in as ${session.user.email}. Opening the Image Library...`);
      redirectToImageLibrary();
      return;
    }

    if (!redirectMessage) {
      setStatus("Sign in to continue to the admin image library.");
    }
  }

  function syncAdminLoginUi() {
    const sharedImageService = getSharedImageService();
    const isConfigured = Boolean(sharedImageService?.isConfigured && sharedImageService.isConfigured());
    const signedInEmail = sharedImageService?.getSession?.()?.user?.email || "";

    if (adminLoginConfigStatus) {
      adminLoginConfigStatus.textContent = isConfigured ? "Supabase ready" : "Supabase not configured";
      adminLoginConfigStatus.className = `image-source-chip ${isConfigured ? "is-project" : "is-empty"}`;
    }

    if (adminLoginAuthStatus) {
      adminLoginAuthStatus.textContent = signedInEmail || "Signed out";
      adminLoginAuthStatus.className = `image-source-chip ${signedInEmail ? "is-shared" : "is-empty"}`;
    }

    if (adminLoginEmail) {
      adminLoginEmail.disabled = !isConfigured || Boolean(signedInEmail);
    }

    if (adminLoginPassword) {
      adminLoginPassword.disabled = !isConfigured || Boolean(signedInEmail);
    }

    if (adminLoginSubmit) {
      adminLoginSubmit.disabled = !isConfigured || Boolean(signedInEmail);
      adminLoginSubmit.classList.add("auth-action-button");
      adminLoginSubmit.classList.toggle("is-ready", isConfigured && !signedInEmail);
      adminLoginSubmit.classList.remove("is-connected");
      adminLoginSubmit.textContent = signedInEmail ? "Signed In" : "Sign In";
    }

    if (adminLoginSignOut) {
      adminLoginSignOut.disabled = !signedInEmail;
      adminLoginSignOut.classList.add("auth-action-button");
      adminLoginSignOut.classList.toggle("is-connected", Boolean(signedInEmail));
    }
  }

  async function handleAdminLoginSubmit(event) {
    event.preventDefault();

    const email = adminLoginEmail?.value.trim() || "";
    const password = adminLoginPassword?.value || "";
    const sharedImageService = getSharedImageService();

    if (!sharedImageService?.isConfigured || !sharedImageService.isConfigured()) {
      setStatus("Supabase is not configured for admin login yet.");
      return;
    }

    if (!email || !password) {
      setStatus("Enter both the admin email and password to sign in.");
      return;
    }

    try {
      setStatus("Signing in to the admin image library...");
      await sharedImageService.signIn(email, password);
      if (adminLoginPassword) {
        adminLoginPassword.value = "";
      }
      setStatus(`Signed in as ${email}. Opening the Image Library...`);
      redirectToImageLibrary();
    } catch (error) {
      setStatus(`Could not sign in. ${getErrorMessage(error)}`);
    }
  }

  async function handleAdminLoginSignOut() {
    const sharedImageService = getSharedImageService();
    if (!sharedImageService?.signOut) {
      setStatus("Sign out is not available right now.");
      return;
    }

    try {
      await sharedImageService.signOut();
      setStatus("Signed out. You can sign in with a different admin account now.");
      syncAdminLoginUi();
    } catch (error) {
      setStatus(`Could not sign out. ${getErrorMessage(error)}`);
    }
  }

  function getSharedImageService() {
    return window.GARDENING_SHARED_IMAGE_SERVICE || null;
  }

  function getRedirectMessage() {
    try {
      return new URLSearchParams(window.location.search).get("message") || "";
    } catch {
      return "";
    }
  }

  function redirectToImageLibrary() {
    window.location.replace(getImageLibraryPath());
  }

  function getImageLibraryPath() {
    try {
      const nextPath = new URLSearchParams(window.location.search).get("next") || "";
      if (/^\.\//.test(nextPath) && !nextPath.includes("://")) {
        return nextPath;
      }
    } catch {
    }

    return DEFAULT_IMAGE_LIBRARY_PATH;
  }

  function setStatus(message) {
    if (adminLoginStatus) {
      adminLoginStatus.textContent = message;
    }
  }

  function getErrorMessage(error) {
    if (!error) {
      return "Unknown error.";
    }

    return error.message || String(error);
  }
})();
