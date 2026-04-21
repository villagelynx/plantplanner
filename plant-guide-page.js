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

function wrapGuideSectionIcon(content) {
  return `
    <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
      <rect x="4.5" y="4.5" width="63" height="63" rx="15" fill="#FBF6E8" stroke="#AAB58F" stroke-width="2.2"/>
      ${content}
    </svg>
  `;
}

function getGuideSectionIcon(title) {
  const normalizedTitle = String(title || "").toLowerCase();

  if (normalizedTitle.includes("winter")) {
    return wrapGuideSectionIcon(`
      <g stroke="#7DB2DD" stroke-width="2.4" stroke-linecap="round">
        <path d="M22 15V29"/>
        <path d="M15 22H29"/>
        <path d="M17 17L27 27"/>
        <path d="M27 17L17 27"/>
      </g>
      <path d="M39 43.5C39 36.6 43.9 31 50 29.7V48.7H39V43.5Z" fill="#E5BE7A" stroke="#1F4A38" stroke-width="1.9" stroke-linejoin="round"/>
      <path d="M39 44.2C36.3 42.4 34.5 39.9 33.5 36.6C37.8 36.8 41 39.1 42.2 43" fill="#F2DEB3" stroke="#1F4A38" stroke-width="1.9" stroke-linejoin="round"/>
      <path d="M50 44.2C52.7 42.4 54.5 39.9 55.5 36.6C51.2 36.8 48 39.1 46.8 43" fill="#F2DEB3" stroke="#1F4A38" stroke-width="1.9" stroke-linejoin="round"/>
      <path d="M44.5 48.7V38.2" stroke="#1F4A38" stroke-width="1.9" stroke-linecap="round"/>
      <path d="M44.5 40.4C41.9 39.8 39.9 38.3 38.5 35.7C41.5 35.4 43.8 36.4 44.8 38.8" stroke="#1F4A38" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M44.5 40.4C47.1 39.8 49.1 38.3 50.5 35.7C47.5 35.4 45.2 36.4 44.2 38.8" stroke="#7A9D63" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="57.5" cy="19" r="1.8" fill="#9DC6E7"/>
      <circle cx="61.5" cy="26" r="1.8" fill="#9DC6E7"/>
      <circle cx="56.5" cy="31.5" r="1.8" fill="#9DC6E7"/>
    `);
  }

  if (normalizedTitle.includes("prun")) {
    return wrapGuideSectionIcon(`
      <path d="M16.5 46.2L29.5 33.2" stroke="#1F4A38" stroke-width="2.3" stroke-linecap="round"/>
      <path d="M21.5 50.5L31.2 40.7" stroke="#1F4A38" stroke-width="2.3" stroke-linecap="round"/>
      <path d="M17.5 45.8L12.7 50.6C11.2 52.1 11.2 54.5 12.7 56C14.2 57.5 16.6 57.5 18.1 56L23.2 50.9" fill="none" stroke="#D2A15F" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M31.2 32.8L20.8 22.4C19.4 21 17.1 21 15.7 22.4C14.3 23.8 14.3 26.1 15.7 27.5L25.8 37.6" fill="none" stroke="#D2A15F" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="17.2" cy="24.9" r="3.4" fill="#FBF6E8" stroke="#1F4A38" stroke-width="1.9"/>
      <circle cx="16" cy="53.2" r="3.4" fill="#FBF6E8" stroke="#1F4A38" stroke-width="1.9"/>
      <path d="M46 46V29" stroke="#1F4A38" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M46 35.5C43.2 34.9 41 33.2 39.5 30.3C42.7 29.9 45.2 31 46.4 33.7" stroke="#1F4A38" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M46 41.5C48.7 40.9 50.9 39.2 52.5 36.3C49.2 35.9 46.7 37 45.6 39.7" stroke="#7A9D63" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M42.8 44.4L48.8 38.3" stroke="#1F4A38" stroke-width="2" stroke-linecap="round"/>
    `);
  }

  if (normalizedTitle.includes("maint")) {
    return wrapGuideSectionIcon(`
      <path d="M40 20.3C40 16.6 43 13.6 46.7 13.6H50.5" fill="none" stroke="#1F4A38" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M50.5 13.6C53 13.6 55 15.6 55 18.1V19.7" fill="none" stroke="#1F4A38" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M37.4 33.4H53.5C56.1 33.4 58.2 31.3 58.2 28.7V19.7" fill="none" stroke="#1F4A38" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.8 46.2C21.7 42.3 24.9 40.2 29.4 40.2C33.9 40.2 37.1 42.3 39 46.2" fill="none" stroke="#A97549" stroke-width="2.7" stroke-linecap="round"/>
      <path d="M28.8 40.1V31.2" stroke="#1F4A38" stroke-width="2" stroke-linecap="round"/>
      <path d="M28.8 32.2C26.1 31.6 24 30.1 22.5 27.5C25.6 27.2 28 28.2 29.1 30.6" stroke="#1F4A38" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M28.8 32.2C31.5 31.6 33.6 30.1 35.1 27.5C32 27.2 29.6 28.2 28.5 30.6" stroke="#7A9D63" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M34.8 18.6C40.3 18.6 44.2 22.6 44.2 28V29.5H26.5V28C26.5 22.6 29.8 18.6 34.8 18.6Z" fill="#C9D09F" stroke="#1F4A38" stroke-width="2" stroke-linejoin="round"/>
      <path d="M42.9 27.9L58 22.8L53.8 38.2" fill="none" stroke="#1F4A38" stroke-width="2" stroke-linejoin="round"/>
      <circle cx="49.8" cy="25.9" r="1" fill="#1F4A38"/>
      <circle cx="52.8" cy="24.9" r="1" fill="#1F4A38"/>
      <circle cx="55.8" cy="23.9" r="1" fill="#1F4A38"/>
      <path d="M44.6 34.5C44.6 35.8 45.7 36.8 47 36.8C48.3 36.8 49.4 35.8 49.4 34.5C49.4 33.2 47 30.3 47 30.3C47 30.3 44.6 33.2 44.6 34.5Z" fill="#82B8E4"/>
      <path d="M49.9 36.6C49.9 37.7 50.8 38.6 51.9 38.6C53 38.6 53.9 37.7 53.9 36.6C53.9 35.5 51.9 33.2 51.9 33.2C51.9 33.2 49.9 35.5 49.9 36.6Z" fill="#82B8E4"/>
    `);
  }

  if (normalizedTitle.includes("plant")) {
    return wrapGuideSectionIcon(`
      <path d="M18 45.8C20.8 42 25.4 40 31.8 40C35.8 40 39.5 40.8 42.8 42.5" fill="none" stroke="#A97549" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M32.2 35.6L43.2 20.4" stroke="#1F4A38" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M43.2 20.4L49.8 27.2L37.8 33.7L32.2 35.6Z" fill="#D6A764" stroke="#1F4A38" stroke-width="2" stroke-linejoin="round"/>
      <path d="M25.2 40.2V31.5" stroke="#1F4A38" stroke-width="2" stroke-linecap="round"/>
      <path d="M25.2 33C22.4 32.4 20.2 30.9 18.6 28.1C21.8 27.8 24.3 28.8 25.4 31.2" stroke="#1F4A38" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25.2 33C27.9 32.4 30.1 30.9 31.7 28.1C28.5 27.8 26 28.8 24.9 31.2" stroke="#7A9D63" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
    `);
  }

  if (normalizedTitle.includes("seed")) {
    return wrapGuideSectionIcon(`
      <path d="M16.8 18.2L40.8 19.3L38.8 48.5L15.6 47.2L16.8 18.2Z" fill="#FBF6E8" stroke="#1F4A38" stroke-width="2.1" stroke-linejoin="round"/>
      <path d="M17.2 18.8L40.3 19.9L40 24.8L16.9 23.7L17.2 18.8Z" fill="#C8D2A1" stroke="#1F4A38" stroke-width="1.7" stroke-linejoin="round"/>
      <path d="M20.5 30H33.9V41H20.5Z" fill="#FFF8EA" stroke="#1F4A38" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M27.2 39.8V33.2" stroke="#1F4A38" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M27.2 33.9C24.9 33.5 23.1 32.3 21.8 30.1C24.4 29.9 26.4 30.8 27.3 32.7" stroke="#1F4A38" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M27.2 33.9C29.5 33.5 31.3 32.3 32.6 30.1C30 29.9 28 30.8 27.1 32.7" stroke="#7A9D63" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <ellipse cx="49.5" cy="42.3" rx="2.4" ry="3.4" transform="rotate(24 49.5 42.3)" fill="#D8A968" stroke="#A97549" stroke-width="0.8"/>
      <ellipse cx="55.5" cy="45.8" rx="2.4" ry="3.4" transform="rotate(12 55.5 45.8)" fill="#D8A968" stroke="#A97549" stroke-width="0.8"/>
      <ellipse cx="52.2" cy="52" rx="2.4" ry="3.4" transform="rotate(-8 52.2 52)" fill="#D8A968" stroke="#A97549" stroke-width="0.8"/>
      <circle cx="45.6" cy="49.7" r="0.9" fill="#D8A968"/>
      <circle cx="57.9" cy="51.1" r="0.9" fill="#D8A968"/>
    `);
  }

  return wrapGuideSectionIcon(`
    <path d="M25.2 40.2V31.5" stroke="#1F4A38" stroke-width="2" stroke-linecap="round"/>
    <path d="M25.2 33C22.4 32.4 20.2 30.9 18.6 28.1C21.8 27.8 24.3 28.8 25.4 31.2" stroke="#1F4A38" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M25.2 33C27.9 32.4 30.1 30.9 31.7 28.1C28.5 27.8 26 28.8 24.9 31.2" stroke="#7A9D63" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
  `);
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
