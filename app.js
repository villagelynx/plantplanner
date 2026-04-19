const filterGrid = document.getElementById("filterGrid");
const resultsList = document.getElementById("resultsList");
const resultsCount = document.getElementById("resultsCount");
const databaseCount = document.getElementById("databaseCount");
const resetButton = document.getElementById("resetButton");
const zipCodeInput = document.getElementById("zipCodeInput");
const zoneLookupButton = document.getElementById("zoneLookupButton");
const zoneLookupResult = document.getElementById("zoneLookupResult");
const resultsSortSelect = document.getElementById("resultsSort");
const sliderToggleButton = document.getElementById("sliderToggleButton");
const sliderPanelContent = document.getElementById("sliderPanelContent");
const DEFAULT_HOME_RESULTS_LIMIT = 20;

const FILTERS = [
  { key: "category", label: "Category", options: ["Any", "Edible", "Flower", "Fruit", "Grass", "Groundcover", "Herb", "Houseplant", "Shrub", "Succulent", "Tree", "Vegetable", "Vine"] },
  { key: "region", label: "Location", options: ["Any", "Indoor Anywhere", "Midwest", "Mountain", "Northeast", "Northwest", "Pacific Coast", "Southeast", "Southwest"] },
  { key: "color", label: "Plant Color", options: ["Any", "Blue", "Green", "Pink", "Purple", "Red", "White", "Yellow"] },
  { key: "sunlight", label: "Sunlight", options: ["Any", "Full Sun", "Part Shade", "Shade"] },
  { key: "soil", label: "Soil", options: ["Any", "Clay", "Loam", "Rich Organic", "Sandy"] },
  { key: "water", label: "Water", options: ["Any", "Low", "Moderate", "High"] },
  { key: "setting", label: "Indoor / Outdoor", options: ["Any", "Indoor", "Outdoor", "Both"] },
  { key: "climate", label: "Climate", options: ["Any", "Cool", "Dry", "Mediterranean", "Temperate", "Tropical"] },
  { key: "hardiness", label: "Hardiness", options: ["Any", "3-7", "5-9", "7-10", "8-11"] },
  { key: "growthHabit", label: "Growth Habit", options: ["Any", "Clumping", "Groundcover", "Shrubby", "Trailing", "Upright", "Vining"] },
  { key: "seasonality", label: "Blooming / Seasonality", options: ["Any", "Spring", "Summer", "Fall", "Winter", "Year-Round Interest"] },
  { key: "pollinator", label: "Wildlife / Pollinators", options: ["Any", "High", "Moderate", "Low"] },
  { key: "toxicity", label: "Toxicity / Safety", options: ["Any", "Pet Safe", "Mildly Toxic", "Toxic"] },
  { key: "pestResistance", label: "Pest / Disease Resistance", options: ["Any", "High", "Moderate", "Low"] },
  { key: "drainage", label: "Drainage", options: ["Any", "Well-Drained", "Moist", "Average"] },
  { key: "wind", label: "Wind / Exposure", options: ["Any", "Sheltered", "Moderate", "Wind Tolerant"] },
  { key: "container", label: "Container vs Ground", options: ["Any", "Container", "Ground", "Both"] },
  { key: "care", label: "Pruning / Care", options: ["Any", "Low", "Moderate", "High"] },
  { key: "lifespan", label: "Lifespan", options: ["Any", "Annual", "Biennial", "Perennial"] },
  { key: "cost", label: "Cost / Value", options: ["Any", "Budget", "Moderate", "Premium"] },
  { key: "purpose", label: "Purpose / Function", options: ["Any", "Container Accent", "Cut Flower", "Edging", "Groundcover", "Houseplant", "Pollinator Garden", "Privacy"] }
];

const SLIDER_FILTERS = {
  sunlight: ["Any", "Shade", "Part Shade", "Full Sun"],
  hardiness: ["Any", "3-7", "5-9", "7-10", "8-11"],
  water: ["Any", "Low", "Moderate", "High"]
};

const FRUIT_CATEGORY_KEYWORDS = [
  "apple",
  "pear",
  "peach",
  "plum",
  "cherry",
  "blueberry",
  "blackberry",
  "raspberry",
  "strawberry",
  "cranberry",
  "grape",
  "grapefruit",
  "fig",
  "kiwi",
  "kiwiberry",
  "pomegranate",
  "orange",
  "lemon",
  "lime",
  "citrus",
  "mulberry",
  "gooseberry",
  "currant",
  "huckleberry"
];

const VEGETABLE_CATEGORY_KEYWORDS = [
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

const WIKIMEDIA_IMAGE_WIDTH = 1600;

function buildWikimediaImageUrl(fileTitle) {
  const normalizedTitle = String(fileTitle).replace(/Ã—/g, String.fromCharCode(0x00D7));
  return `https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/${encodeURIComponent(normalizedTitle)}&width=${WIKIMEDIA_IMAGE_WIDTH}`;
}

const POPULAR_PLANT_IMAGE_FILES = {
  "Lavender": "popular/lavender.jpg",
  "Hydrangea": "popular/hydrangea.jpg",
  "Rosemary": "popular/rosemary.jpg",
  "Coneflower": "popular/coneflower.jpg",
  "Hosta": "popular/hosta.jpg",
  "Japanese Maple": "popular/japanese-maple.jpg",
  "Snake Plant": "popular/snake-plant.jpg",
  "Monstera": "popular/monstera.jpg",
  "Pothos": "popular/pothos.jpg",
  "Peace Lily": "popular/peace-lily.jpg",
  "Boston Fern": "popular/boston-fern.png",
  "Petunia": "popular/petunia.jpg",
  "Marigold": "popular/marigold.jpg",
  "Zinnia": "popular/zinnia.jpg",
  "Sunflower": "popular/sunflower.jpg",
  "Boxwood": "popular/boxwood.jpg",
  "Dogwood": "popular/dogwood.jpg",
  "Blueberry": "popular/blueberry.jpg",
  "Tomato": "popular/tomato.jpg",
  "Aloe Vera": "popular/aloe-vera.jpg"
};

const REMOTE_MAPPED_PLANT_IMAGE_FILES = {
  "White Oak": "plants/white-oak.jpg",
  "Pin Oak": "plants/pin-oak.jpg",
  "Live Oak": "plants/live-oak.jpg",
  "Tulip Tree": "plants/tulip-tree.jpg",
  "American Sycamore": "plants/american-sycamore.jpg",
  "American Elm": "plants/american-elm.jpg",
  "Blue Spruce": "plants/blue-spruce.jpg",
  "Douglas Fir": "plants/douglas-fir.jpg",
  "Japanese Black Pine": "plants/japanese-black-pine.jpg",
  "Strawberry": "plants/strawberry.jpg",
  "Blackberry": "plants/blackberry.jpg",
  "Raspberry": "plants/raspberry.jpg",
  "Fig": "plants/fig.jpg",
  "Apple Honeycrisp": "plants/apple-tree.jpg",
  "Apple Fuji": "plants/apple-tree.jpg",
  "Apple Gala": "plants/apple-tree.jpg",
  "Apple Granny Smith": "plants/apple-tree.jpg",
  "Apple McIntosh": "plants/apple-tree.jpg",
  "Apple Pink Lady": "plants/apple-tree.jpg",
  "Apple Braeburn": "plants/apple-tree.jpg",
  "Apple Cortland": "plants/apple-tree.jpg",
  "Apple Empire": "plants/apple-tree.jpg",
  "Apple Jonathan": "plants/apple-tree.jpg",
  "Apple Liberty": "plants/apple-tree.jpg",
  "Apple Golden Delicious": "plants/apple-tree.jpg",
  "Apple Winesap": "plants/apple-tree.jpg",
  "Pear Bartlett": "plants/pear-tree.jpg",
  "Pear Bosc": "plants/pear-tree.jpg",
  "Pear Anjou": "plants/pear-tree.jpg",
  "Pear Seckel": "plants/pear-tree.jpg",
  "Pear Moonglow": "plants/pear-tree.jpg",
  "Pear Forelle": "plants/pear-tree.jpg",
  "Pear Kieffer": "plants/pear-tree.jpg",
  "Pear Flemish Beauty": "plants/pear-tree.jpg",
  "Peach": "plants/peach-tree.jpg",
  "Peach Elberta": "plants/peach-tree.jpg",
  "Peach Redhaven": "plants/peach-tree.jpg",
  "Peach Reliance": "plants/peach-tree.jpg",
  "Peach Saturn": "plants/peach-tree.jpg",
  "Peach Belle of Georgia": "plants/peach-tree.jpg",
  "Plum Santa Rosa": "plants/plum-tree.jpg",
  "Plum Methley": "plants/plum-tree.jpg",
  "Prune Stanley": "plants/plum-tree.jpg",
  "Cherry Bing": "plants/cherry-tree.jpg",
  "Cherry Rainier": "plants/cherry-tree.jpg",
  "Cherry Montmorency": "plants/cherry-tree.jpg",
  "Cherry Stella": "plants/cherry-tree.jpg",
  "Cherry Lapins": "plants/cherry-tree.jpg",
  "Cherry Black Tartarian": "plants/cherry-tree.jpg",
  "Pomegranate Wonderful": "plants/pomegranate-tree.jpg",
  "Kiwiberry Issai": "plants/hardy-kiwi.jpg",
  "Hardy Kiwi": "plants/hardy-kiwi.jpg",
  "Orange Valencia": "plants/valencia-orange-tree.jpg",
  "Orange Cara Cara": "plants/orange-tree.jpg",
  "Orange Blood": "plants/orange-tree.jpg",
  "Mandarin Satsuma": "plants/mandarin-orange-tree.jpg",
  "Tangerine Dancy": "plants/mandarin-orange-tree.jpg",
  "Meyer Lemon": "plants/lemon-tree.jpg",
  "Eureka Lemon": "plants/lemon-tree.jpg",
  "Lemon Variegated Pink": "plants/lemon-tree.jpg",
  "Bearss Lime": "plants/bearss-lime.jpg",
  "Key Lime": "plants/key-lime.jpg",
  "Grapefruit Ruby Red": "plants/grapefruit-ruby-red.jpg",
  "Cranberry Pilgrim": "plants/cranberry-pilgrim.png"
};

const POPULAR_PLANT_REMOTE_FILES = {
  "Lavender": buildWikimediaImageUrl("Natural lavender.jpg"),
  "Hydrangea": buildWikimediaImageUrl("Hydrangea (49747346081).jpg"),
  "Rosemary": buildWikimediaImageUrl("Rosemary (390003562).jpg"),
  "Coneflower": buildWikimediaImageUrl("Pale purple coneflower (54699458585).jpg"),
  "Hosta": buildWikimediaImageUrl("Hosta.jpg"),
  "Japanese Maple": buildWikimediaImageUrl("Hever Castle Japanese maple.JPG"),
  "Snake Plant": buildWikimediaImageUrl("The snake plant.jpg"),
  "Monstera": buildWikimediaImageUrl("Indoor Monstera deliciosa.jpg"),
  "Pothos": buildWikimediaImageUrl("Pothos.jpg"),
  "Peace Lily": buildWikimediaImageUrl("Spathiphyllum (4479608470).jpg"),
  "Boston Fern": buildWikimediaImageUrl("Boston Fern (2874222232).png"),
  "Petunia": buildWikimediaImageUrl("Petunia.jpg"),
  "Marigold": buildWikimediaImageUrl("Marigold flower .jpg"),
  "Zinnia": buildWikimediaImageUrl("Zinnia.jpg"),
  "Sunflower": buildWikimediaImageUrl("Single Sunflower.jpg"),
  "Boxwood": buildWikimediaImageUrl("Box.jpg"),
  "Dogwood": buildWikimediaImageUrl("Blooming Dogwood.jpg"),
  "Blueberry": buildWikimediaImageUrl("Blueberries.jpg"),
  "Tomato": buildWikimediaImageUrl("Tomato plant.jpg"),
  "Aloe Vera": buildWikimediaImageUrl("Aloe Vera.jpg"),
  "White Oak": buildWikimediaImageUrl("White Oak Tree.jpg"),
  "Pin Oak": buildWikimediaImageUrl("Pin Oak (31290390796).jpg"),
  "Live Oak": buildWikimediaImageUrl("Fairchild Oak -- Live Oak.jpg"),
  "Tulip Tree": buildWikimediaImageUrl("Liriodendron tulipifera (2).jpg"),
  "American Sycamore": buildWikimediaImageUrl("Platanus occidentalis (32318633413).jpg"),
  "American Elm": buildWikimediaImageUrl("American elm (25048497086).jpg"),
  "Blue Spruce": buildWikimediaImageUrl("20200602 183335 Blue spruce.jpg"),
  "Douglas Fir": buildWikimediaImageUrl("Douglas fir tree.jpg"),
  "Japanese Black Pine": buildWikimediaImageUrl("Pinus thunbergii (Japanese Black Pine) (26532118401).jpg"),
  "Strawberry": buildWikimediaImageUrl("Strawberry Plant.jpg"),
  "Blackberry": buildWikimediaImageUrl("Blackberry plants.JPG"),
  "Raspberry": buildWikimediaImageUrl("Raspberry Plant.jpg"),
  "Fig": buildWikimediaImageUrl("Ficus carica.jpg"),
  "Apple Honeycrisp": buildWikimediaImageUrl("Apple Tree.jpg"),
  "Apple Fuji": buildWikimediaImageUrl("Apple Tree.jpg"),
  "Apple Gala": buildWikimediaImageUrl("Apple Tree.jpg"),
  "Apple Granny Smith": buildWikimediaImageUrl("Apple Tree.jpg"),
  "Apple McIntosh": buildWikimediaImageUrl("Apple Tree.jpg"),
  "Apple Pink Lady": buildWikimediaImageUrl("Apple Tree.jpg"),
  "Apple Braeburn": buildWikimediaImageUrl("Apple Tree.jpg"),
  "Apple Cortland": buildWikimediaImageUrl("Apple Tree.jpg"),
  "Apple Empire": buildWikimediaImageUrl("Apple Tree.jpg"),
  "Apple Jonathan": buildWikimediaImageUrl("Apple Tree.jpg"),
  "Apple Liberty": buildWikimediaImageUrl("Apple Tree.jpg"),
  "Apple Golden Delicious": buildWikimediaImageUrl("Apple Tree.jpg"),
  "Apple Winesap": buildWikimediaImageUrl("Apple Tree.jpg"),
  "Pear Bartlett": buildWikimediaImageUrl("A Pear tree.jpg"),
  "Pear Bosc": buildWikimediaImageUrl("A Pear tree.jpg"),
  "Pear Anjou": buildWikimediaImageUrl("A Pear tree.jpg"),
  "Pear Seckel": buildWikimediaImageUrl("A Pear tree.jpg"),
  "Pear Moonglow": buildWikimediaImageUrl("A Pear tree.jpg"),
  "Pear Forelle": buildWikimediaImageUrl("A Pear tree.jpg"),
  "Pear Kieffer": buildWikimediaImageUrl("A Pear tree.jpg"),
  "Pear Flemish Beauty": buildWikimediaImageUrl("A Pear tree.jpg"),
  "Peach": buildWikimediaImageUrl("Peach tree.JPG"),
  "Peach Elberta": buildWikimediaImageUrl("Peach tree.JPG"),
  "Peach Redhaven": buildWikimediaImageUrl("Peach tree.JPG"),
  "Peach Reliance": buildWikimediaImageUrl("Peach tree.JPG"),
  "Peach Saturn": buildWikimediaImageUrl("Peach tree.JPG"),
  "Peach Belle of Georgia": buildWikimediaImageUrl("Peach tree.JPG"),
  "Plum Santa Rosa": buildWikimediaImageUrl("Plum tree.jpg"),
  "Plum Methley": buildWikimediaImageUrl("Plum tree.jpg"),
  "Prune Stanley": buildWikimediaImageUrl("Plum tree.jpg"),
  "Cherry Bing": buildWikimediaImageUrl("Cherry trees.jpg"),
  "Cherry Rainier": buildWikimediaImageUrl("Cherry trees.jpg"),
  "Cherry Montmorency": buildWikimediaImageUrl("Cherry trees.jpg"),
  "Cherry Stella": buildWikimediaImageUrl("Cherry trees.jpg"),
  "Cherry Lapins": buildWikimediaImageUrl("Cherry trees.jpg"),
  "Cherry Black Tartarian": buildWikimediaImageUrl("Cherry trees.jpg"),
  "Pomegranate Wonderful": buildWikimediaImageUrl("Pomegranate tree.JPG"),
  "Kiwiberry Issai": buildWikimediaImageUrl("Kiwifruit on vine.JPG"),
  "Hardy Kiwi": buildWikimediaImageUrl("Kiwifruit on vine.JPG"),
  "Orange Valencia": buildWikimediaImageUrl("Valencia orange tree.jpg"),
  "Orange Cara Cara": buildWikimediaImageUrl("Orange Tree.jpg"),
  "Orange Blood": buildWikimediaImageUrl("Orange Tree.jpg"),
  "Mandarin Satsuma": buildWikimediaImageUrl("Mandarin Orange Tree.jpg"),
  "Tangerine Dancy": buildWikimediaImageUrl("Mandarin Orange Tree.jpg"),
  "Meyer Lemon": buildWikimediaImageUrl("A lemon tree.jpg"),
  "Eureka Lemon": buildWikimediaImageUrl("A lemon tree.jpg"),
  "Lemon Variegated Pink": buildWikimediaImageUrl("A lemon tree.jpg"),
  "Bearss Lime": buildWikimediaImageUrl("Citrus latifolia.jpg"),
  "Key Lime": buildWikimediaImageUrl("Citrus × aurantiifolia.jpg"),
  "Grapefruit Ruby Red": buildWikimediaImageUrl("Three year old Buckeye grapefruit tree.jpg"),
  "Cranberry Pilgrim": buildWikimediaImageUrl("Cranberry Fruit.png")
};

const IMAGE_STORAGE_PREFIX = "gardeningPlannerImage:";
const AUTO_PLANT_IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "gif"];
const AUTO_PLANT_IMAGE_FOLDERS = ["plants"];
const ZIP_ZONE_RULES = [
  { test: (zip) => zip >= 1000 && zip < 6000, zone: "5-9", region: "Northeast" },
  { test: (zip) => zip >= 6000 && zip < 10000, zone: "5-9", region: "Northeast" },
  { test: (zip) => zip >= 10000 && zip < 30000, zone: "5-9", region: "Southeast" },
  { test: (zip) => zip >= 30000 && zip < 35000, zone: "7-10", region: "Southeast" },
  { test: (zip) => zip >= 35000 && zip < 50000, zone: "3-7", region: "Midwest" },
  { test: (zip) => zip >= 50000 && zip < 70000, zone: "7-10", region: "Southwest" },
  { test: (zip) => zip >= 70000 && zip < 82000, zone: "3-7", region: "Mountain" },
  { test: (zip) => zip >= 82000 && zip < 90000, zone: "3-7", region: "Mountain" },
  { test: (zip) => zip >= 90000 && zip < 97000, zone: "7-10", region: "Pacific Coast" },
  { test: (zip) => zip >= 97000 && zip < 100000, zone: "5-9", region: "Northwest" }
];
const CANADA_ZONE_RULES = [
  { prefixes: ["V"], zone: "5-9", region: "Pacific Coast" },
  { prefixes: ["T"], zone: "3-7", region: "Mountain" },
  { prefixes: ["R"], zone: "3-7", region: "Mountain" },
  { prefixes: ["S"], zone: "3-7", region: "Midwest" },
  { prefixes: ["M", "L", "N", "K", "P"], zone: "5-9", region: "Northeast" },
  { prefixes: ["J", "G", "H"], zone: "3-7", region: "Northeast" },
  { prefixes: ["E", "B", "C", "A"], zone: "5-9", region: "Northeast" },
  { prefixes: ["X", "Y"], zone: "3-7", region: "Mountain" }
];

const PLANTS = [
  plant("Lavender", "Lavandula angustifolia", {
    category: "Herb",
    region: "Southwest",
    sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple, Blue", climate: "Mediterranean",
    hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$12-$18"
  }),
  plant("Hydrangea", "Hydrangea macrophylla", {
    category: "Shrub",
    region: "Northeast",
    sunlight: "Part Shade", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Blue, Pink", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Mildly Toxic",
    pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate",
    lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$28-$45"
  }),
  plant("Coneflower", "Echinacea purpurea", {
    category: "Flower",
    region: "Midwest",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate",
    hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$9-$15"
  }),
  plant("Boxwood", "Buxus sempervirens", {
    category: "Shrub",
    region: "Southeast",
    sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic",
    pestResistance: "Moderate", drainage: "Average", wind: "Sheltered", container: "Both", care: "Moderate",
    lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$35-$70"
  }),
  plant("Snake Plant", "Dracaena trifasciata", {
    category: "Houseplant",
    region: "Indoor Anywhere",
    sunlight: "Shade", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical",
    hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic",
    pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$18-$35"
  }),
  plant("Pansy", "Viola tricolor var. hortensis", {
    category: "Flower",
    region: "Northwest",
    sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple, Yellow", climate: "Cool",
    hardiness: "7-10", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Average", wind: "Sheltered", container: "Both", care: "Moderate",
    lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8"
  }),
  plant("Sedum", "Hylotelephium spectabile", {
    category: "Succulent",
    region: "Mountain",
    sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Dry",
    hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$8-$14"
  }),
  plant("Rosemary", "Salvia rosmarinus", {
    category: "Herb",
    region: "Pacific Coast",
    sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Blue", climate: "Mediterranean",
    hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$8-$16"
  }),
  plant("Bee Balm", "Monarda didyma", {
    category: "Flower",
    region: "Northeast",
    sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Moderate",
    lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$10-$18"
  }),
  plant("Hosta", "Hosta sieboldiana", {
    category: "Groundcover",
    region: "Northwest",
    sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool",
    hardiness: "3-7", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$12-$22"
  }),
  plant("Zinnia", "Zinnia elegans", {
    category: "Flower",
    region: "Southwest",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate",
    hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low",
    lifespan: "Annual", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$4-$7"
  }),
  plant("Clematis", "Clematis viticella", {
    category: "Vine",
    region: "Northeast",
    sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Mildly Toxic",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "High",
    lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$28-$46"
  }),
  plant("Black-eyed Susan", "Rudbeckia hirta", {
    category: "Flower",
    region: "Midwest",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14"
  }),
  plant("Japanese Maple", "Acer palmatum", {
    category: "Tree",
    region: "Pacific Coast",
    sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate",
    lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$65-$120"
  }),
  plant("Coral Bells", "Heuchera sanguinea", {
    category: "Flower",
    region: "Northwest",
    sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$11-$18"
  }),
  plant("Salvia", "Salvia nemorosa", {
    category: "Flower",
    region: "Southwest",
    sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Purple", climate: "Dry",
    hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14"
  }),
  plant("Marigold", "Tagetes erecta", {
    category: "Flower",
    region: "Southeast",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate",
    hardiness: "7-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low",
    lifespan: "Annual", cost: "Budget", purpose: "Edging", nurseryCost: "$3-$6"
  }),
  plant("Petunia", "Petunia x atkinsiana", {
    category: "Flower",
    region: "Southeast",
    sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink, Purple", climate: "Temperate",
    hardiness: "7-10", growthHabit: "Trailing", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate",
    lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8"
  }),
  plant("Geranium", "Pelargonium x hortorum", {
    category: "Flower",
    region: "Pacific Coast",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Red, Pink", climate: "Mediterranean",
    hardiness: "8-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Mildly Toxic",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low",
    lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$6-$10"
  }),
  plant("Boston Fern", "Nephrolepis exaltata", {
    category: "Houseplant",
    region: "Indoor Anywhere",
    sunlight: "Shade", soil: "Rich Organic", water: "High", setting: "Indoor", color: "Green", climate: "Tropical",
    hardiness: "8-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Container", care: "Moderate",
    lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$16-$28"
  }),
  plant("Peace Lily", "Spathiphyllum wallisii", {
    category: "Houseplant",
    region: "Indoor Anywhere",
    sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "White", climate: "Tropical",
    hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic",
    pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Container", care: "Low",
    lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$15-$28"
  }),
  plant("Fiddle Leaf Fig", "Ficus lyrata", {
    category: "Houseplant",
    region: "Indoor Anywhere",
    sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical",
    hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic",
    pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate",
    lifespan: "Perennial", cost: "Premium", purpose: "Houseplant", nurseryCost: "$45-$95"
  }),
  plant("Daylily", "Hemerocallis fulva", {
    category: "Flower",
    region: "Midwest",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate",
    hardiness: "3-7", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Toxic",
    pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$7-$12"
  }),
  plant("Peony", "Paeonia lactiflora", {
    category: "Flower",
    region: "Northeast",
    sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool",
    hardiness: "3-7", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate",
    lifespan: "Perennial", cost: "Premium", purpose: "Cut Flower", nurseryCost: "$24-$42"
  }),
  plant("Tulip", "Tulipa gesneriana", {
    category: "Flower",
    region: "Northeast",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool",
    hardiness: "3-7", growthHabit: "Upright", seasonality: "Spring", pollinator: "Low", toxicity: "Toxic",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate",
    lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$8-$16"
  }),
  plant("Daffodil", "Narcissus pseudonarcissus", {
    category: "Flower",
    region: "Northwest",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Cool",
    hardiness: "3-7", growthHabit: "Upright", seasonality: "Spring", pollinator: "Low", toxicity: "Toxic",
    pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$7-$14"
  }),
  plant("Blue Fescue", "Festuca glauca", {
    category: "Grass",
    region: "Mountain",
    sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry",
    hardiness: "5-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$8-$14"
  }),
  plant("English Ivy", "Hedera helix", {
    category: "Vine",
    region: "Northwest",
    sunlight: "Shade", soil: "Loam", water: "Moderate", setting: "Both", color: "Green", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Vining", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic",
    pestResistance: "High", drainage: "Average", wind: "Sheltered", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$8-$15"
  }),
  plant("Lantana", "Lantana camara", {
    category: "Shrub",
    region: "Southwest",
    sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Dry",
    hardiness: "8-11", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Toxic",
    pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$9-$16"
  }),
  plant("Impatiens", "Impatiens walleriana", {
    category: "Flower",
    region: "Southeast",
    sunlight: "Shade", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Pink", climate: "Temperate",
    hardiness: "7-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe",
    pestResistance: "Low", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate",
    lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8"
  }),
  plant("Yarrow", "Achillea millefolium", {
    category: "Flower",
    region: "Mountain",
    sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "White", climate: "Dry",
    hardiness: "3-7", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14"
  }),
  plant("Coreopsis", "Coreopsis verticillata", {
    category: "Flower",
    region: "Midwest",
    sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$9-$15"
  }),
  plant("Astilbe", "Astilbe chinensis", {
    category: "Flower",
    region: "Northwest",
    sunlight: "Part Shade", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Pink", climate: "Cool",
    hardiness: "3-7", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate",
    lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$12-$20"
  }),
  plant("Foxglove", "Digitalis purpurea", {
    category: "Flower",
    region: "Northwest",
    sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Cool",
    hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Toxic",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate",
    lifespan: "Biennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$10-$18"
  }),
  plant("Shasta Daisy", "Leucanthemum x superbum", {
    category: "Flower",
    region: "Midwest",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$8-$14"
  }),
  plant("Russian Sage", "Salvia yangii", {
    category: "Shrub",
    region: "Mountain",
    sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple", climate: "Dry",
    hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low",
    lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$14-$24"
  }),
  plant("Spirea", "Spiraea japonica", {
    category: "Shrub",
    region: "Midwest",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate",
    hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Privacy", nurseryCost: "$12-$22"
  }),
  plant("Camellia", "Camellia japonica", {
    category: "Shrub",
    region: "Southeast",
    sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate",
    hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate",
    lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$28-$55"
  }),
  plant("Lilac", "Syringa vulgaris", {
    category: "Shrub",
    region: "Northeast",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Cool",
    hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate",
    lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$32"
  }),
  plant("Arborvitae", "Thuja occidentalis", {
    category: "Tree",
    region: "Northeast",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool",
    hardiness: "3-7", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low",
    lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$48-$95"
  }),
  plant("Dogwood", "Cornus florida", {
    category: "Tree",
    region: "Southeast",
    sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate",
    lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$45-$85"
  }),
  plant("Serviceberry", "Amelanchier canadensis", {
    category: "Tree",
    region: "Northeast",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate",
    hardiness: "3-7", growthHabit: "Upright", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low",
    lifespan: "Perennial", cost: "Premium", purpose: "Pollinator Garden", nurseryCost: "$42-$80"
  }),
  plant("Creeping Thyme", "Thymus serpyllum", {
    category: "Groundcover",
    region: "Southwest",
    sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple", climate: "Dry",
    hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$13"
  }),
  plant("Ajuga", "Ajuga reptans", {
    category: "Groundcover",
    region: "Northwest",
    sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Temperate",
    hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Average", wind: "Sheltered", container: "Ground", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$8-$14"
  }),
  plant("Mondo Grass", "Ophiopogon japonicus", {
    category: "Grass",
    region: "Southeast",
    sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$10-$18"
  }),
  plant("Maiden Grass", "Miscanthus sinensis", {
    category: "Grass",
    region: "Midwest",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low",
    lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$14-$26"
  }),
  plant("Sweet Potato Vine", "Ipomoea batatas", {
    category: "Vine",
    region: "Southeast",
    sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Tropical",
    hardiness: "8-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low",
    lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$5-$9"
  }),
  plant("Star Jasmine", "Trachelospermum jasminoides", {
    category: "Vine",
    region: "Pacific Coast",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Mediterranean",
    hardiness: "7-10", growthHabit: "Vining", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate",
    lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$22-$38"
  }),
  plant("Basil", "Ocimum basilicum", {
    category: "Edible",
    region: "Indoor Anywhere",
    sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Green", climate: "Tropical",
    hardiness: "8-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low",
    lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8"
  }),
  plant("Mint", "Mentha spicata", {
    category: "Edible",
    region: "Northwest",
    sunlight: "Part Shade", soil: "Rich Organic", water: "High", setting: "Both", color: "Green", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Container", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$5-$10"
  }),
  plant("Blueberry", "Vaccinium corymbosum", {
    category: "Edible",
    region: "Northeast",
    sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Cool",
    hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate",
    lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$18-$34"
  }),
  plant("Tomato", "Solanum lycopersicum", {
    category: "Edible",
    region: "Southeast",
    sunlight: "Full Sun", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Red", climate: "Temperate",
    hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Toxic",
    pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "High",
    lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$9"
  }),
  plant("Jade Plant", "Crassula ovata", {
    category: "Succulent",
    region: "Indoor Anywhere",
    sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Dry",
    hardiness: "8-11", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic",
    pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low",
    lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$14-$28"
  }),
  plant("Aloe Vera", "Aloe barbadensis miller", {
    category: "Succulent",
    region: "Indoor Anywhere",
    sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Green", climate: "Dry",
    hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic",
    pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$10-$20"
  }),
  plant("Hens and Chicks", "Sempervivum tectorum", {
    category: "Succulent",
    region: "Mountain",
    sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Cool",
    hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12"
  }),
  plant("Coral Honeysuckle", "Lonicera sempervirens", {
    category: "Vine",
    region: "Southeast",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Vining", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate",
    lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$18-$30"
  }),
  plant("Catmint", "Nepeta faassenii", {
    category: "Herb",
    region: "Midwest",
    sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry",
    hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14"
  }),
  plant("Lemon Balm", "Melissa officinalis", {
    category: "Herb",
    region: "Northwest",
    sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Green", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$7-$12"
  }),
  plant("Creeping Jenny", "Lysimachia nummularia", {
    category: "Groundcover",
    region: "Northwest",
    sunlight: "Part Shade", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Green", climate: "Temperate",
    hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low",
    lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$8-$14"
  }),
  plant("Feather Reed Grass", "Calamagrostis x acutiflora", {
    category: "Grass",
    region: "Northeast",
    sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool",
    hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe",
    pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low",
    lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$14-$26"
  }),
  plant("Rubber Plant", "Ficus elastica", {
    category: "Houseplant",
    region: "Indoor Anywhere",
    sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical",
    hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low",
    lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$20-$40"
  }),
  plant("Coleus", "Plectranthus scutellarioides", {
    category: "Houseplant",
    region: "Indoor Anywhere",
    sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Red", climate: "Tropical",
    hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate",
    lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$5-$10"
  }),
  plant("Swiss Chard", "Beta vulgaris subsp. cicla", {
    category: "Edible",
    region: "Northwest",
    sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool",
    hardiness: "5-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe",
    pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low",
    lifespan: "Biennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$9"
  })
];

PLANTS.push(...[
  plant("Aster", "Symphyotrichum novae-angliae", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Bachelor Button", "Centaurea cyanus", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$4-$8" }),
  plant("Begonia", "Begonia semperflorens", { category: "Flower", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Pink", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Bleeding Heart", "Lamprocapnos spectabilis", { category: "Flower", region: "Northwest", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$14-$22" }),
  plant("Calendula", "Calendula officinalis", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$4-$7" }),
  plant("Camassia", "Camassia quamash", { category: "Flower", region: "Northwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$10-$18" }),
  plant("Candytuft", "Iberis sempervirens", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$8-$14" }),
  plant("Celosia", "Celosia argentea", { category: "Flower", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Tropical", hardiness: "8-11", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Cosmos", "Cosmos bipinnatus", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Dry", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$4-$7" }),
  plant("Dianthus", "Dianthus barbatus", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Biennial", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$6-$12" }),
  plant("Gaura", "Oenothera lindheimeri", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "White", climate: "Dry", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$10-$18" }),
  plant("Gerbera Daisy", "Gerbera jamesonii", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Red", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$12-$20" }),
  plant("Globe Thistle", "Echinops ritro", { category: "Flower", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$10-$16" }),
  plant("Hellebore", "Helleborus orientalis", { category: "Flower", region: "Northwest", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Winter", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Edging", nurseryCost: "$18-$30" }),
  plant("Hibiscus", "Hibiscus rosa-sinensis", { category: "Flower", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Red", climate: "Tropical", hardiness: "8-11", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$32" }),
  plant("Iris", "Iris germanica", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$8-$16" }),
  plant("Lobelia", "Lobelia erinus", { category: "Flower", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "7-10", growthHabit: "Trailing", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Moist", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Lupine", "Lupinus polyphyllus", { category: "Flower", region: "Northwest", sunlight: "Full Sun", soil: "Sandy", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Spring", pollinator: "High", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$10-$18" }),
  plant("Nasturtium", "Tropaeolum majus", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Trailing", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$7" }),
  plant("Phlox", "Phlox paniculata", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$10-$18" }),
  plant("Snapdragon", "Antirrhinum majus", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$4-$8" }),
  plant("Sunflower", "Helianthus annuus", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$4-$8" }),
  plant("Verbascum", "Verbascum thapsus", { category: "Flower", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Dry", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Biennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$6-$10" })
]);

const state = {};

PLANTS.push(...[
  plant("Abelia", "Abelia x grandiflora", { category: "Shrub", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$30" }),
  plant("Barberry", "Berberis thunbergii", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Clay", water: "Low", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
  plant("Beautybush", "Kolkwitzia amabilis", { category: "Shrub", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$28" }),
  plant("Bottlebrush", "Callistemon citrinus", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$24-$40" }),
  plant("Forsythia", "Forsythia x intermedia", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
  plant("Gardenia", "Gardenia jasminoides", { category: "Shrub", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Tropical", hardiness: "8-11", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "High", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$24-$42" }),
  plant("Inkberry", "Ilex glabra", { category: "Shrub", region: "Northeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$26-$44" }),
  plant("Oleander", "Nerium oleander", { category: "Shrub", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Dry", hardiness: "8-11", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$32" }),
  plant("Pieris", "Pieris japonica", { category: "Shrub", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Low", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$26-$45" }),
  plant("Potentilla", "Dasiphora fruticosa", { category: "Shrub", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$14-$24" }),
  plant("Smoke Bush", "Cotinus coggygria", { category: "Shrub", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$22-$38" }),
  plant("Summersweet", "Clethra alnifolia", { category: "Shrub", region: "Northeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$18-$30" }),
  plant("Viburnum", "Viburnum dentatum", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$30" }),
  plant("Weigela", "Weigela florida", { category: "Shrub", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$14-$24" }),
  plant("Witch Hazel", "Hamamelis virginiana", { category: "Shrub", region: "Northeast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$26-$42" }),

  plant("Aspen", "Populus tremuloides", { category: "Tree", region: "Mountain", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$55-$110" }),
  plant("Birch", "Betula nigra", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Clay", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$48-$92" }),
  plant("Catalpa", "Catalpa speciosa", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Clay", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$55-$95" }),
  plant("Crepe Myrtle Tree", "Lagerstroemia indica tree form", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$58-$105" }),
  plant("Eastern Redbud", "Cercis canadensis", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$45-$85" }),
  plant("Japanese Stewartia", "Stewartia pseudocamellia", { category: "Tree", region: "Northeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$70-$130" }),
  plant("Olive", "Olea europaea", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$65-$120" }),
  plant("Paperbark Maple", "Acer griseum", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$70-$125" }),
  plant("River Birch Multi-Stem", "Betula nigra multi-stem", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Clay", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$60-$110" }),
  plant("Sweetbay Magnolia", "Magnolia virginiana", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$58-$105" })
]);

PLANTS.push(...[
  plant("Bearberry", "Arctostaphylos uva-ursi", { category: "Groundcover", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$9-$16" }),
  plant("Dichondra", "Dichondra argentea", { category: "Groundcover", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "8-11", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$8-$14" }),
  plant("Liriope", "Liriope muscari", { category: "Groundcover", region: "Southeast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$8-$14" }),
  plant("Pachysandra", "Pachysandra terminalis", { category: "Groundcover", region: "Northeast", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Snow-in-Summer", "Cerastium tomentosum", { category: "Groundcover", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Sweet Woodruff", "Galium odoratum", { category: "Groundcover", region: "Northwest", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$8-$13" }),
  plant("Vinca", "Vinca minor", { category: "Groundcover", region: "Northeast", sunlight: "Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Average", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Wire Vine", "Muehlenbeckia axillaris", { category: "Groundcover", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$8-$14" }),
  plant("Blue Oat Grass", "Helictotrichon sempervirens", { category: "Grass", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$12-$18" }),
  plant("Japanese Blood Grass", "Imperata cylindrica Rubra", { category: "Grass", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$10-$18" }),
  plant("Little Bluestem", "Schizachyrium scoparium", { category: "Grass", region: "Midwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$10-$18" }),
  plant("Prairie Dropseed", "Sporobolus heterolepis", { category: "Grass", region: "Midwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$12-$20" }),
  plant("Switchgrass", "Panicum virgatum", { category: "Grass", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$12-$20" }),
  plant("Zebra Grass", "Miscanthus sinensis Zebrinus", { category: "Grass", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$14-$24" }),
  plant("Chives", "Allium schoenoprasum", { category: "Herb", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Purple", climate: "Cool", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$5-$10" }),
  plant("Cilantro", "Coriandrum sativum", { category: "Herb", region: "Southwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Green", climate: "Temperate", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Dill", "Anethum graveolens", { category: "Herb", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$4-$8" }),
  plant("Sage", "Salvia officinalis", { category: "Herb", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Green", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$6-$12" }),
  plant("Tarragon", "Artemisia dracunculus", { category: "Herb", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Green", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$8-$14" })
]);

PLANTS.push(...[
  plant("Anthurium", "Anthurium andraeanum", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Red", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Houseplant", nurseryCost: "$22-$40" }),
  plant("Chinese Evergreen", "Aglaonema commutatum", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$16-$30" }),
  plant("Monstera", "Monstera deliciosa", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Vining", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Houseplant", nurseryCost: "$28-$55" }),
  plant("Parlor Palm", "Chamaedorea elegans", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$18-$32" }),
  plant("Spider Plant", "Chlorophytum comosum", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$10-$20" }),
  plant("Cucumber", "Cucumis sativus", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "7-10", growthHabit: "Vining", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "High", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Kale", "Brassica oleracea var. sabellica", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Biennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Pepper", "Capsicum annuum", { category: "Edible", region: "Southwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Dry", hardiness: "8-11", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Rosemary Topiary", "Salvia rosmarinus topiary", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$18-$34" }),
  plant("Strawberry", "Fragaria x ananassa", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$6-$12" }),
  plant("Burro's Tail", "Sedum morganianum", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Dry", hardiness: "8-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$14-$26" }),
  plant("Echeveria", "Echeveria elegans", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Green", climate: "Dry", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$8-$16" }),
  plant("String of Pearls", "Curio rowleyanus", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Dry", hardiness: "8-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$14-$26" }),
  plant("Yucca", "Yucca filamentosa", { category: "Succulent", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "White", climate: "Dry", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
  plant("ZZ Plant", "Zamioculcas zamiifolia", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Shade", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$18-$32" }),
  plant("Coleus Flame", "Plectranthus scutellarioides Flame", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Red", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$5-$10" }),
  plant("Oregano Greek", "Origanum vulgare hirtum", { category: "Herb", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Green", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$6-$12" }),
  plant("Parsley Curled", "Petroselinum crispum crispum", { category: "Edible", region: "Midwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Biennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Morning Glory", "Ipomoea purpurea", { category: "Vine", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "7-10", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Privacy", nurseryCost: "$4-$8" })
]);

PLANTS.push(...[
  plant("Agastache", "Agastache foeniculum", { category: "Flower", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple", climate: "Dry", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$9-$15" }),
  plant("Alyssum", "Lobularia maritima", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Edging", nurseryCost: "$4-$7" }),
  plant("Anemone", "Anemone hupehensis", { category: "Flower", region: "Northeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$12-$20" }),
  plant("Balloon Flower", "Platycodon grandiflorus", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$8-$14" }),
  plant("Blanket Flower", "Gaillardia aristata", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Dry", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Delphinium", "Delphinium elatum", { category: "Flower", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Toxic", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "High", lifespan: "Perennial", cost: "Premium", purpose: "Cut Flower", nurseryCost: "$14-$24" }),
  plant("Gomphrena", "Gomphrena globosa", { category: "Flower", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$4-$7" }),
  plant("Hollyhock", "Alcea rosea", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Biennial", cost: "Budget", purpose: "Privacy", nurseryCost: "$5-$10" }),
  plant("Penstemon", "Penstemon digitalis", { category: "Flower", region: "Mountain", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "White", climate: "Dry", hardiness: "3-7", growthHabit: "Upright", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$9-$16" }),
  plant("Scabiosa", "Scabiosa columbaria", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Blue", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$9-$16" }),
  plant("Statice", "Limonium sinuatum", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$4-$8" }),
  plant("Sweet Pea", "Lathyrus odoratus", { category: "Flower", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "5-9", growthHabit: "Vining", seasonality: "Spring", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$4-$8" }),
  plant("Tithonia", "Tithonia rotundifolia", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Red", climate: "Dry", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$4-$8" }),
  plant("Veronica", "Veronica spicata", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$8-$15" }),
  plant("Azalea", "Rhododendron indicum", { category: "Shrub", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$22-$40" }),
  plant("Cotoneaster", "Cotoneaster dammeri", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$22" }),
  plant("Daphne", "Daphne odora", { category: "Shrub", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Low", toxicity: "Toxic", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Edging", nurseryCost: "$28-$50" }),
  plant("Elderberry", "Sambucus canadensis", { category: "Shrub", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "High", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$32" }),
  plant("Escallonia", "Escallonia rubra", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Pink", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$30" }),
  plant("Fatsia", "Fatsia japonica", { category: "Shrub", region: "Northwest", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$24-$42" }),
  plant("Loropetalum", "Loropetalum chinense", { category: "Shrub", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$20-$38" }),
  plant("Mock Orange", "Philadelphus coronarius", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
  plant("Ninebark", "Physocarpus opulifolius", { category: "Shrub", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
]);

PLANTS.push(...[
  plant("Crape Myrtle", "Lagerstroemia indica", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$55-$110" }),
  plant("Ginkgo", "Ginkgo biloba", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$65-$130" }),
  plant("Hawthorn", "Crataegus phaenopyrum", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "High", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$45-$85" }),
  plant("Honeylocust", "Gleditsia triacanthos", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$55-$110" }),
  plant("Japanese Snowbell", "Styrax japonicus", { category: "Tree", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$60-$115" }),
  plant("Tulip Poplar", "Liriodendron tulipifera", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$65-$120" }),
  plant("Winterberry", "Ilex verticillata", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Winter", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$32" }),
  plant("Bugleweed Bronze", "Ajuga reptans Bronze Beauty", { category: "Groundcover", region: "Northeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$6-$10" }),
  plant("Ice Plant", "Delosperma cooperi", { category: "Groundcover", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Dry", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$6-$11" }),
  plant("Mazus", "Mazus reptans", { category: "Groundcover", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$6-$10" }),
  plant("Sedum Dragon's Blood", "Sedum spurium Dragon's Blood", { category: "Groundcover", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Dry", hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$6-$11" }),
  plant("Fountain Grass", "Pennisetum alopecuroides", { category: "Grass", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$12-$22" }),
  plant("Hakone Grass", "Hakonechloa macra", { category: "Grass", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$16-$28" }),
  plant("Mexican Feather Grass", "Nassella tenuissima", { category: "Grass", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$10-$18" }),
  plant("Muhly Grass", "Muhlenbergia capillaris", { category: "Grass", region: "Southeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Dry", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$12-$22" }),
  plant("Chamomile", "Matricaria chamomilla", { category: "Herb", region: "Northwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Both", color: "White", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$4-$8" }),
  plant("Fennel", "Foeniculum vulgare", { category: "Herb", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$5-$9" }),
  plant("Thyme", "Thymus vulgaris", { category: "Herb", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Green", climate: "Dry", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$5-$10" }),
  plant("Bird's Nest Fern", "Asplenium nidus", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$16-$28" }),
  plant("Calathea", "Goeppertia orbifolia", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Moist", wind: "Sheltered", container: "Container", care: "High", lifespan: "Perennial", cost: "Premium", purpose: "Houseplant", nurseryCost: "$24-$45" }),
  plant("Croton", "Codiaeum variegatum", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Red", climate: "Tropical", hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$18-$34" }),
  plant("Dieffenbachia", "Dieffenbachia seguine", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$16-$30" }),
  plant("Dracaena Marginata", "Dracaena marginata", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$18-$32" }),
  plant("Pothos", "Epipremnum aureum", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Vining", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$10-$22" }),
  plant("Aubergine", "Solanum melongena", { category: "Edible", region: "Southwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Dry", hardiness: "8-11", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Broccoli", "Brassica oleracea var. italica", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Carrot", "Daucus carota subsp. sativus", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Sandy", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Biennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$3-$6" }),
  plant("Fig", "Ficus carica", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$35-$70" }),
  plant("Lettuce", "Lactuca sativa", { category: "Edible", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$3-$6" }),
  plant("Watermelon", "Citrullus lanatus", { category: "Edible", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "8-11", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Groundcover", nurseryCost: "$4-$8" }),
  plant("Kalanchoe", "Kalanchoe blossfeldiana", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Indoor", color: "Red", climate: "Dry", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Winter", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$8-$16" }),
  plant("Paddle Plant", "Kalanchoe luciae", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Red", climate: "Dry", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$10-$18" }),
  plant("Jasmine", "Jasminum officinale", { category: "Vine", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$30" }),
  plant("Passionflower", "Passiflora incarnata", { category: "Vine", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "7-10", growthHabit: "Vining", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$14-$26" }),
  plant("Trumpet Vine", "Campsis radicans", { category: "Vine", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Vining", seasonality: "Summer", pollinator: "High", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$12-$22" }),
  plant("Virginia Creeper", "Parthenocissus quinquefolia", { category: "Vine", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "3-7", growthHabit: "Vining", seasonality: "Fall", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Privacy", nurseryCost: "$10-$18" })
]);

PLANTS.push(...[
  plant("Bergenia", "Bergenia cordifolia", { category: "Flower", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$10-$18" }),
  plant("Bluebeard", "Caryopteris x clandonensis", { category: "Shrub", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$16-$28" }),
  plant("Butterfly Bush", "Buddleja davidii", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$18-$32" }),
  plant("Canna Lily", "Canna indica", { category: "Flower", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$10-$18" }),
  plant("Carex", "Carex oshimensis", { category: "Grass", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$10-$18" }),
  plant("Caryopteris Gold", "Caryopteris x clandonensis Sunshine Blue", { category: "Shrub", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$18-$30" }),
  plant("Clivia", "Clivia miniata", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Yellow", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Houseplant", nurseryCost: "$28-$48" }),
  plant("Columbine", "Aquilegia vulgaris", { category: "Flower", region: "Mountain", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Spring", pollinator: "High", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Crocosmia", "Crocosmia x crocosmiiflora", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$9-$16" }),
  plant("Dusty Miller", "Jacobaea maritima", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "White", climate: "Dry", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Edging", nurseryCost: "$4-$8" }),
  plant("Elephant Ear", "Colocasia esculenta", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "High", setting: "Both", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$20-$40" }),
  plant("Euonymus", "Euonymus fortunei", { category: "Shrub", region: "Northeast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$10-$18" }),
  plant("Gaura White", "Oenothera lindheimeri Whirling Butterflies", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "White", climate: "Dry", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$9-$16" }),
  plant("Hebe", "Hebe x andersonii", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Purple", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$14-$24" }),
  plant("Heuchera Lime", "Heuchera Lime Marmalade", { category: "Flower", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$12-$20" }),
  plant("Hoya", "Hoya carnosa", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "White", climate: "Tropical", hardiness: "8-11", growthHabit: "Vining", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$18-$34" }),
  plant("Lady's Mantle", "Alchemilla mollis", { category: "Flower", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$10-$18" }),
  plant("Ligustrum", "Ligustrum japonicum", { category: "Shrub", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$30" }),
  plant("Nandina", "Nandina domestica", { category: "Shrub", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Winter", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$16-$28" }),
  plant("Pittosporum", "Pittosporum tobira", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$32" }),
  plant("Pieris Forest Flame", "Pieris japonica Forest Flame", { category: "Shrub", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Low", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$24-$42" }),
  plant("Rhamnus", "Frangula californica", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
  plant("Snowberry", "Symphoricarpos albus", { category: "Shrub", region: "Northwest", sunlight: "Part Shade", soil: "Loam", water: "Low", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Winter", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$14-$24" }),
  plant("Verbena", "Verbena bonariensis", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Purple", climate: "Dry", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$7-$12" }),
  plant("Wax Begonia", "Begonia semperflorens", { category: "Flower", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Yucca Red", "Hesperaloe parviflora", { category: "Succulent", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Dry", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$16-$28" })
]);

PLANTS.push(...[
  plant("Allium", "Allium giganteum", { category: "Flower", region: "Mountain", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Purple", climate: "Dry", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "High", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$9-$16" }),
  plant("Angelonia", "Angelonia angustifolia", { category: "Flower", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$5-$9" }),
  plant("Armeria", "Armeria maritima", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$7-$12" }),
  plant("Baptisia", "Baptisia australis", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$12-$20" }),
  plant("Bellflower", "Campanula carpatica", { category: "Flower", region: "Northeast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$8-$14" }),
  plant("Brunnera", "Brunnera macrophylla", { category: "Flower", region: "Northwest", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$10-$18" }),
  plant("Chocolate Cosmos", "Cosmos atrosanguineus", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Cut Flower", nurseryCost: "$12-$22" }),
  plant("Cranesbill", "Geranium sanguineum", { category: "Flower", region: "Northeast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$8-$14" }),
  plant("Diascia", "Diascia barberae", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Trailing", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Container", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$5-$9" }),
  plant("Heliopsis", "Heliopsis helianthoides", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Joe Pye Weed", "Eutrochium purpureum", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$10-$18" }),
  plant("Kniphofia", "Kniphofia uvaria", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Dry", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$11-$19" }),
  plant("Liatris", "Liatris spicata", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Nemesia", "Nemesia fruticans", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$5-$9" }),
  plant("Pincushion Flower", "Scabiosa caucasica", { category: "Flower", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$9-$15" }),
  plant("Sea Holly", "Eryngium planum", { category: "Flower", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$9-$16" }),
  plant("Toad Lily", "Tricyrtis hirta", { category: "Flower", region: "Northwest", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$10-$18" }),
  plant("Torenia", "Torenia fournieri", { category: "Flower", region: "Southeast", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "8-11", growthHabit: "Trailing", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Abutilon", "Abutilon hybridum", { category: "Shrub", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$16-$28" }),
  plant("Ceanothus", "Ceanothus thyrsiflorus", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$30" }),
  plant("Choisya", "Choisya ternata", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "White", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$30" }),
  plant("Deutzia", "Deutzia gracilis", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$14-$24" }),
  plant("Mahonia", "Mahonia aquifolium", { category: "Shrub", region: "Northwest", sunlight: "Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Winter", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Average", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
  plant("Osmanthus", "Osmanthus fragrans", { category: "Shrub", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$22-$38" })
]);

PLANTS.push(...[
  plant("Photinia", "Photinia x fraseri", { category: "Shrub", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$32" }),
  plant("Rose of Sharon", "Hibiscus syriacus", { category: "Shrub", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$30" }),
  plant("Tea Olive", "Osmanthus heterophyllus", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$22-$36" }),
  plant("Vitex", "Vitex agnus-castus", { category: "Shrub", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple", climate: "Dry", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$18-$30" }),
  plant("Fringe Tree", "Chionanthus virginicus", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$50-$95" }),
  plant("Desert Willow", "Chilopsis linearis", { category: "Tree", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Dry", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Pollinator Garden", nurseryCost: "$45-$85" }),
  plant("Golden Currant", "Ribes aureum", { category: "Tree", region: "Mountain", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Dry", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$16-$28" }),
  plant("Persian Ironwood", "Parrotia persica", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$65-$120" }),
  plant("Smoke Tree", "Cotinus coggygria", { category: "Tree", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple", climate: "Dry", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$40-$85" }),
  plant("Stewartia", "Stewartia koreana", { category: "Tree", region: "Northeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$70-$130" }),
  plant("Sweetspire", "Itea virginica", { category: "Shrub", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
  plant("Yew", "Taxus x media", { category: "Shrub", region: "Northeast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Average", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$20-$34" }),
  plant("Baby Tears", "Soleirolia soleirolii", { category: "Groundcover", region: "Pacific Coast", sunlight: "Shade", soil: "Rich Organic", water: "High", setting: "Both", color: "Green", climate: "Temperate", hardiness: "7-10", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$6-$12" }),
  plant("Corsican Mint", "Mentha requienii", { category: "Groundcover", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$6-$10" }),
  plant("Dymondia", "Dymondia margaretae", { category: "Groundcover", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$8-$14" }),
  plant("Epimedium", "Epimedium x rubrum", { category: "Groundcover", region: "Northwest", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$10-$18" }),
  plant("Lamium", "Lamium maculatum", { category: "Groundcover", region: "Northeast", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Scotch Moss", "Sagina subulata", { category: "Groundcover", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$6-$10" }),
  plant("Sea Thrift", "Armeria pseudarmeria", { category: "Groundcover", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$7-$12" }),
  plant("Blue Grama", "Bouteloua gracilis", { category: "Grass", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$8-$14" }),
  plant("Northern Sea Oats", "Chasmanthium latifolium", { category: "Grass", region: "Southeast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$12-$20" }),
  plant("Society Garlic", "Tulbaghia violacea", { category: "Herb", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Purple", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$6-$12" }),
  plant("Marjoram", "Origanum majorana", { category: "Herb", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Green", climate: "Dry", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Sorrel", "Rumex acetosa", { category: "Herb", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$5-$9" })
]);

PLANTS.push(...[
  plant("African Violet", "Saintpaulia ionantha", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Purple", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$8-$16" }),
  plant("Alocasia Polly", "Alocasia amazonica", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$18-$34" }),
  plant("Areca Palm", "Dypsis lutescens", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$20-$38" }),
  plant("Begonia Rex", "Begonia rex-cultorum", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Red", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$14-$28" }),
  plant("Cast Iron Plant", "Aspidistra elatior", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$18-$32" }),
  plant("Christmas Cactus", "Schlumbergera bridgesii", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Red", climate: "Tropical", hardiness: "8-11", growthHabit: "Trailing", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$10-$20" }),
  plant("Norfolk Island Pine", "Araucaria heterophylla", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Houseplant", nurseryCost: "$24-$45" }),
  plant("Peperomia", "Peperomia obtusifolia", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$10-$20" }),
  plant("Philodendron Heartleaf", "Philodendron hederaceum", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Vining", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$10-$22" }),
  plant("Prayer Plant", "Maranta leuconeura", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Moist", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$14-$26" }),
  plant("Air Plant", "Tillandsia ionantha", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$6-$14" }),
  plant("Banana Dwarf Cavendish", "Musa acuminata Dwarf Cavendish", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Rich Organic", water: "High", setting: "Both", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "High", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$28-$55" }),
  plant("Blackberry", "Rubus fruticosus", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$26" }),
  plant("Cabbage", "Brassica oleracea var. capitata", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Biennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Cauliflower", "Brassica oleracea var. botrytis", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Peach", "Prunus persica", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$35-$70" }),
  plant("Raspberry", "Rubus idaeus", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-7", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" }),
  plant("Zucchini", "Cucurbita pepo", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Agave", "Agave americana", { category: "Succulent", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$24-$48" }),
  plant("Haworthia Zebra", "Haworthiopsis attenuata", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Dry", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$8-$16" }),
  plant("Lithops", "Lithops aucampiae", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Dry", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$10-$18" }),
  plant("Chalk Sticks", "Senecio serpens", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Blue", climate: "Dry", hardiness: "8-11", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$10-$18" }),
  plant("Bougainvillea", "Bougainvillea glabra", { category: "Vine", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Dry", hardiness: "8-11", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$34" }),
  plant("Mandevilla", "Mandevilla sanderi", { category: "Vine", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "8-11", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$14-$28" })
]);

PLANTS.push(...[
  plant("Borage", "Borago officinalis", { category: "Herb", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Blue", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$4-$8" }),
  plant("Calendula Orange", "Calendula officinalis Orange Flash", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$4-$8" }),
  plant("Ceratostigma", "Ceratostigma plumbaginoides", { category: "Groundcover", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$8-$14" }),
  plant("Clematis Montana", "Clematis montana", { category: "Vine", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "5-9", growthHabit: "Vining", seasonality: "Spring", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
  plant("Cotyledon", "Cotyledon orbiculata", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Dry", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$10-$18" }),
  plant("Crape Jasmine", "Tabernaemontana divaricata", { category: "Shrub", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Tropical", hardiness: "8-11", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$30" }),
  plant("Diascia Coral", "Diascia integerrima Coral Belle", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$6-$10" }),
  plant("Evergreen Huckleberry", "Vaccinium ovatum", { category: "Shrub", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$30" }),
  plant("Gaillardia Arizona Sun", "Gaillardia aristata Arizona Sun", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Dry", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$7-$12" }),
  plant("Gazania", "Gazania rigens", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Dry", hardiness: "7-10", growthHabit: "Groundcover", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$5-$10" }),
  plant("Grapevine", "Vitis vinifera", { category: "Vine", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Vining", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "High", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$30" }),
  plant("Grevillea", "Grevillea rosmarinifolia", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Winter", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$18-$30" }),
  plant("Hardy Geranium", "Geranium Rozanne", { category: "Flower", region: "Northeast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$10-$18" }),
  plant("Kangaroo Paw", "Anigozanthos flavidus", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Cut Flower", nurseryCost: "$14-$24" }),
  plant("Lobularia White", "Lobularia maritima Snow Princess", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Groundcover", nurseryCost: "$5-$9" }),
  plant("Lomandra", "Lomandra longifolia", { category: "Grass", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$12-$20" }),
  plant("Myrtle", "Myrtus communis", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "White", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
  plant("Oxalis", "Oxalis triangularis", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Purple", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$10-$18" }),
  plant("Periwinkle Catharanthus", "Catharanthus roseus", { category: "Flower", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Persicaria", "Persicaria amplexicaulis", { category: "Flower", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$10-$18" }),
  plant("Plectranthus", "Plectranthus argentatus", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Low", setting: "Both", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$10-$18" }),
  plant("Saxifraga", "Saxifraga x arendsii", { category: "Groundcover", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Scented Geranium", "Pelargonium graveolens", { category: "Herb", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Both", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$8-$14" }),
  plant("Senna", "Senna artemisioides", { category: "Shrub", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Dry", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Winter", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$16-$28" }),
  plant("Verbena White", "Verbena lanai twister white", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Trailing", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Container", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$5-$9" })
]);

PLANTS.push(...[
  plant("Apple Honeycrisp", "Malus domestica Honeycrisp", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Apple Fuji", "Malus domestica Fuji", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Apple Gala", "Malus domestica Gala", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$36-$68" }),
  plant("Apple Granny Smith", "Malus domestica Granny Smith", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$36-$68" }),
  plant("Apple McIntosh", "Malus domestica McIntosh", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$36-$68" }),
  plant("Pear Bartlett", "Pyrus communis Bartlett", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Pear Bosc", "Pyrus communis Bosc", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Pear Anjou", "Pyrus communis Anjou", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Peach Elberta", "Prunus persica Elberta", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$70" }),
  plant("Peach Redhaven", "Prunus persica Redhaven", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$70" }),
  plant("Plum Santa Rosa", "Prunus salicina Santa Rosa", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$70" }),
  plant("Italian Prune Plum", "Prunus domestica Italian Prune", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Cherry Bing", "Prunus avium Bing", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$42-$78" }),
  plant("Cherry Rainier", "Prunus avium Rainier", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$42-$78" }),
  plant("Cherry Montmorency", "Prunus cerasus Montmorency", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Apricot Moorpark", "Prunus armeniaca Moorpark", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Nectarine Fantasia", "Prunus persica nucipersica Fantasia", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Persimmon Fuyu", "Diospyros kaki Fuyu", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Orange", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$42-$80" }),
  plant("Pomegranate Wonderful", "Punica granatum Wonderful", { category: "Edible", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Dry", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Pollinator Garden", nurseryCost: "$24-$42" }),
  plant("Quince Pineapple", "Cydonia oblonga Pineapple", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Mulberry Illinois Everbearing", "Morus alba Illinois Everbearing", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$32-$58" }),
  plant("Gooseberry Hinnonmaki Red", "Ribes uva-crispa Hinnonmaki Red", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" }),
  plant("Currant Red Lake", "Ribes rubrum Red Lake", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" }),
  plant("Currant Consort", "Ribes nigrum Consort", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Cool", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" })
]);

PLANTS.push(...[
  plant("Jostaberry", "Ribes x nidigrolaria", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Cool", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" }),
  plant("Boysenberry", "Rubus ursinus x idaeus", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "5-9", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" }),
  plant("Loganberry", "Rubus x loganobaccus", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" }),
  plant("Tayberry", "Rubus fruticosus x idaeus Tayberry", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" }),
  plant("Marionberry", "Rubus ursinus Marion", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "5-9", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" }),
  plant("Hardy Kiwi", "Actinidia arguta", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Vining", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "High", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$18-$32" }),
  plant("Kiwiberry Issai", "Actinidia arguta Issai", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Vining", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "High", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$18-$32" }),
  plant("Passionfruit Purple", "Passiflora edulis", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$16-$30" }),
  plant("Dragon Fruit", "Selenicereus undatus", { category: "Edible", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Dry", hardiness: "8-11", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$22-$40" }),
  plant("Pineapple Guava", "Acca sellowiana", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$22-$40" }),
  plant("Meyer Lemon", "Citrus x meyeri", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Yellow", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$28-$52" }),
  plant("Eureka Lemon", "Citrus limon Eureka", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Yellow", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$28-$52" }),
  plant("Bearss Lime", "Citrus latifolia", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Green", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$28-$52" }),
  plant("Key Lime", "Citrus aurantiifolia", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Green", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$28-$52" }),
  plant("Orange Valencia", "Citrus sinensis Valencia", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Orange", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$30-$55" }),
  plant("Orange Cara Cara", "Citrus sinensis Cara Cara", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Orange", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$30-$55" }),
  plant("Mandarin Satsuma", "Citrus unshiu", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Orange", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$30-$55" }),
  plant("Tangerine Dancy", "Citrus reticulata Dancy", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Orange", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$30-$55" }),
  plant("Grapefruit Ruby Red", "Citrus paradisi Ruby Red", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Pink", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$30-$55" }),
  plant("Kumquat Nagami", "Citrus japonica Nagami", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Orange", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$26-$48" }),
  plant("Calamondin Orange", "Citrofortunella microcarpa", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Orange", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$26-$48" }),
  plant("Fig Brown Turkey", "Ficus carica Brown Turkey", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$28-$52" }),
  plant("Fig Celeste", "Ficus carica Celeste", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$28-$52" }),
  plant("Fig Chicago Hardy", "Ficus carica Chicago Hardy", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$28-$52" })
]);

PLANTS.push(...[
  plant("Apple Pink Lady", "Malus domestica Pink Lady", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Apple Braeburn", "Malus domestica Braeburn", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Apple Cortland", "Malus domestica Cortland", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Apple Empire", "Malus domestica Empire", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Pear Seckel", "Pyrus communis Seckel", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Pear Moonglow", "Pyrus communis Moonglow", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Pear Forelle", "Pyrus communis Forelle", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Peach Reliance", "Prunus persica Reliance", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$70" }),
  plant("Peach Saturn", "Prunus persica Saturn", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$70" }),
  plant("Peach Belle of Georgia", "Prunus persica Belle of Georgia", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$70" }),
  plant("Plum Methley", "Prunus salicina Methley", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$70" }),
  plant("Prune Stanley", "Prunus domestica Stanley", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Apricot Goldcot", "Prunus armeniaca Goldcot", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Apricot Tilton", "Prunus armeniaca Tilton", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Nectarine Arctic Jay", "Prunus persica nucipersica Arctic Jay", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Nectarine Double Delight", "Prunus persica nucipersica Double Delight", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Persimmon Hachiya", "Diospyros kaki Hachiya", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Orange", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$42-$80" }),
  plant("Goji Berry", "Lycium barbarum", { category: "Edible", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Dry", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$14-$24" }),
  plant("Salal Berry", "Gaultheria shallon", { category: "Edible", region: "Northwest", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Cool", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" }),
  plant("Cloudberry", "Rubus chamaemorus", { category: "Edible", region: "Mountain", sunlight: "Full Sun", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$16-$28" }),
  plant("Maypop", "Passiflora incarnata Maypop", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "7-10", growthHabit: "Vining", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$14-$26" }),
  plant("Prickly Pear", "Opuntia ficus-indica", { category: "Edible", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$16-$28" }),
  plant("Surinam Cherry", "Eugenia uniflora", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Tropical", hardiness: "8-11", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$30" }),
  plant("Blackberry Prime-Ark", "Rubus fruticosus Prime-Ark", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Black", climate: "Temperate", hardiness: "5-9", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" }),
  plant("Raspberry Heritage", "Rubus idaeus Heritage", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-7", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" }),
  plant("Raspberry Fall Gold", "Rubus idaeus Fall Gold", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "3-7", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" })
]);

PLANTS.push(...[
  plant("Apple Jonathan", "Malus domestica Jonathan", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Apple Liberty", "Malus domestica Liberty", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Apple Golden Delicious", "Malus domestica Golden Delicious", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Apple Winesap", "Malus domestica Winesap", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Pear Kieffer", "Pyrus communis Kieffer", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Pear Flemish Beauty", "Pyrus communis Flemish Beauty", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$38-$72" }),
  plant("Cherry Stella", "Prunus avium Stella", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$42-$78" }),
  plant("Cherry Lapins", "Prunus avium Lapins", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$42-$78" }),
  plant("Cherry Black Tartarian", "Prunus avium Black Tartarian", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Black", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$42-$78" }),
  plant("Orange Blood", "Citrus sinensis Blood Orange", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Red", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$30-$55" }),
  plant("Lemon Variegated Pink", "Citrus limon Variegated Pink", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Pink", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$30-$55" }),
  plant("Lime Kaffir", "Citrus hystrix", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Green", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$28-$52" }),
  plant("Mandarin Clementine", "Citrus clementina", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Orange", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$30-$55" }),
  plant("Kumquat Meiwa", "Citrus japonica Meiwa", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Orange", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$26-$48" }),
  plant("Olive Koroneiki", "Olea europaea Koroneiki", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$38-$68" }),
  plant("Avocado Bacon", "Persea americana Bacon", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$45-$85" }),
  plant("Mango Cogshall", "Mangifera indica Cogshall", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Tropical", hardiness: "8-11", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$42-$85" }),
  plant("Papaya Solo", "Carica papaya Solo", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Tropical", hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "High", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$24-$48" }),
  plant("Pineapple Queen", "Ananas comosus Queen", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$18-$34" }),
  plant("Blueberry Elliott", "Vaccinium corymbosum Elliott", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Groundcover", nurseryCost: "$18-$32" }),
  plant("Blueberry Legacy", "Vaccinium corymbosum Legacy", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Groundcover", nurseryCost: "$18-$32" }),
  plant("Cranberry Pilgrim", "Vaccinium macrocarpon Pilgrim", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$10-$18" }),
  plant("Gooseberry Captivator", "Ribes uva-crispa Captivator", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" })
]);

PLANTS.push(...[
  plant("Red Maple", "Acer rubrum", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$55-$110" }),
  plant("Sugar Maple", "Acer saccharum", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$55-$110" }),
  plant("Amur Maple", "Acer ginnala", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$42-$80" }),
  plant("Crabapple", "Malus floribunda", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Pollinator Garden", nurseryCost: "$45-$85" }),
  plant("Bald Cypress", "Taxodium distichum", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Clay", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$60-$115" }),
  plant("Dawn Redwood", "Metasequoia glyptostroboides", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$60-$115" }),
  plant("Black Gum", "Nyssa sylvatica", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$58-$105" }),
  plant("Katsura Tree", "Cercidiphyllum japonicum", { category: "Tree", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$65-$120" }),
  plant("Sourwood", "Oxydendrum arboreum", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Pollinator Garden", nurseryCost: "$58-$105" }),
  plant("Chinese Pistache", "Pistacia chinensis", { category: "Tree", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Dry", hardiness: "7-10", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$55-$110" }),
  plant("Beautyberry", "Callicarpa americana", { category: "Shrub", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
  plant("Red Twig Dogwood", "Cornus sericea", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Winter", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
  plant("Texas Sage", "Leucophyllum frutescens", { category: "Shrub", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple", climate: "Dry", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$30" }),
  plant("Aucuba", "Aucuba japonica", { category: "Shrub", region: "Pacific Coast", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$30" }),
  plant("Sarcococca", "Sarcococca confusa", { category: "Shrub", region: "Pacific Coast", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$30" }),
  plant("Skimmia", "Skimmia japonica", { category: "Shrub", region: "Pacific Coast", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$18-$30" }),
  plant("Kerria", "Kerria japonica", { category: "Shrub", region: "Northwest", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$14-$24" }),
  plant("Leucothoe", "Leucothoe fontanesiana", { category: "Shrub", region: "Northeast", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$16-$28" }),
  plant("Rockrose", "Cistus x hybridus", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
  plant("Manzanita", "Arctostaphylos densiflora", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Winter", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Pollinator Garden", nurseryCost: "$18-$32" }),
  plant("Rudbeckia Goldsturm", "Rudbeckia fulgida Goldsturm", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Monkshood", "Aconitum napellus", { category: "Flower", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$10-$18" }),
  plant("Jacob's Ladder", "Polemonium caeruleum", { category: "Flower", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$9-$16" }),
  plant("Helenium", "Helenium autumnale", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$9-$16" }),
  plant("Campion", "Silene coronaria", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Biennial", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$6-$12" })
]);

PLANTS.push(...[
  plant("Sedge Evergold", "Carex oshimensis Evergold", { category: "Grass", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$10-$18" }),
  plant("Pennisetum Rubrum", "Pennisetum setaceum Rubrum", { category: "Grass", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple", climate: "Dry", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$12-$22" }),
  plant("Lemon Verbena", "Aloysia citrodora", { category: "Herb", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$8-$14" }),
  plant("Bay Laurel", "Laurus nobilis", { category: "Herb", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Both", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$12-$24" }),
  plant("Shiso", "Perilla frutescens", { category: "Herb", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Purple", climate: "Temperate", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Curry Plant", "Helichrysum italicum", { category: "Herb", region: "Mediterranean", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$8-$14" }),
  plant("Pilea", "Pilea peperomioides", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$12-$22" }),
  plant("String of Hearts", "Ceropegia woodii", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Dry", hardiness: "8-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$12-$24" }),
  plant("Polka Dot Plant", "Hypoestes phyllostachya", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Pink", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$8-$16" }),
  plant("Bird of Paradise", "Strelitzia reginae", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Orange", climate: "Tropical", hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$24-$48" }),
  plant("Rhipsalis", "Rhipsalis baccifera", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$12-$22" }),
  plant("Aeonium", "Aeonium arboreum", { category: "Succulent", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Green", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$10-$18" }),
  plant("Gasteria", "Gasteria verrucosa", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Dry", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$8-$16" }),
  plant("Ceropegia Sandersonii", "Ceropegia sandersonii", { category: "Vine", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Vining", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$14-$24" }),
  plant("Climbing Rose", "Rosa climbing hybrid", { category: "Vine", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "High", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$18-$34" }),
  plant("Crossvine", "Bignonia capreolata", { category: "Vine", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Orange", climate: "Temperate", hardiness: "5-9", growthHabit: "Vining", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$12-$24" }),
  plant("Sweet Autumn Clematis", "Clematis terniflora", { category: "Vine", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Vining", seasonality: "Fall", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$14-$26" }),
  plant("Hops", "Humulus lupulus", { category: "Vine", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Vining", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$12-$24" }),
  plant("Tomatillo", "Physalis philadelphica", { category: "Edible", region: "Southwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Artichoke", "Cynara cardunculus", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$8-$14" }),
  plant("Okra", "Abelmoschus esculentus", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Melon Cantaloupe", "Cucumis melo", { category: "Edible", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Dry", hardiness: "7-10", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Groundcover", nurseryCost: "$4-$8" }),
  plant("Pumpkin", "Cucurbita maxima", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Orange", climate: "Temperate", hardiness: "7-10", growthHabit: "Vining", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Groundcover", nurseryCost: "$4-$8" })
]);

PLANTS.push(...[
]);

PLANTS.push(...[
  plant("Foamflower", "Tiarella cordifolia", { category: "Groundcover", region: "Northwest", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$8-$14" }),
  plant("Barrenwort", "Epimedium grandiflorum", { category: "Groundcover", region: "Northwest", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$9-$16" }),
  plant("Golden Ragwort", "Packera aurea", { category: "Groundcover", region: "Northeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Green and Gold", "Chrysogonum virginianum", { category: "Groundcover", region: "Southeast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Blue Star Creeper", "Isotoma fluviatilis", { category: "Groundcover", region: "Pacific Coast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Silver Mound Artemisia", "Artemisia schmidtiana", { category: "Groundcover", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "White", climate: "Dry", hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$7-$12" }),
  plant("Palm Sedge", "Carex muskingumensis", { category: "Grass", region: "Midwest", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$10-$18" }),
  plant("Pink Muhly", "Muhlenbergia capillaris Regal Mist", { category: "Grass", region: "Southeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Dry", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$12-$20" }),
  plant("Blue Lyme Grass", "Leymus arenarius", { category: "Grass", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$10-$18" }),
  plant("Corkscrew Rush", "Juncus effusus Spiralis", { category: "Grass", region: "Pacific Coast", sunlight: "Part Shade", soil: "Loam", water: "High", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$12-$20" }),
  plant("Purple Millet", "Pennisetum glaucum Purple Majesty", { category: "Grass", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple", climate: "Dry", hardiness: "7-10", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Annual", cost: "Moderate", purpose: "Privacy", nurseryCost: "$10-$18" }),
  plant("Tomatillo", "Physalis ixocarpa Verde", { category: "Edible", region: "Southwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Artichoke Green Globe", "Cynara cardunculus Green Globe", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$8-$14" }),
  plant("Okra Clemson Spineless", "Abelmoschus esculentus Clemson Spineless", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Cantaloupe Hale's Best", "Cucumis melo Hales Best", { category: "Edible", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Dry", hardiness: "7-10", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Groundcover", nurseryCost: "$4-$8" }),
  plant("Pumpkin Jack O Lantern", "Cucurbita pepo Jack O Lantern", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Orange", climate: "Temperate", hardiness: "7-10", growthHabit: "Vining", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Groundcover", nurseryCost: "$4-$8" })
]);

PLANTS.push(...[
  plant("Serviceberry Autumn Brilliance", "Amelanchier x grandiflora Autumn Brilliance", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "4-8", growthHabit: "Upright", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Pollinator Garden", nurseryCost: "$58-$110" }),
  plant("Prairie Crabapple", "Malus ioensis", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "4-8", growthHabit: "Upright", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Pollinator Garden", nurseryCost: "$52-$98" }),
  plant("Osage Orange", "Maclura pomifera", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Clay", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "4-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$48-$90" }),
  plant("Parrotia", "Parrotia persica", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-8", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$60-$112" }),
  plant("Loquat", "Eriobotrya japonica", { category: "Tree", region: "Southwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "White", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Upright", seasonality: "Winter", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$48-$92" }),
  plant("Feijoa", "Acca sellowiana", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Mediterranean", hardiness: "8-10", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$24-$42" }),
  plant("Honeyberry", "Lonicera caerulea", { category: "Shrub", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "2-7", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Fruit Production", nurseryCost: "$18-$30" }),
  plant("Aronia Viking", "Aronia melanocarpa Viking", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "3-8", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Fruit Production", nurseryCost: "$16-$28" }),
  plant("Tea Olive", "Osmanthus fragrans", { category: "Shrub", region: "Southeast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$20-$34" }),
  plant("Pineapple Guava Coolidge", "Acca sellowiana Coolidge", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Mediterranean", hardiness: "8-10", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$24-$42" }),
  plant("Rock Soapwort", "Saponaria ocymoides", { category: "Groundcover", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Dry", hardiness: "4-9", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Sea Thrift", "Armeria maritima", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "4-8", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$7-$12" }),
  plant("Maltese Cross", "Lychnis chalcedonica", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "3-8", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$8-$14" }),
  plant("Chocolate Flower", "Berlandiera lyrata", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Dry", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$7-$12" }),
  plant("Texas Betony", "Stachys coccinea", { category: "Flower", region: "Southwest", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Dry", hardiness: "8-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$7-$12" }),
  plant("Meadow Sage Caradonna", "Salvia nemorosa Caradonna", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "4-8", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Verbena Homestead Purple", "Verbena canadensis Homestead Purple", { category: "Flower", region: "Southeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "6-10", growthHabit: "Groundcover", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$7-$12" }),
  plant("Purple Fountain Grass Fireworks", "Pennisetum setaceum Fireworks", { category: "Grass", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Dry", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$12-$20" }),
  plant("Vietnamese Coriander", "Persicaria odorata", { category: "Herb", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Green", climate: "Tropical", hardiness: "9-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$6-$10" }),
  plant("Stevia", "Stevia rebaudiana", { category: "Herb", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Green", climate: "Temperate", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$6-$10" }),
  plant("Mexican Mint Marigold", "Tagetes lucida", { category: "Herb", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Yellow", climate: "Dry", hardiness: "8-10", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$6-$10" }),
  plant("Calamondin Orange", "Citrus x microcarpa", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Orange", climate: "Tropical", hardiness: "8-11", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Houseplant", nurseryCost: "$28-$48" }),
  plant("Coffee Plant", "Coffea arabica", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "9-11", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$16-$28" }),
  plant("Lipstick Plant", "Aeschynanthus radicans", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Red", climate: "Tropical", hardiness: "9-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$14-$24" }),
  plant("Peperomia Watermelon", "Peperomia argyreia", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "10-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$10-$18" }),
  plant("Blue Chalk Sticks", "Senecio serpens", { category: "Succulent", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Blue", climate: "Mediterranean", hardiness: "9-11", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$8-$14" }),
  plant("String of Dolphins", "Senecio peregrinus", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Dry", hardiness: "9-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$14-$24" }),
  plant("Passionfruit", "Passiflora edulis", { category: "Vine", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Tropical", hardiness: "8-11", growthHabit: "Vining", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$18-$32" }),
  plant("Scarlet Runner Bean", "Phaseolus coccineus", { category: "Vine", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-10", growthHabit: "Vining", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$4-$8" }),
  plant("Malabar Spinach", "Basella alba", { category: "Vine", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Vining", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$4-$8" }),
  plant("Yardlong Bean", "Vigna unguiculata sesquipedalis", { category: "Edible", region: "Southwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "8-11", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$4-$8" }),
  plant("Ground Cherry Aunt Mollys", "Physalis pruinosa Aunt Mollys", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "4-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$4-$8" })
]);

PLANTS.push(...[
  plant("Tulip Tree", "Liriodendron tulipifera Aureomarginatum", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$65-$120" }),
  plant("Japanese Zelkova", "Zelkova serrata", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$58-$108" }),
  plant("Hackberry", "Celtis occidentalis", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$48-$92" }),
  plant("Paper Birch", "Betula papyrifera", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$52-$98" }),
  plant("River Birch Heritage", "Betula nigra Heritage", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Clay", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$58-$102" }),
  plant("Kentucky Coffeetree", "Gymnocladus dioicus", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$58-$110" }),
  plant("Fringe Flower", "Loropetalum Plum Delight", { category: "Shrub", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$30" }),
  plant("Carolina Allspice", "Calycanthus floridus", { category: "Shrub", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$30" }),
  plant("Japanese Quince", "Chaenomeles speciosa", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$14-$24" }),
  plant("Blue Mist Shrub", "Caryopteris incana", { category: "Shrub", region: "Midwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$16-$28" }),
  plant("Sweet Fern", "Comptonia peregrina", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" }),
  plant("Rattlesnake Master", "Eryngium yuccifolium", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "White", climate: "Dry", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$9-$16" }),
  plant("Culver's Root", "Veronicastrum virginicum", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$9-$16" }),
  plant("Globe Mallow", "Sphaeralcea ambigua", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Orange", climate: "Dry", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Tidy Tips", "Layia platyglossa", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$4-$8" }),
  plant("California Fuchsia", "Epilobium canum", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Groundcover", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Blue Eyed Grass", "Sisyrinchium angustifolium", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$8-$14" }),
  plant("Stonecrop Angelina", "Sedum rupestre Angelina", { category: "Groundcover", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Dry", hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Mini Mondo Grass", "Ophiopogon japonicus Nana", { category: "Groundcover", region: "Pacific Coast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "7-10", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$8-$14" }),
  plant("Dwarf Papyrus", "Cyperus haspan", { category: "Grass", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "High", setting: "Outdoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$12-$20" }),
  plant("Fiber Optic Grass", "Isolepis cernua", { category: "Grass", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$10-$18" }),
  plant("Cuban Oregano", "Plectranthus amboinicus", { category: "Herb", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Loam", water: "Low", setting: "Both", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$5-$10" }),
  plant("Prayer Pepper", "Peperomia caperata", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$10-$18" }),
  plant("Anthurium Pink", "Anthurium andraeanum Pink Champion", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Pink", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Houseplant", nurseryCost: "$22-$40" }),
  plant("Burro Tail Lemon", "Sedum burrito", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Dry", hardiness: "8-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$12-$22" }),
  plant("Holiday Cactus", "Schlumbergera truncata", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Pink", climate: "Tropical", hardiness: "8-11", growthHabit: "Trailing", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$10-$20" }),
  plant("Black Eyed Susan Vine", "Thunbergia alata", { category: "Vine", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "7-10", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Privacy", nurseryCost: "$5-$10" })
]);

PLANTS.push(...[
  plant("Astilbe Vision in Red", "Astilbe chinensis Vision in Red", { category: "Flower", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$10-$18" }),
  plant("Japanese Anemone", "Anemone hupehensis", { category: "Flower", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$9-$16" }),
  plant("Mountain Bluet", "Centaurea montana", { category: "Flower", region: "Mountain", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "3-8", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$7-$12" }),
  plant("Goldenrod Fireworks", "Solidago rugosa Fireworks", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "4-8", growthHabit: "Upright", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("False Indigo", "Baptisia australis", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "3-8", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$10-$18" }),
  plant("Pincushion Flower", "Scabiosa columbaria", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Blue", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$7-$12" }),
  plant("Bee Blossom", "Gaura lindheimeri Whirling Butterflies", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "White", climate: "Dry", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Crocosmia Lucifer", "Crocosmia Lucifer", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$10-$18" }),
  plant("New Zealand Flax", "Phormium tenax", { category: "Grass", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Red", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$18-$30" }),
  plant("Feather Reed Grass Karl Foerster", "Calamagrostis x acutiflora Karl Foerster", { category: "Grass", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "4-8", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$10-$18" }),
  plant("Japanese Blood Grass", "Imperata cylindrica Red Baron", { category: "Grass", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$10-$18" }),
  plant("Sweet Flag", "Acorus gramineus", { category: "Grass", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$8-$14" }),
  plant("Creeping Jenny", "Lysimachia nummularia Aurea", { category: "Groundcover", region: "Northeast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "4-8", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Snow in Summer", "Cerastium tomentosum", { category: "Groundcover", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Ajuga Chocolate Chip", "Ajuga reptans Chocolate Chip", { category: "Groundcover", region: "Northwest", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "4-9", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Sweet Alyssum Carpet of Snow", "Lobularia maritima Carpet of Snow", { category: "Groundcover", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "White", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Groundcover", nurseryCost: "$4-$8" }),
  plant("Winter Daphne", "Daphne odora", { category: "Shrub", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "7-9", growthHabit: "Shrubby", seasonality: "Winter", pollinator: "Low", toxicity: "Toxic", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "High", lifespan: "Perennial", cost: "Premium", purpose: "Edging", nurseryCost: "$18-$32" }),
  plant("Ninebark Diabolo", "Physocarpus opulifolius Diabolo", { category: "Shrub", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "3-8", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
  plant("Bottlebrush Buckeye", "Aesculus parviflora", { category: "Shrub", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "4-8", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Average", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$18-$32" }),
  plant("Mountain Laurel", "Kalmia latifolia", { category: "Shrub", region: "Northeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "4-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$20-$36" }),
  plant("Bluebeard Beyond Midnight", "Caryopteris x clandonensis Beyond Midnight", { category: "Shrub", region: "Midwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$16-$28" })
]);

PLANTS.push(...[
  plant("White Sapote", "Casimiroa edulis", { category: "Tree", region: "Southwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "White", climate: "Mediterranean", hardiness: "9-11", growthHabit: "Upright", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$55-$98" }),
  plant("Barbados Cherry", "Malpighia emarginata", { category: "Shrub", region: "Southwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Tropical", hardiness: "9-11", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$22-$38" }),
  plant("Wintergreen", "Gaultheria procumbens", { category: "Groundcover", region: "Northeast", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-8", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$8-$14" }),
  plant("Prairie Dropseed Tara", "Sporobolus heterolepis Tara", { category: "Grass", region: "Midwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "3-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$10-$18" }),
  plant("Creeping Thyme Pink Chintz", "Thymus serpyllum Pink Chintz", { category: "Herb", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Dry", hardiness: "4-9", growthHabit: "Groundcover", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$7-$12" }),
  plant("Swiss Cheese Vine", "Monstera adansonii", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "10-11", growthHabit: "Vining", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$16-$28" }),
  plant("Silver Torch Cactus", "Cleistocactus strausii", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Dry", hardiness: "9-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$12-$22" }),
  plant("Moonflower", "Ipomoea alba", { category: "Vine", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Tropical", hardiness: "8-11", growthHabit: "Vining", seasonality: "Summer", pollinator: "High", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Privacy", nurseryCost: "$4-$8" }),
  plant("Yacon", "Smallanthus sonchifolius", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Edible Gardening", nurseryCost: "$8-$14" }),
  plant("Cape Gooseberry", "Physalis peruviana", { category: "Edible", region: "Southwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Dry", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$5-$9" })
]);

PLANTS.push(...[
  plant("Olive Arbequina", "Olea europaea Arbequina", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Green", climate: "Mediterranean", hardiness: "8-10", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$24-$44" }),
  plant("Redbud Forest Pansy", "Cercis canadensis Forest Pansy", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$48-$92" }),
  plant("Magnolia Ann", "Magnolia x Ann", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Cool", hardiness: "4-8", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$52-$98" }),
  plant("Smoke Tree Grace", "Cotinus Grace", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$48-$92" }),
  plant("Cotoneaster Coral Beauty", "Cotoneaster dammeri Coral Beauty", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-8", growthHabit: "Groundcover", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$8-$14" }),
  plant("Abelia Kaleidoscope", "Abelia x grandiflora Kaleidoscope", { category: "Shrub", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "6-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$14-$24" }),
  plant("Spirea Magic Carpet", "Spiraea japonica Magic Carpet", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "4-8", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$10-$18" }),
  plant("Spurge Ascot Rainbow", "Euphorbia martinii Ascot Rainbow", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$9-$16" }),
  plant("Oriental Poppy", "Papaver orientale", { category: "Flower", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-8", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$9-$16" }),
  plant("Lenten Rose", "Helleborus x hybridus", { category: "Flower", region: "Northwest", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Winter", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Edging", nurseryCost: "$16-$28" }),
  plant("Turtlehead", "Chelone lyonii", { category: "Flower", region: "Northeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "3-8", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$9-$16" }),
  plant("Palm Sedge Ice Dance", "Carex morrowii Ice Dance", { category: "Grass", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$10-$18" }),
  plant("Dichondra Silver Falls", "Dichondra argentea Silver Falls", { category: "Groundcover", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "8-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$7-$12" }),
  plant("Irish Moss", "Sagina subulata", { category: "Groundcover", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "4-8", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Golden Creeping Jenny", "Lysimachia christinae", { category: "Groundcover", region: "Southeast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Lovage", "Levisticum officinale", { category: "Herb", region: "Northeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "4-8", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$6-$10" }),
  plant("Cilantro Slow Bolt", "Coriandrum sativum Slow Bolt", { category: "Herb", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Green", climate: "Temperate", hardiness: "5-10", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$4-$8" }),
  plant("Baby Rubber Plant", "Peperomia obtusifolia", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "10-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$10-$18" }),
  plant("Burro Tail", "Sedum morganianum", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Dry", hardiness: "9-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$12-$22" }),
  plant("Canary Melon", "Cucumis melo Canary", { category: "Edible", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Dry", hardiness: "8-11", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$4-$8" })
]);

PLANTS.push(...[
  plant("Medlar", "Mespilus germanica", { category: "Tree", region: "Northwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "5-8", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$52-$96" }),
  plant("Mayhaw", "Crataegus opaca", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Clay", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$52-$96" }),
  plant("Almond All In One", "Prunus dulcis All In One", { category: "Tree", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Dry", hardiness: "6-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$52-$96" }),
  plant("Chestnut Colossal", "Castanea sativa x crenata Colossal", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$60-$118" }),
  plant("Mulberry Dwarf Everbearing", "Morus nigra Dwarf Everbearing", { category: "Tree", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Green", climate: "Temperate", hardiness: "5-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Container", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$26-$44" }),
  plant("Blueberry Pink Lemonade", "Vaccinium corymbosum Pink Lemonade", { category: "Shrub", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "4-8", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Fruit Production", nurseryCost: "$16-$28" }),
  plant("Huckleberry Evergreen", "Vaccinium ovatum", { category: "Shrub", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "7-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$18-$32" }),
  plant("Lingonberry", "Vaccinium vitis-idaea", { category: "Shrub", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "2-7", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Fruit Production", nurseryCost: "$14-$24" }),
  plant("Salal", "Gaultheria shallon", { category: "Shrub", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Low", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "6-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" }),
  plant("Yaupon Holly", "Ilex vomitoria", { category: "Shrub", region: "Southeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Winter", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
  plant("Wax Myrtle", "Myrica cerifera", { category: "Shrub", region: "Southeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
  plant("Autumn Sage", "Salvia greggii", { category: "Shrub", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Dry", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Sky Flower", "Duranta erecta", { category: "Shrub", region: "Southwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Tropical", hardiness: "9-11", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$16-$28" }),
  plant("Russian Sage Denim n Lace", "Perovskia atriplicifolia Denim n Lace", { category: "Flower", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "4-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Blanket Flower Arizona Sun", "Gaillardia aristata Arizona Sun", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Dry", hardiness: "3-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$7-$12" }),
  plant("Butterfly Weed Hello Yellow", "Asclepias tuberosa Hello Yellow", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Dry", hardiness: "4-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Joe Pye Weed Baby Joe", "Eutrochium dubium Baby Joe", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "4-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$9-$16" }),
  plant("Obedient Plant", "Physostegia virginiana", { category: "Flower", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "3-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$8-$14" }),
  plant("Sea Lavender", "Limonium latifolium", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple", climate: "Mediterranean", hardiness: "4-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$8-$14" }),
  plant("Blue Fescue Beyond Blue", "Festuca glauca Beyond Blue", { category: "Grass", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "4-8", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$8-$14" }),
  plant("Japanese Forest Grass All Gold", "Hakonechloa macra All Gold", { category: "Grass", region: "Pacific Coast", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Edging", nurseryCost: "$12-$20" }),
  plant("Mexican Tarragon", "Tagetes lucida Anise", { category: "Herb", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Yellow", climate: "Dry", hardiness: "8-10", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$6-$10" }),
  plant("Nasturtium Alaska", "Tropaeolum majus Alaska", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Orange", climate: "Temperate", hardiness: "2-11", growthHabit: "Trailing", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$4-$8" }),
  plant("Turmeric", "Curcuma longa", { category: "Edible", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Edible Gardening", nurseryCost: "$8-$14" }),
  plant("Ginger", "Zingiber officinale", { category: "Edible", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Edible Gardening", nurseryCost: "$8-$14" }),
  plant("Mamey Sapote", "Pouteria sapota", { category: "Tree", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Green", climate: "Tropical", hardiness: "10-11", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$32-$56" }),
  plant("Purple Shamrock", "Oxalis triangularis", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Purple", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$10-$18" }),
  plant("Blue Star Fern", "Phlebodium aureum", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Blue", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$14-$24" }),
  plant("Rabbit Foot Fern", "Davallia fejeensis", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "9-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$14-$24" }),
  plant("Jade Necklace", "Crassula marnieriana", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Dry", hardiness: "9-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$8-$14" }),
  plant("Peanut Cactus", "Echinopsis chamaecereus", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Indoor", color: "Red", climate: "Dry", hardiness: "9-11", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$8-$14" }),
  plant("Hyacinth Bean", "Lablab purpureus", { category: "Vine", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Tropical", hardiness: "8-11", growthHabit: "Vining", seasonality: "Summer", pollinator: "High", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Privacy", nurseryCost: "$4-$8" }),
  plant("Canary Creeper", "Tropaeolum peregrinum", { category: "Vine", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "5-10", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Privacy", nurseryCost: "$4-$8" }),
  plant("Black Pepper Vine", "Piper nigrum", { category: "Vine", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Green", climate: "Tropical", hardiness: "10-11", growthHabit: "Vining", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Edible Gardening", nurseryCost: "$18-$32" })
]);

PLANTS.push(...[
  plant("Pecan Pawnee", "Carya illinoinensis Pawnee", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "6-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$60-$118" }),
  plant("Walnut Carpathian", "Juglans regia Carpathian", { category: "Tree", region: "Northwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$62-$120" }),
  plant("Jujube Li", "Ziziphus jujuba Li", { category: "Tree", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "6-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$48-$92" }),
  plant("Elderberry Adams", "Sambucus canadensis Adams", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "3-8", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Fruit Production", nurseryCost: "$16-$28" }),
  plant("Currant Black Consort", "Ribes nigrum Consort", { category: "Shrub", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Fruit Production", nurseryCost: "$14-$24" }),
  plant("Sea Buckthorn", "Hippophae rhamnoides", { category: "Shrub", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Orange", climate: "Dry", hardiness: "3-8", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Fruit Production", nurseryCost: "$18-$30" }),
  plant("Miracle Berry", "Synsepalum dulcificum", { category: "Shrub", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "White", climate: "Tropical", hardiness: "9-11", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$26-$42" }),
  plant("Natal Plum", "Carissa macrocarpa", { category: "Shrub", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "White", climate: "Mediterranean", hardiness: "9-11", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$20-$34" }),
  plant("Rosemary Tuscan Blue", "Rosmarinus officinalis Tuscan Blue", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Blue", climate: "Mediterranean", hardiness: "8-10", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$8-$14" }),
  plant("Leadwort", "Ceratostigma plumbaginoides", { category: "Groundcover", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Partridgeberry", "Mitchella repens", { category: "Groundcover", region: "Northeast", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-8", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$8-$14" }),
  plant("Purple Love Grass", "Eragrostis spectabilis", { category: "Grass", region: "Southeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple", climate: "Dry", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$8-$14" }),
  plant("Little Bluestem Standing Ovation", "Schizachyrium scoparium Standing Ovation", { category: "Grass", region: "Midwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "3-8", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$10-$18" }),
  plant("Mountain Mint", "Pycnanthemum muticum", { category: "Herb", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "4-8", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$7-$12" }),
  plant("Culinary Sage Berggarten", "Salvia officinalis Berggarten", { category: "Herb", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Green", climate: "Mediterranean", hardiness: "6-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$6-$10" }),
  plant("Shungiku", "Glebionis coronaria", { category: "Herb", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "5-10", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$4-$8" }),
  plant("Fishbone Cactus", "Disocactus anguliger", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "10-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$14-$26" }),
  plant("Silver Satin Pothos", "Scindapsus pictus", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "10-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$10-$18" }),
  plant("Ponytail Palm", "Beaucarnea recurvata", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Dry", hardiness: "9-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$16-$28" }),
  plant("Tiger Jaws", "Faucaria tigrina", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Indoor", color: "Yellow", climate: "Dry", hardiness: "9-11", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$8-$14" }),
  plant("Living Stone", "Lithops aucampiae", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Indoor", color: "Pink", climate: "Dry", hardiness: "9-11", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$8-$14" }),
  plant("Wax Jambu", "Syzygium samarangense", { category: "Tree", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "White", climate: "Tropical", hardiness: "10-11", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$30-$52" }),
  plant("Chocolate Vine", "Akebia quinata", { category: "Vine", region: "Northwest", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Cool", hardiness: "5-8", growthHabit: "Vining", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$14-$24" }),
  plant("Kiwi Issai", "Actinidia arguta Issai", { category: "Vine", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "5-9", growthHabit: "Vining", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Fruit Production", nurseryCost: "$18-$32" }),
  plant("Luffa", "Luffa aegyptiaca", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Tropical", hardiness: "8-11", growthHabit: "Vining", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$4-$8" }),
  plant("Taro", "Colocasia esculenta", { category: "Edible", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Edible Gardening", nurseryCost: "$8-$14" }),
  plant("Roselle", "Hibiscus sabdariffa", { category: "Edible", region: "Southwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Tropical", hardiness: "8-11", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$5-$9" })
]);

PLANTS.push(...[
  plant("American Hornbeam", "Carpinus caroliniana", { category: "Tree", region: "Northeast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$52-$98" }),
  plant("American Yellowwood", "Cladrastis kentukea", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$58-$108" }),
  plant("Pawlonia", "Paulownia tomentosa", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$55-$105" }),
  plant("Southern Magnolia", "Magnolia grandiflora", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$65-$125" }),
  plant("Purple Leaf Plum", "Prunus cerasifera", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$48-$92" }),
  plant("Sassafras", "Sassafras albidum", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$52-$98" }),
  plant("Fringetree Chinese", "Chionanthus retusus", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$58-$108" }),
  plant("Winter Hazel", "Corylopsis spicata", { category: "Shrub", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$16-$28" }),
  plant("Buttonbush", "Cephalanthus occidentalis", { category: "Shrub", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "High", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$16-$28" }),
  plant("Sweet Gale", "Myrica gale", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Sandy", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" }),
  plant("Silky Dogwood", "Cornus amomum", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$14-$24" }),
  plant("Leadplant", "Amorpha canescens", { category: "Shrub", region: "Midwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple", climate: "Dry", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$14-$24" }),
  plant("Dwarf Fothergilla", "Fothergilla gardenii", { category: "Shrub", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$18-$30" }),
  plant("Blue Cardinal Flower", "Lobelia siphilitica", { category: "Flower", region: "Midwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$9-$16" }),
  plant("Cardinal Flower", "Lobelia cardinalis", { category: "Flower", region: "Northeast", sunlight: "Part Shade", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$9-$16" }),
  plant("Sneezeweed Mardi Gras", "Helenium Mardi Gras", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$9-$16" }),
  plant("Prairie Smoke", "Geum triflorum", { category: "Flower", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Dry", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$8-$14" }),
  plant("Pasque Flower", "Pulsatilla vulgaris", { category: "Flower", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple", climate: "Dry", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$8-$14" }),
  plant("Blue Flax", "Linum perenne", { category: "Flower", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$7-$12" }),
  plant("Moss Phlox", "Phlox subulata", { category: "Groundcover", region: "Northeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "3-7", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Creeping Mazus Alba", "Mazus reptans Alba", { category: "Groundcover", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Platt's Black Brass Buttons", "Leptinella squalida Platts Black", { category: "Groundcover", region: "Pacific Coast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$8-$14" }),
  plant("Tufted Hair Grass", "Deschampsia cespitosa", { category: "Grass", region: "Northwest", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$10-$18" }),
  plant("Sesleria", "Sesleria autumnalis", { category: "Grass", region: "Pacific Coast", sunlight: "Part Shade", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$10-$18" }),
  plant("Lemon Grass", "Cymbopogon citratus", { category: "Herb", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Both", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$6-$12" }),
  plant("Thai Basil", "Ocimum basilicum var. thyrsiflora", { category: "Herb", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Purple", climate: "Temperate", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Alocasia Frydek", "Alocasia micholitziana Frydek", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Houseplant", nurseryCost: "$22-$38" }),
  plant("Philodendron Birkin", "Philodendron Birkin", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Houseplant", nurseryCost: "$18-$32" }),
  plant("Pencil Cactus", "Euphorbia tirucalli", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Green", climate: "Dry", hardiness: "8-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$12-$22" }),
  plant("Hoya Rope", "Hoya carnosa Compacta", { category: "Vine", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Vining", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Houseplant", nurseryCost: "$18-$34" })
]);

PLANTS.push(...[
  plant("Osmanthus Tea Olive", "Osmanthus fragrans", { category: "Shrub", region: "Southeast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Fragrance", nurseryCost: "$24-$42" }),
  plant("Rockrose", "Cistus x purpureus", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Low Water Landscaping", nurseryCost: "$14-$24" }),
  plant("Oakleaf Hydrangea", "Hydrangea quercifolia", { category: "Shrub", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Foundation Planting", nurseryCost: "$22-$38" }),
  plant("Weigela Sonic Bloom", "Weigela florida Sonic Bloom", { category: "Shrub", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "4-8", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$16-$28" })
]);

PLANTS.push(...[
  plant("Crabapple Prairifire", "Malus Prairifire", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "4-8", growthHabit: "Upright", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Ornamental Specimen", nurseryCost: "$48-$92" }),
  plant("Ginkgo Autumn Gold", "Ginkgo biloba Autumn Gold", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "4-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Shade Tree", nurseryCost: "$58-$120" }),
  plant("Crape Myrtle Natchez", "Lagerstroemia Natchez", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "White", climate: "Hot", hardiness: "6-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Ornamental Specimen", nurseryCost: "$42-$84" }),
  plant("River Birch", "Betula nigra", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "4-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Shade Tree", nurseryCost: "$46-$88" }),
  plant("Honeylocust Shademaster", "Gleditsia triacanthos Shademaster", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "4-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Shade Tree", nurseryCost: "$48-$94" }),
  plant("Persian Silk Tree", "Albizia julibrissin", { category: "Tree", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Hot", hardiness: "6-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Ornamental Specimen", nurseryCost: "$34-$68" }),
]);

PLANTS.push(...[
  plant("Gaillardia", "Gaillardia aristata", { category: "Flower", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Dry", hardiness: "3-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$7-$12" }),
  plant("Blanket Flower Arizona Sun", "Gaillardia x grandiflora Arizona Sun", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Red", climate: "Dry", hardiness: "3-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$7-$12" }),
  plant("Scabiosa Butterfly Blue", "Scabiosa columbaria Butterfly Blue", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Blue", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$9-$16" }),
  plant("Veronica Sunny Border Blue", "Veronica spicata Sunny Border Blue", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "4-8", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$8-$14" }),
  plant("Penstemon Husker Red", "Penstemon digitalis Husker Red", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "3-8", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Nicotiana", "Nicotiana alata", { category: "Flower", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "9-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Average", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Fragrance", nurseryCost: "$4-$8" }),
]);

PLANTS.push(...[
  plant("Switch Grass Shenandoah", "Panicum virgatum Shenandoah", { category: "Grass", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "4-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$10-$18" }),
  plant("Japanese Forest Grass", "Hakonechloa macra", { category: "Grass", region: "Northwest", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Shade Garden", nurseryCost: "$12-$22" }),
  plant("Brass Buttons", "Leptinella squalida", { category: "Groundcover", region: "Northwest", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
]);

PLANTS.push(...[
  plant("Pilea Peperomioides", "Pilea peperomioides", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "9-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$14-$24" }),
  plant("Bird Nest Fern", "Asplenium nidus", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "10-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$14-$24" }),
  plant("ZZ Plant Raven", "Zamioculcas zamiifolia Raven", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Shade", soil: "Sandy", water: "Low", setting: "Indoor", color: "Purple", climate: "Tropical", hardiness: "9-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Houseplant", nurseryCost: "$18-$34" })
]);

PLANTS.push(...[
  plant("Ghost Plant", "Graptopetalum paraguayense", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Indoor", color: "Pink", climate: "Dry", hardiness: "8-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$8-$14" }),
  plant("Pencil Cactus Firesticks", "Euphorbia tirucalli Sticks on Fire", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Red", climate: "Dry", hardiness: "10-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$12-$24" }),
  plant("Living Stones", "Lithops aucampiae", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Dry", hardiness: "10-11", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$8-$14" }),
  plant("Romanesco", "Brassica oleracea Romanesco", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "2-10", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$4-$8" }),
  plant("Sunchoke", "Helianthus tuberosus", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "3-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$6-$10" }),
  plant("Cardoon", "Cynara cardunculus", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Blue", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Edible Gardening", nurseryCost: "$8-$14" })
]);

PLANTS.push(...[
  plant("Foamflower", "Tiarella cordifolia", { category: "Flower", region: "Northeast", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White, Pink", climate: "Cool", hardiness: "3-8", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Shade Garden", nurseryCost: "$8-$14" }),
  plant("Jacob's Ladder", "Polemonium caeruleum", { category: "Flower", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue, Purple", climate: "Cool", hardiness: "3-8", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Shade Garden", nurseryCost: "$8-$14" }),
  plant("Lobelia Cardinal", "Lobelia cardinalis", { category: "Flower", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "3-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$10-$18" }),
  plant("Lobelia Great Blue", "Lobelia siphilitica", { category: "Flower", region: "Midwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "4-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$10-$18" }),
  plant("Snapdragon", "Antirrhinum majus", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink, Yellow, Red", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$4-$8" }),
  plant("Stock", "Matthiola incana", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink, Purple, White", climate: "Cool", hardiness: "7-10", growthHabit: "Upright", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Fragrance", nurseryCost: "$4-$8" }),
  plant("Campanula", "Campanula carpatica", { category: "Flower", region: "Mountain", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Blue, White", climate: "Cool", hardiness: "3-8", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Rock Garden", nurseryCost: "$8-$14" }),
  plant("Delphinium", "Delphinium elatum", { category: "Flower", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue, Purple", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Toxic", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "High", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$12-$20" }),
  plant("Butterfly Weed", "Asclepias tuberosa", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Orange", climate: "Dry", hardiness: "3-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Milkweed Swamp", "Asclepias incarnata", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "3-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Wildlife Habitat", nurseryCost: "$8-$14" })
]);

PLANTS.push(...[
  plant("Threadleaf Coreopsis", "Coreopsis verticillata Moonbeam", { category: "Flower", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "3-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$8-$14" }),
  plant("Allium Millennium", "Allium Millennium", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "4-8", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$10-$18" }),
  plant("Gladiolus", "Gladiolus hortulanus", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red, Pink, White", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$6-$10" }),
  plant("Tuberous Begonia", "Begonia x tuberhybrida", { category: "Flower", region: "Northwest", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red, Pink, Yellow", climate: "Cool", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$8-$14" }),
  plant("Gazania", "Gazania rigens", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Yellow, Orange", climate: "Dry", hardiness: "8-11", growthHabit: "Groundcover", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Low Water Landscaping", nurseryCost: "$6-$10" }),
  plant("Wishbone Flower", "Torenia fournieri", { category: "Flower", region: "Southeast", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue, Purple, Yellow", climate: "Hot", hardiness: "9-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Shade Garden", nurseryCost: "$4-$8" }),
  plant("Calibrachoa", "Calibrachoa x hybrida", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple, Yellow, Pink", climate: "Temperate", hardiness: "9-11", growthHabit: "Trailing", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Sweet Alyssum", "Lobularia maritima", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "White, Purple", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Edging", nurseryCost: "$4-$8" }),
  plant("Heliotrope", "Heliotropium arborescens", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple, White", climate: "Mediterranean", hardiness: "10-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Fragrance", nurseryCost: "$8-$14" }),
  plant("Celosia Plumosa", "Celosia argentea Plumosa", { category: "Flower", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red, Yellow, Pink", climate: "Hot", hardiness: "9-11", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" })
]);

PLANTS.push(...[
  plant("Canna Lily", "Canna indica", { category: "Flower", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Red, Yellow, Orange", climate: "Hot", hardiness: "8-11", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Tropical Effect", nurseryCost: "$10-$18" }),
  plant("Angelonia", "Angelonia angustifolia", { category: "Flower", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Purple, Pink, White", climate: "Hot", hardiness: "9-11", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Bacopa", "Sutera cordata", { category: "Flower", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White, Purple", climate: "Temperate", hardiness: "9-11", growthHabit: "Trailing", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Candytuft Snowflake", "Iberis sempervirens Snowflake", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "3-9", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Rock Garden", nurseryCost: "$8-$14" }),
  plant("Pink Muhly Grass", "Muhlenbergia capillaris", { category: "Grass", region: "Southeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Hot", hardiness: "6-10", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Ornamental Grass", nurseryCost: "$10-$18" }),
  plant("New Zealand Flax", "Phormium tenax", { category: "Grass", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Red, Green", climate: "Mediterranean", hardiness: "8-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Architectural Accent", nurseryCost: "$18-$32" }),
  plant("Japanese Blood Grass", "Imperata cylindrica Red Baron", { category: "Grass", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red, Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$10-$18" }),
  plant("Blue Lyme Grass", "Leymus arenarius", { category: "Grass", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "4-9", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Low Water Landscaping", nurseryCost: "$10-$18" }),
  plant("Blue Chalksticks", "Senecio serpens", { category: "Succulent", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "9-11", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Low Water Landscaping", nurseryCost: "$8-$14" }),
  plant("Moonstone", "Pachyphytum oviferum", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Indoor", color: "Pink, Green", climate: "Dry", hardiness: "9-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$8-$14" })
]);

PLANTS.push(...[
  plant("Donkey Tail", "Sedum burrito", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Indoor", color: "Green", climate: "Dry", hardiness: "9-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$10-$16" }),
  plant("Mistletoe Cactus", "Rhipsalis baccifera", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "10-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$12-$20" }),
  plant("Ric Rac Cactus", "Epiphyllum anguliger", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Green", climate: "Tropical", hardiness: "10-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$12-$22" }),
  plant("Crown of Thorns", "Euphorbia milii", { category: "Succulent", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Red, Pink, Yellow", climate: "Dry", hardiness: "9-11", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$10-$18" }),
  plant("Goldfish Plant", "Nematanthus gregarius", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Orange, Red", climate: "Tropical", hardiness: "10-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$12-$20" }),
  plant("Purple Passion Plant", "Gynura aurantiaca", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Purple", climate: "Tropical", hardiness: "10-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$10-$18" }),
  plant("Silver Satin Pothos", "Scindapsus pictus", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Low", setting: "Indoor", color: "Green, Silver", climate: "Tropical", hardiness: "10-11", growthHabit: "Trailing", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Mildly Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Houseplant", nurseryCost: "$12-$20" }),
  plant("Aluminum Plant", "Pilea cadierei", { category: "Houseplant", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Indoor", color: "Green, Silver", climate: "Tropical", hardiness: "10-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Budget", purpose: "Houseplant", nurseryCost: "$10-$18" }),
  plant("Spiderwort", "Tradescantia ohiensis", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Blue, Purple", climate: "Temperate", hardiness: "4-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Sea Lavender", "Limonium latifolium", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple, White", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$8-$14" })
]);

PLANTS.push(...[
  plant("Bachelor's Button Mountain", "Centaurea montana", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Blue, Purple", climate: "Cool", hardiness: "3-8", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$8-$14" }),
  plant("Clarkia", "Clarkia amoena", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink, White", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Wildflower Meadow", nurseryCost: "$4-$8" }),
  plant("Nemesia", "Nemesia strumosa", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink, Purple, Yellow", climate: "Cool", hardiness: "8-10", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Persian Shield", "Strobilanthes dyerianus", { category: "Flower", region: "Indoor Anywhere", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Purple, Silver", climate: "Tropical", hardiness: "9-11", growthHabit: "Clumping", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Foliage Accent", nurseryCost: "$10-$18" }),
  plant("Dusty Miller", "Jacobaea maritima", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Silver, Yellow", climate: "Mediterranean", hardiness: "8-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Foliage Accent", nurseryCost: "$6-$10" }),
  plant("Blue Star Creeper", "Isotoma fluviatilis", { category: "Groundcover", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$7-$12" }),
  plant("Golden Oregano", "Origanum vulgare Aureum", { category: "Herb", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Green, Yellow", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$6-$10" }),
  plant("Pineapple Sage", "Salvia elegans", { category: "Herb", region: "Southwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Both", color: "Red", climate: "Hot", hardiness: "8-11", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$6-$10" }),
  plant("Hyssop", "Hyssopus officinalis", { category: "Herb", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue, Purple", climate: "Dry", hardiness: "4-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Pollinator Garden", nurseryCost: "$6-$10" }),
  plant("Lime Thyme", "Thymus citriodorus Aureus", { category: "Herb", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Both", color: "Green, Yellow", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Year-Round Interest", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$6-$10" }),
  plant("Patio Eggplant", "Solanum melongena Patio Baby", { category: "Edible", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Purple", climate: "Hot", hardiness: "9-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$5-$9" }),
  plant("Mini Bell Pepper", "Capsicum annuum Lunchbox", { category: "Edible", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Red, Yellow, Orange", climate: "Hot", hardiness: "9-11", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$5-$9" }),
  plant("Bush Bean", "Phaseolus vulgaris", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "3-10", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$4-$8" }),
  plant("Sugar Snap Pea", "Pisum sativum", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-9", growthHabit: "Vining", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$4-$8" }),
  plant("Kohlrabi", "Brassica oleracea Gongylodes", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple, Green", climate: "Cool", hardiness: "3-10", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Edible Gardening", nurseryCost: "$4-$8" })
]);

PLANTS.push(...[
  plant("Hybrid Tea Rose", "Rosa hybrid tea", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red, Pink, Yellow", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "High", lifespan: "Perennial", cost: "Premium", purpose: "Cut Flower", nurseryCost: "$18-$34" }),
  plant("Floribunda Rose", "Rosa floribunda", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink, Red, White", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Foundation Planting", nurseryCost: "$18-$32" }),
  plant("Grandiflora Rose", "Rosa grandiflora", { category: "Flower", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink, Red", climate: "Temperate", hardiness: "6-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "High", lifespan: "Perennial", cost: "Premium", purpose: "Cut Flower", nurseryCost: "$20-$36" }),
  plant("Knock Out Rose", "Rosa Knock Out", { category: "Shrub", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Red, Pink", climate: "Temperate", hardiness: "5-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Foundation Planting", nurseryCost: "$16-$28" }),
  plant("Drift Rose", "Rosa Drift", { category: "Groundcover", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Pink, White, Red", climate: "Mediterranean", hardiness: "5-10", growthHabit: "Groundcover", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$14-$24" }),
  plant("David Austin Rose", "Rosa English shrub", { category: "Shrub", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink, Apricot, White", climate: "Cool", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Fragrance", nurseryCost: "$24-$42" }),
  plant("Tea Rose", "Rosa odorata", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow, Pink", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "High", lifespan: "Perennial", cost: "Premium", purpose: "Fragrance", nurseryCost: "$20-$38" }),
  plant("Rugosa Rose", "Rosa rugosa", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink, White", climate: "Cool", hardiness: "2-7", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Wildlife Habitat", nurseryCost: "$16-$28" }),
  plant("Miniature Rose", "Rosa miniature", { category: "Flower", region: "Indoor Anywhere", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Both", color: "Red, Pink, Yellow", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Container", care: "Moderate", lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$10-$18" }),
  plant("Polyantha Rose", "Rosa polyantha", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink, White", climate: "Temperate", hardiness: "4-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$14-$24" }),
  plant("Climbing Rose New Dawn", "Rosa New Dawn", { category: "Vine", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "High", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$22-$38" }),
  plant("Climbing Rose Iceberg", "Rosa Iceberg climbing", { category: "Vine", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Vining", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "High", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$22-$38" }),
  plant("Rose Lady Banks", "Rosa banksiae", { category: "Vine", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Yellow, White", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Vining", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$22-$40" }),
  plant("Rose Double Knock Out", "Rosa Double Knock Out", { category: "Shrub", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Foundation Planting", nurseryCost: "$16-$28" }),
  plant("Rose Peace", "Rosa Peace", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow, Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "High", lifespan: "Perennial", cost: "Premium", purpose: "Cut Flower", nurseryCost: "$20-$36" }),
  plant("Rose Mister Lincoln", "Rosa Mister Lincoln", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "High", lifespan: "Perennial", cost: "Premium", purpose: "Cut Flower", nurseryCost: "$20-$36" }),
  plant("Rose Julia Child", "Rosa Julia Child", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Mediterranean", hardiness: "5-10", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Fragrance", nurseryCost: "$20-$34" })
]);

PLANTS.push(...[
  plant("English Laurel", "Prunus laurocerasus", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$34" }),
  plant("Rhododendron", "Rhododendron catawbiense", { category: "Shrub", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Cool", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$24-$46" }),
  plant("Panicle Hydrangea", "Hydrangea paniculata", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$22-$40" }),
  plant("Annabelle Hydrangea", "Hydrangea arborescens Annabelle", { category: "Shrub", region: "Midwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$22-$38" }),
  plant("Skip Laurel", "Prunus laurocerasus Schipkaensis", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$20-$36" }),
  plant("Sasanqua Camellia", "Camellia sasanqua", { category: "Shrub", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$24-$42" }),
  plant("Snowball Viburnum", "Viburnum opulus Roseum", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$30" }),
  plant("Sweet William", "Dianthus barbatus", { category: "Flower", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "3-7", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Biennial", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$6-$12" }),
  plant("Ranunculus", "Ranunculus asiaticus", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$8-$14" }),
  plant("Garden Phlox", "Phlox paniculata David", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$10-$18" }),
  plant("Endless Summer Hydrangea", "Hydrangea macrophylla Endless Summer", { category: "Shrub", region: "Northeast", sunlight: "Part Shade", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Blue", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$24-$42" }),
  plant("Chrysanthemum", "Chrysanthemum morifolium", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$8-$14" }),
  plant("Dahlia", "Dahlia pinnata", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$8-$16" })
]);

PLANTS.push(...[
  plant("White Oak", "Quercus alba", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$68-$128" }),
  plant("Pin Oak", "Quercus palustris", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Clay", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$62-$118" }),
  plant("Bur Oak", "Quercus macrocarpa", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$64-$124" }),
  plant("Live Oak", "Quercus virginiana", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$72-$135" }),
  plant("Scarlet Oak", "Quercus coccinea", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$62-$122" }),
  plant("Swamp White Oak", "Quercus bicolor", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Clay", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$64-$124" }),
  plant("Northern Red Oak", "Quercus rubra", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$64-$126" }),
  plant("Tulip Tree", "Liriodendron tulipifera", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Pollinator Garden", nurseryCost: "$68-$128" }),
  plant("American Sycamore", "Platanus occidentalis", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Clay", water: "High", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$70-$135" }),
  plant("Honeylocust", "Gleditsia triacanthos", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$60-$118" }),
  plant("American Beech", "Fagus grandifolia", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$68-$130" }),
  plant("European Beech", "Fagus sylvatica", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$72-$138" }),
  plant("Greenspire Linden", "Tilia cordata Greenspire", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Pollinator Garden", nurseryCost: "$62-$118" }),
  plant("Littleleaf Linden", "Tilia cordata", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Pollinator Garden", nurseryCost: "$60-$116" }),
  plant("American Elm", "Ulmus americana", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$62-$120" }),
  plant("Lacebark Elm", "Ulmus parvifolia", { category: "Tree", region: "Southwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "5-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$46-$88" }),
  plant("Hackberry", "Celtis occidentalis", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Clay", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$48-$92" }),
  plant("Kentucky Coffeetree", "Gymnocladus dioicus", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$64-$124" })
]);

PLANTS.push(...[
  plant("London Plane Tree", "Platanus x acerifolia", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Clay", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$66-$128" }),
  plant("European Hornbeam", "Carpinus betulus", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$58-$108" }),
  plant("American Hornbeam", "Carpinus caroliniana", { category: "Tree", region: "Northeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$44-$84" }),
  plant("Allegheny Serviceberry", "Amelanchier laevis", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$38-$76" }),
  plant("Washington Hawthorn", "Crataegus phaenopyrum", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$40-$78" }),
  plant("Golden Chain Tree", "Laburnum x watereri", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$44-$82" }),
  plant("Goldenraintree", "Koelreuteria paniculata", { category: "Tree", region: "Southwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Dry", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$42-$80" }),
  plant("Fringe Tree", "Chionanthus virginicus", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$44-$84" }),
  plant("Kousa Dogwood", "Cornus kousa", { category: "Tree", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$48-$92" }),
  plant("Yoshino Cherry", "Prunus x yedoensis", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Pollinator Garden", nurseryCost: "$48-$94" }),
  plant("Flowering Plum", "Prunus cerasifera", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$42-$82" }),
  plant("Jane Magnolia", "Magnolia Jane", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$46-$88" }),
  plant("Star Magnolia", "Magnolia stellata", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$46-$88" }),
  plant("Saucer Magnolia", "Magnolia x soulangeana", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$48-$92" }),
  plant("Jacaranda Tree", "Jacaranda mimosifolia", { category: "Tree", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple", climate: "Dry", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$52-$98" }),
  plant("Desert Willow", "Chilopsis linearis", { category: "Tree", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Dry", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$38-$74" }),
  plant("Chaste Tree", "Vitex agnus-castus", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Purple", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$36-$72" }),
  plant("Little Gem Magnolia", "Magnolia grandiflora Little Gem", { category: "Tree", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$52-$96" })
]);

PLANTS.push(...[
  plant("Italian Cypress", "Cupressus sempervirens", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$42-$82" }),
  plant("Eastern White Pine", "Pinus strobus", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$58-$108" }),
  plant("Austrian Pine", "Pinus nigra", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$54-$102" }),
  plant("Ponderosa Pine", "Pinus ponderosa", { category: "Tree", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "3-7", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$60-$112" }),
  plant("Blue Spruce", "Picea pungens", { category: "Tree", region: "Mountain", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$62-$116" }),
  plant("Norway Spruce", "Picea abies", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$60-$112" }),
  plant("Serbian Spruce", "Picea omorika", { category: "Tree", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$58-$108" }),
  plant("Eastern Red Cedar", "Juniperus virginiana", { category: "Tree", region: "Midwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$42-$82" }),
  plant("Incense Cedar", "Calocedrus decurrens", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$56-$106" }),
  plant("Douglas Fir", "Pseudotsuga menziesii", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$60-$114" }),
  plant("Deodar Cedar", "Cedrus deodara", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$58-$108" }),
  plant("Atlas Cedar", "Cedrus atlantica", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Blue", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$58-$112" }),
  plant("Canary Island Pine", "Pinus canariensis", { category: "Tree", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "7-10", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Privacy", nurseryCost: "$54-$102" }),
  plant("Japanese Black Pine", "Pinus thunbergii", { category: "Tree", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Upright", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Container Accent", nurseryCost: "$52-$98" })
]);

PLANTS.push(...[
  plant("Asparagus", "Asparagus officinalis", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Sandy", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "3-7", growthHabit: "Upright", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$8-$16" }),
  plant("Beet", "Beta vulgaris", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$3-$6" }),
  plant("Brussels Sprouts", "Brassica oleracea var. gemmifera", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Celery", "Apium graveolens", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Garlic", "Allium sativum", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$3-$6" }),
  plant("Green Bean", "Phaseolus vulgaris", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Vining", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Groundcover", nurseryCost: "$4-$8" }),
  plant("Onion", "Allium cepa", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Biennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$3-$6" }),
  plant("Leek", "Allium ampeloprasum var. porrum", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Biennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Bok Choy", "Brassica rapa subsp. chinensis", { category: "Edible", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Arugula", "Eruca vesicaria", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$3-$6" }),
  plant("Sweet Corn", "Zea mays convar. saccharata", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Potato", "Solanum tuberosum", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Butternut Squash", "Cucurbita moschata", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "7-10", growthHabit: "Vining", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Groundcover", nurseryCost: "$4-$8" }),
  plant("Acorn Squash", "Cucurbita pepo var. turbinata", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "7-10", growthHabit: "Vining", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Groundcover", nurseryCost: "$4-$8" }),
  plant("Eggplant", "Solanum melongena", { category: "Edible", region: "Southwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Dry", hardiness: "8-11", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Radish", "Raphanus sativus", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Sandy", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$3-$6" }),
  plant("Spinach", "Spinacia oleracea", { category: "Edible", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$3-$6" }),
  plant("Turnip", "Brassica rapa subsp. rapa", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Biennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$3-$6" }),
  plant("Parsnip", "Pastinaca sativa", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Sandy", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Biennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$3-$6" }),
  plant("Collard Greens", "Brassica oleracea var. viridis", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Biennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Pea", "Pisum sativum", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Vining", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Groundcover", nurseryCost: "$4-$8" }),
  plant("Snap Pea", "Pisum sativum var. macrocarpon", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-7", growthHabit: "Vining", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Groundcover", nurseryCost: "$4-$8" }),
  plant("Snow Pea", "Pisum sativum var. saccharatum", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Vining", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Groundcover", nurseryCost: "$4-$8" }),
  plant("Mustard Greens", "Brassica juncea", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Rutabaga", "Brassica napus var. napobrassica", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Biennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Horseradish", "Armoracia rusticana", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-8", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$6-$10" }),
  plant("Shallot", "Allium cepa var. aggregatum", { category: "Edible", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Biennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Scallion", "Allium fistulosum", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Upright", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Daikon", "Raphanus sativus var. longipinnatus", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Sandy", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "5-9", growthHabit: "Upright", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$3-$6" }),
  plant("Endive", "Cichorium endivia var. crispum", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Escarole", "Cichorium endivia var. latifolia", { category: "Edible", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Celeriac", "Apium graveolens var. rapaceum", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Low", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Biennial", cost: "Moderate", purpose: "Container Accent", nurseryCost: "$5-$9" }),
  plant("Jicama", "Pachyrhizus erosus", { category: "Edible", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Dry", hardiness: "8-11", growthHabit: "Vining", seasonality: "Fall", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Annual", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$5-$10" }),
  plant("Cassava", "Manihot esculenta", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Sandy", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Tropical", hardiness: "9-11", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$10-$18" }),
  plant("Tatsoi", "Brassica rapa var. rosularis", { category: "Edible", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Mizuna", "Brassica rapa var. nipposinica", { category: "Edible", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Napa Cabbage", "Brassica rapa subsp. pekinensis", { category: "Edible", region: "Northwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Container Accent", nurseryCost: "$4-$8" }),
  plant("Watercress", "Nasturtium officinale", { category: "Edible", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "5-9", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$5-$9" }),
  plant("Chayote", "Sechium edule", { category: "Edible", region: "Southeast", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Tropical", hardiness: "8-11", growthHabit: "Vining", seasonality: "Fall", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$8-$14" }),
  plant("Delicata Squash", "Cucurbita pepo var. delicata", { category: "Edible", region: "Midwest", sunlight: "Full Sun", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "5-9", growthHabit: "Vining", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Moderate", lifespan: "Annual", cost: "Budget", purpose: "Groundcover", nurseryCost: "$4-$8" }),
  plant("Heuchera", "Heuchera sanguinea", { category: "Flower", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Coral", climate: "Cool", hardiness: "4-9", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$10-$18" }),
  plant("Lungwort", "Pulmonaria saccharata", { category: "Flower", region: "Northwest", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "3-8", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$12-$20" }),
  plant("Jacobs Ladder", "Polemonium caeruleum", { category: "Flower", region: "Northeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Blue", climate: "Cool", hardiness: "3-8", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Edging", nurseryCost: "$10-$18" }),
  plant("Creeping Phlox", "Phlox subulata", { category: "Flower", region: "Northeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "3-9", growthHabit: "Groundcover", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$8-$14" }),
  plant("Ligularia", "Ligularia dentata", { category: "Flower", region: "Northwest", sunlight: "Part Shade", soil: "Rich Organic", water: "High", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "4-8", growthHabit: "Clumping", seasonality: "Summer", pollinator: "Moderate", toxicity: "Mildly Toxic", pestResistance: "Low", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Accent Plant", nurseryCost: "$14-$24" }),
  plant("Goats Beard", "Aruncus dioicus", { category: "Flower", region: "Mountain", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "3-7", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Background Planting", nurseryCost: "$14-$24" }),
  plant("Astrantia", "Astrantia major", { category: "Flower", region: "Northeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "4-8", growthHabit: "Clumping", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$12-$20" }),
  plant("Geum", "Geum chiloense", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Orange", climate: "Temperate", hardiness: "5-9", growthHabit: "Clumping", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$8-$14" }),
  plant("Euphorbia", "Euphorbia characias", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Accent Plant", nurseryCost: "$12-$20" }),
  plant("Thalictrum", "Thalictrum aquilegiifolium", { category: "Flower", region: "Mountain", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Lavender", climate: "Cool", hardiness: "4-8", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Moderate", purpose: "Background Planting", nurseryCost: "$14-$22" }),
  plant("Alchemilla", "Alchemilla mollis", { category: "Flower", region: "Northeast", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Green", climate: "Cool", hardiness: "3-8", growthHabit: "Mounding", seasonality: "Summer", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Edging", nurseryCost: "$8-$14" }),
  plant("Eryngium", "Eryngium planum", { category: "Flower", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "4-8", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$10-$18" }),
  plant("Sanguisorba", "Sanguisorba officinalis", { category: "Flower", region: "Mountain", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Cool", hardiness: "4-8", growthHabit: "Upright", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Cut Flower", nurseryCost: "$12-$20" }),
  plant("Bugbane", "Actaea simplex", { category: "Flower", region: "Northeast", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "4-8", growthHabit: "Upright", seasonality: "Fall", pollinator: "Moderate", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Background Planting", nurseryCost: "$18-$30" }),
  plant("Lavatera", "Lavatera trimestris", { category: "Flower", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Upright", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Annual", cost: "Budget", purpose: "Cut Flower", nurseryCost: "$5-$9" }),
  plant("Fothergilla", "Fothergilla gardenii", { category: "Shrub", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-8", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Foundation Planting", nurseryCost: "$24-$42" }),
  plant("Clethra", "Clethra alnifolia", { category: "Shrub", region: "Northeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "4-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$18-$32" }),
  plant("Itea", "Itea virginica", { category: "Shrub", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$16-$28" }),
  plant("Potentilla Shrub", "Dasiphora fruticosa", { category: "Shrub", region: "Mountain", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Cool", hardiness: "2-7", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Foundation Planting", nurseryCost: "$14-$26" }),
  plant("Caryopteris", "Caryopteris x clandonensis", { category: "Shrub", region: "Southwest", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Dry", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Pollinator Garden", nurseryCost: "$16-$28" }),
  plant("Arrowwood Viburnum", "Viburnum dentatum", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "3-8", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$32" }),
  plant("Doublefile Viburnum", "Viburnum plicatum f. tomentosum", { category: "Shrub", region: "Northeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-8", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Foundation Planting", nurseryCost: "$28-$48" }),
  plant("Korean Spice Viburnum", "Viburnum carlesii", { category: "Shrub", region: "Midwest", sunlight: "Part Shade", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "4-7", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Foundation Planting", nurseryCost: "$22-$38" }),
  plant("Virginia Sweetspire", "Itea virginica", { category: "Shrub", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$16-$28" }),
  plant("Sweetshrub", "Calycanthus floridus", { category: "Shrub", region: "Southeast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "4-9", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Sheltered", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Accent Plant", nurseryCost: "$18-$34" }),
  plant("Serviceberry Shrub", "Amelanchier alnifolia", { category: "Shrub", region: "Mountain", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "White", climate: "Cool", hardiness: "3-8", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Wildlife Garden", nurseryCost: "$20-$36" }),
  plant("Andromeda", "Pieris japonica", { category: "Shrub", region: "Pacific Coast", sunlight: "Part Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "5-8", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Low", toxicity: "Toxic", pestResistance: "Moderate", drainage: "Moist", wind: "Sheltered", container: "Ground", care: "Moderate", lifespan: "Perennial", cost: "Premium", purpose: "Foundation Planting", nurseryCost: "$28-$48" }),
  plant("Hypericum", "Hypericum Hidcote", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Mediterranean", hardiness: "5-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Foundation Planting", nurseryCost: "$12-$22" }),
  plant("Bayberry", "Myrica pensylvanica", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Coastal", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$30" }),
  plant("Sweet Box", "Sarcococca confusa", { category: "Shrub", region: "Pacific Coast", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "White", climate: "Temperate", hardiness: "6-9", growthHabit: "Shrubby", seasonality: "Winter", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Foundation Planting", nurseryCost: "$20-$34" }),
  plant("Viburnum Tinus", "Viburnum tinus", { category: "Shrub", region: "Pacific Coast", sunlight: "Part Shade", soil: "Loam", water: "Low", setting: "Outdoor", color: "Pink", climate: "Mediterranean", hardiness: "7-10", growthHabit: "Shrubby", seasonality: "Winter", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$32" }),
  plant("Dwarf Abelia", "Abelia x grandiflora Compacta", { category: "Shrub", region: "Southeast", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "6-9", growthHabit: "Shrubby", seasonality: "Summer", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Foundation Planting", nurseryCost: "$16-$28" }),
  plant("Sweetfern", "Comptonia peregrina", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Green", climate: "Temperate", hardiness: "2-6", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$16-$28" }),
  plant("Winter Heath", "Erica carnea", { category: "Shrub", region: "Mountain", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Pink", climate: "Cool", hardiness: "5-7", growthHabit: "Groundcover", seasonality: "Winter", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Moderate", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$8-$14" }),
  plant("Heather", "Calluna vulgaris", { category: "Shrub", region: "Northeast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Purple", climate: "Cool", hardiness: "4-6", growthHabit: "Groundcover", seasonality: "Fall", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Both", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Groundcover", nurseryCost: "$8-$14" }),
  plant("Fragrant Sumac", "Rhus aromatica", { category: "Shrub", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Low", setting: "Outdoor", color: "Yellow", climate: "Temperate", hardiness: "3-8", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "Moderate", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Groundcover", nurseryCost: "$16-$28" }),
  plant("Coralberry", "Symphoricarpos orbiculatus", { category: "Shrub", region: "Midwest", sunlight: "Part Shade", soil: "Loam", water: "Low", setting: "Outdoor", color: "Pink", climate: "Temperate", hardiness: "3-7", growthHabit: "Shrubby", seasonality: "Fall", pollinator: "Low", toxicity: "Pet Safe", pestResistance: "High", drainage: "Average", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Budget", purpose: "Wildlife Garden", nurseryCost: "$14-$24" }),
  plant("Japanese Skimmia", "Skimmia japonica", { category: "Shrub", region: "Pacific Coast", sunlight: "Shade", soil: "Rich Organic", water: "Moderate", setting: "Outdoor", color: "Red", climate: "Temperate", hardiness: "6-8", growthHabit: "Shrubby", seasonality: "Year-Round Interest", pollinator: "Low", toxicity: "Toxic", pestResistance: "High", drainage: "Moist", wind: "Sheltered", container: "Both", care: "Low", lifespan: "Perennial", cost: "Premium", purpose: "Foundation Planting", nurseryCost: "$22-$38" }),
  plant("California Lilac", "Ceanothus thyrsiflorus", { category: "Shrub", region: "Pacific Coast", sunlight: "Full Sun", soil: "Sandy", water: "Low", setting: "Outdoor", color: "Blue", climate: "Mediterranean", hardiness: "8-10", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "High", drainage: "Well-Drained", wind: "Wind Tolerant", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Privacy", nurseryCost: "$18-$32" }),
  plant("Miss Kim Lilac", "Syringa pubescens subsp. patula 'Miss Kim'", { category: "Shrub", region: "Midwest", sunlight: "Full Sun", soil: "Loam", water: "Moderate", setting: "Outdoor", color: "Purple", climate: "Cool", hardiness: "3-8", growthHabit: "Shrubby", seasonality: "Spring", pollinator: "High", toxicity: "Pet Safe", pestResistance: "Moderate", drainage: "Well-Drained", wind: "Moderate", container: "Ground", care: "Low", lifespan: "Perennial", cost: "Moderate", purpose: "Foundation Planting", nurseryCost: "$20-$34" })
]);

dedupePlants();
normalizePlantCategories();

window.GARDENING_PLANTS = PLANTS;
window.GARDENING_RENDER_PLANT_CARD = renderPlantCard;
window.GARDENING_GROUP_BY_CATEGORY = groupByCategory;
window.GARDENING_HANDLE_PLANT_IMAGE_ERROR = handlePlantImageError;
window.GARDENING_IMAGE_FILE_MAPS = {
  popularLocal: POPULAR_PLANT_IMAGE_FILES,
  mappedLocal: REMOTE_MAPPED_PLANT_IMAGE_FILES,
  remote: POPULAR_PLANT_REMOTE_FILES
};
window.GARDENING_NORMALIZE_PLANT_IMAGE_PATH = normalizePlantImagePath;

initializeBrowseSearchForms();

if (resultsSortSelect) {
  resultsSortSelect.addEventListener("change", () => {
    renderResults();
  });
}

if (filterGrid && resultsList && resultsCount && databaseCount && resetButton) {
  renderFilters();
  initializePreferenceSliders();
  initializeZoneLookup();
  renderResults();

  resetButton.addEventListener("click", () => {
    FILTERS.forEach((filter) => {
      state[filter.key] = "Any";
      const select = document.getElementById(`filter-${filter.key}`);
      if (select) {
        select.value = "Any";
      }
    });

    if (zipCodeInput) {
      zipCodeInput.value = "";
    }
    if (zoneLookupResult) {
      zoneLookupResult.textContent = "No ZIP or postal code entered yet.";
    }
    syncPreferenceSliders();
    renderResults();
  });
}

function initializeBrowseSearchForms() {
  document.querySelectorAll("form[data-browse-search-form]").forEach((form) => {
    if (form.dataset.searchReady === "true") {
      return;
    }

    form.dataset.searchReady = "true";
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const searchInput = form.querySelector('input[name="q"], input[type="search"]');
      const viewInput = form.querySelector('input[name="view"]');
      const query = (searchInput?.value || "").trim();
      const view = (viewInput?.value || "all").trim() || "all";
      const target = form.getAttribute("action") || "./browse.html";
      const nextUrl = new URL(target, window.location.href);

      nextUrl.search = "";
      nextUrl.searchParams.set("view", view);
      if (query) {
        nextUrl.searchParams.set("q", query);
      }

      window.location.assign(nextUrl.toString());
    });
  });
}

function renderFilters() {
  filterGrid.innerHTML = FILTERS.map((filter) => `
    <div class="field">
      <label for="filter-${filter.key}">${filter.label}</label>
      <select id="filter-${filter.key}" data-key="${filter.key}">
        ${filter.options.map((option) => `<option value="${option}">${option}</option>`).join("")}
      </select>
    </div>
  `).join("");

  FILTERS.forEach((filter) => {
    state[filter.key] = "Any";
  });

  document.querySelectorAll("select[data-key]").forEach((select) => {
    select.addEventListener("change", (event) => {
      const key = event.currentTarget.dataset.key;
      state[key] = event.currentTarget.value;
      updateFilterSelectState(event.currentTarget);
      syncPreferenceSlider(key);
      renderResults();
    });
  });

  syncFilterSelectStates();
  syncPreferenceSliders();
}

function renderResults() {
  if (!databaseCount || !resultsCount || !resultsList) {
    return;
  }

  const activeFilters = FILTERS.filter((filter) => state[filter.key] && state[filter.key] !== "Any");
  const showDefaultResults = activeFilters.length === 0;

  syncFilterSelectStates();
  syncPreferenceSliders();
  databaseCount.textContent = `${PLANTS.length} plants in database`;
  if (resultsSortSelect) {
    resultsSortSelect.disabled = false;
  }

  const sortMode = resultsSortSelect?.value || "match";

  const ranked = PLANTS
    .map((plant) => ({
      plant,
      ...scorePlant(plant)
    }))
    .filter((entry) => entry.score > 0)
    .sort((leftEntry, rightEntry) => compareRankedPlants(leftEntry, rightEntry, sortMode));
  const visibleRanked = showDefaultResults
    ? getDefaultHomeResults(ranked)
    : ranked;

  resultsCount.textContent = showDefaultResults
    ? `Showing first ${visibleRanked.length} of ${ranked.length} plants`
    : `${ranked.length} results`;

  if (visibleRanked.length === 0) {
    resultsList.innerHTML = `
      <article class="empty-state">
        No plants matched the current criteria. Try loosening one or two filters to see more options.
      </article>
    `;
    return;
  }

  const grouped = groupByCategory(visibleRanked);
  const defaultResultsNotice = showDefaultResults
    ? `
      <article class="empty-state">
        Showing ${visibleRanked.length} featured plants with images first for faster loading. Add filters to narrow the list, or use <a href="./master-list.html">Plant Master Database</a> for the full catalog.
      </article>
    `
    : "";

  resultsList.innerHTML = defaultResultsNotice + Object.entries(grouped)
    .map(([category, items]) => `
      <section class="section-group">
        <article class="section-heading-card">
          <h3 class="category-title">${category}</h3>
          <p class="summary-copy">${items.length} matching plants in this category.</p>
        </article>
        ${items.map(({ plant, score, matchedTags }) => renderPlantCard(plant, score, matchedTags, !showDefaultResults)).join("")}
      </section>
    `)
    .join("");
}

function initializeZoneLookup() {
  if (!zipCodeInput || !zoneLookupButton || !zoneLookupResult) {
    return;
  }

  zoneLookupButton.addEventListener("click", applyZoneLookup);
  zipCodeInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      applyZoneLookup();
    }
  });
}

function applyZoneLookup() {
  if (!zipCodeInput || !zoneLookupResult) {
    return;
  }

  const rawValue = zipCodeInput.value.trim();
  const lookup = lookupZoneFromPostalCode(rawValue);

  if (!lookup) {
    zoneLookupResult.textContent = "Could not estimate a hardiness band from that ZIP or postal code.";
    return;
  }

  state.hardiness = lookup.zone;
  const hardinessSelect = document.getElementById("filter-hardiness");
  if (hardinessSelect) {
    hardinessSelect.value = lookup.zone;
  }

  if (lookup.region && state.region === "Any") {
    state.region = lookup.region;
    const regionSelect = document.getElementById("filter-region");
    if (regionSelect) {
      regionSelect.value = lookup.region;
    }
  }

  zoneLookupResult.textContent = `Estimated hardiness band: ${lookup.zone}${lookup.region ? ` Â· suggested location: ${lookup.region}` : ""}.`;
  renderResults();
}

function initializePreferenceSliders() {
  if (sliderToggleButton && sliderPanelContent) {
    sliderToggleButton.addEventListener("click", () => {
      const isHidden = sliderPanelContent.classList.toggle("is-hidden");
      sliderToggleButton.textContent = isHidden ? "Show Sliders" : "Hide Sliders";
      sliderToggleButton.setAttribute("aria-expanded", String(!isHidden));
    });
  }

  document.querySelectorAll("input[data-slider-key]").forEach((slider) => {
    slider.addEventListener("input", (event) => {
      const key = event.currentTarget.dataset.sliderKey;
      const options = SLIDER_FILTERS[key];
      if (!options) {
        return;
      }

      const optionIndex = Number(event.currentTarget.value);
      const selectedValue = options[optionIndex] || "Any";
      state[key] = selectedValue;

      const select = document.getElementById(`filter-${key}`);
      if (select) {
        select.value = selectedValue;
      }

      syncPreferenceSlider(key);
      renderResults();
    });
  });

  syncPreferenceSliders();
}

function syncPreferenceSliders() {
  Object.keys(SLIDER_FILTERS).forEach((key) => {
    syncPreferenceSlider(key);
  });
}

function syncFilterSelectStates() {
  document.querySelectorAll("select[data-key]").forEach((select) => {
    updateFilterSelectState(select);
  });
}

function updateFilterSelectState(select) {
  if (!select) {
    return;
  }

  const isActive = Boolean(select.value) && select.value !== "Any";
  select.classList.toggle("filter-select-active", isActive);
}

function syncPreferenceSlider(key) {
  const options = SLIDER_FILTERS[key];
  const slider = document.getElementById(`preference-${key}`);
  const valueLabel = document.getElementById(`sliderValue-${key}`);
  if (!options || !slider || !valueLabel) {
    return;
  }

  const selectedValue = state[key] || "Any";
  const selectedIndex = Math.max(0, options.indexOf(selectedValue));
  slider.value = String(selectedIndex);
  valueLabel.textContent = options[selectedIndex] || "Any";
}

function lookupZoneFromPostalCode(value) {
  if (!value) {
    return null;
  }

  const compact = value.toUpperCase().replace(/\s+/g, "");

  if (/^\d{5}$/.test(compact)) {
    const zip = Number(compact);
    const match = ZIP_ZONE_RULES.find((rule) => rule.test(zip));
    return match ? { zone: match.zone, region: match.region } : null;
  }

  if (/^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(compact)) {
    const firstLetter = compact[0];
    const match = CANADA_ZONE_RULES.find((rule) => rule.prefixes.includes(firstLetter));
    return match ? { zone: match.zone, region: match.region } : null;
  }

  return null;
}

const FILTER_WEIGHTS = {
  category: 1.2,
  region: 1.6,
  sunlight: 2.2,
  soil: 1.2,
  water: 2.0,
  setting: 2.3,
  color: 0.8,
  climate: 1.6,
  hardiness: 1.9,
  growthHabit: 1.0,
  seasonality: 0.9,
  pollinator: 1.0,
  toxicity: 1.4,
  pestResistance: 1.0,
  drainage: 1.3,
  wind: 1.0,
  container: 1.2,
  care: 1.1,
  lifespan: 1.0,
  cost: 0.9,
  purpose: 1.7
};

const STRICT_FILTER_KEYS = new Set([
  "category",
  "region",
  "sunlight",
  "water",
  "setting",
  "hardiness",
  "toxicity",
  "container"
]);

const PARTIAL_MATCH_THRESHOLD = 0.72;

const ORDERED_FILTER_OPTIONS = {
  sunlight: ["Shade", "Part Shade", "Full Sun"],
  water: ["Low", "Moderate", "High"],
  care: ["Low", "Moderate", "High"],
  pollinator: ["Low", "Moderate", "High"],
  pestResistance: ["Low", "Moderate", "High"],
  drainage: ["Moist", "Average", "Well-Drained"],
  wind: ["Sheltered", "Moderate", "Wind Tolerant"],
  cost: ["Budget", "Moderate", "Premium"]
};

function getMinimumVisibleScore(activeFilterCount) {
  return activeFilterCount === 1 ? 7 : 6.6;
}

function getOrderedMatchScore(plantValue, selectedValue, options, adjacentScore = PARTIAL_MATCH_THRESHOLD) {
  const plantIndex = options.indexOf(plantValue);
  const selectedIndex = options.indexOf(selectedValue);
  if (plantIndex === -1 || selectedIndex === -1) {
    return plantValue === selectedValue ? 1 : 0;
  }

  const distance = Math.abs(plantIndex - selectedIndex);
  if (distance === 0) {
    return 1;
  }

  if (distance === 1) {
    return adjacentScore;
  }

  return 0;
}

function parseHardinessRange(rangeValue) {
  const matches = String(rangeValue || "").match(/^(\d+)\s*-\s*(\d+)$/);
  if (!matches) {
    return null;
  }

  return {
    min: Number(matches[1]),
    max: Number(matches[2])
  };
}

function getHardinessMatchScore(plantValue, selectedValue) {
  if (plantValue === selectedValue) {
    return 1;
  }

  const plantRange = parseHardinessRange(plantValue);
  const selectedRange = parseHardinessRange(selectedValue);
  if (!plantRange || !selectedRange) {
    return 0;
  }

  const overlapMin = Math.max(plantRange.min, selectedRange.min);
  const overlapMax = Math.min(plantRange.max, selectedRange.max);
  if (overlapMin <= overlapMax) {
    return 0.82;
  }

  const gap = Math.min(
    Math.abs(plantRange.min - selectedRange.max),
    Math.abs(selectedRange.min - plantRange.max)
  );

  return gap === 1 ? PARTIAL_MATCH_THRESHOLD : 0;
}

function getFlexiblePlacementMatchScore(plantValue, selectedValue) {
  if (plantValue === selectedValue) {
    return 1;
  }

  if (plantValue === "Both" && ["Indoor", "Outdoor", "Container", "Ground"].includes(selectedValue)) {
    return 1;
  }

  if (selectedValue === "Both" && ["Indoor", "Outdoor", "Container", "Ground"].includes(plantValue)) {
    return PARTIAL_MATCH_THRESHOLD;
  }

  return 0;
}

function getRegionMatchScore(plantValue, selectedValue) {
  if (plantValue === selectedValue) {
    return 1;
  }

  if (plantValue === "Indoor Anywhere" && selectedValue !== "Indoor Anywhere") {
    return PARTIAL_MATCH_THRESHOLD;
  }

  return 0;
}

function getFilterMatchDetails(plant, filter, selectedValue) {
  if (!filter || !selectedValue || selectedValue === "Any") {
    return {
      score: 0,
      isExact: false,
      tagValue: ""
    };
  }

  let matchScore = 0;

  if (filter.key === "color") {
    matchScore = plantMatchesColor(plant, selectedValue) ? 1 : 0;
  } else if (filter.key === "category") {
    matchScore = plantMatchesCategory(plant, selectedValue) ? 1 : 0;
  } else if (filter.key === "hardiness") {
    matchScore = getHardinessMatchScore(plant[filter.key], selectedValue);
  } else if (filter.key === "setting" || filter.key === "container") {
    matchScore = getFlexiblePlacementMatchScore(plant[filter.key], selectedValue);
  } else if (filter.key === "region") {
    matchScore = getRegionMatchScore(plant[filter.key], selectedValue);
  } else if (ORDERED_FILTER_OPTIONS[filter.key]) {
    matchScore = getOrderedMatchScore(plant[filter.key], selectedValue, ORDERED_FILTER_OPTIONS[filter.key]);
  } else {
    matchScore = plant[filter.key] === selectedValue ? 1 : 0;
  }

  return {
    score: matchScore,
    isExact: matchScore >= 0.999,
    tagValue: filter.key === "color" ? getColorDisplayValue(plant.color) : plant[filter.key]
  };
}

function scorePlant(plant) {
  const activeFilters = FILTERS.filter((filter) => state[filter.key] && state[filter.key] !== "Any");

  if (activeFilters.length === 0) {
    return {
      score: 10,
      matchedTags: buildMatchedTags(plant, FILTERS.slice(0, 6))
    };
  }

  let matchedWeight = 0;
  let totalWeight = 0;
  const matchedTags = [];
  let blockedByStrictFilter = false;

  for (const filter of activeFilters) {
    const matchDetails = getFilterMatchDetails(plant, filter, state[filter.key]);
    const weight = FILTER_WEIGHTS[filter.key] || 1;
    totalWeight += weight;

    if (matchDetails.score === 0 && STRICT_FILTER_KEYS.has(filter.key)) {
      blockedByStrictFilter = true;
    }

    matchedWeight += weight * matchDetails.score;

    if (matchDetails.isExact) {
      matchedTags.push({
        label: filter.label,
        value: matchDetails.tagValue
      });
    }
  }

  if (blockedByStrictFilter) {
    return {
      score: 0,
      matchedTags: []
    };
  }

  const score = totalWeight > 0 ? (matchedWeight / totalWeight) * 10 : 0;
  if (score < getMinimumVisibleScore(activeFilters.length)) {
    return {
      score: 0,
      matchedTags: []
    };
  }

  return {
    score,
    matchedTags
  };
}

function plantMatchesCategory(plant, selectedCategory) {
  if (!selectedCategory || selectedCategory === "Any") {
    return true;
  }

  if (selectedCategory === "Fruit") {
    return isFruitCategoryPlant(plant);
  }

  if (selectedCategory === "Vegetable") {
    return isVegetableCategoryPlant(plant);
  }

  return plant.category === selectedCategory;
}

function isFruitCategoryPlant(plant) {
  if (!plant || !["Edible", "Tree", "Vine", "Shrub"].includes(plant.category)) {
    return false;
  }

  const searchableName = `${plant.commonName} ${plant.latinName}`.toLowerCase();
  return FRUIT_CATEGORY_KEYWORDS.some((keyword) => searchableName.includes(keyword));
}

function isVegetableCategoryPlant(plant) {
  if (!plant || plant.category !== "Edible") {
    return false;
  }

  if (isFruitCategoryPlant(plant)) {
    return false;
  }

  const searchableName = `${plant.commonName} ${plant.latinName}`.toLowerCase();
  return VEGETABLE_CATEGORY_KEYWORDS.some((keyword) => searchableName.includes(keyword));
}

function buildMatchedTags(plant, filters) {
  return filters.map((filter) => ({
    label: filter.label,
    value: filter.key === "color" ? getColorDisplayValue(plant[filter.key]) : plant[filter.key]
  }));
}

function compareRankedPlants(leftEntry, rightEntry, sortMode) {
  if (sortMode === "images") {
    const leftHasRealImage = Number(hasLikelyRealImage(leftEntry.plant));
    const rightHasRealImage = Number(hasLikelyRealImage(rightEntry.plant));
    if (leftHasRealImage !== rightHasRealImage) {
      return rightHasRealImage - leftHasRealImage;
    }
  }

  if (leftEntry.score !== rightEntry.score) {
    return rightEntry.score - leftEntry.score;
  }

  const leftExactMatches = leftEntry.matchedTags?.length || 0;
  const rightExactMatches = rightEntry.matchedTags?.length || 0;
  if (leftExactMatches !== rightExactMatches) {
    return rightExactMatches - leftExactMatches;
  }

  return leftEntry.plant.commonName.localeCompare(rightEntry.plant.commonName, undefined, { sensitivity: "base" });
}

function getDefaultHomeResults(ranked) {
  const featuredEntries = ranked.filter((entry) => hasLikelyRealImage(entry.plant));
  const fallbackEntries = ranked.filter((entry) => !hasLikelyRealImage(entry.plant));

  return [...featuredEntries, ...fallbackEntries].slice(0, DEFAULT_HOME_RESULTS_LIMIT);
}

function hasLikelyRealImage(plant) {
  if (!plant) {
    return false;
  }

  if (getStoredPlantImage(plant.commonName)) {
    return true;
  }

  if (POPULAR_PLANT_IMAGE_FILES[plant.commonName] || POPULAR_PLANT_REMOTE_FILES[plant.commonName]) {
    return true;
  }

  if (!Array.isArray(plant.imageCandidates) || plant.imageCandidates.length === 0) {
    return Boolean(plant.image) && !String(plant.image).startsWith("data:image/svg+xml");
  }

  return false;
}

const MATCH_REASON_PRIORITY = [
  "Sunlight",
  "Water",
  "Climate",
  "Hardiness",
  "Location",
  "Indoor / Outdoor",
  "Purpose / Function",
  "Plant Color",
  "Flower Colors",
  "Category"
];

function getMatchReasonPriority(label) {
  const priorityIndex = MATCH_REASON_PRIORITY.indexOf(label);
  return priorityIndex === -1 ? MATCH_REASON_PRIORITY.length : priorityIndex;
}

function getTopMatchedReasons(matchedTags, limit = 3) {
  const uniqueByLabel = [];
  const seenLabels = new Set();

  matchedTags.forEach((tag) => {
    if (!tag || !tag.label || !tag.value) {
      return;
    }

    const normalizedLabel = tag.label.toLowerCase();
    if (seenLabels.has(normalizedLabel)) {
      return;
    }

    seenLabels.add(normalizedLabel);
    uniqueByLabel.push(tag);
  });

  return uniqueByLabel
    .sort((leftTag, rightTag) => getMatchReasonPriority(leftTag.label) - getMatchReasonPriority(rightTag.label))
    .slice(0, limit);
}

function formatReasonChip(tag) {
  switch (tag.label) {
    case "Sunlight":
      return tag.value;
    case "Water":
      return `${tag.value} Water`;
    case "Climate":
      return `${tag.value} Climate`;
    case "Hardiness":
      return `Zone ${tag.value}`;
    case "Location":
      return tag.value;
    case "Indoor / Outdoor":
      return `${tag.value} Growing`;
    case "Plant Color":
      return `${tag.value} Color`;
    case "Flower Colors":
      return `${tag.value} Blooms`;
    case "Purpose / Function":
      return tag.value;
    default:
      return tag.value;
  }
}

function formatReasonForSentence(tag) {
  const value = String(tag.value || "").toLowerCase();

  switch (tag.label) {
    case "Sunlight":
      return `${value} sunlight`;
    case "Water":
      return `${value} water needs`;
    case "Climate":
      return `${value} climate`;
    case "Hardiness":
      return `hardiness zone ${tag.value}`;
    case "Location":
      return value.includes("indoor") ? "indoor-friendly placement" : `${value} region`;
    case "Indoor / Outdoor":
      if (value === "both") {
        return "indoor or outdoor placement";
      }

      return `${value} placement`;
    case "Plant Color":
      return `${value} color`;
    case "Flower Colors":
      return `${value} bloom colors`;
    case "Purpose / Function":
      return `${value} garden goals`;
    case "Category":
      return `${value} plant types`;
    default:
      return `${value} ${String(tag.label || "").toLowerCase()}`.trim();
  }
}

function formatNaturalList(values) {
  if (values.length === 0) {
    return "";
  }

  if (values.length === 1) {
    return values[0];
  }

  if (values.length === 2) {
    return `${values[0]} and ${values[1]}`;
  }

  return `${values.slice(0, -1).join(", ")}, and ${values.at(-1)}`;
}

function getScoreTier(score) {
  if (score >= 9.5) {
    return {
      className: "score-high",
      headline: "Perfect Match",
      contextLead: "Perfect for"
    };
  }

  if (score >= 8) {
    return {
      className: "score-good",
      headline: "Strong Match",
      contextLead: "Strong for"
    };
  }

  if (score >= 6) {
    return {
      className: "score-medium",
      headline: "Possible Match",
      contextLead: "Promising for"
    };
  }

  return {
    className: "score-low",
    headline: "Stretch Match",
    contextLead: "A stretch for"
  };
}

function getScorePresentation(plant, score, matchedTags, hasActiveFilters) {
  const reasons = getTopMatchedReasons(matchedTags, 3);

  if (!hasActiveFilters) {
    return {
      className: "score-featured",
      eyebrow: "PlantPlanner Pick",
      headline: "Featured on Home",
      context: hasLikelyRealImage(plant)
        ? "Featured first so you can browse image-backed plants right away."
        : "Featured first so you can start browsing the catalog quickly.",
      reasons
    };
  }

  const tier = getScoreTier(score);
  const reasonPhrases = reasons.map((tag) => formatReasonForSentence(tag));

  return {
    className: tier.className,
    eyebrow: "PlantPlanner Match",
    headline: `${tier.headline} (${score.toFixed(1)}/10)`,
    context: reasonPhrases.length > 0
      ? `${tier.contextLead} your ${formatNaturalList(reasonPhrases)} conditions.`
      : "Close overall fit for your current filters.",
    reasons
  };
}

function renderPlantCard(plant, score, matchedTags, hasActiveFilters) {
  const plantGuideUrl = buildPlantGuideUrl(plant);
  const fallbackImage = plant.fallbackImage || createPlantImage(plant.commonName, plant.color, plant.setting);
  const initialImageSource = hasLikelyRealImage(plant) ? plant.image : fallbackImage;
  const imageCandidates = serializePlantImageCandidates(plant.imageCandidates);
  const colorList = getPlantColorList(plant.color);
  const scorePresentation = getScorePresentation(plant, score, matchedTags, hasActiveFilters);
  const colorTag = colorList.length > 1
    ? renderResultTag("Flower Colors", colorList.join(", "), true)
    : renderResultTag("Plant Color", getColorDisplayValue(plant.color), true);
  const secondaryMatchedTags = matchedTags.filter((tag) => !["Plant Color", "Flower Colors", "Sunlight", "Water"].includes(tag.label));
  const matchReasonMarkup = scorePresentation.reasons.length > 0
    ? `
        <div class="match-reason-list">
          ${scorePresentation.reasons.map((tag) => `
            <span class="match-reason">
              <span class="match-reason-check" aria-hidden="true">&#10003;</span>
              <span>${formatReasonChip(tag)}</span>
            </span>
          `).join("")}
        </div>
      `
    : "";

  return `
    <article class="result-card">
      <div class="plant-image">
        <img
          src="${initialImageSource}"
          alt="${plant.commonName}"
          loading="lazy"
          decoding="async"
          data-fallback="${fallbackImage}"
          data-image-candidates="${imageCandidates}"
          data-image-candidate-index="0"
          onerror="window.GARDENING_HANDLE_PLANT_IMAGE_ERROR && window.GARDENING_HANDLE_PLANT_IMAGE_ERROR(this)"
        >
      </div>
      <div class="result-content">
        <div class="result-top">
          <div class="result-title">
            <h3>${plant.commonName}</h3>
            <p class="latin-name">${plant.latinName}</p>
          </div>
          <div class="result-score-stack">
            <div class="score-pill ${scorePresentation.className}">
              <small>${scorePresentation.eyebrow}</small>
              <span>${scorePresentation.headline}</span>
            </div>
            <p class="score-context">${scorePresentation.context}</p>
          </div>
        </div>
        <p class="summary-copy">
          ${plant.category} option best for ${plant.purpose.toLowerCase()} projects with ${plant.sunlight.toLowerCase()}, ${plant.water.toLowerCase()} water needs, and ${plant.care.toLowerCase()} maintenance.
        </p>
        ${matchReasonMarkup}
        <div class="tag-grid">
          ${renderResultTag("Suggested Nursery Cost", plant.nurseryCost)}
          ${renderResultTag("Sunlight", plant.sunlight)}
          ${renderResultTag("Water", plant.water)}
          ${colorTag}
          ${secondaryMatchedTags.map((tag) => `
            ${renderResultTag(tag.label, tag.value)}
          `).join("")}
        </div>
        <div class="result-link-row">
          ${plantGuideUrl ? `<a class="guide-button" href="${plantGuideUrl}">Click for Plant Care</a>` : ""}
        </div>
      </div>
    </article>
  `;
}

function buildPlantGuideUrl(plant) {
  if (!window.GARDENING_GET_PLANT_GUIDE_BY_NAME) {
    return "";
  }

  const guide = window.GARDENING_GET_PLANT_GUIDE_BY_NAME(plant.commonName);
  if (!guide || !guide.slug) {
    return "";
  }

  return `./plant-guide.html?plant=${encodeURIComponent(guide.slug)}`;
}

function renderResultTag(label, value, forceColorTag = false) {
  const iconMarkup = getResultTagIcon(label, value);
  const className = forceColorTag ? "tag color-tag" : "tag";

  if (!iconMarkup) {
    return `<span class="${className}"><strong>${label}:</strong> ${value}</span>`;
  }

  return `
    <span class="${className} tag-with-icon">
      <span class="tag-icon" aria-hidden="true">${iconMarkup}</span>
      <span><strong>${label}:</strong> ${value}</span>
    </span>
  `;
}

function getResultTagIcon(label, value) {
  const normalizedLabel = String(label || "").toLowerCase();
  const normalizedValue = String(value || "").toLowerCase();

  if (normalizedLabel.includes("sunlight")) {
    if (normalizedValue.includes("part shade")) {
      return `
        <svg viewBox="0 0 24 24" role="presentation">
          <circle cx="9" cy="9" r="3.6" fill="#f0bf47"></circle>
          <g stroke="#f0bf47" stroke-linecap="round" stroke-width="1.7">
            <path d="M9 2.3v2.1"></path>
            <path d="M9 13.6v2.1"></path>
            <path d="M2.3 9h2.1"></path>
            <path d="M13.6 9h2.1"></path>
            <path d="M4.4 4.4l1.5 1.5"></path>
            <path d="M12.1 12.1l1.5 1.5"></path>
            <path d="M4.4 13.6l1.5-1.5"></path>
            <path d="M12.1 5.9l1.5-1.5"></path>
          </g>
          <path d="M8.7 13.7c.5-1.9 2.2-3.2 4.3-3.2 2.4 0 4.4 1.9 4.4 4.4H8.7Z" fill="#d8e5ef"></path>
          <path d="M6.3 15.2c.6-1.8 2.2-3 4.1-3 1.5 0 2.9.7 3.7 2 .3-.1.7-.1 1-.1 1.8 0 3.2 1.4 3.2 3.2H6.3v-2.1Z" fill="#c8d8e4"></path>
        </svg>
      `;
    }

    if (normalizedValue.includes("shade")) {
      return `
        <svg viewBox="0 0 24 24" role="presentation">
          <path d="M6.1 15.7c.7-2.2 2.7-3.7 5.1-3.7 1.9 0 3.6.8 4.6 2.3.4-.1.9-.2 1.3-.2 2 0 3.7 1.6 3.7 3.7H6.1v-2.1Z" fill="#c8d8e4"></path>
          <path d="M4 16.8c0-1.9 1.6-3.5 3.6-3.5.4 0 .8.1 1.2.2 1-1.5 2.8-2.4 4.8-2.4 2.7 0 5 1.8 5.8 4.3H4v1.4Z" fill="#dce7ef"></path>
        </svg>
      `;
    }

    return `
      <svg viewBox="0 0 24 24" role="presentation">
        <circle cx="12" cy="12" r="4.1" fill="#f0bf47"></circle>
        <g stroke="#f0bf47" stroke-linecap="round" stroke-width="1.9">
          <path d="M12 2.4v2.4"></path>
          <path d="M12 19.2v2.4"></path>
          <path d="M2.4 12h2.4"></path>
          <path d="M19.2 12h2.4"></path>
          <path d="M5.2 5.2l1.8 1.8"></path>
          <path d="M17 17l1.8 1.8"></path>
          <path d="M5.2 18.8 7 17"></path>
          <path d="M17 7l1.8-1.8"></path>
        </g>
      </svg>
    `;
  }

  if (normalizedLabel.includes("water")) {
    if (normalizedValue.includes("high")) {
      return `
        <svg viewBox="0 0 40 24" role="presentation">
          <path d="M9 3.4c2 2.6 4.2 5.3 4.2 8.3A4.2 4.2 0 1 1 4.8 11.7C4.8 8.7 7 6 9 3.4Z" fill="#5ca9df"></path>
          <path d="M20 5c1.8 2.2 3.7 4.6 3.7 7.1A3.7 3.7 0 1 1 16.3 12c0-2.5 2-4.9 3.7-7.1Z" fill="#5ca9df"></path>
          <path d="M30.6 3.8c2.1 2.7 4.4 5.5 4.4 8.6a4.4 4.4 0 1 1-8.8 0c0-3.1 2.3-5.9 4.4-8.6Z" fill="#5ca9df"></path>
        </svg>
      `;
    }

    if (normalizedValue.includes("moderate")) {
      return `
        <svg viewBox="0 0 32 24" role="presentation">
          <path d="M11 3.4c2.2 2.8 4.7 5.8 4.7 9.1A4.7 4.7 0 1 1 6.3 12.5c0-3.3 2.5-6.3 4.7-9.1Z" fill="#5ca9df"></path>
          <path d="M22 5.4c1.9 2.4 4 5 4 7.8A4 4 0 1 1 18 13.2c0-2.8 2.1-5.4 4-7.8Z" fill="#5ca9df"></path>
        </svg>
      `;
    }

    return `
      <svg viewBox="0 0 24 24" role="presentation">
        <path d="M12 3.4c2.4 3.1 5.2 6.3 5.2 9.8A5.2 5.2 0 1 1 6.8 13.2c0-3.5 2.8-6.7 5.2-9.8Z" fill="#5ca9df"></path>
      </svg>
    `;
  }

  if (normalizedLabel.includes("color")) {
    return `
      <svg viewBox="0 0 24 24" role="presentation">
        <circle cx="12" cy="12" r="7.8" fill="none" stroke="#d6dfe7" stroke-width="2.2"></circle>
        <path d="M12 4.2A7.8 7.8 0 0 1 19.8 12H12Z" fill="#f25f5c"></path>
        <path d="M19.8 12A7.8 7.8 0 0 1 12 19.8v-7.8Z" fill="#4f9a62"></path>
        <path d="M12 19.8A7.8 7.8 0 0 1 4.2 12H12Z" fill="#4a86d9"></path>
        <path d="M4.2 12A7.8 7.8 0 0 1 12 4.2V12Z" fill="#f0bf47"></path>
      </svg>
    `;
  }

  return "";
}

function getPlantColorList(colorValue) {
  return String(colorValue || "")
    .split(/[\/,|]/)
    .map((value) => value.trim())
    .filter(Boolean);
}

function plantMatchesColor(plant, selectedColor) {
  if (!selectedColor || selectedColor === "Any") {
    return true;
  }

  return getPlantColorList(plant.color).includes(selectedColor);
}

function getColorDisplayValue(colorValue) {
  const colors = getPlantColorList(colorValue);
  return colors.length > 0 ? colors.join(", ") : "Unknown";
}

function groupByCategory(items) {
  return items.reduce((groups, item) => {
    const category = item.plant.category || "Other";
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});
}

function dedupePlants() {
  const seen = new Set();
  const uniquePlants = [];

  for (const entry of PLANTS) {
    const key = `${entry.commonName}__${entry.latinName}`;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    uniquePlants.push(entry);
  }

  PLANTS.length = 0;
  PLANTS.push(...uniquePlants);
}

function normalizePlantCategories() {
  PLANTS.forEach((entry) => {
    if (entry.commonName === "Winterberry" || entry.latinName === "Ilex verticillata") {
      entry.category = "Shrub";
    }
  });
}

function plant(commonName, latinName, attributes) {
  const imageLookup = resolvePlantImage(commonName, latinName, attributes);
  const fallbackImage = createPlantImage(commonName, attributes.color, attributes.setting);

  return {
    commonName,
    latinName,
    image: imageLookup.src || fallbackImage,
    imageCandidates: imageLookup.candidates || [],
    fallbackImage,
    ...attributes
  };
}

function resolvePlantImage(name, latinName, attributes) {
  const explicitImage = attributes.image || attributes.imageUrl || attributes.photo || attributes.photoUrl;
  if (explicitImage) {
    return {
      src: explicitImage,
      candidates: []
    };
  }

  if (attributes.imagePath || attributes.photoPath || attributes.imageFile || attributes.photoFile) {
    const localSource = attributes.imagePath || attributes.photoPath || attributes.imageFile || attributes.photoFile;
    return {
      src: normalizePlantImagePath(localSource),
      candidates: []
    };
  }

  const savedImage = getStoredPlantImage(name);
  if (savedImage) {
    return {
      src: savedImage,
      candidates: []
    };
  }

  const candidates = dedupePlantImageCandidates([
    ...buildPopularPlantImageCandidates(name),
    ...buildAutoPlantImageCandidates(name, latinName)
  ]);

  if (candidates.length > 0) {
    return {
      src: candidates[0],
      candidates
    };
  }

  return {
    src: createPlantImage(name, attributes.color, attributes.setting),
    candidates: []
  };
}

function normalizePlantImagePath(path) {
  if (/^(data:|https?:\/\/|\.\/|\/)/i.test(path)) {
    return path;
  }

  return `./images/${path}`;
}

function buildPopularPlantImageCandidates(name) {
  const candidates = [];
  const localImagePath = POPULAR_PLANT_IMAGE_FILES[name] || REMOTE_MAPPED_PLANT_IMAGE_FILES[name];
  const remoteImagePath = POPULAR_PLANT_REMOTE_FILES[name];

  if (localImagePath) {
    candidates.push(normalizePlantImagePath(localImagePath));
  }

  if (remoteImagePath) {
    candidates.push(remoteImagePath);
  }

  return dedupePlantImageCandidates(candidates);
}

function buildAutoPlantImageCandidates(commonName, latinName) {
  const slugs = dedupePlantImageCandidates(
    [commonName, latinName]
      .filter(Boolean)
      .map((value) => slugifyPlantName(value))
      .filter(Boolean)
  );

  const candidates = [];
  for (const slug of slugs) {
    for (const folder of AUTO_PLANT_IMAGE_FOLDERS) {
      for (const extension of AUTO_PLANT_IMAGE_EXTENSIONS) {
        const relativePath = folder ? `${folder}/${slug}.${extension}` : `${slug}.${extension}`;
        candidates.push(normalizePlantImagePath(relativePath));
      }
    }
  }

  return dedupePlantImageCandidates(candidates);
}

function dedupePlantImageCandidates(values) {
  return Array.from(new Set((values || []).filter(Boolean)));
}

function serializePlantImageCandidates(candidates) {
  try {
    return encodeURIComponent(JSON.stringify(candidates || []));
  } catch {
    return "";
  }
}

function parsePlantImageCandidates(value) {
  if (!value) {
    return [];
  }

  try {
    return JSON.parse(decodeURIComponent(value));
  } catch {
    return [];
  }
}

function handlePlantImageError(imageElement) {
  if (!imageElement) {
    return;
  }

  const candidates = parsePlantImageCandidates(imageElement.dataset.imageCandidates || "");
  const currentIndex = Number(imageElement.dataset.imageCandidateIndex || 0);
  const nextIndex = currentIndex + 1;

  if (nextIndex < candidates.length) {
    imageElement.dataset.imageCandidateIndex = String(nextIndex);
    imageElement.src = candidates[nextIndex];
    return;
  }

  imageElement.onerror = null;
  imageElement.src = imageElement.dataset.fallback || "";
}

function getStoredPlantImage(name) {
  try {
    if (typeof window === "undefined" || !window.localStorage) {
      return "";
    }
    return window.localStorage.getItem(`${IMAGE_STORAGE_PREFIX}${slugifyPlantName(name)}`) || "";
  } catch {
    return "";
  }
}

function slugifyPlantName(name) {
  return String(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createPlantImage(name, color, setting) {
  const palette = {
    White: "#f4f5ef",
    Yellow: "#e7c83e",
    Pink: "#d773a4",
    Purple: "#8361d8",
    Blue: "#5d97d8",
    Red: "#d35d5d",
    Green: "#5ba86e"
  };

  const bloomColor = palette[color] || "#7bb17f";
  const sky = setting === "Indoor" ? "#dde8f3" : "#d9f0dc";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 420">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${sky}"/>
          <stop offset="100%" stop-color="#f9fbf6"/>
        </linearGradient>
      </defs>
      <rect width="500" height="420" rx="32" fill="url(#bg)"/>
      <ellipse cx="250" cy="360" rx="150" ry="26" fill="#cad7c8"/>
      <rect x="230" y="150" width="18" height="180" rx="10" fill="#3d7d53"/>
      <rect x="252" y="136" width="18" height="194" rx="10" fill="#2e6f48"/>
      <ellipse cx="206" cy="214" rx="34" ry="20" fill="#6eae7b" transform="rotate(-24 206 214)"/>
      <ellipse cx="290" cy="224" rx="36" ry="20" fill="#6aa876" transform="rotate(24 290 224)"/>
      <ellipse cx="210" cy="274" rx="42" ry="22" fill="#7ab987" transform="rotate(18 210 274)"/>
      <ellipse cx="302" cy="284" rx="40" ry="22" fill="#75b582" transform="rotate(-18 302 284)"/>
      <circle cx="224" cy="126" r="34" fill="${bloomColor}"/>
      <circle cx="274" cy="112" r="36" fill="${bloomColor}"/>
      <circle cx="248" cy="86" r="28" fill="#f6f2e8"/>
      <text x="250" y="390" text-anchor="middle" font-family="Segoe UI, Arial" font-size="20" fill="#49604f">${name}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
