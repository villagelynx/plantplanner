const plantGuideTitle = document.getElementById("plantGuideTitle");
const plantGuideLatin = document.getElementById("plantGuideLatin");
const plantGuideSummary = document.getElementById("plantGuideSummary");
const plantGuideImage = document.getElementById("plantGuideImage");
const plantGuideFacts = document.getElementById("plantGuideFacts");
const plantGuideSections = document.getElementById("plantGuideSections");

initializePlantGuidePage();

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

  document.title = `${plant.commonName} Plant Guide | Plant Planner`;
  plantGuideTitle.textContent = `${plant.commonName} Plant Guide`;
  plantGuideLatin.textContent = plant.latinName;
  plantGuideSummary.textContent = guide.summary;

  plantGuideImage.src = plant.image;
  plantGuideImage.alt = plant.commonName;
  plantGuideImage.dataset.fallback = plant.fallbackImage || plant.image;
  plantGuideImage.dataset.imageCandidates = typeof serializePlantImageCandidates === "function"
    ? serializePlantImageCandidates(plant.imageCandidates)
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

function renderGuideSection(title, items) {
  if (!Array.isArray(items) || items.length === 0) {
    return "";
  }

  return `
    <article class="guide-section-card">
      <div class="plant-copy">
        <h3>${title}</h3>
        <ul class="guide-bullet-list">
          ${items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </article>
  `;
}

function renderGuideNotFound() {
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
