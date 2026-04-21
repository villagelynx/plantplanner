const plantGuideTitle = document.getElementById("plantGuideTitle");
const plantGuideLatin = document.getElementById("plantGuideLatin");
const plantGuideSummary = document.getElementById("plantGuideSummary");
const plantGuideImage = document.getElementById("plantGuideImage");
const plantGuideFacts = document.getElementById("plantGuideFacts");
const plantGuideSections = document.getElementById("plantGuideSections");
let currentGuidePlant = null;

initializePlantGuidePage();
bindSharedGuideImageRefresh();

function initializePlantGuidePage() {
  if (!plantGuideTitle || !plantGuideSections || !window.GARDENING_PLANTS || !window.GARDENING_GET_PLANT_GUIDE_BY_SLUG) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("plant") || "";
  const guide = window.GARDENING_GET_PLANT_GUIDE_BY_SLUG(slug);

  if (!guide) {
    renderGuideNotFound();
    return;
  }

  const plant = window.GARDENING_PLANTS.find((entry) => entry.commonName === guide.commonName);
  if (!plant) {
    renderGuideNotFound();
    return;
  }

  currentGuidePlant = plant;

  document.title = `${plant.commonName} Plant Guide | Plant Planner`;
  plantGuideTitle.textContent = `${plant.commonName} Plant Guide`;
  plantGuideLatin.textContent = plant.latinName;
  plantGuideSummary.textContent = guide.summary;

  renderGuideImage(plant);

  plantGuideFacts.innerHTML = [
    renderGuideFact("Category", plant.category),
    renderGuideFact("Sunlight", plant.sunlight),
    renderGuideFact("Water", plant.water),
    renderGuideFact("Hardiness", plant.hardiness),
    renderGuideFact("Setting", plant.setting),
    renderGuideFact("Purpose", plant.purpose),
    renderGuideFact("Care", plant.care),
    renderGuideFact("Nursery Cost", plant.nurseryCost)
  ].join("");

  const lifecycleSections = [];

  if (Array.isArray(guide.seeding) && guide.seeding.length > 0) {
    lifecycleSections.push(renderGuideSection("Seeding", guide.seeding));
    lifecycleSections.push(renderGuideSection("Planting", guide.planting));
  } else {
    lifecycleSections.push(renderGuideSection("Seeding / Planting", guide.planting));
  }

  lifecycleSections.push(renderGuideSection("Maintenance", guide.maintenance));
  lifecycleSections.push(renderGuideSection("Pruning", guide.pruning));
  lifecycleSections.push(renderGuideSection("Winterizing", guide.winterizing));

  plantGuideSections.innerHTML = lifecycleSections.filter(Boolean).join("");
}

function renderGuideImage(plant) {
  if (!plantGuideImage || !plant) {
    return;
  }

  const imageState = typeof window.GARDENING_GET_PLANT_IMAGE_STATE === "function"
    ? window.GARDENING_GET_PLANT_IMAGE_STATE(plant)
    : {
        src: plant.image,
        fallback: plant.fallbackImage || plant.image,
        candidates: Array.isArray(plant.imageCandidates) ? plant.imageCandidates : []
      };

  plantGuideImage.src = imageState.src;
  plantGuideImage.alt = plant.commonName;
  plantGuideImage.dataset.fallback = imageState.fallback;
  plantGuideImage.dataset.imageCandidates = typeof serializePlantImageCandidates === "function"
    ? serializePlantImageCandidates(imageState.candidates)
    : "";
  plantGuideImage.dataset.imageCandidateIndex = "0";
  plantGuideImage.onerror = function onGuideImageError() {
    if (typeof window.GARDENING_HANDLE_PLANT_IMAGE_ERROR === "function") {
      window.GARDENING_HANDLE_PLANT_IMAGE_ERROR(this);
      return;
    }

    this.onerror = null;
    this.src = this.dataset.fallback;
  };
}

function bindSharedGuideImageRefresh() {
  if (typeof window === "undefined") {
    return;
  }

  window.addEventListener("gardening:shared-images-updated", () => {
    if (currentGuidePlant && plantGuideImage) {
      renderGuideImage(currentGuidePlant);
    }
  });
}

function renderGuideFact(label, value) {
  const iconMarkup = typeof getResultTagIcon === "function" ? getResultTagIcon(label, value) : "";
  const valueMarkup = iconMarkup
    ? `
      <span class="guide-fact-value guide-fact-value-with-icon">
        <span class="tag-icon" aria-hidden="true">${iconMarkup}</span>
        <span>${value}</span>
      </span>
    `
    : `<span class="guide-fact-value">${value}</span>`;

  return `
    <div class="guide-fact">
      <span class="guide-fact-label">${label}</span>
      ${valueMarkup}
    </div>
  `;
}

function getGuideSectionIcon(title) {
  const normalizedTitle = String(title || "").toLowerCase();

  if (normalizedTitle.includes("winter")) {
    return `
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path d="M14 31H34L31.5 39H16.5L14 31Z" fill="#C99359" stroke="#2F5D50" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M12 30H36" stroke="#2F5D50" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M24 30V20.5" stroke="#2F5D50" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M24 21.5C21.3 21.1 19.2 19.6 17.8 17C20.9 16.7 23.3 17.8 24.3 20.2" stroke="#2F5D50" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 21.5C26.7 21.1 28.8 19.6 30.2 17C27.1 16.7 24.7 17.8 23.7 20.2" stroke="#74A66E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <g stroke="#76B7E5" stroke-width="1.7" stroke-linecap="round">
          <path d="M35.5 10V18"/>
          <path d="M31.5 14H39.5"/>
          <path d="M32.8 11.3L38.2 16.7"/>
          <path d="M38.2 11.3L32.8 16.7"/>
        </g>
      </svg>
    `;
  }

  if (normalizedTitle.includes("prun")) {
    return `
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path d="M29 16.5C30.8 15.4 32.7 14.9 34.8 15C34.7 17.1 34.1 19 32.9 20.8L26.5 27.1" stroke="#2F5D50" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 24.7L17.6 18.3C15.9 16.7 13.4 16.7 11.8 18.3C10.2 19.9 10.2 22.4 11.8 24L17.9 30.1" stroke="#C99359" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.1 27.4L15 32.5C13.4 34.1 13.4 36.6 15 38.2C16.6 39.8 19.1 39.8 20.7 38.2L25.9 33" stroke="#C99359" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="13.7" cy="20.4" r="3.3" fill="#FFFFFF" stroke="#2F5D50" stroke-width="1.8"/>
        <circle cx="18.4" cy="35.1" r="3.3" fill="#FFFFFF" stroke="#2F5D50" stroke-width="1.8"/>
        <path d="M27 15V11.5" stroke="#2F5D50" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M27 11.8C24.9 11.5 23.3 10.4 22 8.3C24.4 8 26.2 8.9 27.1 10.5" stroke="#2F5D50" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M27 11.8C29.1 11.5 30.7 10.4 32 8.3C29.6 8 27.8 8.9 26.9 10.5" stroke="#74A66E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  }

  if (normalizedTitle.includes("maint")) {
    return `
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path d="M12 28.5C12 24.4 15.4 21 19.5 21H26.5C30.6 21 34 24.4 34 28.5V30.5H12V28.5Z" fill="#FFFFFF" stroke="#2F5D50" stroke-width="1.9"/>
        <path d="M25.8 20.3C25.8 15.9 29.4 12.3 33.8 12.3H38" stroke="#2F5D50" stroke-width="1.9" stroke-linecap="round"/>
        <path d="M38 12.3C40.7 12.3 43 14.6 43 17.3V18.5" stroke="#2F5D50" stroke-width="1.9" stroke-linecap="round"/>
        <path d="M34 23.5H41C42.9 23.5 44.5 21.9 44.5 20V18.5" stroke="#2F5D50" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M37.2 24.2L43 22.2L41.4 28.2" fill="#FFFFFF"/>
        <path d="M37.2 24.2L43 22.2L41.4 28.2" stroke="#2F5D50" stroke-width="1.9" stroke-linejoin="round"/>
        <path d="M35.8 29.2C35.8 30.3 36.7 31.2 37.8 31.2C38.9 31.2 39.8 30.3 39.8 29.2C39.8 28.1 37.8 25.7 37.8 25.7C37.8 25.7 35.8 28.1 35.8 29.2Z" fill="#76B7E5"/>
        <path d="M16 35C17.8 31.9 20.4 30.4 24 30.4C27.6 30.4 30.2 31.9 32 35" stroke="#A5784A" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M23.5 30.1V23.8" stroke="#2F5D50" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M23.5 24.4C21.4 24.1 19.8 23 18.5 20.9C20.9 20.7 22.7 21.5 23.6 23.2" stroke="#2F5D50" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.5 24.4C25.6 24.1 27.2 23 28.5 20.9C26.1 20.7 24.3 21.5 23.4 23.2" stroke="#74A66E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  }

  if (normalizedTitle.includes("seeding / planting")) {
    return `
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path d="M11 34C16.6 30.8 23 29.2 30.5 29.2C36.4 29.2 41.5 30.2 45 32.4" stroke="#A5784A" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M31.8 24L39.8 13.3" stroke="#2F5D50" stroke-width="3" stroke-linecap="round"/>
        <path d="M39.8 13.3L45 18.6L35.8 23.6L31.8 24Z" fill="#C99359" stroke="#2F5D50" stroke-width="1.9" stroke-linejoin="round"/>
        <path d="M20.2 31V23.8" stroke="#2F5D50" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M20.2 24.2C17.9 23.9 16.1 22.7 14.7 20.5C17.3 20.3 19.3 21.1 20.3 22.9" stroke="#2F5D50" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.2 24.2C22.5 23.9 24.3 22.7 25.7 20.5C23.1 20.3 21.1 21.1 20.1 22.9" stroke="#74A66E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  }

  if (normalizedTitle.includes("plant")) {
    return `
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path d="M12 34C17.6 30.8 24 29.2 31.5 29.2C37.4 29.2 42.5 30.2 46 32.4" stroke="#A5784A" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M30.2 24.5L38.8 13" stroke="#2F5D50" stroke-width="3" stroke-linecap="round"/>
        <path d="M38.8 13L44.4 18.6L34.5 24L30.2 24.5Z" fill="#C99359" stroke="#2F5D50" stroke-width="1.9" stroke-linejoin="round"/>
        <path d="M18.5 30.8V24.5" stroke="#2F5D50" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M18.5 24.9C16.4 24.6 14.8 23.5 13.5 21.4C15.9 21.2 17.7 22 18.6 23.7" stroke="#2F5D50" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.5 24.9C20.6 24.6 22.2 23.5 23.5 21.4C21.1 21.2 19.3 22 18.4 23.7" stroke="#74A66E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  }

  if (normalizedTitle.includes("seed")) {
    return `
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <rect x="11" y="10" width="15" height="20" rx="3.5" fill="#FFFFFF" stroke="#2F5D50" stroke-width="1.9"/>
        <path d="M14.2 15H22.8" stroke="#8BAE87" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M18.2 17.8C16.8 18.4 16 19.4 15.7 21C17.3 21 18.6 20.2 19.2 18.8" stroke="#2F5D50" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.2 18.8C20.4 19.1 21.4 20 21.8 21.2" stroke="#74A66E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M31 22C32.9 22.8 34.2 24 35 25.8" stroke="#B6844D" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M29.3 26.8C31.2 27.6 32.5 28.8 33.3 30.6" stroke="#B6844D" stroke-width="1.8" stroke-linecap="round"/>
        <ellipse cx="36" cy="26.6" rx="2.2" ry="1.5" transform="rotate(30 36 26.6)" fill="#C99359"/>
        <ellipse cx="34.2" cy="31.2" rx="2.2" ry="1.5" transform="rotate(26 34.2 31.2)" fill="#C99359"/>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M10 34C15.6 30.8 22 29.2 29.5 29.2C35.4 29.2 40.5 30.2 44 32.4" stroke="#A5784A" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M23.5 31V23.8" stroke="#2F5D50" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M23.5 24.2C21.2 23.9 19.4 22.7 18 20.5C20.6 20.3 22.6 21.1 23.6 22.9" stroke="#2F5D50" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M23.5 24.2C25.8 23.9 27.6 22.7 29 20.5C26.4 20.3 24.4 21.1 23.4 22.9" stroke="#74A66E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function renderGuideSection(title, items) {
  if (!Array.isArray(items) || items.length === 0) {
    return "";
  }

  return `
    <article class="guide-section-card">
      <div class="guide-topic-row">
        <div class="guide-topic-icon" aria-hidden="true">
          ${getGuideSectionIcon(title)}
        </div>
        <div class="plant-copy guide-topic-copy">
          <h3>${title}</h3>
          <ul class="guide-bullet-list">
            ${items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    </article>
  `;
}

function renderGuideNotFound() {
  currentGuidePlant = null;
  document.title = "Plant Guide Not Found | Plant Planner";
  plantGuideTitle.textContent = "Plant Guide Not Found";
  plantGuideLatin.textContent = "";
  plantGuideSummary.textContent = "This guide is not available yet. Browse the plant database or master list to find another plant with a published care page.";
  if (plantGuideImage) {
    plantGuideImage.remove();
  }
  if (plantGuideFacts) {
    plantGuideFacts.innerHTML = "";
  }
  plantGuideSections.innerHTML = `
    <article class="empty-state">
      No detailed guide was found for this plant yet. Try the browse or master list pages to find another published plant guide.
    </article>
  `;
}
