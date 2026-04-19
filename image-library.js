const IMAGE_LIBRARY_STORAGE_PREFIX = "gardeningPlannerImage:";
const IMAGE_LIBRARY_PREVIEW_CLEAR_PREFIX = "gardeningPlannerImagePreviewClear:";
const imageLibraryGrid = document.getElementById("imageLibraryGrid");
const imageLibraryStatus = document.getElementById("imageLibraryStatus");
const imageLibraryCount = document.getElementById("imageLibraryCount");
const imageLibrarySearch = document.getElementById("imageLibrarySearch");
const DEFAULT_VISIBLE_SLOTS = 50;
const PREFERRED_IMAGE_LIBRARY_ORIGIN = "https://plantplanner.ca";
const imageFileMaps = window.GARDENING_IMAGE_FILE_MAPS || {
  popularLocal: {},
  mappedLocal: {},
  remote: {}
};

let allPlantSlots = [];
let filteredPlantSlots = [];
let activePasteSlotIndex = -1;

redirectImageLibraryToPreferredOrigin();
initializeImageLibrary();

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

function initializeImageLibrary() {
  if (!imageLibraryGrid || !window.GARDENING_PLANTS) {
    return;
  }

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

  filteredPlantSlots = getFilteredSlots("");
  renderImageLibrary();

  if (imageLibrarySearch) {
    imageLibrarySearch.addEventListener("input", () => {
      const query = imageLibrarySearch.value.trim().toLowerCase();
      filteredPlantSlots = getFilteredSlots(query);
      renderImageLibrary();
    });
  }

  document.addEventListener("paste", handleImagePaste);
}

function getFilteredSlots(query) {
  if (!query) {
    return allPlantSlots.slice(0, DEFAULT_VISIBLE_SLOTS);
  }

  return allPlantSlots.filter((slot) =>
    slot.name.toLowerCase().includes(query) ||
    slot.latinName.toLowerCase().includes(query)
  );
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
    imageLibraryCount.textContent = `${filteredPlantSlots.length} plants shown`;
  }
}

function renderSlotCard(slot, index) {
  const storedImage = getStoredImage(slot.name);
  const previewState = getPreviewState(slot, storedImage, isPreviewCleared(slot.name));
  const selectedClass = activePasteSlotIndex === index ? " is-selected" : "";
  const deleteLabel = previewState.src ? "Delete Current Image" : "No Image to Delete";
  const deleteDisabled = previewState.src ? "" : " disabled";
  const restoreButton = previewState.isCleared && slot.previewCandidates.length > 0
    ? `<button class="secondary-button compact-button ghost-button" type="button" data-action="restore" data-index="${index}">Restore Wired Image</button>`
    : "";

  return `
    <article class="image-slot-card${selectedClass}" id="image-slot-card-${index}" data-index="${index}" tabindex="0">
      <div class="image-slot-header">
        <div>
          <h3>${escapeHtml(slot.name)}</h3>
          <p class="latin-name">${escapeHtml(slot.latinName)}</p>
          <p class="image-slot-file">${escapeHtml(slot.category)} | suggested file: ${escapeHtml(slot.fileHint)}</p>
        </div>
      </div>
      <div class="image-dropzone" id="image-dropzone-${index}" tabindex="0" role="button" aria-label="Photo slot for ${escapeAttribute(slot.name)}">
        ${renderDropzoneContent(slot, index, previewState)}
      </div>
      <input class="image-slot-input" id="image-slot-input-${index}" type="file" accept="image/*">
      <div class="image-slot-actions">
        <button class="secondary-button compact-button" type="button" data-action="choose" data-index="${index}">Choose File</button>
        <button class="secondary-button compact-button ghost-button" type="button" data-action="paste" data-index="${index}">Paste</button>
        ${restoreButton}
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
    : `<div class="image-slot-placeholder">${previewState.isCleared ? "Preview cleared. Paste or choose a replacement." : "No wired image yet"}</div>`;

  return `
    ${previewMarkup}
    <div class="image-dropzone-overlay">
      <span class="image-source-chip ${previewState.badgeClass}" id="image-source-chip-${index}">${escapeHtml(previewState.label)}</span>
      <span class="image-dropzone-hint">${escapeHtml(previewState.hint)}</span>
    </div>
  `;
}

function getPreviewState(slot, storedImage, isCleared) {
  if (storedImage) {
    return {
      src: storedImage,
      candidates: [],
      fallback: "",
      label: "Browser override",
      badgeClass: "is-saved",
      hint: "Drop, paste, or choose a replacement",
      isCleared: false
    };
  }

  if (isCleared) {
    return {
      src: "",
      candidates: [],
      fallback: "",
      label: "Paste-ready slot",
      badgeClass: "is-empty",
      hint: slot.previewCandidates.length > 0
        ? "Paste or choose a replacement"
        : "Drop, paste, or choose a new image",
      isCleared: true
    };
  }

  if (slot.previewCandidates.length > 0) {
    const firstCandidate = slot.previewCandidates[0];
    const sourceMeta = getSourceBadgeMeta(firstCandidate);

    return {
      src: firstCandidate,
      candidates: slot.previewCandidates,
      fallback: slot.fallbackImage || "",
      label: sourceMeta.label,
      badgeClass: sourceMeta.badgeClass,
      hint: "Drop, paste, or choose a replacement",
      isCleared: false
    };
  }

  return {
    src: "",
    candidates: [],
    fallback: "",
    label: "Drop-in ready",
    badgeClass: "is-empty",
    hint: "Drop, paste, or double-click",
    isCleared: false
  };
}

function attachSlotEvents(slot, index) {
  const input = document.getElementById(`image-slot-input-${index}`);
  const dropzone = document.getElementById(`image-dropzone-${index}`);
  const chooseButton = document.querySelector(`[data-action="choose"][data-index="${index}"]`);
  const pasteButton = document.querySelector(`[data-action="paste"][data-index="${index}"]`);
  const deleteButton = document.querySelector(`[data-action="delete"][data-index="${index}"]`);
  const restoreButton = document.querySelector(`[data-action="restore"][data-index="${index}"]`);
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
      const file = event.currentTarget.files && event.currentTarget.files[0];
      if (!file) {
        return;
      }
      await saveImageFromFile(slot.name, file);
      updateSlotPreview(slot, index);
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
      await saveImageFromFile(slot.name, file);
      updateSlotPreview(slot, index);
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
    const sourceMeta = getSourceBadgeMeta(previewImage.currentSrc || previewImage.src, storedImage);
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

  const clipboardImage = await extractClipboardImage(event);
  if (clipboardImage.file) {
    await saveImageFromFile(slot.name, clipboardImage.file);
    updateSlotPreview(slot, index);
    return true;
  }

  if (clipboardImage.src) {
    saveImageValue(slot.name, clipboardImage.src);
    updateSlotPreview(slot, index);
    return true;
  }

  setStatus(`Clipboard did not include a usable image for ${slot.name}. Try drag and drop or Choose File.`);
  return false;
}

async function pasteImageFromClipboard(slot, index) {
  const clipboardImage = await extractClipboardImage();
  if (clipboardImage.file) {
    await saveImageFromFile(slot.name, clipboardImage.file);
    updateSlotPreview(slot, index);
    return true;
  }

  if (clipboardImage.src) {
    saveImageValue(slot.name, clipboardImage.src);
    updateSlotPreview(slot, index);
    return true;
  }

  setStatus(`Clipboard did not expose a usable image for ${slot.name}. Try Ctrl+V after clicking the card, or use Choose File.`);
  return false;
}

async function saveImageFromFile(plantName, file) {
  const dataUrl = await readFileAsDataUrl(file);
  saveImageValue(plantName, dataUrl);
}

function saveImageValue(plantName, value) {
  try {
    clearPreviewClearedState(plantName);
    window.localStorage.setItem(getImageKey(plantName), value);
    setStatus(`Saved image for ${plantName}.`);
  } catch {
    setStatus("Image could not be saved. The browser storage limit may have been reached.");
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
      if (/^(data:image\/|https?:\/\/)/i.test(text)) {
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

function getSourceBadgeMeta(src, storedImage = "") {
  if (storedImage) {
    return {
      label: "Browser override",
      badgeClass: "is-saved"
    };
  }

  const value = String(src || "");
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

  if (getStoredImage(slot.name) || slot.previewCandidates.length > 0) {
    setStatus(`Selected ${slot.name}. Drop, choose, use Paste, or press Ctrl+V to replace the current preview.`);
    return;
  }

  setStatus(`Selected ${slot.name}. You can drop, choose, use Paste, or press Ctrl+V here.`);
}
