const IMAGE_LIBRARY_STORAGE_PREFIX = "gardeningPlannerImage:";
const imageLibraryGrid = document.getElementById("imageLibraryGrid");
const imageLibraryStatus = document.getElementById("imageLibraryStatus");
const imageLibraryCount = document.getElementById("imageLibraryCount");
const imageLibrarySearch = document.getElementById("imageLibrarySearch");
const DEFAULT_VISIBLE_SLOTS = 50;

let allPlantSlots = [];
let filteredPlantSlots = [];
let activePasteSlotIndex = -1;

initializeImageLibrary();

function initializeImageLibrary() {
  if (!imageLibraryGrid || !window.GARDENING_PLANTS) {
    return;
  }

  allPlantSlots = [...window.GARDENING_PLANTS]
    .sort((a, b) => a.commonName.localeCompare(b.commonName))
    .map((plant) => ({
      name: plant.commonName,
      latinName: plant.latinName,
      category: plant.category,
      fileHint: `plants/${slugifyPlantName(plant.commonName)}.jpg`
    }));

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

  if (imageLibraryCount) {
    imageLibraryCount.textContent = `${filteredPlantSlots.length} plants shown`;
  }
}

function renderSlotCard(slot, index) {
  const storedImage = getStoredImage(slot.name);
  const previewMarkup = storedImage
    ? `<img src="${storedImage}" alt="${slot.name} preview" class="image-slot-preview">`
    : `<div class="image-slot-placeholder">Drop, Paste, or Double-Click</div>`;

  const selectedClass = activePasteSlotIndex === index ? " is-selected" : "";

  return `
    <article class="image-slot-card${selectedClass}" id="image-slot-card-${index}" data-index="${index}" tabindex="0">
      <div class="image-slot-header">
        <div>
          <h3>${slot.name}</h3>
          <p class="latin-name">${slot.latinName}</p>
          <p class="image-slot-file">${slot.category} | suggested file: ${slot.fileHint}</p>
        </div>
      </div>
      <div class="image-dropzone" id="image-dropzone-${index}" tabindex="0" contenteditable="true" spellcheck="false" role="button" aria-label="Photo slot for ${slot.name}">
        ${previewMarkup}
      </div>
      <input class="image-slot-input" id="image-slot-input-${index}" type="file" accept="image/*">
      <div class="image-slot-actions">
        <button class="secondary-button compact-button" type="button" data-action="clear" data-index="${index}">Clear</button>
      </div>
    </article>
  `;
}

function attachSlotEvents(slot, index) {
  const input = document.getElementById(`image-slot-input-${index}`);
  const dropzone = document.getElementById(`image-dropzone-${index}`);
  const clearButton = document.querySelector(`[data-action="clear"][data-index="${index}"]`);
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
      if (!isPasteShortcut) {
        event.preventDefault();
      }
    });

    dropzone.addEventListener("beforeinput", (event) => {
      if (event.inputType !== "insertFromPaste") {
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

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      clearStoredImage(slot.name);
      updateSlotPreview(slot, index);
    });
  }
}

async function handleImagePaste(event) {
  const target = event.target;
  const isDropzoneTarget = target instanceof HTMLElement && target.classList.contains("image-dropzone");
  if (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    (target instanceof HTMLElement && target.isContentEditable && !isDropzoneTarget)
  ) {
    return;
  }

  if (activePasteSlotIndex < 0 || activePasteSlotIndex >= filteredPlantSlots.length) {
    return;
  }

  const didSave = await trySavePastedImage(event, activePasteSlotIndex);
  if (didSave) {
    event.preventDefault();
  }
}

async function trySavePastedImage(event, index) {
  const items = event.clipboardData && event.clipboardData.items;
  if (!items) {
    return false;
  }

  const imageItem = Array.from(items).find((item) => item.type && item.type.startsWith("image/"));
  if (!imageItem) {
    return false;
  }

  const file = imageItem.getAsFile();
  if (!file) {
    return false;
  }

  const slot = filteredPlantSlots[index];
  if (!slot) {
    return false;
  }

  await saveImageFromFile(slot.name, file);
  updateSlotPreview(slot, index);
  return true;
}

async function saveImageFromFile(plantName, file) {
  const dataUrl = await readFileAsDataUrl(file);
  try {
    window.localStorage.setItem(getImageKey(plantName), dataUrl);
    setStatus(`Saved image for ${plantName}.`);
  } catch {
    setStatus("Image could not be saved. The browser storage limit may have been reached.");
  }
}

function updateSlotPreview(slot, index) {
  const dropzone = document.getElementById(`image-dropzone-${index}`);
  const input = document.getElementById(`image-slot-input-${index}`);
  const storedImage = getStoredImage(slot.name);

  if (!dropzone) {
    return;
  }

  dropzone.innerHTML = storedImage
    ? `<img src="${storedImage}" alt="${slot.name} preview" class="image-slot-preview">`
    : `<div class="image-slot-placeholder">Drop, Paste, or Double-Click</div>`;

  if (input) {
    input.value = "";
  }
}

function getStoredImage(plantName) {
  try {
    return window.localStorage.getItem(getImageKey(plantName)) || "";
  } catch {
    return "";
  }
}

function clearStoredImage(plantName) {
  try {
    window.localStorage.removeItem(getImageKey(plantName));
    setStatus(`Cleared image for ${plantName}.`);
  } catch {
    setStatus("Could not clear that image.");
  }
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
  if (slot) {
    setStatus(`Selected ${slot.name}. You can drop, choose, or paste an image here.`);
  }
}
