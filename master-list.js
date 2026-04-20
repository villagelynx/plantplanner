const masterListBody = document.getElementById("masterListBody");
const masterListCount = document.getElementById("masterListCount");
const masterDatabaseCount = document.getElementById("masterDatabaseCount");

const masterSortState = {
  key: "commonName",
  direction: "asc"
};

initializeMasterListPage();

function initializeMasterListPage() {
  if (!masterListBody || !window.GARDENING_PLANTS) {
    return;
  }

  document.querySelectorAll(".master-sort-button").forEach((button) => {
    button.addEventListener("click", () => {
      const sortKey = button.dataset.sortKey;
      if (!sortKey) {
        return;
      }

      if (masterSortState.key === sortKey) {
        masterSortState.direction = masterSortState.direction === "asc" ? "desc" : "asc";
      } else {
        masterSortState.key = sortKey;
        masterSortState.direction = "asc";
      }

      renderMasterList();
    });
  });

  renderMasterList();
}

function renderMasterList() {
  const plants = [...window.GARDENING_PLANTS].sort(compareMasterPlants);

  masterListCount.textContent = `${plants.length} plants shown`;
  masterDatabaseCount.textContent = `${window.GARDENING_PLANTS.length} plants in database`;
  masterListBody.innerHTML = plants.map(renderMasterListRow).join("");

  updateSortIndicators();
}

function compareMasterPlants(a, b) {
  const leftValue = getMasterSortValue(a, masterSortState.key);
  const rightValue = getMasterSortValue(b, masterSortState.key);
  const comparison = leftValue.localeCompare(rightValue, undefined, { sensitivity: "base" });

  if (comparison !== 0) {
    return masterSortState.direction === "asc" ? comparison : -comparison;
  }

  const fallback = a.commonName.localeCompare(b.commonName, undefined, { sensitivity: "base" });
  return masterSortState.direction === "asc" ? fallback : -fallback;
}

function getMasterSortValue(plant, key) {
  if (key === "guideStatus") {
    return buildGuideStatusText(plant);
  }

  return String(plant[key] || "");
}

function renderMasterListRow(plant) {
  const guideUrl = buildMasterGuideUrl(plant);
  const guideCell = guideUrl
    ? `<a class="guide-button" href="${guideUrl}">Details &amp; Plant Care</a>`
    : `<span class="master-muted">No guide yet</span>`;

  return `
    <tr>
      <td>
        <div class="master-plant-cell">
          <strong>${plant.commonName}</strong>
          <span class="master-latin-name">${plant.latinName}</span>
        </div>
      </td>
      <td>${plant.category}</td>
      <td>${plant.sunlight}</td>
      <td>${plant.water}</td>
      <td>${guideCell}</td>
    </tr>
  `;
}

function buildMasterGuideUrl(plant) {
  if (!window.GARDENING_GET_PLANT_GUIDE_BY_NAME) {
    return "";
  }

  const guide = window.GARDENING_GET_PLANT_GUIDE_BY_NAME(plant.commonName);
  if (!guide || !guide.slug) {
    return "";
  }

  return `./plant-guide.html?plant=${encodeURIComponent(guide.slug)}`;
}

function buildGuideStatusText(plant) {
  return buildMasterGuideUrl(plant) ? "Guide available" : "No guide yet";
}

function updateSortIndicators() {
  document.querySelectorAll(".sort-indicator").forEach((indicator) => {
    indicator.textContent = "";
  });

  const activeIndicator = document.getElementById(`sortIndicator-${masterSortState.key}`);
  if (activeIndicator) {
    activeIndicator.textContent = masterSortState.direction === "asc" ? "A-Z" : "Z-A";
  }
}
