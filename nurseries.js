const nurserySearchInput = document.getElementById("nurserySearchInput");
const nurseryRegionSelect = document.getElementById("nurseryRegionSelect");
const nurseryList = document.getElementById("nurseryList");
const nurseryCount = document.getElementById("nurseryCount");

const CANADA_POSTAL_AREA_HINTS = {
  "V5": ["burnaby", "vancouver"],
  "V6": ["vancouver", "richmond"],
  "V7": ["north vancouver", "west vancouver", "vancouver"],
  "V8": ["victoria", "saanich", "nanaimo"],
  "V9": ["nanaimo", "duncan", "campbell river"],
  "T2": ["calgary"],
  "T3": ["calgary"],
  "T4": ["red deer", "lacombe"],
  "T5": ["edmonton"],
  "T6": ["edmonton"],
  "S4": ["regina"],
  "S7": ["saskatoon"],
  "R2": ["winnipeg"],
  "R3": ["winnipeg"],
  "H1": ["montreal"],
  "H2": ["montreal"],
  "H3": ["montreal"],
  "K1": ["ottawa"],
  "M4": ["toronto"],
  "M5": ["toronto"],
  "M6": ["toronto"],
  "B3": ["halifax"],
  "E1": ["moncton"],
  "C1": ["charlottetown"],
  "A1": ["st. john's", "portugal cove", "goulds", "torbay"]
};

const NURSERIES = [
  { name: "Swansons Nursery", city: "Seattle", state: "WA", zip: "98117", region: "Northwest", website: "https://www.swansonsnursery.com", notes: "Strong ornamental and Pacific Northwest selection." },
  { name: "Portland Nursery", city: "Portland", state: "OR", zip: "97214", region: "Northwest", website: "https://www.portlandnursery.com", notes: "Large edible, native, and landscape plant inventory." },
  { name: "Molbak's Garden + Home", city: "Woodinville", state: "WA", zip: "98072", region: "Northwest", website: "https://www.molbaks.com", notes: "Popular destination nursery with houseplants and gift selection." },
  { name: "Monrovia Nursery Garden Center", city: "Azusa", state: "CA", zip: "91702", region: "Pacific Coast", website: "https://www.monrovia.com", notes: "Strong shrub and landscape brand availability." },
  { name: "Roger's Gardens", city: "Corona del Mar", state: "CA", zip: "92625", region: "Pacific Coast", website: "https://www.rogersgardens.com", notes: "Premium nursery known for design-focused plant displays." },
  { name: "Annie's Annuals & Perennials", city: "Richmond", state: "CA", zip: "94804", region: "Pacific Coast", website: "https://www.anniesannuals.com", notes: "Great source for unusual flowers and cottage-garden plants." },
  { name: "SummerWinds Nursery", city: "Phoenix", state: "AZ", zip: "85018", region: "Southwest", website: "https://www.summerwindsnursery.com", notes: "Southwest-friendly nursery with desert climate options." },
  { name: "Plant World Nursery", city: "Albuquerque", state: "NM", zip: "87109", region: "Southwest", website: "https://www.plantworld.net", notes: "Regional favorite for xeric and pollinator gardening." },
  { name: "Moon Valley Nurseries", city: "Scottsdale", state: "AZ", zip: "85260", region: "Southwest", website: "https://www.moonvalleynurseries.com", notes: "Broad tree and privacy hedge inventory." },
  { name: "High Country Gardens", city: "Santa Fe", state: "NM", zip: "87507", region: "Mountain", website: "https://www.highcountrygardens.com", notes: "Known for water-wise perennials and native plants." },
  { name: "Tagawa Gardens", city: "Centennial", state: "CO", zip: "80015", region: "Mountain", website: "https://www.tagawagardens.com", notes: "Colorado garden center with strong seasonal inventory." },
  { name: "Harlequin's Gardens", city: "Boulder", state: "CO", zip: "80304", region: "Mountain", website: "https://www.harlequinsgardens.com", notes: "Good for natives, pollinator plants, and regionally adapted choices." },
  { name: "Bachman's", city: "Minneapolis", state: "MN", zip: "55416", region: "Midwest", website: "https://www.bachmans.com", notes: "Large Midwest nursery with houseplants and floral sections." },
  { name: "Gethsemane Garden Center", city: "Chicago", state: "IL", zip: "60618", region: "Midwest", website: "https://gethsemanegardens.com", notes: "Urban nursery with quality annuals, edibles, and perennials." },
  { name: "Suburban Lawn & Garden", city: "Kansas City", state: "MO", zip: "64114", region: "Midwest", website: "https://www.suburbanlg.com", notes: "Good mix of edible, annual, and regional landscape plants." },
  { name: "Longwood Gardens Shop & Nursery Leads", city: "Kennett Square", state: "PA", zip: "19348", region: "Northeast", website: "https://longwoodgardens.org", notes: "Useful Northeast gardening destination and plant lead." },
  { name: "White Flower Farm", city: "Litchfield", state: "CT", zip: "06759", region: "Northeast", website: "https://www.whiteflowerfarm.com", notes: "Well-known perennial and flowering shrub source." },
  { name: "Logee's Plants for Home & Garden", city: "Danielson", state: "CT", zip: "06239", region: "Northeast", website: "https://www.logees.com", notes: "Excellent tropicals, citrus, and unusual indoor plants." },
  { name: "Pike Nurseries", city: "Atlanta", state: "GA", zip: "30342", region: "Southeast", website: "https://www.pikenursery.com", notes: "Major Southeast nursery chain with broad landscape inventory." },
  { name: "Green Thumb Nursery", city: "Lake Forest", state: "FL", zip: "32703", region: "Southeast", website: "https://www.greenthumb.com", notes: "Warm-climate nursery with palms and tropicals." },
  { name: "Just Fruits and Exotics", city: "Tallahassee", state: "FL", zip: "32317", region: "Southeast", website: "https://www.justfruitsandexotics.com", notes: "Fruit tree specialist with warm-climate selection." },
  { name: "Urban Forest Landscaping", city: "Burnaby", state: "BC", zip: "", region: "Canada", website: "https://www.urbanforestlandscaping.com/", notes: "Featured Burnaby garden and landscaping company serving Metro Vancouver with strata, commercial, and landscape installation services.", featured: true, badge: "Featured Garden Company" },
  { name: "VanDusen Botanical Garden Shop", city: "Vancouver", state: "BC", zip: "V6M 4H1", region: "Canada", website: "https://vandusengarden.org", notes: "Strong plant inspiration and regional gardening resources." },
  { name: "Phoenix Perennials", city: "Richmond", state: "BC", zip: "V6V 1A3", region: "Canada", website: "https://www.phoenixperennials.com", notes: "Well-known BC source for perennials and edible plants." },
  { name: "Richters Herbs", city: "Goodwood", state: "ON", zip: "L0C 1A0", region: "Canada", website: "https://www.richters.com", notes: "Large herb-focused supplier with extensive selection." },
  { name: "Sheridan Nurseries", city: "Toronto", state: "ON", zip: "M4V 1E9", region: "Canada", website: "https://www.sheridannurseries.com", notes: "Well-known Ontario nursery brand with strong landscape and seasonal inventory." },
  { name: "Plant World", city: "Toronto", state: "ON", zip: "M1V 1V6", region: "Canada", website: "https://www.plantworld.net", notes: "Large Toronto-area nursery focused on tropicals, houseplants, and ornamentals." },
  { name: "Jardin Botanix", city: "Montreal", state: "QC", zip: "H1P 1W3", region: "Canada", website: "https://www.botanix.com", notes: "Popular Montreal-area garden centre network with broad seasonal inventory." },
  { name: "Pépinière Jasmin", city: "Montreal", state: "QC", zip: "H4N 1V3", region: "Canada", website: "https://www.pepinierejasmin.com", notes: "Long-running Montreal nursery with trees, shrubs, and landscape supplies." },
  { name: "Spruce It Up Garden Centre", city: "Calgary", state: "AB", zip: "T2J 0P6", region: "Canada", website: "https://www.spruceitupgardencentre.com", notes: "Calgary garden centre with hardy prairie and mountain-friendly selections." },
  { name: "Blue Grass Nursery", city: "Calgary", state: "AB", zip: "T1X 0K1", region: "Canada", website: "https://www.bluegrassnursery.com", notes: "Large Alberta nursery known for trees, shrubs, and hardy local plants." },
  { name: "Salisbury Greenhouse", city: "Edmonton", state: "AB", zip: "T6B 2A9", region: "Canada", website: "https://www.salisburygreenhouse.com", notes: "Edmonton favourite with houseplants, annuals, and hardy prairie stock." },
  { name: "Apache Seeds", city: "Edmonton", state: "AB", zip: "T5E 2T8", region: "Canada", website: "https://www.apacheseeds.ca", notes: "Good source for seeds, veggies, and practical prairie gardening supplies." },
  { name: "Ritchie Feed & Seed", city: "Ottawa", state: "ON", zip: "K1Y 0Y1", region: "Canada", website: "https://www.ritchiefeed.com", notes: "Popular Ottawa garden and feed store with strong seed and edible-garden selection." },
  { name: "Make It Green Garden Centre", city: "Ottawa", state: "ON", zip: "K2S 1B8", region: "Canada", website: "https://www.makeitgreengardencentre.com", notes: "Ottawa-area nursery with annuals, perennials, and locally useful garden stock." },
  { name: "Shelmerdine Garden Center", city: "Winnipeg", state: "MB", zip: "R3R 3P4", region: "Canada", website: "https://www.shelmerdine.com", notes: "Major Winnipeg garden centre with strong houseplant and prairie-garden offering." },
  { name: "Lacoste Garden Centre", city: "Winnipeg", state: "MB", zip: "R3R 0C1", region: "Canada", website: "https://www.lacostegardencentre.com", notes: "Well-established Manitoba nursery with practical regional plant inventory." },
  { name: "Art Knapp Plantland", city: "Halifax", state: "NS", zip: "B3S 1B3", region: "Canada", website: "https://www.artknapphalifax.com", notes: "Halifax-area garden centre with broad Atlantic Canada selection." },
  { name: "Halifax Seed", city: "Halifax", state: "NS", zip: "B3K 4B5", region: "Canada", website: "https://www.halifaxseed.ca", notes: "Well-known Atlantic Canadian seed and garden supplier." },
  { name: "Veseys Seeds Garden Centre", city: "Charlottetown", state: "PE", zip: "C1A 7J9", region: "Canada", website: "https://www.veseys.com", notes: "Trusted Maritimes source for seeds, vegetables, and home-garden supplies." },
  { name: "GardenWorks Burnaby-Lougheed", city: "Burnaby", state: "BC", zip: "V5C 3Y6", region: "Canada", website: "https://www.gardenworks.ca", notes: "Major Lower Mainland nursery with strong ornamental and edible selection." },
  { name: "Ninety-Nine Nursery & Florist", city: "Surrey", state: "BC", zip: "V3W 3H9", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Surrey garden centre listed through Garden Centres Canada." },
  { name: "Holland Nurseries Ltd.", city: "St. John's", state: "NL", zip: "A1B 1W3", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "St. John's nursery with Atlantic Canada location coverage." },
  { name: "Swans Market Ltd", city: "Vernon", state: "BC", zip: "V1T 6M9", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Interior BC nursery and garden market listing." },
  { name: "Maple Leaf Garden Centre North Vancouver", city: "North Vancouver", state: "BC", zip: "V7P 1S3", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "North Shore garden centre for ornamental and landscape shopping." },
  { name: "Azilda Greenhouses", city: "Azilda", state: "ON", zip: "P0M 1B0", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Northern Ontario greenhouse and garden centre listing." },
  { name: "Green Spot", city: "Brandon", state: "MB", zip: "R7A 5Y1", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Brandon-area Manitoba nursery and garden centre." },
  { name: "Bickerstaffe Nurseries & Gardens", city: "Portugal Cove-St. Philip's", state: "NL", zip: "A1M 2P7", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Newfoundland nursery serving the St. John's area." },
  { name: "Oceanview Home and Garden", city: "Chester", state: "NS", zip: "B0J 1J0", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Nova Scotia nursery and home-and-garden destination." },
  { name: "Blomidon Nurseries", city: "Wolfville", state: "NS", zip: "B4P 2R2", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Annapolis Valley nursery with ornamental and landscape offerings." },
  { name: "The Briar Patch Farm & Nursery", city: "South Berwick", state: "NS", zip: "B0P 1E0", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Nova Scotia farm and nursery for regional gardeners." },
  { name: "Creekside Home and Garden", city: "Spruce Grove", state: "AB", zip: "T7X 3A7", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Alberta garden centre west of Edmonton." },
  { name: "Blue Grass Sod Farms & Nursery", city: "Red Deer County", state: "AB", zip: "T4E 1B4", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Large Alberta nursery known for sod, trees, and landscape material." },
  { name: "Windmill Garden Centre", city: "Summerland", state: "BC", zip: "V0H 1Z4", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Okanagan garden centre with seasonal stock." },
  { name: "Arrowhead Nurseries Ltd.", city: "Edmonton", state: "AB", zip: "T5Y 6J2", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Edmonton nursery with trees, shrubs, and landscape plant material." },
  { name: "Campbell River Garden Centre", city: "Campbell River", state: "BC", zip: "V9W 2C6", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Vancouver Island nursery and garden centre." },
  { name: "Glow Garden Centre", city: "Langley", state: "BC", zip: "V1M 3T6", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Langley garden centre in the Fraser Valley." },
  { name: "D&G Nursery Ltd.", city: "Abbotsford", state: "BC", zip: "V4X 1J5", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Abbotsford nursery with a broad Lower Mainland service area." },
  { name: "Dogwood Nursery & Landscaping", city: "West Kelowna", state: "BC", zip: "V4T 1P6", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Okanagan nursery with landscaping and nursery stock." },
  { name: "Wetmores Landscaping Sod & Nursery", city: "Fredericton", state: "NB", zip: "E3B 0T1", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Fredericton nursery and landscape supply source." },
  { name: "Elk Lake Garden Centre", city: "Victoria", state: "BC", zip: "V8X 3W9", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Victoria-area nursery and garden centre on Vancouver Island." },
  { name: "Klassen Landscape Supply & Nursery", city: "Abbotsford", state: "BC", zip: "V3G 2A6", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Abbotsford nursery with landscape materials and plant stock." },
  { name: "E-Tree Nurseries Ltd.", city: "Cold Lake", state: "AB", zip: "T9M 1P2", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Alberta tree nursery for prairie and boreal conditions." },
  { name: "Aubin Nurseries Ltd.", city: "Carman", state: "MB", zip: "R0G 0J0", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Manitoba nursery with prairie-friendly inventory." },
  { name: "Fraserview Nursery Ltd.", city: "Abbotsford", state: "BC", zip: "V3G 2H6", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Fraser Valley nursery with broad plant selection." },
  { name: "Wildwood Nurseries Ltd.", city: "Victoria", state: "BC", zip: "V8M 1X6", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Greater Victoria nursery and landscape plant source." },
  { name: "Green Haven Garden Centre", city: "Lethbridge", state: "AB", zip: "T1J 4P4", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Southern Alberta garden centre with hardy prairie choices." },
  { name: "Green Mountain Nursery Ltd.", city: "Abbotsford", state: "BC", zip: "V3G 2A5", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Abbotsford nursery focused on trees, shrubs, and landscape plants." },
  { name: "Green Thumb Nurseries", city: "Nanaimo", state: "BC", zip: "V9X 1J8", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Nanaimo nursery serving mid-Island gardeners." },
  { name: "Garden Shop at High Country", city: "Whistler", state: "BC", zip: "V8E 0G1", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Whistler-area garden shop for mountain gardeners." },
  { name: "Hodge River Nursery", city: "Markland", state: "NL", zip: "A0C 1S0", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Newfoundland nursery with rural and regional coverage." },
  { name: "Hope Garden Centre", city: "Hope", state: "BC", zip: "V0X 1L0", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "BC nursery serving Fraser Canyon and surrounding communities." },
  { name: "Horse Lake Garden Centre", city: "Lone Butte", state: "BC", zip: "V0K 1X3", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Cariboo-region nursery and country garden centre." },
  { name: "Amsterdam Greenhouses & Garden Centre", city: "Pitt Meadows", state: "BC", zip: "V3Y 1Z1", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Metro Vancouver area greenhouse and garden centre." },
  { name: "Blue Mountain Nursery Company", city: "Armstrong", state: "BC", zip: "V0E 1B6", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Interior BC nursery with trees and shrubs." },
  { name: "B. Dinter Nursery Ltd.", city: "Duncan", state: "BC", zip: "V9L 6K5", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Cowichan Valley nursery with ornamental and collector plants." },
  { name: "Glenlea Greenhouses", city: "Glenlea", state: "MB", zip: "R0G 0K0", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Manitoba greenhouse operation near Winnipeg." },
  { name: "Jardin Dion", city: "Sainte-Therese", state: "QC", zip: "J7E 4H4", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Quebec garden centre with ornamental and landscaping inventory." },
  { name: "Les Jardins Michel Corbeil", city: "Saint-Eustache", state: "QC", zip: "J7P 4W9", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Quebec nursery and garden centre in the Montreal region." },
  { name: "Jensen Nursery & Landscaping", city: "Oak Bluff", state: "MB", zip: "R4G 0B1", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Winnipeg-area nursery with trees, shrubs, and landscape stock." },
  { name: "Kool Breeze Farms Garden Centre", city: "Summerside", state: "PE", zip: "C1N 4J8", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Prince Edward Island garden centre and landscape source." },
  { name: "Kiwi Nurseries Ltd.", city: "Acheson", state: "AB", zip: "T7X 6C8", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Large Alberta nursery with trees and shelterbelt material." },
  { name: "Lyons Garden Centre & Landscaping", city: "Kamloops", state: "BC", zip: "V2H 1T7", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Kamloops nursery with dry-climate and landscape options." },
  { name: "Parkland Nurseries & Garden Centre", city: "Red Deer County", state: "AB", zip: "T4S 2B2", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Central Alberta nursery with a broad selection for prairie landscapes." },
  { name: "Patio Gardens", city: "Saanichton", state: "BC", zip: "V8M 1Z3", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Vancouver Island nursery with patio and ornamental plant focus." },
  { name: "Sunstar Nurseries Ltd.", city: "Edmonton", state: "AB", zip: "T6M 2N9", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Edmonton nursery with prairie-tough trees, shrubs, and perennials." },
  { name: "Tri-Star Nurseries & Landscape Supplies", city: "Surrey", state: "BC", zip: "V3S 6N4", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Surrey nursery with trees, shrubs, and landscape products." },
  { name: "Doiron's Landscaping and Garden Centre", city: "Charlottetown", state: "PE", zip: "C1E 2M6", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Charlottetown-area nursery and garden centre." },
  { name: "Pepiniere Boucher", city: "Saint-Ambroise", state: "QC", zip: "G7P 2V5", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Quebec nursery and garden centre with regional stock." },
  { name: "It's About Thyme Nursery", city: "Burnaby", state: "BC", zip: "V5B 3A2", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Metro Vancouver herb and specialty plant nursery." },
  { name: "West Coast Floral Growers & Distributors", city: "Surrey", state: "BC", zip: "V3S 9A5", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Lower Mainland grower and distributor with garden-centre listing." },
  { name: "Art Knapp Prince George", city: "Prince George", state: "BC", zip: "V2N 5R8", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Northern BC garden centre with broad local coverage." },
  { name: "Minter Country Garden", city: "Chilliwack", state: "BC", zip: "V2R 4N4", region: "Canada", website: "https://www.mintergardening.com", notes: "Large Fraser Valley destination garden centre with strong brand recognition." }
  ,{ name: "Port Kells Nurseries Ltd.", city: "Surrey", state: "BC", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Large Surrey nursery and landscape supply operation." }
  ,{ name: "Quality Garden and Pet Holdings Ltd.", city: "Gibsons", state: "BC", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Sunshine Coast garden centre and home-garden supplier." }
  ,{ name: "Richbar Nurseries", city: "Quesnel", state: "BC", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Central BC nursery with regional tree and shrub stock." }
  ,{ name: "JOYA Garden Spot", city: "Abbotsford", state: "BC", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Abbotsford garden centre with Lower Mainland reach." }
  ,{ name: "Sunshine Coast Nursery", city: "Roberts Creek", state: "BC", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Sunshine Coast nursery for ornamental and edible gardeners." }
  ,{ name: "UBC Botanical Garden Shop in the Garden", city: "Vancouver", state: "BC", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Vancouver botanical-garden shop with curated plant offerings." }
  ,{ name: "Colorful Seasons Nursery and Landscape", city: "Richmond", state: "BC", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Richmond nursery and landscape supplier." }
  ,{ name: "Cedar Rim Nursery Ltd.", city: "Langley", state: "BC", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Well-known Langley nursery with strong regional plant selection." }
  ,{ name: "W.I.G. Western Independent Greenhouses", city: "Burnaby", state: "BC", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Burnaby greenhouse and nursery listing." }
  ,{ name: "GardenWorks Penticton", city: "Penticton", state: "BC", zip: "", region: "Canada", website: "https://www.gardenworks.ca", notes: "Okanagan GardenWorks location with ornamental and edible selections." }
  ,{ name: "GardenWorks Coquitlam", city: "Coquitlam", state: "BC", zip: "", region: "Canada", website: "https://www.gardenworks.ca", notes: "Metro Vancouver GardenWorks location for broad garden shopping." }
  ,{ name: "GardenWorks Burnaby Mandeville", city: "Burnaby", state: "BC", zip: "", region: "Canada", website: "https://www.gardenworks.ca", notes: "Additional Burnaby GardenWorks location." }
  ,{ name: "GardenWorks North Vancouver", city: "North Vancouver", state: "BC", zip: "", region: "Canada", website: "https://www.gardenworks.ca", notes: "North Shore GardenWorks store for ornamental and container plants." }
  ,{ name: "GardenWorks Oak Bay", city: "Victoria", state: "BC", zip: "", region: "Canada", website: "https://www.gardenworks.ca", notes: "Victoria-area GardenWorks location." }
  ,{ name: "GardenWorks Saanich", city: "Saanich", state: "BC", zip: "", region: "Canada", website: "https://www.gardenworks.ca", notes: "Greater Victoria GardenWorks location for island gardeners." }
  ,{ name: "GardenWorks Colwood", city: "Colwood", state: "BC", zip: "", region: "Canada", website: "https://www.gardenworks.ca", notes: "Westshore GardenWorks branch." }
  ,{ name: "GardenWorks Nanaimo", city: "Nanaimo", state: "BC", zip: "", region: "Canada", website: "https://www.gardenworks.ca", notes: "Vancouver Island GardenWorks location." }
  ,{ name: "Hunters Garden Centre Vancouver", city: "Vancouver", state: "BC", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Vancouver branch of Hunters Garden Centre." }
  ,{ name: "Dajue Art Garden Centre", city: "Richmond", state: "BC", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Richmond garden centre with decorative and landscape focus." }
  ,{ name: "Bamboo World", city: "Chilliwack", state: "BC", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "BC specialty nursery focused on bamboo and unusual plants." }
  ,{ name: "Greengate Garden Centres Ltd.", city: "Calgary", state: "AB", zip: "", region: "Canada", website: "https://www.greengate.ca", notes: "Large Calgary garden centre with seasonal and landscape inventory." }
  ,{ name: "For Trees Company Ltd.", city: "Didsbury", state: "AB", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Alberta tree and nursery specialist." }
  ,{ name: "Wolf's Botanical", city: "Lacombe", state: "AB", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Central Alberta botanical and garden centre listing." }
  ,{ name: "Salisbury Greenhouse Sherwood Park", city: "Sherwood Park", state: "AB", zip: "", region: "Canada", website: "https://www.salisburygreenhouse.com", notes: "Sherwood Park Salisbury Greenhouse location." }
  ,{ name: "Classic Landscapes & Supplies", city: "Edmonton", state: "AB", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Edmonton landscape supply and nursery listing." }
  ,{ name: "Plant Ranch Inc.", city: "Regina", state: "SK", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Regina garden centre for prairie gardeners." }
  ,{ name: "Dutch Growers Garden Centre", city: "Saskatoon", state: "SK", zip: "", region: "Canada", website: "https://www.dutchgrowers.net", notes: "Major Saskatoon garden centre and greenhouse." }
  ,{ name: "Wickham Nurseryland", city: "Lloydminster", state: "SK", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Prairie nursery serving Lloydminster and area." }
  ,{ name: "Garden of Eden Greenhouse & Gifts", city: "Blumenhof", state: "SK", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Saskatchewan greenhouse and gift-oriented garden centre." }
  ,{ name: "Sherwood Greenhouse & Garden Centre", city: "Regina", state: "SK", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Regina greenhouse and garden centre." }
  ,{ name: "Wilson's Lifestyle Centre", city: "Saskatoon", state: "SK", zip: "", region: "Canada", website: "https://www.wilsonslifestyle.ca", notes: "Well-known Saskatoon lifestyle and garden centre." }
  ,{ name: "Lakeshore Tree Farms Ltd.", city: "Saskatoon", state: "SK", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Saskatoon tree farm and nursery operation." }
  ,{ name: "Prairie Originals", city: "Selkirk", state: "MB", zip: "", region: "Canada", website: "https://www.prairieoriginals.com", notes: "Strong Manitoba native and prairie plant specialist." }
  ,{ name: "Alternative Choice Garden Centre", city: "Brandon", state: "MB", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Brandon garden centre with practical local selection." }
  ,{ name: "Van Der Meere Garden Centre", city: "Ile des Chenes", state: "MB", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Manitoba nursery and garden centre serving Winnipeg region." }
  ,{ name: "Plants Plus", city: "Petersfield", state: "MB", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Manitoba nursery and garden centre north of Winnipeg." }
  ,{ name: "Secord Crowe Greenhouses", city: "Dauphin", state: "MB", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Manitoba greenhouse and garden source." }
  ,{ name: "Pépinière Rougemont", city: "Rougemont", state: "QC", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Quebec nursery with regional ornamental and fruit offerings." }
  ,{ name: "Pépinière Soleil", city: "Saint-Jean-Baptiste", state: "QC", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Quebec nursery and greenhouse listing." }
  ,{ name: "Aquaplantes", city: "St-Augustin-de-Desmaures", state: "QC", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Quebec garden centre listing near Quebec City." }
  ,{ name: "MacArthur's Nurseries Inc.", city: "Moncton", state: "NB", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Moncton nursery with broad New Brunswick reach." }
  ,{ name: "Shades of Green", city: "Saint John", state: "NB", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Saint John garden centre and nursery listing." }
  ,{ name: "A Change of Seasons Inc.", city: "Pennfield", state: "NB", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "New Brunswick nursery and seasonal garden supplier." }
  ,{ name: "Bloom Greenhouse & Garden Centre", city: "Hammonds Plains", state: "NS", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Halifax-region greenhouse and garden centre." }
  ,{ name: "Lakeland Plant World", city: "Dartmouth", state: "NS", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Dartmouth nursery and garden centre." }
  ,{ name: "Atlantic Gardens Inc.", city: "Middle Sackville", state: "NS", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Atlantic Canada garden centre near Halifax." }
  ,{ name: "VanKampens Greenhouses", city: "Charlottetown", state: "PE", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "PEI greenhouse and nursery listing." }
  ,{ name: "Nabuurs Gardens Ltd.", city: "Brudenell", state: "PE", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Prince Edward Island garden centre and nursery." }
  ,{ name: "Pat's Plants & Gardens", city: "Bay Bulls", state: "NL", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Newfoundland nursery with coastal region coverage." }
  ,{ name: "Traverse Gardens", city: "Torbay", state: "NL", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "St. John's-area nursery and garden centre." }
  ,{ name: "Rise and Shine Nursery and Garden Care", city: "Goulds", state: "NL", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Newfoundland nursery and garden care business." }
  ,{ name: "Thistle's Limited The Greenhouse", city: "Little Rapids", state: "NL", zip: "", region: "Canada", website: "https://www.gardencentrescanada.ca/locations", notes: "Western Newfoundland greenhouse and nursery listing." }
];

NURSERIES.push(...[
  { name: "Armstrong Garden Centers Anaheim Hills", city: "Anaheim", state: "CA", zip: "92807", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in the Anaheim Hills area." },
  { name: "Armstrong Garden Centers Carlsbad", city: "Carlsbad", state: "CA", zip: "92008", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in coastal North San Diego County." },
  { name: "Armstrong Garden Centers Claremont", city: "Claremont", state: "CA", zip: "91711", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in Claremont." },
  { name: "Armstrong Garden Centers Costa Mesa", city: "Costa Mesa", state: "CA", zip: "92627", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in Orange County." },
  { name: "Armstrong Garden Centers Del Mar", city: "Del Mar", state: "CA", zip: "92014", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location near Del Mar." },
  { name: "Armstrong Garden Centers El Cajon", city: "El Cajon", state: "CA", zip: "92021", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers East County San Diego location." },
  { name: "Armstrong Garden Centers Encinitas", city: "Encinitas", state: "CA", zip: "92024", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in Encinitas." },
  { name: "Armstrong Garden Centers Glendale", city: "Glendale", state: "CA", zip: "91202", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in Glendale." },
  { name: "Armstrong Garden Centers Glendora", city: "Glendora", state: "CA", zip: "91740", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in the San Gabriel Valley." },
  { name: "Armstrong Garden Centers Huntington Beach", city: "Huntington Beach", state: "CA", zip: "92647", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in Huntington Beach." },
  { name: "Armstrong Garden Centers La Canada", city: "La Canada Flintridge", state: "CA", zip: "91011", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in La Canada." },
  { name: "Armstrong Garden Centers La Habra", city: "La Habra", state: "CA", zip: "90631", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in North Orange County." },
  { name: "Armstrong Garden Centers Long Beach", city: "Long Beach", state: "CA", zip: "90804", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in Long Beach." },
  { name: "Armstrong Garden Centers Mission Valley", city: "San Diego", state: "CA", zip: "92120", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers Mission Valley store." },
  { name: "Armstrong Garden Centers Monrovia", city: "Monrovia", state: "CA", zip: "91016", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in Monrovia." },
  { name: "Armstrong Garden Centers Morena", city: "San Diego", state: "CA", zip: "92110", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers Morena Boulevard location." },
  { name: "Armstrong Garden Centers Newport Beach", city: "Newport Beach", state: "CA", zip: "92660", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in Newport Beach." },
  { name: "Armstrong Garden Centers Pasadena", city: "Pasadena", state: "CA", zip: "91106", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in Pasadena." },
  { name: "Armstrong Garden Centers Rancho Penasquitos", city: "San Diego", state: "CA", zip: "92129", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers Rancho Penasquitos location." },
  { name: "Armstrong Garden Centers San Juan Capistrano", city: "San Juan Capistrano", state: "CA", zip: "92675", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in San Juan Capistrano." },
  { name: "Armstrong Garden Centers Santa Monica", city: "Santa Monica", state: "CA", zip: "90403", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in Santa Monica." },
  { name: "Armstrong Garden Centers Sherman Oaks", city: "Sherman Oaks", state: "CA", zip: "91423", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in Sherman Oaks." },
  { name: "Armstrong Garden Centers Temecula", city: "Temecula", state: "CA", zip: "92591", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in Temecula." },
  { name: "Armstrong Garden Centers Thousand Oaks", city: "Thousand Oaks", state: "CA", zip: "91360", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in Thousand Oaks." },
  { name: "Armstrong Garden Centers Torrance", city: "Torrance", state: "CA", zip: "90505", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers South Bay location." },
  { name: "Armstrong Garden Centers Tustin", city: "Tustin", state: "CA", zip: "92780", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers location in Tustin." },
  { name: "Armstrong Garden Centers Westchester", city: "Los Angeles", state: "CA", zip: "90045", region: "Pacific Coast", website: "https://www.armstronggarden.com/locations", notes: "Official Armstrong Garden Centers Westchester location near LAX." }
]);

NURSERIES.push(...[
  { name: "Pike Nurseries Acworth", city: "Acworth", state: "GA", zip: "30101", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries store in Acworth." },
  { name: "Pike Nurseries Towne Lake", city: "Woodstock", state: "GA", zip: "30189", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries store in Towne Lake/Woodstock." },
  { name: "Pike Nurseries West Cobb", city: "Marietta", state: "GA", zip: "30064", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries West Cobb location." },
  { name: "Pike Nurseries Marietta", city: "Marietta", state: "GA", zip: "30062", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries store on Roswell Road in Marietta." },
  { name: "Pike Nurseries Ballantyne", city: "Charlotte", state: "NC", zip: "28277", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries Ballantyne location in south Charlotte." },
  { name: "Pike Nurseries Buckhead", city: "Atlanta", state: "GA", zip: "30342", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries Buckhead location in Atlanta." },
  { name: "Pike Nurseries Cumming", city: "Cumming", state: "GA", zip: "30040", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries location in Cumming." },
  { name: "Pike Nurseries East Cobb", city: "Marietta", state: "GA", zip: "30062", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries East Cobb location." },
  { name: "Pike Nurseries Highland Creek", city: "Charlotte", state: "NC", zip: "28269", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries Highland Creek location in north Charlotte." },
  { name: "Pike Nurseries Holcomb Bridge", city: "Alpharetta", state: "GA", zip: "30022", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries Holcomb Bridge store." },
  { name: "Pike Nurseries Johns Creek", city: "Alpharetta", state: "GA", zip: "30022", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries Johns Creek location." },
  { name: "Pike Nurseries Lake Norman", city: "Cornelius", state: "NC", zip: "28031", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries Lake Norman location." },
  { name: "Pike Nurseries Lindbergh", city: "Atlanta", state: "GA", zip: "30324", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries Lindbergh location in Atlanta." },
  { name: "Pike Nurseries Matthews", city: "Matthews", state: "NC", zip: "28105", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries location in Matthews." },
  { name: "Pike Nurseries Milton", city: "Milton", state: "GA", zip: "30004", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries store in Milton." },
  { name: "Pike Nurseries Peachtree City", city: "Peachtree City", state: "GA", zip: "30269", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries location in Peachtree City." },
  { name: "Pike Nurseries Roswell", city: "Roswell", state: "GA", zip: "30075", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries Roswell location." },
  { name: "Pike Nurseries Suwanee", city: "Suwanee", state: "GA", zip: "30024", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries location in Suwanee." },
  { name: "Pike Nurseries Toco Hills", city: "Atlanta", state: "GA", zip: "30329", region: "Southeast", website: "https://www.pikenursery.com/locations", notes: "Official Pike Nurseries Toco Hills location." }
]);

NURSERIES.push(...[
  { name: "SummerWinds Nursery Glendale", city: "Glendale", state: "AZ", zip: "85308", region: "Southwest", website: "https://www.summerwindsnursery.com/locations/", notes: "Official SummerWinds Nursery location in Glendale." },
  { name: "SummerWinds Nursery Mesa", city: "Mesa", state: "AZ", zip: "85210", region: "Southwest", website: "https://www.summerwindsnursery.com/locations/", notes: "Official SummerWinds Nursery location in Mesa." },
  { name: "SummerWinds Nursery Campbell", city: "Campbell", state: "CA", zip: "95008", region: "Pacific Coast", website: "https://www.summerwindsnursery.com/locations/", notes: "Official SummerWinds Nursery location in Campbell." },
  { name: "SummerWinds Nursery Cupertino", city: "Cupertino", state: "CA", zip: "95014", region: "Pacific Coast", website: "https://www.summerwindsnursery.com/locations/", notes: "Official SummerWinds Nursery location in Cupertino." },
  { name: "SummerWinds Nursery Dublin", city: "Dublin", state: "CA", zip: "94568", region: "Pacific Coast", website: "https://www.summerwindsnursery.com/locations/", notes: "Official SummerWinds Nursery location in Dublin." },
  { name: "SummerWinds Nursery Novato", city: "Novato", state: "CA", zip: "94947", region: "Pacific Coast", website: "https://www.summerwindsnursery.com/locations/", notes: "Official SummerWinds Nursery location in Novato." },
  { name: "SummerWinds Nursery Palo Alto", city: "Palo Alto", state: "CA", zip: "94303", region: "Pacific Coast", website: "https://www.summerwindsnursery.com/locations/", notes: "Official SummerWinds Nursery location in Palo Alto." }
]);

NURSERIES.push(...[
  { name: "Calloway's Nursery Arlington North", city: "Arlington", state: "TX", zip: "76011", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery location in north Arlington." },
  { name: "Calloway's Nursery Arlington South", city: "Arlington", state: "TX", zip: "76017", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery location in south Arlington." },
  { name: "Calloway's Nursery Cedar Park", city: "Cedar Park", state: "TX", zip: "78613", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery location in Cedar Park." },
  { name: "Calloway's Nursery Dallas Greenville Ave", city: "Dallas", state: "TX", zip: "75231", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery Greenville Avenue location in Dallas." },
  { name: "Calloway's Nursery Dallas Lemmon Ave", city: "Dallas", state: "TX", zip: "75209", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery Lemmon Avenue location in Dallas." },
  { name: "Calloway's Nursery Denton", city: "Denton", state: "TX", zip: "76205", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery location in Denton." },
  { name: "Calloway's Nursery Flower Mound", city: "Flower Mound", state: "TX", zip: "75022", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery location in Flower Mound." },
  { name: "Calloway's Nursery Fort Worth", city: "Fort Worth", state: "TX", zip: "76109", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery location in Fort Worth." },
  { name: "Calloway's Nursery Fort Worth North", city: "Fort Worth", state: "TX", zip: "76244", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery north Fort Worth location." },
  { name: "Calloway's Nursery Hebron", city: "Hebron", state: "TX", zip: "75010", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery location in Hebron." },
  { name: "Calloway's Nursery Hurst", city: "Hurst", state: "TX", zip: "76054", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery location in Hurst." },
  { name: "Calloway's Nursery Lewisville", city: "Lewisville", state: "TX", zip: "75067", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery location in Lewisville." },
  { name: "Calloway's Nursery Little Elm", city: "Little Elm", state: "TX", zip: "75068", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery location in Little Elm." },
  { name: "Calloway's Nursery Mansfield", city: "Mansfield", state: "TX", zip: "76063", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery location in Mansfield." },
  { name: "Calloway's Nursery McKinney", city: "McKinney", state: "TX", zip: "75070", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery location in McKinney." },
  { name: "Calloway's Nursery Mesquite", city: "Mesquite", state: "TX", zip: "75150", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery location in Mesquite." },
  { name: "Calloway's Nursery Plano", city: "Plano", state: "TX", zip: "75075", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery Plano location." },
  { name: "Calloway's Nursery Plano North", city: "Plano", state: "TX", zip: "75025", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery north Plano location." },
  { name: "Calloway's Nursery Plano Preston Road", city: "Plano", state: "TX", zip: "75093", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery Preston Road location." },
  { name: "Calloway's Nursery Prosper", city: "Prosper", state: "TX", zip: "75078", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery location in Prosper." },
  { name: "Calloway's Nursery Richardson", city: "Richardson", state: "TX", zip: "75082", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery location in Richardson." },
  { name: "Calloway's Nursery Southlake", city: "Southlake", state: "TX", zip: "76092", region: "Southwest", website: "https://www.calloways.com/locations/garden-centers/", notes: "Official Calloway's Nursery location in Southlake." }
]);

NURSERIES.push(...[
  { name: "McDonald Garden Center Great Neck", city: "Virginia Beach", state: "VA", zip: "23454", region: "Southeast", website: "https://mcdonaldgardencenter.com/locations/", notes: "Official McDonald Garden Center year-round Great Neck store." },
  { name: "McDonald Garden Center Independence Boulevard", city: "Virginia Beach", state: "VA", zip: "23455", region: "Southeast", website: "https://mcdonaldgardencenter.com/locations/", notes: "Official McDonald Garden Center year-round Independence Boulevard store." },
  { name: "McDonald Garden Market Colony Square", city: "Williamsburg", state: "VA", zip: "23185", region: "Southeast", website: "https://mcdonaldgardencenter.com/locations/", notes: "Official seasonal McDonald Garden Market in Williamsburg." },
  { name: "McDonald Garden Market Heritage", city: "Yorktown", state: "VA", zip: "23692", region: "Southeast", website: "https://mcdonaldgardencenter.com/locations/", notes: "Official seasonal McDonald Garden Market in Yorktown." },
  { name: "McDonald Garden Market News", city: "Williamsburg", state: "VA", zip: "23188", region: "Southeast", website: "https://mcdonaldgardencenter.com/locations/", notes: "Official seasonal McDonald Garden Market on News Road." },
  { name: "McDonald Garden Market Norge", city: "Williamsburg", state: "VA", zip: "23188", region: "Southeast", website: "https://mcdonaldgardencenter.com/locations/", notes: "Official seasonal McDonald Garden Market in Norge." },
  { name: "McDonald Garden Market Poquoson", city: "Poquoson", state: "VA", zip: "23662", region: "Southeast", website: "https://mcdonaldgardencenter.com/locations/", notes: "Official seasonal McDonald Garden Market in Poquoson." },
  { name: "McDonald Garden Market York Square", city: "Yorktown", state: "VA", zip: "23692", region: "Southeast", website: "https://mcdonaldgardencenter.com/locations/", notes: "Official seasonal McDonald Garden Market in York Square." },
  { name: "McDonald Garden Market Bennett's Creek", city: "Suffolk", state: "VA", zip: "23435", region: "Southeast", website: "https://mcdonaldgardencenter.com/locations/", notes: "Official seasonal McDonald Garden Market in Suffolk." },
  { name: "McDonald Garden Market East Beach", city: "Norfolk", state: "VA", zip: "23518", region: "Southeast", website: "https://mcdonaldgardencenter.com/locations/", notes: "Official seasonal McDonald Garden Market in Norfolk." },
  { name: "McDonald Garden Market Great Bridge", city: "Chesapeake", state: "VA", zip: "23322", region: "Southeast", website: "https://mcdonaldgardencenter.com/locations/", notes: "Official seasonal McDonald Garden Market in Chesapeake." },
  { name: "McDonald Garden Market Hilltop", city: "Virginia Beach", state: "VA", zip: "23451", region: "Southeast", website: "https://mcdonaldgardencenter.com/locations/", notes: "Official seasonal McDonald Garden Market in Hilltop." },
  { name: "McDonald Garden Market Larkspur", city: "Virginia Beach", state: "VA", zip: "23462", region: "Southeast", website: "https://mcdonaldgardencenter.com/locations/", notes: "Official seasonal McDonald Garden Market in Larkspur." },
  { name: "McDonald Garden Market Red Mill", city: "Virginia Beach", state: "VA", zip: "23456", region: "Southeast", website: "https://mcdonaldgardencenter.com/locations/", notes: "Official seasonal McDonald Garden Market in Red Mill." },
  { name: "English Gardens Clinton Township", city: "Clinton Township", state: "MI", zip: "48038", region: "Midwest", website: "https://www.englishgardens.com/locations-2/", notes: "Official English Gardens location in Clinton Township." },
  { name: "English Gardens Dearborn Heights", city: "Dearborn Heights", state: "MI", zip: "48127", region: "Midwest", website: "https://www.englishgardens.com/locations-2/", notes: "Official English Gardens location in Dearborn Heights." },
  { name: "English Gardens Plymouth Ann Arbor", city: "Plymouth", state: "MI", zip: "48170", region: "Midwest", website: "https://www.englishgardens.com/locations-2/", notes: "Official English Gardens location serving Plymouth and Ann Arbor." },
  { name: "English Gardens Eastpointe", city: "Eastpointe", state: "MI", zip: "48021", region: "Midwest", website: "https://www.englishgardens.com/locations-2/", notes: "Official English Gardens location in Eastpointe." },
  { name: "English Gardens Royal Oak", city: "Royal Oak", state: "MI", zip: "48073", region: "Midwest", website: "https://www.englishgardens.com/locations-2/", notes: "Official English Gardens location in Royal Oak." },
  { name: "English Gardens West Bloomfield", city: "West Bloomfield", state: "MI", zip: "48322", region: "Midwest", website: "https://www.englishgardens.com/locations-2/", notes: "Official English Gardens location in West Bloomfield." },
  { name: "Homestead Gardens Davidsonville", city: "Davidsonville", state: "MD", zip: "21035", region: "Northeast", website: "https://homesteadgardens.com/directions/", notes: "Official Homestead Gardens flagship location in Davidsonville." },
  { name: "Homestead Gardens Severna Park", city: "Severna Park", state: "MD", zip: "21146", region: "Northeast", website: "https://homesteadgardens.com/directions/", notes: "Official Homestead Gardens location in Severna Park." },
  { name: "Homestead Gardens Smyrna", city: "Smyrna", state: "DE", zip: "19977", region: "Northeast", website: "https://homesteadgardens.com/directions/", notes: "Official Homestead Gardens retail location in Smyrna." },
  { name: "Moana Nursery Moana Lane", city: "Reno", state: "NV", zip: "", region: "Southwest", website: "https://www.moananursery.com/contact-us/", notes: "Official Moana Nursery Moana Lane location in Reno." },
  { name: "Moana Nursery South Virginia Street", city: "Reno", state: "NV", zip: "", region: "Southwest", website: "https://www.moananursery.com/contact-us/", notes: "Official Moana Nursery South Reno location." },
  { name: "Moana Nursery Pyramid Way", city: "Sparks", state: "NV", zip: "", region: "Southwest", website: "https://www.moananursery.com/contact-us/", notes: "Official Moana Nursery location in Sparks." },
  { name: "Moon Valley Nurseries Peachtree City", city: "Peachtree City", state: "GA", zip: "30269", region: "Southeast", website: "https://www.moonvalleynurseries.com/locations", notes: "Official Moon Valley Nurseries location in Peachtree City." },
  { name: "Moon Valley Nurseries El Cajon", city: "El Cajon", state: "CA", zip: "92021", region: "Pacific Coast", website: "https://www.moonvalleynurseries.com/locations", notes: "Official Moon Valley Nurseries Blossom Valley location in El Cajon." }
]);

NURSERIES.push(...[
  { name: "Sloat Garden Center San Francisco 3rd Avenue", city: "San Francisco", state: "CA", zip: "94118", region: "Pacific Coast", website: "https://sloatgardens.com/about-us/locations/", notes: "Official Sloat Garden Center location on 3rd Avenue in San Francisco." },
  { name: "Sloat Garden Center San Francisco Sloat Boulevard", city: "San Francisco", state: "CA", zip: "94116", region: "Pacific Coast", website: "https://sloatgardens.com/about-us/locations/", notes: "Official flagship Sloat Garden Center location on Sloat Boulevard." },
  { name: "Sloat Garden Center San Francisco Pierce Street", city: "San Francisco", state: "CA", zip: "94123", region: "Pacific Coast", website: "https://sloatgardens.com/about-us/locations/", notes: "Official Sloat Garden Center location on Pierce Street in San Francisco." },
  { name: "Sloat Garden Center Kentfield", city: "Kentfield", state: "CA", zip: "94904", region: "Pacific Coast", website: "https://sloatgardens.com/about-us/locations/", notes: "Official Sloat Garden Center location in Kentfield." },
  { name: "Sloat Garden Center Mill Valley E. Blithedale", city: "Mill Valley", state: "CA", zip: "94941", region: "Pacific Coast", website: "https://sloatgardens.com/about-us/locations/", notes: "Official Sloat Garden Center location on East Blithedale Avenue." },
  { name: "Sloat Garden Center Mill Valley Miller Avenue", city: "Mill Valley", state: "CA", zip: "94941", region: "Pacific Coast", website: "https://sloatgardens.com/about-us/locations/", notes: "Official Sloat Garden Center location on Miller Avenue." },
  { name: "Sloat Garden Center Novato", city: "Novato", state: "CA", zip: "94947", region: "Pacific Coast", website: "https://sloatgardens.com/about-us/locations/", notes: "Official Sloat Garden Center location in Novato." },
  { name: "Sloat Garden Center Concord", city: "Concord", state: "CA", zip: "94521", region: "Pacific Coast", website: "https://sloatgardens.com/about-us/locations/", notes: "Official Sloat Garden Center location in Concord." },
  { name: "Sloat Garden Center Danville Camino Ramon", city: "Danville", state: "CA", zip: "94526", region: "Pacific Coast", website: "https://sloatgardens.com/about-us/locations/", notes: "Official Sloat Garden Center retail location on Camino Ramon." },
  { name: "Sloat Garden Center Danville Diablo Road", city: "Danville", state: "CA", zip: "94526", region: "Pacific Coast", website: "https://sloatgardens.com/about-us/locations/", notes: "Official Sloat Garden Center Danville location listed on the locations page." },
  { name: "Sloat Garden Center Martinez", city: "Martinez", state: "CA", zip: "94553", region: "Pacific Coast", website: "https://sloatgardens.com/about-us/locations/", notes: "Official Sloat Garden Center location in Martinez." },
  { name: "Sloat Garden Center Pleasant Hill", city: "Pleasant Hill", state: "CA", zip: "94523", region: "Pacific Coast", website: "https://sloatgardens.com/about-us/locations/", notes: "Official Sloat Garden Center location in Pleasant Hill." },
  { name: "Sloat Garden Center Petaluma", city: "Petaluma", state: "CA", zip: "94952", region: "Pacific Coast", website: "https://sloatgardens.com/about-us/locations/", notes: "Official Sloat Garden Center location in Petaluma." },

  { name: "Green Thumb Nursery Lake Forest", city: "Lake Forest", state: "CA", zip: "92630", region: "Pacific Coast", website: "https://www.greenthumb.com/contact-us/", notes: "Official Green Thumb Nursery location in Lake Forest." },
  { name: "Green Thumb Nursery Ventura", city: "Ventura", state: "CA", zip: "93003", region: "Pacific Coast", website: "https://www.greenthumb.com/contact-us/", notes: "Official Green Thumb Nursery location in Ventura." },
  { name: "Green Thumb Nursery Canoga Park", city: "Canoga Park", state: "CA", zip: "91303", region: "Pacific Coast", website: "https://www.greenthumb.com/contact-us/", notes: "Official Green Thumb Nursery location in Canoga Park." },
  { name: "Green Thumb Nursery Santa Clarita", city: "Santa Clarita", state: "CA", zip: "91321", region: "Pacific Coast", website: "https://www.greenthumb.com/contact-us/", notes: "Official Green Thumb Nursery location in Santa Clarita." },
  { name: "Green Thumb Nursery San Marcos", city: "San Marcos", state: "CA", zip: "92078", region: "Pacific Coast", website: "https://www.greenthumb.com/contact-us/", notes: "Official Green Thumb Nursery location in San Marcos." },

  { name: "Al's Garden & Home Woodburn", city: "Woodburn", state: "OR", zip: "97071", region: "Northwest", website: "https://als-gardencenter.com/pages/als-garden-and-home-locations", notes: "Official Al's Garden & Home location in Woodburn." },
  { name: "Al's Garden & Home Sherwood", city: "Sherwood", state: "OR", zip: "97140", region: "Northwest", website: "https://als-gardencenter.com/pages/als-garden-and-home-locations", notes: "Official Al's Garden & Home location in Sherwood." },
  { name: "Al's Garden & Home Gresham", city: "Gresham", state: "OR", zip: "97080", region: "Northwest", website: "https://als-gardencenter.com/pages/als-garden-and-home-locations", notes: "Official Al's Garden & Home location in Gresham." },
  { name: "Al's Garden & Home Wilsonville", city: "Wilsonville", state: "OR", zip: "97070", region: "Northwest", website: "https://als-gardencenter.com/pages/als-garden-and-home-locations", notes: "Official Al's Garden & Home location in Wilsonville." },

  { name: "Portland Nursery Stark", city: "Portland", state: "OR", zip: "97215", region: "Northwest", website: "https://www.portlandnursery.com/about/locations", notes: "Official Portland Nursery Stark Street location." },
  { name: "Portland Nursery Division", city: "Portland", state: "OR", zip: "97266", region: "Northwest", website: "https://www.portlandnursery.com/about/locations", notes: "Official Portland Nursery Division Street location." },

  { name: "Sky Nursery", city: "Shoreline", state: "WA", zip: "", region: "Northwest", website: "https://www.skynursery.com/", notes: "Official Sky Nursery location serving North Seattle and Shoreline." }
]);

NURSERIES.push(...[
  { name: "Flower World", city: "Snohomish", state: "WA", zip: "98296", region: "Northwest", website: "https://www.flowerworldusa.com/contact.aspx", notes: "Large official retail nursery in Snohomish County serving the Seattle metro." },
  { name: "Walter Andersen Nursery San Diego", city: "San Diego", state: "CA", zip: "92110", region: "Pacific Coast", website: "https://www.walterandersen.com/locations/", notes: "Official Walter Andersen Nursery San Diego location." },
  { name: "Walter Andersen Nursery Poway", city: "Poway", state: "CA", zip: "92064", region: "Pacific Coast", website: "https://www.walterandersen.com/locations/", notes: "Official Walter Andersen Nursery location in Poway." },
  { name: "City Farmers Nursery", city: "San Diego", state: "CA", zip: "", region: "Pacific Coast", website: "https://www.cityfarmersnursery.com/", notes: "Independent San Diego nursery known for broad local plant and garden selection." },
  { name: "Hashimoto Nursery", city: "Los Angeles", state: "CA", zip: "90025", region: "Pacific Coast", website: "https://www.hashimotonursery.com/", notes: "Long-running West Los Angeles nursery serving the westside." },
  { name: "Flora Grubb Gardens San Francisco", city: "San Francisco", state: "CA", zip: "94124", region: "Pacific Coast", website: "https://www.floragrubb.com/visit-san-francisco", notes: "Official Flora Grubb Gardens San Francisco store." },
  { name: "Flora Grubb Gardens Los Angeles", city: "Marina del Rey", state: "CA", zip: "90292", region: "Pacific Coast", website: "https://www.floragrubb.com/visit-los-angeles", notes: "Official Flora Grubb Gardens Los Angeles area store in Marina del Rey." },
  { name: "Annie's Annuals Nursery", city: "Richmond", state: "CA", zip: "94801", region: "Pacific Coast", website: "https://www.anniesannuals.com/contact-us.html", notes: "Official Annie's Annuals retail nursery in Richmond." },
  { name: "Alden Lane Nursery", city: "Livermore", state: "CA", zip: "94550", region: "Pacific Coast", website: "https://www.aldenlane.com/directions", notes: "Long-running Livermore nursery serving the East Bay and Tri-Valley." },
  { name: "Emigh Ace Hardware Sacramento Garden Center", city: "Sacramento", state: "CA", zip: "95821", region: "Pacific Coast", website: "https://www.emigh.com/lawn-and-garden", notes: "Sacramento garden and nursery destination with lawn and garden inventory." },
  { name: "Emigh Ace Hardware El Dorado Hills Garden Center", city: "El Dorado Hills", state: "CA", zip: "95762", region: "Pacific Coast", website: "https://www.emigh.com/lawn-and-garden", notes: "El Dorado Hills garden-center location listed on Emigh's official site." }
]);

NURSERIES.push(...[
  { name: "Swansons Nursery", city: "Seattle", state: "WA", zip: "98117", region: "Northwest", website: "https://www.swansonsnursery.com/hours-directions-contact-information", notes: "Long-running Seattle nursery in Ballard with broad outdoor and indoor plant selection." },
  { name: "Urban Earth Nursery", city: "Seattle", state: "WA", zip: "98103", region: "Northwest", website: "https://www.urbanearthnursery.com/", notes: "Seattle Fremont nursery with indoor-outdoor plants and garden services." },
  { name: "Dennis' 7 Dees Cedar Hills Garden Center", city: "Portland", state: "OR", zip: "97225", region: "Northwest", website: "https://dennis7dees.com/retail-locations-hours/", notes: "Official Dennis' 7 Dees Cedar Hills garden center in southwest Portland." },
  { name: "Dennis' 7 Dees Lake Oswego Garden Center", city: "Lake Oswego", state: "OR", zip: "97034", region: "Northwest", website: "https://dennis7dees.com/retail-locations-hours/", notes: "Official Dennis' 7 Dees garden center in Lake Oswego." },
  { name: "Dennis' 7 Dees Bridgeport Village Plant Shop", city: "Tigard", state: "OR", zip: "97224", region: "Northwest", website: "https://dennis7dees.com/retail-locations-hours/", notes: "Official Dennis' 7 Dees retail plant shop at Bridgeport Village." },
  { name: "Dennis' 7 Dees Vancouver Garden Center", city: "Vancouver", state: "WA", zip: "98664", region: "Northwest", website: "https://dennis7dees.com/retail-locations-hours/", notes: "Official Dennis' 7 Dees Vancouver, Washington garden center serving the Portland metro." },
  { name: "Cornell Farm", city: "Portland", state: "OR", zip: "97225", region: "Northwest", website: "https://cornellfarms.com/pages/nursery", notes: "Portland nursery and garden center in the West Hills with broad plant inventory." },
  { name: "One Green World", city: "Portland", state: "OR", zip: "97236", region: "Northwest", website: "https://onegreenworld.com/contact/", notes: "Portland edible-plant specialist known for fruit, nut, and unusual food plants." }
]);

initializeNurseryPage();

function initializeNurseryPage() {
  if (!nurseryList || !nurseryRegionSelect || !nurserySearchInput) {
    return;
  }

  nurserySearchInput.addEventListener("input", renderNurseries);
  nurseryRegionSelect.addEventListener("change", renderNurseries);
  renderNurseries();
}

function renderNurseries() {
  const query = nurserySearchInput.value.trim().toLowerCase();
  const compactQuery = normalizePostalText(query);
  const extraTerms = getPostalAreaTerms(query);
  const region = nurseryRegionSelect.value;

  const filtered = NURSERIES.filter((nursery) => {
    const matchesRegion = region === "All" || nursery.region === region;
    const haystack = `${nursery.name} ${nursery.city} ${nursery.state} ${nursery.zip} ${nursery.region} ${nursery.notes || ""}`.toLowerCase();
    const compactHaystack = normalizePostalText(haystack);
    const matchesAreaTerms = extraTerms.some((term) => haystack.includes(term));
    const matchesQuery = !query || haystack.includes(query) || compactHaystack.includes(compactQuery) || matchesAreaTerms;
    return matchesRegion && matchesQuery;
  })
    .map((nursery, index) => ({ nursery, index }))
    .sort((left, right) => {
      const featuredDiff = Number(Boolean(right.nursery.featured)) - Number(Boolean(left.nursery.featured));
      return featuredDiff || left.index - right.index;
    })
    .map(({ nursery }) => nursery);

  if (nurseryCount) {
    nurseryCount.textContent = `${filtered.length} nurseries`;
  }

  if (filtered.length === 0) {
    nurseryList.innerHTML = `
      <article class="empty-state">
        No nurseries matched that search. Try a broader city, ZIP code, or region.
      </article>
    `;
    return;
  }

  nurseryList.innerHTML = filtered.map((nursery) => `
    <article class="nursery-card${nursery.featured ? " nursery-card-featured" : ""}">
      <div class="nursery-card-top">
        <div>
          <h3>${nursery.name}</h3>
          <p class="latin-name">${formatNurseryLocation(nursery)}</p>
        </div>
        <div class="nursery-tag-row">
          ${nursery.featured ? `<span class="tag featured-tag">${nursery.badge || "Featured"}</span>` : ""}
          <span class="tag"><strong>Region:</strong> ${nursery.region}</span>
        </div>
      </div>
      <p class="summary-copy">${nursery.notes}</p>
      <div class="nursery-link-row">
        <a class="buy-button" href="${nursery.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
      </div>
    </article>
  `).join("");
}

function normalizePostalText(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, "");
}

function getPostalAreaTerms(query) {
  const compact = normalizePostalText(query).toUpperCase();
  if (!/^[A-Z]\d[A-Z]/.test(compact)) {
    return [];
  }

  const fsa2 = compact.slice(0, 2);
  const fsa3 = compact.slice(0, 3);
  const hints = CANADA_POSTAL_AREA_HINTS[fsa3] || CANADA_POSTAL_AREA_HINTS[fsa2] || [];
  return hints;
}

function formatNurseryLocation(nursery) {
  const cityState = [nursery.city, nursery.state].filter(Boolean).join(", ");
  return [cityState, nursery.zip].filter(Boolean).join(" ");
}
