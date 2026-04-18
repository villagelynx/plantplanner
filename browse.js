const browseTitle = document.getElementById("browseTitle");
const browseCopy = document.getElementById("browseCopy");
const browseHeading = document.getElementById("browseHeading");
const browseCount = document.getElementById("browseCount");
const browseDatabaseCount = document.getElementById("browseDatabaseCount");
const browseResultsList = document.getElementById("browseResultsList");
const browseSearchInput = document.getElementById("browseSearchInput");
const BROWSE_RENDER_LIMIT = 120;

function filterPlantsForView(plants, view) {
  if (view === "all") {
    return [...plants];
  }

  if (view === "popular") {
    return POPULAR_PLANT_NAMES
      .map((name) => plants.find((plant) => plant.commonName === name))
      .filter(Boolean);
  }

  if (view === "food") {
    return plants.filter((plant) =>
      plant.category === "Herb" ||
      plant.category === "Edible" ||
      isFruitPlant(plant) ||
      isVegetablePlant(plant)
    );
  }

  if (view === "fruit") {
    return plants.filter((plant) => isFruitPlant(plant));
  }

  if (view === "tree") {
    return plants.filter((plant) => plant.category === "Tree");
  }

  if (view === "privacy") {
    return plants.filter((plant) => plant.category === "Shrub" || plant.purpose === "Privacy");
  }

  if (view === "indoor") {
    return plants.filter((plant) => plant.setting === "Indoor" || plant.setting === "Both" || plant.region === "Indoor Anywhere");
  }

  return plants.filter((plant) => plant.region === view);
}

function getViewLabel(view) {
  if (view === "all") {
    return "All Plants";
  }

  if (view === "popular") {
    return "Top 20 Popular Plants";
  }

  if (view === "food") {
    return "Food Plants";
  }

  if (view === "fruit") {
    return "Fruit Plants";
  }

  if (view === "tree") {
    return "Trees";
  }

  if (view === "privacy") {
    return "Shrubs & Privacy Plants";
  }

  if (view === "indoor") {
    return "Indoor Plants";
  }

  return view;
}

function getViewCopy(view) {
  if (view === "all") {
    return "Browse the full plant database in one place, organized by category for easy scanning.";
  }

  if (view === "popular") {
    return "This curated page highlights 20 of the most familiar and broadly appealing plants for home gardeners, grouped by category for quick browsing.";
  }

  if (view === "food") {
    return "This page collects edible and culinary plants, including kitchen herbs and garden crops, for quick food-garden browsing.";
  }

  if (view === "fruit") {
    return "This page highlights fruit-producing plants from the database so users can browse berry, orchard, and vine options in one place.";
  }

  if (view === "tree") {
    return "This page pulls together the tree selections from the database so users can browse ornamental, shade, privacy, and edible tree options in one place.";
  }

  if (view === "privacy") {
    return "This page pulls together shrubs and other privacy-focused plants so users can browse screening, hedge, and foundation options in one place.";
  }

  if (view === "indoor") {
    return "This page collects indoor-friendly plants and flexible houseplant options into one easy-to-browse list.";
  }

  return `This page lists plants tagged for ${view.toLowerCase()} conditions, grouped by category so users can browse matching options quickly.`;
}

function buildBrowseTags(plant) {
  return [
    { label: "Location", value: plant.region },
    { label: "Sunlight", value: plant.sunlight },
    { label: "Water", value: plant.water },
    { label: "Setting", value: plant.setting },
    { label: "Purpose", value: plant.purpose }
  ];
}

function setActiveNav(view) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const normalizedHref = decodeURIComponent(href).toLowerCase();
    const isActive =
      (view === "all" && normalizedHref.includes("view=all")) ||
      (view === "popular" && normalizedHref.includes("view=popular")) ||
      (view === "food" && normalizedHref.includes("view=food")) ||
      (view === "fruit" && normalizedHref.includes("view=fruit")) ||
      (view === "privacy" && normalizedHref.includes("view=privacy")) ||
      (view === "indoor" && normalizedHref.includes("view=indoor")) ||
      (view !== "all" && view !== "popular" && view !== "food" && view !== "fruit" && view !== "privacy" && view !== "indoor" && normalizedHref.includes(`view=${view.toLowerCase()}`));

    if (isActive) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

const POPULAR_PLANT_NAMES = [
  "Lavender",
  "Hydrangea",
  "Rosemary",
  "Coneflower",
  "Hosta",
  "Japanese Maple",
  "Snake Plant",
  "Monstera",
  "Pothos",
  "Peace Lily",
  "Boston Fern",
  "Petunia",
  "Marigold",
  "Zinnia",
  "Sunflower",
  "Boxwood",
  "Dogwood",
  "Blueberry",
  "Tomato",
  "Aloe Vera"
];

const FRUIT_KEYWORDS = [
  "apple",
  "pear",
  "peach",
  "prune",
  "plum",
  "grape",
  "grapefruit",
  "cherry",
  "apricot",
  "nectarine",
  "persimmon",
  "pomegranate",
  "quince",
  "mulberry",
  "gooseberry",
  "currant",
  "jostaberry",
  "boysenberry",
  "loganberry",
  "tayberry",
  "marionberry",
  "blueberry",
  "blackberry",
  "raspberry",
  "strawberry",
  "cranberry",
  "lingonberry",
  "huckleberry",
  "kiwi",
  "kiwiberry",
  "passionfruit",
  "dragon fruit",
  "guava",
  "lemon",
  "lime",
  "orange",
  "mandarin",
  "tangerine",
  "kumquat",
  "calamondin",
  "fig",
  "olive",
  "avocado",
  "banana",
  "date",
  "pawpaw",
  "medlar",
  "loquat",
  "mango",
  "papaya",
  "pineapple",
  "goji",
  "salal",
  "cloudberry",
  "maypop",
  "prickly pear",
  "surinam cherry"
];

const VEGETABLE_KEYWORDS = [
  "tomato",
  "pepper",
  "cucumber",
  "carrot",
  "lettuce",
  "kale",
  "broccoli",
  "cabbage",
  "zucchini",
  "pumpkin",
  "squash",
  "bean",
  "pea",
  "onion",
  "garlic",
  "beet",
  "radish",
  "spinach",
  "chard",
  "cauliflower",
  "celery",
  "eggplant",
  "okra",
  "turnip",
  "asparagus",
  "artichoke",
  "rhubarb",
  "corn",
  "potato",
  "leek",
  "bok choy",
  "arugula",
  "brussels",
  "sprout",
  "parsnip",
  "collard",
  "mustard",
  "rutabaga",
  "horseradish",
  "shallot",
  "scallion",
  "daikon",
  "endive",
  "escarole",
  "celeriac",
  "jicama",
  "cassava",
  "tatsoi",
  "mizuna",
  "napa",
  "watercress",
  "chayote"
];

function isFruitPlant(plant) {
  const name = `${plant.commonName} ${plant.latinName}`.toLowerCase();
  return ["Edible", "Tree", "Vine", "Shrub"].includes(plant.category) &&
    FRUIT_KEYWORDS.some((keyword) => name.includes(keyword));
}

function isVegetablePlant(plant) {
  if (!plant || plant.category !== "Edible") {
    return false;
  }

  if (isFruitPlant(plant)) {
    return false;
  }

  const name = `${plant.commonName} ${plant.latinName}`.toLowerCase();
  return VEGETABLE_KEYWORDS.some((keyword) => name.includes(keyword));
}

function getBrowseGroupLabel(plant, view) {
  if (!plant) {
    return "Other";
  }

  if (view === "food") {
    if (plant.category === "Herb") {
      return "Herbs";
    }

    if (isFruitPlant(plant)) {
      return "Fruit";
    }

    if (isVegetablePlant(plant)) {
      return "Vegetables";
    }

    if (plant.category === "Edible") {
      return "Food Crops";
    }
  }

  if (view === "fruit") {
    if (plant.category === "Tree") {
      return "Fruit Trees";
    }

    if (plant.category === "Shrub") {
      return "Fruit Shrubs";
    }

    if (plant.category === "Vine") {
      return "Fruit Vines";
    }

    if (plant.category === "Edible") {
      return "Fruit Crops";
    }
  }

  return plant.category || "Other";
}

initializeBrowsePage();

function initializeBrowsePage() {
  if (!browseResultsList || !window.GARDENING_PLANTS || !window.GARDENING_RENDER_PLANT_CARD) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const view = params.get("view") || "all";
  const query = (params.get("q") || "").trim().toLowerCase();
  const plants = window.GARDENING_PLANTS;
  const filteredPlants = filterPlantsForQuery(filterPlantsForView(plants, view), query);
  const shouldLimitInitialRender = view === "all" && !query && filteredPlants.length > BROWSE_RENDER_LIMIT;
  const displayPlants = shouldLimitInitialRender ? filteredPlants.slice(0, BROWSE_RENDER_LIMIT) : filteredPlants;
  const grouped = displayPlants.reduce((groups, plant) => {
    const category = getBrowseGroupLabel(plant, view);
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(plant);
    return groups;
  }, {});

  const label = getViewLabel(view);
  browseTitle.textContent = `${label} Plant Database`;
  browseHeading.textContent = label;
  browseCopy.textContent = getViewCopy(view);
  browseCount.textContent = shouldLimitInitialRender
    ? `Showing first ${displayPlants.length} of ${filteredPlants.length} plants`
    : `${filteredPlants.length} plants shown`;
  browseDatabaseCount.textContent = `${plants.length} plants in database`;
  if (browseSearchInput) {
    browseSearchInput.value = params.get("q") || "";
  }
  setActiveNav(view);

  if (filteredPlants.length === 0) {
    const safeQuery = escapeHtml(params.get("q") || "");
    browseResultsList.innerHTML = `
      <article class="empty-state">
        ${query ? `No plants matched "${safeQuery}".` : "No plants are currently listed in this browse category."}
      </article>
    `;
    return;
  }

  const browseNotice = shouldLimitInitialRender
    ? `
      <article class="empty-state">
        Showing the first ${displayPlants.length} plants for faster mobile loading. Use search above or open the <a href="./master-list.html">Plant Master Database</a> for the full list.
      </article>
    `
    : "";

  browseResultsList.innerHTML = browseNotice + Object.entries(grouped)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([category, items]) => `
      <section class="section-group">
        <article class="section-heading-card">
          <h3 class="category-title">${category}</h3>
          <p class="summary-copy">${items.length} plants in this section.</p>
        </article>
        ${items
          .sort((a, b) => a.commonName.localeCompare(b.commonName))
          .map((plant) => window.GARDENING_RENDER_PLANT_CARD(plant, 10, buildBrowseTags(plant)))
          .join("")}
      </section>
    `)
    .join("");
}

function filterPlantsForQuery(plants, query) {
  if (!query) {
    return plants;
  }

  return plants.filter((plant) => {
    const haystack = `${plant.commonName} ${plant.latinName}`.toLowerCase();
    return haystack.includes(query);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
