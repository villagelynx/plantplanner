const GARDENING_PLANT_GUIDES = [
  {
    commonName: "Lavender",
    slug: "lavender",
    summary: "A fragrant perennial for sunny, dry, pollinator-friendly planting.",
    planting: [
      "Plant nursery starts in spring after frost danger passes.",
      "Use full sun and very fast-draining soil; space plants 18 to 24 inches apart.",
      "In containers, use a gritty mix and avoid heavy mulch at the crown."
    ],
    maintenance: [
      "Water regularly in the first season, then let soil dry slightly between deep soakings.",
      "Feed lightly or not at all to keep growth compact and fragrant.",
      "Keep crowns dry and avoid damp, crowded planting."
    ],
    pruning: [
      "Trim lightly after bloom to keep the mound tidy.",
      "In spring, cut back soft growth but avoid old woody stems with no green buds.",
      "Remove winter-damaged tips once new growth appears."
    ],
    winterizing: [
      "Good drainage is the main protection against winter loss.",
      "Use a light gravel mulch instead of thick wet mulch.",
      "Protect containers from repeated freeze-thaw cycles."
    ]
  },
  {
    commonName: "Hydrangea",
    slug: "hydrangea",
    summary: "A moisture-loving flowering shrub grown for large summer blooms and foundation color.",
    planting: [
      "Plant in spring or early fall in rich soil amended with compost.",
      "Choose morning sun with afternoon shade in hotter climates.",
      "Space generously so mature shrubs have airflow and room to bloom."
    ],
    maintenance: [
      "Keep soil evenly moist, especially in summer.",
      "Mulch the root zone to hold moisture and moderate temperature swings.",
      "Use compost or a balanced shrub fertilizer in spring."
    ],
    pruning: [
      "Pruning depends on type, but most hydrangeas need only light shaping and dead wood removal.",
      "Avoid heavy fall pruning because flower buds may already be set.",
      "Thin weak or crossing stems to improve airflow."
    ],
    winterizing: [
      "Water deeply before the ground freezes.",
      "Mulch the root zone but keep stems clear at the base.",
      "In colder areas, protect tender buds on bigleaf types if bloom is important."
    ]
  },
  {
    commonName: "Rosemary",
    slug: "rosemary",
    summary: "A woody culinary herb that thrives in bright sun and sharp drainage.",
    planting: [
      "Plant nursery starts once spring weather is consistently warm.",
      "Choose full sun and sandy or sharply drained soil.",
      "Use raised beds or containers if your ground stays wet."
    ],
    maintenance: [
      "Water regularly while young, then shift to deeper, less frequent watering.",
      "Avoid heavy fertilizer because soft growth is weaker and less flavorful.",
      "Harvest often to keep plants dense."
    ],
    pruning: [
      "Trim lightly after flowering or after active spring growth.",
      "Do not cut deeply into old bare wood.",
      "Remove dead or frost-burned stems when growth restarts."
    ],
    winterizing: [
      "Dry roots in winter are safer than wet ones.",
      "Shelter potted plants in colder zones.",
      "Use only a light mulch and keep it off the crown."
    ]
  },
  {
    commonName: "Coneflower",
    slug: "coneflower",
    summary: "A tough prairie perennial valued for pollinators, summer bloom, and easy care.",
    planting: [
      "Plant in spring or early fall in full sun and good drainage.",
      "Space plants 18 to 24 inches apart.",
      "Transplants establish faster than direct seeding."
    ],
    maintenance: [
      "Water young plants regularly, then only during prolonged drought.",
      "Do not overfeed; average soil is usually enough.",
      "Leave some seed heads if you want bird interest."
    ],
    pruning: [
      "Deadhead for a tidier look and more bloom.",
      "Leave some stems standing through fall if desired.",
      "Cut old stems to the ground in late winter or early spring."
    ],
    winterizing: [
      "Established plants are very hardy and need little extra care.",
      "Use a light mulch in colder regions.",
      "Keep the crown from staying wet through winter."
    ]
  },
  {
    commonName: "Hosta",
    slug: "hosta",
    summary: "A shade-garden perennial grown for lush foliage and dependable low-maintenance coverage.",
    planting: [
      "Plant in spring or early fall in part shade to shade.",
      "Use rich, moisture-retentive soil and set the crown level with the surface.",
      "Space by mature leaf spread rather than starter pot size."
    ],
    maintenance: [
      "Keep soil evenly moist, especially in brighter exposures.",
      "Top-dress with compost in spring.",
      "Watch for slug and snail damage in damp weather."
    ],
    pruning: [
      "Remove damaged leaves through the season.",
      "Cut foliage back after frost if you want a cleaner bed.",
      "Divide large clumps in spring when plants become crowded."
    ],
    winterizing: [
      "A light mulch helps moderate root temperature.",
      "Clear away collapsed foliage after frost if pests are a problem.",
      "Protect container hostas because roots freeze faster in pots."
    ]
  },
  {
    commonName: "Japanese Maple",
    slug: "japanese-maple",
    summary: "A refined ornamental tree prized for layered form and seasonal foliage color.",
    planting: [
      "Plant in spring or early fall in sheltered, well-drained soil.",
      "Morning sun and protection from harsh afternoon heat is best in warm regions.",
      "Mulch broadly to protect shallow roots."
    ],
    maintenance: [
      "Water deeply during establishment and summer dry spells.",
      "Feed lightly with compost rather than strong fertilizer.",
      "Protect trunks from mower or string trimmer damage."
    ],
    pruning: [
      "Prune only for structure, dead wood, or crossing branches.",
      "Make small selective cuts to preserve the natural form.",
      "Avoid aggressive spring pruning during heavy sap flow."
    ],
    winterizing: [
      "Mulch before winter but keep the trunk clear.",
      "Protect containers and exposed roots from severe cold.",
      "Reduce winter wind stress if the tree is in an open site."
    ]
  },
  {
    commonName: "Snake Plant",
    slug: "snake-plant",
    summary: "A durable upright houseplant that tolerates lower water and a wide range of indoor light.",
    planting: [
      "Pot into a cactus or very well-draining houseplant mix.",
      "Use a pot with drainage holes and avoid oversized containers.",
      "Repot only when crowded or top-heavy."
    ],
    maintenance: [
      "Water thoroughly, then let the mix dry well before watering again.",
      "Bright indirect light gives the best growth, but lower light is tolerated.",
      "Wipe leaves occasionally to keep them clean."
    ],
    pruning: [
      "Remove damaged leaves at the base with a clean blade.",
      "Divide clumps during repotting if you want new plants.",
      "Avoid trimming healthy leaf tips."
    ],
    winterizing: [
      "Keep away from cold drafts and cold glass.",
      "Water much less often in winter.",
      "Do not let the potting mix stay damp in low light."
    ]
  },
  {
    commonName: "Monstera",
    slug: "monstera",
    summary: "A tropical statement plant with large split leaves and strong indoor growth in bright filtered light.",
    planting: [
      "Pot in a chunky airy mix with bark and perlite for root oxygen.",
      "Use a pot with drainage and provide a pole or support if desired.",
      "Repot in spring when roots circle heavily."
    ],
    maintenance: [
      "Water when the top of the mix begins to dry.",
      "Bright indirect light gives the best leaf size and fenestration.",
      "Rotate the pot occasionally for even growth."
    ],
    pruning: [
      "Cut back leggy stems to a node to shape the plant.",
      "Remove yellowing leaves cleanly at the base.",
      "Take node cuttings if you want to propagate."
    ],
    winterizing: [
      "Keep the plant warm and away from cold drafts.",
      "Reduce watering during slower winter growth.",
      "Increase humidity if edges crisp in heated rooms."
    ]
  },
  {
    commonName: "Pothos",
    slug: "pothos",
    summary: "An easy trailing houseplant that roots quickly and handles average indoor conditions well.",
    planting: [
      "Pot in a standard well-drained houseplant mix.",
      "Use hanging baskets, tabletop pots, or a support depending on your preferred look.",
      "Repot when roots crowd the pot or growth slows."
    ],
    maintenance: [
      "Water when the top inch or two of mix dries.",
      "Bright indirect light keeps variegated forms looking their best.",
      "Pinch long vines if you want a fuller plant."
    ],
    pruning: [
      "Trim vines back to a node to encourage branching.",
      "Root cuttings easily in water or mix.",
      "Remove yellow leaves as needed."
    ],
    winterizing: [
      "Reduce watering in winter.",
      "Keep away from cold drafts and very chilly windows.",
      "Pause heavy feeding until spring."
    ]
  },
  {
    commonName: "Peace Lily",
    slug: "peace-lily",
    summary: "A classic indoor foliage-and-bloom plant that prefers even moisture and bright indirect light.",
    planting: [
      "Plant in a rich indoor mix that drains well but stays lightly moist.",
      "Use a drainage pot and avoid a container much larger than the root ball.",
      "Repot in spring if roots become crowded."
    ],
    maintenance: [
      "Water when the top layer starts to dry or leaves soften slightly.",
      "Bright indirect light supports better flowering.",
      "Remove spent bloom stalks to keep the plant clean."
    ],
    pruning: [
      "Cut yellow leaves and old bloom stems at the base.",
      "Divide large clumps during repotting if desired.",
      "Keep damaged foliage cleaned up promptly."
    ],
    winterizing: [
      "Protect from dry heating vents and cold drafts.",
      "Keep moisture more even than for drought-tolerant houseplants.",
      "Add humidity if tip browning becomes common in winter."
    ]
  },
  {
    commonName: "Boston Fern",
    slug: "boston-fern",
    summary: "A lush fern for bright filtered light and higher humidity indoors or on sheltered porches.",
    planting: [
      "Use a moisture-retentive but well-drained mix rich in organic matter.",
      "Choose hanging baskets or roomy pots where fronds can arch naturally.",
      "Repot or divide in spring when root balls are dense."
    ],
    maintenance: [
      "Keep soil lightly moist and do not let the root ball dry completely.",
      "Bright filtered light and humidity produce the best foliage.",
      "Trim brown fronds regularly to keep plants fresh."
    ],
    pruning: [
      "Remove individual dead fronds at the base.",
      "Thin damaged sections instead of shearing the whole plant.",
      "Divide during repotting if size needs controlling."
    ],
    winterizing: [
      "Bring outdoor ferns in before frost.",
      "Increase humidity indoors with trays or grouping.",
      "Keep away from hot dry vents and cold windows."
    ]
  },
  {
    commonName: "Petunia",
    slug: "petunia",
    summary: "A long-blooming annual for containers and beds that performs best in sun and regular feeding.",
    planting: [
      "Set out transplants after frost in full sun and well-drained soil.",
      "Space plants according to variety size and basket density.",
      "Pinch young plants lightly if you want fuller branching."
    ],
    maintenance: [
      "Water containers consistently because petunias dry quickly in warm weather.",
      "Feed regularly through the growing season, especially in pots.",
      "Deadhead older varieties if they are not self-cleaning."
    ],
    pruning: [
      "Trim leggy stems by about one-third in midsummer.",
      "Remove spent flowers and seed heads on older types.",
      "A light shearing can reset bloom after a tired stretch."
    ],
    winterizing: [
      "Petunias are usually grown as annuals and replaced after frost.",
      "Remove faded plants before winter weather turns them mushy.",
      "If keeping a favorite basket under cover, water very lightly."
    ]
  },
  {
    commonName: "Marigold",
    slug: "marigold",
    summary: "A cheerful annual for sunny beds and containers that blooms well with very little fuss.",
    planting: [
      "Direct sow after frost or plant nursery starts once the soil is warm.",
      "Use full sun and average well-drained soil.",
      "Space by mature size so plants stay airy and less mildew-prone."
    ],
    maintenance: [
      "Water while establishing, then keep soil evenly moist without staying soggy.",
      "Do not overfeed because excess nitrogen can reduce bloom.",
      "Deadhead larger types if you want a tidier look and longer bloom."
    ],
    pruning: [
      "Pinch young plants once if you want bushier growth.",
      "Remove faded blooms through the season.",
      "Trim tired midsummer growth lightly if needed."
    ],
    winterizing: [
      "Marigolds are warm-season annuals and end with hard frost.",
      "Pull spent plants and compost healthy material after the season.",
      "Save seed from open-pollinated types if desired."
    ]
  },
  {
    commonName: "Zinnia",
    slug: "zinnia",
    summary: "A bright cutting-garden annual that loves heat, sun, and regular flower harvesting.",
    planting: [
      "Direct sow after frost or transplant carefully once nights are warm.",
      "Give zinnias full sun and enough spacing for good airflow.",
      "Succession sow if you want a long season of cut flowers."
    ],
    maintenance: [
      "Water at the base to help reduce mildew.",
      "Feed lightly if soil is poor, but do not push lush growth.",
      "Cut flowers or deadhead often to keep bloom production high."
    ],
    pruning: [
      "Pinch young stems to encourage branching.",
      "Remove faded flowers before they set seed if you want more bloom.",
      "Take off diseased lower leaves in humid weather."
    ],
    winterizing: [
      "Zinnias are annuals and are removed after frost.",
      "Discard diseased plants rather than composting them.",
      "Save seed from open-pollinated plants if you want to reseed."
    ]
  },
  {
    commonName: "Sunflower",
    slug: "sunflower",
    summary: "A bold annual for sunny gardens that delivers height, drama, and strong pollinator value.",
    planting: [
      "Direct sow after frost because sunflowers dislike root disturbance.",
      "Use full sun and give tall types room away from smaller plants.",
      "Plant in rows or blocks where sturdy stems can stand upright."
    ],
    maintenance: [
      "Water deeply while plants are young and during flowering.",
      "Stake tall varieties in windy places if needed.",
      "Feed lightly only if the soil is very poor."
    ],
    pruning: [
      "Most sunflowers need little pruning beyond removing damaged leaves.",
      "Cut spent heads once flowers fade or seeds mature.",
      "Harvest branching types often for more side blooms."
    ],
    winterizing: [
      "Sunflowers are annuals and finish after frost.",
      "Leave mature heads briefly if you want bird feeding before cleanup.",
      "Save dry seeds from open-pollinated types if desired."
    ]
  },
  {
    commonName: "Boxwood",
    slug: "boxwood",
    summary: "A classic evergreen shrub used for structure, hedging, and dependable year-round form.",
    planting: [
      "Plant in spring or early fall in well-drained soil.",
      "Set the root ball slightly high rather than too deep.",
      "Space by final hedge or specimen size rather than starter pot size."
    ],
    maintenance: [
      "Water deeply through the first season and during dry fall weather.",
      "Mulch the root zone while keeping stems clear at the base.",
      "Watch exposed plants for winter burn and heat stress."
    ],
    pruning: [
      "Shear lightly in late spring or early summer for formal outlines.",
      "Thin selectively if you prefer a natural look.",
      "Avoid late-season heavy pruning before frost."
    ],
    winterizing: [
      "Water well before the ground freezes because evergreens lose moisture in winter.",
      "Protect from drying wind and reflected winter sun if needed.",
      "Brush off heavy snow loads carefully."
    ]
  },
  {
    commonName: "Dogwood",
    slug: "dogwood",
    summary: "A flowering small tree that prefers even moisture, good soil, and a gentler exposure.",
    planting: [
      "Plant in spring or early fall in rich well-drained soil.",
      "Morning sun with afternoon protection works well in warmer regions.",
      "Mulch widely to protect shallow feeder roots."
    ],
    maintenance: [
      "Water consistently during establishment and summer drought.",
      "Use compost or a mild tree fertilizer if growth is weak.",
      "Reduce stress by keeping turf and damage away from the trunk."
    ],
    pruning: [
      "Prune only for dead wood, crossing branches, or structure during dormancy.",
      "Avoid aggressive shaping because dogwoods look best with a natural form.",
      "Remove watersprouts or trunk suckers as needed."
    ],
    winterizing: [
      "Mulch before winter to buffer roots and hold moisture.",
      "Water deeply in fall if the season has been dry.",
      "Protect young trunks from damage and rubbing."
    ]
  },
  {
    commonName: "Blueberry",
    slug: "blueberry",
    summary: "A productive fruiting shrub that needs acidic soil, moisture, and thoughtful dormant pruning.",
    planting: [
      "Plant in spring or fall in acidic organic-rich soil with good drainage.",
      "Use full sun for the best berry production.",
      "Mulch deeply with pine bark or another acid-friendly mulch."
    ],
    maintenance: [
      "Keep the root zone evenly moist because blueberries are shallow rooted.",
      "Use fertilizer formulated for acid-loving plants if feeding is needed.",
      "Refresh mulch yearly to protect roots and conserve moisture."
    ],
    pruning: [
      "Prune in dormancy by removing weak old canes and keeping younger productive wood.",
      "Thin crowded growth so light reaches the center.",
      "Focus on establishment over heavy shaping in the first couple of years."
    ],
    winterizing: [
      "Maintain mulch through winter to protect shallow roots.",
      "Water before freeze-up if autumn has been dry.",
      "Protect containers because roots freeze more quickly in pots."
    ]
  },
  {
    commonName: "Tomato",
    slug: "tomato",
    summary: "A warm-season crop that rewards sun, rich soil, support, and steady watering with heavy harvests.",
    planting: [
      "Start seed indoors 6 to 8 weeks before last frost or plant warm-season transplants outdoors.",
      "Set plants deeply because buried stems form additional roots.",
      "Install cages or stakes at planting time in full sun."
    ],
    maintenance: [
      "Water deeply and consistently to reduce fruit cracking and blossom-end rot.",
      "Feed regularly once flowering and fruiting begin, especially in containers.",
      "Mulch around the base to reduce splash and conserve moisture."
    ],
    pruning: [
      "Prune suckers on indeterminate tomatoes if you want fewer supported stems.",
      "Remove lower leaves that touch the soil.",
      "Keep tying or clipping plants to support as they grow."
    ],
    winterizing: [
      "Tomatoes are frost tender and usually removed after the first hard freeze.",
      "Pick mature green fruit before frost if you want to finish ripening indoors.",
      "Discard diseased plants rather than carrying them through winter."
    ]
  },
  {
    commonName: "Aloe Vera",
    slug: "aloe-vera",
    summary: "A low-water succulent for bright windows and containers, valued for easy care and clean structure.",
    planting: [
      "Pot in a cactus or succulent mix with excellent drainage.",
      "Use a container only slightly larger than the root ball.",
      "Keep the crown above soggy soil and avoid burying leaves too deeply."
    ],
    maintenance: [
      "Water thoroughly, then allow the mix to dry well before watering again.",
      "Give bright light and some gentle direct sun once acclimated.",
      "Remove offsets if the pot becomes crowded."
    ],
    pruning: [
      "Cut off damaged or old outer leaves at the base.",
      "Remove spent flower stalks after bloom.",
      "Thin pups during repotting if you want a neater container."
    ],
    winterizing: [
      "Protect from frost and cold drafts.",
      "Water very sparingly during winter.",
      "Keep plants bright and on the dry side until spring growth resumes."
    ]
  },
  {
    commonName: "Peony",
    slug: "peony",
    summary: "A long-lived flowering perennial treasured for large spring blooms and reliable garden performance.",
    planting: [
      "Plant bare roots in fall or nursery plants in spring in full sun to light shade.",
      "Set eyes only 1 to 2 inches below the soil surface because deep planting reduces bloom.",
      "Choose a permanent spot with rich, well-drained soil because peonies dislike frequent moving."
    ],
    maintenance: [
      "Water during dry spells in the first year and during spring growth if rainfall is light.",
      "Top-dress with compost in spring and avoid heavy nitrogen feeding.",
      "Support large-flowered varieties if blooms tend to flop after rain."
    ],
    pruning: [
      "Remove spent flowers if you want a tidier plant and stronger energy into the roots.",
      "Cut herbaceous peony stems to the ground after frost blackens the foliage.",
      "Remove diseased foliage promptly through the season if leaf spots appear."
    ],
    winterizing: [
      "After hard frost, cut stems down and remove debris from the area.",
      "Mulch lightly in colder zones, especially for new fall plantings.",
      "Do not leave soggy mulch over the crown through wet winter weather."
    ]
  },
  {
    commonName: "Iris",
    slug: "iris",
    summary: "A classic flowering perennial with sword-like foliage and showy spring to early summer blooms.",
    planting: [
      "Plant rhizomes or potted plants in full sun with excellent drainage.",
      "Keep the top of bearded iris rhizomes close to the soil surface rather than buried deeply.",
      "Space clumps so air can move freely around the leaves and rhizomes."
    ],
    maintenance: [
      "Water to establish, then keep on the drier side unless weather is very hot and dry.",
      "Avoid heavy mulch over rhizomes because trapped moisture can cause rot.",
      "Feed lightly in spring with a balanced low-nitrogen fertilizer if growth is weak."
    ],
    pruning: [
      "Remove spent flower stalks after bloom finishes.",
      "Trim damaged or diseased leaves, but leave healthy fans standing through the season.",
      "Divide crowded clumps every few years after bloom to restore vigor."
    ],
    winterizing: [
      "Cut foliage back to a fan in late fall if it becomes tattered or diseased.",
      "Keep the planting area clean and avoid thick winter mulch over the rhizomes.",
      "Improve drainage if crowns tend to sit wet in winter."
    ]
  },
  {
    commonName: "Daylily",
    slug: "daylily",
    summary: "A durable flowering perennial known for summer color, easy growth, and tolerance of many garden conditions.",
    planting: [
      "Plant in spring or early fall in sun to light shade.",
      "Set crowns just at soil level in loose, compost-amended ground.",
      "Space plants generously because mature clumps expand steadily over time."
    ],
    maintenance: [
      "Water during establishment and during long dry spells for best bloom.",
      "Mulch lightly to reduce weeds and hold even moisture.",
      "Top-dress with compost in spring if the bed needs a gentle boost."
    ],
    pruning: [
      "Remove spent flower stalks once blooming is finished.",
      "Trim yellow or tired leaves through the season to keep clumps neat.",
      "Divide large crowded clumps every few years when flowering slows."
    ],
    winterizing: [
      "Cut foliage down after frost if you want a cleaner winter bed.",
      "Use a light mulch for newly planted daylilies in colder regions.",
      "Avoid heavy wet mulch piled over the crown."
    ]
  },
  {
    commonName: "Tulip",
    slug: "tulip",
    summary: "A spring bulb planted in fall for vivid early-season color in beds, borders, and containers.",
    planting: [
      "Plant bulbs in fall once soil cools but before the ground freezes.",
      "Choose full sun to part sun and fast-draining soil.",
      "Place bulbs at a depth about 2 to 3 times the bulb height, pointed end up."
    ],
    maintenance: [
      "Water after planting if the soil is dry, then let winter moisture do most of the work.",
      "Feed with compost or a bulb fertilizer in fall or early spring if soil is poor.",
      "Avoid soggy winter sites because bulbs can rot."
    ],
    pruning: [
      "Deadhead flowers after bloom to keep energy going back into the bulb.",
      "Leave foliage in place until it yellows naturally.",
      "Do not braid or cut leaves early because bulbs need that energy."
    ],
    winterizing: [
      "Tulips are already wintering underground once planted in fall.",
      "Mulch lightly after the soil cools in colder climates.",
      "Protect containers because bulbs in pots freeze more deeply than bulbs in the ground."
    ]
  },
  {
    commonName: "Daffodil",
    slug: "daffodil",
    summary: "A dependable spring bulb that naturalizes well and returns with cheerful yellow or white blooms.",
    planting: [
      "Plant bulbs in fall in sun or light shade with well-drained soil.",
      "Set bulbs about 2 to 3 times their height deep, with the pointed tip upward.",
      "Plant in drifts or clusters for a fuller naturalized look."
    ],
    maintenance: [
      "Water after planting if autumn is dry and again during active spring growth if needed.",
      "Feed lightly with compost or bulb food if the planting is weak.",
      "Daffodils generally need little care once established."
    ],
    pruning: [
      "Remove spent blooms after flowering.",
      "Leave the foliage until it yellows and collapses naturally.",
      "Divide crowded clumps after foliage dies back if flowering declines."
    ],
    winterizing: [
      "Bulbs overwinter in the ground with little extra help.",
      "Use a light mulch in exposed beds in colder climates.",
      "Avoid sites that stay wet for long periods in winter."
    ]
  },
  {
    commonName: "Lilac",
    slug: "lilac",
    summary: "A fragrant spring-flowering shrub that performs best in sun, airflow, and cooler winter climates.",
    planting: [
      "Plant in spring or early fall in full sun and well-drained soil.",
      "Give lilacs enough room because mature shrubs can become large and airy.",
      "Choose a site with strong airflow to help reduce mildew pressure."
    ],
    maintenance: [
      "Water deeply while establishing, then only during prolonged dry weather.",
      "Top-dress with compost in spring instead of overfeeding with nitrogen.",
      "Keep the base free of dense weeds or turf competition."
    ],
    pruning: [
      "Prune right after flowering because lilacs set next year's buds soon after bloom.",
      "Remove spent flower heads if desired for a cleaner look.",
      "Thin out a few older stems at the base every few years to renew the shrub."
    ],
    winterizing: [
      "Established lilacs need little winter protection in suitable climates.",
      "Water before freeze-up if fall is very dry.",
      "Mulch lightly around the root zone but keep stems clear."
    ]
  },
  {
    commonName: "Arborvitae",
    slug: "arborvitae",
    summary: "A popular evergreen screening shrub or tree used for privacy, hedging, and year-round structure.",
    planting: [
      "Plant in spring or early fall in sun to part shade.",
      "Use well-drained soil and space plants according to the mature hedge width you want.",
      "Water thoroughly at planting and mulch the root zone to reduce competition."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment and during dry summer periods.",
      "Inspect for winter burn or drying on exposed sites.",
      "Water deeply in fall because evergreens continue losing moisture through winter."
    ],
    pruning: [
      "Trim lightly to shape in late spring or early summer.",
      "Avoid cutting back into old bare wood that may not regrow.",
      "Remove any dead or split branches promptly."
    ],
    winterizing: [
      "Water well before the ground freezes.",
      "Tie vulnerable upright forms loosely if heavy snow tends to spread branches apart.",
      "Protect very exposed young plants from drying winter wind if needed."
    ]
  },
  {
    commonName: "Camellia",
    slug: "camellia",
    summary: "An evergreen flowering shrub valued for glossy foliage and elegant blooms in cooler seasons.",
    planting: [
      "Plant in spring or fall in rich acidic soil with excellent drainage.",
      "Choose morning sun or filtered light with protection from harsh afternoon heat.",
      "Set the root ball slightly high rather than too deep."
    ],
    maintenance: [
      "Keep soil evenly moist, especially in the first season and during dry spells.",
      "Mulch with organic material to protect shallow roots and maintain acidity.",
      "Feed with an acid-loving plant fertilizer if growth is weak."
    ],
    pruning: [
      "Prune lightly after flowering if shaping is needed.",
      "Remove dead wood and any crossing interior branches.",
      "Avoid heavy pruning unless rejuvenation is truly needed."
    ],
    winterizing: [
      "Water deeply before winter if autumn is dry.",
      "Protect flower buds from severe cold or drying winter wind where needed.",
      "Maintain mulch but keep it off the main stems."
    ]
  },
  {
    commonName: "Spirea",
    slug: "spirea",
    summary: "A dependable flowering shrub for foundation beds, mixed borders, and easy seasonal color.",
    planting: [
      "Plant in spring or early fall in full sun for the best flowering.",
      "Use average, well-drained soil and space by mature spread.",
      "Water deeply after planting and mulch around the base."
    ],
    maintenance: [
      "Spirea is adaptable and usually needs only moderate water once established.",
      "Compost in spring is usually enough for healthy growth.",
      "Keep the shrub open and uncrowded for easier maintenance."
    ],
    pruning: [
      "Prune spring-blooming types after flowering and summer-blooming types in late winter or early spring.",
      "Remove dead wood and weak interior stems.",
      "A light shearing after bloom can help keep compact varieties tidy."
    ],
    winterizing: [
      "Established plants are generally hardy and need little winter care.",
      "Mulch young shrubs lightly in colder regions.",
      "Water before freeze-up if the fall season has been dry."
    ]
  },
  {
    commonName: "English Laurel",
    slug: "english-laurel",
    summary: "A fast-growing evergreen screening shrub often used for privacy hedges and year-round green structure.",
    planting: [
      "Plant in spring or fall in full sun to part shade.",
      "Use average to rich soil with decent drainage and space plants for mature hedge width.",
      "Water thoroughly after planting and mulch the root zone to help new roots establish."
    ],
    maintenance: [
      "Keep soil evenly moist in the first season, then water deeply during dry stretches.",
      "Feed lightly with compost or a balanced evergreen fertilizer in spring if needed.",
      "Watch dense hedges for reduced airflow and prune to keep light reaching the interior."
    ],
    pruning: [
      "Prune after the main flush of spring growth to maintain hedge size and density.",
      "Thin or head back long shoots as needed rather than letting the hedge become top-heavy.",
      "Remove damaged or winter-burned growth once new growth begins."
    ],
    winterizing: [
      "Water well before winter because broadleaf evergreens lose moisture even in cold weather.",
      "Mulch around the base to buffer roots, but keep stems clear.",
      "Protect newly planted shrubs from drying wind if the site is exposed."
    ]
  },
  {
    commonName: "Pansy",
    slug: "pansy",
    summary: "A cool-season flowering favorite for early spring and fall containers, borders, and window boxes.",
    planting: [
      "Plant nursery starts in cool spring or fall weather rather than summer heat.",
      "Use rich, well-drained soil in beds or containers with sun to part shade.",
      "Space plants so air can move between them and reduce mildew problems."
    ],
    maintenance: [
      "Keep soil evenly moist, especially in containers that dry quickly.",
      "Feed lightly and regularly in containers for continuous flowering.",
      "Pansies perform best while temperatures stay cool and fresh."
    ],
    pruning: [
      "Deadhead spent blooms often to keep new flowers coming.",
      "Trim leggy stems lightly if plants stretch after a warm spell.",
      "Remove faded leaves and damaged growth to keep plants tidy."
    ],
    winterizing: [
      "In mild climates, pansies can flower through winter with light protection.",
      "Mulch lightly around bed plantings if repeated freeze-thaw is expected.",
      "Replace plants once hard heat or severe cold finishes the display."
    ]
  },
  {
    commonName: "Sedum",
    slug: "sedum",
    summary: "A drought-tolerant perennial or succulent groundcover valued for easy care and sharp drainage performance.",
    planting: [
      "Plant in spring or early fall in full sun and sharply drained soil.",
      "Raised beds, rock gardens, and gravelly edges are ideal planting areas.",
      "Space by mature width so mats or clumps can spread cleanly."
    ],
    maintenance: [
      "Water only while establishing, then reduce watering sharply.",
      "Avoid rich soil or heavy fertilizer because sedum prefers lean conditions.",
      "Keep crowns from sitting wet, especially in winter."
    ],
    pruning: [
      "Trim stray stems or edges if the plant spreads beyond the intended space.",
      "Cut taller sedum stems back in late winter or early spring.",
      "Remove collapsed or damaged growth after storms if needed."
    ],
    winterizing: [
      "Excellent drainage is the main winter protection.",
      "Do not bury the crown under wet mulch.",
      "Container sedums should stay on the dry side through the cold season."
    ]
  },
  {
    commonName: "Bee Balm",
    slug: "bee-balm",
    summary: "A pollinator-friendly perennial with bright summer flowers and strong cottage-garden appeal.",
    planting: [
      "Plant in spring or early fall in full sun or very light shade.",
      "Use compost-enriched soil that stays evenly moist but drains reasonably well.",
      "Space clumps generously because bee balm benefits from airflow."
    ],
    maintenance: [
      "Water during dry periods to keep foliage fresh and flowering steady.",
      "Mulch lightly to conserve moisture around the roots.",
      "Watch for powdery mildew in crowded or dry conditions."
    ],
    pruning: [
      "Deadhead if you want a tidier look after the main bloom period.",
      "Cut stems down after flowering if foliage becomes tired or diseased.",
      "Divide clumps every few years to renew vigor and reduce crowding."
    ],
    winterizing: [
      "Cut stems back after frost or in late winter.",
      "Remove diseased debris rather than leaving it around the base.",
      "Use a light mulch in colder areas, keeping the crown from staying soggy."
    ]
  },
  {
    commonName: "Coral Bells",
    slug: "coral-bells",
    summary: "A versatile foliage perennial grown for colorful leaves and delicate flower stems in part shade.",
    planting: [
      "Plant in spring or early fall in part shade with rich, well-drained soil.",
      "Set the crown level with the soil surface and avoid planting too deeply.",
      "Choose a site with protection from harsh afternoon sun in hot climates."
    ],
    maintenance: [
      "Keep soil evenly moist while plants establish, then water during dry stretches.",
      "Top-dress with compost in spring if the bed needs a light refresh.",
      "Clear away damaged leaves so the foliage mound stays attractive."
    ],
    pruning: [
      "Remove spent flower stalks after bloom for a cleaner plant.",
      "Trim battered or winter-damaged leaves when new growth begins.",
      "Divide clumps every few years if the crown rises or the center thins."
    ],
    winterizing: [
      "Mulch lightly to reduce winter heaving in colder climates.",
      "Leave healthy foliage in place through winter for extra crown protection.",
      "Remove soggy debris early in spring before fresh growth pushes up."
    ]
  },
  {
    commonName: "Geranium",
    slug: "geranium",
    summary: "A classic bedding and container plant that flowers heavily in sunny spots with steady deadheading.",
    planting: [
      "Set out geraniums after frost in full sun and well-drained soil or potting mix.",
      "Choose containers with strong drainage and avoid oversized pots.",
      "Space plants so leaves dry quickly after rain or watering."
    ],
    maintenance: [
      "Allow the top of the soil to dry slightly between thorough waterings.",
      "Feed regularly in containers through the bloom season.",
      "Remove yellowing leaves to keep the plant clean and airy."
    ],
    pruning: [
      "Deadhead spent blooms by snapping the stalk cleanly at the base.",
      "Pinch back leggy stems to encourage fuller branching.",
      "Trim tired midsummer growth if you want a fresh flush of blooms."
    ],
    winterizing: [
      "Geraniums are often treated as annuals where winters are cold.",
      "Overwinter selected plants indoors in bright light with much lighter watering.",
      "Keep overwintered plants frost-free and prune back before spring regrowth."
    ]
  },
  {
    commonName: "Impatiens",
    slug: "impatiens",
    summary: "A dependable shade annual that fills containers and beds with continuous color through the warm season.",
    planting: [
      "Plant after frost in part shade to shade once nights are reliably mild.",
      "Use rich, moisture-retentive soil in beds or containers.",
      "Avoid cramped spacing so foliage can dry and plants stay healthier."
    ],
    maintenance: [
      "Keep soil evenly moist because impatiens dislike drying out.",
      "Feed container plantings lightly but regularly during the bloom season.",
      "Protect from harsh afternoon sun that can scorch leaves."
    ],
    pruning: [
      "Pinch or trim leggy stems lightly if plants stretch midsummer.",
      "Remove spent or damaged stems to keep the planting fresh.",
      "Self-cleaning bloom habits mean heavy deadheading is rarely needed."
    ],
    winterizing: [
      "Impatiens are warm-season annuals and are usually removed after frost.",
      "Discard plants once cold weather blackens the foliage.",
      "In frost-free climates, keep them watered lightly during cooler slower growth."
    ]
  },
  {
    commonName: "Yarrow",
    slug: "yarrow",
    summary: "A hardy perennial for sunny borders and low-water gardens, valued for flat flower clusters and easy care.",
    planting: [
      "Plant in spring or early fall in full sun with lean, well-drained soil.",
      "Avoid overly rich soil because floppy growth is more likely there.",
      "Space clumps enough for airflow and future spread."
    ],
    maintenance: [
      "Water to establish, then reduce watering once roots are settled.",
      "Do not overfertilize because yarrow thrives in average to poor soil.",
      "The plant handles heat and dry spells well once mature."
    ],
    pruning: [
      "Deadhead after the first flush to encourage a tidier second bloom.",
      "Cut spent stems back after flowering if the plant looks tired.",
      "Divide every few years if clumps become woody or sparse in the middle."
    ],
    winterizing: [
      "Cut stems down after frost or leave them for winter structure and cut back in spring.",
      "Keep crowns from sitting wet in winter.",
      "Use only a very light mulch in colder climates."
    ]
  },
  {
    commonName: "Astilbe",
    slug: "astilbe",
    summary: "A moisture-loving shade perennial with feathery blooms and finely textured foliage.",
    planting: [
      "Plant in spring or early fall in part shade with rich moisture-retentive soil.",
      "Astilbe performs best where roots stay cool and evenly moist.",
      "Use compost when planting to help the soil hold organic matter and moisture."
    ],
    maintenance: [
      "Do not let the root zone dry out for long, especially in brighter exposures.",
      "Mulch lightly to keep soil cool and evenly moist.",
      "Feed with compost or a gentle perennial fertilizer in spring if needed."
    ],
    pruning: [
      "Cut spent flower stems if you prefer a cleaner look, or leave some for texture.",
      "Remove old foliage in late winter or early spring before new growth emerges.",
      "Divide older clumps when the centers weaken or flowering declines."
    ],
    winterizing: [
      "Keep the crown mulched lightly so roots do not heave in colder weather.",
      "Water before winter if autumn has been unusually dry.",
      "Leave the site free of heavy soggy debris over the crown."
    ]
  },
  {
    commonName: "Shasta Daisy",
    slug: "shasta-daisy",
    summary: "A bright summer perennial for sunny borders and cutting gardens with easy, classic daisy flowers.",
    planting: [
      "Plant in spring or early fall in full sun and well-drained soil.",
      "Choose a site with good airflow so foliage stays cleaner.",
      "Space plants enough for mature clumps rather than small nursery pot size."
    ],
    maintenance: [
      "Water during establishment and during extended dry spells.",
      "Avoid overly rich soil that can produce floppy stems.",
      "Mulch lightly and keep weeds from crowding the base."
    ],
    pruning: [
      "Deadhead to keep bloom production going and the plant looking neat.",
      "Cut stems back after flowering if the plant becomes ragged.",
      "Divide every few years if clumps become crowded or flowering slows."
    ],
    winterizing: [
      "Cut stems down after frost or leave them until late winter for a natural look.",
      "Protect new plantings with light mulch in colder regions.",
      "Ensure good drainage so crowns do not sit wet in winter."
    ]
  },
  {
    commonName: "Rhododendron",
    slug: "rhododendron",
    summary: "A broadleaf evergreen shrub prized for spring bloom and foundation planting in cool, acidic landscapes.",
    planting: [
      "Plant in spring or early fall in acidic, organic-rich, well-drained soil.",
      "Choose part shade or filtered light, especially in hotter climates.",
      "Set the root ball slightly high and mulch broadly over the shallow root zone."
    ],
    maintenance: [
      "Keep soil evenly moist without staying waterlogged.",
      "Use fertilizers or compost suited to acid-loving shrubs only if needed.",
      "Protect the shallow roots from heat and drying with organic mulch."
    ],
    pruning: [
      "Prune lightly after flowering if shaping is needed.",
      "Remove dead flower trusses by hand if you want a cleaner look and stronger growth.",
      "Thin dead or awkward branches selectively rather than shearing."
    ],
    winterizing: [
      "Water well before winter if autumn has been dry.",
      "Protect exposed plants from drying winter sun and wind where necessary.",
      "Maintain mulch, but keep it away from the main stems."
    ]
  },
  {
    commonName: "Salvia",
    slug: "salvia",
    summary: "A sun-loving perennial with long bloom periods, aromatic foliage, and strong pollinator value.",
    planting: [
      "Plant in spring or early fall in full sun and well-drained soil.",
      "Choose a site with good airflow and avoid heavy wet ground.",
      "Space plants so mature clumps do not crowd one another."
    ],
    maintenance: [
      "Water to establish, then shift to deeper, less frequent watering.",
      "Avoid rich soil or heavy fertilizer because salvia performs best without lush overgrowth.",
      "The plant tolerates heat and dry spells well once rooted."
    ],
    pruning: [
      "Deadhead after the first bloom flush to encourage repeat flowering.",
      "Trim tired stems lightly in midsummer to refresh growth.",
      "Cut old stems back in late winter or early spring."
    ],
    winterizing: [
      "Leave some top growth through winter in colder areas for extra crown protection.",
      "Cut back once spring growth begins again.",
      "Keep crowns from sitting wet under heavy mulch."
    ]
  },
  {
    commonName: "Lantana",
    slug: "lantana",
    summary: "A heat-loving flowering plant prized for nonstop summer color and drought tolerance.",
    planting: [
      "Plant after frost in full sun and sharply drained soil or potting mix.",
      "Use containers or warm beds where lantana can enjoy reflected heat.",
      "Space plants for airflow because growth can become broad and bushy."
    ],
    maintenance: [
      "Water regularly while establishing, then let the soil dry slightly between soakings.",
      "Feed container plants lightly through the warm season if growth slows.",
      "Lantana performs best in strong sun and warm temperatures."
    ],
    pruning: [
      "Trim lightly through the season to shape the plant and control legginess.",
      "Deadheading is optional, but light cleanup can keep plants looking fresher.",
      "Cut back harder in spring once new growth begins."
    ],
    winterizing: [
      "In cold climates, lantana is often treated as an annual.",
      "Where it overwinters, protect roots with light mulch and avoid soggy conditions.",
      "Bring container plants under cover before frost if you want to hold them over."
    ]
  },
  {
    commonName: "Foxglove",
    slug: "foxglove",
    summary: "A dramatic cottage-garden flower with tall bloom spikes that prefers cooler, evenly moist conditions.",
    planting: [
      "Plant nursery starts in spring or fall in sun to part shade depending on climate.",
      "Use rich, well-drained soil that stays evenly moist.",
      "Allow enough room for tall flower spikes and a good basal rosette."
    ],
    maintenance: [
      "Keep the soil from drying out completely during active growth and flowering.",
      "Use compost or a gentle balanced feed if the soil is poor.",
      "Support taller stems in windy sites if needed."
    ],
    pruning: [
      "Cut spent flower spikes if you want to reduce self-seeding or tidy the plant.",
      "Leave some spikes to set seed if you want new plants to appear.",
      "Remove damaged foliage as needed, especially in damp weather."
    ],
    winterizing: [
      "Protect first-year rosettes with a light mulch in colder climates.",
      "Keep crowns clear of soggy winter debris.",
      "Do not smother plants with heavy wet mulch."
    ]
  },
  {
    commonName: "Russian Sage",
    slug: "russian-sage",
    summary: "A drought-tolerant perennial with airy lavender-blue flower stems and silver foliage for hot sunny sites.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Choose a warm open location because Russian sage thrives in heat and airflow.",
      "Avoid rich heavy soil that encourages weak floppy growth."
    ],
    maintenance: [
      "Water while establishing, then keep watering light and infrequent.",
      "Do not overfeed; average soil is usually better than rich soil.",
      "This plant performs especially well in hot dry borders."
    ],
    pruning: [
      "Leave stems standing through winter for structure and crown protection.",
      "Cut plants back hard in early spring once new buds begin near the base.",
      "Remove any dead or broken stems then reshape lightly."
    ],
    winterizing: [
      "Excellent drainage is the main winter protection.",
      "Avoid heavy mulch piled directly over the crown.",
      "Leave top growth in place until spring in colder regions."
    ]
  },
  {
    commonName: "Serviceberry",
    slug: "serviceberry",
    summary: "A multi-season small tree or large shrub with spring bloom, edible berries, and strong fall color.",
    planting: [
      "Plant in spring or early fall in sun to part shade.",
      "Use soil that drains well but does not dry out too quickly.",
      "Choose a spot with enough room for the mature canopy or multi-stem form."
    ],
    maintenance: [
      "Water deeply during establishment and during extended summer dry spells.",
      "Mulch around the root zone to protect shallow feeder roots.",
      "Use compost for a gentle annual soil refresh if needed."
    ],
    pruning: [
      "Prune in dormancy to remove dead wood and improve structure.",
      "Thin selectively rather than shearing to preserve the natural form.",
      "Remove suckers if you want a more tree-like habit."
    ],
    winterizing: [
      "Established plants usually need little winter care.",
      "Water before freeze-up if autumn has been very dry.",
      "Protect young trunks from mechanical damage and rubbing."
    ]
  },
  {
    commonName: "Creeping Thyme",
    slug: "creeping-thyme",
    summary: "A fragrant low groundcover for sunny dry spots, path edges, and rock gardens.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Choose gravelly, sandy, or lean ground rather than heavy wet beds.",
      "Space plugs or small starts so they can knit together naturally."
    ],
    maintenance: [
      "Water to establish, then keep watering light and infrequent.",
      "Do not overfertilize or grow it in rich soggy soil.",
      "This plant tolerates light foot traffic once it is well rooted."
    ],
    pruning: [
      "Trim lightly after flowering to keep mats neat and dense.",
      "Remove winter-killed patches in spring and let new growth fill in.",
      "Shear only lightly so the plant keeps its natural low habit."
    ],
    winterizing: [
      "Good drainage is critical in winter.",
      "Avoid heavy mulch that traps moisture over the crown.",
      "Container plants should stay on the dry side through the cold season."
    ]
  },
  {
    commonName: "Ajuga",
    slug: "ajuga",
    summary: "A fast-spreading groundcover for shade to part shade, valued for glossy foliage and spring flower spikes.",
    planting: [
      "Plant in spring or fall in part shade or shade with evenly moist soil.",
      "Use enough spacing for runners to fill in without immediate crowding.",
      "Avoid sites with chronic winter wetness around the crown."
    ],
    maintenance: [
      "Keep new plantings watered until roots spread and knit together.",
      "Ajuga usually needs little feeding beyond compost in average garden soil.",
      "Thin crowded mats if humidity and poor airflow start causing crown issues."
    ],
    pruning: [
      "Trim spent flower spikes after bloom if you prefer a cleaner look.",
      "Cut back damaged leaves or ragged edges to refresh the patch.",
      "Lift and divide sections if the center becomes crowded or tired."
    ],
    winterizing: [
      "Keep winter debris from matting over the crowns.",
      "Use only light mulch if extra winter buffering is needed.",
      "Improve drainage if the planting tends to stay soggy."
    ]
  },
  {
    commonName: "Mondo Grass",
    slug: "mondo-grass",
    summary: "A grass-like evergreen edging and groundcover plant used for tidy borders, shade paths, and low-maintenance texture.",
    planting: [
      "Plant in spring or fall in part shade to shade, though some forms take more sun with moisture.",
      "Use well-drained soil enriched with compost for faster establishment.",
      "Space divisions or plugs evenly so they can fill in over time."
    ],
    maintenance: [
      "Water during establishment and during extended drought.",
      "Top-dress with compost in spring if the planting needs a gentle boost.",
      "Keep weeds out of young plantings until the foliage knits together."
    ],
    pruning: [
      "Comb out or trim old winter-damaged foliage before spring growth starts.",
      "Divide clumps if the planting becomes too dense or uneven.",
      "Remove stray damaged blades as needed through the season."
    ],
    winterizing: [
      "Evergreen foliage usually carries through winter with little help.",
      "Protect newly planted areas with a light mulch in colder zones.",
      "Keep heavy wet debris from smothering the crown."
    ]
  },
  {
    commonName: "Basil",
    slug: "basil",
    summary: "A warm-season culinary herb that thrives in sun, rich soil, and regular harvesting.",
    planting: [
      "Sow or transplant only after nights are warm and frost danger has passed.",
      "Use full sun and fertile well-drained soil or a quality container mix.",
      "Pinch young plants once they are established to encourage branching."
    ],
    maintenance: [
      "Keep soil evenly moist without making it soggy.",
      "Harvest often because regular picking helps plants stay bushy and productive.",
      "Feed container basil lightly during active summer growth."
    ],
    pruning: [
      "Pinch above a pair of leaves to encourage side shoots.",
      "Remove flower buds promptly if you want to extend leaf production.",
      "Trim leggy stems back lightly to fresh green growth."
    ],
    winterizing: [
      "Basil is frost tender and usually grown as a warm-season annual.",
      "Bring favored plants indoors before cold nights if you want to extend harvest.",
      "Replace outdoor plants once cool weather ends strong growth."
    ]
  },
  {
    commonName: "Mint",
    slug: "mint",
    summary: "A vigorous herb that is easy to grow, highly aromatic, and best managed with boundaries or containers.",
    planting: [
      "Plant in spring in sun to part shade with evenly moist soil.",
      "Use containers or root barriers if you do not want it spreading through the garden.",
      "Space divisions or starts where airflow stays good and harvest access is easy."
    ],
    maintenance: [
      "Keep soil evenly moist for the freshest leaf growth.",
      "Harvest frequently to keep stems tender and leafy.",
      "Refresh container plantings or divide garden patches if growth becomes crowded."
    ],
    pruning: [
      "Pinch or cut stems often through the season to encourage branching.",
      "Remove flower stalks if you want the strongest leaf production.",
      "Cut plants back hard once or twice in summer if they become lanky."
    ],
    winterizing: [
      "Outdoor mint usually dies back and returns from the roots in spring.",
      "Cut old stems down after frost or in late winter.",
      "Mulch lightly in colder regions, especially for container plants."
    ]
  },
  {
    commonName: "Black-eyed Susan",
    slug: "black-eyed-susan",
    summary: "A bright, resilient perennial or short-lived perennial that brings easy summer color to sunny beds.",
    planting: [
      "Plant in spring or early fall in full sun and average well-drained soil.",
      "Space plants so mature clumps have room and airflow.",
      "Direct seeding is possible, but transplants establish and bloom faster."
    ],
    maintenance: [
      "Water new plantings regularly, then only during long dry stretches.",
      "Avoid heavy feeding because average garden soil is usually enough.",
      "Leave some seed heads if you want birds and natural reseeding."
    ],
    pruning: [
      "Deadhead spent flowers if you want a tidier display and longer bloom.",
      "Cut tired stems back after flowering if plants become ragged.",
      "Remove old stems in late winter or early spring."
    ],
    winterizing: [
      "Established plants are usually very hardy with little extra care.",
      "Leave some seed heads standing if desired, then clean up in spring.",
      "Keep crowns from sitting wet through winter."
    ]
  },
  {
    commonName: "Clematis",
    slug: "clematis",
    summary: "A flowering vine that rewards support, consistent moisture, and pruning based on bloom type.",
    planting: [
      "Plant in spring or fall in sun to part sun with roots kept cool and shaded.",
      "Use rich well-drained soil and install a trellis, fence, or support at planting time.",
      "Set the crown a bit deeper than it sat in the nursery pot to protect the base."
    ],
    maintenance: [
      "Water consistently during establishment and during dry weather.",
      "Mulch or plant low companions around the root zone to keep it cool.",
      "Feed lightly in spring if growth is weak."
    ],
    pruning: [
      "Pruning depends on bloom group, so identify whether it flowers on old wood, new wood, or both.",
      "Remove dead or weak stems and guide healthy shoots onto the support.",
      "Avoid random heavy cuts until you know the bloom habit."
    ],
    winterizing: [
      "Mulch lightly around the base in colder climates.",
      "Protect the root zone more than the upper vine because roots need the most buffering.",
      "Tie loose vines if winter wind tends to whip them around."
    ]
  },
  {
    commonName: "Blue Fescue",
    slug: "blue-fescue",
    summary: "A compact ornamental grass with cool blue foliage for sunny edges, gravel gardens, and modern plantings.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Use Blue Fescue in borders, gravel gardens, and low-water plantings.",
      "Space clumps so each mound can keep its neat shape."
    ],
    maintenance: [
      "Water while establishing, then keep on the dry side once mature.",
      "Avoid rich soil and heavy fertilizer because growth becomes floppy there.",
      "This grass performs best in open sunny sites with airflow."
    ],
    pruning: [
      "Comb out dead blades in late winter or early spring with gloved hands.",
      "Trim ragged edges lightly if needed, but avoid scalping the whole clump.",
      "Divide older plants if the center begins to thin."
    ],
    winterizing: [
      "Good drainage is the main winter protection.",
      "Leave foliage standing through winter for appearance and crown protection.",
      "Keep crowns free of soggy debris."
    ]
  },
  {
    commonName: "English Ivy",
    slug: "english-ivy",
    summary: "A vigorous evergreen vine or groundcover that is useful in shade but needs firm management.",
    planting: [
      "Plant in spring or fall in part shade to shade with evenly moist well-drained soil.",
      "Use it as a controlled groundcover or trained vine only where spread can be managed.",
      "Give new plantings a clear boundary from the start."
    ],
    maintenance: [
      "Water regularly while establishing, then only enough to prevent extended drought stress.",
      "Inspect often because English Ivy can spread aggressively if ignored.",
      "Keep stems away from tree trunks, siding, and unwanted structures."
    ],
    pruning: [
      "Trim frequently to keep the vine within bounds.",
      "Cut back wandering stems before they root where you do not want them.",
      "Thin dense mats or wall growth to improve airflow and visibility."
    ],
    winterizing: [
      "Evergreen foliage usually carries through winter with little special care.",
      "Water before freeze-up if autumn is very dry.",
      "Remove storm-damaged growth and keep mats from smothering nearby plants."
    ]
  },
  {
    commonName: "Coreopsis",
    slug: "coreopsis",
    summary: "A cheerful, long-blooming perennial for sunny borders, pollinator beds, and easy summer color.",
    planting: [
      "Plant in spring or early fall in full sun and well-drained soil.",
      "Average or even lean soil is usually enough for strong performance.",
      "Space plants so clumps have airflow and room to bloom freely."
    ],
    maintenance: [
      "Water during establishment, then only during longer dry periods.",
      "Avoid overfeeding because too much fertility can reduce flower quality.",
      "Coreopsis performs best in bright open sun."
    ],
    pruning: [
      "Deadhead spent flowers to extend bloom and keep the plant neat.",
      "Lightly shear the whole plant if it becomes tired midseason.",
      "Cut old stems back in late winter or early spring."
    ],
    winterizing: [
      "Leave some top growth standing over winter if you like extra structure.",
      "Cut back fully once spring growth begins.",
      "Use only light mulch where winter protection is needed."
    ]
  },
  {
    commonName: "Catmint",
    slug: "catmint",
    summary: "An easy aromatic perennial with lavender-blue flowers, long bloom, and strong drought tolerance once established.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Choose a site with open airflow and avoid very rich or wet ground.",
      "Space plants enough so mounds can broaden naturally."
    ],
    maintenance: [
      "Water to establish, then reduce watering once roots are set.",
      "Too much fertilizer or overly rich soil can make stems floppy.",
      "Catmint thrives in sunny borders and low-water plantings."
    ],
    pruning: [
      "Shear lightly after the first bloom flush to encourage fresh foliage and repeat bloom.",
      "Trim out broken or splayed stems as needed through the season.",
      "Cut old growth back in late winter or early spring."
    ],
    winterizing: [
      "Leave the crown lightly protected by old growth until spring in colder regions.",
      "Avoid heavy wet mulch piled directly on the crown.",
      "Ensure good drainage through winter."
    ]
  },
  {
    commonName: "Lemon Balm",
    slug: "lemon-balm",
    summary: "A fragrant herb with fresh lemony foliage that is easy to grow and harvest in sun to part shade.",
    planting: [
      "Plant in spring in sun to part shade with average well-drained soil.",
      "Use containers or boundaries if you want to control spread.",
      "Space plants where frequent harvesting will be easy."
    ],
    maintenance: [
      "Water regularly while plants establish, then keep soil lightly and evenly moist.",
      "Harvest often because regular cutting keeps foliage fresh and bushy.",
      "Refresh crowded patches by dividing plants every few years."
    ],
    pruning: [
      "Pinch or trim stems often through the growing season.",
      "Cut flower stalks early if you want to focus on leaf production.",
      "Hard-cut leggy midsummer growth for a fresh new flush."
    ],
    winterizing: [
      "Outdoor plants usually die back and return in spring.",
      "Cut old stems down after frost or in late winter.",
      "Mulch lightly in colder climates, especially for young plants."
    ]
  },
  {
    commonName: "Fiddle Leaf Fig",
    slug: "fiddle-leaf-fig",
    summary: "A bold indoor foliage plant that prefers bright light, steady conditions, and careful watering.",
    planting: [
      "Pot in a well-drained indoor mix with strong drainage holes.",
      "Use a container just slightly larger than the root ball rather than an oversized pot.",
      "Place in bright indirect light with some gentle direct light if tolerated."
    ],
    maintenance: [
      "Water thoroughly, then wait until the top layer of mix begins to dry before watering again.",
      "Keep the plant away from sudden cold drafts or frequent relocations.",
      "Rotate the pot occasionally for more balanced growth."
    ],
    pruning: [
      "Prune leggy stems just above a node if you want branching.",
      "Remove damaged leaves cleanly at the stem base.",
      "Wipe leaves periodically so they stay clean and glossy."
    ],
    winterizing: [
      "Reduce watering during slower winter growth.",
      "Keep humidity reasonable and protect from cold glass and heating vents.",
      "Maintain bright light because winter dimness often causes leaf drop."
    ]
  },
  {
    commonName: "Jade Plant",
    slug: "jade-plant",
    summary: "A long-lived succulent houseplant with thick stems and glossy leaves that prefers bright light and dry cycles.",
    planting: [
      "Pot in a cactus or succulent mix with excellent drainage.",
      "Use a stable container because mature jade plants can become top-heavy.",
      "Give bright light and some direct sun once the plant is acclimated."
    ],
    maintenance: [
      "Water thoroughly, then let the mix dry very well before watering again.",
      "Avoid heavy fertilizer and overly large pots.",
      "Bright conditions help keep growth compact and strong."
    ],
    pruning: [
      "Prune stems lightly to shape the plant or encourage branching.",
      "Remove damaged or weak growth cleanly.",
      "Allow cut surfaces to dry before replanting any propagation pieces."
    ],
    winterizing: [
      "Water far less often in winter when growth slows.",
      "Keep the plant away from frost and cold drafts.",
      "Hold in bright light so stems do not stretch."
    ]
  },
  {
    commonName: "Hens and Chicks",
    slug: "hens-and-chicks",
    summary: "A hardy succulent that forms tidy rosettes and offsets in sunny, sharply drained spots.",
    planting: [
      "Plant in spring or early fall in full sun and very fast-draining soil.",
      "Rock gardens, troughs, containers, and gravel beds are ideal settings.",
      "Set rosettes just at the soil surface and avoid burying them too deeply."
    ],
    maintenance: [
      "Water lightly while establishing, then only during prolonged dry periods.",
      "Do not overfeed or grow in soggy rich soil.",
      "Offsets will naturally fill in the space around the original rosette."
    ],
    pruning: [
      "Remove spent mother rosettes after flowering and dying back.",
      "Lift and replant offsets if you want to spread the colony.",
      "Clear away any mushy or damaged rosettes promptly."
    ],
    winterizing: [
      "Good drainage is the main winter protection.",
      "Avoid heavy mulch that traps moisture around the rosettes.",
      "Container plantings should stay on the dry side in winter."
    ]
  },
  {
    commonName: "Coleus",
    slug: "coleus",
    summary: "A colorful foliage plant grown for dramatic leaf patterns in containers, beds, and shaded borders.",
    planting: [
      "Plant after frost once nights are warm in part shade to filtered light.",
      "Use rich, well-drained soil or a quality container mix.",
      "Pinch young plants early if you want fuller, bushier growth."
    ],
    maintenance: [
      "Keep soil evenly moist, especially in containers during warm weather.",
      "Feed lightly through the growing season to support fresh foliage.",
      "Protect plants from harsh midday sun unless the variety is known to take more sun."
    ],
    pruning: [
      "Pinch tips often to keep plants dense and branchy.",
      "Remove flower spikes if you want the plant to keep focusing on foliage.",
      "Trim leggy stems back to leaf nodes to refresh the shape."
    ],
    winterizing: [
      "Coleus is frost tender and usually grown as a warm-season annual outdoors.",
      "Bring favorite plants indoors before cold weather if you want to hold them over.",
      "Keep overwintered plants warm, bright, and lightly moist."
    ]
  },
  {
    commonName: "Aster",
    slug: "aster",
    summary: "A late-season perennial that brings fall color and valuable nectar for pollinators.",
    planting: [
      "Plant in spring or early fall in full sun and reasonably well-drained soil.",
      "Give plants enough space so air can move between mature clumps.",
      "Use compost when planting if the soil is thin or worn out."
    ],
    maintenance: [
      "Water during establishment and during long dry spells, especially in late summer before bloom.",
      "Mulch lightly to keep roots evenly moist and reduce weed pressure.",
      "Asters appreciate open airflow to help limit mildew issues."
    ],
    pruning: [
      "Pinch stems once or twice in early summer if you want shorter, bushier plants.",
      "Cut back spent bloom stems after flowering or leave some for fall interest.",
      "Divide crowded clumps every few years to keep flowering strong."
    ],
    winterizing: [
      "Cut stems down after frost or leave some structure until late winter.",
      "Use a light mulch in colder climates for newer plantings.",
      "Remove diseased foliage and debris from around the crown."
    ]
  },
  {
    commonName: "Begonia",
    slug: "begonia",
    summary: "A versatile bedding and container plant that thrives with steady moisture and bright shade or gentle sun.",
    planting: [
      "Plant after frost in part shade or bright filtered light.",
      "Use fertile, well-drained soil in beds or a moisture-retentive potting mix in containers.",
      "Space plants so leaves can dry and airflow stays decent."
    ],
    maintenance: [
      "Keep soil evenly moist but never waterlogged.",
      "Feed container begonias lightly through the season for steady growth and bloom.",
      "Avoid harsh drying sun unless you are growing a sun-tolerant wax begonia type."
    ],
    pruning: [
      "Remove spent blooms and damaged leaves to keep plants fresh.",
      "Pinch back leggy stems lightly if the plant stretches.",
      "Trim ragged growth to encourage a tidier flush."
    ],
    winterizing: [
      "Most bedding begonias are treated as annuals outdoors.",
      "Bring favored container plants under cover before frost if you want to overwinter them.",
      "Keep overwintered plants warm and reduce watering as growth slows."
    ]
  },
  {
    commonName: "Cosmos",
    slug: "cosmos",
    summary: "An airy annual flower that blooms freely in sun and is especially useful in cutting and pollinator gardens.",
    planting: [
      "Direct sow or transplant after frost in full sun.",
      "Use average to lean, well-drained soil rather than overly rich ground.",
      "Space plants so stems can sway with good airflow and sunlight."
    ],
    maintenance: [
      "Water while establishing, then keep watering moderate and not excessive.",
      "Avoid heavy feeding because rich soil can produce floppy growth and fewer flowers.",
      "Cosmos handles summer heat well once it is growing strongly."
    ],
    pruning: [
      "Deadhead or cut flowers often to keep bloom going.",
      "Pinch young plants to encourage branching if you want more stems.",
      "Trim tall stems lightly if they become wild or fall over."
    ],
    winterizing: [
      "Cosmos is a warm-season annual and ends with frost.",
      "Leave some seed heads if you want self-sowing or seed collection.",
      "Remove spent plants once cold weather finishes the display."
    ]
  },
  {
    commonName: "Dianthus",
    slug: "dianthus",
    summary: "A fragrant cool-season flower with tidy mounds and bright blooms for edges, containers, and cottage beds.",
    planting: [
      "Plant in spring or early fall in full sun and sharply drained soil.",
      "Avoid wet heavy soil because crowns prefer a drier, airy setting.",
      "Space plants enough to keep the foliage mound from staying crowded."
    ],
    maintenance: [
      "Water during establishment, then water moderately and avoid soggy conditions.",
      "Feed lightly if needed, but do not force lush soft growth.",
      "Good airflow helps keep foliage healthy."
    ],
    pruning: [
      "Deadhead to extend blooming and keep plants tidy.",
      "Shear lightly after the main bloom flush to refresh the mound.",
      "Trim off winter-damaged growth once spring growth begins."
    ],
    winterizing: [
      "Use only light mulch, especially in wetter climates.",
      "Keep the crown clear of heavy damp debris through winter.",
      "Sharp drainage is more important than heavy protection."
    ]
  },
  {
    commonName: "Hellebore",
    slug: "hellebore",
    summary: "A prized shade perennial that blooms in late winter to early spring and keeps handsome evergreen foliage.",
    planting: [
      "Plant in spring or fall in part shade to shade with rich well-drained soil.",
      "Choose a sheltered site where the plant can remain undisturbed for years.",
      "Amend soil with compost because hellebores like a humus-rich root zone."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment and dry spells.",
      "Top-dress with compost annually rather than overfeeding.",
      "Protect from harsh summer dryness in very exposed sites."
    ],
    pruning: [
      "Remove old tattered leaves in late winter before flowers fully emerge.",
      "Cut damaged foliage cleanly at the base.",
      "Leave healthy new foliage in place after bloom for the rest of the season."
    ],
    winterizing: [
      "Hellebores are naturally suited to cold seasons and usually need little extra help.",
      "Use a light mulch if needed, but do not bury the crown.",
      "Keep old diseased foliage cleaned away before the new season starts."
    ]
  },
  {
    commonName: "Hibiscus",
    slug: "hibiscus",
    summary: "A bold flowering shrub or patio plant that loves warmth, rich soil, and regular moisture for heavy bloom.",
    planting: [
      "Plant in warm weather in full sun and fertile, well-drained soil.",
      "Choose a site with heat and shelter from strong drying wind.",
      "Container-grown hibiscus needs a roomy pot with excellent drainage."
    ],
    maintenance: [
      "Water consistently because hibiscus resents drying out during active growth.",
      "Feed regularly during the bloom season, especially in containers.",
      "Keep the plant warm and bright for the strongest flowering."
    ],
    pruning: [
      "Prune lightly in spring to shape and encourage branching.",
      "Remove dead or weak stems and spent blooms as needed.",
      "Trim container plants to maintain a balanced shape."
    ],
    winterizing: [
      "Tropical hibiscus must be protected from frost.",
      "Move containers indoors before cold nights arrive.",
      "Reduce watering slightly in winter but keep the plant bright and warm."
    ]
  },
  {
    commonName: "Lobelia",
    slug: "lobelia",
    summary: "A cool-toned bedding and container annual with trailing or mounding growth that prefers steady moisture.",
    planting: [
      "Plant in spring in sun to part shade depending on climate.",
      "Use rich, moisture-retentive soil in beds or containers.",
      "Lobelia is especially useful near edges where the flowers can spill slightly."
    ],
    maintenance: [
      "Keep soil evenly moist because lobelia fades quickly if allowed to dry out.",
      "Feed container plants lightly during the season to keep bloom going.",
      "Protect from harsh summer heat in hotter climates."
    ],
    pruning: [
      "Trim lightly if plants become straggly or pause in bloom.",
      "Shear back tired growth midsummer to encourage a fresh flush.",
      "Remove dead stems and spent flowers if the planting looks messy."
    ],
    winterizing: [
      "Lobelia is commonly grown as an annual and removed after frost.",
      "In milder climates, cool-season growth may continue with light protection.",
      "Replace plants once hard cold or extreme heat ends performance."
    ]
  },
  {
    commonName: "Phlox",
    slug: "phlox",
    summary: "A showy summer perennial for sunny borders that brings fragrance, pollinators, and strong cottage-garden color.",
    planting: [
      "Plant in spring or early fall in full sun and rich soil.",
      "Choose a spot with airflow because Phlox benefits from space and open conditions.",
      "Use compost in the planting hole if the bed needs more organic matter."
    ],
    maintenance: [
      "Keep soil evenly moist, especially in summer heat.",
      "Mulch lightly to conserve moisture and reduce splashing on leaves.",
      "Water at the base where possible to help reduce mildew issues."
    ],
    pruning: [
      "Deadhead to keep the planting cleaner and encourage extended flowering.",
      "Thin some stems early if you want more airflow and stronger mildew resistance.",
      "Cut stems back after flowering or leave them until late winter if preferred."
    ],
    winterizing: [
      "Cut down old stems and clear debris if disease pressure has been an issue.",
      "Mulch lightly in colder regions.",
      "Keep the crown from remaining wet under dense winter debris."
    ]
  },
  {
    commonName: "Snapdragon",
    slug: "snapdragon",
    summary: "A vertical cool-season annual that adds strong spring and early summer color to borders and containers.",
    planting: [
      "Plant in spring or fall during cool weather in full sun to light shade.",
      "Use fertile well-drained soil and give taller types room for airflow.",
      "Snapdragons appreciate cooler temperatures more than intense midsummer heat."
    ],
    maintenance: [
      "Water regularly but do not keep the soil soggy.",
      "Feed lightly in containers or heavily blooming beds.",
      "Support taller varieties if wind exposure is high."
    ],
    pruning: [
      "Deadhead spent spikes to encourage continued flowering.",
      "Trim plants lightly after the first big bloom wave for a second flush.",
      "Remove damaged stems promptly to keep the plant upright and clean."
    ],
    winterizing: [
      "In mild climates, snapdragons can survive cool winters with light protection.",
      "Use a light mulch around young plants if frost is expected.",
      "Replace once hard heat or severe freeze ends the display."
    ]
  },
  {
    commonName: "Bachelor Button",
    slug: "bachelor-button",
    summary: "A simple, airy annual flower that is easy to sow and especially useful in cottage and cutting gardens.",
    planting: [
      "Direct sow in spring in full sun and well-drained soil.",
      "Bachelor Button prefers average to lean soil rather than very rich beds.",
      "Space seedlings so stems have airflow and stay upright."
    ],
    maintenance: [
      "Water while young, then only moderately once plants are established.",
      "Too much fertilizer can reduce flower production and make plants floppy.",
      "These plants are best in open sunny conditions."
    ],
    pruning: [
      "Deadhead or cut flowers often to keep blooms coming.",
      "Trim tired stems lightly if the planting becomes ragged.",
      "Leave some seed heads if you want the patch to reseed."
    ],
    winterizing: [
      "Bachelor Button is usually grown as an annual and removed after frost.",
      "Allow some seed to drop if you want volunteer seedlings next season.",
      "Pull spent stems once the display has finished."
    ]
  },
  {
    commonName: "Calendula",
    slug: "calendula",
    summary: "A cool-season flowering annual with bright daisy-like blooms that handles spring and mild fall weather well.",
    planting: [
      "Sow or transplant in cool weather in full sun to light shade.",
      "Use average well-drained soil and avoid overcrowding.",
      "Calendula is ideal for spring beds, edging, and cool-season containers."
    ],
    maintenance: [
      "Keep soil lightly and evenly moist, especially in containers.",
      "Calendula performs best in cooler temperatures and can pause in extreme heat.",
      "Feed lightly only if the soil is poor."
    ],
    pruning: [
      "Deadhead regularly for longer flowering.",
      "Trim tired stems lightly if plants become lanky.",
      "Remove faded flower stalks before heavy seed set if you want a neater display."
    ],
    winterizing: [
      "In mild climates, calendula can flower through much of winter.",
      "Use light frost protection on young plants if needed.",
      "Replace once severe heat or hard freeze ends performance."
    ]
  },
  {
    commonName: "Camassia",
    slug: "camassia",
    summary: "A spring-flowering bulb with elegant blue flower spikes for wetter meadow-style or naturalized garden areas.",
    planting: [
      "Plant bulbs in fall in full sun to part shade.",
      "Use moisture-retentive but not stagnant soil because Camassia tolerates spring moisture better than many bulbs.",
      "Plant in groups or drifts for the strongest visual impact."
    ],
    maintenance: [
      "Water after planting if autumn is dry, then let seasonal rain do most of the work.",
      "Camassia appreciates spring moisture during active growth.",
      "Feed lightly with compost if the site is nutrient poor."
    ],
    pruning: [
      "Remove spent flower stalks after bloom if desired.",
      "Leave foliage until it yellows naturally to recharge the bulbs.",
      "Divide crowded clumps after foliage dies back if bloom declines."
    ],
    winterizing: [
      "Bulbs overwinter in the ground and usually need little extra care.",
      "Use a light mulch in colder exposed areas after the soil cools.",
      "Avoid bone-dry conditions during active spring growth but ensure winter stagnation is not a problem."
    ]
  },
  {
    commonName: "Candytuft",
    slug: "candytuft",
    summary: "A low evergreen or semi-evergreen flowering perennial for sunny edges, rock gardens, and neat spring color.",
    planting: [
      "Plant in spring or early fall in full sun and very well-drained soil.",
      "Candytuft works especially well along walls, borders, and gravelly edges.",
      "Space plants so mounds can spread without crowding."
    ],
    maintenance: [
      "Water during establishment, then keep the planting on the drier side.",
      "Avoid wet heavy soil because roots and crowns resent staying soggy.",
      "Little fertilizer is needed in average garden soil."
    ],
    pruning: [
      "Shear lightly after flowering to keep the mound compact and neat.",
      "Remove winter-damaged tips once new growth starts.",
      "Avoid cutting too deeply into old woody stems."
    ],
    winterizing: [
      "Sharp drainage is the most important winter protection.",
      "Use only a light mulch if needed in colder regions.",
      "Keep wet debris from matting over the crown."
    ]
  },
  {
    commonName: "Celosia",
    slug: "celosia",
    summary: "A heat-loving annual grown for bold upright or crested flower forms and strong summer color.",
    planting: [
      "Plant after frost in full sun and warm, well-drained soil.",
      "Celosia prefers true summer warmth and does not like cold starts.",
      "Use it in sunny beds or containers where the vivid flower shapes can stand out."
    ],
    maintenance: [
      "Keep soil evenly moist while plants establish, then water moderately.",
      "Feed container-grown plants lightly through the season.",
      "Strong sun and warm temperatures give the best color and performance."
    ],
    pruning: [
      "Deadhead spent blooms if you want a cleaner look and more fresh flower spikes.",
      "Remove broken stems promptly because the plant is grown mainly for display quality.",
      "Trim lightly if needed, but avoid overcutting compact varieties."
    ],
    winterizing: [
      "Celosia is a warm-season annual and ends with frost.",
      "Remove faded plants once cold weather arrives.",
      "Save seed from open-pollinated forms if desired."
    ]
  },
  {
    commonName: "Gaura",
    slug: "gaura",
    summary: "A light, airy perennial with dancing white or pink flowers that performs beautifully in sunny low-water plantings.",
    planting: [
      "Plant in spring in full sun and well-drained to sharply drained soil.",
      "Gaura prefers open, warm sites and does not want heavy wet ground.",
      "Space plants enough so their airy stems can move without crowding."
    ],
    maintenance: [
      "Water while establishing, then water sparingly once the plant is rooted.",
      "Avoid overfeeding because too much fertility can weaken the natural habit.",
      "Gaura thrives in heat and dry spells once mature."
    ],
    pruning: [
      "Trim back by about one-third if the plant becomes floppy or tired midsummer.",
      "Remove broken or spent stems to keep the clump fresh.",
      "Cut old stems down in late winter or early spring."
    ],
    winterizing: [
      "Leave some top growth in place through winter to protect the crown.",
      "Ensure excellent drainage and avoid wet mulch over the base.",
      "Cut back once spring growth resumes."
    ]
  },
  {
    commonName: "Gerbera Daisy",
    slug: "gerbera-daisy",
    summary: "A bright daisy-like flowering plant valued for bold cut flowers, containers, and cheerful seasonal color.",
    planting: [
      "Plant in warm weather in full sun to light afternoon shade.",
      "Use rich, sharply drained soil or a high-quality container mix.",
      "Set crowns slightly above the soil line so they do not stay damp."
    ],
    maintenance: [
      "Water regularly, but let the surface dry slightly between soakings.",
      "Feed lightly but steadily during the bloom season, especially in pots.",
      "Protect from staying wet at the crown to reduce rot problems."
    ],
    pruning: [
      "Remove spent flowers by taking the full stem down to the base.",
      "Trim off damaged leaves to keep the crown open and clean.",
      "A light cleanup through the season keeps blooming stronger."
    ],
    winterizing: [
      "In colder climates, Gerbera Daisy is often treated as an annual or protected in containers.",
      "Keep overwintered plants bright, cool, and only lightly moist.",
      "Protect the crown from frost and prolonged winter wet."
    ]
  },
  {
    commonName: "Globe Thistle",
    slug: "globe-thistle",
    summary: "A drought-tolerant perennial with striking blue globe flowers and strong architectural structure.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Choose a bright open site because Globe Thistle resents crowding and excess fertility.",
      "Average to lean soil is usually ideal."
    ],
    maintenance: [
      "Water while establishing, then only during prolonged drought.",
      "Avoid rich soil and heavy fertilizer because stems can become weaker.",
      "This plant thrives in hot, open, dry gardens."
    ],
    pruning: [
      "Deadhead if you want to limit self-seeding or clean up the look.",
      "Leave some flower heads for dried arrangements or structure if desired.",
      "Cut old stems back in late winter or early spring."
    ],
    winterizing: [
      "Good drainage is the key winter protection.",
      "Leave some stems in place until spring if you like winter texture.",
      "Do not bury the crown under heavy wet mulch."
    ]
  },
  {
    commonName: "Lupine",
    slug: "lupine",
    summary: "A striking spired perennial for cooler climates that prefers sun, airflow, and relatively lean soil.",
    planting: [
      "Plant in spring or early fall in full sun with well-drained soil.",
      "Lupine often performs best in cooler summer regions rather than intense heat.",
      "Avoid constantly wet or overly rich ground."
    ],
    maintenance: [
      "Water during establishment and in dry spells, but do not keep the soil saturated.",
      "Little feeding is needed in average soil.",
      "Give lupines airflow because humid crowding can reduce vigor."
    ],
    pruning: [
      "Deadhead spent spikes to encourage a tidier plant and occasional repeat bloom.",
      "Remove damaged foliage or disease-prone stems promptly.",
      "Cut old stems back after bloom if the plant declines in summer heat."
    ],
    winterizing: [
      "Use light mulch in colder regions, especially for younger plants.",
      "Ensure the crown does not stay buried under soggy winter debris.",
      "Leave the root zone undisturbed because lupines dislike frequent moving."
    ]
  },
  {
    commonName: "Nasturtium",
    slug: "nasturtium",
    summary: "A bright edible annual with trailing or mounding growth that excels in sun and relatively lean soil.",
    planting: [
      "Direct sow after frost in full sun or light afternoon shade.",
      "Use well-drained, not overly rich soil because too much fertility gives more leaves than flowers.",
      "Nasturtiums are excellent for edges, containers, and spilling from raised beds."
    ],
    maintenance: [
      "Water moderately and let the soil dry slightly between soakings once established.",
      "Do not overfeed if you want the strongest flowering.",
      "Plants often do best when given room to trail naturally."
    ],
    pruning: [
      "Trim long wandering stems if they outgrow the planting area.",
      "Deadheading is optional, but cleanup can keep plants tidier.",
      "Harvest leaves and flowers often if you are growing them for edible use."
    ],
    winterizing: [
      "Nasturtium is a warm-season annual and ends with frost.",
      "Save seed if you want to replant next season.",
      "Pull spent plants once cold weather finishes the display."
    ]
  },
  {
    commonName: "Abelia",
    slug: "abelia",
    summary: "A graceful flowering shrub with arching growth, glossy foliage, and a long season of soft bloom.",
    planting: [
      "Plant in spring or early fall in full sun to light shade.",
      "Use well-drained soil and space by mature width so the arching form can develop naturally.",
      "Water deeply after planting and mulch lightly around the root zone."
    ],
    maintenance: [
      "Keep soil evenly moist through the first growing season, then water during extended dry periods.",
      "Abelia usually needs very little fertilizer beyond compost in spring.",
      "It performs best in bright light with open airflow."
    ],
    pruning: [
      "Prune lightly in late winter or early spring to shape and renew growth.",
      "Thin a few older stems at the base if the shrub becomes dense.",
      "Avoid constant tight shearing if you want the natural arching habit."
    ],
    winterizing: [
      "Established plants need little winter care in suitable climates.",
      "Water before freeze-up if autumn has been dry.",
      "Use a light mulch around the roots for newer plantings."
    ]
  },
  {
    commonName: "Barberry",
    slug: "barberry",
    summary: "A tough shrub valued for colorful foliage, strong form, and tolerance of difficult sunny sites.",
    planting: [
      "Plant in spring or early fall in full sun for the strongest foliage color.",
      "Use average well-drained soil and allow room for thorns and mature width.",
      "Barberry adapts to poorer soils better than many shrubs."
    ],
    maintenance: [
      "Water during establishment, then only in prolonged drought.",
      "This shrub typically needs little feeding and tolerates heat well.",
      "Use gloves during care because stems are thorny."
    ],
    pruning: [
      "Prune in late winter or after new growth begins if shaping is needed.",
      "Thin old or awkward stems selectively rather than over-shearing.",
      "Remove unwanted suckers or seedlings if they appear."
    ],
    winterizing: [
      "Barberry is usually very hardy and needs little winter protection.",
      "Mulch lightly around young plants in colder climates.",
      "Water before freeze-up if fall has been unusually dry."
    ]
  },
  {
    commonName: "Beautybush",
    slug: "beautybush",
    summary: "A large spring-flowering shrub with an arching habit and masses of soft pink blossoms.",
    planting: [
      "Plant in spring or early fall in full sun for the best bloom.",
      "Give the shrub enough space because mature growth becomes broad and arching.",
      "Use average well-drained soil and mulch lightly after planting."
    ],
    maintenance: [
      "Water regularly in the first season, then only during dry stretches.",
      "Beautybush is generally easy and adaptable once established.",
      "Little extra feeding is needed beyond a spring compost top-dress."
    ],
    pruning: [
      "Prune right after flowering because blooms form on older wood.",
      "Remove a few oldest stems at ground level every few years to renew the shrub.",
      "Shape lightly and avoid heavy shearing that ruins the natural form."
    ],
    winterizing: [
      "Established plants are hardy and need little special winter care.",
      "Mulch new plantings lightly in colder regions.",
      "Water before freeze-up if autumn has been especially dry."
    ]
  },
  {
    commonName: "Bottlebrush",
    slug: "bottlebrush",
    summary: "A sun-loving evergreen shrub with striking red flowers and strong performance in warm, well-drained gardens.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Warm sheltered sites suit Bottlebrush best, especially near walls or patios.",
      "Container culture works well where winters are too cold for in-ground growth."
    ],
    maintenance: [
      "Water while establishing, then reduce watering once the shrub roots in.",
      "This plant performs best in heat and resents cold soggy conditions.",
      "Feed lightly only if growth is weak."
    ],
    pruning: [
      "Prune lightly after flowering to shape and remove spent bloom stems.",
      "Avoid heavy pruning into old wood unless needed for renewal.",
      "Thin awkward branches to keep the canopy airy."
    ],
    winterizing: [
      "Protect from frost in colder climates or grow in containers you can move.",
      "Keep winter soil on the drier side while still preventing severe drought stress.",
      "Mulch the roots lightly but do not trap moisture around the crown."
    ]
  },
  {
    commonName: "Forsythia",
    slug: "forsythia",
    summary: "A classic early-spring shrub known for bright yellow flowers before much of the garden wakes up.",
    planting: [
      "Plant in spring or early fall in full sun for the strongest bloom display.",
      "Use average well-drained soil and allow enough room for a broad mature shape.",
      "Forsythia is easy to establish and forgiving of many soil types."
    ],
    maintenance: [
      "Water regularly during the first season, then only during drought.",
      "This shrub usually needs little fertilizer beyond compost in spring.",
      "Open sunny exposure helps keep stems flowering well."
    ],
    pruning: [
      "Prune immediately after flowering because next year's buds form soon after bloom.",
      "Remove a few oldest stems at the base to keep the shrub vigorous.",
      "Do not shear in late summer or fall if you want spring flowers."
    ],
    winterizing: [
      "Forsythia is hardy and usually needs almost no winter care.",
      "Use a light mulch around young roots in colder zones.",
      "Water before the ground freezes if fall has been very dry."
    ]
  },
  {
    commonName: "Gardenia",
    slug: "gardenia",
    summary: "A fragrant evergreen shrub that rewards careful siting, moisture, and acidic soil with beautiful white blooms.",
    planting: [
      "Plant in spring in part shade or gentle morning sun with protection from harsh afternoon heat.",
      "Use rich acidic soil with excellent drainage and steady organic matter.",
      "Set the root ball slightly high rather than too deep."
    ],
    maintenance: [
      "Keep soil evenly moist but not waterlogged.",
      "Gardenia benefits from mulch and acid-loving plant care in suitable climates.",
      "Avoid stress from drought, cold wind, or abrupt environmental changes."
    ],
    pruning: [
      "Prune lightly after flowering if shaping is needed.",
      "Remove dead or weak stems and any damaged growth promptly.",
      "Avoid frequent hard pruning because the shrub looks best with a natural rounded form."
    ],
    winterizing: [
      "Protect roots with mulch, but keep it away from the main stems.",
      "Shelter from strong cold wind and frost where the plant is marginally hardy.",
      "Container plants should be protected or moved before hard freezes."
    ]
  },
  {
    commonName: "Inkberry",
    slug: "inkberry",
    summary: "A useful native evergreen holly shrub for privacy, moisture-tolerant sites, and dependable year-round structure.",
    planting: [
      "Plant in spring or early fall in sun to part shade.",
      "Use organic-rich soil with steady moisture and decent drainage.",
      "Space shrubs according to the mature hedge or specimen size you want."
    ],
    maintenance: [
      "Water during establishment and through dry periods because Inkberry prefers even moisture.",
      "Mulch the root zone to keep roots cool and moist.",
      "This shrub usually needs only light feeding in spring if growth is weak."
    ],
    pruning: [
      "Prune lightly in late winter or early spring to shape.",
      "Thin older interior stems if the shrub becomes too dense.",
      "Avoid excessive shearing if you want a softer natural look."
    ],
    winterizing: [
      "Water well before freeze-up since evergreens lose moisture in winter.",
      "Mulch the roots lightly, keeping stems clear.",
      "Protect young plants from drying wind if the site is exposed."
    ]
  },
  {
    commonName: "Oleander",
    slug: "oleander",
    summary: "A heat-tolerant evergreen shrub with long flowering performance in sunny, warm, low-water landscapes.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Choose a warm, open site where Oleander has room to develop without crowding.",
      "Use caution in placement because all parts of the plant are toxic."
    ],
    maintenance: [
      "Water during establishment, then only moderately once rooted.",
      "Oleander tolerates heat, dry air, and difficult conditions very well.",
      "Little feeding is usually needed beyond a light spring compost or balanced feed."
    ],
    pruning: [
      "Prune after flowering or in late winter to shape and control size.",
      "Remove dead or damaged stems promptly using gloves.",
      "Thin older wood selectively instead of repeatedly shearing the outside only."
    ],
    winterizing: [
      "Protect from frost in colder zones or keep as a container plant.",
      "Use a light mulch at the roots if grown near the edge of its hardiness range.",
      "Move container plants to shelter before hard freezes."
    ]
  },
  {
    commonName: "Pieris",
    slug: "pieris",
    summary: "An elegant evergreen shrub for acidic shade gardens, known for spring bloom and colorful new growth.",
    planting: [
      "Plant in spring or early fall in part shade and acidic, organic-rich soil.",
      "Choose a sheltered site with protection from harsh sun and drying wind.",
      "Set the root ball slightly high and mulch broadly over the shallow roots."
    ],
    maintenance: [
      "Keep soil evenly moist, especially during establishment and hot dry spells.",
      "Use care suited to acid-loving shrubs if feeding is needed.",
      "Pieris performs best when roots stay cool and undisturbed."
    ],
    pruning: [
      "Prune lightly after flowering if shaping is necessary.",
      "Remove dead, crossing, or weak stems selectively.",
      "Avoid heavy pruning because the shrub has a naturally refined form."
    ],
    winterizing: [
      "Protect from drying winter wind and reflected winter sun if exposed.",
      "Water before freeze-up if autumn has been dry.",
      "Maintain mulch over the roots but keep it away from the stems."
    ]
  },
  {
    commonName: "Potentilla",
    slug: "potentilla",
    summary: "A durable flowering shrub for sunny sites, valued for steady bloom and tolerance of tougher conditions.",
    planting: [
      "Plant in spring or early fall in full sun and well-drained soil.",
      "Potentilla handles average to lean soils well and does not need a rich site.",
      "Space shrubs by their mature width so they can keep a tidy rounded shape."
    ],
    maintenance: [
      "Water to establish, then only during prolonged drought.",
      "This shrub needs little fertilizer and tolerates wind and cooler climates well.",
      "Keep the base mulched lightly to reduce weed competition."
    ],
    pruning: [
      "Prune in late winter or early spring to shape and renew growth.",
      "Remove a few older stems at the base if the shrub gets woody.",
      "Light shaping is usually enough to keep it neat."
    ],
    winterizing: [
      "Potentilla is generally very hardy and low maintenance in winter.",
      "Mulch lightly around the roots for young shrubs.",
      "Water before freeze-up if fall has been unusually dry."
    ]
  },
  {
    commonName: "Smoke Bush",
    slug: "smoke-bush",
    summary: "A dramatic shrub prized for colorful foliage, airy flower plumes, and strong fall interest in sunny gardens.",
    planting: [
      "Plant in spring or early fall in full sun for the strongest color and plume development.",
      "Use well-drained soil and give the shrub space to broaden naturally.",
      "Average garden soil is fine as long as drainage is decent."
    ],
    maintenance: [
      "Water during establishment, then only during extended dry spells.",
      "Smoke Bush does best without heavy feeding or overly rich soil.",
      "A sunny open location helps keep growth sturdy and foliage colorful."
    ],
    pruning: [
      "Prune in late winter or early spring if shaping or size control is needed.",
      "Cut back more firmly only if you want larger foliage at the expense of some bloom.",
      "Remove dead or weak stems and thin crowded growth selectively."
    ],
    winterizing: [
      "Established plants are generally low maintenance through winter.",
      "Mulch lightly around younger plants in colder regions.",
      "Water before freeze-up if fall has been unusually dry."
    ]
  },
  {
    commonName: "Summersweet",
    slug: "summersweet",
    summary: "A fragrant native shrub that blooms in summer and handles moisture better than many landscape shrubs.",
    planting: [
      "Plant in spring or fall in part shade to full sun depending on soil moisture.",
      "Use organic-rich soil that stays evenly moist without becoming stagnant.",
      "Summersweet works well in rain gardens, woodland edges, and pollinator borders."
    ],
    maintenance: [
      "Keep soil evenly moist, especially while the shrub establishes.",
      "Mulch with organic matter to conserve moisture and cool the roots.",
      "A light spring compost top-dress is usually enough feeding."
    ],
    pruning: [
      "Prune in late winter or early spring if shaping is needed.",
      "Remove suckers if you want a tighter clump rather than a colony.",
      "Thin older stems occasionally to keep new flowering wood coming."
    ],
    winterizing: [
      "Summersweet is hardy and generally easy through winter.",
      "Maintain mulch over the root zone, keeping stems clear.",
      "Water before freeze-up if autumn has been dry."
    ]
  },
  {
    commonName: "Viburnum",
    slug: "viburnum",
    summary: "A versatile shrub group valued for spring flowers, berries, privacy screening, and dependable landscape structure.",
    planting: [
      "Plant in spring or early fall in full sun to light shade.",
      "Use average to rich, well-drained soil and space by mature size.",
      "Viburnums are useful for hedging, screening, and mixed shrub borders."
    ],
    maintenance: [
      "Water regularly in the first season and during dry summer stretches.",
      "Mulch lightly to reduce weed competition and hold even moisture.",
      "Compost in spring is usually enough feeding for healthy growth."
    ],
    pruning: [
      "Prune after flowering if shaping is needed, especially for spring-blooming types.",
      "Remove dead or crossing wood and thin older stems when the shrub becomes crowded.",
      "Avoid heavy shearing if you want flowers and berries."
    ],
    winterizing: [
      "Established viburnums need little winter care.",
      "Water before freeze-up if the fall season has been unusually dry.",
      "Mulch the root zone lightly around younger plants."
    ]
  },
  {
    commonName: "Weigela",
    slug: "weigela",
    summary: "A flowering shrub with arching spring bloom and colorful foliage options for sunny borders and foundation beds.",
    planting: [
      "Plant in spring or early fall in full sun for the heaviest flowering.",
      "Use well-drained soil and allow room for the mature arching habit.",
      "Weigela is useful in mixed borders, foundations, and lower screening plantings."
    ],
    maintenance: [
      "Water through the first season and during longer dry periods.",
      "This shrub usually needs little fertilizer beyond compost in spring.",
      "Strong sun keeps both bloom and foliage color at their best."
    ],
    pruning: [
      "Prune just after flowering because the best bloom comes on older wood.",
      "Thin a few old stems at the base every few years to renew the plant.",
      "Lightly shape after bloom but avoid late hard pruning."
    ],
    winterizing: [
      "Weigela is generally hardy and low maintenance in winter.",
      "Mulch lightly around newly planted shrubs.",
      "Water before freeze-up if autumn has been very dry."
    ]
  },
  {
    commonName: "Witch Hazel",
    slug: "witch-hazel",
    summary: "A distinctive shrub or small tree known for late-fall or winter bloom and strong multi-season landscape value.",
    planting: [
      "Plant in spring or early fall in sun to part shade.",
      "Use well-drained soil with consistent moisture while the plant establishes.",
      "Give Witch Hazel enough room because it develops a broad branching structure."
    ],
    maintenance: [
      "Water during establishment and during long dry periods.",
      "Mulch lightly to protect the root zone and reduce weed competition.",
      "Little feeding is usually needed beyond compost in spring."
    ],
    pruning: [
      "Prune lightly after flowering or in dormancy if shaping is needed.",
      "Remove crossing or damaged branches selectively.",
      "Take out unwanted basal suckers if they appear."
    ],
    winterizing: [
      "This plant is usually hardy with little winter intervention needed.",
      "Water before freeze-up if autumn has been especially dry.",
      "Protect young plants from mechanical damage and heavy snow loads."
    ]
  },
  {
    commonName: "Aspen",
    slug: "aspen",
    summary: "A cool-climate tree valued for shimmering foliage, pale bark, and striking golden fall color.",
    planting: [
      "Plant in spring or early fall in full sun with room for the root system and canopy.",
      "Aspen performs best in cooler climates rather than hot exposed sites.",
      "Use soil that holds some moisture but still drains reasonably well."
    ],
    maintenance: [
      "Water regularly during establishment and during dry spells.",
      "Mulch the root zone to help keep soil cool and evenly moist.",
      "Avoid damage to trunks and shallow roots from mowing equipment."
    ],
    pruning: [
      "Prune in dormancy only for dead, broken, or crossing branches.",
      "Remove suckers if you do not want a spreading colony.",
      "Avoid unnecessary heavy cutting that spoils the natural form."
    ],
    winterizing: [
      "Aspen is adapted to cold climates and usually needs little winter protection.",
      "Water before freeze-up if autumn has been very dry.",
      "Protect young trunks from rubbing or animal damage if needed."
    ]
  },
  {
    commonName: "Birch",
    slug: "birch",
    summary: "A graceful ornamental tree with attractive bark and light canopy, best suited to soils that do not dry out excessively.",
    planting: [
      "Plant in spring or early fall in full sun to very light shade.",
      "Use moisture-retentive soil and avoid hot exposed sites where roots bake.",
      "Mulch broadly around the root zone to help keep roots cool."
    ],
    maintenance: [
      "Water deeply during establishment and during prolonged drought.",
      "Birch appreciates consistent moisture more than many other landscape trees.",
      "Protect trunks from physical damage and avoid soil compaction at the base."
    ],
    pruning: [
      "Prune lightly in late summer or dormancy depending on local pest pressure and sap flow concerns.",
      "Remove dead or crossing branches and maintain the natural structure.",
      "Avoid excessive spring pruning during heavy sap flow."
    ],
    winterizing: [
      "Mulch the root zone lightly before winter.",
      "Water before freeze-up if autumn has been dry.",
      "Protect younger trunks if sunscald or mechanical damage is a concern."
    ]
  },
  {
    commonName: "Catalpa",
    slug: "catalpa",
    summary: "A bold shade tree with large leaves and showy spring flowers, useful where a broad ornamental canopy is wanted.",
    planting: [
      "Plant in spring or early fall in full sun and reasonably well-drained soil.",
      "Give the tree plenty of room because the canopy and large leaves become substantial.",
      "Catalpa tolerates a range of soils, including heavier ground."
    ],
    maintenance: [
      "Water during establishment and during severe drought.",
      "Catalpa is usually adaptable once established and needs little feeding.",
      "Keep the root zone clear of heavy competition from turf and weeds."
    ],
    pruning: [
      "Prune in dormancy to shape the young tree and remove weak branch structure.",
      "Remove dead or damaged wood as needed.",
      "Maintain a clean framework while the tree is still relatively young."
    ],
    winterizing: [
      "Established Catalpa trees are generally low maintenance in winter.",
      "Water before freeze-up if autumn has been dry.",
      "Protect young trunks from mechanical damage if needed."
    ]
  },
  {
    commonName: "Crepe Myrtle Tree",
    slug: "crepe-myrtle-tree",
    summary: "A tree-form crepe myrtle grown for summer bloom, attractive bark, and long warm-season color.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Choose a warm open site because Crepe Myrtle blooms best with heat and strong light.",
      "Allow enough room for the mature canopy rather than forcing severe pruning later."
    ],
    maintenance: [
      "Water regularly through the first growing season, then during longer droughts.",
      "Feed lightly in spring if needed, especially in lean soils.",
      "Strong sun and good airflow support the best flowering and health."
    ],
    pruning: [
      "Prune in late winter to remove crossing branches, suckers, and weak interior growth.",
      "Avoid severe topping or 'crape murder' because it ruins the natural form.",
      "Maintain a clean tree structure with light selective cuts."
    ],
    winterizing: [
      "In colder edges of its range, mulch the root zone lightly before winter.",
      "Protect young trunks from severe cold where needed.",
      "Water before freeze-up if fall has been dry."
    ]
  },
  {
    commonName: "Eastern Redbud",
    slug: "eastern-redbud",
    summary: "A beloved spring-flowering small tree with vivid pink bloom and a graceful branching habit.",
    planting: [
      "Plant in spring or early fall in full sun to light shade.",
      "Use well-drained soil and give the tree room to develop its natural canopy.",
      "Morning sun with some protection from harsh afternoon heat works well in hotter areas."
    ],
    maintenance: [
      "Water regularly during establishment and during dry spells.",
      "Mulch around the root zone to protect shallow roots and reduce stress.",
      "Use compost or a mild tree fertilizer only if growth seems weak."
    ],
    pruning: [
      "Prune in dormancy to remove dead, damaged, or awkward branches.",
      "Guide the young framework early if you want a more tree-like structure.",
      "Avoid unnecessary heavy pruning because the natural habit is part of its charm."
    ],
    winterizing: [
      "Mulch lightly before winter and keep it away from the trunk.",
      "Water before freeze-up if autumn has been unusually dry.",
      "Protect younger trunks from rubbing, wildlife damage, or sunscald if needed."
    ]
  },
  {
    commonName: "Maiden Grass",
    slug: "maiden-grass",
    summary: "A tall ornamental grass valued for graceful blades, late-season plumes, and strong garden structure.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Give Maiden Grass room because mature clumps become broad and tall.",
      "Use it as a screen, backdrop, or architectural accent in sunny beds."
    ],
    maintenance: [
      "Water regularly during establishment, then only during prolonged drought.",
      "This grass needs little fertilizer and performs well in average soils.",
      "Full sun keeps the clump dense and upright."
    ],
    pruning: [
      "Leave the foliage standing through winter for structure.",
      "Cut the clump back hard in late winter or very early spring before new growth starts.",
      "Divide oversized clumps in spring if vigor declines or the center opens."
    ],
    winterizing: [
      "Standing foliage helps protect the crown and adds winter interest.",
      "Mulch lightly around younger plantings in colder zones.",
      "Avoid soggy crown conditions through winter."
    ]
  },
  {
    commonName: "Sweet Potato Vine",
    slug: "sweet-potato-vine",
    summary: "A fast-growing ornamental vine with bold foliage used to spill from containers and fill summer beds.",
    planting: [
      "Plant after frost in warm weather in full sun to part shade.",
      "Use rich, well-drained soil or a quality container mix.",
      "Give trailing stems room to spill or spread because growth is vigorous."
    ],
    maintenance: [
      "Keep soil evenly moist, especially in containers during hot weather.",
      "Feed lightly through the growing season if foliage color starts to fade.",
      "Pinch or redirect long vines to keep the planting balanced."
    ],
    pruning: [
      "Trim runners as needed to control spread and encourage fullness.",
      "Pinch growing tips to keep the plant bushier near the center.",
      "Remove any damaged or sparse stems to refresh the display."
    ],
    winterizing: [
      "Sweet Potato Vine is usually grown as an annual outdoors.",
      "Protect or lift tubers only if you specifically want to carry special forms over.",
      "Remove vines after frost once cold weather collapses the foliage."
    ]
  },
  {
    commonName: "Star Jasmine",
    slug: "star-jasmine",
    summary: "A fragrant evergreen vine that shines on fences, trellises, and warm sheltered walls.",
    planting: [
      "Plant in spring in full sun to part shade with good drainage.",
      "Install a support such as a trellis or fence before vines begin to climb.",
      "Choose a warm, sheltered position for the strongest flowering."
    ],
    maintenance: [
      "Water through the first season and during dry summer periods.",
      "Mulch lightly around the roots to conserve moisture.",
      "Feed modestly in spring if the plant needs a boost."
    ],
    pruning: [
      "Prune after flowering to control size and guide the vine.",
      "Tie in or redirect wandering shoots as the plant grows.",
      "Remove damaged or tangled stems to keep the framework open."
    ],
    winterizing: [
      "Protect from severe cold if planted near the edge of its hardiness range.",
      "Mulch the root zone lightly before winter.",
      "Container plants may need shelter from hard freezes."
    ]
  },
  {
    commonName: "Coral Honeysuckle",
    slug: "coral-honeysuckle",
    summary: "A twining flowering vine prized for hummingbird-friendly blooms and a less invasive habit than some honeysuckles.",
    planting: [
      "Plant in spring or fall in full sun to light shade.",
      "Use well-drained soil and provide a trellis, arbor, or fence for support.",
      "Space the base so the vine has room to branch and climb."
    ],
    maintenance: [
      "Water during establishment and through long dry spells.",
      "A light compost top-dress in spring is usually enough feeding.",
      "This vine is generally adaptable once well rooted."
    ],
    pruning: [
      "Prune after the main bloom flush to shape and guide growth.",
      "Thin tangled stems if the plant becomes overly dense.",
      "Remove winter-damaged growth when spring starts."
    ],
    winterizing: [
      "Mulch lightly around the roots in colder regions.",
      "Water before freeze-up if autumn has been dry.",
      "Secure long stems if strong winter winds tend to whip them around."
    ]
  },
  {
    commonName: "Creeping Jenny",
    slug: "creeping-jenny",
    summary: "A bright chartreuse groundcover or container trailer that spreads quickly in evenly moist conditions.",
    planting: [
      "Plant in spring in sun to part shade depending on climate and moisture.",
      "Use average to rich soil that holds moisture but drains reasonably well.",
      "This plant works especially well at edges, in containers, or as a soft groundcover."
    ],
    maintenance: [
      "Keep soil evenly moist, especially while plants are establishing.",
      "Creeping Jenny can spread quickly, so watch nearby plantings.",
      "Color is often brightest with good light and consistent moisture."
    ],
    pruning: [
      "Trim edges or runners whenever the plant moves beyond its intended area.",
      "Cut back ragged growth to refresh the mat or container cascade.",
      "Lift and replant sections if you want to fill nearby gaps."
    ],
    winterizing: [
      "Protect container plantings from deep freeze if they are exposed.",
      "Mulch lightly in colder climates, especially around newer plants.",
      "Clean up winter-damaged stems in early spring."
    ]
  },
  {
    commonName: "Feather Reed Grass",
    slug: "feather-reed-grass",
    summary: "A vertical clumping ornamental grass with narrow form and reliable upright plumes.",
    planting: [
      "Plant in spring in full sun and average well-drained soil.",
      "Use it where you want strong vertical structure without a wide, floppy footprint.",
      "Space clumps according to the mature width so each plant keeps a clean outline."
    ],
    maintenance: [
      "Water during establishment, then only during drought or extreme heat.",
      "Feather Reed Grass generally needs little feeding in average soil.",
      "It stays most upright in open sunny sites."
    ],
    pruning: [
      "Leave the foliage and plumes standing through winter for structure.",
      "Cut the clump down in late winter or early spring before new growth begins.",
      "Divide older clumps in spring if the center weakens."
    ],
    winterizing: [
      "Standing foliage gives natural winter protection and interest.",
      "Mulch lightly around new plants in colder climates.",
      "Ensure the crown does not stay waterlogged."
    ]
  },
  {
    commonName: "Rubber Plant",
    slug: "rubber-plant",
    summary: "A bold indoor foliage plant with glossy leaves that thrives in bright conditions and steady but not excessive watering.",
    planting: [
      "Pot in a well-drained houseplant mix with good drainage holes.",
      "Use a stable pot because mature stems and foliage can become substantial.",
      "Place in bright indirect light, with some gentle direct sun if the plant is acclimated."
    ],
    maintenance: [
      "Water thoroughly, then let the upper part of the mix dry before watering again.",
      "Wipe leaves occasionally to keep them glossy and dust free.",
      "Avoid cold drafts and sudden environmental changes."
    ],
    pruning: [
      "Prune above a node if you want branching or to reduce height.",
      "Remove damaged leaves and weak shoots cleanly.",
      "Rotate the pot now and then for more balanced growth."
    ],
    winterizing: [
      "Reduce watering slightly during slower winter growth.",
      "Keep the plant away from chilly windows and heating vents.",
      "Maintain bright light to prevent leggy winter growth."
    ]
  },
  {
    commonName: "Swiss Chard",
    slug: "swiss-chard",
    summary: "A productive leafy edible that offers colorful stems and repeated harvest over a long season.",
    planting: [
      "Direct sow or transplant in spring once the soil is workable.",
      "Use fertile, well-drained soil in full sun to light shade.",
      "Succession sow if you want a longer and steadier harvest window."
    ],
    maintenance: [
      "Keep soil evenly moist for tender leaves and steady growth.",
      "Mulch lightly to reduce weed pressure and keep roots cool.",
      "Feed with compost or a balanced vegetable fertilizer if the bed is hungry."
    ],
    pruning: [
      "Harvest outer leaves first and let the center continue growing.",
      "Remove damaged or oversized leaves regularly.",
      "Cut flower stalks if plants start bolting and you want to prolong leaf production."
    ],
    winterizing: [
      "In mild climates, Swiss Chard can continue through much of winter with light protection.",
      "Use row cover or light mulch for cold snaps if you want to extend harvest.",
      "Remove plants once hard freezing finishes the crop."
    ]
  },
  {
    commonName: "Bleeding Heart",
    slug: "bleeding-heart",
    summary: "A romantic spring perennial for part shade with arching stems and pendant heart-shaped flowers.",
    planting: [
      "Plant in spring or early fall in part shade with rich moisture-retentive soil.",
      "Choose a woodland-like setting where roots stay cool and evenly moist.",
      "Use compost when planting to build organic matter."
    ],
    maintenance: [
      "Keep soil evenly moist during active spring growth.",
      "Bleeding Heart often goes dormant in summer heat, so pair it with later-emerging companions.",
      "Mulch lightly to hold moisture and reduce temperature swings."
    ],
    pruning: [
      "Remove spent flower stalks after bloom if desired.",
      "Allow foliage to yellow naturally if the plant is entering dormancy.",
      "Cut back collapsed stems once they have fully finished."
    ],
    winterizing: [
      "Mulch lightly around the crown in colder climates.",
      "Mark the planting area if summer dormancy makes the plant disappear.",
      "Keep heavy wet debris from compacting over the crown through winter."
    ]
  },
  {
    commonName: "Verbascum",
    slug: "verbascum",
    summary: "A tall, sun-loving flowering plant with spires of bloom and excellent tolerance of lean dry soils.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Verbascum performs best in gravelly or lean sites rather than rich heavy beds.",
      "Allow room for upright bloom spikes and basal foliage."
    ],
    maintenance: [
      "Water while establishing, then only occasionally in long dry stretches.",
      "Avoid heavy fertilizer because strong performance usually comes from leaner conditions.",
      "Open sunny sites with airflow help keep the plant sturdy."
    ],
    pruning: [
      "Cut spent flower spikes after bloom if you want a tidier look or possible rebloom.",
      "Leave some spikes if you want seed and natural reseeding.",
      "Remove dead basal foliage as needed."
    ],
    winterizing: [
      "Good drainage is the most important winter protection.",
      "Use a light mulch only if needed in colder sites.",
      "Keep crowns from staying wet under dense winter debris."
    ]
  },
  {
    commonName: "Japanese Stewartia",
    slug: "japanese-stewartia",
    summary: "A refined ornamental tree with camellia-like flowers, layered branching, and standout bark and fall color.",
    planting: [
      "Plant in spring or early fall in full sun to light shade.",
      "Use rich, well-drained soil with steady moisture and good organic content.",
      "Choose a protected site where the tree can develop its elegant branching naturally."
    ],
    maintenance: [
      "Water consistently during establishment and during prolonged dry weather.",
      "Mulch around the root zone to conserve moisture and protect shallow roots.",
      "Avoid harsh, exposed locations where heat or drying wind can stress the tree."
    ],
    pruning: [
      "Prune sparingly in dormancy to remove dead, crossing, or awkward branches.",
      "Maintain the natural layered form rather than cutting heavily.",
      "Remove any damaged wood promptly after storms."
    ],
    winterizing: [
      "Mulch lightly around the root zone before winter, keeping mulch away from the trunk.",
      "Water before freeze-up if autumn has been very dry.",
      "Protect younger trees from mechanical damage and winter wind where needed."
    ]
  },
  {
    commonName: "Olive",
    slug: "olive",
    summary: "A Mediterranean-style evergreen tree valued for silvery foliage, heat tolerance, and distinctive form.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Choose the warmest, brightest site available because olives love heat and airflow.",
      "Raised beds or gravelly sites work well where drainage is questionable."
    ],
    maintenance: [
      "Water during establishment, then let the soil dry somewhat between deep soakings.",
      "Avoid heavy fertilizer because olives prefer leaner conditions.",
      "This tree performs best in bright, open, dry climates."
    ],
    pruning: [
      "Prune lightly in late winter or spring to open the canopy and control shape.",
      "Remove suckers and crossing interior branches.",
      "Maintain a clean framework without over-thinning."
    ],
    winterizing: [
      "Protect from severe cold if planted near the edge of its hardiness range.",
      "Keep soil on the drier side in winter while preventing extreme drought stress.",
      "Container olives may need a bright protected space during hard freezes."
    ]
  },
  {
    commonName: "Paperbark Maple",
    slug: "paperbark-maple",
    summary: "A small ornamental tree admired for cinnamon peeling bark and dependable four-season character.",
    planting: [
      "Plant in spring or early fall in full sun to light shade.",
      "Use well-drained soil with organic matter and even moisture.",
      "Give the tree enough room to show off both bark and branching structure."
    ],
    maintenance: [
      "Water regularly during establishment and during extended dry spells.",
      "Mulch lightly over the root zone to keep the soil cooler and more even.",
      "Paperbark Maple generally needs only gentle feeding, if any."
    ],
    pruning: [
      "Prune lightly in dormancy to remove crossing or damaged branches.",
      "Preserve the natural structure because the bark and branch architecture are major features.",
      "Avoid unnecessary heavy pruning."
    ],
    winterizing: [
      "Water before freeze-up if autumn has been unusually dry.",
      "Use a light mulch ring around younger trees.",
      "Protect trunks from mechanical damage so the bark can develop cleanly."
    ]
  },
  {
    commonName: "River Birch Multi-Stem",
    slug: "river-birch-multi-stem",
    summary: "A multi-stem ornamental birch with handsome bark and a broad natural form for larger landscapes.",
    planting: [
      "Plant in spring or early fall in full sun to light shade.",
      "Use soil that holds moisture reasonably well while still draining.",
      "Allow ample room for the mature multi-stem canopy and root zone."
    ],
    maintenance: [
      "Water consistently during establishment and during long dry spells.",
      "Mulch broadly to help keep the root zone cool and reduce stress.",
      "This tree appreciates moisture more than many ornamental trees."
    ],
    pruning: [
      "Prune lightly in dormancy to remove dead, crossing, or rubbing stems.",
      "Maintain the clean multi-stem framework without over-thinning.",
      "Avoid unnecessary spring pruning during heavy sap flow."
    ],
    winterizing: [
      "Water before freeze-up if the fall season has been dry.",
      "Protect younger trunks from mechanical damage and rubbing.",
      "Use a light mulch ring to insulate the roots in colder climates."
    ]
  },
  {
    commonName: "Sweetbay Magnolia",
    slug: "sweetbay-magnolia",
    summary: "A graceful magnolia with fragrant flowers and a softer, more natural habit than larger southern magnolias.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use evenly moist, well-drained soil with organic matter.",
      "Choose a spot where the tree can show its narrow, elegant form without crowding."
    ],
    maintenance: [
      "Water regularly during establishment and during dry summer periods.",
      "Mulch the root zone to conserve moisture and protect the shallow roots.",
      "Sweetbay Magnolia usually needs only light feeding if growth is weak."
    ],
    pruning: [
      "Prune only lightly to remove damaged or awkward branches.",
      "Shape when young if you want a more tree-like structure rather than a large shrub form.",
      "Avoid heavy pruning that spoils the natural habit."
    ],
    winterizing: [
      "Water before freeze-up if autumn has been dry.",
      "Use a light mulch ring around younger trees.",
      "Protect newly planted specimens from severe winter wind if exposed."
    ]
  },
  {
    commonName: "Bearberry",
    slug: "bearberry",
    summary: "A hardy evergreen groundcover for sunny dry slopes, sandy soils, and low-maintenance native-style plantings.",
    planting: [
      "Plant in spring in full sun and sharply drained sandy or gravelly soil.",
      "Bearberry works well on slopes, along edges, and in lean native-style beds.",
      "Space plants for gradual knit-together coverage rather than immediate crowding."
    ],
    maintenance: [
      "Water while establishing, then keep watering light and infrequent.",
      "Avoid rich soil and heavy fertilizer because the plant prefers lean conditions.",
      "Excellent drainage is essential for long-term success."
    ],
    pruning: [
      "Trim only lightly if you need to guide spread or tidy edges.",
      "Remove any winter-damaged sections in spring.",
      "Allow the plant to keep its natural low matting habit."
    ],
    winterizing: [
      "Sharp drainage is the main winter protection.",
      "Use only a very light mulch if needed in colder sites.",
      "Keep heavy wet debris from matting over the evergreen foliage."
    ]
  },
  {
    commonName: "Dichondra",
    slug: "dichondra",
    summary: "A low trailing groundcover or spill plant with soft rounded leaves and a clean carpet-like look.",
    planting: [
      "Plant in warm weather in full sun to part shade depending on climate.",
      "Use well-drained soil or a quality container mix for baskets and combo planters.",
      "Dichondra is especially useful where you want a soft trailing edge or low filler."
    ],
    maintenance: [
      "Keep soil lightly and evenly moist while the plant establishes.",
      "Avoid constantly soggy conditions because roots and stems can rot.",
      "Trim or direct trailing growth to keep the shape balanced."
    ],
    pruning: [
      "Clip long runners if they spread beyond the intended area.",
      "Trim lightly to thicken the plant and refresh the look.",
      "Remove damaged or sparse growth as needed."
    ],
    winterizing: [
      "Protect from hard frost in cooler climates.",
      "Container-grown Dichondra may need shelter during freezing weather.",
      "Cut back winter-damaged growth in spring once new growth resumes."
    ]
  },
  {
    commonName: "Liriope",
    slug: "liriope",
    summary: "A durable grass-like edging plant used for borders, mass plantings, and low-maintenance evergreen texture.",
    planting: [
      "Plant in spring or fall in sun to shade, depending on the variety and climate.",
      "Use well-drained soil and space clumps for eventual fill-in.",
      "Liriope is excellent for path edges, underplanting, and broad drift plantings."
    ],
    maintenance: [
      "Water during establishment and through long dry spells.",
      "Once rooted, liriope is generally very easy to maintain.",
      "Mulch lightly until the planting knits together well."
    ],
    pruning: [
      "Shear or cut back old foliage in late winter before new growth begins.",
      "Divide dense clumps every few years if needed.",
      "Remove ragged blades through the season for a tidier look."
    ],
    winterizing: [
      "Evergreen foliage usually persists through winter with minimal care.",
      "Mulch lightly around new plantings in colder zones.",
      "Clear away soggy debris so crowns stay healthy."
    ]
  },
  {
    commonName: "Pachysandra",
    slug: "pachysandra",
    summary: "A shade-loving evergreen groundcover used for broad, low-maintenance carpets under trees and shrubs.",
    planting: [
      "Plant in spring or early fall in shade to part shade with rich, well-drained soil.",
      "Use compost to improve moisture retention and organic content.",
      "Space starts evenly because pachysandra fills in steadily over time."
    ],
    maintenance: [
      "Keep new plantings evenly moist until they spread and root together.",
      "Pachysandra likes woodland-type conditions with consistent moisture.",
      "Watch dense plantings for poor airflow if the site stays damp."
    ],
    pruning: [
      "Thin or trim patches lightly if they become uneven or too dense.",
      "Cut back winter-damaged growth in spring to freshen the mat.",
      "Lift and divide small sections if you want to fill gaps elsewhere."
    ],
    winterizing: [
      "A light mulch can help new plantings through the first winter.",
      "Keep heavy soggy leaf mats from smothering the foliage.",
      "Trim winter-burned growth in spring after danger of hard freeze has passed."
    ]
  },
  {
    commonName: "Snow-in-Summer",
    slug: "snow-in-summer",
    summary: "A silvery, mat-forming groundcover with bright white spring flowers for sunny rock gardens and dry edges.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Snow-in-Summer performs best in gravelly or sandy sites rather than rich wet ground.",
      "Use it on slopes, walls, and rock-garden edges where spread is an advantage."
    ],
    maintenance: [
      "Water only while establishing, then keep the plant on the dry side.",
      "Do not overfeed because lean conditions keep growth tidy and floriferous.",
      "Good airflow and sun help the silvery foliage stay attractive."
    ],
    pruning: [
      "Shear lightly after bloom to freshen the mat and keep it compact.",
      "Trim wandering stems if the patch spreads beyond its space.",
      "Remove any winter-damaged sections once spring growth begins."
    ],
    winterizing: [
      "Excellent drainage is the main protection through winter.",
      "Avoid heavy mulch that traps moisture over the crown.",
      "Leave the mat open and dry rather than buried under wet debris."
    ]
  },
  {
    commonName: "Sweet Woodruff",
    slug: "sweet-woodruff",
    summary: "A fragrant shade groundcover with soft foliage and delicate spring flowers for woodland-style planting.",
    planting: [
      "Plant in spring or early fall in shade to part shade with rich, moist soil.",
      "Sweet Woodruff performs best where the root zone stays cool and organic matter is plentiful.",
      "Use it under shrubs, trees, and along shaded path edges where it can spread gently."
    ],
    maintenance: [
      "Keep the soil evenly moist while the planting establishes.",
      "Mulch lightly with leaf mold or compost in woodland-style beds.",
      "This plant is low effort once it has settled into a suitable shady site."
    ],
    pruning: [
      "Trim wandering edges lightly if the patch spreads beyond its space.",
      "Cut back tired or flattened growth after bloom if needed.",
      "Lift and divide sections if you want to thin or expand the planting."
    ],
    winterizing: [
      "Natural leaf litter usually provides enough winter protection.",
      "Avoid heavy wet debris that mats down too tightly over the foliage.",
      "Clean up damaged winter growth lightly in spring."
    ]
  },
  {
    commonName: "Vinca",
    slug: "vinca",
    summary: "A dependable evergreen groundcover with spring flowers that fills shaded slopes and underplantings quickly.",
    planting: [
      "Plant in spring or early fall in shade to part shade.",
      "Use average to rich well-drained soil and space starts for steady fill-in.",
      "Vinca is especially useful on slopes, under shrubs, and in difficult shaded areas."
    ],
    maintenance: [
      "Water through the first season until the planting roots together.",
      "Once established, vinca is very durable and needs little extra care.",
      "Watch its spread where you want stricter boundaries."
    ],
    pruning: [
      "Trim edges or runners whenever the patch moves beyond its intended area.",
      "Shear lightly in spring if the mat looks winter-worn or uneven.",
      "Remove damaged stems and debris to keep the planting fresh."
    ],
    winterizing: [
      "Evergreen foliage usually carries through winter with little intervention.",
      "Mulch lightly only for new plantings in colder areas.",
      "Clear away soggy leaf mats so stems do not stay smothered."
    ]
  },
  {
    commonName: "Wire Vine",
    slug: "wire-vine",
    summary: "A wiry trailing groundcover or container spiller valued for fine texture and a spreading habit.",
    planting: [
      "Plant in spring in full sun to light shade depending on climate.",
      "Use sharply drained soil or a quality potting mix in containers.",
      "Wire Vine is useful for edging, spilling from containers, and covering small open spaces."
    ],
    maintenance: [
      "Water during establishment, then keep watering moderate and avoid saturation.",
      "The plant handles wind and leaner soils fairly well once rooted.",
      "Trim lightly if it begins to tangle or overrun nearby plants."
    ],
    pruning: [
      "Clip runners as needed to control spread and maintain shape.",
      "Shear lightly if the mat becomes ragged or too thick in one area.",
      "Remove dead or winter-damaged growth once spring begins."
    ],
    winterizing: [
      "Good drainage is important through cold, wet weather.",
      "Container-grown plants may need protection from repeated hard freezes.",
      "Clear out winter-burned growth and let fresh spring stems refill the space."
    ]
  },
  {
    commonName: "Blue Oat Grass",
    slug: "blue-oat-grass",
    summary: "A cool-toned clumping ornamental grass with strong blue foliage for sunny borders and dry gardens.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Use Blue Oat Grass in gravel gardens, borders, and low-water plantings where the color can stand out.",
      "Space clumps enough to preserve the tidy rounded form."
    ],
    maintenance: [
      "Water to establish, then keep the plant on the dry side.",
      "Avoid rich soil and overfeeding because growth becomes weaker there.",
      "This grass performs best in open sunny sites with airflow."
    ],
    pruning: [
      "Comb out dead blades in late winter or very early spring.",
      "Trim only lightly if the clump looks ragged.",
      "Divide older plants if the center starts to thin."
    ],
    winterizing: [
      "Standing foliage helps protect the crown and adds winter structure.",
      "Sharp drainage is the main winter requirement.",
      "Use only very light mulch if needed in colder exposed locations."
    ]
  },
  {
    commonName: "Japanese Blood Grass",
    slug: "japanese-blood-grass",
    summary: "A striking ornamental grass with red-tipped blades that intensify through the season in sunny conditions.",
    planting: [
      "Plant in spring in full sun for the strongest red coloration.",
      "Use average well-drained soil and space clumps for clean separation.",
      "This grass works especially well as an accent in beds and containers."
    ],
    maintenance: [
      "Water through establishment and during dry periods, but avoid soggy soil.",
      "Moderate fertility is enough; overly rich conditions are unnecessary.",
      "Good sunlight is key to keeping the foliage color vivid."
    ],
    pruning: [
      "Leave the foliage standing through winter for interest and crown protection.",
      "Cut the clump back in late winter or early spring before new growth begins.",
      "Trim out damaged blades as needed once the new season starts."
    ],
    winterizing: [
      "Use a light mulch around newer plantings in colder climates.",
      "Keep the crown from staying wet under heavy debris.",
      "Protect container-grown plants from repeated deep freeze cycles."
    ]
  },
  {
    commonName: "Little Bluestem",
    slug: "little-bluestem",
    summary: "A native warm-season grass with upright blue-green growth and excellent orange-copper fall color.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Little Bluestem performs especially well in prairie-style and dry native plantings.",
      "Avoid overly rich soil because it can weaken the upright habit."
    ],
    maintenance: [
      "Water during establishment, then only in prolonged drought.",
      "This grass needs very little fertilizer and thrives in leaner soils.",
      "Strong sun keeps the clumps tight and colorful."
    ],
    pruning: [
      "Leave the stems standing through winter for structure and habitat value.",
      "Cut the clump down in late winter or early spring before fresh growth begins.",
      "Divide if the center opens after several seasons."
    ],
    winterizing: [
      "Standing foliage naturally helps protect the crown.",
      "Excellent drainage is more important than heavy mulch.",
      "Clear away compacted wet debris if it builds up around the base."
    ]
  },
  {
    commonName: "Prairie Dropseed",
    slug: "prairie-dropseed",
    summary: "A refined native clumping grass with fine texture, elegant form, and strong fall interest.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Use Prairie Dropseed in drifts, borders, and native-style designs where its fine texture can show.",
      "Give each clump enough room because the mature fountain shape is part of its appeal."
    ],
    maintenance: [
      "Water while establishing, then only during severe drought.",
      "Avoid rich soil and overfeeding because lean conditions keep the form strongest.",
      "This grass is slow to mature but long-lived once settled."
    ],
    pruning: [
      "Leave foliage standing for winter interest.",
      "Cut back in late winter or early spring before new growth emerges.",
      "Divide mature clumps only if needed, because the plant prefers to be left alone."
    ],
    winterizing: [
      "Standing growth helps protect the crown naturally.",
      "Use only a light mulch if additional winter buffering is needed.",
      "Keep the base from sitting wet under packed debris."
    ]
  },
  {
    commonName: "Switchgrass",
    slug: "switchgrass",
    summary: "A native upright grass used for screening, habitat value, and strong vertical structure in sunny plantings.",
    planting: [
      "Plant in spring in full sun and average to moist well-drained soil.",
      "Switchgrass works well in larger borders, native plantings, and seasonal privacy screens.",
      "Space plants according to mature width so upright forms can remain cleanly defined."
    ],
    maintenance: [
      "Water during establishment and during long droughts, especially in very dry sites.",
      "Switchgrass generally needs little fertilizer and handles a wide range of conditions once rooted.",
      "Sun and airflow help keep the clumps strong."
    ],
    pruning: [
      "Leave foliage and seed heads standing through winter for structure and wildlife value.",
      "Cut back hard in late winter or early spring before new shoots emerge.",
      "Divide older clumps if needed when the center weakens."
    ],
    winterizing: [
      "Standing foliage protects the crown and adds winter presence.",
      "Water before freeze-up if autumn has been exceptionally dry.",
      "Avoid burying the crown under heavy wet mulch."
    ]
  },
  {
    commonName: "Zebra Grass",
    slug: "zebra-grass",
    summary: "A bold striped ornamental grass with arching foliage and strong late-season presence in sunny gardens.",
    planting: [
      "Plant in spring in full sun and average to rich well-drained soil.",
      "Use Zebra Grass where you want height, pattern, and a broad ornamental effect.",
      "Allow enough room for the mature clump because it becomes substantial."
    ],
    maintenance: [
      "Water through establishment and during long dry periods.",
      "The plant benefits from sun and open airflow to keep the clump healthy.",
      "Little feeding is needed unless the soil is especially poor."
    ],
    pruning: [
      "Leave the foliage standing through winter.",
      "Cut the clump back in late winter or early spring before new growth begins.",
      "Divide oversized clumps in spring if necessary."
    ],
    winterizing: [
      "Standing foliage provides both winter interest and crown protection.",
      "Mulch lightly around younger plantings in colder climates.",
      "Avoid soggy conditions at the crown over winter."
    ]
  },
  {
    commonName: "Chives",
    slug: "chives",
    summary: "An easy perennial herb with edible leaves and flowers that performs well in kitchen gardens and containers.",
    planting: [
      "Plant in spring in full sun and fertile well-drained soil.",
      "Chives grow well in beds, raised planters, and containers with regular moisture.",
      "Set divisions or nursery starts where harvest access is easy."
    ],
    maintenance: [
      "Keep soil evenly moist for the best leaf production.",
      "Top-dress with compost in spring if the planting needs a boost.",
      "Regular harvesting helps keep the clump productive and fresh."
    ],
    pruning: [
      "Cut leaves back often for harvest, taking clumps down to a few inches when needed.",
      "Remove flower stalks if you want to focus on leaf production, or leave some for pollinators.",
      "Divide clumps every few years if the center becomes crowded."
    ],
    winterizing: [
      "Outdoor chives die back and return from the roots in spring.",
      "Mulch lightly in colder climates, especially around newer clumps.",
      "Cut old top growth down after frost or in late winter."
    ]
  },
  {
    commonName: "Cilantro",
    slug: "cilantro",
    summary: "A cool-season herb grown for fresh leaves and seeds, best when temperatures stay mild.",
    planting: [
      "Direct sow in spring or early fall in full sun to light shade.",
      "Use fertile, well-drained soil and succession sow for a longer harvest.",
      "Cilantro dislikes transplanting, so direct seeding usually works best."
    ],
    maintenance: [
      "Keep soil evenly moist to encourage tender leaf growth.",
      "Warm weather can trigger bolting, so afternoon shade helps in hotter climates.",
      "Harvest often while plants are leafy and fresh."
    ],
    pruning: [
      "Cut outer leaves regularly to keep harvest coming.",
      "Remove flower stalks if you want to extend the leaf stage.",
      "Allow some plants to flower and set seed if you want coriander seed or reseeding."
    ],
    winterizing: [
      "Cilantro performs best in cool seasons and is often replaced once heat arrives.",
      "In mild climates, fall sowings can carry through much of winter with light protection.",
      "Remove spent bolted plants and reseed when temperatures cool again."
    ]
  },
  {
    commonName: "Dill",
    slug: "dill",
    summary: "A feathery annual herb for kitchen gardens, pollinator planting, and seed harvest.",
    planting: [
      "Direct sow in spring after frost and again in succession for ongoing harvest.",
      "Use full sun and well-drained soil.",
      "Dill prefers being sown where it will grow rather than transplanted."
    ],
    maintenance: [
      "Water while seedlings establish, then keep moisture moderate.",
      "Avoid overfeeding because dill grows well in average soil.",
      "Taller plants may need support in very windy spots."
    ],
    pruning: [
      "Cut leafy stems often for kitchen use.",
      "Pinch flower heads only if you want to delay seed formation and extend leaf production.",
      "Leave some stems to flower if you want pollinator value and dill seed."
    ],
    winterizing: [
      "Dill is an annual and finishes after frost or after it runs to seed.",
      "Allow seed to drop if you want volunteer seedlings next season.",
      "Clear spent stems once the planting is done."
    ]
  },
  {
    commonName: "Sage",
    slug: "sage",
    summary: "A woody culinary herb with aromatic gray-green leaves that thrives in sun and dry, well-drained soil.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Raised beds or gravelly soils are ideal where drainage is slow.",
      "Give plants enough room to form a shrubby mound."
    ],
    maintenance: [
      "Water while establishing, then allow the soil to dry somewhat between soakings.",
      "Avoid rich soil and heavy fertilizer because sage prefers leaner conditions.",
      "Harvest lightly but regularly to keep the plant dense."
    ],
    pruning: [
      "Trim back after flowering or in late spring to keep the mound tidy.",
      "Do not cut deeply into old leafless wood.",
      "Remove winter-damaged tips once new growth begins."
    ],
    winterizing: [
      "Excellent drainage is the main winter protection.",
      "Use a light mulch only if needed and keep it off the crown.",
      "Shelter container plants from repeated freeze-thaw cycles."
    ]
  },
  {
    commonName: "Tarragon",
    slug: "tarragon",
    summary: "A classic culinary herb with narrow aromatic leaves, best grown in sun and sharp drainage.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Use a raised bed or container if your ground stays damp.",
      "French tarragon is usually started from divisions or nursery plants rather than seed."
    ],
    maintenance: [
      "Water during establishment, then keep watering moderate and not excessive.",
      "Avoid rich heavy soil that encourages weak, floppy growth.",
      "Harvest stems often to keep fresh leafy growth coming."
    ],
    pruning: [
      "Trim plants lightly through the season for harvest and shape.",
      "Cut stems back by about one-third if the plant becomes rangy midsummer.",
      "Remove old stems after the growing season winds down."
    ],
    winterizing: [
      "Mulch lightly in colder climates after the ground cools.",
      "Cut plants down once frost has finished the top growth.",
      "Protect container plants from repeated hard freeze cycles."
    ]
  },
  {
    commonName: "Anthurium",
    slug: "anthurium",
    summary: "A tropical houseplant grown for glossy leaves and long-lasting waxy blooms in warm humid interiors.",
    planting: [
      "Pot in a chunky, airy indoor mix with good drainage.",
      "Use a container with drainage holes and avoid oversizing the pot.",
      "Bright indirect light is best for flowering and healthy foliage."
    ],
    maintenance: [
      "Keep the mix lightly moist but not soggy.",
      "Anthurium appreciates warmth, humidity, and steady indoor conditions.",
      "Feed lightly during active growth if blooming slows."
    ],
    pruning: [
      "Remove spent blooms and yellow leaves cleanly at the base.",
      "Trim damaged foliage promptly to keep the plant tidy.",
      "Repot or divide only when the clump becomes crowded."
    ],
    winterizing: [
      "Protect from cold drafts and chilly glass.",
      "Reduce watering slightly during slower winter growth, but do not let the plant dry out hard.",
      "Increase humidity if indoor heating dries the air."
    ]
  },
  {
    commonName: "Chinese Evergreen",
    slug: "chinese-evergreen",
    summary: "A reliable foliage houseplant that handles average indoor conditions and lower light better than many tropicals.",
    planting: [
      "Pot in a well-drained houseplant mix with drainage holes.",
      "Use a container only slightly larger than the root ball.",
      "Place in low to bright indirect light depending on the variety."
    ],
    maintenance: [
      "Water when the top layer of mix begins to dry.",
      "Avoid overwatering because roots and stems dislike staying soggy.",
      "Wipe foliage occasionally and keep the plant away from cold drafts."
    ],
    pruning: [
      "Remove damaged or yellowing leaves at the base.",
      "Cut back tall canes if you want a bushier plant and new basal growth.",
      "Divide during repotting if clumps become crowded."
    ],
    winterizing: [
      "Water a bit less during slow winter growth.",
      "Keep the plant warm and away from cold windows.",
      "Maintain moderate humidity if indoor air becomes very dry."
    ]
  },
  {
    commonName: "Parlor Palm",
    slug: "parlor-palm",
    summary: "A classic indoor palm with soft fronds that prefers filtered light and steady, moderate moisture.",
    planting: [
      "Pot in a well-drained indoor mix with a container that has drainage holes.",
      "Parlor Palm is happiest in bright indirect light or moderate filtered light.",
      "Avoid oversizing the pot because the plant prefers a slightly snug root zone."
    ],
    maintenance: [
      "Water when the top of the mix starts to dry, but do not let the root ball stay soggy.",
      "Protect from harsh direct sun that can scorch the fronds.",
      "Increase humidity if leaf tips start to brown in very dry rooms."
    ],
    pruning: [
      "Remove fully brown fronds at the base.",
      "Trim only dead tips or badly damaged fronds rather than shaping healthy foliage.",
      "Repot carefully and infrequently because the palm dislikes root disturbance."
    ],
    winterizing: [
      "Keep away from cold drafts and heater vents.",
      "Reduce watering slightly in winter while maintaining even moisture overall.",
      "Hold in stable indoor warmth and indirect light."
    ]
  },
  {
    commonName: "Spider Plant",
    slug: "spider-plant",
    summary: "An easy indoor favorite with arching leaves and baby plantlets, ideal for hanging baskets and shelves.",
    planting: [
      "Pot in a standard well-drained houseplant mix with good drainage.",
      "Use a basket or pot where the leaves and plantlets can arch naturally.",
      "Bright indirect light gives the strongest growth and variegation."
    ],
    maintenance: [
      "Water when the top inch or so of mix begins to dry.",
      "Spider Plant tolerates average indoor conditions well but appreciates moderate humidity.",
      "Flush the pot occasionally if mineral buildup causes tip browning."
    ],
    pruning: [
      "Remove brown or damaged leaves at the base.",
      "Clip off baby plantlets if you want a tidier look or root them for new plants.",
      "Divide crowded clumps during repotting if necessary."
    ],
    winterizing: [
      "Reduce watering slightly during slower winter growth.",
      "Keep away from very cold windows and dry heating vents.",
      "Maintain bright indirect light so the plant stays compact."
    ]
  },
  {
    commonName: "Cucumber",
    slug: "cucumber",
    summary: "A warm-season edible vine that needs sun, steady water, and regular harvest for best production.",
    planting: [
      "Direct sow or transplant after the soil is warm and frost danger has passed.",
      "Use full sun and fertile, well-drained soil enriched with compost.",
      "Provide a trellis if you want cleaner fruit and easier harvest."
    ],
    maintenance: [
      "Keep soil consistently moist because uneven watering can reduce quality and increase bitterness.",
      "Feed regularly once vines begin active flowering and fruiting.",
      "Mulch the root zone to conserve moisture and reduce splashing."
    ],
    pruning: [
      "Guide or tie vines onto supports if growing vertically.",
      "Remove damaged leaves and overripe fruit promptly.",
      "Harvest frequently to keep the plant producing new cucumbers."
    ],
    winterizing: [
      "Cucumber is a warm-season annual and is removed after frost.",
      "Pull and discard spent vines once production ends or disease becomes severe.",
      "Rotate next season's planting area if possible."
    ]
  },
  {
    commonName: "Kale",
    slug: "kale",
    summary: "A hardy leafy crop that performs well in cool weather and can provide repeated harvest over a long season.",
    planting: [
      "Direct sow or transplant in spring or late summer for fall and winter crops.",
      "Use fertile soil with compost and full sun to light shade.",
      "Space plants by mature size so leaves have room to expand cleanly."
    ],
    maintenance: [
      "Keep soil evenly moist for tender leaves and steady growth.",
      "Mulch lightly to suppress weeds and stabilize moisture.",
      "Feed with compost or a balanced vegetable fertilizer if the bed is hungry."
    ],
    pruning: [
      "Harvest outer leaves first and let the center continue growing.",
      "Remove yellow or pest-damaged leaves promptly.",
      "Cut flower stalks if plants begin bolting and you want to hold leaf production a bit longer."
    ],
    winterizing: [
      "Kale can hold through light to moderate frosts and often tastes sweeter after cold weather.",
      "Use row cover or light protection for harsher freezes if you want to extend harvest.",
      "Remove plants once they bolt heavily or winter weather finally finishes them."
    ]
  },
  {
    commonName: "Pepper",
    slug: "pepper",
    summary: "A warm-season vegetable that thrives in sun, rich soil, and steady summer care for strong fruit set.",
    planting: [
      "Transplant after frost once the soil is thoroughly warm.",
      "Use full sun and fertile, well-drained soil enriched with compost.",
      "Space plants to allow airflow and support later harvest access."
    ],
    maintenance: [
      "Keep soil evenly moist because drought stress can reduce fruit quality and set.",
      "Feed during flowering and fruiting, especially in containers.",
      "Mulch lightly to conserve moisture and reduce splash on the foliage."
    ],
    pruning: [
      "Remove damaged lower leaves and weak interior shoots as needed.",
      "Stake or cage larger plants if fruit load becomes heavy.",
      "Harvest regularly once peppers size up to keep plants productive."
    ],
    winterizing: [
      "Peppers are usually grown as warm-season annuals outdoors.",
      "Protect container plants from frost if you want to try overwintering them indoors.",
      "Remove outdoor plants once cold weather ends production."
    ]
  },
  {
    commonName: "Rosemary Topiary",
    slug: "rosemary-topiary",
    summary: "A clipped rosemary form for fragrant containers and entry accents in sunny, sharply drained spots.",
    planting: [
      "Plant in a drainage-friendly container with a gritty herb or cactus-style mix.",
      "Place in full sun where the topiary receives strong light from all sides.",
      "Choose a pot heavy enough to support the upright form."
    ],
    maintenance: [
      "Water deeply, then allow the mix to dry somewhat before watering again.",
      "Rotate the pot so growth stays balanced around the frame.",
      "Avoid rich fertilizer because tight fragrant growth is the goal."
    ],
    pruning: [
      "Clip lightly and often to maintain the topiary shape.",
      "Do not cut deeply into old bare wood.",
      "Remove any shoots that break the intended outline."
    ],
    winterizing: [
      "Protect the container from severe cold and repeated freeze-thaw cycles.",
      "Bring indoors or to bright shelter if winters are too cold for outdoor rosemary.",
      "Keep winter moisture moderate and avoid soggy soil."
    ]
  },
  {
    commonName: "Strawberry",
    slug: "strawberry",
    summary: "A productive edible groundcover that yields best in sun, fertile soil, and consistent moisture.",
    planting: [
      "Plant crowns in spring in full sun and rich, well-drained soil.",
      "Set crowns at the correct depth so the crown sits at soil level, not buried deeply.",
      "Use rows, beds, or containers where runners and fruit can be managed easily."
    ],
    maintenance: [
      "Keep soil evenly moist, especially during flowering and fruit fill.",
      "Mulch around plants to keep berries cleaner and reduce weed pressure.",
      "Feed lightly after establishment or after harvest if the bed needs renewal."
    ],
    pruning: [
      "Trim excess runners if you want larger fruit or tidier rows.",
      "Remove old damaged leaves after the main harvest in established beds.",
      "Refresh older plantings by thinning or replanting as productivity drops."
    ],
    winterizing: [
      "Mulch crowns in colder climates after hard frost to prevent freeze-thaw damage.",
      "Remove or pull back mulch gradually in spring as temperatures warm.",
      "Protect containers because roots freeze more quickly in pots."
    ]
  },
  {
    commonName: "Burro's Tail",
    slug: "burros-tail",
    summary: "A trailing succulent with beadlike leaves that looks best when left undisturbed in bright, dry conditions.",
    planting: [
      "Pot in a very fast-draining succulent mix with strong drainage holes.",
      "Use a hanging pot or raised container so trailing stems are not crushed.",
      "Provide bright light and some gentle direct sun once the plant is acclimated."
    ],
    maintenance: [
      "Water thoroughly, then let the mix dry well before watering again.",
      "Handle carefully because leaves break off easily.",
      "Keep the plant in a stable spot because frequent moving can cause leaf drop."
    ],
    pruning: [
      "Trim damaged or overly long stems only when necessary.",
      "Use fallen leaf segments or cuttings for propagation if desired.",
      "Avoid frequent shaping because the plant is best left to trail naturally."
    ],
    winterizing: [
      "Protect from frost and cold drafts.",
      "Water very lightly during slower winter growth.",
      "Keep the plant bright and on the dry side until spring."
    ]
  },
  {
    commonName: "Echeveria",
    slug: "echeveria",
    summary: "A rosette-forming succulent ideal for containers, sunny windows, and low-water design.",
    planting: [
      "Plant in a cactus or succulent mix with excellent drainage.",
      "Use shallow or low containers if you want to emphasize the rosette shape.",
      "Provide bright light and acclimate gradually to stronger sun."
    ],
    maintenance: [
      "Water thoroughly, then let the mix dry completely or nearly completely before watering again.",
      "Keep the rosette center dry to reduce rot risk.",
      "Avoid rich fertilizer or oversized containers."
    ],
    pruning: [
      "Remove old lower leaves as they dry naturally.",
      "Separate offsets if the clump becomes crowded or if you want more plants.",
      "Trim any stretched stems and re-root the rosette if the plant becomes leggy."
    ],
    winterizing: [
      "Protect from hard frost and excess winter wet.",
      "Water very sparingly during winter dormancy or slower growth.",
      "Keep plants bright and sheltered from cold drafts."
    ]
  },
  {
    commonName: "String of Pearls",
    slug: "string-of-pearls",
    summary: "A trailing succulent with beadlike foliage that prefers bright light, airy soil, and dry intervals.",
    planting: [
      "Pot in a sharply draining succulent mix with a container that drains well.",
      "Use a hanging planter or elevated pot where the strands can drape naturally.",
      "Bright indirect light with some gentle direct sun works best."
    ],
    maintenance: [
      "Water thoroughly, then let the mix dry well before watering again.",
      "Avoid keeping the crown or strands constantly damp because rot can set in quickly.",
      "Good airflow and bright light help the strands stay tight and healthy."
    ],
    pruning: [
      "Trim leggy or sparse strands to encourage fuller growth.",
      "Lay cut strands across the soil to root if you want to thicken the pot.",
      "Remove any damaged or rotting sections promptly."
    ],
    winterizing: [
      "Protect from cold drafts and frost.",
      "Reduce watering during the darker winter months.",
      "Keep the plant bright and dry enough to avoid winter rot."
    ]
  },
  {
    commonName: "Yucca",
    slug: "yucca",
    summary: "A bold architectural plant for dry sunny sites, valued for sword-like foliage and strong drought tolerance.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Use raised or gravelly beds if natural drainage is slow.",
      "Give yucca enough room because mature plants become broad and rigid."
    ],
    maintenance: [
      "Water during establishment, then only occasionally once the plant is rooted.",
      "Avoid rich soil and excess fertilizer because yucca prefers lean conditions.",
      "This plant thrives in heat, sun, and dry exposure."
    ],
    pruning: [
      "Remove damaged or old lower leaves carefully if you want a cleaner look.",
      "Cut spent flower stalks down after blooming.",
      "Lift and divide offsets if the clump spreads beyond its space."
    ],
    winterizing: [
      "Sharp drainage is the most important winter protection.",
      "Avoid burying the crown under heavy wet mulch.",
      "Container-grown yucca may need extra protection from repeated deep freezes."
    ]
  },
  {
    commonName: "ZZ Plant",
    slug: "zz-plant",
    summary: "A very forgiving houseplant that handles lower light and infrequent watering with ease.",
    planting: [
      "Pot in a well-drained indoor mix with a drainage hole.",
      "Use a pot only slightly larger than the root mass because ZZ Plant prefers a snug container.",
      "Place in low to bright indirect light depending on the room."
    ],
    maintenance: [
      "Water thoroughly, then allow the mix to dry significantly before watering again.",
      "ZZ Plant tolerates low light well but grows more steadily in brighter indirect light.",
      "Avoid overwatering because rhizomes and roots can rot."
    ],
    pruning: [
      "Remove yellow or damaged stalks at the base.",
      "Wipe leaves occasionally to keep them glossy and dust free.",
      "Divide during repotting only when the clump becomes crowded."
    ],
    winterizing: [
      "Reduce watering during slower winter growth.",
      "Keep away from cold drafts and very chilly windows.",
      "Hold in stable indoor conditions and do not let the pot stay wet."
    ]
  },
  {
    commonName: "Coleus Flame",
    slug: "coleus-flame",
    summary: "A bold red-toned coleus variety for containers and seasonal color where dramatic foliage is the main feature.",
    planting: [
      "Plant after frost in part shade or filtered light.",
      "Use fertile well-drained soil or a rich container mix.",
      "Pinch young plants early to encourage a fuller branching habit."
    ],
    maintenance: [
      "Keep the soil evenly moist, especially in containers during warm weather.",
      "Feed lightly through the growing season to support lush foliage color.",
      "Protect from harsh midday sun unless the site is mild and the plant is acclimated."
    ],
    pruning: [
      "Pinch tips often to keep the plant compact and bushy.",
      "Remove flower spikes so energy stays focused on foliage.",
      "Trim back leggy stems to leaf nodes when the plant stretches."
    ],
    winterizing: [
      "Treat as a warm-season annual outdoors in colder climates.",
      "Bring indoors before frost if you want to hold favorite plants over.",
      "Keep overwintered plants bright, warm, and lightly moist."
    ]
  },
  {
    commonName: "Oregano Greek",
    slug: "oregano-greek",
    summary: "A low mounding culinary herb with strong flavor, excellent drought tolerance, and good performance in sun.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Raised beds, herb pots, and gravelly sites are all good choices.",
      "Give the plant enough room to mound and spread slightly."
    ],
    maintenance: [
      "Water through establishment, then keep the plant on the drier side.",
      "Avoid rich soil that weakens flavor and makes growth too soft.",
      "Harvest often to keep the mound dense and leafy."
    ],
    pruning: [
      "Trim regularly through the growing season for harvest and shape.",
      "Cut back after flowering if the plant becomes woody or tired.",
      "Remove winter-damaged stems once new growth begins."
    ],
    winterizing: [
      "Good drainage is the key to winter survival.",
      "Mulch lightly in colder climates, keeping the crown from staying wet.",
      "Protect containers from repeated freeze-thaw cycles."
    ]
  },
  {
    commonName: "Parsley Curled",
    slug: "parsley-curled",
    summary: "A neat edible herb grown for fresh garnish, kitchen harvest, and tidy container or border planting.",
    planting: [
      "Sow or transplant in spring in rich, well-drained soil.",
      "Parsley grows in full sun to part shade, especially in warmer climates.",
      "Use beds, raised planters, or containers where regular harvest is easy."
    ],
    maintenance: [
      "Keep soil evenly moist for the best leaf production.",
      "Feed lightly with compost or gentle vegetable fertilizer if growth slows.",
      "Parsley is a cool-to-mild season grower and benefits from steady moisture."
    ],
    pruning: [
      "Harvest outer stems first and let the center continue producing.",
      "Remove yellow or tired leaves as needed.",
      "Cut flower stalks if you want to extend the leafy stage before bolting."
    ],
    winterizing: [
      "Parsley can hold through mild winters with some protection.",
      "Use row cover or light mulch during hard freezes if you want to extend harvest.",
      "Replace plants after they bolt heavily in the second season."
    ]
  },
  {
    commonName: "Morning Glory",
    slug: "morning-glory",
    summary: "A fast annual vine with vivid trumpet flowers, ideal for quick summer screening and vertical color.",
    planting: [
      "Direct sow after frost in full sun once the soil warms.",
      "Provide a fence, trellis, or other support at planting time.",
      "Morning Glory prefers average well-drained soil rather than overly rich ground."
    ],
    maintenance: [
      "Water during establishment and through dry spells, especially in containers or very hot weather.",
      "Avoid overfeeding because too much fertility can reduce flowering.",
      "Guide young vines onto supports while they are still flexible."
    ],
    pruning: [
      "Trim wandering stems if the vine outgrows its support area.",
      "Remove excessive seed pods if you want to reduce self-seeding.",
      "Light shaping is usually enough because the plant is naturally vigorous."
    ],
    winterizing: [
      "Morning Glory is a warm-season annual and ends with frost.",
      "Collect seed if you want to replant next season.",
      "Remove vines after they finish or after cold weather collapses the growth."
    ]
  },
  {
    commonName: "Agastache",
    slug: "agastache",
    summary: "A fragrant pollinator perennial with upright flower spikes and excellent performance in sunny dry gardens.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Use Agastache in hot sunny borders, pollinator gardens, and low-water plantings.",
      "Avoid heavy wet ground because the crown prefers open drainage."
    ],
    maintenance: [
      "Water through establishment, then reduce watering once roots are set.",
      "Do not overfertilize because leaner conditions help the plant stay sturdy.",
      "This plant thrives in heat and open sun."
    ],
    pruning: [
      "Deadhead after the first flush if you want tidier rebloom.",
      "Remove spent stems once bloom fades or leave some for structure.",
      "Cut old growth back in spring after winter passes."
    ],
    winterizing: [
      "Leave some top growth in place through winter to help protect the crown.",
      "Ensure excellent drainage and avoid heavy wet mulch.",
      "Cut back once spring growth resumes."
    ]
  },
  {
    commonName: "Alyssum",
    slug: "alyssum",
    summary: "A sweetly fragrant edging annual or cool-season filler that creates soft low carpets of bloom.",
    planting: [
      "Plant in cool weather in full sun to light shade depending on climate.",
      "Use well-drained soil in beds, edges, and containers.",
      "Alyssum is especially useful for filling low gaps and spilling gently over borders."
    ],
    maintenance: [
      "Keep soil lightly and evenly moist, especially in containers.",
      "The plant blooms best in cooler temperatures and may slow in intense heat.",
      "Feed lightly only if the planting looks tired."
    ],
    pruning: [
      "Shear lightly if the planting becomes leggy or pauses in bloom.",
      "Deadheading is optional, but a quick trim often refreshes flowering.",
      "Remove dried or damaged stems to keep the planting soft and clean."
    ],
    winterizing: [
      "In mild climates, Alyssum can flower through much of winter.",
      "Use light frost protection if needed for cool-season displays.",
      "Replace once severe heat or hard freeze finishes the planting."
    ]
  },
  {
    commonName: "Anemone",
    slug: "anemone",
    summary: "A graceful flowering perennial that brings elegant late-season or spring bloom depending on type.",
    planting: [
      "Plant in spring or early fall in part shade with rich moisture-retentive soil.",
      "Anemone appreciates a cool root zone and consistent organic matter.",
      "Give plants room to form gentle clumps without crowding."
    ],
    maintenance: [
      "Keep soil evenly moist, especially through active growth and flowering.",
      "Mulch lightly to protect roots from heat and drying.",
      "Use compost in spring if the planting needs a gentle refresh."
    ],
    pruning: [
      "Remove spent flowers if you want a tidier appearance.",
      "Cut damaged stems and leaves back as needed.",
      "Trim plants down after frost once the top growth has fully finished."
    ],
    winterizing: [
      "Use a light mulch in colder regions around the crown.",
      "Keep heavy wet debris from matting over the plant.",
      "Mark the planting area if the plant goes dormant and disappears seasonally."
    ]
  },
  {
    commonName: "Balloon Flower",
    slug: "balloon-flower",
    summary: "A tidy perennial with puffed flower buds and starry blooms for borders, containers, and sunny mixed beds.",
    planting: [
      "Plant in spring or early fall in full sun and well-drained soil.",
      "Use a permanent spot because Balloon Flower dislikes frequent disturbance.",
      "Space plants so the clumps can develop without crowding."
    ],
    maintenance: [
      "Water during establishment and through prolonged dry spells.",
      "This perennial usually needs only modest feeding in average soil.",
      "Mulch lightly to reduce weeds and keep the soil even."
    ],
    pruning: [
      "Deadhead to keep the plant looking tidy and possibly encourage more bloom.",
      "Pinch stems early if you want a shorter bushier plant.",
      "Cut old stems down in late fall or late winter."
    ],
    winterizing: [
      "Mulch lightly around young plants in colder regions.",
      "Mark the planting area because Balloon Flower can emerge late in spring.",
      "Keep the crown from sitting wet under heavy winter debris."
    ]
  },
  {
    commonName: "Blanket Flower",
    slug: "blanket-flower",
    summary: "A bright, drought-tolerant perennial with warm-toned flowers and long blooming performance in sun.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Use Blanket Flower in sunny, low-water borders and pollinator plantings.",
      "Average to lean soils suit it better than rich heavy beds."
    ],
    maintenance: [
      "Water through establishment, then only during extended drought.",
      "Avoid heavy fertilizer because bloom is strongest in leaner conditions.",
      "This plant thrives in heat, open sun, and well-drained sites."
    ],
    pruning: [
      "Deadhead regularly for longer bloom and a tidier look.",
      "Trim tired stems lightly if the plant becomes ragged midseason.",
      "Cut back old top growth after frost or in late winter."
    ],
    winterizing: [
      "Good drainage is the main winter requirement.",
      "Use a light mulch only where necessary, keeping the crown clear.",
      "Avoid heavy wet mulch over the base."
    ]
  },
  {
    commonName: "Delphinium",
    slug: "delphinium",
    summary: "A dramatic flowering perennial with tall spires that excels in cooler climates and rich, well-drained soil.",
    planting: [
      "Plant in spring in full sun and fertile well-drained soil.",
      "Delphinium performs best where summers are not intensely hot and still air is limited.",
      "Provide support early because tall flower spikes can need staking."
    ],
    maintenance: [
      "Keep soil evenly moist and feed reasonably through the growing season.",
      "Mulch lightly to conserve moisture and cool the roots.",
      "Watch for slug damage on young growth and mildew in still humid conditions."
    ],
    pruning: [
      "Deadhead spent spikes to keep the plant neat and encourage a possible smaller rebloom.",
      "Cut back finished stems after bloom while leaving healthy foliage.",
      "Remove damaged or diseased growth promptly."
    ],
    winterizing: [
      "Cut back top growth after frost or once it fully declines.",
      "Mulch lightly around the crown in colder climates.",
      "Ensure the root zone drains well through winter."
    ]
  },
  {
    commonName: "Gomphrena",
    slug: "gomphrena",
    summary: "A heat-loving annual with papery globe flowers that holds color well in summer beds and cut arrangements.",
    planting: [
      "Plant after frost in full sun and well-drained soil.",
      "Gomphrena thrives in real summer heat and does best once temperatures stay warm.",
      "Use it in bright beds, pollinator plantings, and cutting gardens."
    ],
    maintenance: [
      "Water through establishment, then keep watering moderate and not excessive.",
      "The plant handles heat very well once rooted.",
      "Feed lightly only if the planting is clearly underperforming."
    ],
    pruning: [
      "Deadhead or cut blooms often to keep the plant flowering and tidy.",
      "Trim light leggy growth if stems become loose or uneven.",
      "Harvest stems for fresh or dried arrangements regularly."
    ],
    winterizing: [
      "Gomphrena is a warm-season annual and is removed after frost.",
      "Save blooms or seed heads if you want to dry them or replant next year.",
      "Clear spent plants once the season finishes."
    ]
  },
  {
    commonName: "Hollyhock",
    slug: "hollyhock",
    summary: "A tall cottage-garden classic with towering summer bloom spikes for fences, walls, and background planting.",
    planting: [
      "Plant in spring or fall in full sun with average to rich well-drained soil.",
      "Choose a site with airflow and support from a wall or fence if needed.",
      "Space plants so tall stems do not crowd and trap humidity."
    ],
    maintenance: [
      "Water during establishment and during longer dry spells.",
      "Mulch lightly to keep weeds down and soil even.",
      "Watch for rust disease and remove heavily infected leaves promptly."
    ],
    pruning: [
      "Cut spent flower stalks after bloom if you do not want seed.",
      "Leave some spikes if you want the plant to reseed naturally.",
      "Remove diseased lower leaves and tidy the base through the season."
    ],
    winterizing: [
      "Use a light mulch around the base in colder regions.",
      "Clear infected foliage and debris so disease pressure is lower next season.",
      "Protect first-year rosettes lightly through winter."
    ]
  },
  {
    commonName: "Penstemon",
    slug: "penstemon",
    summary: "A long-blooming perennial with upright flower spikes and strong pollinator value for sunny, well-drained sites.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Penstemon is ideal for borders, dry gardens, and pollinator-focused planting.",
      "Avoid heavy, wet soils that can shorten the plant's life."
    ],
    maintenance: [
      "Water through establishment, then reduce watering once the plant is rooted.",
      "Do not overfeed because leaner conditions help keep the plant sturdy.",
      "Sun and airflow support the cleanest growth and bloom."
    ],
    pruning: [
      "Deadhead spent spikes if you want a tidier look and possible rebloom.",
      "Leave some stems standing until spring in colder climates to help protect the crown.",
      "Trim out winter-damaged growth once new shoots appear."
    ],
    winterizing: [
      "Excellent drainage is the most important winter protection.",
      "Avoid cutting the plant down hard in fall in colder areas.",
      "Use only light mulch and keep it away from the crown."
    ]
  },
  {
    commonName: "Scabiosa",
    slug: "scabiosa",
    summary: "A charming long-blooming perennial with pincushion flowers that works beautifully in borders and cutting gardens.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Use Scabiosa where airy bloom and repeated cutting can be enjoyed.",
      "Give plants enough spacing so the clumps stay open and fresh."
    ],
    maintenance: [
      "Water during establishment, then only during longer dry periods.",
      "Avoid overly rich soil and heavy feeding.",
      "This plant blooms best with regular sun and good airflow."
    ],
    pruning: [
      "Deadhead often to keep blooms coming.",
      "Trim tired stems lightly if the plant becomes loose or sparse.",
      "Cut back old top growth after the season or in late winter."
    ],
    winterizing: [
      "Use light mulch around newer plants in colder zones.",
      "Good drainage is important through winter.",
      "Clear away wet debris so the crown stays open."
    ]
  },
  {
    commonName: "Statice",
    slug: "statice",
    summary: "A sun-loving cut-flower annual with papery blooms that dry beautifully and tolerate leaner sites well.",
    planting: [
      "Plant after frost in full sun and sharply drained soil.",
      "Statice does best in open sites with heat and airflow.",
      "Use it where blooms can be harvested freely for fresh or dried arrangements."
    ],
    maintenance: [
      "Water during establishment, then only moderately once rooted.",
      "Do not overfertilize because lean conditions support better flowering.",
      "This plant handles dry, sunny summer conditions well."
    ],
    pruning: [
      "Harvest flower stems often for arrangements.",
      "Remove spent or damaged stems to keep the planting neat.",
      "Light cleanup is usually all that is needed during the season."
    ],
    winterizing: [
      "Statice is generally grown as an annual and removed after frost.",
      "Save blooms or seed if desired for next season.",
      "Clear spent plants once cold weather ends the display."
    ]
  },
  {
    commonName: "Sweet Pea",
    slug: "sweet-pea",
    summary: "A fragrant annual vine for cool seasons, prized for delicate flowers and strong cutting-garden appeal.",
    planting: [
      "Sow in cool weather in full sun where summers are mild or where roots can stay cool.",
      "Use rich, well-drained soil and provide a trellis or net at planting time.",
      "Sweet Pea performs best before hot weather arrives."
    ],
    maintenance: [
      "Keep soil evenly moist during active growth and flowering.",
      "Feed lightly or use compost in richer beds for steady blooming.",
      "Guide young vines onto their support while the stems are flexible."
    ],
    pruning: [
      "Pick flowers often because regular harvest keeps plants blooming longer.",
      "Remove seed pods if you want to extend the flower show.",
      "Trim away tired growth once heat starts to finish the planting."
    ],
    winterizing: [
      "Sweet Pea is usually seasonal and replaced once heat or frost ends performance.",
      "In mild climates, winter or very early spring sowings can work well.",
      "Remove vines once the display has fully faded."
    ]
  },
  {
    commonName: "Tithonia",
    slug: "tithonia",
    summary: "A bold annual with vivid orange-red flowers that thrives in heat and draws pollinators all summer.",
    planting: [
      "Plant after frost in full sun and well-drained soil.",
      "Tithonia prefers warm weather and open sunny conditions.",
      "Give plants enough room because they can grow tall and broad in a single season."
    ],
    maintenance: [
      "Water during establishment, then only during dry periods.",
      "Avoid rich soil or too much fertilizer because bloom is best in moderate conditions.",
      "This plant thrives in summer heat and bright exposure."
    ],
    pruning: [
      "Deadhead if you want a tidier look, though the plant will often keep blooming regardless.",
      "Stake or tie taller stems if the site is windy.",
      "Trim overly long stems if they begin to lean into neighboring plants."
    ],
    winterizing: [
      "Tithonia is a warm-season annual and is removed after frost.",
      "Save seed if you want to replant next season.",
      "Clear spent stems once the display ends."
    ]
  },
  {
    commonName: "Veronica",
    slug: "veronica",
    summary: "A compact perennial with upright flower spikes for sunny borders, edging, and repeated summer bloom.",
    planting: [
      "Plant in spring or early fall in full sun and well-drained soil.",
      "Use Veronica along paths, in mixed borders, or in front-of-bed groupings.",
      "Space plants enough so the clumps stay airy and healthy."
    ],
    maintenance: [
      "Water through establishment and in longer dry stretches.",
      "This plant usually needs only modest feeding in average garden soil.",
      "Good sun and airflow support the best flowering."
    ],
    pruning: [
      "Deadhead spent spikes to encourage further bloom.",
      "Trim the whole plant lightly if it becomes ragged after the main flush.",
      "Cut old stems back once the season ends or in late winter."
    ],
    winterizing: [
      "Mulch lightly around new plantings in colder regions.",
      "Ensure the crown does not stay wet under dense winter debris.",
      "Leave some top growth if you want a bit of winter structure, then clean up in spring."
    ]
  },
  {
    commonName: "Azalea",
    slug: "azalea",
    summary: "A spring-blooming shrub for acidic soils and filtered light, prized for dense color and woodland elegance.",
    planting: [
      "Plant in spring or early fall in part shade and acidic, organic-rich soil.",
      "Keep the root ball slightly high and mulch over the shallow root zone.",
      "Choose a site with protection from harsh afternoon sun and drying wind."
    ],
    maintenance: [
      "Keep soil evenly moist, especially during establishment and summer dry periods.",
      "Use acid-loving plant care if feeding is needed.",
      "Mulch with bark or leaf mold to help hold moisture and protect the roots."
    ],
    pruning: [
      "Prune immediately after flowering if shaping is needed.",
      "Remove dead or crossing wood selectively.",
      "Avoid late pruning that would remove next year's flower buds."
    ],
    winterizing: [
      "Water before freeze-up if autumn is dry.",
      "Protect roots with mulch, keeping it away from the stems.",
      "Shield from drying winter wind if the site is exposed."
    ]
  },
  {
    commonName: "Cotoneaster",
    slug: "cotoneaster",
    summary: "A versatile shrub or spreading woody groundcover valued for berries, structure, and tolerance of sunny sites.",
    planting: [
      "Plant in spring or fall in full sun and well-drained soil.",
      "Cotoneaster adapts to slopes, groundcover use, and low hedging depending on type.",
      "Allow enough space for the mature spread, especially for groundcover forms."
    ],
    maintenance: [
      "Water during establishment, then only during extended drought.",
      "This plant usually needs little fertilizer and handles leaner soils well.",
      "Full sun keeps branching dense and berrying strongest."
    ],
    pruning: [
      "Prune lightly to shape in late winter or after berry display if needed.",
      "Remove dead or awkward branches selectively.",
      "Trim spreading stems when they move beyond the intended area."
    ],
    winterizing: [
      "Cotoneaster is generally hardy and low maintenance through winter.",
      "Mulch lightly around younger plants in colder sites.",
      "Water before freeze-up if the season has been unusually dry."
    ]
  },
  {
    commonName: "Daphne",
    slug: "daphne",
    summary: "A highly fragrant shrub with beautiful spring bloom that rewards careful siting and dislikes root disturbance.",
    planting: [
      "Plant in spring in part shade with excellent drainage and rich organic soil.",
      "Choose the planting site carefully because Daphne does not like being moved.",
      "Set the plant slightly high rather than too deep and keep the root zone open."
    ],
    maintenance: [
      "Keep soil evenly moist but never soggy.",
      "Mulch lightly to protect the roots without piling material against the crown.",
      "Avoid stress from heat, standing water, and unnecessary root disturbance."
    ],
    pruning: [
      "Prune very lightly after flowering if shaping is absolutely needed.",
      "Remove dead or damaged wood with care.",
      "Avoid repeated hard pruning because Daphne resents it."
    ],
    winterizing: [
      "Protect from severe cold wind and harsh winter exposure where needed.",
      "Maintain a light mulch over the roots.",
      "Avoid waterlogging through cold wet weather."
    ]
  },
  {
    commonName: "Elderberry",
    slug: "elderberry",
    summary: "A vigorous shrub grown for spring bloom, dark berries, wildlife value, and edible harvests from selected varieties.",
    planting: [
      "Plant in spring or early fall in full sun to light shade.",
      "Use soil that stays reasonably moist and fertile.",
      "Give the shrub room because elderberry can become large and multi-stemmed."
    ],
    maintenance: [
      "Water during establishment and during dry periods, especially if fruiting is desired.",
      "Compost in spring can help support steady vigorous growth.",
      "A nearby second variety may improve berry production depending on the cultivar."
    ],
    pruning: [
      "Prune in dormancy by removing old weak stems and encouraging younger productive canes.",
      "Thin crowded growth so light reaches the interior.",
      "Remove suckers or wayward shoots if you want a more controlled plant."
    ],
    winterizing: [
      "Elderberry is hardy and usually needs little winter care once established.",
      "Mulch lightly around younger shrubs.",
      "Water before freeze-up if autumn has been very dry."
    ]
  },
  {
    commonName: "Escallonia",
    slug: "escallonia",
    summary: "A dense evergreen shrub for mild climates, useful for hedging and summer bloom in sunny coastal-style gardens.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Escallonia performs especially well in bright open sites with good airflow.",
      "Space shrubs by mature width if using them for hedging or screening."
    ],
    maintenance: [
      "Water regularly during the first season, then only during extended dry periods.",
      "Avoid heavy feeding because the plant is usually happy in average soils.",
      "Escallonia handles wind well once it is established."
    ],
    pruning: [
      "Prune after flowering to maintain hedge shape or encourage density.",
      "Trim lightly rather than shearing too hard into old wood.",
      "Remove any winter-burned or storm-damaged growth in spring."
    ],
    winterizing: [
      "Protect from severe cold where the shrub is near the edge of its hardiness range.",
      "Mulch lightly around the roots in colder spots.",
      "Water before freeze-up if autumn has been unusually dry."
    ]
  },
  {
    commonName: "Fatsia",
    slug: "fatsia",
    summary: "A bold broadleaf evergreen shrub for shade gardens, courtyards, and lush foliage structure.",
    planting: [
      "Plant in spring in shade to part shade with rich organic soil.",
      "Choose a sheltered site where the large leaves are protected from harsh drying wind.",
      "Use moisture-retentive soil that still drains reasonably well."
    ],
    maintenance: [
      "Keep soil evenly moist, especially during establishment and warm dry periods.",
      "Mulch to protect shallow roots and retain moisture.",
      "Fatsia benefits from steady conditions more than from frequent feeding."
    ],
    pruning: [
      "Prune lightly in spring to shape or reduce size.",
      "Remove damaged leaves and old stems as needed.",
      "Thin crowded growth if the center becomes too dense."
    ],
    winterizing: [
      "Protect from severe frost and drying winter wind in exposed locations.",
      "Mulch the root zone lightly for winter buffering.",
      "Remove storm-damaged leaves once spring begins."
    ]
  },
  {
    commonName: "Loropetalum",
    slug: "loropetalum",
    summary: "A colorful evergreen shrub valued for purple foliage and fringed spring flowers in warmer landscapes.",
    planting: [
      "Plant in spring in full sun to light shade in well-drained soil.",
      "Best foliage color usually comes with more sun, while some shade helps in hotter climates.",
      "Allow enough space for the natural rounded-to-arching form."
    ],
    maintenance: [
      "Water through establishment and during longer dry periods.",
      "Mulch lightly to conserve moisture and keep weeds down.",
      "This shrub generally needs only modest feeding if the soil is average."
    ],
    pruning: [
      "Prune after flowering if shaping is needed.",
      "Trim lightly to maintain form rather than cutting aggressively.",
      "Remove damaged or awkward branches selectively."
    ],
    winterizing: [
      "Protect from extreme cold if planted near the edge of its range.",
      "Water before freeze-up if autumn has been dry.",
      "Use a light mulch over the roots, keeping stems clear."
    ]
  },
  {
    commonName: "Mock Orange",
    slug: "mock-orange",
    summary: "A fragrant spring-blooming shrub with arching stems and classic white flowers for mixed borders and foundations.",
    planting: [
      "Plant in spring or early fall in full sun for the best bloom.",
      "Use average well-drained soil and give the shrub enough room to arch naturally.",
      "Mock Orange works well in mixed shrub borders and screening plantings."
    ],
    maintenance: [
      "Water during establishment and during dry spells.",
      "This shrub usually needs only light feeding or compost in spring.",
      "Open sun and airflow help keep the plant blooming strongly."
    ],
    pruning: [
      "Prune immediately after flowering because blooms are borne on older wood.",
      "Remove a few oldest stems at the base every few years to renew the shrub.",
      "Avoid late pruning that would remove next season's flowers."
    ],
    winterizing: [
      "Established plants generally need little winter care.",
      "Mulch lightly around younger plants in colder zones.",
      "Water before freeze-up if fall has been especially dry."
    ]
  },
  {
    commonName: "Ninebark",
    slug: "ninebark",
    summary: "A rugged shrub with peeling bark, seasonal interest, and excellent tolerance of a wide range of sunny sites.",
    planting: [
      "Plant in spring or early fall in full sun and average to well-drained soil.",
      "Ninebark is useful in screening, mixed shrub borders, and naturalistic planting.",
      "Give the plant room to show its mature shape and bark character."
    ],
    maintenance: [
      "Water during establishment, then only during prolonged drought.",
      "This shrub usually needs little fertilizer and handles tougher sites well.",
      "Sun keeps foliage color and flowering strongest on darker-leaved selections."
    ],
    pruning: [
      "Prune in late winter or after flowering if shaping is needed.",
      "Remove a few older stems at ground level every few years to renew the plant.",
      "Thin crowded branches rather than shearing heavily."
    ],
    winterizing: [
      "Ninebark is generally very hardy and low maintenance in winter.",
      "Mulch lightly around newer plants.",
      "Water before freeze-up if autumn has been dry."
    ]
  },
  {
    commonName: "Crape Myrtle",
    slug: "crape-myrtle",
    summary: "A warm-climate ornamental tree or large shrub with long summer bloom, attractive bark, and strong sun tolerance.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Choose an open hot site because Crape Myrtle needs warmth and light to flower well.",
      "Allow the tree or shrub enough room to mature without severe repeated cutting."
    ],
    maintenance: [
      "Water regularly during establishment, then during extended droughts.",
      "Feed lightly in spring if needed, especially in poorer soils.",
      "Good airflow helps keep foliage healthier through humid summers."
    ],
    pruning: [
      "Prune in late winter to remove crossing branches, suckers, and weak interior growth.",
      "Avoid severe topping because it spoils the structure and bark display.",
      "Shape with selective cuts that preserve the natural form."
    ],
    winterizing: [
      "Use a light mulch around the roots in colder parts of its range.",
      "Protect younger trunks where winter cold is marginal.",
      "Water before freeze-up if fall has been very dry."
    ]
  },
  {
    commonName: "Ginkgo",
    slug: "ginkgo",
    summary: "A durable ornamental tree with fan-shaped leaves, exceptional fall color, and strong urban tolerance.",
    planting: [
      "Plant in spring or early fall in full sun and well-drained soil.",
      "Choose a permanent site with enough room for the mature canopy.",
      "Ginkgo is adaptable and useful for streetscapes, lawns, and specimen planting."
    ],
    maintenance: [
      "Water during establishment and in severe drought.",
      "This tree usually needs little fertilizer once established.",
      "Protect young trunks from mower and string trimmer damage."
    ],
    pruning: [
      "Prune in dormancy to shape the young tree and remove dead or crossing branches.",
      "Maintain a clean framework while the tree is still young.",
      "Avoid unnecessary heavy pruning because the natural habit is strong."
    ],
    winterizing: [
      "Established trees are very hardy and need little winter care.",
      "Mulch lightly around younger trees in colder climates.",
      "Water before freeze-up if autumn has been unusually dry."
    ]
  },
  {
    commonName: "Hawthorn",
    slug: "hawthorn",
    summary: "A small flowering tree with spring bloom, berries, and strong wildlife value, useful for sunny landscapes.",
    planting: [
      "Plant in spring or early fall in full sun and average well-drained soil.",
      "Choose a site with enough room for the branching canopy and thorny stems.",
      "Hawthorn works well in wildlife gardens and smaller landscape spaces."
    ],
    maintenance: [
      "Water through establishment and during prolonged drought.",
      "Little fertilizer is usually needed unless growth is weak.",
      "Handle carefully during maintenance because many hawthorns are thorny."
    ],
    pruning: [
      "Prune in dormancy to remove dead, crossing, or damaged branches.",
      "Shape lightly while the tree is young to build a strong framework.",
      "Thin carefully if the canopy becomes too crowded."
    ],
    winterizing: [
      "Hawthorn is generally hardy with little winter maintenance needed.",
      "Water before freeze-up if fall has been dry.",
      "Protect younger trunks from mechanical damage."
    ]
  },
  {
    commonName: "Honeylocust",
    slug: "honeylocust",
    summary: "A light-canopied shade tree valued for toughness, filtered light, and adaptability in broad landscape use.",
    planting: [
      "Plant in spring or early fall in full sun and average to well-drained soil.",
      "Give the tree adequate room because it matures into a broad shade canopy.",
      "Honeylocust tolerates a wide range of sites once established."
    ],
    maintenance: [
      "Water during establishment and in prolonged drought.",
      "The tree usually needs little feeding and handles wind and urban conditions well.",
      "Protect the trunk and root zone from physical damage."
    ],
    pruning: [
      "Prune in dormancy to establish a strong branch framework.",
      "Remove dead, rubbing, or weak branches as needed.",
      "Thin lightly while young rather than making severe cuts later."
    ],
    winterizing: [
      "Established trees are very hardy and usually need no special winter care.",
      "Mulch lightly around younger trees.",
      "Water before freeze-up if the fall season has been dry."
    ]
  },
  {
    commonName: "Japanese Snowbell",
    slug: "japanese-snowbell",
    summary: "A graceful ornamental tree with drooping white spring flowers and a refined layered habit.",
    planting: [
      "Plant in spring or early fall in full sun to light shade.",
      "Use rich, well-drained soil with even moisture and organic matter.",
      "Choose a sheltered setting where the pendulous blooms and fine branching can be appreciated."
    ],
    maintenance: [
      "Water regularly during establishment and during dry periods.",
      "Mulch lightly around the roots to conserve moisture and moderate temperature swings.",
      "Japanese Snowbell appreciates steadier moisture than drought-tolerant trees."
    ],
    pruning: [
      "Prune lightly in dormancy to remove dead or crossing branches.",
      "Preserve the natural tiered form rather than cutting aggressively.",
      "Remove damaged growth after storms if needed."
    ],
    winterizing: [
      "Water before freeze-up if autumn has been very dry.",
      "Mulch the root zone lightly for younger trees.",
      "Protect from severe drying wind if the site is exposed."
    ]
  },
  {
    commonName: "Tulip Poplar",
    slug: "tulip-poplar",
    summary: "A fast-growing shade tree with distinctive leaves and tulip-like flowers, best suited to larger landscapes.",
    planting: [
      "Plant in spring or early fall in full sun and deep, reasonably moist soil.",
      "Choose a permanent location with plenty of room because Tulip Poplar becomes a very large tree.",
      "Use it where fast vertical growth and generous canopy are assets."
    ],
    maintenance: [
      "Water regularly during establishment and through prolonged drought.",
      "Mulch the root zone to protect young roots and reduce weed competition.",
      "This tree usually needs little feeding once well established."
    ],
    pruning: [
      "Prune in dormancy to shape young trees and remove dead or awkward branches.",
      "Maintain a strong framework early because the tree grows quickly.",
      "Avoid unnecessary heavy cutting on established specimens."
    ],
    winterizing: [
      "Mulch lightly around younger trees in colder regions.",
      "Water before freeze-up if autumn has been dry.",
      "Protect trunks from mechanical damage and winter animal browsing if needed."
    ]
  },
  {
    commonName: "Winterberry",
    slug: "winterberry",
    summary: "A deciduous holly valued for bright winter berries, native habitat value, and moisture tolerance.",
    planting: [
      "Plant in spring or early fall in full sun to light shade.",
      "Use soil that stays evenly moist and is rich in organic matter.",
      "For berry production, plant both male and female compatible selections nearby."
    ],
    maintenance: [
      "Keep the soil from drying out during establishment and in summer drought.",
      "Mulch to hold moisture and reduce root competition.",
      "Winterberry appreciates steadier moisture than many landscape shrubs."
    ],
    pruning: [
      "Prune in late winter or early spring if shaping is needed.",
      "Remove older stems gradually to renew berrying wood.",
      "Light thinning often works better than hard shearing."
    ],
    winterizing: [
      "Winterberry is hardy and needs little winter protection once established.",
      "Water before the ground freezes if autumn has been dry.",
      "Maintain mulch around the roots, keeping stems clear."
    ]
  },
  {
    commonName: "Bugleweed Bronze",
    slug: "bugleweed-bronze",
    summary: "A bronzed foliage groundcover form of ajuga used for shady carpets, edging, and low spring bloom.",
    planting: [
      "Plant in spring or fall in part shade to shade with rich, moisture-retentive soil.",
      "Use Bugleweed Bronze where a low foliage mat is wanted under shrubs or along paths.",
      "Space starts evenly so the groundcover can knit together without immediate crowding."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment.",
      "This groundcover is easy once rooted but may need thinning if conditions are very damp and crowded.",
      "Mulch lightly until the mat fills in."
    ],
    pruning: [
      "Trim flower spikes after bloom if you want a tidier carpet.",
      "Cut back ragged or winter-burned patches in spring.",
      "Lift and divide sections if you want to thin or expand the planting."
    ],
    winterizing: [
      "A light winter mulch is helpful for newer patches in colder climates.",
      "Keep wet leaf mats from smothering the foliage.",
      "Trim winter-damaged growth once the weather improves in spring."
    ]
  },
  {
    commonName: "Ice Plant",
    slug: "ice-plant",
    summary: "A low succulent groundcover for bright dry sites, prized for vivid flowers and strong drought tolerance.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Use raised beds, rock gardens, walls, or slopes if drainage is at all questionable.",
      "Space plants for eventual spread rather than crowding them tightly."
    ],
    maintenance: [
      "Water during establishment, then keep watering light and infrequent.",
      "Ice Plant thrives in lean dry soils and dislikes overfeeding.",
      "This plant performs best in intense light and fast drainage."
    ],
    pruning: [
      "Trim edges lightly if the patch spreads beyond its intended area.",
      "Remove any winter-damaged or mushy sections promptly in spring.",
      "Allow the plant to keep its natural low trailing habit."
    ],
    winterizing: [
      "Excellent drainage is the most important winter requirement.",
      "Avoid heavy mulch that traps moisture over the crown.",
      "Container plantings may need shelter from repeated deep freezing."
    ]
  },
  {
    commonName: "Mazus",
    slug: "mazus",
    summary: "A low flowering groundcover for moist edges, stepping areas, and sunny-to-lightly-shaded carpets.",
    planting: [
      "Plant in spring in part shade to sun where soil stays evenly moist.",
      "Use Mazus between stepping stones, at path edges, or in small lawn alternatives.",
      "Space starts so they can spread together naturally into a soft mat."
    ],
    maintenance: [
      "Keep soil evenly moist, especially through establishment and hot spells.",
      "Mazus is best where it does not dry out hard for long periods.",
      "Trim lightly if it creeps beyond the intended edge."
    ],
    pruning: [
      "Clip wandering edges or runners if the mat moves into nearby spaces.",
      "Shear lightly after bloom if the patch needs refreshing.",
      "Remove winter-damaged sections in spring and let fresh growth refill gaps."
    ],
    winterizing: [
      "Use a light mulch around new plantings in colder climates.",
      "Keep standing winter wet from smothering the crown.",
      "Trim damaged top growth once spring returns."
    ]
  },
  {
    commonName: "Sedum Dragon's Blood",
    slug: "sedum-dragons-blood",
    summary: "A colorful spreading sedum with red-toned foliage and strong performance in sunny, fast-draining sites.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Use it in rock gardens, retaining walls, dry borders, and container edges.",
      "Space plants so mats can connect gradually without trapped moisture."
    ],
    maintenance: [
      "Water while establishing, then only during prolonged drought.",
      "Avoid rich soil or excess fertilizer because sedum colors and habits are best in leaner sites.",
      "Full sun intensifies the red tones most strongly."
    ],
    pruning: [
      "Trim edges or wandering stems if the mat spreads too far.",
      "Remove winter-damaged pieces in spring once new growth starts.",
      "Refresh older patches by lifting and replanting vigorous pieces if needed."
    ],
    winterizing: [
      "Sharp drainage is the main winter protection.",
      "Do not bury the crown under heavy wet mulch.",
      "Container patches may need extra cold protection if exposed."
    ]
  },
  {
    commonName: "Fountain Grass",
    slug: "fountain-grass",
    summary: "A soft arching ornamental grass with showy plumes for sunny borders and containers.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Use Fountain Grass where you want movement, texture, and late-season interest.",
      "Space plants according to mature width because clumps can broaden attractively."
    ],
    maintenance: [
      "Water through establishment and during long dry spells.",
      "This grass generally needs little feeding in average soil.",
      "Full sun helps keep the plant dense and floriferous."
    ],
    pruning: [
      "Leave the foliage and plumes standing through winter.",
      "Cut the clump back in late winter or early spring before new growth begins.",
      "Divide mature clumps in spring if needed to maintain vigor."
    ],
    winterizing: [
      "Standing growth helps protect the crown and adds winter interest.",
      "Mulch lightly around young clumps in colder climates.",
      "Ensure the crown does not sit waterlogged through winter."
    ]
  },
  {
    commonName: "Hakone Grass",
    slug: "hakone-grass",
    summary: "A graceful shade ornamental grass with cascading foliage for woodland edges, containers, and soft border texture.",
    planting: [
      "Plant in spring or early fall in part shade with rich moisture-retentive soil.",
      "Use Hakone Grass where the arching habit can spill over edges or soften stones and paths.",
      "Choose a site that stays cooler and does not dry out too quickly."
    ],
    maintenance: [
      "Keep soil evenly moist, especially while plants establish and during hot weather.",
      "Mulch lightly to hold moisture and keep roots cool.",
      "This grass appreciates organic matter more than dry open sites."
    ],
    pruning: [
      "Cut back old foliage in late winter or early spring before fresh growth appears.",
      "Remove damaged blades during the season if needed.",
      "Divide larger clumps in spring when new growth begins."
    ],
    winterizing: [
      "Use a light mulch around the crown in colder climates.",
      "Keep heavy soggy debris from matting over the clump.",
      "Allow the foliage to stand until late winter for extra protection."
    ]
  },
  {
    commonName: "Mexican Feather Grass",
    slug: "mexican-feather-grass",
    summary: "A fine-textured ornamental grass with silky movement, best in sunny dry planting and containers.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Use it in gravel gardens, dry borders, and containers where movement is a feature.",
      "Avoid heavy fertile soil because it performs best in lean, open conditions."
    ],
    maintenance: [
      "Water during establishment, then only occasionally in prolonged drought.",
      "Do not overfeed because the plant prefers lower fertility.",
      "This grass thrives in bright dry exposure and open airflow."
    ],
    pruning: [
      "Comb out dead foliage lightly in late winter or early spring.",
      "Trim only if needed because the airy habit is part of the plant's appeal.",
      "Remove excess seedlings if the grass self-sows more than desired."
    ],
    winterizing: [
      "Good drainage is essential through winter.",
      "Use only a very light mulch if necessary.",
      "Keep crowns free of wet packed debris."
    ]
  },
  {
    commonName: "Muhly Grass",
    slug: "muhly-grass",
    summary: "A striking ornamental grass with airy pink plumes and excellent performance in hot sunny conditions.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Muhly Grass is excellent for mass planting, edges, and seasonal drama in dry gardens.",
      "Space clumps so the cloud-like fall bloom has room to show."
    ],
    maintenance: [
      "Water while establishing, then only during prolonged drought.",
      "This grass usually needs little fertilizer and handles heat very well.",
      "Open sunny sites produce the strongest plume display."
    ],
    pruning: [
      "Leave foliage and plumes standing through winter for texture.",
      "Cut the plant back in late winter or early spring before new growth resumes.",
      "Divide older clumps in spring if vigor declines."
    ],
    winterizing: [
      "Standing growth offers both structure and crown protection over winter.",
      "Mulch lightly only if needed in colder exposed sites.",
      "Avoid heavy wet mulch crowding the base."
    ]
  },
  {
    commonName: "Chamomile",
    slug: "chamomile",
    summary: "A delicate herb and flowering annual or perennial used for tea, pollinators, and soft cottage-garden texture.",
    planting: [
      "Sow or transplant in spring in full sun to light shade.",
      "Use well-drained soil and avoid overly rich ground that can make stems weak.",
      "Chamomile works well in herb beds, edging, and container gardens."
    ],
    maintenance: [
      "Water during establishment, then keep moisture moderate.",
      "This herb performs best with good light and not too much fertilizer.",
      "Harvest flowers regularly if you want a steady tea crop."
    ],
    pruning: [
      "Snip open blooms often for harvest.",
      "Trim leggy stems lightly if the plant sprawls too much.",
      "Remove tired plants after peak bloom if the display declines."
    ],
    winterizing: [
      "Annual forms are usually replaced after the season.",
      "Perennial forms benefit from light mulch in colder climates.",
      "Allow some flowers to set seed if you want reseeding next year."
    ]
  },
  {
    commonName: "Fennel",
    slug: "fennel",
    summary: "A tall aromatic herb or vegetable with feathery foliage, strong flavor, and pollinator appeal.",
    planting: [
      "Sow or transplant in spring in full sun and well-drained soil.",
      "Give fennel room because it grows tall and wide.",
      "Plant away from some sensitive crops if you are mixing it into a vegetable bed."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment and bulb development if growing Florence fennel.",
      "Feed lightly if the bed is poor, but avoid forcing too much soft growth.",
      "Fennel handles heat well once established."
    ],
    pruning: [
      "Harvest leaves and stems as needed.",
      "Cut flower heads if you want to delay seed set, or leave them for seed harvest and pollinators.",
      "Remove spent stems after the season finishes."
    ],
    winterizing: [
      "Annual forms are usually replanted each season.",
      "Perennial herb fennel can be mulched lightly in colder climates.",
      "Cut down old top growth after frost or in late winter."
    ]
  },
  {
    commonName: "Thyme",
    slug: "thyme",
    summary: "A low aromatic herb for sunny dry spots, edging, and culinary harvest with excellent drainage needs.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Use thyme in raised herb beds, gravel gardens, and containers.",
      "Avoid rich heavy soil that holds too much moisture."
    ],
    maintenance: [
      "Water during establishment, then keep the soil on the drier side.",
      "Do not overfeed because flavor and habit are best in leaner conditions.",
      "Harvest stems often to keep the plant compact."
    ],
    pruning: [
      "Trim lightly after bloom or after active spring growth.",
      "Avoid cutting deeply into old leafless wood.",
      "Remove winter-damaged tips once new growth starts."
    ],
    winterizing: [
      "Excellent drainage is the best winter protection.",
      "Use only light mulch in colder climates and keep it off the crown.",
      "Protect containers from repeated freeze-thaw cycles."
    ]
  },
  {
    commonName: "Bird's Nest Fern",
    slug: "birds-nest-fern",
    summary: "A tropical houseplant with broad wavy fronds that prefers humidity, warmth, and indirect light.",
    planting: [
      "Pot in a loose, moisture-retentive but well-drained indoor mix.",
      "Use a container with drainage and keep the crown above soggy mix.",
      "Place in medium to bright indirect light away from harsh sun."
    ],
    maintenance: [
      "Keep the mix lightly moist but never waterlogged.",
      "Increase humidity if frond edges dry or brown.",
      "Avoid pouring water directly into the center crown where rot can develop."
    ],
    pruning: [
      "Remove damaged or yellowing fronds at the base.",
      "Do not trim the growing center because it is the plant's main crown.",
      "Clean away spent material regularly to keep the rosette tidy."
    ],
    winterizing: [
      "Protect from cold drafts and chilly glass.",
      "Keep winter humidity up if indoor air becomes dry.",
      "Reduce watering slightly but do not let the mix dry hard."
    ]
  },
  {
    commonName: "Calathea",
    slug: "calathea",
    summary: "A foliage houseplant prized for patterned leaves, but happiest with warmth, humidity, and consistent care.",
    planting: [
      "Pot in a well-drained indoor mix that still holds some moisture.",
      "Use a pot with drainage holes and avoid a container that is much too large.",
      "Keep in medium to bright indirect light out of strong direct sun."
    ],
    maintenance: [
      "Maintain even moisture without letting the mix stay soggy.",
      "Higher humidity helps prevent browning leaf edges.",
      "Stable indoor conditions matter more than frequent fertilizer."
    ],
    pruning: [
      "Remove damaged or yellow leaves at the base.",
      "Trim only dead edges lightly if needed for appearance.",
      "Repot or divide carefully when the clump becomes crowded."
    ],
    winterizing: [
      "Keep away from cold drafts, heater vents, and chilly windows.",
      "Reduce watering slightly during slower winter growth while keeping the soil evenly moist overall.",
      "Increase humidity if the heating season dries the air."
    ]
  },
  {
    commonName: "Croton",
    slug: "croton",
    summary: "A vivid foliage houseplant that needs strong light and warm stable conditions for the best color.",
    planting: [
      "Pot in a well-drained indoor mix with a container that drains freely.",
      "Bright light is essential if you want strong leaf color.",
      "Place where the plant will not be moved frequently because crotons dislike abrupt change."
    ],
    maintenance: [
      "Water when the upper part of the mix begins to dry, but do not let it stay soggy.",
      "Warmth and humidity help keep leaves from dropping.",
      "Bright light indoors is the main key to vivid foliage."
    ],
    pruning: [
      "Prune lightly above a node if you want to shape or encourage branching.",
      "Remove damaged leaves and weak stems cleanly.",
      "Rotate the pot occasionally for more balanced growth."
    ],
    winterizing: [
      "Protect from cold drafts and temperature swings.",
      "Maintain bright light and moderate humidity in winter.",
      "Avoid letting the plant dry out hard during the indoor heating season."
    ]
  },
  {
    commonName: "Dieffenbachia",
    slug: "dieffenbachia",
    summary: "A bold indoor foliage plant with patterned leaves that grows well in medium to bright indirect light.",
    planting: [
      "Pot in a well-drained houseplant mix with drainage holes.",
      "Use a container only slightly larger than the root mass.",
      "Keep in medium to bright indirect light away from harsh sun."
    ],
    maintenance: [
      "Water when the top inch or so of mix begins to dry.",
      "Avoid overwatering because soggy soil can cause stem and root problems.",
      "Stable indoor warmth helps the plant keep its strong foliage."
    ],
    pruning: [
      "Remove yellow or damaged leaves at the base.",
      "Cut back tall canes above a node if the plant gets leggy.",
      "Repot or divide when the clump becomes crowded."
    ],
    winterizing: [
      "Keep away from cold windows and drafts.",
      "Water a bit less during slower winter growth.",
      "Maintain moderate humidity if indoor air becomes very dry."
    ]
  },
  {
    commonName: "Dracaena Marginata",
    slug: "dracaena-marginata",
    summary: "A clean architectural houseplant with narrow leaves and excellent tolerance for average indoor conditions.",
    planting: [
      "Pot in a well-drained indoor mix with good drainage.",
      "Use a stable container because the plant grows upright over time.",
      "Place in medium to bright indirect light."
    ],
    maintenance: [
      "Water when the mix has dried somewhat, but do not leave it soggy.",
      "Dracaena Marginata tolerates average indoor humidity fairly well.",
      "Avoid fluoride-heavy water if tip browning becomes a pattern."
    ],
    pruning: [
      "Cut canes at the desired height to encourage branching below the cut.",
      "Remove damaged leaves and dried tips as needed.",
      "Rotate the pot now and then to keep the plant balanced."
    ],
    winterizing: [
      "Keep away from cold drafts and very chilly glass.",
      "Reduce watering slightly during winter's slower growth period.",
      "Maintain steady light and indoor warmth."
    ]
  },
  {
    commonName: "Aubergine",
    slug: "aubergine",
    summary: "A heat-loving edible crop grown for glossy fruit, needing warmth, sun, and fertile soil for best yields.",
    planting: [
      "Transplant after the soil and nights are thoroughly warm.",
      "Use full sun and rich well-drained soil amended with compost.",
      "Stake or cage plants early if you expect heavy fruiting."
    ],
    maintenance: [
      "Keep soil evenly moist, especially during flowering and fruit set.",
      "Feed regularly during the productive season, especially in containers.",
      "Mulch lightly to reduce splash and stabilize soil moisture."
    ],
    pruning: [
      "Remove damaged lower leaves and weak side shoots as needed.",
      "Harvest fruit while skins are glossy and seeds are still immature.",
      "Support heavy stems if fruit weight increases."
    ],
    winterizing: [
      "Aubergine is treated as a warm-season annual outdoors.",
      "Remove plants once cold weather ends production.",
      "Clean up spent crops and rotate planting areas where possible."
    ]
  },
  {
    commonName: "Broccoli",
    slug: "broccoli",
    summary: "A cool-season edible crop that rewards fertile soil, even moisture, and timely harvest.",
    planting: [
      "Start in spring or late summer for cool-weather harvests.",
      "Use fertile soil enriched with compost in full sun.",
      "Space plants properly so heads can size up without crowding."
    ],
    maintenance: [
      "Keep soil evenly moist for steady growth and tight heads.",
      "Mulch lightly to suppress weeds and help regulate soil temperature.",
      "Feed with compost or a balanced vegetable fertilizer if the bed is not rich enough."
    ],
    pruning: [
      "Harvest the central head before buds loosen or open.",
      "Leave the plant in place for side shoots if the variety supports them.",
      "Remove damaged or pest-heavy leaves as needed."
    ],
    winterizing: [
      "Broccoli handles cool weather well and can keep producing through light frost.",
      "Use row cover or cold protection for harsher freezes if you want to extend harvest.",
      "Remove plants once they bolt or severe cold finishes the crop."
    ]
  },
  {
    commonName: "Carrot",
    slug: "carrot",
    summary: "A root crop that does best in loose soil, cool-to-mild weather, and consistent moisture during establishment.",
    planting: [
      "Direct sow in spring or late summer into loose stone-free soil.",
      "Use raised beds or containers with deep friable soil if your ground is heavy.",
      "Thin seedlings early so roots have room to size up cleanly."
    ],
    maintenance: [
      "Keep soil evenly moist during germination and root development.",
      "Mulch lightly after seedlings establish to reduce weeds and keep moisture steady.",
      "Avoid heavy nitrogen feeding because it encourages excess top growth over root size."
    ],
    pruning: [
      "Thin crowded seedlings promptly for straighter, stronger roots.",
      "Remove damaged or pest-affected tops as needed.",
      "Harvest in stages as roots reach the size you want."
    ],
    winterizing: [
      "In mild climates, carrots can stay in the ground with mulch for extended harvest.",
      "Use light row cover or mulch to protect roots from harder freezes.",
      "Lift and store the crop before deep freezing if your winters are severe."
    ]
  },
  {
    commonName: "Fig",
    slug: "fig",
    summary: "A productive fruiting shrub or small tree for warm sunny sites with good drainage and a long season.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Choose a warm open site or a protected wall if winter cold is a concern.",
      "Give the plant room to spread because mature figs become broad and productive."
    ],
    maintenance: [
      "Water during establishment, then only during prolonged dry periods once rooted.",
      "Too much fertilizer can push leafy growth at the expense of fruit.",
      "Full sun and summer heat support the best ripening."
    ],
    pruning: [
      "Prune in dormancy to control size and remove damaged wood.",
      "Thin crowded interior branches so light reaches the fruiting wood.",
      "Limit hard pruning if you want to maintain steady fruit production."
    ],
    winterizing: [
      "Protect from severe cold if grown near the edge of its hardiness range.",
      "Mulch the root zone lightly and consider wrapping young plants in colder regions.",
      "Container figs may need sheltered overwintering."
    ]
  },
  {
    commonName: "Lettuce",
    slug: "lettuce",
    summary: "A fast, cool-season edible that performs best with rich soil, steady moisture, and timely harvest.",
    planting: [
      "Sow or transplant in spring and again in late summer for fall harvest.",
      "Use fertile moisture-retentive soil in full sun to part shade.",
      "Succession sow frequently if you want a continuous crop."
    ],
    maintenance: [
      "Keep soil evenly moist so leaves stay tender and flavorful.",
      "Mulch lightly to reduce weeds and stabilize moisture.",
      "Provide afternoon shade in warmer climates to slow bolting."
    ],
    pruning: [
      "Harvest outer leaves first for cut-and-come-again types.",
      "Cut full heads when they are firm and mature.",
      "Remove bolting or damaged plants promptly to keep the bed fresh."
    ],
    winterizing: [
      "Lettuce can continue in cool weather with row cover or light frost protection.",
      "Fall sowings often do especially well in mild climates.",
      "Replace the crop once hard freeze or bolting ends production."
    ]
  },
  {
    commonName: "Watermelon",
    slug: "watermelon",
    summary: "A heat-loving vine that needs sun, space, and steady summer moisture for large sweet fruit.",
    planting: [
      "Sow or transplant only after soil is warm and nights stay mild.",
      "Use full sun and fertile, well-drained soil enriched with compost.",
      "Give vines plenty of room or use a strong trellis for compact types."
    ],
    maintenance: [
      "Water consistently while vines establish and fruit develops.",
      "Reduce water slightly as fruit nears ripening to help concentrate flavor.",
      "Mulch lightly to conserve moisture and keep fruit cleaner."
    ],
    pruning: [
      "Guide or redirect vines if they spread into unwanted areas.",
      "Remove damaged leaves and harvest fruit at full ripeness.",
      "Thin excess fruit only if you want fewer but larger melons."
    ],
    winterizing: [
      "Watermelon is a warm-season annual and ends with frost.",
      "Harvest mature fruit before cold weather arrives.",
      "Remove vines and rotate the crop area if possible."
    ]
  },
  {
    commonName: "Kalanchoe",
    slug: "kalanchoe",
    summary: "A flowering succulent houseplant that prefers bright light, dry intervals, and tidy compact growth.",
    planting: [
      "Pot in a sharply draining succulent mix with good drainage holes.",
      "Use a container that is only slightly larger than the root mass.",
      "Place in bright light with some gentle sun for best flowering."
    ],
    maintenance: [
      "Water thoroughly, then let the mix dry well before watering again.",
      "Avoid constant moisture around the crown and leaves.",
      "Bright light and moderate feeding help support rebloom and compact shape."
    ],
    pruning: [
      "Remove spent flower stems and faded leaves cleanly.",
      "Trim leggy growth back to leaf nodes to refresh the plant.",
      "Repot only when the plant becomes crowded or top-heavy."
    ],
    winterizing: [
      "Protect from frost and cold drafts.",
      "Water sparingly during slower winter growth.",
      "Keep the plant bright if you want the best chance of future bloom."
    ]
  },
  {
    commonName: "Paddle Plant",
    slug: "paddle-plant",
    summary: "A bold succulent with broad flat leaves that color up beautifully in strong light and dry conditions.",
    planting: [
      "Plant in a fast-draining succulent mix in a pot with strong drainage.",
      "Use bright light and acclimate gradually to stronger direct sun.",
      "Choose a container that supports the broad leaf rosette securely."
    ],
    maintenance: [
      "Water deeply, then allow the mix to dry almost completely before watering again.",
      "Avoid crowding and overfeeding because compact growth is best.",
      "Strong light helps the leaf edges color most vividly."
    ],
    pruning: [
      "Remove old lower leaves as they dry naturally.",
      "Separate offsets if you want to propagate or reduce crowding.",
      "Trim only damaged growth; the rosette form is best left natural."
    ],
    winterizing: [
      "Protect from hard frost and cold wet conditions.",
      "Water very lightly in winter.",
      "Keep the plant bright and on the dry side until active growth resumes."
    ]
  },
  {
    commonName: "Jasmine",
    slug: "jasmine",
    summary: "A fragrant flowering vine for sunny warm sites, trellises, and sheltered outdoor walls.",
    planting: [
      "Plant in spring in full sun to light shade with well-drained soil.",
      "Provide a trellis, fence, or other support before vines lengthen.",
      "Choose a warm site where fragrance can be enjoyed close to seating or walkways."
    ],
    maintenance: [
      "Water regularly during establishment and through longer dry spells.",
      "Mulch lightly around the roots to hold even moisture.",
      "A modest spring feed can support flowering if the soil is poor."
    ],
    pruning: [
      "Prune after flowering to shape and control size.",
      "Tie or redirect young stems while they are flexible.",
      "Remove dead or tangled growth to keep the vine airy."
    ],
    winterizing: [
      "Protect from severe cold if planted near the edge of its hardiness range.",
      "Mulch the root zone lightly before winter.",
      "Container jasmine may need a sheltered overwintering spot in colder climates."
    ]
  },
  {
    commonName: "Passionflower",
    slug: "passionflower",
    summary: "A vigorous flowering vine with exotic blooms, pollinator appeal, and fast warm-season growth.",
    planting: [
      "Plant in spring in full sun with well-drained soil and a sturdy support.",
      "Give the vine room to climb because growth can be fast and wide.",
      "Use it where both flowers and pollinator activity can be enjoyed."
    ],
    maintenance: [
      "Water during establishment and during long dry stretches.",
      "Mulch lightly to protect the roots and keep soil moisture steadier.",
      "This vine often grows vigorously once it is settled."
    ],
    pruning: [
      "Prune in late winter or early spring to control size and remove dead wood.",
      "Guide new shoots onto supports as growth begins.",
      "Trim wandering stems through the season if the vine outgrows its space."
    ],
    winterizing: [
      "In colder regions, mulch the root zone to protect the crown and roots.",
      "Top growth may die back where winters are colder, then regrow from the base.",
      "Container plants may need winter shelter."
    ]
  },
  {
    commonName: "Trumpet Vine",
    slug: "trumpet-vine",
    summary: "A bold vigorous vine with vivid summer flowers and strong hummingbird appeal, best used where its spread can be managed.",
    planting: [
      "Plant in spring in full sun with average well-drained soil.",
      "Provide a very sturdy arbor, fence, or wall support because the vine becomes heavy.",
      "Choose a site where strong growth and suckering can be tolerated or managed."
    ],
    maintenance: [
      "Water during establishment, then only during extended drought.",
      "This vine is very adaptable and usually needs little feeding.",
      "Monitor suckers and runners if you want to keep it controlled."
    ],
    pruning: [
      "Prune hard in late winter or early spring to control size and encourage flowering growth.",
      "Remove unwanted suckers promptly.",
      "Trim summer shoots if they spread into unwanted areas."
    ],
    winterizing: [
      "Established plants are hardy and need little winter care.",
      "Mulch lightly around younger plants in colder climates.",
      "Secure stems if the site is very windy."
    ]
  },
  {
    commonName: "Virginia Creeper",
    slug: "virginia-creeper",
    summary: "A vigorous native vine with strong fall color, useful for fast coverage where a robust climber is appropriate.",
    planting: [
      "Plant in spring or early fall in full sun to shade depending on the site.",
      "Use average well-drained soil and provide space or support for vigorous climbing.",
      "Virginia Creeper is best where its fast growth can be appreciated and managed."
    ],
    maintenance: [
      "Water during establishment, then only during long droughts.",
      "This vine is durable and usually needs little feeding.",
      "Watch its spread around structures and nearby plants."
    ],
    pruning: [
      "Cut back hard whenever the vine exceeds its intended bounds.",
      "Remove shoots from sensitive areas like gutters, trim, and roofs as needed.",
      "Prune in late winter for major size control or during the season for containment."
    ],
    winterizing: [
      "Virginia Creeper is hardy and generally needs no special winter protection.",
      "Mulch lightly around younger roots if desired.",
      "Remove storm-damaged vines and tidy supports before spring growth resumes."
    ]
  },
  {
    commonName: "Bergenia",
    slug: "bergenia",
    summary: "A dependable perennial with broad evergreen leaves and early spring flowers for cool, moist borders and edging.",
    planting: [
      "Plant in spring or early fall in part shade to filtered sun.",
      "Use rich moisture-retentive soil with organic matter.",
      "Bergenia works well at path edges, in woodland borders, and near waterwise-shade transitions."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment and dry periods.",
      "Mulch lightly to protect roots and moderate soil temperature.",
      "Older leaves may bronze or weather attractively through winter in cooler climates."
    ],
    pruning: [
      "Remove winter-damaged or tattered leaves in early spring.",
      "Cut spent flower stems after bloom if you prefer a cleaner look.",
      "Divide crowded clumps every few years if the center weakens."
    ],
    winterizing: [
      "Leave healthy foliage in place for extra winter protection.",
      "Use a light mulch in colder exposed areas.",
      "Clear away soggy debris so crowns stay clean and open."
    ]
  },
  {
    commonName: "Bluebeard",
    slug: "bluebeard",
    summary: "A late-season shrub with airy blue flowers and strong pollinator value for sunny dry gardens.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Bluebeard performs best in warm open sites and leaner garden conditions.",
      "Allow enough room for the rounded mature shape."
    ],
    maintenance: [
      "Water during establishment, then only during prolonged drought.",
      "Avoid rich soil or excess fertilizer because bloom and habit are best in leaner sites.",
      "This shrub thrives in heat and full light."
    ],
    pruning: [
      "Prune in late winter or very early spring because it flowers on new growth.",
      "Cut back old stems to encourage vigorous fresh flowering shoots.",
      "Remove dead wood and shape lightly as new growth begins."
    ],
    winterizing: [
      "Good drainage is the most important winter protection.",
      "Use light mulch only where needed and keep it away from the crown.",
      "Protect younger plants from severe winter exposure if necessary."
    ]
  },
  {
    commonName: "Butterfly Bush",
    slug: "butterfly-bush",
    summary: "A fast-growing flowering shrub for sunny borders, known for long bloom and strong butterfly appeal.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Choose an open site with good airflow and space for the mature arching shape.",
      "Butterfly Bush works best where summer bloom can be enjoyed and deadheading is easy."
    ],
    maintenance: [
      "Water during establishment, then only during extended drought.",
      "This shrub generally needs little fertilizer and thrives in bright sun.",
      "Remove spent flower heads through the season if you want a tidier plant and fewer seedlings."
    ],
    pruning: [
      "Prune in late winter or early spring because the plant flowers on new growth.",
      "Cut back firmly to maintain size and encourage strong flowering stems.",
      "Remove any winter-killed wood once new growth begins."
    ],
    winterizing: [
      "Mulch the base lightly in colder climates where top growth may die back.",
      "Good drainage helps prevent winter losses.",
      "Wait to cut the plant down until late winter or early spring."
    ]
  },
  {
    commonName: "Canna Lily",
    slug: "canna-lily",
    summary: "A bold tropical-looking perennial with large leaves and bright summer flowers for hot, moisture-rich beds.",
    planting: [
      "Plant rhizomes or starts in warm spring soil after frost danger has passed.",
      "Use full sun and rich soil with consistent moisture.",
      "Cannas are excellent for tropical-style borders, large containers, and near-water planting."
    ],
    maintenance: [
      "Keep soil evenly moist and feed during active growth if you want lush foliage and bloom.",
      "Mulch to hold moisture in hot weather.",
      "Tall varieties may need some shelter or support in windy sites."
    ],
    pruning: [
      "Remove spent flower stalks to keep the plant tidy and encourage continued flowering.",
      "Cut damaged leaves away as needed through the season.",
      "Trim top growth down after frost blackens the foliage."
    ],
    winterizing: [
      "Lift rhizomes in colder climates after frost and store them dry but frost-free.",
      "In milder regions, mulch deeply over the root zone for winter protection.",
      "Allow lifted rhizomes to dry briefly before storage."
    ]
  },
  {
    commonName: "Carex",
    slug: "carex",
    summary: "A versatile sedge used for edging, shade gardens, and soft evergreen texture in moisture-retentive soils.",
    planting: [
      "Plant in spring or fall in part shade to shade, though some forms take more sun with moisture.",
      "Use organic-rich soil that stays evenly moist but drains reasonably well.",
      "Carex is useful in woodland beds, modern edging, and container combinations."
    ],
    maintenance: [
      "Keep new plantings evenly moist until they root in well.",
      "Many carex selections appreciate regular moisture more than drought.",
      "Mulch lightly to conserve moisture and reduce weed pressure."
    ],
    pruning: [
      "Comb or trim away winter-worn foliage in late winter or early spring.",
      "Shear lightly only if the clump becomes messy or flattened.",
      "Divide mature clumps if needed to renew vigor."
    ],
    winterizing: [
      "Evergreen foliage can remain attractive through winter with little help.",
      "Use a light mulch around newer plantings in colder climates.",
      "Clear away soggy debris that may flatten the clump."
    ]
  },
  {
    commonName: "Caryopteris Gold",
    slug: "caryopteris-gold",
    summary: "A golden-leaved late-season shrub with blue flowers for sunny dry borders and pollinator-friendly planting.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Strong sun helps the golden foliage color show at its best.",
      "Use it where late-summer flower color and foliage contrast can stand out."
    ],
    maintenance: [
      "Water through establishment, then only during extended drought.",
      "Avoid rich heavy soil because the shrub performs best in leaner open conditions.",
      "This plant thrives in hot sunny borders."
    ],
    pruning: [
      "Prune in late winter or early spring because flowering occurs on new growth.",
      "Cut back older stems to encourage a compact flowering framework.",
      "Remove winter-killed growth as the season begins."
    ],
    winterizing: [
      "Ensure excellent drainage through winter.",
      "Use light mulch only where needed and keep it off the crown.",
      "Protect younger plants from severe winter exposure if necessary."
    ]
  },
  {
    commonName: "Clivia",
    slug: "clivia",
    summary: "A long-lived flowering houseplant with strap leaves and bold bloom clusters that prefers steady indoor conditions.",
    planting: [
      "Pot in a well-drained indoor mix with a pot that is only modestly larger than the root mass.",
      "Clivia actually blooms better when somewhat root-bound.",
      "Use bright indirect light or filtered light rather than strong direct sun."
    ],
    maintenance: [
      "Water when the upper part of the mix begins to dry, but avoid soggy soil.",
      "Feed lightly during active growth and reduce feeding during rest periods.",
      "Stable indoor warmth and steady placement help support bloom cycles."
    ],
    pruning: [
      "Remove spent flower stalks at the base once bloom finishes.",
      "Trim away damaged leaves cleanly as needed.",
      "Divide offsets only when necessary because the plant prefers not to be disturbed often."
    ],
    winterizing: [
      "Allow a cooler, slightly drier rest period if you want to encourage future flowering.",
      "Keep the plant away from frost and cold drafts.",
      "Resume more regular watering as flower growth begins again."
    ]
  },
  {
    commonName: "Columbine",
    slug: "columbine",
    summary: "A graceful spring-blooming perennial with nodding flowers that performs well in sun to part shade.",
    planting: [
      "Plant in spring or fall in full sun to part shade depending on climate.",
      "Use average well-drained soil with some organic matter.",
      "Columbine is ideal for cottage gardens, pollinator beds, and woodland-edge planting."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment and through dry periods.",
      "The plant often self-seeds gently if flowers are left to mature.",
      "Open airflow helps keep foliage healthier after bloom."
    ],
    pruning: [
      "Deadhead if you want to limit self-seeding or tidy the planting.",
      "Cut back tired foliage after bloom if it becomes ragged.",
      "Remove damaged leaves as needed, especially if leaf miners appear."
    ],
    winterizing: [
      "Use light mulch around the crown in colder climates.",
      "Cut back top growth once it has fully declined.",
      "Allow some reseeding if you want naturalized drift planting."
    ]
  },
  {
    commonName: "Crocosmia",
    slug: "crocosmia",
    summary: "A summer-flowering perennial with sword-like foliage and bright arching blooms that attract hummingbirds.",
    planting: [
      "Plant corms or starts in spring in full sun and well-drained soil.",
      "Choose a warm open site where the flower stems can rise above surrounding plants.",
      "Crocosmia works well in sunny borders and bold pollinator gardens."
    ],
    maintenance: [
      "Water during establishment and through dry spells while plants are actively growing.",
      "Mulch lightly to keep moisture more even in hot weather.",
      "Lift and divide congested clumps every few years if bloom declines."
    ],
    pruning: [
      "Remove spent flower stems after blooming.",
      "Leave foliage in place until it yellows naturally to recharge the corms.",
      "Cut down old leaves once they have fully finished."
    ],
    winterizing: [
      "Mulch in colder climates to protect corms through winter.",
      "In very cold regions, lift corms if necessary and store them frost-free.",
      "Ensure the planting site drains well over winter."
    ]
  },
  {
    commonName: "Dusty Miller",
    slug: "dusty-miller",
    summary: "A silver-foliaged plant used for contrast, edging, and dry sunny container combinations.",
    planting: [
      "Plant after frost in full sun and sharply drained soil.",
      "Use Dusty Miller to brighten mixed beds, edging, and containers with silvery foliage.",
      "Avoid heavy wet soil because the plant prefers brighter, drier conditions."
    ],
    maintenance: [
      "Water while establishing, then only moderately once rooted.",
      "Too much fertility can make growth softer and less silvery.",
      "Strong sun helps maintain compact growth and vivid foliage color."
    ],
    pruning: [
      "Pinch or trim lightly to keep the plant dense and tidy.",
      "Remove flower stalks if you want the plant to focus on foliage.",
      "Cut away any damaged or ragged growth during the season."
    ],
    winterizing: [
      "Dusty Miller is often grown as an annual in colder climates.",
      "In milder climates, protect roots lightly from severe freezes.",
      "Trim winter-damaged growth in spring if plants carry over."
    ]
  },
  {
    commonName: "Elephant Ear",
    slug: "elephant-ear",
    summary: "A bold tropical foliage plant with oversized leaves that thrives in warmth, moisture, and rich soil.",
    planting: [
      "Plant after frost in warm soil in full sun to part shade depending on the variety.",
      "Use rich moisture-retentive soil or large containers with generous organic matter.",
      "Give Elephant Ear enough room because the leaves become broad and dramatic quickly."
    ],
    maintenance: [
      "Keep soil consistently moist during active summer growth.",
      "Feed regularly if you want very lush foliage, especially in containers.",
      "Shelter large leaves from tearing wind when possible."
    ],
    pruning: [
      "Remove damaged or torn leaves at the base as needed.",
      "Cut spent flower stalks if they appear and you want the plant focusing on foliage.",
      "Trim all top growth down after frost blackens the leaves."
    ],
    winterizing: [
      "In colder climates, lift bulbs or tubers after frost and store them frost-free.",
      "In milder zones, mulch deeply over the root zone for winter protection.",
      "Let lifted tubers dry briefly before storage."
    ]
  },
  {
    commonName: "Euonymus",
    slug: "euonymus",
    summary: "A versatile evergreen or semi-evergreen shrub used for hedging, structure, and bright foliage accents.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use average well-drained soil and allow room for the mature spread or hedge line.",
      "Euonymus works well in foundations, low hedges, and mixed evergreen borders."
    ],
    maintenance: [
      "Water regularly during establishment, then during longer dry periods.",
      "This shrub usually needs little fertilizer beyond a light spring compost top-dress.",
      "Sun often improves foliage color on variegated types."
    ],
    pruning: [
      "Prune in late winter or after the first flush of growth to shape and control size.",
      "Trim hedge forms lightly and more often rather than cutting back hard infrequently.",
      "Remove wayward or all-green reversion shoots on variegated plants."
    ],
    winterizing: [
      "Established plants generally need little winter care.",
      "Mulch lightly around new plantings in colder climates.",
      "Protect exposed evergreen forms from drying wind if necessary."
    ]
  },
  {
    commonName: "Gaura White",
    slug: "gaura-white",
    summary: "A white-flowering gaura selection with airy stems and long bloom for hot sunny borders.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Use Gaura White where light airy bloom can move through open sunny plantings.",
      "Avoid rich heavy ground because the plant performs best in leaner sites."
    ],
    maintenance: [
      "Water during establishment, then only in prolonged drought.",
      "Do not overfeed; too much fertility weakens the natural habit.",
      "This plant thrives in heat and bright open exposure."
    ],
    pruning: [
      "Trim back by about one-third if the plant becomes floppy or tired midsummer.",
      "Remove broken or spent stems to keep it fresh.",
      "Cut old growth back in late winter or early spring."
    ],
    winterizing: [
      "Leave some top growth in place to help protect the crown in winter.",
      "Avoid heavy wet mulch directly over the base.",
      "Cut back once new spring growth resumes."
    ]
  },
  {
    commonName: "Hebe",
    slug: "hebe",
    summary: "A tidy evergreen shrub with compact habit and summer bloom, especially useful in milder coastal-style climates.",
    planting: [
      "Plant in spring in full sun to light shade with good drainage.",
      "Choose a sheltered site if winter wind or severe cold is a concern.",
      "Use Hebe in borders, low hedges, and containers where the evergreen form can be appreciated."
    ],
    maintenance: [
      "Water during establishment and during long dry periods.",
      "Avoid overfeeding because Hebe usually grows best with moderate fertility.",
      "Good airflow helps keep the compact mound healthy."
    ],
    pruning: [
      "Prune lightly after flowering to maintain shape.",
      "Remove any dead or winter-damaged tips once growth begins.",
      "Avoid heavy pruning into old woody stems."
    ],
    winterizing: [
      "Protect from harsh winter wind and severe freezes in colder regions.",
      "Mulch lightly around the roots, keeping stems clear.",
      "Container plants may need sheltered overwintering where winters are colder."
    ]
  },
  {
    commonName: "Heuchera Lime",
    slug: "heuchera-lime",
    summary: "A bright chartreuse coral-bells selection for shade contrast, edging, and container foliage color.",
    planting: [
      "Plant in spring or early fall in part shade with well-drained soil rich in organic matter.",
      "Use this selection where the lime foliage can brighten darker beds or containers.",
      "Set crowns level with the soil surface and avoid deep planting."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment and dry spells.",
      "Mulch lightly to protect roots and reduce moisture swings.",
      "Provide protection from harsh afternoon sun in hotter climates."
    ],
    pruning: [
      "Remove spent flower stalks after bloom if you want a cleaner foliage display.",
      "Trim off winter-damaged leaves when spring growth begins.",
      "Divide older clumps if crowns rise or the center starts to thin."
    ],
    winterizing: [
      "Use a light mulch to help prevent winter heaving.",
      "Leave healthy foliage in place through winter for extra crown protection.",
      "Clear soggy debris away in early spring."
    ]
  },
  {
    commonName: "Hoya",
    slug: "hoya",
    summary: "A trailing or climbing houseplant with waxy leaves and fragrant flower clusters when grown in bright conditions.",
    planting: [
      "Pot in a chunky, airy indoor mix with strong drainage.",
      "Use a pot that is not too large because hoyas often bloom better slightly snug.",
      "Place in bright indirect light with some gentle sun for best flowering."
    ],
    maintenance: [
      "Water thoroughly, then let the mix dry partially before watering again.",
      "Avoid overwatering because thick leaves store some moisture.",
      "Stable light and warmth help the plant set buds and bloom."
    ],
    pruning: [
      "Trim wandering vines only if size control is needed.",
      "Do not cut off old flower spurs because hoyas often rebloom from them.",
      "Remove damaged leaves or stems cleanly as needed."
    ],
    winterizing: [
      "Reduce watering during slower winter growth.",
      "Keep away from cold drafts and chilly windows.",
      "Maintain bright light if you want continued healthy growth."
    ]
  },
  {
    commonName: "Lady's Mantle",
    slug: "ladys-mantle",
    summary: "A soft-mounded perennial with chartreuse flowers and scalloped leaves, excellent for edging and cottage gardens.",
    planting: [
      "Plant in spring or early fall in full sun to part shade, depending on climate.",
      "Use moisture-retentive but well-drained soil rich in organic matter.",
      "Lady's Mantle works especially well in edging, borders, and underplanting."
    ],
    maintenance: [
      "Keep soil evenly moist, especially in sunnier exposures.",
      "Mulch lightly to help protect roots and reduce moisture swings.",
      "This plant is low effort once settled into a suitable cool-to-mild site."
    ],
    pruning: [
      "Cut spent flower stems back after bloom to freshen the mound.",
      "Trim tired or floppy foliage if summer heat makes the plant look worn.",
      "Divide older clumps every few years if needed."
    ],
    winterizing: [
      "Use a light winter mulch in colder climates.",
      "Remove soggy or damaged foliage in late winter or early spring.",
      "Keep crowns from staying buried under wet debris."
    ]
  },
  {
    commonName: "Ligustrum",
    slug: "ligustrum",
    summary: "A fast-growing hedge shrub used for screening, formal structure, and reliable green massing.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use average well-drained soil and space plants according to the mature hedge thickness you want.",
      "Ligustrum is useful where fast screening is a priority."
    ],
    maintenance: [
      "Water regularly during the first season and in longer dry stretches.",
      "Feed lightly in spring if the hedge needs extra vigor.",
      "Watch hedge density so inner growth still receives some light and airflow."
    ],
    pruning: [
      "Clip regularly during the growing season to maintain formal hedge lines.",
      "Thin older shrubs occasionally if the interior becomes woody or sparse.",
      "Remove any damaged or storm-broken growth promptly."
    ],
    winterizing: [
      "Established hedges generally need little winter care.",
      "Mulch around new plantings in colder climates.",
      "Water before freeze-up if autumn has been especially dry."
    ]
  },
  {
    commonName: "Nandina",
    slug: "nandina",
    summary: "A cane-form evergreen shrub prized for seasonal foliage color, berries, and low-maintenance structure.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use well-drained soil and give the shrub enough room for its cane-like habit.",
      "Nandina works well in mixed shrub borders and foundation planting."
    ],
    maintenance: [
      "Water during establishment and in long dry periods.",
      "This shrub usually needs only light feeding or compost in spring.",
      "Foliage color often deepens in cooler weather and brighter light."
    ],
    pruning: [
      "Avoid shearing the outside into a tight ball.",
      "Instead, remove a few older canes at the base to renew the plant and preserve its natural habit.",
      "Trim damaged stems as needed."
    ],
    winterizing: [
      "Nandina is generally easy through winter once established.",
      "Mulch lightly around the roots for newer plantings.",
      "Water before freeze-up if the fall season has been dry."
    ]
  },
  {
    commonName: "Pittosporum",
    slug: "pittosporum",
    summary: "An evergreen shrub for milder climates, useful for screening, clipped structure, and polished foliage contrast.",
    planting: [
      "Plant in spring in full sun to part shade with good drainage.",
      "Use a sheltered site if cold wind or severe winter weather is a concern.",
      "Allow space for the mature spread, especially with hedging selections."
    ],
    maintenance: [
      "Water regularly through the first season, then during longer dry periods.",
      "Pittosporum generally needs only modest feeding in spring if growth is weak.",
      "Good airflow helps keep the foliage healthy and dense."
    ],
    pruning: [
      "Prune lightly after the main flush of growth to shape.",
      "Clip hedge forms regularly to keep them dense and even.",
      "Avoid cutting aggressively into old bare wood."
    ],
    winterizing: [
      "Protect from severe frost in colder regions or grow in sheltered spots.",
      "Mulch the root zone lightly before winter.",
      "Container plants may need winter shelter where freezes are hard."
    ]
  },
  {
    commonName: "Pieris Forest Flame",
    slug: "pieris-forest-flame",
    summary: "A striking evergreen shrub known for vivid red new growth, glossy leaves, and spring flower clusters in acidic gardens.",
    planting: [
      "Plant in spring or early fall in part shade with protection from harsh afternoon sun.",
      "Use acidic, humus-rich, well-drained soil and avoid heavy alkaline sites.",
      "Choose a sheltered position where the colorful new growth can be appreciated."
    ],
    maintenance: [
      "Keep soil evenly moist, especially during warm dry weather.",
      "Mulch with bark or leaf mold to help maintain acidity and consistent moisture.",
      "Feed with an acid-loving plant fertilizer in spring if growth seems weak."
    ],
    pruning: [
      "Prune lightly after flowering if shaping is needed.",
      "Remove dead, damaged, or crossing branches to keep the shrub tidy.",
      "Avoid heavy pruning into old wood unless renovation is necessary."
    ],
    winterizing: [
      "Protect from drying winter wind, especially in exposed locations.",
      "Mulch around the root zone to help moderate winter temperature swings.",
      "Water well before freeze-up if autumn has been dry."
    ]
  },
  {
    commonName: "Rhamnus",
    slug: "rhamnus",
    summary: "A versatile shrub grown for structure, foliage color, and reliable performance in borders, screens, and mixed plantings.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use well-drained soil and allow room for the natural upright branching habit.",
      "Rhamnus works well in mixed shrub borders and as an informal screen."
    ],
    maintenance: [
      "Water regularly through the first growing season until roots establish.",
      "Once settled, many forms are fairly drought tolerant with occasional deep watering.",
      "Apply compost or a light spring feeding if growth seems weak."
    ],
    pruning: [
      "Prune in late winter or early spring to shape and remove damaged wood.",
      "Thin interior branches if needed to improve airflow and keep the form open.",
      "Avoid over-shearing if you want to preserve a natural shrub shape."
    ],
    winterizing: [
      "Established shrubs typically need very little winter care.",
      "Mulch around younger plants in colder climates.",
      "Inspect for winter breakage and clean up damaged stems in spring."
    ]
  },
  {
    commonName: "Snowberry",
    slug: "snowberry",
    summary: "A hardy deciduous shrub valued for soft branching, white berries, and naturalized planting use.",
    planting: [
      "Plant in spring or fall in full sun to part shade.",
      "Use average well-drained soil, though Snowberry tolerates a range of garden conditions.",
      "This shrub is well suited to woodland edges, informal hedges, and habitat gardens."
    ],
    maintenance: [
      "Water regularly while establishing, then only during prolonged dry spells.",
      "Mulch around the base to conserve moisture and limit weeds.",
      "Allow suckers if you want a natural colony, or remove them to keep the plant contained."
    ],
    pruning: [
      "Prune in late winter or early spring before new growth begins.",
      "Remove older stems at the base to renew the shrub and encourage fresh growth.",
      "Trim stray suckers or wandering canes as needed."
    ],
    winterizing: [
      "Snowberry is typically very winter hardy once established.",
      "Mulch lightly around young plants for their first winter.",
      "Leave berries and branching in place for winter interest and wildlife value."
    ]
  },
  {
    commonName: "Verbena",
    slug: "verbena",
    summary: "A long-blooming sun lover that adds airy color, pollinator appeal, and season-long garden energy.",
    planting: [
      "Plant after frost in full sun for the best flowering and strongest habit.",
      "Use well-drained soil and avoid soggy spots that can weaken the plant.",
      "Space for airflow so the foliage stays healthier during warm weather."
    ],
    maintenance: [
      "Water regularly during establishment, then let soil dry slightly between waterings.",
      "Too much fertilizer can reduce bloom performance, so feed lightly.",
      "Verbena performs best with warmth, sun, and consistent deadheading or light grooming."
    ],
    pruning: [
      "Shear lightly in midsummer if plants become leggy or tired.",
      "Remove spent flower clusters to encourage repeat blooming.",
      "Trim any damaged or sprawling stems to keep the plant neat."
    ],
    winterizing: [
      "Treat as an annual in colder climates unless your selection is hardy in your zone.",
      "Reduce watering as temperatures cool late in the season.",
      "Remove worn plants after frost or protect hardy types with light mulch."
    ]
  },
  {
    commonName: "Wax Begonia",
    slug: "wax-begonia",
    summary: "A dependable bedding plant with glossy foliage and nonstop blooms for containers, edging, and shaded color.",
    planting: [
      "Plant after the danger of frost has passed in part sun to part shade.",
      "Use rich, well-drained soil or quality container mix.",
      "Wax Begonias are excellent for borders, pots, and mass plantings."
    ],
    maintenance: [
      "Keep soil evenly moist but not waterlogged.",
      "Feed container-grown plants lightly through the season for steady flowering.",
      "Remove spent blooms only if needed, as many varieties stay tidy on their own."
    ],
    pruning: [
      "Pinch back leggy growth to maintain a fuller mound.",
      "Trim away damaged foliage or faded clusters as needed.",
      "Refresh crowded container plants with light shaping through summer."
    ],
    winterizing: [
      "Wax Begonias are typically grown as annuals in cold climates.",
      "Bring favored plants indoors before frost if you want to overwinter them.",
      "Reduce watering indoors and keep them in bright filtered light."
    ]
  },
  {
    commonName: "Yucca Red",
    slug: "yucca-red",
    summary: "A bold architectural plant with upright foliage and warm-toned flower display, suited to hot sunny gardens.",
    planting: [
      "Plant in full sun in sharply drained soil or raised beds.",
      "Choose a site with space for the foliage to spread and remain undisturbed.",
      "Avoid wet heavy clay unless drainage is improved first."
    ],
    maintenance: [
      "Water regularly during establishment, then only occasionally in dry weather.",
      "This plant prefers lean conditions and usually needs little supplemental feeding.",
      "Keep the crown clear of soggy mulch or heavy debris."
    ],
    pruning: [
      "Remove spent bloom stalks once flowering finishes.",
      "Trim away dead lower leaves carefully for a cleaner look.",
      "Use gloves if the foliage has sharp edges or stiff points."
    ],
    winterizing: [
      "Good drainage is the main winter requirement.",
      "Avoid trapping moisture around the crown with dense mulch.",
      "In colder regions, protect young plants from severe freeze-thaw cycles."
    ]
  },
  {
    commonName: "Allium",
    slug: "allium",
    summary: "An ornamental onion that brings upright stems and globe-shaped flowers to sunny borders and spring displays.",
    planting: [
      "Plant bulbs in fall in full sun and well-drained soil.",
      "Set bulbs at the recommended depth, usually several times as deep as the bulb is tall.",
      "Alliums pair well with emerging perennials that can hide fading foliage later."
    ],
    maintenance: [
      "Water after planting and during active growth if spring is dry.",
      "Allow foliage to mature naturally after bloom so bulbs can recharge.",
      "Avoid overly wet soil during dormancy."
    ],
    pruning: [
      "Remove spent flower heads if you do not want them left as ornamental seed forms.",
      "Let foliage yellow naturally before cutting it back.",
      "Divide crowded clumps only when bloom performance declines."
    ],
    winterizing: [
      "Established bulbs are generally easy to overwinter in well-drained soil.",
      "Mulch lightly after the ground cools in colder climates.",
      "Protect from winter wet in poorly drained sites."
    ]
  },
  {
    commonName: "Angelonia",
    slug: "angelonia",
    summary: "A heat-loving annual with upright flower spikes that performs well through summer in sunny beds and containers.",
    planting: [
      "Plant after frost in full sun for the strongest flowering and compact growth.",
      "Use well-drained soil and space plants so air can move freely around them.",
      "Angelonia works especially well in containers and hot border positions."
    ],
    maintenance: [
      "Water regularly until established, then keep moisture even without overwatering.",
      "Feed lightly through the growing season, especially in pots.",
      "This plant handles heat well and often blooms steadily without much fuss."
    ],
    pruning: [
      "Trim lightly in midsummer if the plant stretches or bloom slows.",
      "Remove damaged flower stems to encourage a cleaner appearance.",
      "A gentle haircut can prompt a fresh flush of flowers."
    ],
    winterizing: [
      "Treat as an annual in climates with frost.",
      "Discard spent plants after cold weather ends the display.",
      "In frost-free areas, cut back lightly and protect from prolonged cold snaps."
    ]
  },
  {
    commonName: "Armeria",
    slug: "armeria",
    summary: "A compact evergreen perennial with grassy foliage and tidy globe flowers, ideal for edging and rock gardens.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Armeria performs best in lean soil and raised or gravelly sites.",
      "Avoid heavy wet ground that can cause crown rot."
    ],
    maintenance: [
      "Water during establishment, then only when conditions are very dry.",
      "Too much fertility or moisture can make the plant short-lived.",
      "Keep the crown open and free from soggy mulch buildup."
    ],
    pruning: [
      "Remove spent flower stems to encourage repeat blooming.",
      "Trim away winter-browned foliage in early spring.",
      "Divide clumps when centers thin or flowering declines."
    ],
    winterizing: [
      "Excellent drainage is essential through winter.",
      "Use a light gravel mulch rather than a heavy organic mulch.",
      "Protect from standing wet more than from cold itself."
    ]
  },
  {
    commonName: "Baptisia",
    slug: "baptisia",
    summary: "A deep-rooted prairie perennial with spring flower spikes, handsome foliage, and strong drought tolerance once mature.",
    planting: [
      "Plant in full sun or very light shade in well-drained soil.",
      "Choose the site carefully because Baptisia resents frequent moving once established.",
      "Give it room to expand into a broad, shrub-like perennial clump."
    ],
    maintenance: [
      "Water regularly during the first season, then only in prolonged drought.",
      "Established plants are low maintenance and rarely need feeding.",
      "Support is usually unnecessary if the plant receives enough sun."
    ],
    pruning: [
      "Cut back spent flower stalks if you do not want seed pods.",
      "Leave pods in place if you enjoy the ornamental structure.",
      "Cut the clump back to the base in late fall or early spring."
    ],
    winterizing: [
      "Baptisia overwinters well with very little attention once established.",
      "Mulch lightly around first-year plants in colder zones.",
      "Avoid heavy wet mulch directly against the crown."
    ]
  },
  {
    commonName: "Bellflower",
    slug: "bellflower",
    summary: "A charming perennial with bell-shaped blooms that brightens borders, cottage gardens, and lightly romantic plantings.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use well-drained soil amended with compost for steady, balanced growth.",
      "Bellflower works well in front-to-mid border positions and naturalistic groupings."
    ],
    maintenance: [
      "Water regularly while establishing, then keep soil evenly moist without overwatering.",
      "Mulch lightly to moderate soil moisture and reduce weed competition.",
      "Feed lightly in spring if growth appears weak."
    ],
    pruning: [
      "Deadhead spent flowers to encourage a longer blooming season.",
      "Trim back untidy stems after flowering to refresh the clump.",
      "Cut plants down in late fall or early spring as new growth returns."
    ],
    winterizing: [
      "Add a light winter mulch in colder regions after the soil cools.",
      "Remove soggy or damaged foliage before spring growth begins.",
      "Well-drained soil helps the crown come through winter cleanly."
    ]
  },
  {
    commonName: "Brunnera",
    slug: "brunnera",
    summary: "A shade-loving perennial with heart-shaped leaves and airy spring flowers, prized for brightening woodland-style gardens.",
    planting: [
      "Plant in spring or early fall in part shade to shade.",
      "Use rich, moisture-retentive, well-drained soil with plenty of organic matter.",
      "Brunnera is ideal for shady borders, under shrubs, and woodland settings."
    ],
    maintenance: [
      "Keep soil evenly moist, especially during warm spells.",
      "Mulch with compost or leaf mold to keep roots cool and soil rich.",
      "Protect from hot afternoon sun that can scorch the foliage."
    ],
    pruning: [
      "Remove damaged or tired leaves through the season to keep the clump fresh.",
      "Trim spent flower stems after bloom if a cleaner look is preferred.",
      "Cut away winter-worn foliage in early spring before new growth expands."
    ],
    winterizing: [
      "Apply a light insulating mulch in colder climates.",
      "Avoid burying the crown under dense wet debris.",
      "Clean up old foliage as new spring leaves begin to emerge."
    ]
  },
  {
    commonName: "Chocolate Cosmos",
    slug: "chocolate-cosmos",
    summary: "A distinctive flowering plant with dark velvety blooms and a rich chocolate-like scent, perfect for warm-season drama.",
    planting: [
      "Plant after frost in full sun and well-drained soil.",
      "Choose a warm site with good air circulation and room for summer bloom stems.",
      "Chocolate Cosmos is excellent in containers and sunny mixed borders."
    ],
    maintenance: [
      "Water regularly during establishment, then allow the soil surface to dry slightly between waterings.",
      "Feed lightly during active growth for stronger flowering.",
      "Avoid overly wet soil, especially in cooler weather."
    ],
    pruning: [
      "Deadhead spent blooms to encourage continued flowering.",
      "Trim leggy growth lightly in midsummer if needed to keep a fuller shape.",
      "Cut back after frost or at season's end."
    ],
    winterizing: [
      "In colder climates, lift and store tuberous roots if the plant is not hardy outdoors in your zone.",
      "Use a dry, frost-free storage spot if you overwinter lifted roots.",
      "In mild climates, protect the root zone with mulch and keep winter soil from staying soggy."
    ]
  },
  {
    commonName: "Cranesbill",
    slug: "cranesbill",
    summary: "A reliable geranium-type perennial that spreads gently, flowers generously, and works beautifully in borders and underplantings.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use average well-drained soil enriched with a little compost.",
      "Cranesbill is useful for edging, soft ground coverage, and weaving between shrubs or roses."
    ],
    maintenance: [
      "Water regularly until established, then only during extended dry periods.",
      "This plant is generally easy and adaptable once settled.",
      "Mulch lightly to conserve moisture and help suppress weeds."
    ],
    pruning: [
      "Shear the plant lightly after the main bloom to encourage fresh foliage and possible rebloom.",
      "Remove spent or damaged stems as needed during the season.",
      "Divide overgrown clumps every few years if the center thins."
    ],
    winterizing: [
      "Apply a light winter mulch in colder areas after the ground cools.",
      "Leave some foliage for protection until late winter if desired.",
      "Trim away worn leaves in early spring as new growth appears."
    ]
  },
  {
    commonName: "Diascia",
    slug: "diascia",
    summary: "A soft, floriferous plant that adds delicate color to containers, window boxes, and cool-season borders.",
    planting: [
      "Plant after frost in full sun to part shade, especially in milder climates.",
      "Use fertile, well-drained soil or a quality container mix.",
      "Diascia shines in pots, front borders, and mixed seasonal plantings."
    ],
    maintenance: [
      "Keep soil evenly moist, especially in containers.",
      "Feed lightly during the growing season to support steady blooming.",
      "This plant often performs best in cooler portions of the season rather than intense summer heat."
    ],
    pruning: [
      "Trim lightly after a bloom flush to encourage fresh growth and rebloom.",
      "Pinch overly long stems if the plant begins to sprawl.",
      "Remove worn stems and faded flowers to keep it tidy."
    ],
    winterizing: [
      "Treat as an annual in colder regions.",
      "Protect container plants from hard frost if attempting to extend the season.",
      "Remove spent plants once cold weather ends their performance."
    ]
  },
  {
    commonName: "Heliopsis",
    slug: "heliopsis",
    summary: "A sun-loving perennial with bright daisy-like flowers that brings sturdy summer color to borders and meadow-style plantings.",
    planting: [
      "Plant in spring in full sun for the best flowering and strongest stems.",
      "Use average to rich well-drained soil with enough space for a broad mature clump.",
      "Heliopsis works especially well in pollinator gardens and sunny perennial borders."
    ],
    maintenance: [
      "Water regularly through the first season, then only during prolonged dry spells.",
      "A light mulch helps conserve moisture and reduce weed competition.",
      "Feed modestly in spring if the soil is poor."
    ],
    pruning: [
      "Deadhead to tidy the plant and prolong blooming.",
      "Cut back by a small amount in late spring if you want a shorter, bushier habit.",
      "Trim stems down in late fall or early spring."
    ],
    winterizing: [
      "Established clumps are generally very winter hardy.",
      "Use a light winter mulch in colder zones for younger plants.",
      "Remove old stems before or just as spring growth resumes."
    ]
  },
  {
    commonName: "Joe Pye Weed",
    slug: "joe-pye-weed",
    summary: "A tall native perennial with domed flower heads that supports pollinators and adds vertical drama to moist garden spaces.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use moisture-retentive soil and give the plant room for its mature height and spread.",
      "Joe Pye Weed is a great choice for rain gardens, meadow plantings, and back-border height."
    ],
    maintenance: [
      "Keep soil evenly moist, especially during the first year and in hot weather.",
      "Mulch to hold moisture and help cool the root zone.",
      "Richer soil can produce taller plants, while average soil may keep growth a bit more restrained."
    ],
    pruning: [
      "Cut back by about one-third in late spring if you want a shorter, sturdier plant.",
      "Deadhead after bloom if you do not want seed heads to remain.",
      "Cut the plant to the ground in late fall or early spring."
    ],
    winterizing: [
      "Leave seed heads standing for winter texture and wildlife value if desired.",
      "Mulch lightly around younger clumps in colder regions.",
      "Clean up old stems before new spring shoots emerge."
    ]
  },
  {
    commonName: "Kniphofia",
    slug: "kniphofia",
    summary: "A bold perennial with torch-like flower spikes and strap foliage, ideal for adding strong vertical accents in sunny borders.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Avoid heavy wet sites and give the crown room to sit slightly above overly soggy ground.",
      "Kniphofia works well in hot borders, gravel gardens, and striking mixed plantings."
    ],
    maintenance: [
      "Water regularly during establishment, then only during longer dry spells.",
      "Keep the crown from staying wet for extended periods.",
      "Feed lightly in spring if the plant needs a boost."
    ],
    pruning: [
      "Remove spent flower spikes once blooming finishes.",
      "Trim away dead or damaged strap leaves carefully as needed.",
      "Leave some foliage in place over winter to help protect the crown."
    ],
    winterizing: [
      "In colder climates, tie foliage loosely over the crown for some winter protection if desired.",
      "Use a light, airy mulch rather than a dense wet one.",
      "Good drainage is critical for winter survival."
    ]
  },
  {
    commonName: "Liatris",
    slug: "liatris",
    summary: "A vertical prairie perennial with feathery flower spikes that adds pollinator value and late-season color to sunny gardens.",
    planting: [
      "Plant corms or nursery plants in spring in full sun and well-drained soil.",
      "Liatris performs best where roots are not left in soggy ground.",
      "Use it in meadows, pollinator borders, and mixed perennial plantings."
    ],
    maintenance: [
      "Water during establishment, then only occasionally in dry periods.",
      "Too much fertility is unnecessary and may encourage weaker growth.",
      "This is generally an easy long-lived plant in the right sunny site."
    ],
    pruning: [
      "Deadhead spent flower spikes if you want a tidier appearance.",
      "Leave seed heads standing for texture and wildlife interest if preferred.",
      "Cut stems down in late fall or early spring."
    ],
    winterizing: [
      "Liatris usually overwinters well in drained soil with little attention.",
      "Apply light mulch in colder zones after the soil has cooled.",
      "Avoid heavy winter wet around the crown area."
    ]
  },
  {
    commonName: "Nemesia",
    slug: "nemesia",
    summary: "A cheerful cool-season bloomer with fragrant flowers and soft color, especially useful in containers and front borders.",
    planting: [
      "Plant in spring after frost or in cool fall conditions where appropriate.",
      "Use fertile, well-drained soil or a quality potting mix.",
      "Nemesia is ideal for containers, window boxes, and color near pathways."
    ],
    maintenance: [
      "Keep soil evenly moist but not soggy.",
      "Feed container plantings lightly through active bloom.",
      "This plant often performs best in cool-to-mild weather and may slow in intense heat."
    ],
    pruning: [
      "Trim lightly after the first bloom flush to encourage another round of flowers.",
      "Remove faded blooms and worn stems to keep the plant tidy.",
      "Pinch growth lightly if needed for a bushier shape."
    ],
    winterizing: [
      "Treat as an annual in colder climates.",
      "Protect from frost if trying to extend cool-season bloom.",
      "Remove spent plants once hard cold ends their display."
    ]
  },
  {
    commonName: "Pincushion Flower",
    slug: "pincushion-flower",
    summary: "A graceful perennial with pincushion-like blooms that brings soft color and pollinator appeal to sunny borders.",
    planting: [
      "Plant in spring in full sun with well-drained soil.",
      "Use a site with good airflow and enough room for a lightly mounded habit.",
      "Pincushion Flower works beautifully in cottage gardens, edging, and cut-flower borders."
    ],
    maintenance: [
      "Water regularly during establishment, then only as needed in extended dry weather.",
      "Avoid overly rich or wet soil, which can weaken the plant's shape.",
      "A light mulch helps conserve moisture without burying the crown."
    ],
    pruning: [
      "Deadhead often to keep flowers coming through the season.",
      "Trim lightly if the plant becomes loose or tired in midsummer.",
      "Cut back old growth in late fall or early spring."
    ],
    winterizing: [
      "Provide a light winter mulch in colder zones after the ground cools.",
      "Avoid trapping heavy wet material over the crown.",
      "Remove winter-worn stems as new spring growth begins."
    ]
  },
  {
    commonName: "Sea Holly",
    slug: "sea-holly",
    summary: "A striking architectural perennial with metallic-toned flower heads and excellent tolerance for sun, heat, and dry soils.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Choose a site carefully because Sea Holly dislikes being moved once established.",
      "It pairs well with gravel gardens, prairie plantings, and dry sunny borders."
    ],
    maintenance: [
      "Water regularly during the first season, then sparingly once established.",
      "Too much fertility can reduce the plant's sturdy habit and color intensity.",
      "Keep the crown open and avoid wet winter conditions."
    ],
    pruning: [
      "Leave flower heads standing if you enjoy their dried ornamental look.",
      "Cut back spent stems in late fall or early spring.",
      "Remove damaged leaves as needed, using gloves if the plant is prickly."
    ],
    winterizing: [
      "Excellent drainage is the key to winter success.",
      "Use a very light mulch or gravel around the crown rather than dense organic cover.",
      "Protect from winter wet more than from cold itself."
    ]
  },
  {
    commonName: "Toad Lily",
    slug: "toad-lily",
    summary: "A late-season shade perennial with orchid-like speckled flowers that adds unexpected detail to woodland gardens.",
    planting: [
      "Plant in spring or early fall in part shade to shade.",
      "Use rich, moisture-retentive, well-drained soil with plenty of organic matter.",
      "Toad Lily is ideal near paths or shady seating areas where the intricate blooms can be seen up close."
    ],
    maintenance: [
      "Keep soil evenly moist, especially during summer and early fall bloom time.",
      "Mulch annually with compost or leaf mold to maintain cool, rich soil.",
      "Protect from drying conditions and intense afternoon sun."
    ],
    pruning: [
      "Remove spent flower stems after bloom if a tidier look is desired.",
      "Trim away damaged foliage through the season as needed.",
      "Cut old stems back in late fall or early spring."
    ],
    winterizing: [
      "Apply a light insulating mulch in colder climates.",
      "Keep crowns from sitting under heavy soggy debris through winter.",
      "Clear old growth just before new shoots emerge in spring."
    ]
  },
  {
    commonName: "Torenia",
    slug: "torenia",
    summary: "A heat-tolerant flowering annual for shade and part shade, valued for cheerful blooms and dependable container performance.",
    planting: [
      "Plant after frost in part shade or bright filtered light.",
      "Use rich, well-drained soil or a moisture-retentive container mix.",
      "Torenia is excellent for hanging baskets, pots, and front-of-border shade color."
    ],
    maintenance: [
      "Keep soil evenly moist, especially in containers during warm weather.",
      "Feed lightly through the blooming season for steady flower production.",
      "This plant generally stays tidy and requires minimal fuss when moisture is consistent."
    ],
    pruning: [
      "Trim lightly if growth becomes leggy or the plant needs refreshing.",
      "Remove damaged stems or spent bloom clusters as needed.",
      "Pinching tips early can encourage a fuller mound."
    ],
    winterizing: [
      "Treat as an annual in cold climates.",
      "Protect container plants from early frost if you want to extend the display.",
      "Remove plants after frost ends the season."
    ]
  },
  {
    commonName: "Abutilon",
    slug: "abutilon",
    summary: "A flowering shrub or tender perennial with lantern-like blooms that brings an elegant tropical feel to patios and borders.",
    planting: [
      "Plant in spring in full sun to part shade in well-drained fertile soil.",
      "Use a sheltered location if grown outdoors where cool wind is a concern.",
      "Abutilon performs especially well in containers and warm garden pockets."
    ],
    maintenance: [
      "Water regularly during active growth, allowing the surface to dry slightly between waterings.",
      "Feed during the growing season to support repeat flowering.",
      "Monitor container plants closely in heat, as they can dry faster than expected."
    ],
    pruning: [
      "Prune lightly in spring to shape and encourage branching.",
      "Pinch young growth to create a fuller, bushier plant.",
      "Remove dead or weak stems whenever needed."
    ],
    winterizing: [
      "In colder climates, move container plants indoors before frost.",
      "Keep overwintering plants in bright light with reduced watering.",
      "Protect outdoor plants in mild climates from severe cold and wind."
    ]
  },
  {
    commonName: "Ceanothus",
    slug: "ceanothus",
    summary: "A sun-loving shrub prized for vivid blue flowers and evergreen structure in mild, well-drained garden settings.",
    planting: [
      "Plant in spring in full sun with sharply drained soil.",
      "Choose a sheltered site if winter cold or heavy wet conditions are concerns.",
      "Ceanothus works beautifully against walls, in mixed shrub borders, or as a focal flowering evergreen."
    ],
    maintenance: [
      "Water regularly while establishing, then sparingly once the shrub is settled.",
      "Avoid overfeeding and overly rich soil, which can make growth weak.",
      "Do not let the roots sit in waterlogged winter soil."
    ],
    pruning: [
      "Prune lightly after flowering if shaping is needed.",
      "Avoid hard pruning into old wood unless you know the cultivar can respond well.",
      "Remove any winter-damaged growth in spring."
    ],
    winterizing: [
      "Good drainage is essential through winter.",
      "Protect younger plants from harsh frost and drying wind.",
      "Mulch lightly without covering the crown or base too heavily."
    ]
  },
  {
    commonName: "Choisya",
    slug: "choisya",
    summary: "A fragrant evergreen shrub with glossy foliage and citrus-scented blooms, excellent for sheltered borders and foundation planting.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use fertile, well-drained soil and give the shrub room for a rounded mature shape.",
      "Choisya performs especially well in protected garden spaces with reflected warmth."
    ],
    maintenance: [
      "Water regularly during the first growing season and in prolonged dry spells thereafter.",
      "Mulch lightly to conserve moisture and keep roots cooler.",
      "A modest spring feeding can support healthy foliage and flowering."
    ],
    pruning: [
      "Prune after flowering if you want to shape or reduce size.",
      "Remove damaged or crossing branches to keep the shrub tidy.",
      "Avoid constant shearing if you want a softer natural form."
    ],
    winterizing: [
      "Protect from severe cold wind in borderline climates.",
      "Mulch around the base of younger shrubs before winter.",
      "Trim away any winter-damaged tips once spring growth begins."
    ]
  },
  {
    commonName: "Deutzia",
    slug: "deutzia",
    summary: "A spring-flowering shrub with arching branches and masses of blooms, useful for soft structure and seasonal color.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use well-drained soil amended with compost and provide room for the arching habit.",
      "Deutzia suits foundation planting, mixed borders, and informal flowering hedges."
    ],
    maintenance: [
      "Water regularly during establishment and in extended dry weather.",
      "A light annual mulch helps hold moisture and improve soil texture.",
      "This shrub is generally straightforward once rooted in a good site."
    ],
    pruning: [
      "Prune just after flowering because blooms form on older wood.",
      "Remove a few older stems at the base to renew the shrub over time.",
      "Trim damaged or wayward growth to maintain shape."
    ],
    winterizing: [
      "Established shrubs usually need minimal winter protection.",
      "Mulch newer plantings in colder regions for extra root protection.",
      "Inspect for winter breakage and clean it up in early spring."
    ]
  },
  {
    commonName: "Mahonia",
    slug: "mahonia",
    summary: "An evergreen shrub with bold foliage and seasonal flower spikes, valued for shade tolerance and year-round presence.",
    planting: [
      "Plant in spring or early fall in part shade to shade.",
      "Use humus-rich, well-drained soil and avoid harsh dry exposure while establishing.",
      "Mahonia works well in woodland-style borders and shady structural plantings."
    ],
    maintenance: [
      "Keep soil evenly moist through the first season, then water during prolonged dry periods.",
      "Mulch annually with compost or leaf mold to enrich the root zone.",
      "This shrub prefers a cooler root run and protection from extreme drought."
    ],
    pruning: [
      "Prune after flowering if shaping is needed.",
      "Remove older canes at the base to renew the plant and keep it from becoming overly leggy.",
      "Wear gloves when handling prickly-leaved forms."
    ],
    winterizing: [
      "Mulch around the roots in colder climates after the soil cools.",
      "Protect from drying winter wind if the site is exposed.",
      "Remove damaged leaves or stems in spring once active growth resumes."
    ]
  },
  {
    commonName: "Osmanthus",
    slug: "osmanthus",
    summary: "A refined evergreen shrub with glossy foliage and fragrant flowers, ideal for screens, hedges, and sheltered accent planting.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use well-drained fertile soil and provide adequate room for mature width and height.",
      "Osmanthus is especially useful where evergreen screening and fragrance are both desired."
    ],
    maintenance: [
      "Water regularly while establishing and during prolonged drought.",
      "Mulch lightly to conserve moisture and moderate root temperatures.",
      "Feed modestly in spring if growth appears weak or pale."
    ],
    pruning: [
      "Prune lightly after flowering or after a growth flush to shape.",
      "Clip hedge forms carefully to maintain density and structure.",
      "Avoid aggressive pruning into old bare wood."
    ],
    winterizing: [
      "Protect younger plants from severe cold in marginal climates.",
      "Mulch the root area lightly before winter.",
      "Water before freeze-up if autumn has been especially dry."
    ]
  },
  {
    commonName: "Photinia",
    slug: "photinia",
    summary: "A vigorous evergreen shrub grown for glossy foliage, red new growth, and dependable screening value.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use fertile, well-drained soil and give the shrub room for broad mature growth.",
      "Photinia works well as an informal screen, large hedge, or background shrub."
    ],
    maintenance: [
      "Water regularly while establishing, then during extended dry spells.",
      "Maintain good airflow to help keep foliage healthier in humid conditions.",
      "Mulch lightly to conserve moisture and moderate root temperatures."
    ],
    pruning: [
      "Prune after a flush of growth to shape and encourage colorful new red foliage.",
      "Thin interior branches if needed to improve light and airflow.",
      "Remove damaged or diseased stems promptly."
    ],
    winterizing: [
      "Established plants generally need little winter protection.",
      "Mulch around newer shrubs before the first few winters.",
      "Water before freeze-up if fall has been unusually dry."
    ]
  },
  {
    commonName: "Rose of Sharon",
    slug: "rose-of-sharon",
    summary: "A late-summer flowering shrub that brings hibiscus-like blooms and vertical structure to sunny gardens.",
    planting: [
      "Plant in spring or early fall in full sun for the best flowering.",
      "Use average well-drained soil and allow space for the plant's upright branching habit.",
      "Rose of Sharon is useful in mixed borders, screening rows, and pollinator-friendly plantings."
    ],
    maintenance: [
      "Water regularly during the first season, then only during longer dry spells.",
      "Feed lightly in spring if the shrub appears weak or slow to leaf out.",
      "Mulch lightly around the base to conserve moisture and reduce weeds."
    ],
    pruning: [
      "Prune in late winter or early spring because it flowers on new wood.",
      "Remove weak or crossing stems and thin older growth to maintain shape.",
      "Trim seed pods if you want to reduce self-seeding."
    ],
    winterizing: [
      "Rose of Sharon is generally winter hardy once established.",
      "Mulch newly planted shrubs for added root protection in colder areas.",
      "Inspect for winter dieback and prune it away in spring."
    ]
  },
  {
    commonName: "Tea Olive",
    slug: "tea-olive",
    summary: "A fragrant evergreen shrub with small powerfully scented flowers, excellent for entryways, patios, and warm sheltered borders.",
    planting: [
      "Plant in spring in full sun to part shade in well-drained fertile soil.",
      "Choose a protected site where the fragrance can be enjoyed up close.",
      "Tea Olive works best in mild climates or sheltered garden spaces."
    ],
    maintenance: [
      "Water regularly during establishment and during prolonged dry weather.",
      "Mulch lightly to retain moisture and support steady root growth.",
      "Feed modestly in spring if growth appears pale or slow."
    ],
    pruning: [
      "Prune lightly after flowering or after a major growth flush.",
      "Shape carefully to preserve the natural dense form.",
      "Remove winter-damaged or crossing branches as needed."
    ],
    winterizing: [
      "Protect from severe frost and drying winter wind in borderline climates.",
      "Mulch around the roots before winter for newer plants.",
      "Container-grown plants may need shelter if hard freezes are expected."
    ]
  },
  {
    commonName: "Vitex",
    slug: "vitex",
    summary: "A heat-loving flowering shrub or small tree with lavender-blue flower spikes and a relaxed summer presence.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Choose a site with room for its broad shrub or small-tree habit.",
      "Vitex performs especially well in hot climates and low-water gardens."
    ],
    maintenance: [
      "Water regularly during establishment, then only during prolonged dry periods.",
      "Avoid overly rich soil, which can encourage excess leafy growth at the expense of flowers.",
      "This plant is generally low maintenance once settled."
    ],
    pruning: [
      "Prune in late winter or early spring to shape and control size.",
      "Remove suckers or crossing branches to keep the structure open.",
      "Deadhead spent flower spikes if you want to encourage a tidier rebloom cycle."
    ],
    winterizing: [
      "Vitex usually needs little winter care in suitable climates.",
      "Mulch younger plants in colder fringe zones.",
      "Cut away any winter-damaged wood once spring growth resumes."
    ]
  },
  {
    commonName: "Fringe Tree",
    slug: "fringe-tree",
    summary: "A graceful small tree with airy white spring blooms and soft branching that suits specimen and border use.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use fertile, well-drained soil and choose a site where the branching habit can develop naturally.",
      "Fringe Tree works well as a specimen near patios, lawns, or mixed borders."
    ],
    maintenance: [
      "Water regularly through the first growing season and in prolonged dry weather thereafter.",
      "Apply mulch lightly around the root zone to conserve moisture and reduce weeds.",
      "This tree is generally low fuss once established in a good site."
    ],
    pruning: [
      "Prune lightly in late winter or just after flowering if needed.",
      "Remove dead, damaged, or crossing wood to maintain a clean structure.",
      "Avoid heavy pruning that disrupts the natural form."
    ],
    winterizing: [
      "Mulch young trees for extra root protection in colder climates.",
      "Water before freeze-up if autumn has been especially dry.",
      "Inspect for winter breakage and clean it up in early spring."
    ]
  },
  {
    commonName: "Desert Willow",
    slug: "desert-willow",
    summary: "A drought-tolerant small tree with airy foliage and trumpet flowers, well suited to hot, sunny, low-water landscapes.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Choose a site with room for a broad airy canopy and strong heat exposure.",
      "Desert Willow is ideal for dry gardens, southwestern landscapes, and accent planting."
    ],
    maintenance: [
      "Water regularly during establishment, then deeply but infrequently once rooted.",
      "Avoid overly rich soil and constant moisture, which can weaken the plant.",
      "This tree thrives with heat, drainage, and leaner growing conditions."
    ],
    pruning: [
      "Prune in late winter or early spring to shape the canopy.",
      "Remove crossing, damaged, or weak branches as needed.",
      "You can train it as a multi-stem tree or a more open single-trunk form."
    ],
    winterizing: [
      "Good drainage is the main winter requirement.",
      "Protect younger plants from extreme cold in marginal climates.",
      "Water lightly before freeze-up if fall has been very dry."
    ]
  },
  {
    commonName: "Golden Currant",
    slug: "golden-currant",
    summary: "A hardy native shrub with fragrant yellow spring flowers, edible berries, and strong habitat value.",
    planting: [
      "Plant in spring or fall in full sun to part shade.",
      "Use well-drained soil and allow room for the shrub's arching natural form.",
      "Golden Currant is a strong choice for habitat gardens, native borders, and informal hedges."
    ],
    maintenance: [
      "Water regularly through the first season, then occasionally during extended drought.",
      "Mulch around the base to conserve moisture and limit weeds.",
      "Once established, the shrub is generally adaptable and low maintenance."
    ],
    pruning: [
      "Prune after flowering if shaping or size control is needed.",
      "Remove a few older stems at the base over time to renew the plant.",
      "Trim damaged wood and any awkward growth as needed."
    ],
    winterizing: [
      "Golden Currant is usually winter hardy with minimal care.",
      "Mulch younger shrubs during the first winters in colder sites.",
      "Leave berries and structure in place for wildlife where desired."
    ]
  },
  {
    commonName: "Persian Ironwood",
    slug: "persian-ironwood",
    summary: "A refined small tree prized for smooth bark, strong structure, and excellent fall color in four-season landscapes.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use well-drained fertile soil and choose a site where the tree can mature without crowding.",
      "Persian Ironwood is best used as a specimen or focal tree."
    ],
    maintenance: [
      "Water regularly during establishment and through dry periods.",
      "Mulch lightly to moderate moisture and protect the root zone.",
      "This tree is generally low maintenance once rooted in a stable site."
    ],
    pruning: [
      "Prune in late winter to refine structure if needed.",
      "Remove crossing or damaged branches while the tree is still young to build a clean framework.",
      "Avoid excessive pruning that spoils the natural branching character."
    ],
    winterizing: [
      "Young trees benefit from mulch around the roots in winter.",
      "Water before freeze-up if autumn has been dry.",
      "Check for winter injury and clean up damaged twigs in spring."
    ]
  },
  {
    commonName: "Smoke Tree",
    slug: "smoke-tree",
    summary: "A dramatic shrub or small tree known for colorful foliage and airy summer plumes that create a smoky effect.",
    planting: [
      "Plant in full sun for the strongest foliage color and best flowering display.",
      "Use well-drained soil and provide space for its wide natural habit.",
      "Smoke Tree is ideal as a focal plant in borders or open landscape beds."
    ],
    maintenance: [
      "Water regularly while establishing, then only during prolonged dry spells.",
      "This plant usually performs well without heavy feeding.",
      "Mulch lightly around the root zone to conserve moisture and suppress weeds."
    ],
    pruning: [
      "Prune in late winter or early spring depending on whether you want a larger tree-like form or a denser shrub.",
      "Remove damaged or crossing stems and thin as needed for structure.",
      "Hard pruning can encourage larger leaves but may reduce the smoky flower display."
    ],
    winterizing: [
      "Established plants are generally winter hardy with little attention.",
      "Mulch newer plantings during their first winters.",
      "Trim away winter-damaged tips in spring once growth begins."
    ]
  },
  {
    commonName: "Stewartia",
    slug: "stewartia",
    summary: "A handsome small tree with camellia-like flowers, attractive bark, and fine fall color for elegant garden settings.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use rich, well-drained soil with consistent moisture and avoid harsh dry sites.",
      "Stewartia performs best where it has space to develop as a specimen tree."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment and in hot dry weather.",
      "Mulch with compost or bark to help regulate moisture and root temperature.",
      "Protect from drought stress, especially while the tree is young."
    ],
    pruning: [
      "Prune lightly in late winter to remove damaged or crossing branches.",
      "Maintain the natural elegant branching structure rather than over-shaping.",
      "Minimal pruning is usually best once the framework is established."
    ],
    winterizing: [
      "Mulch young trees in colder climates to protect the root zone.",
      "Water before freeze-up if fall rainfall has been low.",
      "Inspect bark and branching for winter injury as spring begins."
    ]
  },
  {
    commonName: "Sweetspire",
    slug: "sweetspire",
    summary: "A graceful flowering shrub with fragrant spring blooms and strong fall color, well suited to moist borders and naturalized gardens.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use moisture-retentive but well-drained soil enriched with compost.",
      "Sweetspire is excellent for foundations, woodland edges, and rain-friendly plantings."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment and during long dry spells.",
      "Mulch around the roots to conserve moisture and suppress weeds.",
      "This shrub is generally easy once established in a good site."
    ],
    pruning: [
      "Prune just after flowering if shaping is needed.",
      "Remove older stems at the base over time to renew the plant.",
      "Trim damaged or awkward growth as needed."
    ],
    winterizing: [
      "Mulch lightly around the root zone before winter in colder areas.",
      "Water before freeze-up if fall has been dry.",
      "Leave the branching structure in place for winter interest until spring cleanup."
    ]
  },
  {
    commonName: "Yew",
    slug: "yew",
    summary: "A classic evergreen shrub for hedges, structure, and shade-tolerant screening in formal or traditional landscapes.",
    planting: [
      "Plant in spring or early fall in full sun to shade.",
      "Use well-drained soil and avoid waterlogged low spots.",
      "Allow enough space for the mature height and width, especially in hedge plantings."
    ],
    maintenance: [
      "Water regularly during the first season, then during prolonged drought.",
      "Mulch lightly to retain moisture and moderate soil temperatures.",
      "Yew is generally low maintenance once it establishes a good root system."
    ],
    pruning: [
      "Prune in late spring or summer to shape formal hedges or tidy natural forms.",
      "Thin interior growth occasionally if the plant becomes very dense.",
      "Remove dead or winter-burned branches in spring."
    ],
    winterizing: [
      "Protect younger plants from drying winter wind if the site is exposed.",
      "Mulch the root zone in colder climates.",
      "Water before freeze-up if autumn has been unusually dry."
    ]
  },
  {
    commonName: "Baby Tears",
    slug: "baby-tears",
    summary: "A tiny-leaved mat-forming plant used as a lush indoor accent or moisture-loving groundcover in mild, shaded conditions.",
    planting: [
      "Plant in part shade to bright indirect light depending on whether it is grown outdoors or indoors.",
      "Use rich, moisture-retentive soil with good drainage.",
      "Baby Tears performs best where humidity stays fairly high and temperatures remain moderate."
    ],
    maintenance: [
      "Keep soil evenly moist and do not allow it to dry out completely.",
      "Provide extra humidity indoors if the air is very dry.",
      "Feed lightly during active growth to maintain lush foliage."
    ],
    pruning: [
      "Trim lightly to keep the mat neat and to control spread.",
      "Pinch or shear overgrown sections to encourage denser growth.",
      "Remove any dry or thinning patches and refresh with cuttings if needed."
    ],
    winterizing: [
      "Protect outdoor plantings from frost unless grown in a very mild climate.",
      "Bring containers indoors before cold weather arrives.",
      "Reduce feeding in winter but continue steady moisture."
    ]
  },
  {
    commonName: "Corsican Mint",
    slug: "corsican-mint",
    summary: "A fragrant low-growing groundcover with tiny leaves, best for cool moist spots and light foot traffic between stones.",
    planting: [
      "Plant in spring in part shade or gentle morning sun.",
      "Use moist, rich, well-drained soil and avoid hot dry exposure.",
      "Corsican Mint works especially well between pavers, in troughs, and in shaded containers."
    ],
    maintenance: [
      "Keep soil consistently moist, especially during warm weather.",
      "Mulch lightly or top-dress with compost to help hold moisture.",
      "This plant may struggle in intense summer heat or dry windy sites."
    ],
    pruning: [
      "Trim lightly if the mat becomes ragged or uneven.",
      "Remove damaged patches and allow healthy runners to refill the area.",
      "Pinch back flowering growth if you want to focus on foliage density."
    ],
    winterizing: [
      "Protect from severe winter drying and freeze-thaw stress.",
      "Use a very light mulch in colder areas once the ground cools.",
      "Avoid letting winter debris smother the mat."
    ]
  },
  {
    commonName: "Dymondia",
    slug: "dymondia",
    summary: "A drought-tolerant silver-green groundcover that forms a tight low mat in sunny, well-drained landscapes.",
    planting: [
      "Plant in full sun in sharply drained soil or sandy loam.",
      "Space small plants evenly so they can knit together into a uniform mat.",
      "Dymondia is excellent between stepping stones and in low-water borders."
    ],
    maintenance: [
      "Water regularly during establishment, then reduce to occasional deep watering.",
      "Avoid soggy soil, especially in cool weather.",
      "Keep weeds out while the groundcover fills in."
    ],
    pruning: [
      "Trim stray growth lightly to keep edges neat.",
      "Remove damaged or sparse patches and let surrounding growth refill the gap.",
      "Minimal pruning is usually needed once the mat is established."
    ],
    winterizing: [
      "Good drainage is the main winter requirement.",
      "Protect younger plantings from extreme cold in marginal climates.",
      "Avoid heavy mulch that traps too much moisture over the crown."
    ]
  },
  {
    commonName: "Epimedium",
    slug: "epimedium",
    summary: "A durable shade perennial with delicate spring flowers and graceful foliage, ideal for dry shade and underplanting.",
    planting: [
      "Plant in spring or early fall in part shade to shade.",
      "Use humus-rich, well-drained soil with moderate moisture.",
      "Epimedium is excellent under trees, along woodland paths, and in dry shade borders."
    ],
    maintenance: [
      "Water during establishment and in prolonged dry periods, especially the first year.",
      "Mulch with compost or leaf mold to enrich the soil and hold moisture.",
      "Once settled, Epimedium is notably resilient and low maintenance."
    ],
    pruning: [
      "Cut back old foliage in late winter before new growth and flowers emerge.",
      "Remove tired or damaged leaves during the season if needed.",
      "Divide older clumps if you want to expand the planting."
    ],
    winterizing: [
      "Apply a light mulch in colder climates after the ground cools.",
      "Keep heavy wet debris from sitting on the crown through winter.",
      "Allow fresh spring growth to replace last year's foliage cleanly."
    ]
  },
  {
    commonName: "Lamium",
    slug: "lamium",
    summary: "A fast-spreading shade groundcover with silver-marked foliage and soft flowers, useful for brightening darker garden spaces.",
    planting: [
      "Plant in spring or early fall in part shade to shade.",
      "Use moist, well-drained soil with added organic matter.",
      "Lamium is useful under shrubs, along shady edges, and in woodland-style plantings."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment, then water during dry stretches.",
      "Mulch lightly to help retain moisture and limit weed competition.",
      "Monitor spread so it stays where you want it in mixed borders."
    ],
    pruning: [
      "Shear lightly after flowering or if growth becomes leggy.",
      "Trim back wandering stems to maintain a cleaner outline.",
      "Refresh worn patches by cutting them back and letting new growth fill in."
    ],
    winterizing: [
      "Lamium usually overwinters well with little attention in suitable zones.",
      "Use a light mulch in colder areas if needed.",
      "Remove any winter-damaged growth as spring begins."
    ]
  },
  {
    commonName: "Scotch Moss",
    slug: "scotch-moss",
    summary: "A vivid chartreuse moss-like groundcover that forms a low cushion in cool, evenly moist garden settings.",
    planting: [
      "Plant in spring in full sun to part shade, depending on climate.",
      "Use well-drained soil that stays evenly moist but not soggy.",
      "Scotch Moss is ideal for rock gardens, path edges, and small accent spaces."
    ],
    maintenance: [
      "Keep moisture consistent, especially in heat and during establishment.",
      "Avoid harsh drought or intense reflected heat that can scorch the mat.",
      "Top-dress lightly with compost if the planting looks thin."
    ],
    pruning: [
      "Trim lightly to keep edges neat or refresh the shape.",
      "Remove browned or damaged patches and allow surrounding growth to fill in.",
      "Minimal grooming is usually enough when conditions are good."
    ],
    winterizing: [
      "Protect from winter sogginess more than from cold itself.",
      "Use a very light mulch only if conditions are especially harsh.",
      "Clear off heavy debris so the cushion can breathe through winter."
    ]
  },
  {
    commonName: "Sea Thrift",
    slug: "sea-thrift",
    summary: "A compact tufted perennial with globe flowers and grassy foliage, excellent for edging, gravel gardens, and coastal-style plantings.",
    planting: [
      "Plant in spring in full sun and sharply drained soil.",
      "Use lean or sandy ground rather than rich heavy soil.",
      "Sea Thrift works well in rock gardens, borders, and troughs."
    ],
    maintenance: [
      "Water regularly during establishment, then only occasionally during long dry spells.",
      "Avoid overfeeding, which can shorten the plant's lifespan and loosen its habit.",
      "Keep the crown from staying wet under heavy mulch."
    ],
    pruning: [
      "Deadhead spent blooms to keep the plant neat and encourage more flowers.",
      "Trim away winter-browned foliage in early spring.",
      "Divide older clumps if the center begins to thin."
    ],
    winterizing: [
      "Excellent drainage is essential through winter.",
      "Use gravel or a very light mulch rather than dense organic cover.",
      "Protect from persistent winter wet more than from freezing temperatures."
    ]
  },
  {
    commonName: "Blue Grama",
    slug: "blue-grama",
    summary: "A native warm-season grass with distinctive eyelash-like seed heads and strong drought tolerance for sunny open plantings.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Use a site with good airflow and enough room for the natural clumping habit.",
      "Blue Grama is ideal for native plantings, meadows, and low-water landscapes."
    ],
    maintenance: [
      "Water regularly while establishing, then only occasionally during extended drought.",
      "Avoid rich soil and excessive fertilizer, which can weaken the natural form.",
      "This grass performs best with sun, drainage, and moderate neglect."
    ],
    pruning: [
      "Cut clumps back in late winter or early spring before fresh growth begins.",
      "Remove spent seed stems earlier only if a tidier look is preferred.",
      "Divide older clumps if vigor declines over time."
    ],
    winterizing: [
      "Blue Grama usually needs little winter protection once established.",
      "Leave seed heads standing for winter texture and habitat value if desired.",
      "Keep crowns from sitting in soggy debris through winter."
    ]
  },
  {
    commonName: "Northern Sea Oats",
    slug: "northern-sea-oats",
    summary: "An ornamental grass with dangling oat-like seed heads that brings movement and texture to shade and part-shade gardens.",
    planting: [
      "Plant in spring or early fall in part shade to full sun depending on climate.",
      "Use average well-drained soil with enough room for the clump to expand naturally.",
      "Northern Sea Oats is excellent for woodland edges, naturalized borders, and erosion control."
    ],
    maintenance: [
      "Water regularly through the first growing season, then during extended dry periods.",
      "Mulch lightly to conserve moisture and help suppress weeds.",
      "This grass can self-seed, so monitor spread if you want to keep it more contained."
    ],
    pruning: [
      "Cut old foliage and seed stems back in late winter or early spring before new growth appears.",
      "Remove seed heads earlier if you want to limit self-sowing.",
      "Divide older clumps when growth becomes crowded."
    ],
    winterizing: [
      "Leave seed heads standing for winter texture if desired.",
      "Apply a light mulch around younger plantings in colder climates.",
      "Avoid letting dense wet debris smother the crown."
    ]
  },
  {
    commonName: "Society Garlic",
    slug: "society-garlic",
    summary: "A clumping perennial with grassy foliage and purple blooms, prized for heat tolerance and easy long-season color.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Choose a warm site with room for the foliage clump to widen over time.",
      "Society Garlic works well in edging, containers, and low-water borders."
    ],
    maintenance: [
      "Water regularly during establishment, then only during prolonged dry periods.",
      "Avoid soggy soil, especially in cooler weather.",
      "Feed lightly in spring if the plant needs a growth boost."
    ],
    pruning: [
      "Remove spent flower stems to keep the clump tidy and encourage continued blooming.",
      "Trim damaged or yellowing foliage as needed.",
      "Divide older clumps if flowering declines or the center thins."
    ],
    winterizing: [
      "In mild climates, little winter care is needed once established.",
      "Mulch lightly in cooler regions to protect the roots.",
      "Container plants may need shelter where freezes are severe."
    ]
  },
  {
    commonName: "Marjoram",
    slug: "marjoram",
    summary: "A fragrant culinary herb with a soft mounded habit, useful in herb gardens, containers, and sunny edible borders.",
    planting: [
      "Plant after frost in full sun and well-drained soil.",
      "Use sandy or loamy soil rather than rich heavy ground.",
      "Marjoram performs well in raised beds, herb planters, and mixed edible gardens."
    ],
    maintenance: [
      "Water regularly while establishing, then allow the soil to dry slightly between waterings.",
      "Avoid overfertilizing, which can weaken flavor and make the plant too lush.",
      "Harvest often to keep plants compact and productive."
    ],
    pruning: [
      "Pinch tips frequently to encourage branching and fuller growth.",
      "Trim lightly after flowering to refresh the mound.",
      "Cut back leggy stems whenever needed during the season."
    ],
    winterizing: [
      "In colder climates, treat as tender or protect well outdoors.",
      "Bring container plants inside before hard frost if you want to overwinter them.",
      "Reduce watering during winter indoor growth."
    ]
  },
  {
    commonName: "Sorrel",
    slug: "sorrel",
    summary: "A tart leafy edible that forms a tidy clump and provides early, useful greens in kitchen gardens and containers.",
    planting: [
      "Plant in spring in full sun to part shade, especially where summers are warm.",
      "Use fertile, moisture-retentive, well-drained soil enriched with compost.",
      "Sorrel works well in edible borders, raised beds, and patio pots."
    ],
    maintenance: [
      "Keep soil evenly moist to support tender leaf growth.",
      "Feed lightly with compost during the season for repeated harvests.",
      "Harvest outer leaves regularly to keep the plant productive."
    ],
    pruning: [
      "Remove flower stalks early if you want to keep the plant focused on leaf production.",
      "Trim worn leaves and continue harvesting outer growth.",
      "Divide mature clumps when growth becomes crowded."
    ],
    winterizing: [
      "Mulch lightly around the crown in colder climates.",
      "Plants often return well in spring if roots are protected.",
      "Remove winter-damaged foliage once new leaves appear."
    ]
  },
  {
    commonName: "African Violet",
    slug: "african-violet",
    summary: "A classic flowering houseplant with soft leaves and compact blooms, ideal for bright indoor spaces out of direct sun.",
    planting: [
      "Grow in bright indirect light rather than hot direct sun.",
      "Use an airy African Violet potting mix and containers with good drainage.",
      "Keep crowns above the soil line and avoid burying the center."
    ],
    maintenance: [
      "Water when the mix begins to dry slightly, keeping foliage dry if possible.",
      "Use room-temperature water and avoid leaving roots soggy.",
      "Feed lightly and regularly during active growth for steady blooming."
    ],
    pruning: [
      "Remove spent flowers and damaged leaves to keep the rosette neat.",
      "Thin extra suckers if the plant begins forming multiple crowns.",
      "Repot when the neck elongates or the plant outgrows its container."
    ],
    winterizing: [
      "Protect from cold windows, drafts, and sudden temperature drops.",
      "Maintain bright indoor light through winter for continued health.",
      "Reduce feeding slightly if growth slows in the darker season."
    ]
  },
  {
    commonName: "Alocasia Polly",
    slug: "alocasia-polly",
    summary: "A dramatic houseplant with bold arrow-shaped leaves and strong contrast veining, suited to warm humid interiors.",
    planting: [
      "Grow in bright indirect light with a rich but airy, well-drained potting mix.",
      "Use a container that drains well and does not stay soggy.",
      "Choose a warm location away from cold drafts."
    ],
    maintenance: [
      "Keep soil lightly and evenly moist during active growth without waterlogging it.",
      "Provide good humidity to prevent leaf edge browning.",
      "Feed lightly during the growing season to support fresh foliage."
    ],
    pruning: [
      "Remove yellowing or damaged leaves at the base with clean snips.",
      "Do not cut healthy foliage unnecessarily, as the plant relies on each leaf for energy.",
      "Repot only when roots fill the pot or growth slows from crowding."
    ],
    winterizing: [
      "Keep the plant warm and away from cold windows in winter.",
      "Reduce watering slightly if growth slows in lower light.",
      "Maintain humidity and avoid sudden temperature swings."
    ]
  },
  {
    commonName: "Areca Palm",
    slug: "areca-palm",
    summary: "A feathery indoor palm that adds height and softness to bright interiors and performs best with steady moisture and humidity.",
    planting: [
      "Grow in bright filtered light or gentle morning sun indoors.",
      "Use a well-drained palm or houseplant mix in a pot with drainage holes.",
      "Allow enough room for arching fronds to spread naturally."
    ],
    maintenance: [
      "Keep soil evenly moist but not soggy, allowing the surface to dry slightly between waterings.",
      "Provide extra humidity if indoor air is dry.",
      "Feed lightly in the growing season with a balanced houseplant fertilizer."
    ],
    pruning: [
      "Remove fully brown or damaged fronds at the base.",
      "Trim only the dead tips of partially browned leaves rather than cutting healthy green tissue.",
      "Avoid severe pruning, as palms do not respond well to heavy cutting."
    ],
    winterizing: [
      "Keep away from cold drafts and very dry heat sources.",
      "Reduce feeding in winter and water slightly less if growth slows.",
      "Maintain bright light so the plant stays full and healthy."
    ]
  },
  {
    commonName: "Begonia Rex",
    slug: "begonia-rex",
    summary: "A foliage-focused houseplant known for richly patterned leaves and bold color, best grown in bright indirect indoor light.",
    planting: [
      "Grow in bright indirect light and avoid harsh direct sun that can scorch the leaves.",
      "Use a loose, well-drained indoor potting mix with good airflow around the roots.",
      "Choose a container with drainage and avoid oversizing the pot."
    ],
    maintenance: [
      "Keep soil lightly moist but never constantly wet.",
      "Provide humidity without crowding the plant into stagnant air.",
      "Feed lightly during active growth to support fresh colorful foliage."
    ],
    pruning: [
      "Remove damaged or aging leaves at the base to keep the plant tidy.",
      "Pinch growing tips lightly if you want a bushier shape.",
      "Repot or divide rhizomatous growth when the plant spreads beyond its container."
    ],
    winterizing: [
      "Protect from cold drafts and low winter humidity.",
      "Reduce watering slightly if growth slows in darker months.",
      "Keep the plant in bright indirect light throughout winter."
    ]
  },
  {
    commonName: "Cast Iron Plant",
    slug: "cast-iron-plant",
    summary: "A tough shade-tolerant houseplant or mild-climate foliage plant valued for its durability and upright glossy leaves.",
    planting: [
      "Grow in low to medium indirect light indoors, or in shade outdoors in mild climates.",
      "Use a well-drained but moisture-retentive potting mix.",
      "Avoid hot direct sun, which can bleach or scorch the leaves."
    ],
    maintenance: [
      "Water when the top part of the soil has dried, but do not let roots sit in water.",
      "This plant tolerates neglect better than many indoor plants once established.",
      "Feed lightly during the growing season if growth is slow."
    ],
    pruning: [
      "Remove damaged or yellowing leaves at the base as needed.",
      "Wipe leaves occasionally to keep them clean and glossy.",
      "Divide crowded clumps when repotting if you want to propagate."
    ],
    winterizing: [
      "Keep indoor plants away from freezing drafts and radiator heat.",
      "Reduce watering somewhat in winter when growth slows.",
      "Outdoor plantings in mild climates benefit from light mulch around the roots."
    ]
  },
  {
    commonName: "Christmas Cactus",
    slug: "christmas-cactus",
    summary: "A long-lived holiday houseplant with arching segmented stems and colorful blooms that appear as days shorten.",
    planting: [
      "Grow in bright indirect light with protection from harsh midday sun.",
      "Use a loose, fast-draining cactus or epiphytic mix in a pot with drainage.",
      "Keep the plant slightly root snug for best blooming performance."
    ],
    maintenance: [
      "Water when the top of the mix dries slightly, but avoid prolonged dryness during active growth.",
      "Increase humidity modestly if indoor air is very dry.",
      "Feed lightly from spring through early fall to support flowering potential."
    ],
    pruning: [
      "Pinch off a few segments after bloom if you want a fuller branching shape.",
      "Remove any damaged sections cleanly at the joints.",
      "Use healthy segments as cuttings if you want to propagate new plants."
    ],
    winterizing: [
      "For rebloom, provide longer nights and cooler temperatures in fall.",
      "Keep the plant away from cold drafts during winter flowering season.",
      "Do not overwater while the plant is resting or setting buds."
    ]
  },
  {
    commonName: "Norfolk Island Pine",
    slug: "norfolk-island-pine",
    summary: "A soft-needled indoor conifer that adds upright structure and a living tree feel to bright interior spaces.",
    planting: [
      "Grow in bright indirect light or gentle morning sun indoors.",
      "Use a well-drained indoor potting mix in a container with good drainage.",
      "Choose a spot with room for vertical growth and evenly spaced branching."
    ],
    maintenance: [
      "Keep the soil lightly and evenly moist, allowing only the surface to dry slightly between waterings.",
      "Provide higher humidity if indoor air is especially dry.",
      "Rotate the container occasionally so growth stays balanced toward the light."
    ],
    pruning: [
      "Remove only dead or damaged lower branches as needed.",
      "Avoid cutting the main leader if you want to preserve a natural tree form.",
      "Trim brown tips lightly without cutting deeply into healthy green tissue."
    ],
    winterizing: [
      "Keep away from heaters, cold drafts, and freezing windows.",
      "Maintain bright winter light and do not let the root ball dry out fully.",
      "Reduce feeding in winter while continuing steady but lighter watering."
    ]
  },
  {
    commonName: "Peperomia",
    slug: "peperomia",
    summary: "A compact easy-care houseplant grown for decorative foliage and adaptability in bright indoor conditions.",
    planting: [
      "Grow in bright indirect light and avoid harsh direct afternoon sun.",
      "Use a loose, fast-draining houseplant mix in a container with drainage.",
      "Peperomia performs well in small pots and tabletop displays."
    ],
    maintenance: [
      "Allow the soil to dry slightly between waterings rather than keeping it constantly wet.",
      "Provide average indoor humidity and protect the plant from cold drafts.",
      "Feed lightly during active growth for steady fresh foliage."
    ],
    pruning: [
      "Pinch back stems lightly to keep the plant bushy and compact.",
      "Remove damaged or aging leaves as needed.",
      "Repot only when roots become crowded, as the plant generally likes a snug container."
    ],
    winterizing: [
      "Keep the plant in bright indoor light during the darker season.",
      "Reduce watering a bit in winter when growth slows.",
      "Avoid exposing it to cold windows or sudden temperature drops."
    ]
  },
  {
    commonName: "Philodendron Heartleaf",
    slug: "philodendron-heartleaf",
    summary: "A trailing indoor vine with glossy heart-shaped leaves, valued for easy care and graceful shelf or hanging growth.",
    planting: [
      "Grow in bright to medium indirect light indoors.",
      "Use a loose, well-drained houseplant mix in a pot with drainage.",
      "This plant works well in hanging baskets, shelves, or climbing supports."
    ],
    maintenance: [
      "Water when the top portion of the soil begins to dry, but do not let roots sit in water.",
      "It tolerates average indoor humidity but appreciates a bit more in very dry rooms.",
      "Feed lightly in spring and summer for fuller trailing growth."
    ],
    pruning: [
      "Trim vines back to encourage branching and a fuller shape.",
      "Remove sparse or damaged stems at the node to refresh the plant.",
      "Root healthy cuttings easily in water or potting mix if you want to propagate."
    ],
    winterizing: [
      "Keep away from cold drafts and very dim corners in winter.",
      "Reduce watering slightly if growth slows.",
      "Maintain a stable indoor temperature and bright indirect light."
    ]
  },
  {
    commonName: "Prayer Plant",
    slug: "prayer-plant",
    summary: "A patterned tropical houseplant with folding leaves and strong humidity needs, ideal for warm bright indoor spaces.",
    planting: [
      "Grow in bright indirect light with protection from direct sun.",
      "Use a rich but airy moisture-retentive potting mix in a container with drainage.",
      "Choose a warm spot with consistently moderate humidity."
    ],
    maintenance: [
      "Keep soil evenly moist but not soggy, especially during active growth.",
      "Provide humidity to reduce crispy leaf edges and curling.",
      "Use room-temperature water and avoid letting the plant dry out severely."
    ],
    pruning: [
      "Remove yellowing or damaged leaves at the base as needed.",
      "Pinch tips lightly if the plant needs encouragement to branch.",
      "Refresh or divide the plant if it becomes crowded in the pot."
    ],
    winterizing: [
      "Protect from cold windows, heater blasts, and dry indoor air.",
      "Reduce feeding in winter but keep moisture fairly even.",
      "Maintain steady warmth and humidity through the colder months."
    ]
  },
  {
    commonName: "Air Plant",
    slug: "air-plant",
    summary: "A soil-free epiphyte that thrives with bright light, airflow, and regular moisture from soaking or misting.",
    planting: [
      "Display in bright indirect light with strong airflow rather than in closed damp containers.",
      "Mount or place the plant where excess water can dry away easily after soaking.",
      "Avoid burying the base or crowding the leaves tightly together."
    ],
    maintenance: [
      "Soak the plant regularly or mist more often depending on your indoor humidity.",
      "Let it dry upside down or in a bright airy spot after watering so the crown does not stay wet.",
      "Feed occasionally with a bromeliad or air-plant fertilizer diluted lightly."
    ],
    pruning: [
      "Remove fully dried lower leaves gently from the base.",
      "Trim only dead leaf tips without cutting deeply into healthy tissue.",
      "Separate offsets once they are large enough if you want additional plants."
    ],
    winterizing: [
      "Keep away from freezing temperatures and very cold windows.",
      "Provide bright winter light and maintain regular but not excessive hydration.",
      "Ensure fast drying after each watering session in cooler months."
    ]
  },
  {
    commonName: "Banana Dwarf Cavendish",
    slug: "banana-dwarf-cavendish",
    summary: "A bold tropical foliage plant that brings a lush, oversized-leaf look to bright warm indoor spaces or summer patios.",
    planting: [
      "Grow in full sun to very bright light with a rich, moisture-retentive but draining mix.",
      "Use a large container with room for steady root growth and top-heavy foliage.",
      "Place in a warm sheltered spot indoors or outdoors in the growing season."
    ],
    maintenance: [
      "Keep soil evenly moist and feed regularly during active growth.",
      "This plant appreciates warmth, humidity, and consistent nutrition.",
      "Protect from cold, wind, and sudden moisture swings that can shred or stress leaves."
    ],
    pruning: [
      "Remove torn or aging lower leaves at the base as they naturally decline.",
      "Cut away damaged foliage cleanly to keep the plant tidy.",
      "Thin or separate offsets only if you want to propagate and control the clump."
    ],
    winterizing: [
      "Bring container plants indoors before temperatures drop too low.",
      "Keep in the brightest possible light through winter.",
      "Reduce feeding slightly in winter but do not allow the plant to dry out completely."
    ]
  },
  {
    commonName: "Blackberry",
    slug: "blackberry",
    summary: "A fruiting bramble that produces sweet berries and vigorous canes, best grown in sunny edible gardens with support.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with good airflow.",
      "Provide a trellis or support system if you are growing trailing or semi-erect types.",
      "Space plants well so canes can be trained and harvested easily."
    ],
    maintenance: [
      "Water regularly while establishing and during fruiting, especially in dry weather.",
      "Mulch to hold moisture, suppress weeds, and protect shallow roots.",
      "Feed in spring with compost or a balanced fruiting fertilizer."
    ],
    pruning: [
      "Remove canes that have fruited after harvest, as they will not produce again.",
      "Tie in new canes and thin extras to keep the patch manageable.",
      "Shorten lateral growth in dormant season pruning according to the cane type."
    ],
    winterizing: [
      "Mulch around the root zone in colder climates for added protection.",
      "Secure canes to supports before winter storms and wind.",
      "Prune out any winter-damaged cane sections in late winter or spring."
    ]
  },
  {
    commonName: "Cabbage",
    slug: "cabbage",
    summary: "A cool-season edible that forms dense leafy heads and performs best in rich soil with even moisture.",
    planting: [
      "Plant in cool weather in full sun, with part shade in warmer climates if needed.",
      "Use fertile, compost-rich soil with consistent moisture retention and good drainage.",
      "Space plants generously so heads can size up without crowding."
    ],
    maintenance: [
      "Keep soil evenly moist to prevent stress and splitting.",
      "Feed regularly with compost or a nitrogen-friendly vegetable program during early growth.",
      "Monitor for caterpillars and other brassica pests through the season."
    ],
    pruning: [
      "No pruning is needed beyond removing damaged outer leaves.",
      "Harvest the head when it feels firm and reaches the expected size.",
      "Clean up plant residue promptly after harvest to reduce pest carryover."
    ],
    winterizing: [
      "Protect crops from hard freezes with row cover in colder weather.",
      "Mulch around roots to stabilize moisture and temperature.",
      "Harvest before severe prolonged freezes if the variety is not especially hardy."
    ]
  },
  {
    commonName: "Cauliflower",
    slug: "cauliflower",
    summary: "A cool-season vegetable grown for dense edible heads, requiring steady moisture, fertility, and timing for best results.",
    planting: [
      "Plant in cool conditions in full sun, using rich soil amended heavily with compost.",
      "Space plants well so each can form a strong leafy frame around the developing head.",
      "Cauliflower prefers consistent conditions more than rapid weather swings."
    ],
    maintenance: [
      "Keep soil evenly moist and feed regularly to support uninterrupted growth.",
      "Mulch around plants to stabilize moisture and reduce stress.",
      "Watch for pests such as cabbage worms and protect young crops as needed."
    ],
    pruning: [
      "No major pruning is required.",
      "Tie or fold leaves over the developing head for blanching if the variety benefits from it.",
      "Harvest when the head is dense, smooth, and still tight."
    ],
    winterizing: [
      "Use row cover or frost protection during unexpected cold snaps.",
      "Mulch the soil to reduce rapid temperature changes.",
      "Harvest before hard freezes if the crop is nearing maturity."
    ]
  },
  {
    commonName: "Peach",
    slug: "peach",
    summary: "A fruit tree grown for sweet summer harvests, needing full sun, good airflow, and regular pruning for productivity.",
    planting: [
      "Plant in full sun in well-drained fertile soil with plenty of air circulation.",
      "Choose a site away from frost pockets if possible, as flowers can be vulnerable to late cold.",
      "Give the tree enough room for an open canopy and easy maintenance access."
    ],
    maintenance: [
      "Water deeply during establishment and during dry periods, especially while fruit is developing.",
      "Feed in spring according to the vigor and soil fertility of the site.",
      "Thin fruit after set so remaining peaches size up better and branches are less stressed."
    ],
    pruning: [
      "Prune annually in late winter or early spring to maintain an open-center shape.",
      "Remove dead, damaged, crossing, or inward-growing wood.",
      "Summer touch-up pruning can help light and airflow reach the fruiting wood."
    ],
    winterizing: [
      "Mulch around the root zone but keep material away from the trunk.",
      "Protect the trunk from sunscald and animal damage in colder climates if needed.",
      "Clean up fallen leaves and fruit to reduce overwintering disease pressure."
    ]
  },
  {
    commonName: "Raspberry",
    slug: "raspberry",
    summary: "A productive cane fruit that rewards sunny planting, steady moisture, and annual pruning with sweet berries.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with good airflow.",
      "Provide a support or simple trellis system for easier training and harvest.",
      "Space plants generously so new canes can develop without crowding."
    ],
    maintenance: [
      "Water consistently, especially while plants establish and when fruit is forming.",
      "Mulch around the row to conserve moisture and keep weeds down.",
      "Feed in spring with compost or a balanced berry fertilizer."
    ],
    pruning: [
      "Remove canes that have fruited, since those canes will not crop again.",
      "Thin new canes to the strongest stems so the patch stays open and productive.",
      "Follow the pruning style that matches whether your variety fruits in summer or fall."
    ],
    winterizing: [
      "Mulch the roots in colder climates for added winter protection.",
      "Secure canes to support wires before winter wind and snow.",
      "Cut away winter-damaged cane sections in late winter or spring."
    ]
  },
  {
    commonName: "Zucchini",
    slug: "zucchini",
    summary: "A vigorous summer squash that grows quickly in warm weather and produces heavily with sun, water, and regular harvest.",
    planting: [
      "Plant after frost in full sun once the soil has warmed.",
      "Use rich, compost-amended soil with good drainage and plenty of room for growth.",
      "Direct sow or transplant carefully without disturbing roots too much."
    ],
    maintenance: [
      "Keep soil evenly moist, especially once flowering and fruiting begin.",
      "Feed with compost or a vegetable fertilizer to support rapid growth.",
      "Harvest often to keep plants productive and prevent oversized fruit."
    ],
    pruning: [
      "Remove damaged or diseased leaves promptly to improve airflow.",
      "Trim only lightly, as the plant relies on healthy leaves to fuel fruiting.",
      "Cut fruits cleanly from the stem rather than twisting them hard."
    ],
    winterizing: [
      "Treat as a warm-season annual and remove plants after frost ends production.",
      "Clean up plant debris to reduce overwintering pests and disease.",
      "Protect late-season plants with row cover only if you are trying to extend harvest briefly."
    ]
  },
  {
    commonName: "Agave",
    slug: "agave",
    summary: "A bold architectural succulent prized for sculptural rosettes and exceptional tolerance of sun and drought.",
    planting: [
      "Plant in full sun in sharply drained soil or raised beds.",
      "Choose a site with enough space for the mature rosette and any offsets.",
      "Avoid heavy clay or low wet spots unless drainage is improved first."
    ],
    maintenance: [
      "Water regularly during establishment, then deeply but infrequently.",
      "Do not overfeed; agaves usually prefer lean conditions.",
      "Keep mulch and debris away from the crown so moisture does not linger."
    ],
    pruning: [
      "Remove dead lower leaves carefully to tidy the base if needed.",
      "Use gloves and caution around stiff or spined foliage.",
      "Separate offsets only if you want to propagate or control spread."
    ],
    winterizing: [
      "Protect from winter wet more than from cold where drainage is the main risk.",
      "In marginal climates, shield the crown from repeated freeze-thaw moisture.",
      "Container plants may need shelter during hard freezes."
    ]
  },
  {
    commonName: "Haworthia Zebra",
    slug: "haworthia-zebra",
    summary: "A compact striped succulent that thrives indoors with bright light, quick drainage, and restrained watering.",
    planting: [
      "Grow in bright indirect light or gentle direct morning sun.",
      "Use a fast-draining cactus or succulent mix in a small pot with drainage.",
      "Keep the crown slightly above overly compacted or wet soil."
    ],
    maintenance: [
      "Water thoroughly, then allow the mix to dry well before watering again.",
      "This plant prefers moderate indoor conditions over very intense sun or constant moisture.",
      "Feed lightly during active growth with a diluted succulent fertilizer."
    ],
    pruning: [
      "Remove dried lower leaves gently from the base.",
      "Separate offsets when large enough if you want to propagate new plants.",
      "Little to no shaping is needed for the natural rosette form."
    ],
    winterizing: [
      "Protect from freezing temperatures and cold windows.",
      "Reduce watering in winter when growth slows.",
      "Keep in bright light and avoid letting water sit in the rosette."
    ]
  },
  {
    commonName: "Lithops",
    slug: "lithops",
    summary: "A tiny stone-like succulent that needs excellent drainage, bright light, and very careful seasonal watering.",
    planting: [
      "Grow in bright light with some direct sun, depending on indoor intensity.",
      "Use a gritty, mineral-heavy succulent mix in a shallow pot with drainage.",
      "Plant so the bodies sit naturally at or slightly above the soil surface."
    ],
    maintenance: [
      "Water sparingly and follow the plant's natural growth cycle rather than a fixed weekly schedule.",
      "Avoid overwatering, which is the most common cause of loss.",
      "Provide good airflow and strong light to keep growth compact."
    ],
    pruning: [
      "Do not prune the living body of the plant.",
      "Allow old outer leaves to dry and be absorbed naturally as new growth emerges.",
      "Remove only fully dried papery remnants if necessary."
    ],
    winterizing: [
      "Keep frost-free and in bright light during winter.",
      "Water very little or not at all during resting periods, depending on the plant's cycle.",
      "Avoid humidity buildup and cold damp conditions."
    ]
  },
  {
    commonName: "Chalk Sticks",
    slug: "chalk-sticks",
    summary: "A silver-blue succulent groundcover with pencil-like leaves, excellent for hot dry containers and low-water planting.",
    planting: [
      "Plant in full sun to bright light in sharply drained soil or a cactus mix.",
      "Use raised beds, slopes, or pots where water drains quickly.",
      "Allow space for the plant to spread as a low mat or spill over edges."
    ],
    maintenance: [
      "Water regularly during establishment, then only when the soil has dried well.",
      "Avoid rich soil and heavy organic mulch around the stems.",
      "Strong light helps maintain the best compact growth and color."
    ],
    pruning: [
      "Trim straggly growth lightly to keep the plant dense and tidy.",
      "Use healthy cut pieces as cuttings if you want to propagate.",
      "Remove any stems damaged by cold or excess moisture."
    ],
    winterizing: [
      "Protect from hard frost in colder climates.",
      "Keep the crown and stems on the dry side through cool wet periods.",
      "Container plants can be moved to shelter if severe freezes are expected."
    ]
  },
  {
    commonName: "Bougainvillea",
    slug: "bougainvillea",
    summary: "A vivid flowering climber or shrub that thrives with heat, sun, and sharp drainage in warm climates.",
    planting: [
      "Plant in full sun in well-drained soil once weather is reliably warm.",
      "Choose a site with support if you want climbing growth, or room for a sprawling shrub form.",
      "Avoid frequent root disturbance once the plant is established."
    ],
    maintenance: [
      "Water regularly during establishment, then let the soil dry somewhat between waterings.",
      "Too much fertilizer can reduce flowering, so feed lightly and strategically.",
      "This plant flowers best with heat, sun, and moderate stress rather than pampering."
    ],
    pruning: [
      "Prune after flowering flushes to shape and manage size.",
      "Wear gloves, as many types have thorns.",
      "Remove dead or frost-damaged growth once warm weather returns."
    ],
    winterizing: [
      "Protect from frost or grow in containers that can be sheltered.",
      "Reduce watering in winter while the plant rests.",
      "In marginal climates, expect top growth to be damaged if cold is severe."
    ]
  },
  {
    commonName: "Mandevilla",
    slug: "mandevilla",
    summary: "A tropical flowering vine with large trumpet blooms, ideal for summer containers, trellises, and patio color.",
    planting: [
      "Plant after frost in full sun to part sun in fertile, well-drained soil or potting mix.",
      "Provide a trellis or support for climbing growth.",
      "Mandevilla is especially effective in containers near entryways or patios."
    ],
    maintenance: [
      "Keep soil evenly moist but not soggy during active growth.",
      "Feed regularly during the growing season to support continual blooming.",
      "Warmth and bright light are key to strong performance."
    ],
    pruning: [
      "Pinch young growth for fuller branching if desired.",
      "Prune lightly to shape or shorten vines before bringing indoors or starting a new season.",
      "Remove damaged stems and faded growth as needed."
    ],
    winterizing: [
      "Bring container plants indoors before frost if you want to keep them.",
      "Reduce watering and prune lightly for indoor overwintering.",
      "Keep in bright light and protect from cold drafts."
    ]
  },
  {
    commonName: "Borage",
    slug: "borage",
    summary: "A fast-growing edible and pollinator plant with blue flowers, useful in herb gardens, vegetable beds, and cottage plantings.",
    planting: [
      "Plant in full sun in average well-drained soil after frost.",
      "Direct sow where possible, since borage can dislike being moved once roots establish.",
      "Give plants enough room for their broad leafy habit."
    ],
    maintenance: [
      "Water regularly while young, then only as needed in dry weather.",
      "Avoid overly rich feeding, which can lead to excessive leafy growth.",
      "Borage often self-seeds, so manage seedlings if you want to control spread."
    ],
    pruning: [
      "Harvest leaves and flowers regularly for culinary use if desired.",
      "Trim spent or collapsing stems to keep the plant cleaner late in the season.",
      "Remove seed heads early if you want to reduce reseeding."
    ],
    winterizing: [
      "Treat as an annual and remove plants after frost ends the season.",
      "Compost healthy plant debris or clean it up promptly from the bed.",
      "Allow a few seeds to drop only if you want volunteer seedlings next year."
    ]
  },
  {
    commonName: "Calendula Orange",
    slug: "calendula-orange",
    summary: "A cheerful cool-season flower with edible petals and steady bloom, great for borders, kitchen gardens, and containers.",
    planting: [
      "Plant in full sun to part shade in cool-season conditions.",
      "Use fertile, well-drained soil and space plants so air can move freely around them.",
      "Calendula Orange performs well in raised beds, pots, and flower-edible combinations."
    ],
    maintenance: [
      "Keep soil evenly moist, especially in warm spells.",
      "Feed lightly if needed, but avoid overfertilizing.",
      "This plant blooms best in cooler weather and may slow in intense summer heat."
    ],
    pruning: [
      "Deadhead often to prolong flowering and keep the plant tidy.",
      "Pinch young plants lightly for bushier growth if needed.",
      "Trim tired stems back to fresh growth when bloom wanes."
    ],
    winterizing: [
      "Treat as an annual in colder climates, though it may handle light frost.",
      "Protect with light cover if you are trying to extend bloom through cool weather.",
      "Remove plants after hard frost or when seasonal decline is complete."
    ]
  },
  {
    commonName: "Ceratostigma",
    slug: "ceratostigma",
    summary: "A low spreading perennial or subshrub with bright blue flowers and excellent red fall foliage in sunny sites.",
    planting: [
      "Plant in spring in full sun and well-drained soil.",
      "Use a warm open site where the plant can spread into a loose edging or groundcover role.",
      "Ceratostigma is especially useful near paths, walls, and dry sunny borders."
    ],
    maintenance: [
      "Water regularly during establishment, then only during prolonged dry spells.",
      "Avoid overly rich soil, which can make growth too soft and floppy.",
      "This plant is generally easy once rooted in a well-drained site."
    ],
    pruning: [
      "Cut back old stems in late winter or early spring as new growth begins.",
      "Trim lightly after bloom only if the edge needs tidying.",
      "Remove winter-damaged tips once fresh shoots appear."
    ],
    winterizing: [
      "Mulch lightly around the root zone in colder climates.",
      "Good drainage is more important than heavy winter cover.",
      "Leave some top growth in place until spring if winters are harsh."
    ]
  },
  {
    commonName: "Clematis Montana",
    slug: "clematis-montana",
    summary: "A vigorous spring-flowering climber that quickly covers trellises, fences, and pergolas with masses of bloom.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Keep roots cool with mulch or nearby low plantings while letting the vine reach good light.",
      "Provide sturdy support from the beginning because this clematis grows strongly."
    ],
    maintenance: [
      "Water regularly during establishment and during long dry periods.",
      "Feed lightly in spring with compost or a balanced flowering fertilizer.",
      "Allow good airflow around the base to reduce stress and keep growth healthy."
    ],
    pruning: [
      "Prune right after flowering if size control is needed.",
      "Remove dead or tangled growth and shorten stems only as much as necessary.",
      "Avoid heavy late pruning if you want the fullest spring bloom."
    ],
    winterizing: [
      "Mulch the root zone to protect and cool the roots.",
      "Secure vines to support before winter winds arrive.",
      "Inspect for damaged stems and clean up lightly in early spring."
    ]
  },
  {
    commonName: "Cotyledon",
    slug: "cotyledon",
    summary: "A sculptural succulent grown for thick leaves and drought tolerance, excellent in bright containers and dry gardens.",
    planting: [
      "Plant in full sun to bright light in sharply drained succulent soil.",
      "Use containers or raised beds where excess water can move away quickly.",
      "Give the plant room for its rosette or branching succulent habit to expand."
    ],
    maintenance: [
      "Water thoroughly, then let the soil dry well before watering again.",
      "Avoid rich fertilizer and constantly damp soil.",
      "Strong light helps maintain compact growth and better coloration."
    ],
    pruning: [
      "Remove damaged or shriveled leaves as needed.",
      "Trim leggy stems lightly and root healthy cuttings if desired.",
      "Minimal shaping is usually enough for this plant."
    ],
    winterizing: [
      "Protect from hard frost and cold wet conditions.",
      "Move containers to shelter in colder climates.",
      "Reduce watering during cool dormant periods."
    ]
  },
  {
    commonName: "Crape Jasmine",
    slug: "crape-jasmine",
    summary: "A glossy evergreen shrub with white pinwheel flowers, best suited to warm climates and sheltered garden spaces.",
    planting: [
      "Plant in spring in full sun to part shade in fertile, well-drained soil.",
      "Choose a warm protected site if cool wind or cold weather is a concern.",
      "Crape Jasmine works well near patios, entries, and fragrance-oriented plantings."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment and in extended dry spells.",
      "Feed lightly during the growing season to support healthy foliage and bloom.",
      "This shrub appreciates warmth and consistent care in cooler fringe areas."
    ],
    pruning: [
      "Prune lightly after bloom flushes to shape and maintain size.",
      "Remove damaged or crossing stems as needed.",
      "Avoid severe pruning that spoils the natural rounded habit."
    ],
    winterizing: [
      "Protect from frost or prolonged cold in marginal climates.",
      "Mulch the root zone lightly before winter.",
      "Container plants may need to be moved to shelter if freezes are expected."
    ]
  },
  {
    commonName: "Diascia Coral",
    slug: "diascia-coral",
    summary: "A soft mounding flowering plant with coral-toned blooms, ideal for cool-season containers and front borders.",
    planting: [
      "Plant after frost in full sun to part shade, especially in milder conditions.",
      "Use fertile, well-drained soil or a quality potting mix.",
      "Diascia Coral is excellent in baskets, window boxes, and mixed seasonal plantings."
    ],
    maintenance: [
      "Keep soil evenly moist, especially in containers.",
      "Feed lightly through the growing season for steady flower production.",
      "This plant often performs best in cooler weather rather than extreme summer heat."
    ],
    pruning: [
      "Trim lightly after a flush of bloom to encourage fresh growth.",
      "Pinch long stems if the plant begins to sprawl.",
      "Remove faded and damaged stems to keep the mound tidy."
    ],
    winterizing: [
      "Treat as an annual in colder climates.",
      "Protect from early frost if you are trying to stretch the season.",
      "Remove spent plants once hard cold ends their display."
    ]
  },
  {
    commonName: "Evergreen Huckleberry",
    slug: "evergreen-huckleberry",
    summary: "A native evergreen shrub with edible berries and year-round foliage, useful for woodland gardens and natural screening.",
    planting: [
      "Plant in spring or fall in part shade to filtered sun.",
      "Use acidic, humus-rich, well-drained soil and avoid strongly alkaline sites.",
      "Evergreen Huckleberry is excellent in native plantings and woodland-style borders."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment and in dry summer stretches.",
      "Mulch with bark or leaf mold to support acidity and moisture retention.",
      "Growth may be slow at first, but the shrub becomes reliable once settled."
    ],
    pruning: [
      "Prune lightly after fruiting or in late winter if shaping is needed.",
      "Remove damaged or crowded stems to maintain good structure.",
      "Avoid frequent hard pruning that reduces flowers and berry set."
    ],
    winterizing: [
      "Mulch the root zone lightly in colder areas.",
      "Protect younger shrubs from severe drying wind if the site is exposed.",
      "Water before freeze-up if autumn has been unusually dry."
    ]
  },
  {
    commonName: "Gaillardia Arizona Sun",
    slug: "gaillardia-arizona-sun",
    summary: "A compact blanket flower with hot-toned blooms, valued for heat tolerance and long sunny-season color.",
    planting: [
      "Plant in full sun in well-drained soil after frost danger has passed.",
      "Use lean to average soil rather than very rich ground.",
      "Gaillardia Arizona Sun works well in edging, containers, and dry pollinator borders."
    ],
    maintenance: [
      "Water during establishment, then only during extended dry periods.",
      "Avoid overfeeding, which can weaken flowering and the plant's compact habit.",
      "This plant performs best with strong sun and good drainage."
    ],
    pruning: [
      "Deadhead regularly to extend bloom and keep the plant neat.",
      "Trim lightly if stems become tired or uneven in midsummer.",
      "Cut back worn growth near season's end or in early spring."
    ],
    winterizing: [
      "Use a light winter mulch in colder areas, especially for first-year plants.",
      "Avoid trapping wet debris around the crown.",
      "Good drainage helps the plant overwinter more reliably."
    ]
  },
  {
    commonName: "Gazania",
    slug: "gazania",
    summary: "A sun-loving daisy-type plant with vivid blooms and strong drought tolerance for hot, bright beds and containers.",
    planting: [
      "Plant after frost in full sun and well-drained soil.",
      "Use a warm site where flowers can open fully in bright light.",
      "Gazania is excellent for edging, pots, and low-water seasonal color."
    ],
    maintenance: [
      "Water regularly during establishment, then allow soil to dry somewhat between waterings.",
      "Avoid overly rich soil and constant moisture.",
      "Strong sun is essential for the best bloom display."
    ],
    pruning: [
      "Deadhead spent flowers to keep plants tidy and blooming.",
      "Trim leggy or tired growth lightly to refresh the mound.",
      "Remove any stems damaged by weather or rot."
    ],
    winterizing: [
      "Treat as an annual in colder climates unless your area is mild enough for overwintering.",
      "Keep winter soil on the dry side if plants remain outdoors.",
      "Protect from hard frost or grow in containers that can be sheltered."
    ]
  },
  {
    commonName: "Grapevine",
    slug: "grapevine",
    summary: "A fruiting vine that needs strong support, sun, and regular pruning to produce healthy growth and dependable harvests.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with excellent airflow.",
      "Provide a sturdy trellis, arbor, or wire system before vines begin active growth.",
      "Choose a site with room to train canes and manage annual pruning."
    ],
    maintenance: [
      "Water deeply during establishment and in prolonged dry periods.",
      "Feed according to soil fertility, but avoid pushing excessive leafy growth.",
      "Good airflow and sanitation are important for reducing disease pressure."
    ],
    pruning: [
      "Prune hard during dormancy to maintain structure and fruiting wood.",
      "Train young vines carefully to the support system you plan to use long term.",
      "Thin shoots and fruit clusters as needed for airflow and crop quality."
    ],
    winterizing: [
      "Mulch the root zone lightly in colder climates.",
      "Secure canes and support ties before winter storms.",
      "Prune out any winter-damaged wood before the new season starts."
    ]
  },
  {
    commonName: "Grevillea",
    slug: "grevillea",
    summary: "A showy evergreen shrub with unusual flowers and fine foliage, well suited to sunny mild-climate landscapes.",
    planting: [
      "Plant in full sun in sharply drained soil.",
      "Choose a site with room for airflow and avoid heavy wet clay unless drainage is improved.",
      "Grevillea works well as a specimen shrub or part of a dry-climate mixed border."
    ],
    maintenance: [
      "Water regularly during establishment, then sparingly once rooted.",
      "Avoid high-phosphorus fertilizers and rich heavy feeding.",
      "This plant usually performs best with sun, drainage, and moderate restraint."
    ],
    pruning: [
      "Prune lightly after flowering to shape and encourage bushier growth.",
      "Remove dead or awkward stems as needed.",
      "Avoid cutting hard into old leafless wood unless necessary."
    ],
    winterizing: [
      "Protect from hard frost in colder or marginal climates.",
      "Keep winter soil from staying waterlogged.",
      "Mulch lightly without piling heavy wet material around the base."
    ]
  },
  {
    commonName: "Hardy Geranium",
    slug: "hardy-geranium",
    summary: "A durable perennial with soft mounding foliage and easy flowers, useful for borders, edging, and light groundcover.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use average well-drained soil improved with a little compost.",
      "Hardy Geranium works well in front borders, cottage plantings, and weaving between shrubs."
    ],
    maintenance: [
      "Water regularly through the first season, then during longer dry stretches.",
      "Mulch lightly to conserve moisture and keep weeds down.",
      "This is generally an easy, forgiving perennial once established."
    ],
    pruning: [
      "Shear lightly after the main bloom to refresh foliage and encourage possible rebloom.",
      "Trim away damaged or sprawling stems as needed.",
      "Divide older clumps every few years if growth becomes crowded."
    ],
    winterizing: [
      "Apply a light winter mulch in colder regions after the soil cools.",
      "Leave some foliage for crown protection if desired, then clean it up in spring.",
      "Keep winter debris from matting heavily over the plant."
    ]
  },
  {
    commonName: "Kangaroo Paw",
    slug: "kangaroo-paw",
    summary: "A striking warm-climate perennial with fuzzy upright flowers, prized for bold color and architectural form.",
    planting: [
      "Plant in full sun in sharply drained soil.",
      "Choose a site with excellent airflow and avoid heavy wet ground.",
      "Kangaroo Paw works well in dry borders, modern landscapes, and cut-flower gardens."
    ],
    maintenance: [
      "Water regularly during establishment, then moderately with good drying between waterings.",
      "Avoid overfeeding and constantly damp soil, which can reduce vigor.",
      "Strong sun and drainage are key to the best flowering and foliage health."
    ],
    pruning: [
      "Remove spent flower stalks at the base after bloom.",
      "Trim away dead or damaged foliage carefully to keep the clump tidy.",
      "Do not overcut healthy leaves, as they help fuel future flowering."
    ],
    winterizing: [
      "Protect from hard frost in colder climates or grow in containers that can be sheltered.",
      "Keep winter moisture from building up around the crown.",
      "Mulch lightly only if needed, and avoid burying the base in wet organic matter."
    ]
  },
  {
    commonName: "Lobularia White",
    slug: "lobularia-white",
    summary: "A sweetly fragrant white bloomer that carpets borders and containers with soft, airy flowers through cool to mild weather.",
    planting: [
      "Plant in full sun to part shade after frost or in cool-season conditions.",
      "Use fertile, well-drained soil or a quality container mix.",
      "Lobularia White is excellent for edging, baskets, and spilling over walls or pots."
    ],
    maintenance: [
      "Keep soil evenly moist, especially in containers and warm weather.",
      "Feed lightly during long bloom periods if growth slows.",
      "This plant often performs best when temperatures are mild rather than intensely hot."
    ],
    pruning: [
      "Shear lightly after a bloom flush to encourage fresh growth and renewed flowering.",
      "Remove tired or browned stems to keep the mound clean.",
      "Pinch lightly if you want a denser shape early in the season."
    ],
    winterizing: [
      "Treat as an annual in colder climates, though it may handle light frost.",
      "Protect with light cover if trying to extend flowering into cooler weather.",
      "Remove spent plants after hard freezes or when seasonal decline is complete."
    ]
  },
  {
    commonName: "Lomandra",
    slug: "lomandra",
    summary: "A tough strappy evergreen grass-like plant valued for drought tolerance, tidy clumps, and landscape reliability.",
    planting: [
      "Plant in full sun to part shade in well-drained soil.",
      "Use it in borders, mass plantings, and modern low-maintenance landscapes.",
      "Allow room for the clump to mature without crowding neighboring plants."
    ],
    maintenance: [
      "Water regularly through the first season, then only occasionally during long dry periods.",
      "This plant generally needs very little feeding once established.",
      "Lomandra handles heat, wind, and leaner conditions well."
    ],
    pruning: [
      "Remove damaged or winter-burned leaves as needed.",
      "Cut back the whole clump lightly only if it becomes overly ragged.",
      "Comb or trim out dead foliage rather than scalping healthy growth."
    ],
    winterizing: [
      "Established clumps usually need little winter care.",
      "Mulch lightly around new plantings in colder fringe zones.",
      "Keep the crown from sitting in heavy wet debris through winter."
    ]
  },
  {
    commonName: "Myrtle",
    slug: "myrtle",
    summary: "A fragrant evergreen shrub with small leaves and neat structure, useful for hedging, containers, and Mediterranean-style planting.",
    planting: [
      "Plant in full sun in well-drained soil.",
      "Choose a warm sheltered site if winter cold is a concern.",
      "Myrtle works well in clipped forms, fragrant borders, and patio containers."
    ],
    maintenance: [
      "Water regularly during establishment, then moderately during dry periods.",
      "Avoid waterlogged conditions, especially in cool weather.",
      "Feed lightly in spring if the plant needs a bit more vigor."
    ],
    pruning: [
      "Prune after flowering or during the growing season to shape.",
      "Clip lightly if you want a formal outline, or thin selectively for a natural habit.",
      "Remove any dead or crossing branches as needed."
    ],
    winterizing: [
      "Protect from severe frost in borderline climates.",
      "Mulch the root zone lightly before winter.",
      "Container-grown plants may need shelter or a protected wall location in colder weather."
    ]
  },
  {
    commonName: "Oxalis",
    slug: "oxalis",
    summary: "A compact shamrock-like plant with colorful foliage and delicate flowers, suitable for containers, indoors, or mild gardens.",
    planting: [
      "Plant in bright indirect light or part sun, depending on whether it is grown indoors or outdoors.",
      "Use a well-drained potting mix or garden soil with added organic matter.",
      "Oxalis works well in small pots, edging, and seasonal accent plantings."
    ],
    maintenance: [
      "Keep soil lightly and evenly moist during active growth.",
      "Allow the plant some rest if it naturally goes dormant and slows down.",
      "Feed lightly during active growing periods for steady foliage and bloom."
    ],
    pruning: [
      "Remove faded flowers and worn leaves to keep the plant neat.",
      "Cut back spent top growth if the plant enters dormancy.",
      "Divide bulbs or clumps when repotting if you want more plants."
    ],
    winterizing: [
      "Protect outdoor plants from hard frost unless grown in a mild climate.",
      "Indoor plants may rest in winter; reduce watering if foliage dies back.",
      "Resume normal care once fresh growth returns."
    ]
  },
  {
    commonName: "Periwinkle Catharanthus",
    slug: "periwinkle-catharanthus",
    summary: "A heat-loving annual with glossy foliage and nonstop flowers, ideal for sunny beds, containers, and warm climates.",
    planting: [
      "Plant after frost in full sun to part sun once nights are warm.",
      "Use well-drained soil and avoid cool, soggy planting conditions.",
      "Periwinkle Catharanthus works especially well in hot borders and patio containers."
    ],
    maintenance: [
      "Water regularly during establishment, then allow slight drying between waterings.",
      "Avoid overwatering, which can cause root issues and weaken the plant.",
      "This plant typically blooms steadily with warmth and only light feeding."
    ],
    pruning: [
      "Pinch lightly when young if you want fuller branching.",
      "Remove damaged stems and tidy the plant as needed.",
      "Most varieties stay clean without much deadheading."
    ],
    winterizing: [
      "Treat as an annual in climates with frost.",
      "Protect container plants from cold if you want to extend the display briefly.",
      "Remove plants once hard cold ends the season."
    ]
  },
  {
    commonName: "Persicaria",
    slug: "persicaria",
    summary: "A vigorous perennial with long bloom power and lush foliage, useful for bold borders and moisture-retentive planting areas.",
    planting: [
      "Plant in spring or early fall in full sun to part shade.",
      "Use moisture-retentive but well-drained soil enriched with compost.",
      "Persicaria works well in naturalistic borders, alongside grasses, and near rain-garden edges."
    ],
    maintenance: [
      "Keep soil evenly moist, especially while the plant is establishing.",
      "Mulch to hold moisture and reduce weed competition.",
      "Monitor spread, as some forms can become quite assertive in rich conditions."
    ],
    pruning: [
      "Deadhead if you want a tidier look, though many gardeners leave the bloom spikes in place.",
      "Trim or divide clumps if they outgrow the available space.",
      "Cut stems down in late fall or early spring."
    ],
    winterizing: [
      "Established plants generally need little winter care.",
      "Mulch younger clumps lightly in colder zones.",
      "Remove old stems as new growth begins in spring."
    ]
  },
  {
    commonName: "Plectranthus",
    slug: "plectranthus",
    summary: "A foliage-focused tender plant often used in containers and shade displays for texture, spill, and easy growth.",
    planting: [
      "Plant after frost in part shade to bright filtered light.",
      "Use rich, well-drained soil or a quality container mix.",
      "Plectranthus is excellent in mixed pots, window boxes, and bright indoor settings."
    ],
    maintenance: [
      "Keep soil evenly moist but not soggy during active growth.",
      "Pinch often for a fuller habit and better branching.",
      "Feed lightly during the season to support lush foliage."
    ],
    pruning: [
      "Pinch and trim regularly to control size and encourage density.",
      "Remove leggy or damaged stems to refresh the plant.",
      "Use cuttings easily if you want to propagate backups."
    ],
    winterizing: [
      "Bring container plants indoors before frost if you want to save them.",
      "Keep in bright light and reduce watering slightly through winter.",
      "Protect from cold drafts and very low indoor humidity."
    ]
  },
  {
    commonName: "Saxifraga",
    slug: "saxifraga",
    summary: "A compact alpine-style perennial with neat foliage and delicate flowers, ideal for cool rock gardens and troughs.",
    planting: [
      "Plant in spring in part sun or gentle sun depending on climate.",
      "Use sharply drained soil with grit or fine gravel mixed in.",
      "Saxifraga is best in rock gardens, crevice plantings, and cool trough displays."
    ],
    maintenance: [
      "Keep moisture even but never waterlog the crown.",
      "Protect from intense reflected heat and harsh afternoon sun in warmer regions.",
      "This plant prefers cooler conditions and careful drainage."
    ],
    pruning: [
      "Remove spent flower stems after blooming.",
      "Trim away browned or damaged leaves to keep the cushion tidy.",
      "Divide or refresh older clumps if the center begins to thin."
    ],
    winterizing: [
      "Use a very light mulch or gravel top dressing rather than dense organic cover.",
      "Protect from winter wet more than from cold itself.",
      "Keep debris from collecting heavily over the crown."
    ]
  },
  {
    commonName: "Scented Geranium",
    slug: "scented-geranium",
    summary: "A fragrant foliage plant grown for aromatic leaves and soft flowers, perfect for pots, patios, and herb-style displays.",
    planting: [
      "Plant after frost in full sun to part sun in well-drained soil or container mix.",
      "Choose a warm site where brushing past the foliage will release the fragrance.",
      "Scented Geranium performs especially well in containers and raised herb gardens."
    ],
    maintenance: [
      "Water regularly while establishing, then let the soil dry slightly between waterings.",
      "Avoid overly rich feeding, which can reduce fragrance and make growth too soft.",
      "Provide strong light to keep the plant compact and aromatic."
    ],
    pruning: [
      "Pinch tips often to encourage branching and a fuller mound.",
      "Trim leggy stems back through the season as needed.",
      "Harvest fragrant foliage lightly without stripping the plant too hard."
    ],
    winterizing: [
      "Bring container plants indoors before frost if you want to keep them.",
      "Place in bright light and reduce watering slightly over winter.",
      "Protect from cold drafts and very low humidity indoors."
    ]
  },
  {
    commonName: "Senna",
    slug: "senna",
    summary: "A sun-loving shrub with cheerful yellow flowers, valued for heat tolerance and late-season color in warm gardens.",
    planting: [
      "Plant in spring in full sun in well-drained soil.",
      "Choose a warm site with room for open branching and seasonal growth.",
      "Senna works well in dry-climate borders and pollinator-friendly shrub plantings."
    ],
    maintenance: [
      "Water regularly during establishment, then only during prolonged drought.",
      "Avoid excessive fertilizer, as leaner conditions often support a better habit.",
      "This shrub performs best with heat, sun, and drainage."
    ],
    pruning: [
      "Prune in late winter or early spring to shape and remove weak wood.",
      "Trim lightly after flowering if you want a tidier outline.",
      "Remove cold-damaged stems once new growth makes recovery clear."
    ],
    winterizing: [
      "Protect from hard frost in colder fringe climates.",
      "Mulch the root zone lightly before winter.",
      "Expect some dieback in marginal areas and prune back to live wood in spring."
    ]
  },
  {
    commonName: "Verbena White",
    slug: "verbena-white",
    summary: "A bright white-flowering verbena that adds airy bloom, pollinator value, and long-season color to sunny beds and containers.",
    planting: [
      "Plant after frost in full sun in well-drained soil.",
      "Choose a site with good airflow so foliage stays cleaner in warm weather.",
      "Verbena White is great for containers, mixed borders, and cascading over edges."
    ],
    maintenance: [
      "Water regularly through establishment, then let the soil dry slightly between waterings.",
      "Feed lightly if container plants need help sustaining bloom.",
      "Warmth and sunlight are key to steady flowering."
    ],
    pruning: [
      "Deadhead or shear lightly after bloom flushes to encourage fresh flowering.",
      "Trim leggy stems during summer if the plant gets loose.",
      "Remove any damaged or mildew-prone growth promptly."
    ],
    winterizing: [
      "Treat as an annual in colder climates unless the variety is hardy for your zone.",
      "Protect from early frost if you want to stretch the display.",
      "Remove spent plants after hard cold ends the season."
    ]
  },
  {
    commonName: "Apple Honeycrisp",
    slug: "apple-honeycrisp",
    summary: "A popular apple tree known for crisp sweet fruit, needing sun, pruning, and steady care for the best harvests.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with good airflow.",
      "Choose a site with space for the tree's mature spread and access for pruning.",
      "A nearby compatible pollinator apple variety will improve fruit set."
    ],
    maintenance: [
      "Water deeply during establishment and during extended dry periods.",
      "Feed in spring according to soil fertility and tree vigor.",
      "Thin developing fruit to improve size, quality, and branch health."
    ],
    pruning: [
      "Prune annually in late winter to maintain an open, balanced framework.",
      "Remove dead, crossing, or inward-growing branches to improve light and airflow.",
      "Summer touch-up pruning can help control vigorous upright shoots."
    ],
    winterizing: [
      "Mulch around the root zone while keeping material away from the trunk.",
      "Protect the trunk from winter sunscald and animal damage if needed.",
      "Clean up fallen leaves and fruit to reduce disease carryover."
    ]
  },
  {
    commonName: "Apple Fuji",
    slug: "apple-fuji",
    summary: "A reliable apple tree that produces sweet crisp fruit and benefits from full sun, annual pruning, and thinning.",
    planting: [
      "Plant in full sun in rich, well-drained soil with plenty of air movement.",
      "Choose a site with enough room for training and harvest access.",
      "Plant near a compatible pollinator apple variety for better fruiting."
    ],
    maintenance: [
      "Keep the tree watered deeply during establishment and drought.",
      "Feed in spring if the tree needs more vigor, but avoid overfeeding.",
      "Thin fruit after set so remaining apples grow larger and branches stay less stressed."
    ],
    pruning: [
      "Prune in late winter to maintain a strong open structure and good fruiting wood.",
      "Remove dead or crowded branches to improve light penetration.",
      "Trim excessive watersprouts during the growing season if needed."
    ],
    winterizing: [
      "Mulch lightly around the root area but keep it off the trunk.",
      "Protect the lower trunk from animal browsing and winter injury.",
      "Clear diseased fruit and leaves from the ground before winter fully sets in."
    ]
  },
  {
    commonName: "Apple Gala",
    slug: "apple-gala",
    summary: "A productive dessert apple tree that responds well to good sun, annual shaping, and regular fruit thinning.",
    planting: [
      "Plant in full sun in fertile, well-drained soil.",
      "Choose an open site with airflow and room to manage the tree over time.",
      "Include a compatible pollinator apple nearby to improve bloom and crop."
    ],
    maintenance: [
      "Water deeply during establishment and while fruit is sizing in dry weather.",
      "Feed modestly in spring based on soil fertility and tree performance.",
      "Thin fruit after set for better size and more consistent annual cropping."
    ],
    pruning: [
      "Prune in late winter to maintain structure, remove crowding, and improve light to fruiting wood.",
      "Remove damaged, rubbing, or inward-growing branches.",
      "Summer pruning can help manage vigorous upright shoots."
    ],
    winterizing: [
      "Mulch around the roots in colder areas while keeping the trunk clear.",
      "Protect bark from rodents and winter sun damage if needed.",
      "Sanitize fallen fruit and leaves to reduce disease and pest carryover."
    ]
  },
  {
    commonName: "Apple Granny Smith",
    slug: "apple-granny-smith",
    summary: "A tart green apple tree that performs best with sun, airflow, pollination support, and regular orchard-style care.",
    planting: [
      "Plant in full sun in well-drained fertile soil.",
      "Choose a site with enough room for canopy development and easy access for pruning.",
      "Use a compatible pollinator nearby for stronger fruit set."
    ],
    maintenance: [
      "Water deeply while the tree establishes and during drought or fruit swell.",
      "Feed in spring only as needed based on vigor and soil condition.",
      "Thin fruit to prevent overcrowding and improve final quality."
    ],
    pruning: [
      "Prune in late winter to maintain a balanced shape and productive fruiting framework.",
      "Remove crowded interior branches and any damaged wood.",
      "Manage watersprouts and overly vigorous upright growth through selective pruning."
    ],
    winterizing: [
      "Mulch the root zone lightly, keeping material off the trunk flare.",
      "Protect trunks from winter injury and animal chewing where needed.",
      "Clean up old fruit and leaf litter before spring disease cycles begin."
    ]
  },
  {
    commonName: "Apple McIntosh",
    slug: "apple-mcintosh",
    summary: "A classic apple tree with early-season fruit, thriving with sun, pruning, pollination, and steady orchard care.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with good airflow.",
      "Allow enough room for canopy spread and annual pruning access.",
      "Grow with a compatible pollinator tree nearby for dependable fruit set."
    ],
    maintenance: [
      "Water deeply during establishment and whenever dry weather stresses the tree.",
      "Feed in spring based on soil fertility and the tree's growth habits.",
      "Thin fruit after set to improve size and reduce branch strain."
    ],
    pruning: [
      "Prune yearly in late winter to maintain shape and encourage quality fruiting wood.",
      "Remove weak, dead, crossing, or overly dense branches.",
      "Touch up vigorous summer growth if it shades interior fruit excessively."
    ],
    winterizing: [
      "Mulch around the root zone while keeping the trunk base clear.",
      "Protect the trunk from sunscald and chewing animals in winter.",
      "Clear leaves and dropped fruit to reduce disease carryover into spring."
    ]
  },
  {
    commonName: "Pear Bartlett",
    slug: "pear-bartlett",
    summary: "A classic pear tree producing sweet fruit, best grown in full sun with good pruning, pollination, and airflow.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with open air movement.",
      "Choose a site with room for tree structure and future harvest access.",
      "Include a compatible pear pollinator nearby if required for better fruit production."
    ],
    maintenance: [
      "Water deeply during establishment and in prolonged dry periods.",
      "Feed lightly in spring based on tree vigor and soil fertility.",
      "Thin fruit if branches are overloaded to improve quality and reduce breakage."
    ],
    pruning: [
      "Prune in late winter to build a strong scaffold structure and reduce crowding.",
      "Remove watersprouts, crossing branches, and damaged wood.",
      "Keep the canopy open enough for light and airflow to reach fruiting areas."
    ],
    winterizing: [
      "Mulch around the root zone while keeping mulch away from the trunk.",
      "Protect bark from winter injury and animal damage if needed.",
      "Remove fallen fruit and leaves to limit disease and pest overwintering."
    ]
  },
  {
    commonName: "Pear Bosc",
    slug: "pear-bosc",
    summary: "A richly flavored pear tree that benefits from sun, structure pruning, and consistent care for healthy fruit production.",
    planting: [
      "Plant in full sun in well-drained fertile soil.",
      "Choose a site with room for training and a nearby compatible pollinator if needed.",
      "Good airflow helps reduce disease pressure and supports cleaner fruit."
    ],
    maintenance: [
      "Water deeply while establishing and during dry weather.",
      "Feed modestly in spring if the tree needs more vigor.",
      "Thin fruit when necessary so branches are not overloaded."
    ],
    pruning: [
      "Prune in late winter to maintain a strong branch framework and balanced canopy.",
      "Remove upright watersprouts, crowded wood, and any damaged branches.",
      "Shape thoughtfully so sunlight can reach fruiting spurs."
    ],
    winterizing: [
      "Mulch the root area lightly in colder regions.",
      "Protect the trunk from animal damage and winter sun injury.",
      "Clean up leaf and fruit drop before winter settles in fully."
    ]
  },
  {
    commonName: "Pear Anjou",
    slug: "pear-anjou",
    summary: "A dependable pear tree producing smooth sweet fruit, best grown with full sun, pollination support, and regular pruning.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with good air movement.",
      "Choose a site with room for a well-shaped canopy and easy harvest access.",
      "Use a compatible pear pollinator nearby if needed for better fruit set."
    ],
    maintenance: [
      "Water deeply during establishment and through long dry stretches.",
      "Feed lightly in spring based on tree vigor and soil fertility.",
      "Thin heavy fruit set so branches are not overloaded and fruit develops better size."
    ],
    pruning: [
      "Prune in late winter to maintain a balanced framework and open the canopy.",
      "Remove watersprouts, damaged branches, and inward-growing wood.",
      "Shape the tree so sunlight and airflow can reach fruiting spurs."
    ],
    winterizing: [
      "Mulch around the root zone while keeping material away from the trunk.",
      "Protect bark from winter injury and animal damage where needed.",
      "Remove fallen leaves and fruit to reduce overwintering pests and disease."
    ]
  },
  {
    commonName: "Peach Elberta",
    slug: "peach-elberta",
    summary: "A classic peach tree valued for large sweet fruit, thriving with full sun, good airflow, and annual orchard care.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with strong air circulation.",
      "Choose a site away from frost pockets if possible because flowers can be sensitive to late cold.",
      "Allow enough room for an open-centered canopy and easy pruning access."
    ],
    maintenance: [
      "Water deeply during establishment and when fruit is swelling in dry weather.",
      "Feed in spring according to the tree's vigor and local soil conditions.",
      "Thin fruit after set to improve size and reduce branch stress."
    ],
    pruning: [
      "Prune in late winter or very early spring to maintain an open-center form.",
      "Remove dead, crowded, crossing, and inward-growing branches.",
      "Use light summer touch-up pruning if airflow and light need improvement."
    ],
    winterizing: [
      "Mulch the root zone lightly while keeping the trunk base clear.",
      "Protect the trunk from sunscald and animal browsing if needed in colder climates.",
      "Clean up dropped fruit and leaves to reduce disease pressure."
    ]
  },
  {
    commonName: "Peach Redhaven",
    slug: "peach-redhaven",
    summary: "A reliable peach tree known for quality fruit and strong orchard performance when given sun, pruning, and steady care.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with open airflow.",
      "Choose a site where spring bloom is less exposed to late frost if possible.",
      "Give the tree room for an open canopy and easy harvesting."
    ],
    maintenance: [
      "Water deeply during dry weather, especially while fruit is developing.",
      "Feed in spring based on the tree's vigor and soil fertility.",
      "Thin fruit after set so remaining peaches size up well and branches stay stronger."
    ],
    pruning: [
      "Prune yearly in late winter to maintain an open-center structure.",
      "Remove dead, crossing, damaged, and inward-growing branches.",
      "Summer touch-up pruning can help sunlight reach fruiting wood."
    ],
    winterizing: [
      "Mulch around the roots but keep mulch away from the trunk flare.",
      "Protect bark from winter injury and animals where necessary.",
      "Remove fallen fruit and diseased leaves before winter fully sets in."
    ]
  },
  {
    commonName: "Plum Santa Rosa",
    slug: "plum-santa-rosa",
    summary: "A productive plum tree with richly flavored fruit, benefiting from sun, pruning, and good orchard sanitation.",
    planting: [
      "Plant in full sun in well-drained fertile soil with good airflow.",
      "Choose a site with space for canopy development and routine maintenance access.",
      "Consider pollination needs based on local fruiting conditions and nearby plum varieties."
    ],
    maintenance: [
      "Water deeply during establishment and when dry weather affects fruiting.",
      "Feed moderately in spring if the tree needs more vigor.",
      "Thin heavy fruit set to improve fruit size and reduce limb stress."
    ],
    pruning: [
      "Prune in late winter or early spring to maintain structure and light penetration.",
      "Remove weak, crossing, or damaged branches as part of annual shaping.",
      "Keep the canopy open enough for airflow and ripening."
    ],
    winterizing: [
      "Mulch around the root zone while keeping the trunk clear.",
      "Protect the lower trunk from winter injury and animal damage if needed.",
      "Clean up fallen fruit and leaves to reduce overwintering problems."
    ]
  },
  {
    commonName: "Italian Prune Plum",
    slug: "italian-prune-plum",
    summary: "A prune-type plum tree valued for sweet firm fruit, best grown with sun, airflow, and annual pruning.",
    planting: [
      "Plant in full sun in fertile, well-drained soil.",
      "Choose a location with space for canopy shape and good light penetration.",
      "Ensure pollination needs are met if your local conditions or variety require a partner."
    ],
    maintenance: [
      "Water deeply during establishment and in extended summer drought.",
      "Feed in spring as needed based on growth and soil condition.",
      "Thin fruit if branches become overloaded to improve quality and reduce breakage."
    ],
    pruning: [
      "Prune during dormancy to build a balanced, open framework.",
      "Remove crowded, damaged, and inward-growing wood.",
      "Shape the tree to keep fruiting wood exposed to sunlight."
    ],
    winterizing: [
      "Mulch lightly around the roots while keeping the trunk base free.",
      "Protect the bark from rodents and winter sun injury where needed.",
      "Clear leaf and fruit drop before spring disease cycles begin."
    ]
  },
  {
    commonName: "Cherry Bing",
    slug: "cherry-bing",
    summary: "A sweet cherry tree that performs best with full sun, excellent drainage, careful pruning, and compatible pollination.",
    planting: [
      "Plant in full sun in well-drained fertile soil with very good airflow.",
      "Choose a site with room for canopy development and easy netting or harvest access if needed.",
      "Use a compatible pollinator nearby unless local setup already supports fruiting."
    ],
    maintenance: [
      "Water deeply during establishment and in dry weather, especially during fruit sizing.",
      "Feed moderately in spring based on soil fertility and tree growth.",
      "Protect ripening fruit from birds if they are a problem in your area."
    ],
    pruning: [
      "Prune carefully in late winter or after harvest according to local disease pressure guidance.",
      "Remove crowded, damaged, or crossing branches to keep the canopy open.",
      "Avoid excessive cuts that stimulate too much weak upright growth."
    ],
    winterizing: [
      "Mulch around the root zone while keeping mulch off the trunk.",
      "Protect young trunks from winter sun injury and animal damage.",
      "Clean up dropped fruit and leaves to reduce pests and disease."
    ]
  },
  {
    commonName: "Cherry Rainier",
    slug: "cherry-rainier",
    summary: "A premium sweet cherry tree producing golden-red fruit, needing sun, drainage, and careful orchard-style management.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with strong airflow.",
      "Choose a site with space for canopy shape and easy fruit protection if birds are common.",
      "Use a compatible cherry pollinator nearby for the best fruit set."
    ],
    maintenance: [
      "Water deeply during establishment and in dry stretches while fruit develops.",
      "Feed lightly in spring according to the tree's vigor.",
      "Watch fruit closely as it ripens because birds are often attracted early."
    ],
    pruning: [
      "Prune selectively to maintain a balanced canopy and reduce crowding.",
      "Remove damaged, crossing, or shaded-out interior wood.",
      "Shape thoughtfully so light can reach fruiting branches without overstimulating weak growth."
    ],
    winterizing: [
      "Mulch around the roots while keeping the trunk base clear.",
      "Protect bark from winter sun injury and animals where needed.",
      "Remove fallen fruit and leaves before winter to reduce carryover issues."
    ]
  },
  {
    commonName: "Cherry Montmorency",
    slug: "cherry-montmorency",
    summary: "A tart cherry tree prized for baking and preserves, benefiting from sun, airflow, and annual structure pruning.",
    planting: [
      "Plant in full sun in well-drained fertile soil.",
      "Choose an open site where the canopy receives good airflow and light.",
      "Allow space for a broad productive crown and easy access for harvest and pruning."
    ],
    maintenance: [
      "Water regularly during establishment and during prolonged dry periods.",
      "Feed moderately in spring if the tree needs additional vigor.",
      "Tart cherries are often productive, so monitor crop load and branch stress."
    ],
    pruning: [
      "Prune during dormancy or according to local disease guidance to maintain a balanced canopy.",
      "Remove crowded, damaged, and inward-growing branches.",
      "Keep the canopy open enough for airflow and easier fruiting management."
    ],
    winterizing: [
      "Mulch lightly around the roots while keeping the trunk clear.",
      "Protect young bark from winter damage and animals where necessary.",
      "Clean up fallen leaves and fruit to reduce overwintering disease pressure."
    ]
  },
  {
    commonName: "Apricot Moorpark",
    slug: "apricot-moorpark",
    summary: "A classic apricot tree that needs full sun, good drainage, and careful siting because bloom can be vulnerable to late frost.",
    planting: [
      "Plant in full sun in well-drained fertile soil with good air circulation.",
      "Choose a site away from frost pockets if possible because apricot bloom is often early.",
      "Allow space for an open canopy and easy orchard maintenance."
    ],
    maintenance: [
      "Water deeply during establishment and in dry conditions while fruit is developing.",
      "Feed in spring according to growth and soil fertility.",
      "Thin fruit after set if the crop is especially heavy."
    ],
    pruning: [
      "Prune selectively to maintain structure and reduce crowding.",
      "Remove dead, damaged, and inward-growing branches as part of annual shaping.",
      "Keep enough openness in the canopy for sunlight and airflow."
    ],
    winterizing: [
      "Mulch the root zone lightly but keep mulch away from the trunk.",
      "Protect the trunk from winter injury and animal browsing where needed.",
      "Clean up dropped fruit and leaves to reduce disease and pest issues."
    ]
  },
  {
    commonName: "Nectarine Fantasia",
    slug: "nectarine-fantasia",
    summary: "A nectarine tree that rewards full sun, pruning, and regular fruit thinning with smooth-skinned summer harvests.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with strong air circulation.",
      "Choose a site with room for an open-centered canopy and easy orchard access.",
      "Avoid low frost pockets if possible because bloom can be damaged by late cold."
    ],
    maintenance: [
      "Water deeply during establishment and when fruit is swelling in dry weather.",
      "Feed in spring based on the tree's vigor and local soil condition.",
      "Thin fruit after set to improve size, sweetness, and branch health."
    ],
    pruning: [
      "Prune annually in late winter or early spring to maintain an open-center form.",
      "Remove crowded, damaged, and inward-growing wood.",
      "Use light summer pruning if the canopy becomes overly dense."
    ],
    winterizing: [
      "Mulch the root zone lightly while keeping material clear of the trunk.",
      "Protect the trunk from winter injury and animal damage where necessary.",
      "Remove fallen fruit and diseased leaves before spring returns."
    ]
  },
  {
    commonName: "Persimmon Fuyu",
    slug: "persimmon-fuyu",
    summary: "A non-astringent persimmon tree that produces sweet crisp fruit and brings ornamental value to sunny home orchards.",
    planting: [
      "Plant in full sun in well-drained fertile soil with room for a broad rounded canopy.",
      "Choose a warm site protected from the harshest wind, especially while the tree is young.",
      "Persimmon Fuyu works best where fruit can ripen fully in late season sun."
    ],
    maintenance: [
      "Water deeply during establishment and through long dry periods.",
      "Feed lightly in spring if growth is weak, but avoid pushing excessive soft growth.",
      "Thin heavy crops if branches begin to look overloaded."
    ],
    pruning: [
      "Prune in late winter to remove dead, crossing, or weak wood and to maintain structure.",
      "Shape young trees carefully so fruiting branches are well spaced and supported.",
      "Remove broken fruiting wood after harvest if needed."
    ],
    winterizing: [
      "Mulch the root zone lightly while keeping material away from the trunk.",
      "Protect young trunks from winter damage and animal browsing where needed.",
      "Clean up dropped fruit and leaves before winter to reduce carryover issues."
    ]
  },
  {
    commonName: "Pomegranate Wonderful",
    slug: "pomegranate-wonderful",
    summary: "A heat-loving fruiting shrub or small tree that thrives with sun, drainage, and long warm seasons.",
    planting: [
      "Plant in full sun in well-drained soil once the site has warmed well.",
      "Choose a hot open location with room for a broad shrub or trained small tree form.",
      "Pomegranate Wonderful performs especially well in dry summer climates."
    ],
    maintenance: [
      "Water regularly during establishment, then deeply but less often once rooted.",
      "Avoid overly rich feeding, which can make the plant leafy at the expense of fruit.",
      "This plant handles drought better once established than many fruit trees."
    ],
    pruning: [
      "Prune in late winter to shape, remove suckers, and maintain a clear framework.",
      "Thin crowded interior branches so light can reach ripening fruit.",
      "Decide early whether you want a multi-stem shrub or a more tree-like form."
    ],
    winterizing: [
      "Protect from hard freezes in colder fringe climates.",
      "Mulch lightly around the roots before winter.",
      "Cut back any cold-damaged wood once spring growth shows what survived."
    ]
  },
  {
    commonName: "Quince Pineapple",
    slug: "quince-pineapple",
    summary: "A fragrant quince tree that produces aromatic fruit and ornamental spring bloom with good sun and orchard-style care.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with good airflow.",
      "Choose a site with enough room for a small broad fruiting tree and easy harvest access.",
      "Quince Pineapple performs best where fruit can mature in warm late-season conditions."
    ],
    maintenance: [
      "Water deeply during establishment and through dry spells during fruit development.",
      "Feed modestly in spring if the tree needs more vigor.",
      "Keep the area under the tree free of dense weeds and competing grass."
    ],
    pruning: [
      "Prune in late winter to maintain a balanced open framework.",
      "Remove damaged, crossing, or crowded branches to improve light and airflow.",
      "Thin interior growth enough to support healthy fruiting wood."
    ],
    winterizing: [
      "Mulch lightly around the root zone while keeping the trunk base clear.",
      "Protect the trunk from animal damage if needed.",
      "Clean up fallen fruit and leaves before winter to reduce pest and disease carryover."
    ]
  },
  {
    commonName: "Mulberry Illinois Everbearing",
    slug: "mulberry-illinois-everbearing",
    summary: "A productive mulberry tree that offers an extended fruiting season and strong adaptability in sunny sites.",
    planting: [
      "Plant in full sun in well-drained soil with space for a generously sized tree.",
      "Choose a site away from paving or seating areas if fruit drop could be messy.",
      "Illinois Everbearing benefits from open airflow and room to spread naturally."
    ],
    maintenance: [
      "Water deeply during establishment and during extended drought.",
      "Feed lightly only if the tree shows weak growth; overfeeding is rarely helpful.",
      "Mulch the root zone to conserve moisture and suppress weeds."
    ],
    pruning: [
      "Prune in late winter to remove dead, damaged, or poorly placed branches.",
      "Train young trees for strong scaffold structure and clearance where needed.",
      "Avoid excessive pruning that stimulates too much rank regrowth."
    ],
    winterizing: [
      "Established trees generally need little winter care.",
      "Protect young trunks from animal damage if necessary.",
      "Clean up fruit residue if you want to keep the area tidier into winter."
    ]
  },
  {
    commonName: "Gooseberry Hinnonmaki Red",
    slug: "gooseberry-hinnonmaki-red",
    summary: "A compact fruiting shrub with tart-sweet berries, best grown in cool sun or light shade with steady moisture.",
    planting: [
      "Plant in full sun to part shade, especially where summers are warm.",
      "Use fertile, well-drained soil enriched with compost.",
      "Allow room for airflow and easy harvest around the thorny branching habit."
    ],
    maintenance: [
      "Keep soil evenly moist, especially during berry development.",
      "Mulch around the roots to conserve moisture and keep weeds down.",
      "Feed lightly in spring with compost or a berry-friendly fertilizer."
    ],
    pruning: [
      "Prune in late winter to remove older unproductive canes and open the center.",
      "Keep a mix of younger and older stems for steady fruiting.",
      "Wear gloves if the shrub is especially thorny."
    ],
    winterizing: [
      "Mulch lightly around the root zone in colder climates.",
      "Protect young shrubs from severe animal browsing if needed.",
      "Clean up fallen fruit and leaves at season's end."
    ]
  },
  {
    commonName: "Currant Red Lake",
    slug: "currant-red-lake",
    summary: "A red currant shrub that produces attractive hanging clusters of fruit in cool sunny or lightly shaded gardens.",
    planting: [
      "Plant in full sun to part shade in fertile, moisture-retentive, well-drained soil.",
      "Choose a site with good airflow but some relief from harsh late-day heat in warm climates.",
      "Space shrubs well so fruiting wood can be managed and harvested easily."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment and fruiting.",
      "Mulch generously enough to hold moisture and keep roots cool.",
      "Feed lightly in spring with compost or balanced berry fertilizer."
    ],
    pruning: [
      "Prune in late winter to remove older wood and preserve productive younger stems.",
      "Thin crowded growth so light reaches the interior of the shrub.",
      "Remove weak, damaged, or low rubbing branches."
    ],
    winterizing: [
      "Currants are generally hardy and need little winter protection once established.",
      "Mulch lightly around young shrubs in colder sites.",
      "Clean up leaf drop and any old fruit residue at season's end."
    ]
  },
  {
    commonName: "Currant Consort",
    slug: "currant-consort",
    summary: "A black currant shrub grown for flavorful dark berries and strong productivity in cooler garden conditions.",
    planting: [
      "Plant in full sun to part shade in fertile, well-drained soil with good moisture retention.",
      "Choose a site with good air movement and enough room for annual pruning access.",
      "Black currants often perform especially well in cooler climates and moderate summer conditions."
    ],
    maintenance: [
      "Keep soil evenly moist, especially during establishment and fruit swelling.",
      "Mulch around the shrub to conserve moisture and suppress weeds.",
      "Feed with compost or a light berry fertilizer in spring if needed."
    ],
    pruning: [
      "Prune in late winter to remove older stems and encourage strong new fruiting shoots.",
      "Open the center enough for airflow and easier picking.",
      "Remove damaged or weak growth every year."
    ],
    winterizing: [
      "Established shrubs are usually very winter hardy.",
      "Mulch lightly around the roots of newer plants before winter.",
      "Clean up fallen leaves and leftover fruit after harvest season."
    ]
  },
  {
    commonName: "Jostaberry",
    slug: "jostaberry",
    summary: "A vigorous berry shrub combining traits of gooseberries and currants, valued for productivity and thornless ease.",
    planting: [
      "Plant in full sun to part shade in fertile, well-drained soil with added compost.",
      "Give the shrub enough room to widen and support easy harvest access.",
      "Jostaberry fits well in home berry patches and edible hedging."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment and fruiting periods.",
      "Mulch around the base to conserve moisture and reduce weeds.",
      "Feed lightly in spring if the shrub needs extra vigor."
    ],
    pruning: [
      "Prune in late winter to remove weak or older wood and maintain an open productive framework.",
      "Thin crowded stems so light reaches the center of the plant.",
      "Renew a few older stems over time to keep fruiting strong."
    ],
    winterizing: [
      "Jostaberry is generally winter hardy once established.",
      "Mulch around young shrubs for added root protection in colder climates.",
      "Clean up dropped leaves and leftover fruit after the season."
    ]
  },
  {
    commonName: "Boysenberry",
    slug: "boysenberry",
    summary: "A trailing berry cane that produces richly flavored fruit and benefits from support, pruning, and steady moisture.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with room for trellising.",
      "Set up support wires or a trellis before canes begin vigorous growth.",
      "Space plants generously so canes can be trained and harvested cleanly."
    ],
    maintenance: [
      "Water regularly during establishment and throughout fruit production.",
      "Mulch around the row to hold moisture and suppress weeds.",
      "Feed in spring with compost or a balanced berry fertilizer."
    ],
    pruning: [
      "Remove fruited canes after harvest because they will not crop again.",
      "Tie in the new season's canes to the support system as they grow.",
      "Thin excess new canes so the planting stays open and manageable."
    ],
    winterizing: [
      "Mulch roots lightly in colder climates for added protection.",
      "Secure canes to supports before winter storms.",
      "Prune out winter-damaged cane sections in late winter or early spring."
    ]
  },
  {
    commonName: "Loganberry",
    slug: "loganberry",
    summary: "A vigorous berry hybrid with trailing canes, needing trellis support, pruning, and regular watering for strong crops.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with space for long canes.",
      "Provide trellising or wire support from the start.",
      "Loganberry performs best where air can move freely through the planting."
    ],
    maintenance: [
      "Water deeply and consistently, especially during establishment and fruiting.",
      "Mulch around the root zone to conserve moisture and suppress weeds.",
      "Feed with compost or a balanced berry fertilizer in spring."
    ],
    pruning: [
      "Cut out fruited canes after harvest and tie in new replacement canes.",
      "Thin excess new growth so the plant stays productive and easier to manage.",
      "Shorten laterals as needed during dormant pruning."
    ],
    winterizing: [
      "Mulch around the roots in colder regions.",
      "Secure canes before winter wind or snow arrives.",
      "Remove any winter-damaged sections in late winter or early spring."
    ]
  },
  {
    commonName: "Tayberry",
    slug: "tayberry",
    summary: "A trailing berry cane with large flavorful fruit, best grown with trellising, pruning, and steady summer moisture.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with room for long canes.",
      "Install trellis or wire support before growth begins in earnest.",
      "Space plants generously so fruiting and replacement canes can be managed easily."
    ],
    maintenance: [
      "Water regularly during establishment and during flowering and fruiting.",
      "Mulch the row to conserve moisture and limit weeds.",
      "Feed in spring with compost or a balanced berry fertilizer if growth is weak."
    ],
    pruning: [
      "Remove canes that have fruited after harvest, as they will not produce again.",
      "Tie in the new season's canes and thin extras to keep the planting open.",
      "Shorten laterals as needed during dormant pruning."
    ],
    winterizing: [
      "Mulch roots lightly in colder regions for added protection.",
      "Secure canes to their support before winter wind or snow.",
      "Prune away winter-damaged sections in late winter or early spring."
    ]
  },
  {
    commonName: "Marionberry",
    slug: "marionberry",
    summary: "A vigorous trailing blackberry hybrid prized for rich flavor, thriving with support, sun, and regular cane management.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with ample room for trellising.",
      "Set up support wires or a trellis before canes begin active growth.",
      "Choose a site with good airflow for healthier foliage and easier harvest."
    ],
    maintenance: [
      "Water regularly during establishment and throughout fruit production.",
      "Mulch around the roots to hold moisture and suppress weeds.",
      "Feed in spring with compost or a berry fertilizer if needed."
    ],
    pruning: [
      "Cut out fruited canes after harvest and tie in new replacement canes.",
      "Thin excess new canes so the planting stays manageable and productive.",
      "Shorten laterals during dormant pruning to support good fruiting structure."
    ],
    winterizing: [
      "Mulch the root zone lightly in colder climates.",
      "Secure canes before winter storms and heavy wind.",
      "Remove any winter-damaged wood in late winter or spring."
    ]
  },
  {
    commonName: "Hardy Kiwi",
    slug: "hardy-kiwi",
    summary: "A vigorous fruiting vine that needs strong support, sun, and yearly pruning to produce smooth edible kiwi-like fruit.",
    planting: [
      "Plant in full sun to part sun in fertile, well-drained soil.",
      "Provide a very sturdy arbor, trellis, or wire system before planting.",
      "Allow generous room because hardy kiwi can grow vigorously once established."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment and fruit development.",
      "Mulch around the root zone to conserve moisture and protect shallow roots.",
      "Feed in spring if the vine needs a boost, but avoid overfeeding lush weak growth."
    ],
    pruning: [
      "Prune in late winter and again in summer to manage growth and maintain fruiting wood.",
      "Train permanent framework branches early so the vine stays structured.",
      "Remove tangled, damaged, or excess shoots regularly."
    ],
    winterizing: [
      "Mulch the roots lightly in colder climates.",
      "Protect young vines from severe winter cold until fully established.",
      "Secure permanent framework to supports before winter storms."
    ]
  },
  {
    commonName: "Kiwiberry Issai",
    slug: "kiwiberry-issai",
    summary: "A compact kiwiberry vine with smooth edible fruit, well suited to home gardens with strong support and careful pruning.",
    planting: [
      "Plant in full sun to part sun in fertile, well-drained soil.",
      "Provide a trellis, arbor, or support system capable of handling vigorous growth.",
      "Choose a site with enough room for training and summer pruning access."
    ],
    maintenance: [
      "Water deeply and regularly during establishment and fruiting.",
      "Mulch around the base to conserve moisture and reduce weed competition.",
      "Feed lightly in spring if growth needs support."
    ],
    pruning: [
      "Prune in winter to manage structure and preserve fruiting wood.",
      "Use summer pruning to control excess growth and improve light penetration.",
      "Remove damaged or tangled vines as needed."
    ],
    winterizing: [
      "Mulch roots in colder climates for extra protection.",
      "Protect young vines from severe freeze damage until well established.",
      "Check ties and supports before winter wind and snow arrive."
    ]
  },
  {
    commonName: "Passionfruit Purple",
    slug: "passionfruit-purple",
    summary: "A tropical to subtropical fruiting vine with dramatic flowers and edible fruit, thriving in warmth, sun, and rich soil.",
    planting: [
      "Plant in full sun in fertile, well-drained soil once weather is reliably warm.",
      "Provide sturdy support because the vine can grow and fruit vigorously.",
      "Choose a protected location if cold wind or frost is a risk."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment and fruiting.",
      "Feed during the growing season to support flowering and fruit set.",
      "Warmth, sunlight, and regular watering are key to strong performance."
    ],
    pruning: [
      "Prune after harvest or during the dormant season to manage size and shape.",
      "Remove weak, tangled, or damaged growth regularly.",
      "Thin crowded vines so light and airflow reach the fruiting areas."
    ],
    winterizing: [
      "Protect from frost or grow in containers that can be sheltered.",
      "Mulch roots lightly in cooler climates.",
      "Cut away any cold-damaged growth once warm weather returns."
    ]
  },
  {
    commonName: "Dragon Fruit",
    slug: "dragon-fruit",
    summary: "A climbing cactus grown for exotic fruit, requiring warmth, bright sun, sharp drainage, and strong support.",
    planting: [
      "Plant in full sun to bright light in a sharply drained cactus-friendly mix or fast-draining ground.",
      "Provide a sturdy support post or trellis because stems climb and branch heavily.",
      "Choose a warm site protected from prolonged cold and wet."
    ],
    maintenance: [
      "Water regularly during establishment, then allow the soil to dry somewhat between waterings.",
      "Feed during active growth with a light fruiting or cactus program.",
      "Avoid soggy roots and poor drainage at all times."
    ],
    pruning: [
      "Prune to control size, remove weak stems, and improve access to flowering branches.",
      "Thin crowded growth so light and airflow reach the center of the plant.",
      "Use clean cuts and allow wounds to dry properly."
    ],
    winterizing: [
      "Protect from frost and prolonged cold, especially in wetter climates.",
      "Move container plants to shelter if freezes are expected.",
      "Reduce watering in cool weather while keeping the plant in bright light."
    ]
  },
  {
    commonName: "Pineapple Guava",
    slug: "pineapple-guava",
    summary: "An evergreen shrub or small tree with edible fruit and attractive flowers, suited to sunny mild-climate gardens.",
    planting: [
      "Plant in full sun in well-drained soil with room for a broad shrub or small tree form.",
      "Choose a site with airflow and enough warmth for good flowering and fruiting.",
      "Pineapple Guava can be used as both an edible plant and an ornamental screen."
    ],
    maintenance: [
      "Water regularly through establishment, then deeply during extended dry periods.",
      "Mulch lightly around the roots to conserve moisture and suppress weeds.",
      "Feed modestly in spring if growth appears weak."
    ],
    pruning: [
      "Prune lightly after fruiting or flowering to shape and manage size.",
      "Remove damaged or crossing branches to keep a clean structure.",
      "Train early if you want a single-trunk tree form rather than a shrub."
    ],
    winterizing: [
      "Protect from severe frost in colder fringe climates.",
      "Mulch the root zone lightly before winter.",
      "Trim away any winter-damaged growth once spring growth begins."
    ]
  },
  {
    commonName: "Meyer Lemon",
    slug: "meyer-lemon",
    summary: "A popular citrus tree with fragrant flowers and sweet-tart fruit, thriving in sun, drainage, and warm sheltered conditions.",
    planting: [
      "Plant in full sun in sharply drained soil or a fast-draining citrus container mix.",
      "Choose a warm protected site or grow in a movable container in cooler climates.",
      "Allow enough space for canopy growth and easy harvest access."
    ],
    maintenance: [
      "Water deeply and consistently, letting the upper soil dry slightly between waterings.",
      "Feed regularly during the growing season with a citrus fertilizer.",
      "Keep an eye on leaf color and growth to adjust feeding and moisture."
    ],
    pruning: [
      "Prune lightly to shape and remove dead, damaged, or crossing branches.",
      "Remove suckers from below the graft if present.",
      "Avoid excessive pruning that reduces flowering and fruiting wood."
    ],
    winterizing: [
      "Protect from frost and freezing wind, especially in containers.",
      "Move potted trees indoors or to shelter during cold snaps.",
      "Keep winter light bright and reduce feeding while growth slows."
    ]
  },
  {
    commonName: "Eureka Lemon",
    slug: "eureka-lemon",
    summary: "A true lemon tree valued for abundant fruit, needing full sun, citrus feeding, and frost protection in cooler regions.",
    planting: [
      "Plant in full sun in sharply drained soil or citrus potting mix.",
      "Choose a warm site protected from severe cold and strong wind.",
      "Provide enough room for canopy development and routine harvest access."
    ],
    maintenance: [
      "Water deeply, allowing slight drying between waterings without letting the tree stay too dry for long.",
      "Feed regularly during the active growing season with a citrus-specific fertilizer.",
      "Monitor foliage for signs of nutrient stress or water imbalance."
    ],
    pruning: [
      "Prune lightly to remove damaged, crossing, or overly crowded branches.",
      "Remove any suckers below the graft as they appear.",
      "Shape gently without stripping away too much fruiting wood."
    ],
    winterizing: [
      "Protect from frost and prolonged cold temperatures.",
      "Bring container-grown trees to shelter in winter when freezes threaten.",
      "Maintain bright light and reduce feeding while winter growth slows."
    ]
  },
  {
    commonName: "Bearss Lime",
    slug: "bearss-lime",
    summary: "A vigorous lime tree producing juicy fruit, best grown with strong sun, fast drainage, and protection from frost.",
    planting: [
      "Plant in full sun in sharply drained soil or a citrus-friendly container mix.",
      "Choose a warm protected site or a container if winter cold is an issue.",
      "Allow enough space for a rounded citrus canopy and easy picking."
    ],
    maintenance: [
      "Water deeply and regularly, allowing slight drying between waterings.",
      "Feed through the growing season with a citrus fertilizer.",
      "Monitor for nutrient imbalance if leaves lose color or vigor slows."
    ],
    pruning: [
      "Prune lightly to remove dead, damaged, or crossing branches.",
      "Remove suckers and water sprouts when needed.",
      "Avoid aggressive pruning that reduces flowering and fruit set."
    ],
    winterizing: [
      "Protect the tree from frost and cold wind.",
      "Move container plants under cover during cold snaps.",
      "Keep winter light bright and scale back feeding during slower growth."
    ]
  },
  {
    commonName: "Key Lime",
    slug: "key-lime",
    summary: "A compact aromatic lime tree prized for tart fruit, best grown with heat, sun, sharp drainage, and frost protection.",
    planting: [
      "Plant in full sun in sharply drained soil or a citrus container mix.",
      "Choose a warm protected site or grow in a movable pot in cooler climates.",
      "Allow enough space for a rounded canopy and easy harvest access."
    ],
    maintenance: [
      "Water deeply and regularly, allowing the top layer of soil to dry slightly between waterings.",
      "Feed through the growing season with a citrus fertilizer.",
      "Watch leaf color and new growth to adjust moisture and feeding as needed."
    ],
    pruning: [
      "Prune lightly to remove damaged, crossing, or weak branches.",
      "Remove suckers below the graft if present.",
      "Avoid heavy pruning that reduces flowering and fruiting wood."
    ],
    winterizing: [
      "Protect from frost and cold wind, especially in containers.",
      "Move potted plants to shelter during freezes.",
      "Keep winter light bright and reduce feeding while growth slows."
    ]
  },
  {
    commonName: "Orange Valencia",
    slug: "orange-valencia",
    summary: "A classic sweet orange tree grown for juicy fruit, thriving with full sun, citrus feeding, and warm conditions.",
    planting: [
      "Plant in full sun in sharply drained soil or a citrus-friendly container mix.",
      "Choose a warm open site with protection from severe cold.",
      "Give the tree enough room for canopy growth and easy picking."
    ],
    maintenance: [
      "Water deeply and consistently, letting the upper soil dry slightly between waterings.",
      "Feed regularly through the growing season with a citrus fertilizer.",
      "Monitor for nutrient imbalance if foliage pales or growth slows."
    ],
    pruning: [
      "Prune lightly to remove dead, damaged, or crowded branches.",
      "Remove any suckers from below the graft union.",
      "Shape gently without stripping away too much fruiting wood."
    ],
    winterizing: [
      "Protect from frost and prolonged cold in marginal climates.",
      "Move container-grown trees under cover during freezes.",
      "Reduce feeding in winter and keep the tree in bright light."
    ]
  },
  {
    commonName: "Orange Cara Cara",
    slug: "orange-cara-cara",
    summary: "A sweet navel orange tree with richly colored flesh, best grown in sun, warmth, and fast-draining citrus conditions.",
    planting: [
      "Plant in full sun in sharply drained soil or a fast-draining citrus mix.",
      "Choose a warm site protected from hard freezes and cold wind.",
      "Allow space for a rounded canopy and steady seasonal growth."
    ],
    maintenance: [
      "Water deeply, allowing slight drying between waterings without prolonged dryness.",
      "Feed with a citrus fertilizer through the active growing season.",
      "Keep an eye on foliage color and fruit set to fine-tune care."
    ],
    pruning: [
      "Prune lightly to remove damaged, crossing, or shaded interior branches.",
      "Take out suckers below the graft if they appear.",
      "Avoid aggressive pruning that reduces bloom and fruit production."
    ],
    winterizing: [
      "Protect from frost and severe cold snaps.",
      "Move container plants to shelter in cold weather.",
      "Maintain bright winter light and reduce fertilizer while growth slows."
    ]
  },
  {
    commonName: "Mandarin Satsuma",
    slug: "mandarin-satsuma",
    summary: "A relatively cold-tolerant mandarin citrus known for easy-peeling fruit, well suited to sunny protected sites.",
    planting: [
      "Plant in full sun in sharply drained soil or a citrus container mix.",
      "Choose a warm site with some protection from winter wind.",
      "Satsumas work especially well in containers in cooler regions."
    ],
    maintenance: [
      "Water deeply and regularly, allowing slight drying between waterings.",
      "Feed during the growing season with a citrus-specific fertilizer.",
      "Keep the canopy healthy with good light and moderate consistent moisture."
    ],
    pruning: [
      "Prune lightly to remove dead, damaged, or poorly placed branches.",
      "Remove suckers from below the graft when necessary.",
      "Keep shaping minimal so flowering and fruiting wood remains intact."
    ],
    winterizing: [
      "Protect from severe freezes even though Satsuma is more cold tolerant than many citrus.",
      "Move container plants under cover during hard cold.",
      "Reduce feeding in winter and maintain bright light."
    ]
  },
  {
    commonName: "Tangerine Dancy",
    slug: "tangerine-dancy",
    summary: "A flavorful tangerine tree that thrives with sun, warmth, drainage, and steady citrus care.",
    planting: [
      "Plant in full sun in sharply drained soil or citrus potting mix.",
      "Choose a warm site protected from severe winter cold.",
      "Allow enough space for a rounded canopy and fruiting growth."
    ],
    maintenance: [
      "Water deeply and consistently, letting the top layer dry slightly between waterings.",
      "Feed through the growing season with a citrus fertilizer.",
      "Check foliage and fruit set to guide minor feeding and watering adjustments."
    ],
    pruning: [
      "Prune lightly to remove damaged or crowded branches.",
      "Remove suckers below the graft if they appear.",
      "Avoid hard pruning that reduces future flowering and fruiting."
    ],
    winterizing: [
      "Protect from frost and cold drying wind.",
      "Move container-grown plants to shelter when freezes threaten.",
      "Scale back feeding in winter while keeping the tree in bright light."
    ]
  },
  {
    commonName: "Grapefruit Ruby Red",
    slug: "grapefruit-ruby-red",
    summary: "A grapefruit tree with richly colored fruit, needing full sun, warmth, and regular citrus care for best production.",
    planting: [
      "Plant in full sun in sharply drained soil or a citrus container mix.",
      "Choose a warm site with room for a larger citrus canopy.",
      "Protect from hard freezes in climates at the edge of citrus growing range."
    ],
    maintenance: [
      "Water deeply and regularly, allowing slight drying between waterings.",
      "Feed during the growing season with a citrus fertilizer.",
      "Monitor leaf color and growth to adjust care before deficiencies become severe."
    ],
    pruning: [
      "Prune lightly to remove damaged, dead, or crowded branches.",
      "Take out suckers below the graft union if needed.",
      "Keep pruning minimal so fruiting wood and canopy balance are preserved."
    ],
    winterizing: [
      "Protect from frost and prolonged cold exposure.",
      "Move container plants under cover during cold snaps.",
      "Keep winter light bright and reduce fertilizer while the tree slows down."
    ]
  },
  {
    commonName: "Kumquat Nagami",
    slug: "kumquat-nagami",
    summary: "A compact citrus producing small tangy fruit, valued for ornamental appeal and container-friendly growth.",
    planting: [
      "Plant in full sun in sharply drained soil or a citrus potting mix.",
      "Choose a warm protected site or grow in a container where winter shelter is possible.",
      "Nagami Kumquat fits especially well on patios and in smaller gardens."
    ],
    maintenance: [
      "Water deeply and consistently, allowing slight drying between waterings.",
      "Feed during the growing season with a citrus fertilizer.",
      "Maintain bright light and steady care for the best flowering and fruit set."
    ],
    pruning: [
      "Prune lightly to remove dead or awkward branches and maintain shape.",
      "Remove any suckers below the graft as they appear.",
      "Avoid heavy pruning that reduces fruiting potential."
    ],
    winterizing: [
      "Protect from hard freezes, though kumquats can be somewhat tougher than some citrus.",
      "Move container plants to shelter during cold weather.",
      "Keep winter light bright and scale back feeding while growth slows."
    ]
  },
  {
    commonName: "Calamondin Orange",
    slug: "calamondin-orange",
    summary: "A decorative citrus with fragrant flowers and small tart fruit, excellent for sunny patios and indoor overwintering.",
    planting: [
      "Plant in full sun in sharply drained soil or a citrus-friendly container mix.",
      "Choose a warm bright location with protection from prolonged cold.",
      "Calamondin is especially well suited to container culture."
    ],
    maintenance: [
      "Water deeply and regularly, letting the top layer dry slightly between waterings.",
      "Feed through the active growing season with a citrus fertilizer.",
      "Bright light and even care help maintain flowering and fruiting."
    ],
    pruning: [
      "Prune lightly to remove dead, damaged, or crossing branches.",
      "Remove suckers from below the graft when necessary.",
      "Shape gently without overly reducing fruiting wood."
    ],
    winterizing: [
      "Protect from frost and freezing wind.",
      "Bring container plants indoors or to shelter during cold snaps.",
      "Maintain bright winter light and reduce feeding while the plant rests."
    ]
  },
  {
    commonName: "Fig Brown Turkey",
    slug: "fig-brown-turkey",
    summary: "A dependable home-garden fig that produces sweet fruit and responds well to sun, drainage, and moderate pruning.",
    planting: [
      "Plant in full sun in well-drained soil with room for a broad shrub or small tree form.",
      "Choose a warm site with protection from severe winter wind in colder regions.",
      "Brown Turkey fig performs well in the ground or in large containers."
    ],
    maintenance: [
      "Water regularly during establishment, then deeply during extended dry periods.",
      "Avoid heavy fertilizing that pushes too much leafy growth at the expense of fruit.",
      "Mulch lightly around the roots to conserve moisture."
    ],
    pruning: [
      "Prune in late winter or early spring to shape and remove dead or cold-damaged wood.",
      "Thin crowded branches so light reaches fruiting growth.",
      "Keep pruning moderate because figs fruit on relatively young wood."
    ],
    winterizing: [
      "Protect from severe cold in colder climates by wrapping or moving container plants to shelter.",
      "Mulch the root zone before winter.",
      "Cut back frost-damaged wood after spring growth shows what survived."
    ]
  },
  {
    commonName: "Fig Celeste",
    slug: "fig-celeste",
    summary: "A sweet small-fruited fig that thrives in sun and warmth, with manageable growth for home gardens and containers.",
    planting: [
      "Plant in full sun in well-drained soil or a large fast-draining container.",
      "Choose a warm site with some shelter from severe winter exposure.",
      "Celeste fig is a strong choice for smaller edible gardens and patios."
    ],
    maintenance: [
      "Water regularly while establishing, then during prolonged dry spells.",
      "Avoid overfeeding, which can make the tree overly leafy and less productive.",
      "Use mulch lightly to conserve moisture around the root zone."
    ],
    pruning: [
      "Prune in late winter or early spring to shape and remove dead or damaged branches.",
      "Thin crowded growth modestly so light reaches fruiting wood.",
      "Keep pruning balanced to preserve good fruiting potential."
    ],
    winterizing: [
      "Protect from severe freezes in colder areas, especially when plants are young.",
      "Move container-grown trees to shelter if winter temperatures are too low.",
      "Mulch roots and clean up cold-damaged wood once spring growth begins."
    ]
  },
  {
    commonName: "Fig Chicago Hardy",
    slug: "fig-chicago-hardy",
    summary: "A cold-tolerant fig valued for reliable fruiting and recovery, making it a strong choice for cooler-region edible gardens.",
    planting: [
      "Plant in full sun in well-drained soil or a large fast-draining container.",
      "Choose a warm protected site, especially in colder climates where winter dieback is possible.",
      "Chicago Hardy fig works well in the ground with protection or in containers that can be sheltered."
    ],
    maintenance: [
      "Water regularly during establishment, then deeply during extended dry periods.",
      "Avoid overfeeding, which can push too much weak leafy growth.",
      "Mulch lightly to conserve moisture around the root zone."
    ],
    pruning: [
      "Prune in late winter or early spring to remove dead, cold-damaged, or crowded growth.",
      "Thin lightly so sun reaches fruiting wood, but avoid excessive cutting.",
      "Use spring regrowth to rebuild the shape if winter dieback occurs."
    ],
    winterizing: [
      "Mulch the root zone well in colder climates for extra winter protection.",
      "Wrap or shield the plant where winters are severe if you want to preserve more top growth.",
      "Cut back only after spring growth shows what survived."
    ]
  },
  {
    commonName: "Apple Pink Lady",
    slug: "apple-pink-lady",
    summary: "A late-season dessert apple tree that needs full sun, pollination support, thinning, and steady orchard care.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with good airflow.",
      "Choose a site with room for canopy development and easy pruning access.",
      "Grow with a compatible pollinator nearby for stronger fruit set."
    ],
    maintenance: [
      "Water deeply during establishment and during drought or fruit swell.",
      "Feed in spring based on soil fertility and tree vigor.",
      "Thin fruit after set so remaining apples size up well and branches are less stressed."
    ],
    pruning: [
      "Prune annually in late winter to maintain an open, balanced fruiting framework.",
      "Remove dead, crowded, crossing, and inward-growing branches.",
      "Use light summer pruning only if vigorous shoots begin shading interior fruit."
    ],
    winterizing: [
      "Mulch lightly around the root zone while keeping the trunk base clear.",
      "Protect bark from winter injury and animal browsing where needed.",
      "Clean up dropped fruit and leaves to reduce disease and pest carryover."
    ]
  },
  {
    commonName: "Apple Braeburn",
    slug: "apple-braeburn",
    summary: "A crisp flavorful apple tree that performs best with sun, annual pruning, fruit thinning, and compatible pollination.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with strong air movement.",
      "Choose a site with enough space for structure, harvest, and long-term pruning.",
      "Include a compatible pollinator apple nearby for dependable fruiting."
    ],
    maintenance: [
      "Water deeply while establishing and during dry weather while fruit is developing.",
      "Feed moderately in spring according to the tree's vigor.",
      "Thin heavy fruit set so apples finish larger and branches remain stronger."
    ],
    pruning: [
      "Prune in late winter to maintain a productive open canopy and remove crowding.",
      "Take out damaged, crossing, or inward-growing branches.",
      "Shape the tree so light and airflow reach fruiting wood."
    ],
    winterizing: [
      "Mulch around the roots but keep the trunk flare clear.",
      "Protect young bark from animal damage and winter sun injury if needed.",
      "Remove fallen fruit and leaves before winter to reduce carryover issues."
    ]
  },
  {
    commonName: "Apple Cortland",
    slug: "apple-cortland",
    summary: "A classic apple tree prized for fresh eating and kitchen use, benefiting from sun, pruning, and yearly thinning.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with open airflow.",
      "Choose a site with enough room for canopy spread and maintenance access.",
      "Use a compatible pollinator apple nearby to improve bloom and fruit set."
    ],
    maintenance: [
      "Water deeply during establishment and extended dry spells.",
      "Feed in spring only as needed based on growth and soil condition.",
      "Thin fruit after set to improve quality and reduce branch strain."
    ],
    pruning: [
      "Prune each late winter to maintain structure and open the canopy to sunlight.",
      "Remove crowded, damaged, or poorly placed branches.",
      "Use minor summer touch-up pruning if vigorous shoots begin shading the interior."
    ],
    winterizing: [
      "Mulch around the root zone while keeping mulch away from the trunk.",
      "Protect the bark from winter injury and animal chewing if needed.",
      "Clean up leaves and old fruit so pests and disease have less to overwinter in."
    ]
  },
  {
    commonName: "Apple Empire",
    slug: "apple-empire",
    summary: "A dependable orchard apple with crisp fruit, thriving with full sun, annual structure pruning, and regular thinning.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with good air movement.",
      "Choose a site with room for mature canopy development and easy orchard maintenance.",
      "Grow with a compatible pollinator nearby for stronger fruit set."
    ],
    maintenance: [
      "Water deeply during establishment and while fruit is sizing in dry conditions.",
      "Feed modestly in spring according to soil fertility and tree vigor.",
      "Thin fruit after set to improve size and help prevent branch overload."
    ],
    pruning: [
      "Prune in late winter to maintain a balanced canopy and productive fruiting wood.",
      "Remove damaged, crowded, and inward-growing branches.",
      "Thin vigorous upright shoots if they shade the interior excessively."
    ],
    winterizing: [
      "Mulch lightly around roots while keeping the trunk base clear.",
      "Protect bark from animal damage and winter sunscald if needed.",
      "Remove dropped fruit and leaves before winter to limit disease carryover."
    ]
  },
  {
    commonName: "Pear Seckel",
    slug: "pear-seckel",
    summary: "A small richly flavored pear tree that performs well with sun, airflow, pollination support, and yearly pruning.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with open air movement.",
      "Choose a site with room for canopy structure and harvest access.",
      "Include a compatible pear pollinator nearby if needed for stronger production."
    ],
    maintenance: [
      "Water deeply during establishment and during prolonged dry periods.",
      "Feed lightly in spring based on tree vigor and soil fertility.",
      "Thin heavy fruit set to improve quality and reduce branch stress."
    ],
    pruning: [
      "Prune in late winter to maintain a strong open canopy and remove crowding.",
      "Remove watersprouts, crossing wood, and damaged branches.",
      "Keep enough openness for sunlight and airflow to reach fruiting areas."
    ],
    winterizing: [
      "Mulch the root zone lightly while keeping material away from the trunk.",
      "Protect bark from winter injury and animal damage if needed.",
      "Clean up fallen fruit and leaves before winter fully settles in."
    ]
  },
  {
    commonName: "Pear Moonglow",
    slug: "pear-moonglow",
    summary: "A productive pear tree with smooth fruit, needing sun, pruning, pollination support, and steady orchard care.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with strong airflow.",
      "Choose a site that allows easy access for shaping, thinning, and harvest.",
      "Use a compatible pear pollinator nearby if your setup requires it."
    ],
    maintenance: [
      "Water deeply while the tree establishes and during dry periods.",
      "Feed moderately in spring according to soil condition and tree vigor.",
      "Thin fruit when branches are overloaded to improve final quality."
    ],
    pruning: [
      "Prune in late winter to build and maintain a well-spaced fruiting framework.",
      "Remove crowded, damaged, or upright water sprout growth.",
      "Shape the canopy to improve light penetration and airflow."
    ],
    winterizing: [
      "Mulch roots lightly in colder climates while keeping mulch off the trunk.",
      "Protect young bark from winter injury and animal browsing.",
      "Remove leaf and fruit litter to reduce overwintering pests and disease."
    ]
  },
  {
    commonName: "Pear Forelle",
    slug: "pear-forelle",
    summary: "A flavorful pear tree that benefits from full sun, good air circulation, and routine orchard-style pruning.",
    planting: [
      "Plant in full sun in well-drained fertile soil.",
      "Choose a site with space for a balanced canopy and comfortable harvest access.",
      "Plant with a compatible pear pollinator nearby if needed for improved fruit set."
    ],
    maintenance: [
      "Water deeply during establishment and through long dry spells.",
      "Feed lightly in spring as needed based on growth and soil fertility.",
      "Thin fruit if the crop becomes heavy enough to strain branches."
    ],
    pruning: [
      "Prune in late winter to remove crowding and maintain a strong branch structure.",
      "Take out damaged wood and upright water sprouts as part of annual shaping.",
      "Preserve good light penetration into fruiting areas."
    ],
    winterizing: [
      "Mulch around roots lightly while keeping the trunk clear.",
      "Protect bark from winter damage and animals where needed.",
      "Clean up dropped leaves and fruit to reduce overwintering issues."
    ]
  },
  {
    commonName: "Peach Reliance",
    slug: "peach-reliance",
    summary: "A cold-hardy peach tree that rewards sunny siting, thinning, and annual pruning with dependable fruit in cooler regions.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with good air circulation.",
      "Choose a site away from frost pockets if possible, though this variety is relatively hardy.",
      "Allow space for an open-center canopy and easy orchard maintenance."
    ],
    maintenance: [
      "Water deeply during establishment and through dry periods when fruit is developing.",
      "Feed in spring based on soil fertility and tree vigor.",
      "Thin fruit after set so peaches size up well and branches remain stronger."
    ],
    pruning: [
      "Prune annually in late winter or early spring to maintain an open-center shape.",
      "Remove damaged, crowded, and inward-growing wood.",
      "Use light summer pruning if canopy density begins shading fruit."
    ],
    winterizing: [
      "Mulch the root zone lightly while keeping mulch away from the trunk.",
      "Protect bark from winter injury and animal browsing if needed.",
      "Remove fruit and leaf litter to reduce disease carryover into spring."
    ]
  },
  {
    commonName: "Peach Saturn",
    slug: "peach-saturn",
    summary: "A donut-style peach tree that benefits from full sun, thinning, and routine pruning for sweet high-quality fruit.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with open airflow.",
      "Choose a site with room for an open-centered canopy and easy picking access.",
      "Avoid frost pockets if possible because peach bloom can still be vulnerable to late cold."
    ],
    maintenance: [
      "Water deeply during establishment and whenever dry weather affects fruit development.",
      "Feed in spring according to vigor and soil condition.",
      "Thin fruit well so the flattened peaches mature with better size and flavor."
    ],
    pruning: [
      "Prune yearly in late winter or early spring to maintain an open-center structure.",
      "Remove dead, damaged, crossing, and inward-growing branches.",
      "Use light summer pruning if needed to improve sunlight on fruiting wood."
    ],
    winterizing: [
      "Mulch around the roots while keeping the trunk base clear.",
      "Protect young bark from winter injury and animal damage if needed.",
      "Clean up fallen fruit and leaves before winter to reduce disease pressure."
    ]
  },
  {
    commonName: "Peach Belle of Georgia",
    slug: "peach-belle-of-georgia",
    summary: "A large-flowered, flavorful peach tree that rewards full sun, yearly pruning, and fruit thinning with quality harvests.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with strong air circulation.",
      "Choose a site with room for an open-centered canopy and good orchard access.",
      "Avoid frost pockets if possible because peach bloom can be sensitive to late spring cold."
    ],
    maintenance: [
      "Water deeply during establishment and through dry periods while fruit is developing.",
      "Feed in spring based on the tree's vigor and local soil fertility.",
      "Thin fruit after set so peaches mature with better size and less branch strain."
    ],
    pruning: [
      "Prune annually in late winter or early spring to maintain an open-center form.",
      "Remove dead, damaged, crowded, and inward-growing wood.",
      "Use light summer pruning if canopy density begins to shade fruiting branches."
    ],
    winterizing: [
      "Mulch lightly around the root zone while keeping the trunk base clear.",
      "Protect bark from winter injury and animal browsing if needed.",
      "Remove fallen fruit and leaves before winter to limit disease carryover."
    ]
  },
  {
    commonName: "Plum Methley",
    slug: "plum-methley",
    summary: "An early plum tree that performs best with full sun, annual pruning, and steady care for healthy fruiting wood.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with good airflow.",
      "Choose a site with room for canopy spread and maintenance access.",
      "Check pollination needs based on local fruiting conditions and nearby plum varieties."
    ],
    maintenance: [
      "Water deeply during establishment and dry periods during fruiting.",
      "Feed moderately in spring if the tree needs more vigor.",
      "Thin heavy fruit set when needed so branches are not overloaded."
    ],
    pruning: [
      "Prune in late winter or early spring to maintain shape and improve light penetration.",
      "Remove damaged, crossing, or crowded branches.",
      "Keep the canopy open enough for airflow and easier harvesting."
    ],
    winterizing: [
      "Mulch roots lightly in colder areas while keeping the trunk clear.",
      "Protect young bark from winter injury and animal chewing where needed.",
      "Clean up fruit and leaf drop to reduce overwintering pests and disease."
    ]
  },
  {
    commonName: "Prune Stanley",
    slug: "prune-stanley",
    summary: "A dependable prune plum tree grown for sweet versatile fruit, benefiting from sun, thinning, and annual structure pruning.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with open airflow.",
      "Choose a site with room for balanced canopy development and harvest access.",
      "Provide pollination support if local conditions or your setup call for it."
    ],
    maintenance: [
      "Water deeply during establishment and extended dry weather.",
      "Feed lightly in spring according to soil fertility and tree vigor.",
      "Thin fruit if the crop load becomes heavy enough to strain branches."
    ],
    pruning: [
      "Prune during dormancy to maintain a strong open structure.",
      "Remove damaged, crowded, and inward-growing wood each year.",
      "Preserve good light penetration into fruiting areas."
    ],
    winterizing: [
      "Mulch lightly around the roots while keeping mulch off the trunk base.",
      "Protect bark from winter injury and animals if necessary.",
      "Clean up fallen fruit and leaves at season's end."
    ]
  },
  {
    commonName: "Apricot Goldcot",
    slug: "apricot-goldcot",
    summary: "A cold-hardy apricot tree that benefits from full sun, good drainage, and careful siting for early bloom protection.",
    planting: [
      "Plant in full sun in well-drained fertile soil with strong air movement.",
      "Choose a site away from frost pockets if possible because apricots often bloom early.",
      "Allow enough room for a balanced open canopy and easy orchard care."
    ],
    maintenance: [
      "Water deeply during establishment and while fruit develops in dry weather.",
      "Feed in spring according to soil fertility and tree vigor.",
      "Thin fruit after set if the crop is especially heavy."
    ],
    pruning: [
      "Prune selectively to remove crowding and maintain structure.",
      "Take out dead, damaged, or inward-growing branches each year.",
      "Keep the canopy open enough for sunlight and airflow."
    ],
    winterizing: [
      "Mulch the root zone lightly but keep material away from the trunk.",
      "Protect bark from winter injury and animal browsing where needed.",
      "Remove fallen leaves and fruit to reduce disease carryover."
    ]
  },
  {
    commonName: "Apricot Tilton",
    slug: "apricot-tilton",
    summary: "A flavorful apricot tree for sunny home orchards, needing drainage, airflow, and thoughtful pruning for reliable production.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with open air circulation.",
      "Choose a site less prone to late frost because bloom can come early.",
      "Allow room for a strong open canopy and regular orchard maintenance."
    ],
    maintenance: [
      "Water deeply during establishment and dry periods while fruit is swelling.",
      "Feed in spring if soil fertility or growth suggests the tree needs support.",
      "Thin fruit when the set is heavy to improve size and reduce branch stress."
    ],
    pruning: [
      "Prune during dormancy to remove crowding and maintain a sound structure.",
      "Take out damaged, crossing, and inward-growing branches.",
      "Keep the canopy open enough for airflow and easier harvest."
    ],
    winterizing: [
      "Mulch lightly around the root zone while keeping the trunk base clear.",
      "Protect young bark from winter injury and animal damage if needed.",
      "Clean up fruit and leaf drop before winter fully settles in."
    ]
  },
  {
    commonName: "Nectarine Arctic Jay",
    slug: "nectarine-arctic-jay",
    summary: "A white-fleshed nectarine tree that performs best with sun, thinning, and regular orchard pruning.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with strong air circulation.",
      "Choose a site with space for an open-centered canopy and easy picking access.",
      "Avoid frost pockets if possible because nectarines bloom early and can be vulnerable."
    ],
    maintenance: [
      "Water deeply during establishment and through dry spells during fruit development.",
      "Feed in spring according to vigor and soil condition.",
      "Thin fruit well after set so remaining nectarines size up properly."
    ],
    pruning: [
      "Prune yearly in late winter or early spring to maintain an open-center form.",
      "Remove damaged, crowded, crossing, and inward-growing branches.",
      "Use light summer pruning if the canopy becomes too dense."
    ],
    winterizing: [
      "Mulch lightly around roots while keeping mulch away from the trunk.",
      "Protect bark from winter injury and animal browsing if necessary.",
      "Remove fallen fruit and diseased leaves to limit carryover issues."
    ]
  },
  {
    commonName: "Nectarine Double Delight",
    slug: "nectarine-double-delight",
    summary: "A flavorful nectarine tree that benefits from full sun, annual pruning, and fruit thinning for better quality harvests.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with good airflow.",
      "Choose a site with room for an open-centered canopy and easy orchard care.",
      "Avoid low frost pockets if possible because bloom can be affected by late cold."
    ],
    maintenance: [
      "Water deeply during establishment and when fruit is swelling in dry weather.",
      "Feed in spring based on the tree's vigor and soil condition.",
      "Thin fruit after set for improved size, flavor, and branch protection."
    ],
    pruning: [
      "Prune annually in late winter or early spring to maintain an open-center structure.",
      "Remove dead, damaged, crowded, and inward-growing wood.",
      "Use light summer pruning if shading becomes excessive."
    ],
    winterizing: [
      "Mulch the root zone lightly while keeping the trunk clear.",
      "Protect bark from winter injury and animal damage if needed.",
      "Clean up fruit and leaf litter before winter to reduce disease pressure."
    ]
  },
  {
    commonName: "Persimmon Hachiya",
    slug: "persimmon-hachiya",
    summary: "An astringent persimmon tree with richly flavored fruit when fully ripe, performing best in sun and warm autumn conditions.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with room for a broad rounded canopy.",
      "Choose a warm site where fruit can finish ripening late in the season.",
      "Allow enough space for maintenance and harvest around the mature tree."
    ],
    maintenance: [
      "Water deeply during establishment and during extended dry weather.",
      "Feed lightly in spring if growth is weak, but avoid excess fertility.",
      "Thin heavy crops if branches look overburdened."
    ],
    pruning: [
      "Prune in late winter to remove dead, weak, or crossing wood and maintain structure.",
      "Shape young trees carefully so fruiting branches are well spaced.",
      "Remove broken fruiting wood after harvest if needed."
    ],
    winterizing: [
      "Mulch the root zone lightly while keeping the trunk clear.",
      "Protect young trunks from winter injury and animal browsing where necessary.",
      "Remove dropped fruit and leaves before winter to reduce carryover issues."
    ]
  },
  {
    commonName: "Goji Berry",
    slug: "goji-berry",
    summary: "A fruiting shrub with arching canes and nutrient-rich berries, thriving in sun and well-drained soil with regular shaping.",
    planting: [
      "Plant in full sun in well-drained soil with room for a spreading shrub form.",
      "Choose a site with good airflow and easy harvest access.",
      "Goji Berry works well in edible borders, berry patches, and trained row plantings."
    ],
    maintenance: [
      "Water regularly during establishment, then during extended dry periods.",
      "Avoid overly rich feeding; moderate fertility is usually enough.",
      "Mulch lightly around the base to conserve moisture and limit weeds."
    ],
    pruning: [
      "Prune in late winter or early spring to shape the shrub and remove weak growth.",
      "Thin crowded canes so sunlight reaches fruiting wood.",
      "Train or tie longer canes if you want a more upright manageable form."
    ],
    winterizing: [
      "Established plants are generally quite hardy with little winter care.",
      "Mulch younger shrubs lightly in colder climates.",
      "Prune out any winter-damaged cane tips once spring growth resumes."
    ]
  },
  {
    commonName: "Salal Berry",
    slug: "salal-berry",
    summary: "An evergreen native shrub with edible berries, excellent for woodland gardens, naturalized plantings, and shade structure.",
    planting: [
      "Plant in part shade to shade in acidic, humus-rich, well-drained soil.",
      "Choose a site with woodland-like conditions and enough room for spreading by underground stems.",
      "Salal Berry is ideal for native shade gardens and informal groundcovering shrub masses."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment and in long dry periods.",
      "Mulch with leaf mold, bark, or woodland-style organic matter.",
      "Once settled, the shrub is generally low maintenance in suitable acidic conditions."
    ],
    pruning: [
      "Prune lightly after fruiting if you want to control size or tidy the patch.",
      "Remove damaged or weak stems as needed.",
      "Thin older growth occasionally if the planting becomes too dense."
    ],
    winterizing: [
      "Salal Berry typically overwinters well in its preferred climate range.",
      "Mulch lightly around newer plants if winters are colder than usual for the site.",
      "Protect from severe drying wind if the planting is exposed."
    ]
  },
  {
    commonName: "Cloudberry",
    slug: "cloudberry",
    summary: "A cool-climate berry plant valued for amber fruit, thriving in moist acidic soil and gentle sun or open northern light.",
    planting: [
      "Plant in part sun or cool full sun where summers are mild.",
      "Use acidic, organic, moisture-retentive soil that still drains gently.",
      "Cloudberry performs best in cooler climates and boggy woodland-style garden conditions."
    ],
    maintenance: [
      "Keep the soil evenly moist at all times and do not let roots dry out.",
      "Mulch with acidic organic matter such as pine fines or leaf mold.",
      "This is a specialized berry best suited to consistently cool growing conditions."
    ],
    pruning: [
      "Remove only damaged or dead stems as needed.",
      "Allow the patch to spread gradually if conditions are favorable.",
      "Avoid aggressive cutting because growth is naturally low and delicate."
    ],
    winterizing: [
      "Cloudberry is typically adapted to cold conditions when planted in the right climate.",
      "Mulch lightly to protect roots from winter drying rather than heavy insulation.",
      "Keep the patch free of smothering debris through winter."
    ]
  },
  {
    commonName: "Maypop",
    slug: "maypop",
    summary: "A hardy passionflower vine with exotic blooms and edible fruit, best grown with support in sunny warm-season gardens.",
    planting: [
      "Plant in full sun to part sun in fertile, well-drained soil once weather has warmed.",
      "Provide a fence, trellis, or other sturdy support before the vine begins climbing.",
      "Maypop can spread by roots, so give it space or use root barriers where needed."
    ],
    maintenance: [
      "Water regularly during establishment and during extended summer dry spells.",
      "Mulch lightly around the root zone to conserve moisture.",
      "Feed modestly in spring if the vine needs more vigor."
    ],
    pruning: [
      "Cut back old stems in late winter or early spring before new growth begins.",
      "Remove wandering shoots if the plant starts spreading beyond its area.",
      "Thin crowded growth through summer if airflow becomes poor."
    ],
    winterizing: [
      "Mulch the root zone in colder climates for added protection.",
      "Top growth may die back after frost and return from the roots in spring.",
      "Wait until new growth appears before removing winter-killed stems completely."
    ]
  },
  {
    commonName: "Prickly Pear",
    slug: "prickly-pear",
    summary: "A resilient cactus with edible pads and fruit, ideal for hot sunny landscapes with excellent drainage.",
    planting: [
      "Plant in full sun in sharply drained soil or raised beds.",
      "Choose a dry open site where water never lingers around the roots.",
      "Allow room for pads to spread and handle the plant carefully because of spines and glochids."
    ],
    maintenance: [
      "Water during establishment, then only occasionally once rooted.",
      "Do not overfeed or overwater, as lean dry conditions suit this cactus best.",
      "Keep mulch and debris away from the base so moisture does not collect."
    ],
    pruning: [
      "Remove damaged or excess pads with clean tools when shaping is needed.",
      "Use heavy gloves and caution when handling any cut sections.",
      "Root healthy pads separately if you want to propagate more plants."
    ],
    winterizing: [
      "Protect from winter wet more than from cold where the species is hardy.",
      "Avoid covering the crown with dense mulch that traps moisture.",
      "Container plants may need shelter in climates with severe wet freezing weather."
    ]
  },
  {
    commonName: "Surinam Cherry",
    slug: "surinam-cherry",
    summary: "An evergreen fruiting shrub or small tree with ribbed cherries, suited to warm climates and sunny edible hedges.",
    planting: [
      "Plant in full sun to part sun in well-drained fertile soil.",
      "Choose a warm site with room for either shrub or small-tree growth.",
      "Surinam Cherry works well as an edible hedge or ornamental fruiting specimen."
    ],
    maintenance: [
      "Water regularly during establishment and during prolonged dry periods.",
      "Feed lightly in spring if growth appears weak.",
      "Mulch around the base to conserve moisture and reduce weeds."
    ],
    pruning: [
      "Prune lightly after fruiting to shape or contain size.",
      "Clip hedged forms regularly if you want a formal outline.",
      "Remove damaged or crowded interior growth as needed."
    ],
    winterizing: [
      "Protect from frost or severe cold in marginal climates.",
      "Mulch roots lightly before winter if cooler weather is expected.",
      "Container plants may need shelter during prolonged cold snaps."
    ]
  },
  {
    commonName: "Blackberry Prime-Ark",
    slug: "blackberry-prime-ark",
    summary: "A productive blackberry cultivar that benefits from sun, support, and regular pruning for strong fruiting canes.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with good airflow.",
      "Use a trellis or support system to make cane management and harvest easier.",
      "Space plants well so new canes have room to develop cleanly."
    ],
    maintenance: [
      "Water consistently during establishment and fruit development.",
      "Mulch along the row to conserve moisture and suppress weeds.",
      "Feed in spring with compost or a balanced berry fertilizer if growth is weak."
    ],
    pruning: [
      "Remove canes that have finished fruiting according to the cultivar's fruiting habit.",
      "Tie in or guide new canes so the planting stays organized.",
      "Thin excess cane growth to keep airflow and picking access strong."
    ],
    winterizing: [
      "Mulch roots lightly in colder climates for extra protection.",
      "Secure canes to support before winter storms.",
      "Prune away winter-damaged sections in late winter or early spring."
    ]
  },
  {
    commonName: "Raspberry Heritage",
    slug: "raspberry-heritage",
    summary: "A classic everbearing raspberry that rewards sun, moisture, and annual cane management with dependable harvests.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with good airflow.",
      "Space plants in a row with room for suckers and easy harvest access.",
      "Use support if canes become tall or exposed to wind."
    ],
    maintenance: [
      "Keep soil evenly moist, especially during flowering and fruiting.",
      "Mulch the row to conserve moisture and suppress weeds.",
      "Feed in spring with compost or a berry fertilizer based on vigor."
    ],
    pruning: [
      "Prune according to whether you want one larger fall crop or a split everbearing crop.",
      "Remove weak or damaged canes and thin the row so light reaches fruiting growth.",
      "Cut spent floricanes and keep the patch open and manageable."
    ],
    winterizing: [
      "Mulch lightly around the roots in colder climates.",
      "Secure or shorten canes if wind and snow are a concern.",
      "Remove winter-damaged cane sections before spring growth resumes."
    ]
  },
  {
    commonName: "Raspberry Fall Gold",
    slug: "raspberry-fall-gold",
    summary: "A golden-fruited everbearing raspberry that performs best with sun, moisture, and regular cane thinning.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with strong air movement.",
      "Give the row enough space for sucker growth and easy harvesting.",
      "Use support if canes become tall or bend under crop load."
    ],
    maintenance: [
      "Water consistently through establishment and fruit development.",
      "Mulch around the base to hold moisture and reduce weeds.",
      "Feed in spring if growth and leaf color suggest the planting needs a boost."
    ],
    pruning: [
      "Prune according to your preferred everbearing harvest system.",
      "Remove weak canes and thin the row so light and air can move freely.",
      "Cut out any diseased or winter-damaged growth before the new season."
    ],
    winterizing: [
      "Mulch roots lightly in colder climates for added winter protection.",
      "Keep the row tidy so old debris does not harbor disease.",
      "Secure or shorten canes before winter weather if necessary."
    ]
  },
  {
    commonName: "Apple Jonathan",
    slug: "apple-jonathan",
    summary: "A classic apple tree known for balanced flavor, needing sun, thinning, and yearly orchard pruning for best fruit quality.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with open airflow.",
      "Choose a site with room for a well-shaped canopy and easy access for pruning and harvest.",
      "Use a compatible pollinator apple nearby for strong fruit set."
    ],
    maintenance: [
      "Water deeply during establishment and in dry spells while fruit is developing.",
      "Feed in spring based on tree vigor and soil fertility.",
      "Thin fruit after set to improve size and reduce branch strain."
    ],
    pruning: [
      "Prune annually in late winter to maintain structure and open the canopy to light.",
      "Remove dead, damaged, crowded, and inward-growing branches.",
      "Use light summer pruning only if vigorous shoots begin shading fruit."
    ],
    winterizing: [
      "Mulch lightly around the root zone while keeping the trunk base clear.",
      "Protect bark from winter injury and animal damage where needed.",
      "Clean up leaves and dropped fruit to reduce carryover issues."
    ]
  },
  {
    commonName: "Apple Liberty",
    slug: "apple-liberty",
    summary: "A disease-resistant apple tree that benefits from full sun, orchard pruning, and regular thinning for quality crops.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with strong airflow.",
      "Choose a site with enough room for a balanced canopy and annual maintenance access.",
      "Use a compatible pollinator nearby to support reliable fruit set."
    ],
    maintenance: [
      "Water deeply during establishment and through dry periods.",
      "Feed modestly in spring if the tree needs more vigor.",
      "Thin fruit after set so apples size up better and branches remain stronger."
    ],
    pruning: [
      "Prune yearly in late winter to maintain shape and productive fruiting wood.",
      "Remove damaged, crowded, or poorly placed branches.",
      "Preserve enough openness for sunlight and airflow through the canopy."
    ],
    winterizing: [
      "Mulch around the roots lightly while keeping the trunk flare clear.",
      "Protect young bark from winter injury and animal browsing if necessary.",
      "Remove dropped fruit and leaves before winter to reduce disease pressure."
    ]
  },
  {
    commonName: "Apple Golden Delicious",
    slug: "apple-golden-delicious",
    summary: "A well-known dessert apple tree that performs best with sun, pollination support, fruit thinning, and annual pruning.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with good air movement.",
      "Choose a site with enough room for canopy spread and routine orchard care.",
      "Grow with a compatible pollinator nearby for dependable fruiting."
    ],
    maintenance: [
      "Water deeply during establishment and when dry weather affects fruit sizing.",
      "Feed in spring according to soil fertility and the tree's vigor.",
      "Thin fruit after set so remaining apples grow larger and branches are less stressed."
    ],
    pruning: [
      "Prune annually in late winter to maintain an open productive canopy.",
      "Remove dead, damaged, crossing, and inward-growing branches.",
      "Use light summer pruning only if upright shoots begin crowding the interior."
    ],
    winterizing: [
      "Mulch lightly around the root zone while keeping the trunk base clear.",
      "Protect bark from winter injury and animal damage where necessary.",
      "Clean up leaves and dropped fruit to reduce overwintering disease and pests."
    ]
  },
  {
    commonName: "Apple Winesap",
    slug: "apple-winesap",
    summary: "A traditional apple tree known for firm flavorful fruit, benefiting from full sun, annual pruning, and good pollination.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with open airflow.",
      "Choose a site with enough room for canopy spread and easy orchard access.",
      "Use a compatible pollinator apple nearby for dependable fruit set."
    ],
    maintenance: [
      "Water deeply during establishment and whenever dry weather affects fruit sizing.",
      "Feed in spring based on soil fertility and tree vigor.",
      "Thin fruit after set so remaining apples size up and branches stay less stressed."
    ],
    pruning: [
      "Prune annually in late winter to maintain a balanced productive canopy.",
      "Remove dead, damaged, crowded, and inward-growing branches.",
      "Use light summer pruning only if vigorous shoots begin shading interior fruit."
    ],
    winterizing: [
      "Mulch lightly around the root zone while keeping the trunk base clear.",
      "Protect bark from winter injury and animal browsing if needed.",
      "Clean up dropped fruit and leaves to reduce disease and pest carryover."
    ]
  },
  {
    commonName: "Pear Kieffer",
    slug: "pear-kieffer",
    summary: "A vigorous pear tree valued for dependable crops and firm fruit, thriving with sun, airflow, and yearly pruning.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with good air movement.",
      "Choose a site with room for canopy development and harvest access.",
      "Include a compatible pear pollinator nearby if needed for stronger fruit set."
    ],
    maintenance: [
      "Water deeply during establishment and through prolonged dry periods.",
      "Feed lightly in spring according to tree vigor and soil fertility.",
      "Thin heavy fruit set if branches become overloaded."
    ],
    pruning: [
      "Prune in late winter to maintain a strong open framework and reduce crowding.",
      "Remove watersprouts, damaged wood, and inward-growing branches.",
      "Keep enough openness for sunlight and airflow to reach fruiting areas."
    ],
    winterizing: [
      "Mulch the root zone lightly while keeping material away from the trunk.",
      "Protect bark from winter injury and animal chewing if necessary.",
      "Remove fallen fruit and leaves before winter to reduce carryover issues."
    ]
  },
  {
    commonName: "Pear Flemish Beauty",
    slug: "pear-flemish-beauty",
    summary: "A classic pear tree with richly flavored fruit, best grown with full sun, good airflow, and annual orchard care.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with open airflow.",
      "Choose a site with room for canopy spread and comfortable harvest access.",
      "Use a compatible pear pollinator nearby if needed for improved fruit set."
    ],
    maintenance: [
      "Water deeply during establishment and through dry periods while fruit develops.",
      "Feed modestly in spring according to soil fertility and vigor.",
      "Thin heavy crops so fruit quality improves and branches stay stronger."
    ],
    pruning: [
      "Prune in late winter to maintain a balanced branch framework and reduce crowding.",
      "Remove crossing, damaged, and upright water sprout growth.",
      "Shape the canopy so sunlight and airflow can reach fruiting wood."
    ],
    winterizing: [
      "Mulch lightly around the roots while keeping the trunk flare clear.",
      "Protect young bark from winter injury and animals where needed.",
      "Clean up leaf and fruit drop to reduce overwintering pests and disease."
    ]
  },
  {
    commonName: "Cherry Stella",
    slug: "cherry-stella",
    summary: "A self-fertile sweet cherry tree that performs best with sun, drainage, and careful annual pruning.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with strong air movement.",
      "Choose a site with room for canopy development and easy netting or harvest if needed.",
      "Stella can fruit on its own, but good siting still matters for crop quality."
    ],
    maintenance: [
      "Water deeply during establishment and dry periods during fruit development.",
      "Feed lightly in spring if the tree needs additional vigor.",
      "Protect ripening fruit from birds if they are a recurring problem."
    ],
    pruning: [
      "Prune selectively to maintain structure and keep the canopy open.",
      "Remove damaged, crossing, or crowded branches as part of annual shaping.",
      "Avoid excessive cuts that stimulate too much weak upright growth."
    ],
    winterizing: [
      "Mulch around the root zone lightly while keeping the trunk base clear.",
      "Protect bark from winter sun injury and animal damage where needed.",
      "Clean up dropped fruit and leaves before winter to reduce disease carryover."
    ]
  },
  {
    commonName: "Cherry Lapins",
    slug: "cherry-lapins",
    summary: "A productive sweet cherry tree that benefits from full sun, open airflow, and careful canopy management.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with excellent air circulation.",
      "Choose a site with enough space for tree form, harvest access, and bird protection if needed.",
      "Lapins is self-fertile, but fruit quality still depends on strong siting and care."
    ],
    maintenance: [
      "Water deeply during establishment and whenever dry weather stresses the tree.",
      "Feed moderately in spring according to growth and soil fertility.",
      "Watch crop load and branch balance as fruiting increases."
    ],
    pruning: [
      "Prune selectively to maintain a balanced canopy and good light penetration.",
      "Remove dead, damaged, crossing, and overly crowded branches.",
      "Keep enough openness for airflow to help reduce disease pressure."
    ],
    winterizing: [
      "Mulch lightly around the roots while keeping material away from the trunk.",
      "Protect bark from winter injury and animal chewing if needed.",
      "Remove fallen fruit and leaves to reduce overwintering problems."
    ]
  },
  {
    commonName: "Cherry Black Tartarian",
    slug: "cherry-black-tartarian",
    summary: "An early sweet cherry tree with dark fruit, needing full sun, drainage, and routine orchard-style pruning.",
    planting: [
      "Plant in full sun in fertile, well-drained soil with strong air movement.",
      "Choose a site with enough room for canopy spread and routine maintenance access.",
      "Use a compatible pollinator nearby if needed for stronger fruit set."
    ],
    maintenance: [
      "Water deeply during establishment and in dry stretches while fruit develops.",
      "Feed lightly in spring according to vigor and soil condition.",
      "Protect ripening fruit from birds if they are a frequent issue."
    ],
    pruning: [
      "Prune selectively to maintain structure and keep the canopy open.",
      "Remove crowded, damaged, or crossing branches each year.",
      "Avoid heavy cuts that create too much weak vigorous regrowth."
    ],
    winterizing: [
      "Mulch around the roots lightly while keeping the trunk base clear.",
      "Protect bark from winter damage and animal browsing where necessary.",
      "Clean up leaf and fruit drop to reduce disease carryover."
    ]
  },
  {
    commonName: "Orange Blood",
    slug: "orange-blood",
    summary: "A richly colored sweet orange tree that thrives in full sun, warmth, and fast-draining citrus conditions.",
    planting: [
      "Plant in full sun in sharply drained soil or a citrus-friendly container mix.",
      "Choose a warm protected site with room for a rounded canopy.",
      "Blood orange performs best where days are warm and nights cool enough for good fruit color."
    ],
    maintenance: [
      "Water deeply and consistently, allowing slight drying between waterings.",
      "Feed through the growing season with a citrus fertilizer.",
      "Monitor leaf color and growth to fine-tune nutrition and moisture."
    ],
    pruning: [
      "Prune lightly to remove dead, damaged, or crowded branches.",
      "Remove suckers below the graft if they appear.",
      "Avoid hard pruning that reduces flowering and fruit set."
    ],
    winterizing: [
      "Protect from frost and prolonged cold exposure.",
      "Move container-grown trees to shelter during cold snaps.",
      "Keep winter light bright and reduce fertilizer while growth slows."
    ]
  },
  {
    commonName: "Lemon Variegated Pink",
    slug: "lemon-variegated-pink",
    summary: "A striking variegated lemon tree with ornamental foliage and pink-fleshed fruit, ideal for sunny patios and citrus collections.",
    planting: [
      "Plant in full sun in sharply drained soil or a citrus potting mix.",
      "Choose a warm protected site or a container that can be moved in cold weather.",
      "Allow enough room for the canopy and good light exposure on variegated foliage."
    ],
    maintenance: [
      "Water deeply and regularly, letting the top of the soil dry slightly between waterings.",
      "Feed during the growing season with a citrus fertilizer.",
      "Variegated plants can be a little slower growing, so steady even care matters."
    ],
    pruning: [
      "Prune lightly to remove damaged, crossing, or crowded branches.",
      "Remove any suckers from below the graft as needed.",
      "Trim away strongly all-green reversions if they begin overtaking variegated growth."
    ],
    winterizing: [
      "Protect from frost and freezing wind, especially in containers.",
      "Move potted plants to shelter when cold snaps arrive.",
      "Maintain bright light and reduce feeding while winter growth slows."
    ]
  },
  {
    commonName: "Lime Kaffir",
    slug: "lime-kaffir",
    summary: "A fragrant citrus tree prized for aromatic leaves and bumpy fruit, performing best in sun, warmth, and sharp drainage.",
    planting: [
      "Plant in full sun in sharply drained soil or a fast-draining citrus mix.",
      "Choose a warm protected site or grow in a container where winter shelter is possible.",
      "This lime is especially valued for leaf harvest as well as ornamental appeal."
    ],
    maintenance: [
      "Water deeply and consistently, letting the upper soil dry slightly between waterings.",
      "Feed during the growing season with a citrus fertilizer.",
      "Harvest leaves lightly so the tree stays full and vigorous."
    ],
    pruning: [
      "Prune lightly to remove damaged or poorly placed branches and maintain shape.",
      "Remove suckers below the graft if present.",
      "Avoid heavy pruning that reduces leaf and flower production."
    ],
    winterizing: [
      "Protect from frost and cold wind.",
      "Move container plants to shelter during freezing weather.",
      "Keep winter light bright and reduce fertilizer while growth slows."
    ]
  },
  {
    commonName: "Mandarin Clementine",
    slug: "mandarin-clementine",
    summary: "A sweet easy-peeling mandarin tree that thrives with full sun, warmth, and steady citrus care.",
    planting: [
      "Plant in full sun in sharply drained soil or a citrus container mix.",
      "Choose a warm protected site with room for a rounded citrus canopy.",
      "Clementine does especially well in containers in cooler climates where winter shelter is needed."
    ],
    maintenance: [
      "Water deeply and regularly, allowing slight drying between waterings.",
      "Feed with a citrus fertilizer through the active growing season.",
      "Monitor the tree for nutrient balance, especially in container culture."
    ],
    pruning: [
      "Prune lightly to remove dead, damaged, or crowded branches.",
      "Remove suckers below the graft if they appear.",
      "Keep pruning minimal so flowering and fruiting wood remains productive."
    ],
    winterizing: [
      "Protect from frost and prolonged cold.",
      "Move container-grown plants under cover during hard freezes.",
      "Maintain bright winter light and reduce feeding while growth slows."
    ]
  },
  {
    commonName: "Kumquat Meiwa",
    slug: "kumquat-meiwa",
    summary: "A compact kumquat tree with sweet peel and tart flesh, ideal for sunny patios and smaller citrus collections.",
    planting: [
      "Plant in full sun in sharply drained soil or a citrus-friendly container mix.",
      "Choose a warm site with protection from severe winter cold.",
      "Meiwa Kumquat is especially suited to patio pots and smaller garden spaces."
    ],
    maintenance: [
      "Water deeply and consistently, allowing slight drying between waterings.",
      "Feed with a citrus fertilizer during the growing season.",
      "Bright light and steady moisture help support flowering and fruiting."
    ],
    pruning: [
      "Prune lightly to remove dead, damaged, or poorly placed branches.",
      "Remove suckers below the graft if they appear.",
      "Avoid heavy pruning that reduces future fruiting wood."
    ],
    winterizing: [
      "Protect from hard freezes even though kumquats are somewhat tougher than some citrus.",
      "Move container plants to shelter during freezing weather.",
      "Maintain bright winter light and reduce feeding while growth slows."
    ]
  },
  {
    commonName: "Olive Koroneiki",
    slug: "olive-koroneiki",
    summary: "A compact fruiting olive with silvery foliage, thriving in full sun, sharp drainage, and warm dry conditions.",
    planting: [
      "Plant in full sun in sharply drained soil or a very fast-draining large container.",
      "Choose a warm open site with room for a rounded evergreen canopy.",
      "Koroneiki performs especially well in Mediterranean-style landscapes and sunny patios."
    ],
    maintenance: [
      "Water regularly during establishment, then deeply but infrequently once rooted.",
      "Avoid heavy feeding and overly rich soil, which can weaken the compact natural habit.",
      "This olive prefers heat, strong light, and leaner conditions."
    ],
    pruning: [
      "Prune lightly to shape and open the canopy for airflow and light.",
      "Remove damaged, crowded, or crossing branches as needed.",
      "Keep cuts moderate so the plant retains its natural structure."
    ],
    winterizing: [
      "Protect from severe cold in fringe climates or move containers to shelter.",
      "Keep winter soil on the drier side while avoiding prolonged drought.",
      "Mulch lightly around the roots without trapping moisture at the trunk."
    ]
  },
  {
    commonName: "Avocado Bacon",
    slug: "avocado-bacon",
    summary: "A relatively cold-tolerant avocado tree that benefits from sun, drainage, and a sheltered site for steady growth.",
    planting: [
      "Plant in full sun in well-drained soil with protection from strong cold wind.",
      "Choose a site with enough room for canopy development and root spread.",
      "Avoid heavy wet ground because avocados are especially sensitive to poor drainage."
    ],
    maintenance: [
      "Water deeply during establishment, then regularly without letting the root zone stay soggy.",
      "Mulch lightly to protect shallow roots, but keep mulch away from the trunk.",
      "Feed according to avocado needs if growth becomes pale or weak."
    ],
    pruning: [
      "Prune lightly to shape and remove damaged or crowded growth.",
      "Avoid heavy pruning that exposes the trunk and scaffold branches too abruptly.",
      "Pinch young growth if you want a fuller canopy shape."
    ],
    winterizing: [
      "Protect young trees from frost and cold wind.",
      "Use frost cloth or temporary shelter in cold snaps if needed.",
      "Keep the root zone mulched lightly and well drained through winter."
    ]
  },
  {
    commonName: "Mango Cogshall",
    slug: "mango-cogshall",
    summary: "A compact mango tree suitable for warm gardens and large containers, producing sweet fruit with proper heat and care.",
    planting: [
      "Plant in full sun in sharply drained soil or a large fast-draining container.",
      "Choose a warm sheltered site with enough space for a compact rounded canopy.",
      "Cogshall is especially useful where a somewhat smaller mango is preferred."
    ],
    maintenance: [
      "Water regularly while establishing, then deeply during dry periods without waterlogging the roots.",
      "Feed according to tropical fruit needs during the growing season.",
      "Warmth and strong sun are key to healthy growth and fruiting."
    ],
    pruning: [
      "Prune lightly after harvest or after a growth flush to maintain shape and size.",
      "Remove damaged or crossing branches as needed.",
      "Pinch young growth occasionally to encourage a denser canopy."
    ],
    winterizing: [
      "Protect from frost and prolonged cold at all times.",
      "Move container plants to shelter in cooler climates.",
      "Reduce feeding in winter while maintaining bright light and moderate moisture."
    ]
  },
  {
    commonName: "Papaya Solo",
    slug: "papaya-solo",
    summary: "A tropical fruiting plant that grows quickly in heat, needing sun, warmth, and very good drainage to stay healthy.",
    planting: [
      "Plant in full sun in rich but sharply drained soil once weather is warm.",
      "Choose a sheltered location because strong wind can damage the soft trunk and leaves.",
      "Papaya Solo performs best where frost is absent and warmth is consistent."
    ],
    maintenance: [
      "Keep soil evenly moist but never soggy, especially during rapid active growth.",
      "Feed regularly during the growing season to support fruiting and foliage production.",
      "Warm temperatures and good drainage are essential for success."
    ],
    pruning: [
      "Little structural pruning is needed beyond removing damaged leaves and spent fruit stalks.",
      "Trim away aging lower leaves as they naturally decline.",
      "Avoid cutting the growing point unless propagation or severe damage requires it."
    ],
    winterizing: [
      "Papaya must be protected from frost and prolonged cold.",
      "Grow in containers or sheltered warm sites where winter temperatures are marginal.",
      "Reduce watering slightly in cool low-light periods without letting the plant dry out completely."
    ]
  },
  {
    commonName: "Pineapple Queen",
    slug: "pineapple-queen",
    summary: "A tropical bromeliad-style fruiting plant that needs warmth, bright sun, and patience for home-grown pineapple fruit.",
    planting: [
      "Grow in full sun to very bright light in a sharply drained tropical potting mix.",
      "Choose a warm container or raised planting site with excellent drainage.",
      "Pineapple Queen performs best where heat and light are consistent."
    ],
    maintenance: [
      "Water moderately, allowing the mix to dry slightly between waterings.",
      "Feed lightly during active growth with a balanced fertilizer.",
      "Avoid letting the crown and roots stay cold or soggy."
    ],
    pruning: [
      "Remove damaged lower leaves as needed.",
      "Leave offsets in place or separate them later if you want more plants.",
      "Minimal shaping is needed beyond basic cleanup."
    ],
    winterizing: [
      "Protect from frost and cold indoor drafts.",
      "Bring container plants indoors or to a warm sheltered space in cold weather.",
      "Reduce watering in low-light winter periods while maintaining warmth."
    ]
  },
  {
    commonName: "Blueberry Elliott",
    slug: "blueberry-elliott",
    summary: "A late-season blueberry shrub that needs acidic soil, steady moisture, and good sun for dependable berry production.",
    planting: [
      "Plant in full sun to light part shade in acidic, organic-rich, well-drained soil.",
      "Choose a site with room for multiple shrubs if cross-pollination and heavier crops are desired.",
      "Blueberries perform best when soil pH is maintained in the acidic range."
    ],
    maintenance: [
      "Keep soil evenly moist, especially during establishment and berry sizing.",
      "Mulch with pine bark, needles, or other acidic organic material.",
      "Feed with an acid-loving plant fertilizer if needed based on growth and foliage color."
    ],
    pruning: [
      "Prune in late winter to remove weak, dead, or oldest wood and keep the shrub productive.",
      "Open the center enough for good light penetration and airflow.",
      "Remove low twiggy growth that will not support strong fruiting."
    ],
    winterizing: [
      "Mulch around the roots to protect shallow root systems through winter.",
      "Water before freeze-up if autumn has been especially dry.",
      "Protect ripening season expectations by choosing a site with enough summer warmth."
    ]
  },
  {
    commonName: "Blueberry Legacy",
    slug: "blueberry-legacy",
    summary: "A vigorous blueberry shrub with high productivity, thriving in acidic soil, sun, and regular moisture.",
    planting: [
      "Plant in full sun to light part shade in acidic, organic-rich, well-drained soil.",
      "Choose a site with enough room for a broad shrub and easy harvest access.",
      "Grow with additional blueberry varieties nearby if you want stronger cross-pollination."
    ],
    maintenance: [
      "Keep soil consistently moist, especially during berry set and ripening.",
      "Mulch with pine bark or other acidic organic material to protect shallow roots.",
      "Feed lightly with an acid-loving fertilizer if foliage or vigor suggests the plant needs support."
    ],
    pruning: [
      "Prune in late winter to remove the oldest wood and maintain a productive framework.",
      "Thin crowded stems so sunlight and airflow reach the center of the shrub.",
      "Remove weak low growth that contributes little to quality fruiting."
    ],
    winterizing: [
      "Mulch around the root zone before winter to protect shallow roots.",
      "Water before freeze-up if fall has been unusually dry.",
      "Protect from severe drying wind if the planting is exposed."
    ]
  },
  {
    commonName: "Cranberry Pilgrim",
    slug: "cranberry-pilgrim",
    summary: "A low trailing cranberry that needs acidic moisture-retentive soil and cool conditions for strong growth and fruiting.",
    planting: [
      "Plant in full sun in acidic sandy-organic soil that stays evenly moist.",
      "Choose a site with room for runners to spread and form a fruiting mat.",
      "Cranberry Pilgrim performs best in cool conditions with consistently acidic soil."
    ],
    maintenance: [
      "Keep the root zone evenly moist and never let it dry completely.",
      "Mulch or top-dress with acidic materials such as sand or pine-based organic matter.",
      "Avoid heavy fertilizing; steady acidic moisture matters more."
    ],
    pruning: [
      "Trim runners lightly if the planting becomes too tangled or spreads beyond its space.",
      "Thin lightly to improve airflow and encourage upright fruiting shoots.",
      "Remove winter-damaged sections as spring growth resumes."
    ],
    winterizing: [
      "Mulch lightly or protect the bed according to local cranberry-growing practices in colder climates.",
      "Keep the planting from drying out during winter dormancy.",
      "Protect from heavy debris that could smother the low mat."
    ]
  },
  {
    commonName: "Gooseberry Captivator",
    slug: "gooseberry-captivator",
    summary: "A nearly thornless gooseberry shrub with good fruit quality, thriving in cool sun or light shade with even moisture.",
    planting: [
      "Plant in full sun to part shade in fertile, well-drained soil enriched with compost.",
      "Choose a site with good airflow and enough room for easy harvest access.",
      "Gooseberry Captivator is especially useful where lower-thorn growth is preferred."
    ],
    maintenance: [
      "Keep soil evenly moist, especially while the shrub is establishing and fruit is developing.",
      "Mulch around the roots to conserve moisture and reduce weed pressure.",
      "Feed lightly in spring with compost or a berry fertilizer if growth is weak."
    ],
    pruning: [
      "Prune in late winter to remove older wood and keep the center open.",
      "Maintain a framework of productive younger stems for best fruiting.",
      "Remove damaged or weak growth each year as part of routine renewal."
    ],
    winterizing: [
      "Mulch lightly around the root zone in colder climates.",
      "Protect young shrubs from severe animal browsing if needed.",
      "Clean up fallen leaves and old fruit after harvest season."
    ]
  },
  {
    commonName: "Red Maple",
    slug: "red-maple",
    summary: "A fast-growing native shade tree valued for strong fall color and adaptability to a range of garden soils.",
    planting: [
      "Plant in spring or early fall in full sun with room for a large mature canopy.",
      "Use loamy soil that stays evenly moist but does not stay waterlogged for long periods.",
      "Mulch a wide root zone after planting to reduce competition and protect shallow feeder roots."
    ],
    maintenance: [
      "Water deeply through the first couple of growing seasons and during extended dry weather.",
      "Keep turf, mower damage, and soil compaction away from the trunk and root flare.",
      "Feed lightly with compost or not at all if growth is healthy in reasonably good soil."
    ],
    pruning: [
      "Prune in dormancy to remove damaged, crossing, or poorly placed branches.",
      "Train a strong central structure while the tree is young with small corrective cuts.",
      "Avoid heavy spring pruning when sap flow is active."
    ],
    winterizing: [
      "Water well before freeze-up if fall has been dry.",
      "Refresh mulch before winter but keep it pulled back from the trunk.",
      "Protect young trunks from animal damage and winter sunscald where that is a local problem."
    ]
  },
  {
    commonName: "Sugar Maple",
    slug: "sugar-maple",
    summary: "A classic shade tree with excellent fall color that performs best in cool climates and deep, moisture-holding soil.",
    planting: [
      "Plant in spring or early fall in full sun where the tree has long-term room to spread.",
      "Choose deep, fertile loam with reliable moisture and good drainage.",
      "Avoid hot paved exposures, compacted soils, or sites with heavy salt exposure."
    ],
    maintenance: [
      "Water consistently while establishing and during drought because sugar maples dislike prolonged stress.",
      "Mulch broadly to cool the root zone and suppress competition from grass.",
      "Leave fertilizer light unless a soil test or poor growth suggests the tree needs support."
    ],
    pruning: [
      "Prune while dormant to improve structure and remove dead or rubbing branches.",
      "Keep cuts moderate and focus on a sound branching framework while young.",
      "Do not overprune because large shade trees recover best from selective, limited cuts."
    ],
    winterizing: [
      "Maintain mulch through winter while keeping it away from the trunk base.",
      "Water before the ground freezes if autumn has been dry.",
      "Protect young bark from sunscald, deer rubbing, or rodent injury where needed."
    ]
  },
  {
    commonName: "Crabapple",
    slug: "crabapple",
    summary: "A flowering ornamental tree that brings spring bloom, pollinator value, and often colorful fruit for fall and winter interest.",
    planting: [
      "Plant in spring or early fall in full sun for the strongest bloom and fruiting.",
      "Choose well-drained loam with enough airflow to help limit foliar disease pressure.",
      "Space the tree so the mature canopy stays open and easy to maintain."
    ],
    maintenance: [
      "Water deeply during establishment and in summer dry spells.",
      "Mulch the root zone and keep fallen fruit cleaned up if it becomes messy around patios or walks.",
      "Selectively thin interior growth over time so light and air can move through the canopy."
    ],
    pruning: [
      "Prune in dormancy to remove dead, crossing, or crowded branches.",
      "Remove water sprouts and trunk suckers as they appear.",
      "Keep the center reasonably open to support airflow and reduce disease pressure."
    ],
    winterizing: [
      "Water before freeze-up if the season has been dry.",
      "Mulch around the roots while leaving the trunk flare exposed.",
      "Rake and remove diseased leaves and dropped fruit to reduce overwintering issues."
    ]
  },
  {
    commonName: "Beautyberry",
    slug: "beautyberry",
    summary: "A relaxed deciduous shrub grown for bright fall berries and easy warm-climate performance in sunny borders.",
    planting: [
      "Plant in spring or early fall in full sun to light shade in average well-drained soil.",
      "Give shrubs room to arch naturally because the loose habit is part of their appeal.",
      "Berry production is usually strongest when plants receive more sun and are not crowded."
    ],
    maintenance: [
      "Water regularly during establishment, then only as needed during prolonged dry weather.",
      "Use mulch to hold moisture and keep weeds down around the root zone.",
      "Feed lightly with compost in spring if growth seems weak, but avoid pushing lush soft growth."
    ],
    pruning: [
      "Prune in late winter or very early spring before new growth starts.",
      "Cut older stems back hard if you want to rejuvenate the shrub because berries form on new wood.",
      "Thin a few older canes at the base to keep the plant airy and productive."
    ],
    winterizing: [
      "A light mulch helps moderate soil swings in colder edge-of-range sites.",
      "Water before dormancy if fall has been unusually dry.",
      "Leave the berry display standing into fall and winter if birds and seasonal color are part of the goal."
    ]
  },
  {
    commonName: "Texas Sage",
    slug: "texas-sage",
    summary: "A drought-tough desert shrub with silver foliage and purple bloom, ideal for hot sunny sites with fast drainage.",
    planting: [
      "Plant in warm weather in full sun and sharply drained sandy or gravelly soil.",
      "Choose an open site where reflected heat and dry air will not be a problem.",
      "Avoid low wet spots or heavily amended beds that hold too much moisture."
    ],
    maintenance: [
      "Water regularly while the shrub establishes, then shift to deep infrequent watering.",
      "Skip rich fertilizer because lean conditions keep growth compact and more resilient.",
      "Good drainage matters more than extra irrigation once the plant is rooted in."
    ],
    pruning: [
      "Prune lightly after bloom or in spring to shape without forcing a hard shell of growth.",
      "Remove dead or winter-damaged stems as new growth resumes.",
      "Avoid repeated heavy shearing because it weakens the natural form and bloom performance."
    ],
    winterizing: [
      "Keep winter soil on the dry side because cold wet roots cause more damage than cool air.",
      "Use only a light mulch and keep it away from the crown.",
      "Protect young shrubs from unusual hard freezes in fringe climates if severe cold is forecast."
    ]
  },
  {
    commonName: "Bay Laurel",
    slug: "bay-laurel",
    summary: "A slow-growing evergreen culinary shrub or small tree prized for fragrant leaves and tidy structure in sun and sharp drainage.",
    planting: [
      "Plant in spring in full sun to light shade in well-drained soil or a sturdy container mix.",
      "Choose a warm protected site if growing outdoors year-round in a marginal climate.",
      "Use a container only slightly larger than the root ball so the mix does not stay wet for too long."
    ],
    maintenance: [
      "Water regularly while establishing, then let the top layer dry slightly between deep waterings.",
      "Feed lightly in spring and midsummer if the plant is in a container and growing actively.",
      "Harvest leaves gradually so the plant stays dense and balanced."
    ],
    pruning: [
      "Prune in late spring or summer to shape as a shrub, standard, or hedge.",
      "Remove dead, crossing, or inward-growing branches to keep the center open.",
      "Bay tolerates clipping well, but selective cuts give a more natural structure."
    ],
    winterizing: [
      "Protect from harsh drying wind and prolonged hard freezes.",
      "Move container-grown plants to a bright sheltered spot in colder zones.",
      "Reduce winter watering, but do not let the root ball dry out completely."
    ]
  },
  {
    commonName: "Pilea",
    slug: "pilea",
    summary: "A friendly indoor foliage plant with round leaves and easy offsets, thriving in bright filtered light and light, careful watering.",
    planting: [
      "Pot in a loose well-drained houseplant mix with a container that has drainage holes.",
      "Place in bright indirect light where the foliage stays compact and evenly colored.",
      "Repot in spring if roots fill the pot or the plant becomes top-heavy."
    ],
    maintenance: [
      "Water thoroughly, then let the top inch or so of mix dry before watering again.",
      "Rotate the plant often so stems do not lean hard toward one light source.",
      "Remove and pot up offsets if you want to keep the parent plant tidy or make new plants."
    ],
    pruning: [
      "Pinch or trim leggy stems lightly to encourage a fuller shape.",
      "Remove yellowing lower leaves as they age out naturally.",
      "Use clean cuts when separating pups during repotting."
    ],
    winterizing: [
      "Keep away from cold drafts, heaters, and very cold glass.",
      "Water less often during slower winter growth.",
      "Hold fertilizer until spring if light levels are low and growth has slowed down."
    ]
  },
  {
    commonName: "String of Hearts",
    slug: "string-of-hearts",
    summary: "A trailing succulent vine with delicate patterned leaves that prefers bright light, airy soil, and generous drying between waterings.",
    planting: [
      "Pot into a cactus or succulent mix with extra drainage and a pot that does not stay wet.",
      "Use hanging pots or elevated shelves so the vines can trail freely.",
      "Bright indirect light with some gentle direct sun helps keep growth compact and colorful."
    ],
    maintenance: [
      "Water deeply, then let the mix dry well before watering again.",
      "Avoid heavy feeding because this plant stays healthier on the lean side.",
      "Untangle and reposition vines gently if you want a fuller basket or more even coverage."
    ],
    pruning: [
      "Trim long vines back to a node if growth becomes sparse near the pot.",
      "Root cuttings or tubers easily if you want to thicken the container.",
      "Remove any collapsed or damaged stems promptly to keep the plant clean."
    ],
    winterizing: [
      "Reduce watering significantly in winter, especially in lower light.",
      "Protect from cold drafts and keep it well above chilling temperatures.",
      "Maintain the brightest indoor light you can for stronger winter form."
    ]
  },
  {
    commonName: "Bird of Paradise",
    slug: "bird-of-paradise",
    summary: "A bold tropical plant with upright paddle leaves and dramatic flowers, performing best with strong light, warmth, and steady feeding.",
    planting: [
      "Plant in a rich but well-drained mix in a container with drainage or in a frost-free outdoor bed.",
      "Give the plant very bright light, including direct sun, once it is acclimated.",
      "Keep it slightly snug in the pot because oversized containers stay wet and delay bloom."
    ],
    maintenance: [
      "Water when the top layer begins to dry, keeping moisture more even in active summer growth.",
      "Feed regularly during the growing season to support large foliage and flowering.",
      "Wipe leaves and rotate indoor containers so the plant stays clean and balanced."
    ],
    pruning: [
      "Remove torn or aging leaves cleanly at the base of the stem.",
      "Cut out spent flower stalks once they finish.",
      "Divide crowded clumps in spring if the plant has outgrown its space."
    ],
    winterizing: [
      "Protect from cold drafts and move container plants before frost arrives.",
      "Keep winter light as bright as possible and reduce watering modestly while growth slows.",
      "Avoid letting the root ball stay cold and wet in low-light conditions."
    ]
  },
  {
    commonName: "Tomatillo",
    slug: "tomatillo",
    summary: "A warm-season edible related to tomatoes that needs sun, support, and usually more than one plant for reliable husked fruit production.",
    planting: [
      "Start seed indoors or set out transplants after frost once nights are warm and stable.",
      "Plant in full sun in fertile well-drained soil and give the stems support early.",
      "Grow at least two tomatillo plants if you want stronger pollination and heavier fruit set."
    ],
    maintenance: [
      "Water deeply and consistently so rapid summer growth does not stall in dry weather.",
      "Feed moderately once plants are established, especially if they are growing in containers.",
      "Mulch the soil to conserve moisture and keep fruiting stems cleaner."
    ],
    pruning: [
      "Stake or cage plants and tie in stems as they lengthen and sprawl.",
      "Remove damaged lower foliage that touches the soil.",
      "Thin only lightly if needed because dense branching helps support high yield."
    ],
    winterizing: [
      "Tomatillos are annuals and decline quickly after frost.",
      "Harvest mature husked fruit before a hard freeze if the season is ending.",
      "Pull and discard tired plants after harvest, especially if disease showed up late in the season."
    ]
  },
  {
    commonName: "Amur Maple",
    slug: "amur-maple",
    summary: "A smaller hardy maple grown for adaptable structure and vivid fall color in sunny residential landscapes.",
    planting: [
      "Plant in spring or early fall in full sun with enough room for a broad multi-stem or small-tree form.",
      "Use average loam with decent drainage and avoid burying the root flare too deeply.",
      "Mulch the root zone after planting to reduce weed competition and protect young roots."
    ],
    maintenance: [
      "Water regularly through the first growing season, then only during extended drought.",
      "Avoid heavy feeding because these maples usually hold a tidy habit without rich growth.",
      "Keep lawn equipment away from the trunk and maintain an open mulch ring around the base."
    ],
    pruning: [
      "Prune in dormancy to remove crossing, damaged, or poorly placed branches.",
      "Decide early whether you want a single-trunk tree or a multi-stem specimen and prune to support that shape.",
      "Limit large cuts and rely on light structural pruning while the tree is young."
    ],
    winterizing: [
      "Water before freeze-up if autumn has been dry.",
      "Refresh mulch before winter while keeping it away from the trunk.",
      "Protect young bark from sunscald or animal rubbing where that is common."
    ]
  },
  {
    commonName: "Bald Cypress",
    slug: "bald-cypress",
    summary: "A durable deciduous conifer for sunny landscapes, appreciated for feathery texture, strong structure, and tolerance of moist ground.",
    planting: [
      "Plant in spring or fall in full sun where the tree has room to develop a tall upright form.",
      "Bald cypress handles moist soil well, but it also performs in average ground if watered during establishment.",
      "Choose a site away from tight foundations because the trunk broadens attractively with age."
    ],
    maintenance: [
      "Water deeply through the first few seasons, especially if planting away from naturally moist ground.",
      "Mulch broadly to protect roots and reduce competition from turf.",
      "This tree usually needs little feeding if the soil is reasonably healthy."
    ],
    pruning: [
      "Prune during dormancy to remove damaged or competing leaders and keep a sound framework.",
      "Use selective cuts only because bald cypress naturally forms a strong upright outline.",
      "Remove lower branches gradually if you want to raise the canopy over time."
    ],
    winterizing: [
      "Water before freeze-up if the season has been dry.",
      "Keep mulch in place through winter without piling it against the trunk.",
      "Young trees benefit from protection against trunk damage from deer, rodents, or equipment."
    ]
  },
  {
    commonName: "Dawn Redwood",
    slug: "dawn-redwood",
    summary: "A fast-growing deciduous conifer with soft foliage and impressive height, thriving in sun with steady moisture and space.",
    planting: [
      "Plant in spring or early fall in full sun where the tree has generous long-term room.",
      "Choose deep loam with reliable moisture and good drainage for the best growth rate.",
      "Mulch the root zone well after planting and avoid crowding the trunk with lawn or paving."
    ],
    maintenance: [
      "Water deeply during establishment and during dry spells because rapid growth depends on steady moisture.",
      "Leave fertilizer light unless growth or foliage color suggests the tree truly needs support.",
      "Protect the trunk from mower and string trimmer damage while the tree is young."
    ],
    pruning: [
      "Prune in dormancy to remove damaged wood or to correct structure while the tree is still young.",
      "Keep one dominant leader if you want the strongest classic upright form.",
      "Avoid frequent topping or aggressive cuts because the natural architecture is a major part of the appeal."
    ],
    winterizing: [
      "Water well before the ground freezes if autumn rainfall has been low.",
      "Maintain mulch through winter while leaving the trunk flare exposed.",
      "Guard young trunks from winter injury or animal damage if the site is exposed."
    ]
  },
  {
    commonName: "Red Twig Dogwood",
    slug: "red-twig-dogwood",
    summary: "A colorful shrub grown for bright winter stems, thriving in cooler climates with sun, moisture, and periodic renewal pruning.",
    planting: [
      "Plant in spring or fall in full sun to light shade in soil that stays evenly moist.",
      "Choose a site with enough room for the shrub to sucker and spread naturally if desired.",
      "Stem color is usually best in sunnier placements and where the plant is not drought stressed."
    ],
    maintenance: [
      "Water regularly through establishment and during dry periods because this shrub prefers steady moisture.",
      "Mulch around the roots to conserve moisture and keep the planting cool.",
      "Feed lightly with compost in spring if vigor seems weak, but avoid overfeeding."
    ],
    pruning: [
      "Prune in late winter or very early spring before growth begins.",
      "Remove a portion of the oldest stems at the base each year because younger stems show the brightest color.",
      "Thin crowded interior growth to keep the shrub open and easier to manage."
    ],
    winterizing: [
      "Maintain mulch through winter to buffer roots and conserve moisture.",
      "Water before freeze-up if autumn has been especially dry.",
      "Leave the colored stems standing through winter because they are the main seasonal display."
    ]
  },
  {
    commonName: "Aucuba",
    slug: "aucuba",
    summary: "A dependable evergreen shade shrub with bold foliage, useful for sheltered low-light corners where many shrubs struggle.",
    planting: [
      "Plant in spring or early fall in shade to bright filtered light in rich moisture-retentive soil.",
      "Choose a sheltered site protected from harsh drying wind and hot reflected afternoon sun.",
      "Amend poor soil with compost so roots establish into an evenly moist, organic base."
    ],
    maintenance: [
      "Water regularly during establishment, then keep the root zone from drying out completely.",
      "Mulch around the plant to hold moisture and moderate soil temperature.",
      "Aucuba usually needs very little feeding beyond annual compost or a light spring application."
    ],
    pruning: [
      "Prune in spring to remove winter-damaged, crowded, or overly tall stems.",
      "Cut selectively rather than shearing so the shrub keeps a strong natural form.",
      "Older shrubs can be renovated gradually by removing a few older stems low to the base."
    ],
    winterizing: [
      "Protect exposed shrubs from cold drying wind and late winter scorch.",
      "Keep mulch in place through winter while leaving stems clear at the base.",
      "Water before freeze-up if the season has been dry because evergreen shrubs lose moisture year-round."
    ]
  },
  {
    commonName: "Rockrose",
    slug: "rockrose",
    summary: "A sun-loving Mediterranean shrub valued for papery flowers, evergreen structure, and strong performance in lean dry soil.",
    planting: [
      "Plant in spring in full sun and sharply drained sandy or gravelly soil.",
      "Choose a warm open site where the roots will not sit in winter wet.",
      "Avoid heavily amended or rich beds because rockrose performs best in leaner ground."
    ],
    maintenance: [
      "Water regularly during establishment, then shift to infrequent deep watering.",
      "Do not overfeed because excess fertility leads to softer, shorter-lived growth.",
      "Good drainage and open air movement matter more than constant care once the plant settles in."
    ],
    pruning: [
      "Prune lightly after the main bloom flush to shape and remove spent branch tips.",
      "Avoid cutting deeply into old bare wood because regrowth can be weak.",
      "Remove any winter-damaged branches once new growth makes dead sections obvious."
    ],
    winterizing: [
      "Winter wet is the main risk, so keep mulch light and the crown open.",
      "Protect young shrubs from unusual hard freezes in colder edge-of-range gardens.",
      "Skip late-season fertilizer so growth hardens off properly before winter."
    ]
  },
  {
    commonName: "Lemon Verbena",
    slug: "lemon-verbena",
    summary: "A fragrant culinary herb with strong citrus scent, thriving in sun, warmth, and regular harvesting once established.",
    planting: [
      "Plant in spring once weather has warmed in full sun and well-drained soil or a roomy container.",
      "Choose a sheltered site if growing outdoors where winter cold is marginal.",
      "Use a pot with drainage if you plan to overwinter the plant indoors or under cover."
    ],
    maintenance: [
      "Water consistently while the plant establishes, then allow slight drying between deep waterings.",
      "Feed lightly during active growth if the plant is in a container or being harvested often.",
      "Harvest stem tips regularly to keep the shrub compact and productive."
    ],
    pruning: [
      "Pinch or trim through the growing season to encourage branching.",
      "Cut back lightly in spring once new growth resumes and winter damage is clear.",
      "Avoid hard late-fall pruning if you are trying to carry the plant through winter."
    ],
    winterizing: [
      "Lemon verbena can defoliate in cool weather, so protect the roots and base from hard freezes.",
      "Move container plants to bright shelter before severe cold arrives.",
      "Reduce watering during winter rest, but do not let roots dry completely."
    ]
  },
  {
    commonName: "Polka Dot Plant",
    slug: "polka-dot-plant",
    summary: "A colorful foliage houseplant that stays best with bright indirect light, regular moisture, and frequent pinching to stay full.",
    planting: [
      "Pot in a rich but free-draining indoor mix with a container that has drainage holes.",
      "Place in bright indirect light so leaf color stays vivid without scorching tender foliage.",
      "Repot in spring if roots crowd the pot or the mix breaks down and holds too much water."
    ],
    maintenance: [
      "Keep the mix lightly and evenly moist, especially in warm bright conditions.",
      "Increase humidity if leaf edges crisp in very dry rooms.",
      "This plant grows best when pinched and refreshed regularly instead of being left to get tall and sparse."
    ],
    pruning: [
      "Pinch stem tips often to encourage branching and a bushier shape.",
      "Remove flower spikes if you want the plant to focus energy on foliage.",
      "Trim back leggy growth and reroot tip cuttings if the plant becomes tired."
    ],
    winterizing: [
      "Keep away from cold drafts and chilly window glass.",
      "Water a bit less in winter, but do not let the mix dry out hard.",
      "Maintain steady warmth and bright light so the plant does not collapse in low-light months."
    ]
  },
  {
    commonName: "Artichoke",
    slug: "artichoke",
    summary: "A bold edible with architectural foliage that needs full sun, rich soil, and steady moisture for strong bud production.",
    planting: [
      "Plant in spring in full sun in rich organic soil with very good drainage.",
      "Give each plant generous space because mature artichokes become large and dramatic.",
      "In cooler regions, start with transplants or vernalized plants for stronger first-year production."
    ],
    maintenance: [
      "Keep soil evenly moist because drought stress reduces bud size and plant vigor.",
      "Feed regularly with compost or a balanced vegetable fertilizer through active growth.",
      "Mulch around the base to conserve moisture and keep weeds from crowding the heavy feeders."
    ],
    pruning: [
      "Cut harvested flower stalks back once the main buds are picked and side shoots finish.",
      "Remove ragged older leaves to keep the planting tidy and improve airflow.",
      "Divide or reset overcrowded perennial clumps in suitable climates when growth resumes."
    ],
    winterizing: [
      "In mild climates, mulch crowns after cutting plants back lightly post-harvest.",
      "In colder regions, protect crowns heavily or treat artichokes as annuals.",
      "Keep winter soil drained because cold soggy crowns are more vulnerable than cool air."
    ]
  },
  {
    commonName: "Okra",
    slug: "okra",
    summary: "A heat-loving summer edible that grows best in full sun, warm soil, and frequent harvesting of tender pods.",
    planting: [
      "Direct sow or transplant only after the soil is warm and nights are reliably mild.",
      "Plant in full sun in loose fertile soil with enough spacing for upright stems and airflow.",
      "Okra resents cold starts, so waiting for true summer conditions usually gives better growth."
    ],
    maintenance: [
      "Water deeply and consistently during dry spells, especially while plants are flowering and setting pods.",
      "Feed moderately if soil is poor, but avoid pushing too much soft leafy growth.",
      "Harvest pods often while they are young and tender to keep production going."
    ],
    pruning: [
      "Little pruning is needed beyond removing damaged lower leaves or spent plants late in the season.",
      "Stake taller plants if they lean under rapid summer growth.",
      "If plants become too tall, you can top lightly to encourage some side branching."
    ],
    winterizing: [
      "Okra is a warm-season annual and ends with frost.",
      "Pull plants after the season and clear old stems if disease or insects were an issue.",
      "Save mature pods for seed only after regular harvest has slowed and the season is nearly over."
    ]
  },
  {
    commonName: "Black Gum",
    slug: "black-gum",
    summary: "A refined native tree prized for glossy foliage, strong fall color, and reliable structure in evenly moist ground.",
    planting: [
      "Plant in spring or early fall in full sun with space for a broad upright canopy over time.",
      "Choose loamy soil with reliable moisture and good drainage, avoiding highly compacted sites.",
      "Mulch broadly around the root zone to protect young roots and reduce turf competition."
    ],
    maintenance: [
      "Water deeply during establishment and in dry periods because young trees resent drought stress.",
      "Keep the trunk free from mower damage and maintain an open mulch ring rather than lawn right to the base.",
      "Feed lightly or not at all if the tree is growing steadily in decent soil."
    ],
    pruning: [
      "Prune while dormant to remove crossing, damaged, or poorly spaced branches.",
      "Keep structural cuts light because black gum has a naturally attractive framework.",
      "Train a sound central leader while the tree is young and avoid aggressive reshaping later."
    ],
    winterizing: [
      "Water before freeze-up if autumn has been dry.",
      "Refresh mulch before winter while keeping it away from the trunk flare.",
      "Protect young trunks from winter injury or animal rubbing if the site is exposed."
    ]
  },
  {
    commonName: "Katsura Tree",
    slug: "katsura-tree",
    summary: "A graceful ornamental tree valued for heart-shaped leaves, soft structure, and excellent fall color in cool moist sites.",
    planting: [
      "Plant in spring or early fall in part shade to full sun where the soil stays evenly moist.",
      "Use rich organic soil and a sheltered location protected from harsh drying wind and reflected heat.",
      "Give the tree generous room because it develops a broad elegant canopy with age."
    ],
    maintenance: [
      "Water regularly during establishment and in hot dry weather because leaf scorch can show quickly under stress.",
      "Mulch widely to cool roots and retain moisture through summer.",
      "Avoid overfertilizing; steady moisture and root protection matter more than strong feeding."
    ],
    pruning: [
      "Prune in dormancy to remove damaged or crossing limbs and preserve the natural form.",
      "Use small selective cuts rather than heavy shaping.",
      "Raise the canopy gradually if clearance is needed, keeping the trunk and main scaffold structure balanced."
    ],
    winterizing: [
      "Water before freeze-up if fall has been unusually dry.",
      "Maintain mulch through winter while leaving the trunk base clear.",
      "Protect young trees from desiccating wind if planted in a more exposed setting than ideal."
    ]
  },
  {
    commonName: "Skimmia",
    slug: "skimmia",
    summary: "A compact evergreen shade shrub with glossy foliage, fragrant spring flowers, and colorful buds or berries in cool sheltered gardens.",
    planting: [
      "Plant in spring or early fall in shade to bright filtered light in rich moisture-retentive soil.",
      "Choose a sheltered site protected from hot afternoon sun and drying wind.",
      "Skimmia performs best when roots stay cool and soil remains slightly acidic and organic."
    ],
    maintenance: [
      "Keep soil evenly moist during establishment and do not let the root zone bake dry in summer.",
      "Mulch with compost or leaf mold to hold moisture and improve soil texture.",
      "Feed lightly in spring if needed, but avoid pushing overly soft growth."
    ],
    pruning: [
      "Prune lightly after flowering only if shaping is needed.",
      "Remove winter-damaged or crowded stems selectively rather than shearing the shrub.",
      "Take care not to strip off developing buds or berries if those are part of the seasonal display."
    ],
    winterizing: [
      "Protect from cold drying wind and harsh winter sun, especially in exposed sites.",
      "Maintain mulch through winter while keeping the stem bases clear.",
      "Water before freeze-up if autumn has been dry because evergreen shrubs continue losing moisture."
    ]
  },
  {
    commonName: "Manzanita",
    slug: "manzanita",
    summary: "A striking evergreen shrub with smooth bark, winter bloom, and strong drought tolerance in sunny Mediterranean-style gardens.",
    planting: [
      "Plant in spring in full sun in sharply drained sandy or gravelly soil.",
      "Choose an open site where winter drainage is excellent and roots will not sit in heavy wet ground.",
      "Avoid rich amendments because manzanita performs best in lean native-style soil."
    ],
    maintenance: [
      "Water during establishment, then reduce irrigation significantly once roots settle in.",
      "Do not overfeed because extra fertility shortens life and softens the naturally tough habit.",
      "Keep mulch light and airy so the crown stays dry and well ventilated."
    ],
    pruning: [
      "Prune lightly after flowering only to shape or remove damaged branches.",
      "Thin selectively to show off the bark and preserve the sculptural form.",
      "Avoid hard pruning into old wood because regrowth is often poor."
    ],
    winterizing: [
      "The biggest winter risk is wet cold soil rather than low water demand, so maintain sharp drainage.",
      "Protect young plants from unusual hard freezes while they establish.",
      "Skip late feeding so growth hardens off fully before winter weather."
    ]
  },
  {
    commonName: "Rudbeckia Goldsturm",
    slug: "rudbeckia-goldsturm",
    summary: "A dependable black-eyed Susan selection loved for long summer bloom, pollinator value, and easy garden performance.",
    planting: [
      "Plant in spring or early fall in full sun in average to moderately rich soil.",
      "Space clumps so air can move through the foliage and reduce disease pressure.",
      "Goldsturm establishes quickly from nursery plants and works well in mixed perennial borders."
    ],
    maintenance: [
      "Water while establishing, then only during longer dry periods.",
      "Top-dress with compost in spring if the soil is thin, but avoid overfeeding.",
      "Leave some late seed heads if you want bird interest after flowering."
    ],
    pruning: [
      "Deadhead to prolong bloom and keep the planting neat.",
      "Cut spent stems back in late fall or early spring depending on whether you want winter structure.",
      "Divide crowded clumps every few years if bloom or vigor begins to decline."
    ],
    winterizing: [
      "Established plants are hardy and need little more than a light mulch in colder climates.",
      "Keep crowns from sitting in soggy winter soil.",
      "Leave stems standing into winter if you want seed heads and extra habitat value."
    ]
  },
  {
    commonName: "Jacob's Ladder",
    slug: "jacobs-ladder",
    summary: "A cool-season woodland perennial with ladder-like foliage and soft spring flowers, best in moist part-shade conditions.",
    planting: [
      "Plant in spring or early fall in part shade in rich organic soil that stays evenly moist.",
      "Choose a cool sheltered site where hot afternoon sun does not scorch the foliage.",
      "This plant fits well at woodland edges, shade borders, and the front of mixed perennial beds."
    ],
    maintenance: [
      "Water during dry weather because Jacob's Ladder declines quickly if allowed to dry too hard.",
      "Mulch lightly with compost or leaf mold to hold moisture and enrich the soil.",
      "Remove tired summer foliage if the plant looks ragged after bloom and heat."
    ],
    pruning: [
      "Deadhead spent flowers if you want a tidier clump and to reduce self-seeding.",
      "Cut back worn foliage after flowering if heat has caused a messy flush of decline.",
      "Divide clumps in spring or early fall when plants become crowded."
    ],
    winterizing: [
      "Apply a light mulch after the ground cools in colder climates.",
      "Keep winter moisture steady but avoid waterlogged crowns.",
      "Mark the planting if nearby spring digging is likely because the plant disappears in dormancy."
    ]
  },
  {
    commonName: "Shiso",
    slug: "shiso",
    summary: "A flavorful leafy herb for containers and beds, growing quickly in warm weather with regular moisture and harvesting.",
    planting: [
      "Sow or transplant after frost in part shade to full sun depending on heat intensity.",
      "Use rich well-drained soil and give plants enough room for bushy leafy growth.",
      "Shiso performs especially well in containers where the soil can be kept evenly moist."
    ],
    maintenance: [
      "Water regularly so leaves stay tender and growth does not stall in hot weather.",
      "Feed lightly if harvesting often, especially in pots.",
      "Harvest tips and young leaves frequently to keep the plant compact and productive."
    ],
    pruning: [
      "Pinch growing tips early to encourage branching.",
      "Remove flower spikes if you want to extend leaf harvest and reduce self-seeding.",
      "Cut back tall stems lightly through the season to maintain a fuller shape."
    ],
    winterizing: [
      "Shiso is usually grown as a warm-season annual and finishes with frost.",
      "Save seed from mature flower spikes if you want to regrow it next season.",
      "Pull plants after the season once foliage declines and temperatures turn cold."
    ]
  },
  {
    commonName: "Gasteria",
    slug: "gasteria",
    summary: "A compact low-water succulent houseplant with thick patterned leaves, ideal for bright indoor spaces without harsh direct sun.",
    planting: [
      "Pot in a gritty succulent mix with a container that drains freely.",
      "Place in bright indirect light or gentle morning sun rather than strong harsh afternoon exposure.",
      "Repot only when offsets crowd the pot or the mix has broken down."
    ],
    maintenance: [
      "Water thoroughly, then let the mix dry well before watering again.",
      "Keep fertilizer very light because compact succulents grow best without being pushed hard.",
      "Rotate the pot occasionally so the rosette or clump stays balanced."
    ],
    pruning: [
      "Remove dried lower leaves cleanly at the base as they age.",
      "Separate offsets during repotting if you want to propagate or thin the clump.",
      "Avoid cutting healthy leaf tips because the scars remain visible."
    ],
    winterizing: [
      "Reduce watering in winter and keep the plant away from cold drafts.",
      "Do not allow the mix to stay damp in cool low-light conditions.",
      "Provide the brightest practical indoor light through the shorter winter days."
    ]
  },
  {
    commonName: "Crossvine",
    slug: "crossvine",
    summary: "A vigorous flowering native vine that covers fences and trellises well, rewarding sun and support with spring pollinator bloom.",
    planting: [
      "Plant in spring or fall in full sun to light shade in average well-drained soil.",
      "Provide a sturdy trellis, fence, or arbor before the vine begins vigorous growth.",
      "Give the roots some moisture-retentive soil while allowing the top to climb into better light."
    ],
    maintenance: [
      "Water during establishment and during extended dry periods in summer.",
      "Mulch the root zone to conserve moisture and reduce competition from weeds.",
      "Once established, crossvine is fairly easygoing and often needs more guidance than pampering."
    ],
    pruning: [
      "Prune after flowering to control size and direct growth on the support.",
      "Remove dead, tangled, or overly heavy stems to keep airflow and structure manageable.",
      "Thin selectively rather than shearing so bloom wood is preserved."
    ],
    winterizing: [
      "Established vines usually need little winter care in range.",
      "Water before freeze-up if fall has been dry.",
      "Protect newly planted vines from severe first-winter stress with a light root mulch."
    ]
  },
  {
    commonName: "Pumpkin",
    slug: "pumpkin",
    summary: "A sprawling warm-season crop that needs rich soil, sun, pollinator activity, and a long growing window for full-sized fruit.",
    planting: [
      "Direct sow or transplant after frost once the soil is warm and the season is reliably settled.",
      "Use rich organic soil in full sun and allow generous space for long running vines.",
      "Plant in mounds or broad rows where drainage is good and the vines can spread without crowding."
    ],
    maintenance: [
      "Water deeply and consistently, especially during flowering and fruit swelling.",
      "Feed regularly with compost or a vegetable fertilizer because pumpkins are heavy feeders.",
      "Mulch around the base to conserve moisture and keep developing fruit cleaner."
    ],
    pruning: [
      "Guide vines into their space early so the patch stays manageable.",
      "Remove damaged leaves or diseased growth promptly if mildew or rot appears.",
      "Some growers pinch late vine tips to focus energy on existing fruit once enough pumpkins have set."
    ],
    winterizing: [
      "Pumpkins are annuals and are harvested before hard frost ends the season.",
      "Cut fruit with a handle attached once rinds harden and color develops fully.",
      "Clear old vines after harvest, especially if disease pressure showed up in late summer or fall."
    ]
  },
];

function buildTreeGuide({
  commonName,
  slug,
  summary,
  plantingSite,
  plantingNote,
  maintenanceNote,
  pruningNote,
  winterizingNote,
  plantingExtra = "Water deeply after planting and keep the root flare level with the soil surface.",
  maintenanceExtra = "Mulch lightly around the root zone to conserve moisture and reduce weed competition.",
  pruningExtra = "Remove dead, damaged, or crossing branches as needed.",
  winterExtra = "Keep mulch shallow and away from direct bark contact."
}) {
  return {
    commonName,
    slug,
    summary,
    planting: [
      `Plant in spring or early fall in ${plantingSite}.`,
      plantingNote,
      plantingExtra
    ],
    maintenance: [
      maintenanceNote,
      maintenanceExtra,
      "Avoid unnecessary heavy feeding unless growth is clearly weak."
    ],
    pruning: [
      pruningNote,
      pruningExtra,
      "Keep structural pruning lighter on mature trees than on young establishing trees."
    ],
    winterizing: [
      winterizingNote,
      "Protect younger trunks from mower injury, wildlife, or sunscald if the site is exposed.",
      winterExtra
    ]
  };
}

GARDENING_PLANT_GUIDES.push(...[
  buildTreeGuide({
    commonName: "White Oak",
    slug: "white-oak",
    summary: "A long-lived native shade tree valued for strong structure, wildlife support, and dependable fall interest in larger landscapes.",
    plantingSite: "full sun and reasonably deep, well-drained soil",
    plantingNote: "Choose a permanent site with ample room because White Oak matures into a broad, stately canopy.",
    maintenanceNote: "Water regularly during establishment, then deeply during prolonged dry spells.",
    pruningNote: "Prune in dormancy to build one strong leader and balanced scaffold branches.",
    winterizingNote: "Water before freeze-up if fall weather has been especially dry."
  }),
  buildTreeGuide({
    commonName: "Pin Oak",
    slug: "pin-oak",
    summary: "A fast-growing oak with a strong central form and bright fall color, often used where vertical structure and shade are both important.",
    plantingSite: "full sun with space for a tall, broad canopy and soil that is average to somewhat moist",
    plantingNote: "Pin Oak handles heavier soils better than many shade trees, but it still benefits from stable drainage.",
    maintenanceNote: "Water deeply during establishment and in extended summer drought.",
    pruningNote: "Prune in dormancy to shape young trees and lift the canopy gradually over time.",
    winterizingNote: "Give the tree a deep watering before the ground freezes if autumn has been dry."
  }),
  buildTreeGuide({
    commonName: "Bur Oak",
    slug: "bur-oak",
    summary: "A rugged native oak suited to open landscapes, valued for toughness, broad shade, and excellent wind tolerance once established.",
    plantingSite: "full sun and well-drained to average soil with plenty of long-term space",
    plantingNote: "Bur Oak establishes best when watered deeply and consistently in the first growing seasons.",
    maintenanceNote: "Water through dry periods while the tree is establishing, then only in extended drought.",
    pruningNote: "Prune in dormancy to form a clear central structure while the tree is young.",
    winterizingNote: "Water before freeze-up if the fall season has been unusually dry."
  }),
  buildTreeGuide({
    commonName: "Live Oak",
    slug: "live-oak",
    summary: "A broad evergreen oak prized for year-round structure, sweeping limbs, and strong landscape presence in warmer climates.",
    plantingSite: "full sun and well-drained soil where the canopy can spread widely with age",
    plantingNote: "Choose a site with enough room for major lateral branch development and broad surface roots.",
    maintenanceNote: "Water regularly during establishment, then only during prolonged drought once roots settle in.",
    pruningNote: "Prune in the recommended regional window to establish strong scaffold limbs early.",
    winterizingNote: "Young trees benefit from watering before rare cold snaps in dry fall weather."
  }),
  buildTreeGuide({
    commonName: "Scarlet Oak",
    slug: "scarlet-oak",
    summary: "A bold shade oak known for vivid red fall color and strong upright growth in sunny, open settings.",
    plantingSite: "full sun and well-drained soil with room for both height and spread",
    plantingNote: "Scarlet Oak performs best where drainage is reliable and the root zone is not chronically wet.",
    maintenanceNote: "Water regularly during establishment and during long summer dry periods.",
    pruningNote: "Prune in dormancy to shape the canopy and remove weak or poorly angled branches.",
    winterizingNote: "Water before freeze-up if fall has been dry."
  }),
  buildTreeGuide({
    commonName: "Swamp White Oak",
    slug: "swamp-white-oak",
    summary: "A resilient oak that handles heavier soils and seasonal moisture while still growing into a dependable, attractive shade tree.",
    plantingSite: "full sun with room for a large canopy and soil that can hold moderate moisture",
    plantingNote: "This oak tolerates heavier soils better than many broad shade trees, but it still benefits from stable drainage.",
    maintenanceNote: "Water regularly during the first seasons, especially through hot dry weather.",
    pruningNote: "Prune in dormancy to shape young trees and remove weak branch unions.",
    winterizingNote: "Water before freeze-up if autumn rainfall has been low."
  }),
  buildTreeGuide({
    commonName: "Northern Red Oak",
    slug: "northern-red-oak",
    summary: "A classic large shade oak with strong growth, broad canopy potential, and rich red fall color in cooler to temperate regions.",
    plantingSite: "full sun and well-drained soil in a permanent spacious location",
    plantingNote: "Choose a site with generous room for both height and mature canopy spread.",
    maintenanceNote: "Water deeply during establishment and through long droughts.",
    pruningNote: "Prune during dormancy to remove crossing limbs and strengthen early branch spacing.",
    winterizingNote: "Water before the ground freezes if fall has been very dry."
  }),
  buildTreeGuide({
    commonName: "Tulip Tree",
    slug: "tulip-tree",
    summary: "A fast-growing shade tree with showy tulip-like flowers and large landscape presence, best suited to open sites with room to mature.",
    plantingSite: "full sun and deep, fertile, reasonably moist soil",
    plantingNote: "Choose a site with plenty of space because Tulip Tree becomes very tall and broad over time.",
    maintenanceNote: "Water consistently during establishment and during prolonged drought.",
    pruningNote: "Prune in dormancy to establish a strong central leader and balanced framework.",
    winterizingNote: "Deep-water before freeze-up if fall has been dry."
  }),
  buildTreeGuide({
    commonName: "American Sycamore",
    slug: "american-sycamore",
    summary: "A massive native shade tree with mottled bark and strong presence, ideal for large landscapes with room for broad roots and canopy.",
    plantingSite: "full sun with generous space away from structures and hard surfaces",
    plantingNote: "Sycamore tolerates heavier soils and periodic moisture, but a site with decent drainage is still helpful.",
    maintenanceNote: "Water regularly during establishment and during extended dry spells.",
    pruningNote: "Prune in dormancy to build strong structure and remove weak or rubbing limbs.",
    winterizingNote: "Water before freeze-up if autumn has been especially dry."
  }),
  buildTreeGuide({
    commonName: "American Beech",
    slug: "american-beech",
    summary: "A handsome long-lived tree with smooth bark and elegant branching, best grown where roots can remain undisturbed over time.",
    plantingSite: "full sun to light shade in well-drained, moisture-retentive soil",
    plantingNote: "Choose a permanent site because American Beech dislikes major root disturbance once established.",
    maintenanceNote: "Keep soil evenly moist during establishment and during dry periods.",
    pruningNote: "Prune lightly in dormancy to remove dead or crossing branches and shape young trees gently.",
    winterizingNote: "Water before freeze-up if fall rainfall has been low."
  })
]);

GARDENING_PLANT_GUIDES.push(...[
  buildTreeGuide({
    commonName: "European Beech",
    slug: "european-beech",
    summary: "A refined ornamental shade tree prized for smooth bark, dense branching, and formal presence in spacious landscapes.",
    plantingSite: "full sun to light shade in fertile, well-drained soil",
    plantingNote: "Choose a site with adequate room for mature branching and a stable root environment.",
    maintenanceNote: "Water during establishment and in extended dry weather.",
    pruningNote: "Prune in dormancy to remove dead or poorly placed branches and shape lightly while young.",
    winterizingNote: "Water before the ground freezes if autumn has been very dry."
  }),
  buildTreeGuide({
    commonName: "Greenspire Linden",
    slug: "greenspire-linden",
    summary: "A strong upright linden with dependable form, fragrant summer bloom, and good performance as a structured shade tree.",
    plantingSite: "full sun and average to rich, well-drained soil",
    plantingNote: "Choose a site with room for a tall canopy and good airflow around the tree.",
    maintenanceNote: "Water during establishment and through prolonged hot dry spells.",
    pruningNote: "Prune in dormancy to preserve the strong central structure and balanced canopy.",
    winterizingNote: "Water before freeze-up if fall has been dry."
  }),
  buildTreeGuide({
    commonName: "Littleleaf Linden",
    slug: "littleleaf-linden",
    summary: "A classic shade tree with fragrant bloom, dense form, and dependable performance in sunny landscapes with room to mature.",
    plantingSite: "full sun and reasonably fertile, well-drained soil",
    plantingNote: "Give the tree enough room for mature spread and easy air movement through the canopy.",
    maintenanceNote: "Water consistently during establishment and during extended drought.",
    pruningNote: "Prune in dormancy to remove weak, rubbing, or poorly angled branches.",
    winterizingNote: "Water before freeze-up if autumn has been dry."
  }),
  buildTreeGuide({
    commonName: "American Elm",
    slug: "american-elm",
    summary: "A broad vase-shaped shade tree valued for graceful form and strong street or landscape presence where conditions allow.",
    plantingSite: "full sun and fertile, reasonably well-drained soil",
    plantingNote: "Choose a site with enough room for the characteristic vase-shaped canopy to spread fully.",
    maintenanceNote: "Water regularly during establishment and during prolonged drought.",
    pruningNote: "Prune in dormancy to develop a strong framework and remove crossing limbs.",
    winterizingNote: "Water before freeze-up if fall has been dry."
  }),
  buildTreeGuide({
    commonName: "Lacebark Elm",
    slug: "lacebark-elm",
    summary: "A durable adaptable elm with attractive exfoliating bark, often chosen for heat tolerance, urban toughness, and manageable shade.",
    plantingSite: "full sun and well-drained soil",
    plantingNote: "Choose a site with enough room for a broad rounded canopy as the tree matures.",
    maintenanceNote: "Water during establishment and through extended drought.",
    pruningNote: "Prune in dormancy to refine structure and remove weak or rubbing branches.",
    winterizingNote: "Water before the ground freezes if autumn has been especially dry."
  }),
  buildTreeGuide({
    commonName: "Hackberry",
    slug: "hackberry",
    summary: "A hardy adaptable native shade tree valued for resilience, wildlife support, and dependable performance across challenging sites.",
    plantingSite: "full sun with room for a broad mature canopy and a range of average soils",
    plantingNote: "Hackberry handles heavier ground well, but it still establishes best with deep watering and open rooting space.",
    maintenanceNote: "Water through establishment and in extended drought periods.",
    pruningNote: "Prune in dormancy to remove weak crotches and shape young trees early.",
    winterizingNote: "Water before freeze-up if fall rainfall has been low."
  }),
  buildTreeGuide({
    commonName: "Kentucky Coffeetree",
    slug: "kentucky-coffeetree",
    summary: "A bold architectural shade tree with coarse branching and strong toughness, useful where a distinctive open canopy is desired.",
    plantingSite: "full sun and well-drained to average soil",
    plantingNote: "Choose a site with enough room for a large upright canopy and winter silhouette.",
    maintenanceNote: "Water regularly during establishment, then only during prolonged drought.",
    pruningNote: "Prune in dormancy to shape young trees and remove awkward branch attachments.",
    winterizingNote: "Water before freeze-up if the season has been dry."
  }),
  buildTreeGuide({
    commonName: "London Plane Tree",
    slug: "london-plane-tree",
    summary: "A substantial shade tree with mottled bark and strong urban tolerance, best suited to broad open spaces and large streetscapes.",
    plantingSite: "full sun with plenty of room for canopy and root spread",
    plantingNote: "Use average to heavier soil with dependable drainage and avoid tight confined sites.",
    maintenanceNote: "Water during establishment and through prolonged drought.",
    pruningNote: "Prune in dormancy to build strong structure and remove weak or crowded limbs.",
    winterizingNote: "Water before freeze-up if autumn has been dry."
  }),
  buildTreeGuide({
    commonName: "European Hornbeam",
    slug: "european-hornbeam",
    summary: "A dense structured tree often used for formal plantings, screens, and upright landscape structure with dependable seasonal performance.",
    plantingSite: "full sun and well-drained, moderately fertile soil",
    plantingNote: "Choose a site with room for an upright canopy or formal clipped development if desired.",
    maintenanceNote: "Water during establishment and during extended dry spells.",
    pruningNote: "Prune in dormancy to shape the framework or maintain a formal outline.",
    winterizingNote: "Water before freeze-up if fall has been unusually dry."
  }),
  buildTreeGuide({
    commonName: "American Hornbeam",
    slug: "american-hornbeam",
    summary: "A smaller native understory tree with smooth bark and refined branching, well suited to naturalistic gardens and filtered light settings.",
    plantingSite: "part shade to full sun in richer, moisture-retentive soil",
    plantingNote: "Choose a site where the tree can develop naturally without repeated root disturbance.",
    maintenanceNote: "Keep soil evenly moist during establishment and in dry periods.",
    pruningNote: "Prune in dormancy to remove damaged or crossing branches and preserve the graceful natural branching habit.",
    winterizingNote: "Water before freeze-up if autumn has been dry."
  })
]);

GARDENING_PLANT_GUIDES.push(...[
  buildTreeGuide({
    commonName: "Allegheny Serviceberry",
    slug: "allegheny-serviceberry",
    summary: "A graceful native small tree with spring bloom, edible fruit, and strong seasonal interest for mixed landscapes and pollinator gardens.",
    plantingSite: "full sun to light shade in well-drained soil",
    plantingNote: "Serviceberries appreciate organic matter worked into the planting area and enough room for their multi-season form to develop.",
    maintenanceNote: "Water regularly during establishment and in prolonged dry weather.",
    pruningNote: "Prune in dormancy to remove dead, crossing, or overly crowded stems and thin suckers if needed.",
    winterizingNote: "Water before freeze-up when fall has been dry."
  }),
  buildTreeGuide({
    commonName: "Washington Hawthorn",
    slug: "washington-hawthorn",
    summary: "A tough flowering small tree with spring bloom, fruit, and strong seasonal interest, especially useful where wildlife value matters.",
    plantingSite: "full sun and average to well-drained soil",
    plantingNote: "Choose a site where thorny branches will not interfere with paths or work areas as the tree matures.",
    maintenanceNote: "Water during establishment and during extended drought.",
    pruningNote: "Prune in dormancy to remove dead, crossing, or damaged branches and shape young trees early.",
    winterizingNote: "Water before freeze-up if fall has been dry."
  }),
  buildTreeGuide({
    commonName: "Golden Chain Tree",
    slug: "golden-chain-tree",
    summary: "A showy ornamental tree prized for long dangling yellow flower chains, best used as a specimen where bloom can be fully appreciated.",
    plantingSite: "full sun and sharply drained soil",
    plantingNote: "Choose a site with good airflow and protection from harsh reflected heat so bloom and branch health stay strong.",
    maintenanceNote: "Water during establishment and during extended dry weather.",
    pruningNote: "Prune in dormancy to remove dead or crossing branches and shape lightly while young.",
    winterizingNote: "Water before freeze-up if autumn has been dry."
  }),
  buildTreeGuide({
    commonName: "Goldenraintree",
    slug: "goldenraintree",
    summary: "A sun-loving ornamental tree with yellow summer flowers and decorative seed pods, useful as a smaller specimen in warm bright landscapes.",
    plantingSite: "full sun and well-drained soil",
    plantingNote: "Choose a site with room for a rounded canopy and strong ornamental display.",
    maintenanceNote: "Water through establishment and during prolonged drought.",
    pruningNote: "Prune in dormancy to shape the young tree and remove awkwardly attached branches.",
    winterizingNote: "Water before freeze-up if autumn has stayed dry."
  }),
  buildTreeGuide({
    commonName: "Kousa Dogwood",
    slug: "kousa-dogwood",
    summary: "A refined flowering dogwood with strong spring bloom, attractive form, and excellent specimen value in smaller landscapes.",
    plantingSite: "part shade to morning sun in rich, well-drained soil",
    plantingNote: "Choose a sheltered site where bloom, fruit, and layered branching can all be appreciated without heat stress.",
    maintenanceNote: "Water regularly during establishment and during dry summer weather.",
    pruningNote: "Prune in dormancy to remove dead, crossing, or damaged branches and shape lightly.",
    winterizingNote: "Water before freeze-up if fall has been dry."
  }),
  buildTreeGuide({
    commonName: "Yoshino Cherry",
    slug: "yoshino-cherry",
    summary: "A beloved ornamental cherry celebrated for cloud-like spring bloom and graceful branching in specimen plantings.",
    plantingSite: "full sun and fertile, well-drained soil with good airflow",
    plantingNote: "Avoid low frost pockets if spring bloom timing is especially important in your area.",
    maintenanceNote: "Water regularly during establishment and in dry spells during summer.",
    pruningNote: "Prune after flowering or in dormancy to remove dead, damaged, or crossing branches.",
    winterizingNote: "Water before freeze-up if autumn has been dry."
  }),
  buildTreeGuide({
    commonName: "Flowering Plum",
    slug: "flowering-plum",
    summary: "A colorful ornamental plum valued for spring blossom and rich foliage, useful as a specimen in moderate-sized sunny landscapes.",
    plantingSite: "full sun and well-drained soil",
    plantingNote: "Choose a site with good airflow because ornamental plums benefit from reduced foliage stress and cleaner canopies.",
    maintenanceNote: "Water during establishment and during extended drought.",
    pruningNote: "Prune in dormancy or after flowering to remove dead, rubbing, or crowded branches.",
    winterizingNote: "Water before freeze-up if autumn has been dry."
  }),
  buildTreeGuide({
    commonName: "Jane Magnolia",
    slug: "jane-magnolia",
    summary: "A compact flowering magnolia chosen for later spring bloom and manageable size in ornamental garden spaces.",
    plantingSite: "full sun to part shade in rich, well-drained soil",
    plantingNote: "Choose a site protected from harsh wind so flowers and buds are less stressed in spring.",
    maintenanceNote: "Water regularly during establishment and through dry periods.",
    pruningNote: "Prune lightly after flowering to remove dead or awkward branches.",
    winterizingNote: "Water before freeze-up if autumn is dry."
  }),
  buildTreeGuide({
    commonName: "Star Magnolia",
    slug: "star-magnolia",
    summary: "A small ornamental magnolia with abundant starry spring blooms, ideal for highlight planting near entries and patios.",
    plantingSite: "full sun to part shade in rich, well-drained soil",
    plantingNote: "Choose a site sheltered from harsh late-winter wind if possible so flower buds stay in better shape.",
    maintenanceNote: "Water regularly during establishment and during dry weather.",
    pruningNote: "Prune lightly after bloom to remove damaged or crossing branches.",
    winterizingNote: "Water before freeze-up if autumn has been dry."
  }),
  buildTreeGuide({
    commonName: "Saucer Magnolia",
    slug: "saucer-magnolia",
    summary: "A dramatic flowering magnolia with large goblet blooms, best used as a spring focal tree in sheltered ornamental settings.",
    plantingSite: "full sun to part shade in rich, well-drained soil",
    plantingNote: "Choose a site with room for a spreading canopy and some protection from severe spring wind.",
    maintenanceNote: "Water regularly during establishment and during long dry spells.",
    pruningNote: "Prune only lightly after flowering to remove damaged or crossing branches.",
    winterizingNote: "Water before freeze-up when fall has been dry."
  })
]);

GARDENING_PLANT_GUIDES.push(...[
  buildTreeGuide({
    commonName: "Jacaranda Tree",
    slug: "jacaranda-tree",
    summary: "A striking ornamental tree known for ferny foliage and vivid violet bloom, best used in warm sheltered landscapes where its airy canopy can stand out.",
    plantingSite: "full sun and sharply drained soil in the warmest protected part of the landscape",
    plantingNote: "Choose a site with reflected warmth and protection from strong cold wind so young growth is less stressed.",
    maintenanceNote: "Water regularly during establishment, then reduce frequency and let the soil surface dry slightly between deep soakings.",
    pruningNote: "Prune lightly while dormant or after bloom to remove weak, crossing, or frost-damaged branches and build sound structure.",
    winterizingNote: "Protect younger trees during cold snaps and mulch the root zone lightly before winter in marginal climates."
  }),
  buildTreeGuide({
    commonName: "Chaste Tree",
    slug: "chaste-tree",
    summary: "A heat-loving flowering small tree with long summer bloom spikes, especially useful in sunny low-water gardens and pollinator-focused designs.",
    plantingSite: "full sun and well-drained soil",
    plantingNote: "Give the tree a bright open site so it can flower heavily and dry quickly after rain.",
    maintenanceNote: "Water during establishment and only occasionally once rooted, especially in lean or drought-prone soils.",
    pruningNote: "Prune in late winter or early spring to shape the plant and remove winter dieback or weak shoots.",
    winterizingNote: "Mulch lightly around the root zone in colder areas and wait until spring to remove any cold-damaged stems."
  }),
  buildTreeGuide({
    commonName: "Little Gem Magnolia",
    slug: "little-gem-magnolia",
    summary: "A compact evergreen magnolia with glossy foliage and creamy blooms, well suited to smaller specimen spaces and sheltered entry plantings.",
    plantingSite: "full sun to part shade in rich, well-drained soil",
    plantingNote: "Choose a sheltered site with room for dense evergreen growth and avoid exposed drying winter wind.",
    maintenanceNote: "Keep soil evenly moist through establishment and refresh mulch as needed to moderate root-zone temperature.",
    pruningNote: "Prune lightly after flowering to remove damaged or awkward branches while preserving the natural pyramidal form.",
    winterizingNote: "Water before freeze-up in dry autumns and protect young plants from harsh winter wind if the site is exposed."
  }),
  buildTreeGuide({
    commonName: "Italian Cypress",
    slug: "italian-cypress",
    summary: "A narrow columnar evergreen used for strong vertical accents, formal plantings, and warm-climate screening where sharp drainage is available.",
    plantingSite: "full sun and sharply drained soil",
    plantingNote: "Choose a bright open site with good airflow and avoid low wet areas that stay saturated in winter.",
    maintenanceNote: "Water regularly in the first growing seasons, then deeply but infrequently once the roots are established.",
    pruningNote: "Prune minimally, removing only dead or broken growth and avoiding cuts into older bare wood.",
    winterizingNote: "Keep winter soil from staying soggy and brush off heavy snow loads if they begin to spread the narrow form."
  }),
  buildTreeGuide({
    commonName: "Eastern White Pine",
    slug: "eastern-white-pine",
    summary: "A graceful soft-needled evergreen with a tall airy habit, valued for screening, specimen use, and a natural woodland character.",
    plantingSite: "full sun to light shade in moist, well-drained soil",
    plantingNote: "Give this pine room for its mature height and spread and avoid compacted or heavily salted roadside sites.",
    maintenanceNote: "Water deeply during establishment and during extended drought, especially in hotter open landscapes.",
    pruningNote: "Prune only lightly, removing dead, damaged, or rubbing branches and avoiding heavy cuts into older wood.",
    winterizingNote: "Water before freeze-up in dry falls and protect younger trunks from wildlife injury where pressure is high."
  }),
  buildTreeGuide({
    commonName: "Austrian Pine",
    slug: "austrian-pine",
    summary: "A rugged evergreen pine with dense dark needles, useful for screens, wind buffering, and tougher landscape sites with sun exposure.",
    plantingSite: "full sun and well-drained soil",
    plantingNote: "Choose a site with plenty of sun and enough clearance for a broad mature canopy.",
    maintenanceNote: "Water through establishment and in prolonged drought, but avoid keeping the root zone constantly wet.",
    pruningNote: "Prune lightly to remove damaged or awkward growth and shape young trees sparingly if needed.",
    winterizingNote: "Water before freeze-up when autumn has been dry and keep mulch shallow around the root zone."
  }),
  buildTreeGuide({
    commonName: "Ponderosa Pine",
    slug: "ponderosa-pine",
    summary: "A tall western pine with long needles and a strong open habit, best suited to sunny landscapes where a large drought-tolerant tree is needed.",
    plantingSite: "full sun and sharply drained soil",
    plantingNote: "Use a site with excellent drainage and room for a high broad canopy to develop over time.",
    maintenanceNote: "Water deeply during establishment, then reduce to occasional deep watering during long dry periods.",
    pruningNote: "Prune sparingly, removing dead or storm-damaged limbs and avoiding heavy cuts into older wood.",
    winterizingNote: "Keep winter soils well drained and water before freeze-up if autumn has been unusually dry."
  }),
  buildTreeGuide({
    commonName: "Blue Spruce",
    slug: "blue-spruce",
    summary: "A bold evergreen conifer known for blue-gray needles and strong specimen presence, especially in sunny open settings.",
    plantingSite: "full sun and well-drained soil with good airflow",
    plantingNote: "Choose a bright site with room for lower branching and avoid cramped areas where airflow stays poor.",
    maintenanceNote: "Water deeply during establishment and in extended dry weather, especially during summer heat.",
    pruningNote: "Prune only to remove damaged branches or to correct structure while growth is young.",
    winterizingNote: "Water before freeze-up if fall has been dry and brush off heavy wet snow if branch spread becomes severe."
  }),
  buildTreeGuide({
    commonName: "Norway Spruce",
    slug: "norway-spruce",
    summary: "A fast-growing evergreen with a broad pyramidal habit, useful for windbreaks, privacy screens, and large specimen plantings.",
    plantingSite: "full sun and average to well-drained soil",
    plantingNote: "Allow adequate space for a large mature footprint and avoid repeatedly disturbed root zones.",
    maintenanceNote: "Water during establishment and during long droughts, especially in exposed windy sites.",
    pruningNote: "Prune minimally, removing only dead, broken, or poorly positioned branches while trees are young.",
    winterizingNote: "Water before freeze-up if needed and inspect for heavy snow buildup on younger plants."
  }),
  buildTreeGuide({
    commonName: "Serbian Spruce",
    slug: "serbian-spruce",
    summary: "A refined narrow evergreen with two-toned needles, excellent for tighter screening and elegant specimen use where vertical form matters.",
    plantingSite: "full sun to light shade in well-drained soil",
    plantingNote: "Choose a bright site with room for a narrow but tall mature form and avoid standing winter moisture.",
    maintenanceNote: "Water consistently while establishing and during prolonged dry spells.",
    pruningNote: "Prune lightly only as needed to remove damaged branches or maintain a strong single leader.",
    winterizingNote: "Water before freeze-up in dry falls and keep mulch shallow so the trunk base stays exposed."
  }),
  buildTreeGuide({
    commonName: "Eastern Red Cedar",
    slug: "eastern-red-cedar",
    summary: "A hardy native juniper-form evergreen useful for privacy, habitat value, and year-round structure in sunny landscapes.",
    plantingSite: "full sun and well-drained soil",
    plantingNote: "Choose an open sunny site and allow enough room for the plant's natural dense branching and mature spread.",
    maintenanceNote: "Water through establishment and only occasionally later except in extended drought.",
    pruningNote: "Prune lightly to remove dead or broken wood and avoid cutting deeply into older interior growth.",
    winterizingNote: "Water before freeze-up if autumn has been dry and protect young plants from salt spray if near roads."
  }),
  buildTreeGuide({
    commonName: "Incense Cedar",
    slug: "incense-cedar",
    summary: "A stately evergreen with aromatic foliage and a refined conical habit, best for larger sunny landscapes with well-drained soil.",
    plantingSite: "full sun and sharply drained to well-drained soil",
    plantingNote: "Choose a site with strong drainage and enough space for a tall conical evergreen to mature without crowding.",
    maintenanceNote: "Water deeply during establishment and during prolonged dry weather, then reduce frequency as roots mature.",
    pruningNote: "Prune minimally, removing only damaged branches or lightly correcting structure when young.",
    winterizingNote: "Water before freeze-up if autumn has been dry and avoid winter soil saturation around the root zone."
  }),
  buildTreeGuide({
    commonName: "Douglas Fir",
    slug: "douglas-fir",
    summary: "A classic evergreen conifer with strong screening and specimen value, especially useful where a tall native-style forest tree is desired.",
    plantingSite: "full sun to light shade in deep, well-drained soil",
    plantingNote: "Provide room for substantial height and spread and avoid hot paved pockets that stress the root zone.",
    maintenanceNote: "Water regularly during establishment and deeply during long summer droughts.",
    pruningNote: "Prune only lightly, focusing on damaged or awkwardly attached branches and maintaining a strong central leader.",
    winterizingNote: "Water before freeze-up if needed and protect young trunks from animal rubbing where it is common."
  }),
  buildTreeGuide({
    commonName: "Deodar Cedar",
    slug: "deodar-cedar",
    summary: "A graceful evergreen cedar with sweeping branch tips, prized as a specimen in mild climates and larger sunny landscapes.",
    plantingSite: "full sun and well-drained soil",
    plantingNote: "Choose a prominent site with good drainage and room for a broad elegant canopy over time.",
    maintenanceNote: "Water during establishment and during extended dry spells, especially in the first few years.",
    pruningNote: "Prune minimally, removing damaged growth or correcting structure only while branches are young.",
    winterizingNote: "Water before freeze-up in dry autumns and avoid winter root-zone saturation."
  }),
  buildTreeGuide({
    commonName: "Atlas Cedar",
    slug: "atlas-cedar",
    summary: "A dramatic evergreen cedar with architectural branching and strong specimen value, best used as a focal tree in open sun.",
    plantingSite: "full sun and sharply drained soil",
    plantingNote: "Choose a site where the branch structure can be appreciated from a distance and roots will not sit wet in winter.",
    maintenanceNote: "Water consistently during establishment and then deeply but infrequently during dry periods.",
    pruningNote: "Prune sparingly to preserve the natural form, removing only damaged or poorly placed branches.",
    winterizingNote: "Water before freeze-up if autumn has been dry and protect younger trees from heavy snow distortion if needed."
  }),
  buildTreeGuide({
    commonName: "Canary Island Pine",
    slug: "canary-island-pine",
    summary: "A bold long-needled pine with a tropical-looking outline, suited to bright mild-climate landscapes where a distinctive evergreen is wanted.",
    plantingSite: "full sun and sharply drained soil",
    plantingNote: "Use a warm bright site with excellent drainage and enough room for height and mature spread.",
    maintenanceNote: "Water regularly while establishing, then shift to occasional deep soakings during prolonged dry weather.",
    pruningNote: "Prune lightly only to remove dead or awkward branches and avoid unnecessary cuts into older wood.",
    winterizingNote: "Protect from severe cold in marginal climates and water before freeze-up if fall has been dry."
  }),
  buildTreeGuide({
    commonName: "Japanese Black Pine",
    slug: "japanese-black-pine",
    summary: "A sculptural evergreen pine with rugged bark and strong character, ideal for specimen use in sunny, well-drained landscapes.",
    plantingSite: "full sun and sharply drained soil",
    plantingNote: "Choose a bright open site with strong drainage so roots stay healthy and branching develops densely.",
    maintenanceNote: "Water during establishment and during long droughts, allowing the surface to dry slightly between deep soakings.",
    pruningNote: "Prune in stages while the tree is young to shape structure, removing damaged growth and thinning only as needed.",
    winterizingNote: "Water before freeze-up if autumn has been dry and protect younger plants from winter burn in exposed sites."
  })
]);

function slugifyGuideName(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getPlantDatabaseEntryByName(name) {
  if (!Array.isArray(window.GARDENING_PLANTS)) {
    return null;
  }

  return window.GARDENING_PLANTS.find((entry) => entry.commonName === name) || null;
}

function getPlantDatabaseEntryBySlug(slug) {
  if (!Array.isArray(window.GARDENING_PLANTS)) {
    return null;
  }

  return window.GARDENING_PLANTS.find((entry) => slugifyGuideName(entry.commonName) === slug) || null;
}

function hasGuideSection(items) {
  return Array.isArray(items) && items.length > 0;
}

function lowerText(value, fallback) {
  return value ? String(value).toLowerCase() : fallback;
}

function listOptions(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatList(values) {
  if (!values.length) {
    return "";
  }

  if (values.length === 1) {
    return values[0];
  }

  if (values.length === 2) {
    return `${values[0]} and ${values[1]}`;
  }

  return `${values.slice(0, -1).join(", ")}, and ${values[values.length - 1]}`;
}

function isIndoorPlant(plant) {
  return plant.setting === "Indoor" || plant.region === "Indoor Anywhere" || plant.category === "Houseplant";
}

function isWoodyPlant(plant) {
  return plant.category === "Tree" || plant.category === "Shrub";
}

function isShrubPlant(plant) {
  return plant.category === "Shrub";
}

function isEdiblePlant(plant) {
  return plant.category === "Edible" || plant.category === "Herb";
}

function isHerbPlant(plant) {
  return plant.category === "Herb";
}

function getFruitProfile(plant) {
  const name = lowerText(plant.commonName, "");

  if (/fiddle leaf fig|burro tail lemon|peperomia watermelon|lemon balm|lemon grass|lemon verbena|tea olive|heuchera lime|orange calendula|calendula orange|orange glow|flowering plum|purple leaf plum|yoshino cherry|japanese quince/.test(name)) {
    return null;
  }

  if (/\b(?:meyer lemon|eureka lemon|bearss lime|key lime|orange valencia|orange cara cara|calamondin orange|grapefruit ruby red|lemon variegated pink)\b/.test(name)) {
    return { type: "citrus", label: "citrus fruit" };
  }

  if (/\b(?:blueberry|huckleberry|gooseberry|currant|elderberry|raspberry|blackberry|strawberry|serviceberry|golden currant)\b/.test(name)) {
    return { type: "berry", label: "berry crop" };
  }

  if (/\b(?:kiwi|grape)\b/.test(name)) {
    return { type: "vine-fruit", label: "fruiting vine" };
  }

  if (/\b(?:watermelon|cantaloupe|canary melon|melon)\b/.test(name)) {
    return { type: "melon", label: "melon crop" };
  }

  if (/\b(?:apple|pear|peach|plum|cherry|apricot|nectarine|quince)\b/.test(name)) {
    return { type: "orchard", label: "orchard fruit" };
  }

  if (/\b(?:persimmon|pomegranate|mulberry|fig|barbados cherry|cape gooseberry|ground cherry|surinam cherry|pineapple guava|prickly pear|olive|natal plum)\b/.test(name)) {
    return { type: "specialty-fruit", label: "specialty fruit" };
  }

  return null;
}

function isFruitPlant(plant) {
  return Boolean(getFruitProfile(plant));
}

function isPrivacyPlant(plant) {
  return lowerText(plant.purpose, "") === "privacy";
}

function getWateringPhrase(plant) {
  switch (plant.water) {
    case "Low":
      return "deep but infrequent watering";
    case "High":
      return "consistent moisture and regular deep watering";
    case "Moderate":
      return "steady moderate watering";
    default:
      return "the moisture pattern it prefers";
  }
}

function getDrainagePhrase(plant) {
  switch (plant.drainage) {
    case "Well-Drained":
      return "fast-draining soil";
    case "Moist":
      return "soil that stays evenly moist without becoming stagnant";
    case "Average":
      return "evenly prepared soil that does not stay compacted";
    default:
      return "soil conditions that match its root needs";
  }
}

function getSitePhrase(plant) {
  const sunlight = lowerText(plant.sunlight, "the light it prefers");
  const soil = lowerText(plant.soil, "prepared soil");
  const setting = lowerText(plant.setting, "its preferred setting");
  return `${sunlight}, ${soil} soil, and ${setting} growing conditions`;
}

function getShrubPruningTiming(plant) {
  if (plant.seasonality === "Spring") {
    return "Prune right after flowering if you want to preserve next season's flower buds.";
  }

  if (plant.seasonality === "Summer" || plant.seasonality === "Fall") {
    return "Do heavier shaping in late winter or very early spring before strong new growth begins.";
  }

  return "Time pruning around the plant's bloom cycle so you do not remove the strongest ornamental display.";
}

function getShrubProfile(plant) {
  if (!isShrubPlant(plant) || getFruitProfile(plant)) {
    return null;
  }

  const name = lowerText(plant.commonName, "");
  const seasonality = plant.seasonality || "";
  const purpose = lowerText(plant.purpose, "");

  if (purpose === "groundcover") {
    return { type: "groundcover-shrub", label: "groundcover shrub" };
  }

  if (purpose === "pollinator garden" && plant.water === "Low") {
    return { type: "dry-pollinator-shrub", label: "dry pollinator shrub" };
  }

  if (
    isPrivacyPlant(plant) &&
    (seasonality === "Year-Round Interest" || /laurel|boxwood|inkberry|ligustrum|photinia|pittosporum|yew|holly|mahonia|skimmia|sarcococca|aucuba|fatsia|osmanthus|tea olive|camellia|wax myrtle|rhamnus|euonymus/.test(name))
  ) {
    return { type: "evergreen-privacy-shrub", label: "evergreen privacy shrub" };
  }

  if (seasonality === "Spring") {
    return { type: "spring-flowering-shrub", label: "spring flowering shrub" };
  }

  if (seasonality === "Summer" || seasonality === "Fall") {
    return { type: "summer-flowering-shrub", label: "summer flowering shrub" };
  }

  if (seasonality === "Winter") {
    return { type: "winter-interest-shrub", label: "winter interest shrub" };
  }

  if (purpose === "container accent" || purpose === "foundation planting") {
    return { type: "specimen-shrub", label: "specimen shrub" };
  }

  return { type: "general-shrub", label: "landscape shrub" };
}

function getHouseplantProfile(plant) {
  if (!isIndoorPlant(plant) || getFruitProfile(plant) || isShrubPlant(plant)) {
    return null;
  }

  const name = lowerText(plant.commonName, "");
  const purpose = lowerText(plant.purpose, "");

  if (plant.category === "Succulent" || /cactus|succulent|lithops|haworthia|gasteria|jade|moonstone|tiger jaws|living stone|living stones|ghost plant|kalanchoe|cotyledon|rhipsalis/.test(name)) {
    return { type: "succulent-houseplant", label: "succulent houseplant" };
  }

  if (/fern/.test(name)) {
    return { type: "fern-houseplant", label: "fern houseplant" };
  }

  if (/palm|bird of paradise|banana|fiddle leaf fig|rubber plant|norfolk island pine|dracaena|snake plant|zz plant|dieffenbachia|croton|alocasia/.test(name) || plant.growthHabit === "Upright") {
    return { type: "statement-houseplant", label: "statement houseplant" };
  }

  if (/african violet|anthurium|peace lily|clivia|goldfish plant|lipstick plant|oxalis|holiday cactus|christmas cactus/.test(name)) {
    return { type: "flowering-houseplant", label: "flowering houseplant" };
  }

  if (/hoya|pothos|philodendron heartleaf|swiss cheese vine|string of hearts|string of pearls|string of dolphins|silver satin pothos|ceropegia|monstera|prayer plant|fishbone cactus|ric rac cactus|burro tail|burro's tail|donkey tail/.test(name) || plant.growthHabit === "Vining" || plant.growthHabit === "Trailing") {
    return { type: "trailing-houseplant", label: "trailing houseplant" };
  }

  if (/parlor palm|areca palm/.test(name)) {
    return { type: "palm-houseplant", label: "palm houseplant" };
  }

  if (purpose === "container accent") {
    return { type: "accent-houseplant", label: "accent houseplant" };
  }

  return { type: "foliage-houseplant", label: "foliage houseplant" };
}

function buildHouseplantSummary(plant, houseplantProfile) {
  switch (houseplantProfile.type) {
    case "succulent-houseplant":
      return `${plant.commonName} is a succulent houseplant valued for compact structure and low-water indoor care, performing best when strong light, fast drainage, and a dry-down cycle keep roots from sitting wet.`;
    case "fern-houseplant":
      return `${plant.commonName} is a fern houseplant grown for soft lush texture, performing best when humidity, gentle moisture, and protection from harsh direct sun stay consistent indoors.`;
    case "statement-houseplant":
      return `${plant.commonName} is a statement houseplant grown for height, bold foliage, or architectural presence, performing best when light direction, container size, and steady watering support balanced upright growth.`;
    case "flowering-houseplant":
      return `${plant.commonName} is a flowering houseplant grown for repeat bloom and polished indoor display, performing best when moisture, feeding, and light timing stay balanced enough to support buds as well as foliage.`;
    case "trailing-houseplant":
      return `${plant.commonName} is a trailing houseplant grown for hanging, draping, or climbing growth, performing best when stems are guided, trimmed, and given enough light to stay full instead of stringy.`;
    case "palm-houseplant":
      return `${plant.commonName} is a palm-style houseplant grown for soft vertical texture and room-scale greenery, performing best when roots stay evenly moist and foliage is protected from dry indoor stress.`;
    case "accent-houseplant":
      return `${plant.commonName} is an accent houseplant used for containers or feature placement indoors, performing best when its light and watering rhythm are matched closely to the space where it is displayed.`;
    default:
      return `${plant.commonName} is a foliage houseplant valued for reliable indoor greenery, performing best when container drainage, humidity, and light levels stay in balance through the year.`;
  }
}

function buildHouseplantSeedingSection(plant, houseplantProfile) {
  switch (houseplantProfile.type) {
    case "succulent-houseplant":
      return [
        `Most growers begin ${plant.commonName} from offsets, cuttings, pads, or divisions rather than seed because that is faster and more dependable indoors.`,
        "Let cut ends callus when appropriate before potting so rot is less likely during the first watering cycle.",
        "Start new pieces in a fast-draining mix and avoid oversized pots while roots are still shallow."
      ];
    case "fern-houseplant":
      return [
        `Most gardeners start ${plant.commonName} from divisions or nursery plants because spores are slow and fussy for typical indoor growing.`,
        "Choose starts with multiple healthy crowns or fronds so the plant fills out more quickly in the pot.",
        "Move divisions into a moisture-retentive but airy mix before the roots dry or fronds collapse."
      ];
    case "statement-houseplant":
      return [
        `Start ${plant.commonName} from a healthy rooted plant rather than seed so size and indoor impact develop much faster.`,
        "Choose stock with balanced top growth and roots that are active but not tightly circling the pot.",
        "Give new plants a short acclimation period before exposing them to brighter light or a new room position."
      ];
    case "flowering-houseplant":
      return [
        `Most gardeners begin ${plant.commonName} from nursery plants, divisions, or cuttings because flowering houseplants are easier to keep true and bloom-ready that way.`,
        "Pick compact healthy plants with developing buds or strong crowns rather than overgrown stressed material.",
        "Keep new plants stable after purchase so bud drop is less likely while they adjust to indoor conditions."
      ];
    case "trailing-houseplant":
      return [
        `Start ${plant.commonName} from rooted cuttings or small nursery plants so trailing stems can be directed early.`,
        "Pot starts into a container that supports hanging, shelving, or a climbing support before the stems become awkward.",
        "Pinch or guide early growth so the plant branches and fills in instead of producing only a few long runners."
      ];
    case "palm-houseplant":
      return [
        `Most growers begin ${plant.commonName} from nursery plants because palms are slow from seed and take time to become attractive indoors.`,
        "Choose a plant with multiple healthy fronds and a root system that is active but not badly congested.",
        "Let the plant acclimate gradually to lower indoor light if it came from brighter nursery conditions."
      ];
    case "accent-houseplant":
      return [
        `Start ${plant.commonName} from a healthy nursery plant or rooted cutting so the decorative effect is immediate and the container looks intentional.`,
        "Choose a size that matches the final display pot instead of forcing a tiny plant to disappear or an oversized one to stay root-bound.",
        "Settle it into its display space gently before making more adjustments to watering or light."
      ];
    default:
      return [
        `Most gardeners start ${plant.commonName} from a rooted plant, cutting, or division rather than seed so growth is faster and more reliable.`,
        "If starting from seed, use a sterile seed-starting mix, warm temperatures, and bright indirect light until seedlings are sturdy.",
        "Pot young starts into containers with drainage as soon as roots hold the mix together without becoming crowded."
      ];
  }
}

function buildHouseplantPlantingSection(plant, houseplantProfile) {
  switch (houseplantProfile.type) {
    case "succulent-houseplant":
      return [
        `Pot ${plant.commonName} into a gritty fast-draining mix and always use a container with strong drainage holes.`,
        "Keep the crown above the soil line and avoid burying stems or leaves that can rot if they stay in contact with damp mix.",
        "Place the plant in the brightest indoor position it can handle and wait to water until the first dry-down cycle is due."
      ];
    case "fern-houseplant":
      return [
        `Pot ${plant.commonName} into an airy moisture-retentive mix that stays evenly damp without turning soggy or compacted.`,
        "Keep the crown level with the surface and avoid pressing soil so tightly that delicate feeder roots struggle for oxygen.",
        "Place the fern in bright indirect light with better humidity before expecting lush full frond growth."
      ];
    case "statement-houseplant":
      return [
        `Pot ${plant.commonName} into a stable container that supports height and lets excess water drain away cleanly.`,
        "Use a mix that balances airflow and moisture retention, then set the plant at the same depth it was growing before.",
        "Position it where light comes from a consistent direction so the plant can build upright balanced growth rather than leaning hard toward the window."
      ];
    case "flowering-houseplant":
      return [
        `Pot ${plant.commonName} into a well-drained indoor mix that still holds enough moisture to support bud development and bloom.`,
        "Choose a pot only slightly larger than the current root ball because many flowering houseplants bloom better when not over-potted.",
        "Place it in the brightest appropriate light for the plant so buds hold and new flowering cycles are more reliable."
      ];
    case "trailing-houseplant":
      return [
        `Plant ${plant.commonName} in a hanging, shelf, or support setup that matches how you want the stems to grow from the start.`,
        "Use a loose indoor mix with drainage and guide the earliest stems so the plant fills out evenly rather than tangling in one direction.",
        "Set the container where light reaches the whole canopy, not just the crown, so trailing growth stays full instead of bare near the pot."
      ];
    case "palm-houseplant":
      return [
        `Pot ${plant.commonName} into a container with drainage and an airy mix that can stay evenly moist without going stagnant.`,
        "Keep the root flare and cane or stem bases at the same depth they were growing before and avoid planting the palm too deeply.",
        "Give it enough room from walls or heating vents that fronds do not rub, scorch, or dry out unevenly."
      ];
    case "accent-houseplant":
      return [
        `Pot ${plant.commonName} into a display container with drainage or a hidden nursery pot system so decorative styling does not compromise root health.`,
        "Match the pot size to the plant's root system and mature look instead of choosing only by appearance.",
        "Place it where light supports both plant health and the visual role you want the container to play indoors."
      ];
    default:
      return [
        `Pot ${plant.commonName} into a loose indoor mix that matches its ${getDrainagePhrase(plant)} preference and always use a container with drainage holes.`,
        "Keep the plant in a snug but not cramped pot, setting the crown at the same level it was previously growing.",
        `Place it where ${lowerText(plant.sunlight, "appropriate light")} can be maintained consistently, then water thoroughly once so the root ball settles into the new mix.`
      ];
  }
}

function buildHouseplantMaintenanceSection(plant, houseplantProfile) {
  switch (houseplantProfile.type) {
    case "succulent-houseplant":
      return [
        `Maintain ${plant.commonName} by watering deeply but only after the mix has dried well, because most succulent losses indoors come from staying too wet.`,
        "Keep the plant bright, rotate it occasionally, and avoid rich frequent feeding that can create weak stretched growth.",
        "Watch for wrinkling, collapse, or stem softness so you can correct watering and light before rot or etiolation sets in."
      ];
    case "fern-houseplant":
      return [
        `Maintain ${plant.commonName} with evenly moist soil, gentle feeding, and higher humidity than the average dry room can offer on its own.`,
        "Trim browned fronds at the base and rinse foliage occasionally so dust and dry edges do not build up.",
        "Check moisture often in warm rooms because ferns decline quickly when they swing between soggy and bone dry."
      ];
    case "statement-houseplant":
      return [
        `Maintain ${plant.commonName} with a steady watering rhythm that matches its light level and keeps large leaves or stems growing evenly.`,
        "Rotate the plant for balanced shape, wipe foliage clean, and feed lightly during active growth so big leaves stay attractive instead of dusty or undersized.",
        "Watch for leaning, stalled new leaves, or lower-leaf drop so you can adjust light, root space, or watering before the plant loses presence."
      ];
    case "flowering-houseplant":
      return [
        `Maintain ${plant.commonName} with consistent moisture and light because flowering houseplants often drop buds when conditions swing too abruptly.`,
        "Feed lightly during active bloom cycles and remove spent flowers so the plant keeps directing energy into new buds and clean foliage.",
        "Watch for bud drop, faded bloom, or leaf yellowing so you can correct crowding, low light, or uneven watering early."
      ];
    case "trailing-houseplant":
      return [
        `Maintain ${plant.commonName} by keeping stems actively growing but not over-watered, adjusting the schedule as light levels change through the year.`,
        "Turn or reposition the plant so one side does not become dense while the other stretches thinly toward the light.",
        "Pinch and reroot healthy cuttings when needed so the pot stays full from the top instead of becoming bare at the crown."
      ];
    case "palm-houseplant":
      return [
        `Maintain ${plant.commonName} with even moisture, gentle feeding, and room humidity that keeps frond tips from burning back.`,
        "Avoid letting the root ball go bone dry, but also do not leave water trapped in saucers where palm roots can sour.",
        "Trim only fully spent fronds and leave partly green ones to keep the plant feeding itself strongly."
      ];
    case "accent-houseplant":
      return [
        `Maintain ${plant.commonName} with enough attention that it keeps its polished display value, especially if it lives in a decorative container or entry spot.`,
        "Adjust watering to the real root zone instead of the outer cachepot or décor layer so appearance does not mislead your care routine.",
        "Keep foliage clean and the presentation balanced because accent plants are judged as much by finish as by growth."
      ];
    default:
      return [
        `Maintain ${plant.commonName} by matching its watering schedule to light levels, letting the mix dry only as much as this plant's moisture preference allows.`,
        "Rotate the container for even growth, wipe or rinse foliage occasionally, and feed lightly during active spring and summer growth.",
        "Watch for legginess, stalled growth, or edge browning so you can correct light, humidity, or root-space issues before the plant declines."
      ];
  }
}

function buildHouseplantPruningSection(plant, houseplantProfile) {
  switch (houseplantProfile.type) {
    case "succulent-houseplant":
      return [
        `Prune ${plant.commonName} lightly, removing only damaged growth, stretched stems, or offsets you want to replant.`,
        "Take cuts cleanly and let succulent tissues dry or callus when appropriate before watering heavily again.",
        "Use pruning mainly to control shape or propagate new plants, not as a substitute for giving stronger light."
      ];
    case "fern-houseplant":
      return [
        `Trim browned, broken, or exhausted fronds of ${plant.commonName} back to the base so fresh growth can replace them cleanly.`,
        "Avoid snipping only the tips repeatedly if whole fronds are failing; full removal often looks better and helps the plant reset.",
        "Divide or thin crowded crowns at repotting time instead of hacking through the middle of an active fern."
      ];
    case "statement-houseplant":
      return [
        `Prune ${plant.commonName} to remove damaged leaves, control height, and keep the silhouette balanced from several angles in the room.`,
        "Make cuts at natural nodes or leaf bases so the plant can respond with cleaner regrowth instead of ragged stubs.",
        "Use pruning sparingly and pair it with better light if the real problem is stretching rather than excess healthy size."
      ];
    case "flowering-houseplant":
      return [
        `Prune ${plant.commonName} by removing spent flowers and tired stems promptly so the plant stays tidy and ready for the next bloom cycle.`,
        "Pinch or trim lightly to encourage branching where the plant responds well, but avoid cutting off developing buds accidentally.",
        "Do heavier shaping after a bloom cycle finishes rather than while the plant is carrying its main display."
      ];
    case "trailing-houseplant":
      return [
        `Trim ${plant.commonName} regularly to keep the pot full, the vines balanced, and the stem nodes branching close to the container.`,
        "Cut just above healthy nodes and reroot suitable pieces back into the same pot if the crown is thinning out.",
        "Guide longer stems onto supports or around the display space before they kink, tangle, or shade the plant unevenly."
      ];
    case "palm-houseplant":
      return [
        `Prune ${plant.commonName} very lightly, removing only fronds that are fully spent or badly damaged.`,
        "Never shave healthy green fronds just to reduce size, because palms depend on that foliage to maintain strength and root health.",
        "Clean cuts at the base look better than partial trimming across the leaflets unless only the tips are slightly dry."
      ];
    case "accent-houseplant":
      return [
        `Prune ${plant.commonName} with appearance in mind, removing awkward, damaged, or imbalanced growth before it spoils the display.`,
        "Use clean selective cuts instead of repeated clipping so the plant keeps a refined natural form.",
        "Time bigger shape corrections for active growth periods so recovery is quick and the decorative effect stays strong."
      ];
    default:
      return [
        `Remove yellowing, damaged, or tired leaves from ${plant.commonName} as they appear so the plant stays clean and focused on fresh growth.`,
        "Trim leggy stems back to a healthy node or growth point, and pinch new tips on branching plants to keep the habit fuller and more balanced.",
        "Use clean tools and avoid removing too much foliage at once, especially during darker months when replacement growth is slower."
      ];
  }
}

function buildHouseplantWinterizingSection(plant, houseplantProfile) {
  switch (houseplantProfile.type) {
    case "succulent-houseplant":
      return [
        `Keep ${plant.commonName} brighter and drier through winter so slow-growth months do not turn into root-rot months.`,
        "Cut back watering frequency sharply if light drops, and avoid cold window glass or overcompensating with extra fertilizer.",
        "Watch for stretch or soft growth in dark months so you can improve light rather than increasing water."
      ];
    case "fern-houseplant":
      return [
        `Protect ${plant.commonName} from dry forced-air heat and cold drafts, because winter indoor air is often harder on ferns than summer warmth.`,
        "Keep humidity up with grouping, trays, or room adjustments, and do not let the root ball swing all the way dry.",
        "Trim away tired fronds during winter but save repotting or division for the point when active growth resumes."
      ];
    case "statement-houseplant":
      return [
        `Carry ${plant.commonName} through winter by reducing watering to match slower growth while keeping light as strong and consistent as possible.`,
        "Move the plant away from cold glass, heater blasts, and dark corners that become more damaging when winter daylight shortens.",
        "Hold fertilizer until stronger spring growth begins unless the plant is actively pushing healthy new foliage under bright conditions."
      ];
    case "flowering-houseplant":
      return [
        `Keep ${plant.commonName} stable through winter because cool drafts, dry heat, and erratic watering can interrupt flowering or bud formation.`,
        "Reduce feeding unless the plant is actively blooming, but keep light quality high enough that foliage and buds stay strong.",
        "Protect blooms and buds from touching cold windows or sitting in hot air streams from nearby vents."
      ];
    case "trailing-houseplant":
      return [
        `Reduce watering for ${plant.commonName} in winter just enough to match slower growth without letting the root ball turn hard dry for long periods.`,
        "Move the plant where more of the vine length receives usable light so stems do not become even more bare and stretched in darker months.",
        "Delay major reshaping until active growth returns, but remove any soft, damaged, or obviously failing stems as needed."
      ];
    case "palm-houseplant":
      return [
        `Keep ${plant.commonName} away from heater vents and sudden temperature swings so frond tips do not scorch or collapse in winter air.`,
        "Water a little less often but do not let the root ball dry completely, because palms are slow to forgive deep drought indoors.",
        "Raise humidity when possible and wipe dust from fronds so the plant can use winter light more effectively."
      ];
    case "accent-houseplant":
      return [
        `Protect ${plant.commonName} from winter stress without moving it so often that the display plant loses stability and drops foliage.`,
        "Check the actual moisture level inside decorative containers carefully, because winter roots dry more slowly than the room may suggest.",
        "Keep the plant presentable with light cleanup while saving repotting or major style changes for active growth season."
      ];
    default:
      return [
        `Keep ${plant.commonName} away from cold drafts, heater blasts, and touching window glass as indoor winter conditions change.`,
        "Reduce watering frequency and stop routine feeding until stronger active growth returns in brighter months.",
        "Increase humidity if needed, clean leaves occasionally, and inspect roots before spring if the plant struggled through winter."
      ];
  }
}

function buildShrubSummary(plant, shrubProfile) {
  const region = plant.region === "Indoor Anywhere" ? "indoor spaces" : lowerText(plant.region, "mixed garden settings");

  switch (shrubProfile.type) {
    case "evergreen-privacy-shrub":
      return `${plant.commonName} is an evergreen privacy shrub grown for year-round screening and structure, performing best in ${region} when spacing, moisture, and light shearing preserve a dense healthy framework.`;
    case "spring-flowering-shrub":
      return `${plant.commonName} is a spring-flowering shrub grown for a strong seasonal bloom display, performing best in ${region} when its root zone stays mulched and pruning is timed after flowering instead of before bud break.`;
    case "summer-flowering-shrub":
      return `${plant.commonName} is a long-season flowering shrub grown for color and garden presence, performing best in ${region} when sunlight, cleanup, and renewal pruning keep blooms coming on strong new growth.`;
    case "winter-interest-shrub":
      return `${plant.commonName} is a winter-interest shrub valued for evergreen leaves, colored stems, berries, or cold-season bloom, performing best in ${region} when site protection and seasonal cleanup preserve that off-season display.`;
    case "groundcover-shrub":
      return `${plant.commonName} is a spreading shrub used for coverage and structure at the soil line, performing best in ${region} when roots are allowed to knit outward without constant shearing or crowding.`;
    case "dry-pollinator-shrub":
      return `${plant.commonName} is a drought-tolerant pollinator shrub grown for bloom and habitat value, performing best in ${region} when drainage, lean feeding, and sun exposure keep growth compact and floriferous.`;
    case "specimen-shrub":
      return `${plant.commonName} is a specimen shrub used for focal-point structure, containers, or entry planting, performing best in ${region} when the site gives it room to show off its natural habit.`;
    default:
      return `${plant.commonName} is a woody shrub used for ${lowerText(plant.purpose, "landscape structure")}, performing best in ${region} when spacing, mulch, and pruning rhythm support a dense healthy framework year after year.`;
  }
}

function buildShrubSeedingSection(plant, shrubProfile) {
  switch (shrubProfile.type) {
    case "evergreen-privacy-shrub":
      return [
        `Most growers start ${plant.commonName} from nursery stock or rooted cuttings because evergreen shrubs establish more predictably that way than from seed.`,
        "Choose young shrubs with balanced branching and roots that are not tightly circling so the hedge or screen fills in evenly.",
        "If planting several together, lay out spacing before digging so the mature screen closes naturally without chronic crowding."
      ];
    case "spring-flowering-shrub":
      return [
        `Most gardeners begin ${plant.commonName} from nursery plants, softwood cuttings, or layered stems because bloom quality and habit stay more consistent than with seed.`,
        "Start with healthy branching close to the base so the shrub develops a full flowering framework from the ground up.",
        "Harden propagated plants off gently and avoid setting them out when late frost or drying wind could damage tender new growth."
      ];
    case "summer-flowering-shrub":
      return [
        `Begin ${plant.commonName} from a vigorous nursery plant or rooted cutting so the shrub can build flowering wood quickly.`,
        "Choose stock with multiple strong shoots rather than a single weak cane so summer growth fills out more evenly.",
        "Let young shrubs settle in before expecting peak bloom because first-year energy should go into rooting and branch development."
      ];
    case "winter-interest-shrub":
      return [
        `Start ${plant.commonName} from healthy nursery stock or cuttings so the stems, evergreen framework, or berry-bearing structure are already moving in the right direction.`,
        "Select plants with a balanced shape and strong buds because winter-interest shrubs are judged heavily by branch pattern and cold-season appearance.",
        "Place them only after the site can support their long-term winter display without repeated crowding or wind damage."
      ];
    case "groundcover-shrub":
      return [
        `Most gardeners start ${plant.commonName} from rooted divisions, cuttings, or nursery plants so coverage develops quickly and evenly.`,
        "Set out enough plants at the beginning to let them knit together naturally instead of relying on aggressive trimming later.",
        "Keep the planting area weed free while young plants spread so the developing carpet does not get overtaken early."
      ];
    case "dry-pollinator-shrub":
      return [
        `Start ${plant.commonName} from nursery stock or cuttings because sun-loving dryland shrubs usually establish faster that way than from seed.`,
        "Choose compact well-rooted plants rather than overwatered lush ones so they adapt more easily to leaner garden conditions.",
        "Acclimate them gradually to hot open sun if they were grown under softer nursery conditions."
      ];
    case "specimen-shrub":
      return [
        `Begin ${plant.commonName} from a well-shaped nursery plant so container, foundation, or focal planting looks intentional from the beginning.`,
        "Check root health before planting or potting up because specimen shrubs show stress quickly when roots are cramped or buried too deeply.",
        "Pick a form that matches the final design goal instead of assuming heavy pruning will correct an awkward structure later."
      ];
    default:
      return [
        `Most growers begin ${plant.commonName} from nursery stock, cuttings, or layered plants because shrubs take longer and vary more when raised from seed.`,
        "If propagating it yourself, root cuttings in a clean airy medium and keep humidity high until new growth confirms rooting.",
        "Harden young shrubs off gradually before planting out so wind, sun, and temperature shifts do not stress tender new growth."
      ];
  }
}

function buildShrubPlantingSection(plant, shrubProfile) {
  switch (shrubProfile.type) {
    case "evergreen-privacy-shrub":
      return [
        `Plant ${plant.commonName} where sun exposure, ${getDrainagePhrase(plant)}, and mature spacing support a dense year-round screen.`,
        "Space shrubs for their mature width instead of cramming them tightly, because overcrowded hedges thin out at the base and need more correction later.",
        "Water deeply after planting and mulch the root zone so establishment is even along the full length of the hedge or screen."
      ];
    case "spring-flowering-shrub":
      return [
        `Plant ${plant.commonName} in a site with the light and airflow needed for clean spring bloom, using soil that stays workable but never stagnant.`,
        "Set the shrub at the same depth it grew in the pot and leave enough room for arching or mounding stems to mature naturally.",
        "Mulch after planting to moderate root moisture and help the shrub support next year's bloom bud set once flowering finishes."
      ];
    case "summer-flowering-shrub":
      return [
        `Plant ${plant.commonName} in the brightest site that matches its water needs so strong new shoots can carry the best summer or fall bloom.`,
        "Leave enough space around the shrub for airflow and deadheading or renewal pruning access during the active growing season.",
        "Water in deeply after planting and avoid burying the crown, because flowering shrubs perform better when the branch base stays exposed and healthy."
      ];
    case "winter-interest-shrub":
      return [
        `Plant ${plant.commonName} where its winter stems, foliage, berries, or bloom can actually be seen, not hidden behind larger plants.`,
        "Choose a site protected from the harshest winter wind if exposed cold can scorch evergreen leaves or dry buds.",
        "Mulch the root zone after planting and keep the framework open enough that winter features remain visible as the shrub matures."
      ];
    case "groundcover-shrub":
      return [
        `Plant ${plant.commonName} in staggered spacing so it can spread into a continuous layer without each plant being forced into a tight clump.`,
        "Prepare the area thoroughly before planting because later weeding is much harder once stems knit together.",
        "Water deeply after planting and mulch between young plants until the shrub canopy closes over the soil."
      ];
    case "dry-pollinator-shrub":
      return [
        `Plant ${plant.commonName} in full sun with sharp drainage and avoid over-amending the soil, because dry-climate shrubs bloom best when roots are not pushed too soft.`,
        "Set the shrub where reflected heat and leaner soil conditions match its natural habit rather than tucking it into a lush irrigated bed.",
        "Water in well the first time, then shift toward deeper less frequent irrigation as the root system establishes."
      ];
    case "specimen-shrub":
      return [
        `Plant ${plant.commonName} where its form can be appreciated from the front and sides, especially near entries, patios, or foundation views.`,
        plant.container === "Container" || plant.container === "Both"
          ? "If growing it in a container, use a sturdy pot with drainage and enough volume for roots to support long-term shape and bloom."
          : "Set it at the same depth it was growing before and avoid crowding it with faster neighbors that would hide the natural habit.",
        "Water deeply after planting so the shrub settles evenly and begins building the strong root system a focal plant needs."
      ];
    default:
      return [
        `Plant ${plant.commonName} where ${lowerText(plant.sunlight, "the right light")}, ${lowerText(plant.soil, "prepared")} soil, and ${getDrainagePhrase(plant)} support dense woody growth without crowding.`,
        isPrivacyPlant(plant)
          ? "When using it for privacy, space shrubs for their mature width rather than forcing them into a tight hedge that will need constant correction."
          : "Set the shrub at the same depth it grew in the pot and leave enough room for its natural mature spread and maintenance access.",
        "Water deeply after planting and build a mulch ring over the root zone so moisture stays steadier during establishment."
      ];
  }
}

function buildShrubMaintenanceSection(plant, shrubProfile) {
  const climate = lowerText(plant.climate, "local");
  const colorList = formatList(listOptions(plant.color).map((item) => item.toLowerCase()));
  const displayLine = colorList
    ? `Watch bloom and foliage quality through the season so ${colorList} display stays clean and vigorous.`
    : "Watch overall growth and leaf quality through the season so stress is corrected early.";

  switch (shrubProfile.type) {
    case "evergreen-privacy-shrub":
      return [
        `Maintain ${plant.commonName} with deep establishment watering, a light mulch layer, and moderate feeding only when foliage color or density clearly needs help.`,
        "Check the hedge from the base upward each season so lower branches continue receiving light and do not thin out behind heavier top growth.",
        "Correct irrigation gaps, winter burn, or branch damage early so the screen stays dense instead of developing permanent holes."
      ];
    case "spring-flowering-shrub":
      return [
        `Maintain ${plant.commonName} with steady moisture from post-bloom regrowth into summer because that is when many spring shrubs set next year's buds.`,
        "Feed lightly after bloom only if growth is weak, and avoid pushing overly soft late-season growth that can reduce winter performance.",
        `${displayLine} Pay attention after flowering and during ${climate} weather swings so the next bloom cycle is not compromised.`
      ];
    case "summer-flowering-shrub":
      return [
        `Maintain ${plant.commonName} with consistent moisture and periodic cleanup so new flowering shoots keep developing strongly through the warm season.`,
        "Deadhead or tidy spent bloom when useful, but focus mainly on keeping the shrub vigorous rather than clipped into stiffness.",
        `${displayLine} Watch especially in midsummer heat and late-season drought so bloom production does not fade early.`
      ];
    case "winter-interest-shrub":
      return [
        `Maintain ${plant.commonName} with moderate feeding, steady root moisture, and gentle cleanup so the shrub carries healthy structure into the cold season.`,
        "Protect the features that matter most, whether that is berries, evergreen foliage, stem color, or winter bloom, instead of over-pruning them away.",
        "Check the plant in late fall so damage, disease, or heavy debris are addressed before winter makes access harder."
      ];
    case "groundcover-shrub":
      return [
        `Maintain ${plant.commonName} by keeping weeds out while it fills in and watering deeply enough that roots spread outward rather than staying shallow.`,
        "Mulch lightly until the canopy closes, then reduce disturbance so the shrub layer can knit into a stable low-maintenance cover.",
        "Guide the spread with edge cleanup rather than repeated hard shearing, which usually weakens the natural carpeting habit."
      ];
    case "dry-pollinator-shrub":
      return [
        `Maintain ${plant.commonName} with deep but infrequent watering once established, because these shrubs usually flower better when roots are not kept constantly soft.`,
        "Use lean feeding and avoid excess compost or high-nitrogen fertilizer that can produce floppy growth at the expense of bloom and pollinator value.",
        "Clean out dead stems and monitor drainage after storms so crown rot and weak growth do not develop in what should be a tough low-water planting."
      ];
    case "specimen-shrub":
      return [
        `Maintain ${plant.commonName} with enough moisture and feeding to keep the plant polished, but avoid forcing overly lush growth that spoils its shape.`,
        "Rotate or reposition container-grown specimens as needed so all sides develop evenly and the best face remains visible.",
        `${displayLine} Keep the shrub clean and balanced because focal plants are judged more by finish and form than by raw growth speed.`
      ];
    default:
      return [
        `Maintain ${plant.commonName} with deep establishment watering, a light mulch layer, and seasonal feeding only when growth or bloom quality suggests it is needed.`,
        isPrivacyPlant(plant)
          ? "Check density from the base upward each season so the shrub stays full instead of thinning out from repeated top-heavy shearing."
          : "Let the shrub keep a natural framework, correcting stress, dead wood, or nutrient imbalance before shape becomes a bigger issue.",
        `${displayLine} Watch especially after bloom and during ${climate} weather swings so stress is corrected before the framework declines.`
      ];
  }
}

function buildShrubPruningSection(plant, shrubProfile) {
  switch (shrubProfile.type) {
    case "evergreen-privacy-shrub":
      return [
        `Prune ${plant.commonName} by thinning and light shaping rather than repeated severe shearing, especially once the shrub has reached its main screening size.`,
        "Keep the base slightly wider than the top so lower branches continue receiving light and do not hollow out.",
        "Do renewal cuts selectively into older stems instead of relying only on outer clipping, which can create a shell of green over dead interior wood."
      ];
    case "spring-flowering-shrub":
      return [
        `Prune ${plant.commonName} soon after bloom if shaping or size control is needed, because many spring shrubs flower on buds formed the previous season.`,
        "Remove the oldest stems gradually to renew the shrub without sacrificing the entire floral display in one year.",
        "Avoid late winter shearing that removes developed flower buds and leaves only leafy regrowth."
      ];
    case "summer-flowering-shrub":
      return [
        `Prune ${plant.commonName} in late winter or very early spring so fresh vigorous shoots can carry the strongest bloom in the coming season.`,
        "Deadhead, tip back, or thin summer stems only as needed to keep the shrub blooming and the framework open.",
        "Use renewal pruning to replace tired wood over time rather than keeping the plant dense and woody through endless outer trimming."
      ];
    case "winter-interest-shrub":
      return [
        `Prune ${plant.commonName} with winter display in mind so berries, stem color, evergreen texture, or cold-season bloom are not accidentally removed too early.`,
        plant.seasonality === "Winter"
          ? "Wait until after the main winter display passes before doing major shaping, unless only broken stems need immediate removal."
          : "Remove only damaged or badly placed stems in fall, saving heavier work for the safer pruning season.",
        "Renew older wood gradually so the shrub keeps both visual interest and a healthy long-term framework."
      ];
    case "groundcover-shrub":
      return [
        `Prune ${plant.commonName} mainly to steer edges, remove dead wood, and prevent the planting from piling up too thickly in the center.`,
        "Use selective thinning or edge reduction rather than flat shearing so the low spreading habit still looks natural.",
        "Cut back wandering stems only where they interfere with paths or neighboring plants, not as routine punishment for spreading well."
      ];
    case "dry-pollinator-shrub":
      return [
        `Prune ${plant.commonName} lightly and on schedule, because many dry-climate shrubs resent heavy cutting into old wood or overly rich regrowth.`,
        plant.seasonality === "Spring"
          ? "Shape right after flowering if needed, keeping cuts conservative so the plant rebounds compactly."
          : "Do heavier shaping in late winter or very early spring before strong bloom growth begins.",
        "Remove dead twiggy wood and open the center just enough for airflow, but preserve the natural sun-loving structure."
      ];
    case "specimen-shrub":
      return [
        `Prune ${plant.commonName} to preserve its natural silhouette first and reduce size only second, because specimen shrubs lose value when forced into generic shapes.`,
        "Remove crossing, damaged, or awkward stems selectively so the framework looks intentional from several viewing angles.",
        "Make fewer but smarter cuts, especially on container or entry shrubs where every branch affects the overall presentation."
      ];
    default:
      return [
        `Prune ${plant.commonName} by removing dead, damaged, or crossing wood first and then shaping only as much as the plant's natural habit needs.`,
        getShrubPruningTiming(plant),
        isPrivacyPlant(plant)
          ? "Keep the base slightly wider than the top if you shear for screening so lower branches continue receiving light."
          : "Renew older stems gradually when the shrub gets crowded instead of relying on one severe cut all at once."
      ];
  }
}

function buildShrubWinterizingSection(plant, shrubProfile) {
  switch (shrubProfile.type) {
    case "evergreen-privacy-shrub":
      return [
        `Water ${plant.commonName} before the ground freezes if autumn has been dry and mulch lightly once soil temperatures cool.`,
        "Protect broadleaf evergreen foliage from harsh wind or reflected winter sun if the site tends to scorch leaves.",
        "Brush off heavy wet snow before it permanently splays branches, especially on formal screens or upright hedge plants."
      ];
    case "spring-flowering-shrub":
      return [
        `Carry ${plant.commonName} into winter with even soil moisture and avoid late fertilizer that could push tender shoots before cold weather.`,
        "Protect young buds and stems from deer, salt, or winter wind if those are common problems in the planting site.",
        "Do not cut back heavily in fall, because next spring's bloom may already be set on the wood you would remove."
      ];
    case "summer-flowering-shrub":
      return [
        `Water ${plant.commonName} before freeze-up when fall has been dry and mulch lightly after the soil cools to protect the root zone.`,
        "Leave major shaping until late winter or early spring, removing only broken or storm-damaged stems during fall cleanup.",
        "Check ties, supports, or crowded neighboring plants so winter snow load does not distort the framework."
      ];
    case "winter-interest-shrub":
      return [
        `Protect ${plant.commonName} in a way that preserves the very winter features you planted it for, whether that means berries, stems, evergreen leaves, or cold-season bloom.`,
        "Avoid smothering or over-wrapping the shrub unless weather exposure truly calls for it, because excessive covering can spoil the display or trap moisture.",
        "Remove only damaged material during winter and save major cleanup until the main seasonal show has passed."
      ];
    case "groundcover-shrub":
      return [
        `Let ${plant.commonName} carry a light mulch layer and natural top growth into winter so crowns and shallow roots are buffered from temperature swings.`,
        "Avoid heavy foot traffic through the planting during wet winter periods because compacted soil slows spring fill-in.",
        "Clean up fallen debris that mats heavily over the shrub layer but leave the living framework intact until spring inspection."
      ];
    case "dry-pollinator-shrub":
      return [
        `Keep ${plant.commonName} on the dry side going into winter, watering only enough before freeze-up that roots do not enter cold weather already stressed.`,
        "Good drainage matters more than insulation for many low-water shrubs, so make sure mulch and soil are not trapping winter wetness at the crown.",
        "Skip late-season fertilizer and save stronger pruning for the right spring window so the shrub wakes up compact and bloom-ready."
      ];
    case "specimen-shrub":
      return [
        `Prepare ${plant.commonName} for winter by watering deeply before freeze-up and making sure the root zone or container is protected from the harshest temperature swings.`,
        plant.container === "Container" || plant.container === "Both"
          ? "Move or insulate containers if needed so the root ball is not colder than an in-ground planting would be."
          : "Protect showy stems or broadleaf foliage from rubbing snow piles and mechanical damage in high-traffic areas.",
        "Delay major pruning until the right season so the shrub keeps its strongest outline through winter."
      ];
    default:
      return [
        `Water ${plant.commonName} before the ground freezes if autumn has been dry and mulch the root zone lightly once soil temperatures cool.`,
        plant.seasonality === "Year-Round Interest"
          ? "Protect broadleaf evergreen or foliage-forward shrubs from harsh wind and reflected winter sun if the site is exposed."
          : "Leave major reshaping until the right pruning season and remove only obvious broken winter damage right away.",
        "Avoid late-season fertilizing that could push tender growth, and check ties or wraps so branches are not damaged by snow or rubbing."
      ];
  }
}

function buildFruitSummary(plant, fruitProfile) {
  const region = plant.region === "Indoor Anywhere" ? "indoor spaces" : lowerText(plant.region, "mixed garden settings");

  switch (fruitProfile.type) {
    case "orchard":
      return `${plant.commonName} is an orchard fruit grown for dependable harvest and seasonal beauty, performing best in ${region} when full sun, airflow, and crop-thinning decisions support both tree structure and fruit quality.`;
    case "berry":
      return `${plant.commonName} is a berry crop grown for repeated harvest and garden productivity, performing best in ${region} when root moisture, mulch, and renewal pruning keep fruiting wood vigorous.`;
    case "citrus":
      return `${plant.commonName} is a citrus fruit plant grown for fragrant bloom and glossy edible fruit, performing best in ${region} when warmth, drainage, and consistent feeding support container or sheltered garden culture.`;
    case "vine-fruit":
      return `${plant.commonName} is a fruiting vine grown for vertical harvest, performing best in ${region} when training, sun exposure, and seasonal pruning keep fruiting wood organized and productive.`;
    case "melon":
      return `${plant.commonName} is a warm-season melon crop grown for sweet heavy fruit, performing best in ${region} when heat, soil warmth, and uninterrupted growth keep vines moving from bloom to ripening.`;
    case "specialty-fruit":
      return `${plant.commonName} is a specialty fruit plant grown for both harvest and ornamental value, performing best in ${region} when site warmth, drainage, and seasonal cleanup match its growth rhythm.`;
    default:
      return `${plant.commonName} is a fruiting ${lowerText(plant.category, "plant")} grown for harvest as well as seasonal garden value, performing best in ${region} when sun, spacing, and moisture stay consistent from flowering through ripening.`;
  }
}

function buildFruitSeedingSection(plant, fruitProfile) {
  switch (fruitProfile.type) {
    case "orchard":
      return [
        `Most growers begin ${plant.commonName} from grafted nursery stock rather than seed so fruit quality, vigor, and ripening habits stay true to the named variety.`,
        "If raised from seed, expect a long juvenile period and significant variation from the parent tree before worthwhile fruiting begins.",
        "Choose planting stock with a sound graft union, balanced branching, and roots that are moist and not badly circling in the pot."
      ];
    case "berry":
      return [
        `Start ${plant.commonName} from rooted plants, canes, crowns, or layered divisions because that is the fastest path to a productive berry patch.`,
        "Seed is possible for some berries, but named varieties are usually better preserved through vegetative propagation.",
        "Set young berry plants out only after roots are active and soil preparation, mulch, and any trellis or row spacing are ready."
      ];
    case "citrus":
      return [
        `Most gardeners start ${plant.commonName} from grafted or rooted plants rather than seed because seed-grown citrus takes longer and may not fruit reliably to type.`,
        "Choose stock with a strong central framework and healthy glossy foliage so container or sheltered growing starts with better momentum.",
        "Let new plants acclimate gradually to sun and outdoor exposure if they were grown under protection before you bought them."
      ];
    case "vine-fruit":
      return [
        `Begin ${plant.commonName} from a healthy rooted plant because fruiting vines are much easier to train well from nursery stock than from seed.`,
        "Install the permanent support system before planting so the young vine can be tied and directed immediately.",
        "If multiple plants are needed for pollination or fruit set, plan that before the vines go in so spacing stays correct from the start."
      ];
    case "melon":
      return [
        `Start ${plant.commonName} from seed once soil is warm, or use young transplants if your season is short and you need a head start.`,
        "Keep germination warmth steady and disturb roots as little as possible because melon seedlings resent being checked early.",
        "Harden transplants off gradually and move them out only when nights are settled and the soil has real warmth."
      ];
    case "specialty-fruit":
      return [
        `Most growers start ${plant.commonName} from rooted plants, grafted stock, pads, or cuttings because named specialty fruits are less dependable from seed.`,
        "If you do sow seed, expect more variation in fruit quality, vigor, and bearing age than with vegetatively propagated plants.",
        "Match the propagation method to the crop so young plants establish quickly without unnecessary root or stem stress."
      ];
    default:
      return [
        `Most gardeners start ${plant.commonName} from grafted plants, rooted cuttings, canes, or runner plants because named fruit varieties are more dependable than seed-grown plants.`,
        "If you do sow seed, expect slower bearing and more variation from the parent plant, especially with named orchard and berry cultivars.",
        "Harden young plants off carefully, then set them where pollination, airflow, and support needs can be handled from the start."
      ];
  }
}

function buildFruitPlantingSection(plant, fruitProfile) {
  switch (fruitProfile.type) {
    case "orchard":
      return [
        `Plant ${plant.commonName} in full sun with strong airflow, well-drained soil, and enough room for the mature canopy to develop without crowding.`,
        "Set the tree at the same depth it grew before, keep the graft union above the final soil line, and water deeply so roots settle firmly.",
        "Plan pollination partners, branch training, and future fruit thinning before planting so orchard structure is right from year one."
      ];
    case "berry":
      return [
        `Plant ${plant.commonName} in a bright site with organic matter, steady soil moisture, and row or mound spacing that allows easy picking and pruning.`,
        /blueberry|huckleberry/.test(lowerText(plant.commonName, ""))
          ? "For blueberries and huckleberries, prepare a more acidic root zone and never let the planting bed become compacted or alkaline."
          : "Set crowns or root systems at the right depth and spread them naturally so new canes or fruiting shoots emerge strongly.",
        "Mulch immediately after planting to cool roots, reduce weeds, and hold moisture through the first major flush of growth."
      ];
    case "citrus":
      return [
        `Plant ${plant.commonName} in a warm high-light site or a fast-draining container mix where roots never sit soggy.`,
        "Keep the upper root flare visible, use a pot only slightly larger than the current root ball, and avoid burying the trunk deeper than it was before.",
        "Water in thoroughly, then place the plant where reflected warmth, airflow, and easy winter protection are all realistic."
      ];
    case "vine-fruit":
      return [
        `Plant ${plant.commonName} in full sun beside a sturdy trellis, arbor, or wire system so the vine can be trained from its first season.`,
        "Set the root ball at the same depth it was growing, tie the strongest shoot loosely, and clear weeds from the immediate rooting zone.",
        "Leave enough distance between vines for airflow and harvesting so fruiting wood does not turn into an unmanageable tangle."
      ];
    case "melon":
      return [
        `Plant ${plant.commonName} only after the soil is warm, using mounds or raised beds if needed so roots never stall in cold wet ground.`,
        "Give each plant generous sprawl room or a strong support plan if you intend to grow it vertically.",
        "Mulch once the soil has warmed and keep early growth protected from cold snaps so vines do not lose momentum."
      ];
    case "specialty-fruit":
      return [
        `Plant ${plant.commonName} in the warmest site that still offers ${getDrainagePhrase(plant)} and enough root room for long-term fruiting.`,
        plant.container === "Container" || plant.container === "Both"
          ? "If using a container, choose one with strong drainage and enough volume that roots can support flowering and fruit set without constant stress."
          : "Set the plant at the same depth it grew before and avoid crowding it into a site that will stay damp or shaded.",
        "Water deeply after planting and plan for seasonal protection if the crop is only borderline hardy in your climate."
      ];
    default:
      return [
        `Plant ${plant.commonName} in full productive light with ${getDrainagePhrase(plant)}, enough compost to support rooting, and room for harvest access as it matures.`,
        plant.category === "Vine"
          ? "Install the trellis or support system before planting so roots are not disturbed later and fruiting wood can be trained immediately."
          : "Set the plant at the same depth it grew before, keep the crown or graft union correctly positioned, and spread roots outward without crowding.",
        "Water deeply after planting and plan for pollination partners, future thinning, and netting or support needs before the first crop arrives."
      ];
  }
}

function buildFruitMaintenanceSection(plant, fruitProfile) {
  switch (fruitProfile.type) {
    case "orchard":
      return [
        `Maintain ${plant.commonName} with regular deep watering, especially from flowering through fruit swell, so size and flavor do not suffer from stress.`,
        "Feed moderately in the active season, thin crowded fruit early, and monitor scaffold branches so the crop load does not distort the structure.",
        "Scout often for insects, disease, fruit drop, and sunburn so small problems are corrected before they affect the harvest."
      ];
    case "berry":
      return [
        `Maintain ${plant.commonName} with consistent moisture and mulch because berry crops usually produce best when roots never swing between drought and saturation.`,
        /blueberry|huckleberry/.test(lowerText(plant.commonName, ""))
          ? "Keep soil acidity and organic matter in range, and avoid alkaline amendments that can slow growth and reduce berry quality."
          : "Support new canes or fruiting stems as needed and keep rows or clumps open enough for easy harvest and airflow.",
        "Pick fruit regularly, remove damaged berries promptly, and watch for bird pressure before the crop colors up fully."
      ];
    case "citrus":
      return [
        `Maintain ${plant.commonName} with consistent but not soggy watering, letting the upper layer of mix dry slightly between deep soakings.`,
        "Feed during the active growing season with a citrus-friendly fertilizer so foliage color, flowering, and fruit set stay balanced.",
        "Watch for scale, mites, leaf yellowing, and fruit drop, especially when a container plant is moved between indoor and outdoor conditions."
      ];
    case "vine-fruit":
      return [
        `Maintain ${plant.commonName} by tying new shoots early, watering deeply during rapid growth, and keeping the trellis zone weed free.`,
        "Thin or redirect overcrowded growth so fruiting wood receives light and the canopy dries quickly after rain.",
        "Feed moderately and keep harvest areas accessible so the vine stays productive rather than turning into dense tangled growth."
      ];
    case "melon":
      return [
        `Maintain ${plant.commonName} with warm soil, uninterrupted moisture, and steady feeding so vines do not stall between bloom and fruit sizing.`,
        "Keep weeds down early, guide vines gently, and avoid overhead watering late in the day if disease pressure is an issue.",
        "Watch fruit set, pollination, and rind development closely because melons change quickly once they begin sizing up."
      ];
    case "specialty-fruit":
      return [
        `Maintain ${plant.commonName} with steady moisture and moderate feeding so the plant can balance vegetative growth with flowering and fruit ripening.`,
        "Adjust care to the crop's natural rhythm, giving extra attention during bloom, early fruit set, and heat waves.",
        "Remove dropped fruit, damaged stems, and stressed foliage promptly so insects and disease do not build around the plant."
      ];
    default:
      return [
        `Maintain ${plant.commonName} with steady moisture from flowering through fruit swell because uneven watering often reduces fruit quality and plant vigor.`,
        "Feed in the main growing season with compost or a balanced fruiting fertilizer, then thin crowded fruit or canes when needed so energy goes into stronger crops.",
        "Monitor insects, disease pressure, dropped fruit, and branch load regularly so harvest quality stays high and the plant is not overworked."
      ];
  }
}

function buildFruitPruningSection(plant, fruitProfile) {
  switch (fruitProfile.type) {
    case "orchard":
      return [
        `Prune ${plant.commonName} during dormancy or right after harvest, depending on the crop, so structure and fruiting wood stay balanced.`,
        "Remove dead, damaged, crossing, and inward-growing branches first, then open the canopy enough for light, airflow, and easier picking.",
        "Train the tree toward a sound long-term framework rather than chasing size reduction with repeated heavy cuts."
      ];
    case "berry":
      return [
        `Prune ${plant.commonName} by removing weak, old, or poorly placed canes and keeping the most productive fruiting wood renewed each year.`,
        /raspberry|blackberry/.test(lowerText(plant.commonName, ""))
          ? "Cut out spent fruiting canes after harvest and tie in or thin new canes so next year's crop has room and light."
          : "Thin older stems gradually and keep the center open enough that berries can ripen cleanly and be picked without crushing growth.",
        "Avoid letting berry patches become overcrowded because dense old wood lowers airflow, harvest quality, and disease resistance."
      ];
    case "citrus":
      return [
        `Prune ${plant.commonName} lightly, focusing on dead wood, rootstock suckers, and awkward shoots that spoil the framework.`,
        "Do major shaping after the main crop or flush of growth rather than before cold weather or heavy bloom.",
        "Keep enough leaf area to feed the fruit, especially on container citrus where over-pruning can set recovery back quickly."
      ];
    case "vine-fruit":
      return [
        `Prune ${plant.commonName} to maintain a clear trunk, permanent arms, and well-spaced fruiting wood along the support system.`,
        "Do the main structural pruning in dormancy, then use light summer thinning only when shoots become badly crowded or unmanageable.",
        "Tie selected shoots early and remove extra growth before it hardens into a tangled mass that is difficult to renew."
      ];
    case "melon":
      return [
        `Pruning ${plant.commonName} is usually light, with most effort going into guiding vines, removing damaged growth, and keeping fruit visible and clean.`,
        "Pinch only if the variety or growing method calls for it, because too much trimming can delay or reduce fruit set.",
        "Use supports, slings, or careful vine positioning instead of aggressive cutting when fruits start getting heavy."
      ];
    case "specialty-fruit":
      return [
        `Prune ${plant.commonName} in the season that best matches its flowering and fruiting habit, removing dead, crowded, or inward growth first.`,
        "Keep the framework open enough for light, airflow, and harvesting, but avoid removing so much growth that fruiting is delayed.",
        "Renew older fruiting wood gradually instead of forcing the plant to recover from one severe pruning session."
      ];
    default:
      return [
        `Prune ${plant.commonName} during its dormant or crop-appropriate pruning window so fruiting wood, light penetration, and airflow stay in balance.`,
        "Remove dead, damaged, crossing, or inward-growing shoots first, then thin overcrowded fruiting wood, suckers, or watersprouts as needed.",
        "Keep the framework open enough for harvest and disease prevention, but avoid over-pruning because too much vigor can come back as weak vegetative growth."
      ];
  }
}

function buildFruitWinterizingSection(plant, fruitProfile) {
  switch (fruitProfile.type) {
    case "orchard":
      return [
        `Water ${plant.commonName} before freeze-up if autumn has been dry, then mulch lightly and protect trunks from rodent damage, sunscald, or mower injury.`,
        "Remove fallen fruit and diseased leaves before winter settles in so pests and disease do not overwinter beneath the tree.",
        "Delay structural pruning until the correct dormant window, but remove obviously broken limbs if storms cause damage."
      ];
    case "berry":
      return [
        `Protect ${plant.commonName} through winter with a clean mulch layer that moderates root temperatures without smothering crowns or cane bases.`,
        /raspberry|blackberry/.test(lowerText(plant.commonName, ""))
          ? "Tie or tidy canes if wind or snow load is a problem, and remove only clearly dead canes before spring renewal pruning."
          : "Clear dropped fruit and old foliage if disease has been an issue so spring growth starts cleaner.",
        "Water before hard freeze-up in dry falls because berry roots often suffer if they enter winter already stressed."
      ];
    case "citrus":
      return [
        `Move ${plant.commonName} to protected conditions or cover it before frost if temperatures will push beyond what the plant can handle outdoors.`,
        "Cut back on winter watering, but never let the root ball go bone dry, especially if the plant is carrying fruit indoors.",
        "Keep the plant bright, away from heater blasts, and inspect for indoor pest flare-ups while winter light is lower."
      ];
    case "vine-fruit":
      return [
        `Water ${plant.commonName} before freeze-up if autumn has been dry and keep the root zone mulched lightly through winter.`,
        "Secure vines to their support and remove diseased fruit or leaf debris so spring growth starts with less disease pressure.",
        "Save heavier pruning for the proper dormant season rather than cutting back hard in late fall."
      ];
    case "melon":
      return [
        `Treat ${plant.commonName} as a warm-season annual crop and finish harvest before frost damages vines and fruit quality.`,
        "Pull and remove spent vines after the season so insects, disease, and volunteer seedlings do not build up in the bed.",
        "Refresh the planting area with compost and rotate the crop if possible before growing melons there again."
      ];
    case "specialty-fruit":
      return [
        `Protect ${plant.commonName} according to its cold tolerance, watering before freeze-up and mulching lightly once the soil cools.`,
        plant.container === "Container" || plant.container === "Both"
          ? "Move or insulate container-grown plants before severe cold so the root ball does not freeze harder than it would in the ground."
          : "Use wraps, cloth, or site protection if the crop is borderline hardy and winter wind or frost is a recurring problem.",
        "Clean away dropped fruit and old foliage so the plant enters the next growth cycle with lower pest and disease pressure."
      ];
    default:
      return [
        `Water ${plant.commonName} before hard freeze-up if autumn has been dry, then mulch the root zone so soil temperatures stay more even through winter.`,
        plant.container === "Container" || plant.container === "Both"
          ? "Move or insulate containers so the root ball is not exposed to harsher cold than an in-ground planting would face."
          : "Protect trunks, canes, or lower scaffolds from rodents, sunscald, and mechanical injury if the site is exposed.",
        "Remove mummified fruit, diseased leaves, and fallen debris before spring so pests and disease pressure do not carry over into the next crop."
      ];
  }
}

function buildAutoGuideSummary(plant) {
  const category = lowerText(plant.category, "plant");
  const purpose = lowerText(plant.purpose, "general garden use");
  const region = plant.region === "Indoor Anywhere" ? "indoor spaces" : lowerText(plant.region, "mixed garden settings");
  const fruitProfile = getFruitProfile(plant);
  const shrubProfile = getShrubProfile(plant);
  const houseplantProfile = getHouseplantProfile(plant);

  if (fruitProfile) {
    return buildFruitSummary(plant, fruitProfile);
  }

  if (shrubProfile) {
    return buildShrubSummary(plant, shrubProfile);
  }

  if (houseplantProfile) {
    return buildHouseplantSummary(plant, houseplantProfile);
  }

  if (isHerbPlant(plant)) {
    return `${plant.commonName} is a culinary ${category} grown for repeated harvest, performing best in ${region} when ${getSitePhrase(plant)} support fragrant leafy growth instead of stress or early flowering.`;
  }

  if (plant.category === "Edible") {
    return `${plant.commonName} is an edible ${category} grown for productive harvest, performing best in ${region} when ${getSitePhrase(plant)} are matched with steady feeding and moisture.`;
  }

  return `${plant.commonName} is a ${category} grown for ${purpose}, performing best in ${region} when ${getSitePhrase(plant)} are in place.`;
}

function buildSeedingSection(plant) {
  const category = plant.category;
  const fruitProfile = getFruitProfile(plant);
  const shrubProfile = getShrubProfile(plant);
  const houseplantProfile = getHouseplantProfile(plant);

  if (fruitProfile) {
    return buildFruitSeedingSection(plant, fruitProfile);
  }

  if (shrubProfile) {
    return buildShrubSeedingSection(plant, shrubProfile);
  }

  if (houseplantProfile) {
    return buildHouseplantSeedingSection(plant, houseplantProfile);
  }

  if (isHerbPlant(plant)) {
    return [
      `Start ${plant.commonName} from seed, rooted cuttings, or nursery pots depending on how quickly you want harvestable growth.`,
      "Use a light seed-starting mix for sowing and provide warmth, bright light, and even moisture until seedlings are sturdy.",
      "Pinch or thin young plants early so they branch well and settle into productive leafy growth instead of weak, crowded stems."
    ];
  }

  if (category === "Edible") {
    return [
      `Start ${plant.commonName} indoors or direct sow it according to frost timing and soil warmth so seedlings are not stalled by cold conditions.`,
      "Use clean seed-starting mix or loosened garden soil, then keep moisture consistent through germination and early root development.",
      "Thin or transplant seedlings on time so spacing, airflow, and root competition do not limit eventual harvest."
    ];
  }

  if (isShrubPlant(plant)) {
    return [
      `Most growers begin ${plant.commonName} from nursery stock, cuttings, or layered plants because shrubs take longer and vary more when raised from seed.`,
      "If propagating it yourself, root cuttings in a clean airy medium and keep humidity high until new growth confirms rooting.",
      "Harden young shrubs off gradually before planting out so wind, sun, and temperature shifts do not stress tender new growth."
    ];
  }

  if (isWoodyPlant(plant) || category === "Vine") {
    return [
      `Most growers begin ${plant.commonName} from a nursery plant, cutting, or grafted specimen because seed-grown plants take longer and can vary more.`,
      "If you do start from seed, follow the crop's soaking or cold-stratification needs before sowing in a clean propagation mix.",
      "Harden young plants off gradually before moving them outdoors so wind, sun, and temperature swings do not shock new growth."
    ];
  }

  if (category === "Flower" || category === "Edible" || category === "Herb") {
    return [
      `Start ${plant.commonName} from seed indoors several weeks before your last frost or direct sow once frost risk and soil temperatures suit the crop.`,
      "Use a fine seed-starting mix and keep it evenly moist, never waterlogged, through germination and early root development.",
      "Thin or transplant seedlings after true leaves appear so airflow, spacing, and root room stay strong from the beginning."
    ];
  }

  return [
    `Begin ${plant.commonName} from division, cuttings, or healthy nursery starts unless you have species-specific seed instructions.`,
    "Keep propagation media lightly moist and give young plants enough light to build compact, sturdy growth.",
    "Move starts up into their next container or planting space before roots become tightly bound or stressed."
  ];
}

function buildPlantingSection(plant) {
  const sunlight = lowerText(plant.sunlight, "the light it prefers");
  const soil = lowerText(plant.soil, "prepared soil");
  const drainage = getDrainagePhrase(plant);
  const hardiness = lowerText(plant.hardiness, "its hardiness range");
  const fruitProfile = getFruitProfile(plant);
  const shrubProfile = getShrubProfile(plant);
  const houseplantProfile = getHouseplantProfile(plant);
  const containerLine = plant.container === "Container"
    ? "Use a container with generous drainage holes and refresh potting mix before it compacts."
    : plant.container === "Both"
      ? "This plant can be grown in the ground or in containers as long as drainage and root room stay adequate."
      : "Set transplants at the same depth they grew in the pot and firm the soil gently around the root ball.";

  if (fruitProfile) {
    return buildFruitPlantingSection(plant, fruitProfile);
  }

  if (shrubProfile) {
    return buildShrubPlantingSection(plant, shrubProfile);
  }

  if (houseplantProfile) {
    return buildHouseplantPlantingSection(plant, houseplantProfile);
  }

  if (isHerbPlant(plant)) {
    return [
      `Plant ${plant.commonName} where ${sunlight}, ${soil} soil, and ${drainage} will keep roots active without forcing lush weak growth.`,
      "Space plants so foliage dries quickly after rain or watering and harvest access stays easy throughout the season.",
      "Water deeply once after planting, then let the plant settle into a steady rhythm that favors fragrance, flavor, and compact branching."
    ];
  }

  if (plant.category === "Edible") {
    return [
      `Plant ${plant.commonName} in a fertile open site with ${sunlight}, ${drainage}, and enough compost or soil preparation to support strong production.`,
      plant.growthHabit === "Vining"
        ? "Give the crop a trellis, cage, or sprawl space from day one so stems and fruit are easy to manage."
        : "Space seedlings and starts generously so roots, leaves, and airflow have room to support reliable harvests.",
      "Water transplants in deeply and mulch once the soil warms so growth starts evenly and weed competition stays lower."
    ];
  }

  if (isShrubPlant(plant)) {
    return [
      `Plant ${plant.commonName} where ${sunlight}, ${soil} soil, and ${drainage} support dense woody growth without crowding.`,
      isPrivacyPlant(plant)
        ? "When using it for privacy, space shrubs for their mature width rather than forcing them into a tight hedge that will need constant correction."
        : "Set the shrub at the same depth it grew in the pot and leave enough room for its natural mature spread and maintenance access.",
      "Water deeply after planting and build a mulch ring over the root zone so moisture stays steadier during establishment."
    ];
  }

  return [
    `Plant ${plant.commonName} where it will receive ${sunlight}, ${soil} soil, and ${drainage}.`,
    containerLine,
    `Water deeply after planting and choose a site that matches its ${hardiness} hardiness range and ${lowerText(plant.purpose, "main landscape")} role.`
  ];
}

function buildMaintenanceSection(plant) {
  const care = lowerText(plant.care, "moderate");
  const climate = lowerText(plant.climate, "local");
  const colorList = formatList(listOptions(plant.color).map((item) => item.toLowerCase()));
  const fruitProfile = getFruitProfile(plant);
  const shrubProfile = getShrubProfile(plant);
  const houseplantProfile = getHouseplantProfile(plant);
  const displayLine = colorList
    ? `Watch bloom and foliage quality through the season so ${colorList} display stays clean and vigorous.`
    : "Watch overall growth and leaf color through the season so stress is corrected early.";

  if (fruitProfile) {
    return buildFruitMaintenanceSection(plant, fruitProfile);
  }

  if (shrubProfile) {
    return buildShrubMaintenanceSection(plant, shrubProfile);
  }

  if (houseplantProfile) {
    return buildHouseplantMaintenanceSection(plant, houseplantProfile);
  }

  if (isHerbPlant(plant)) {
    return [
      `Maintain ${plant.commonName} with ${getWateringPhrase(plant)} and avoid overfeeding so flavor and compact growth stay stronger than soft leafy stretch.`,
      "Harvest often, pinch tips regularly, and remove flower stalks when leaf production is the priority.",
      "Refresh mulch, improve airflow, and replace tired plants on schedule if repeated harvest has made them woody or sparse."
    ];
  }

  if (plant.category === "Edible") {
    return [
      `Maintain ${plant.commonName} with steady moisture and regular feeding because productive edible crops respond quickly to stress, drought, and nutrient swings.`,
      "Mulch once the soil warms, keep weeds down early, and support stems or vines before the plant becomes top-heavy.",
      "Harvest on time and remove damaged fruit or foliage promptly so the plant keeps producing instead of stalling under stress."
    ];
  }

  if (isShrubPlant(plant)) {
    return [
      `Maintain ${plant.commonName} with deep establishment watering, a light mulch layer, and seasonal feeding only when growth or bloom quality suggests it is needed.`,
      isPrivacyPlant(plant)
        ? "Check density from the base upward each season so the shrub stays full instead of thinning out from repeated top-heavy shearing."
        : "Let the shrub keep a natural framework, correcting stress, dead wood, or nutrient imbalance before shape becomes a bigger issue.",
      `${displayLine} Watch especially after bloom and during ${climate} weather swings so stress is corrected before the framework declines.`
    ];
  }

  return [
    `Maintain ${plant.commonName} with ${getWateringPhrase(plant)} and adjust irrigation whenever heat, wind, or active growth increases demand.`,
    care === "low"
      ? "This is a lower-maintenance plant, so focus on mulch, steady establishment watering, and periodic cleanup."
      : care === "high"
        ? "This is a higher-attention plant, so check nutrition, moisture, and cleanup more often during the growing season."
        : "Feed and tidy it seasonally so growth stays balanced and the plant performs consistently.",
    `${displayLine} Pay extra attention during ${climate} weather patterns that can push the plant out of balance.`
  ];
}

function buildPruningSection(plant) {
  const fruitProfile = getFruitProfile(plant);
  const shrubProfile = getShrubProfile(plant);
  const houseplantProfile = getHouseplantProfile(plant);

  if (fruitProfile) {
    return buildFruitPruningSection(plant, fruitProfile);
  }

  if (shrubProfile) {
    return buildShrubPruningSection(plant, shrubProfile);
  }

  if (houseplantProfile) {
    return buildHouseplantPruningSection(plant, houseplantProfile);
  }

  if (isHerbPlant(plant)) {
    return [
      `Pinch, trim, or harvest ${plant.commonName} frequently so it branches well and stays tender instead of becoming lanky or woody.`,
      "Remove flower stalks when leaf production matters more than bloom and cut stems just above healthy leaf nodes.",
      "Avoid stripping too much growth in one pass; repeated lighter harvests usually keep the plant productive longer."
    ];
  }

  if (plant.category === "Edible") {
    return [
      `Prune or thin ${plant.commonName} mainly to improve airflow, support fruit set, and remove diseased or unproductive growth.`,
      plant.growthHabit === "Vining"
        ? "Train vines early and remove damaged or badly placed stems before the canopy becomes tangled."
        : "Thin crowded stems or excess side growth only as needed so the plant keeps enough foliage to feed the crop.",
      "Time heavier cleanup around harvest cycles so the plant can recover quickly and keep producing."
    ];
  }

  if (isWoodyPlant(plant)) {
    return [
      `Prune ${plant.commonName} in the season that best fits its flowering and growth habit, removing dead, damaged, or crossing wood first.`,
      "Shape younger plants gradually so the structure stays strong without relying on repeated hard cuts later.",
      "Avoid removing more than about one-third of total growth in a single season unless you are doing a planned renovation."
    ];
  }

  if (plant.category === "Vine") {
    return [
      `Train and prune ${plant.commonName} regularly so stems stay attached, productive, and easy to manage on the support system.`,
      "Remove tangled, dead, or overcrowded stems to improve light penetration and airflow through the plant.",
      "Time heavier pruning around the plant's bloom or fruit cycle so you do not remove the next major flush by accident."
    ];
  }

  return [
    `Deadhead, trim, or thin ${plant.commonName} through the season to keep the planting neat and redirect energy into healthy new growth.`,
    "Remove weak, diseased, or floppy stems promptly so airflow improves and the strongest shoots take over.",
    "Use light but consistent cleanup instead of one severe cut whenever you want the plant to stay in bloom or active growth."
  ];
}

function buildWinterizingSection(plant) {
  const hardiness = lowerText(plant.hardiness, "its hardiness range");
  const fruitProfile = getFruitProfile(plant);
  const shrubProfile = getShrubProfile(plant);
  const houseplantProfile = getHouseplantProfile(plant);

  if (fruitProfile) {
    return buildFruitWinterizingSection(plant, fruitProfile);
  }

  if (shrubProfile) {
    return buildShrubWinterizingSection(plant, shrubProfile);
  }

  if (houseplantProfile) {
    return buildHouseplantWinterizingSection(plant, houseplantProfile);
  }

  if (isHerbPlant(plant)) {
    return [
      plant.lifespan === "Annual"
        ? `Treat ${plant.commonName} as a seasonal herb unless your climate lets it keep growing through winter within its ${hardiness} range.`
        : `Protect ${plant.commonName} through winter by cutting back only as needed and mulching lightly once the soil has cooled.`,
      plant.container === "Container" || plant.container === "Both"
        ? "Move containers to a brighter sheltered place or indoors before severe cold if the herb is only borderline hardy in your climate."
        : "Avoid late fall fertilizer that can push tender growth just before colder weather arrives.",
      "Take final cuttings or dry leaves before hard weather if you want to keep harvest quality going beyond the outdoor season."
    ];
  }

  if (plant.category === "Edible") {
    return [
      `Treat ${plant.commonName} according to its seasonal lifespan and local frost pattern so productive plants are not lost to an avoidable cold snap.`,
      plant.lifespan === "Annual"
        ? "Pull spent plants after final harvest, save seed or healthy starts if useful, and clear debris so pests and disease do not overwinter in the bed."
        : "Mulch crowns or root zones after the ground cools if this edible can overwinter in your climate.",
      plant.container === "Container" || plant.container === "Both"
        ? "Move containers, cover tender crops, or use a cold frame when you need to stretch the season beyond the first frosts."
        : "Finish the season with cleanup, compost, and crop rotation planning so next year's planting starts cleaner."
    ];
  }

  if (plant.lifespan === "Annual") {
    return [
      `Treat ${plant.commonName} as a seasonal planting unless your climate allows it to carry through winter within its ${hardiness} range.`,
      "Save seed, take cuttings, or bring healthy container plants inside before frost if you want to keep the variety going.",
      "Remove spent plants after frost and refresh the bed with compost or mulch before the next planting cycle."
    ];
  }

  return [
    `Water ${plant.commonName} before hard freeze-up if autumn has been dry and protect roots according to its ${hardiness} hardiness range.`,
    plant.container === "Container" || plant.container === "Both"
      ? "If grown in a pot, insulate or move the container so the root ball is not exposed to harsher cold than in-ground soil."
      : "Mulch the root zone lightly after the soil cools, keeping material away from direct crown or trunk contact.",
    isWoodyPlant(plant)
      ? "Delay heavy structural pruning until the safer season for that plant and remove only broken winter damage promptly."
      : "Wait for the right late-winter or spring cleanup window if old stems or foliage help insulate the crown."
  ];
}

function buildAutoPlantGuide(plant) {
  return {
    commonName: plant.commonName,
    slug: slugifyGuideName(plant.commonName),
    summary: buildAutoGuideSummary(plant),
    seeding: buildSeedingSection(plant),
    planting: buildPlantingSection(plant),
    maintenance: buildMaintenanceSection(plant),
    pruning: buildPruningSection(plant),
    winterizing: buildWinterizingSection(plant)
  };
}

function hydrateGuide(guide, plant) {
  if (!plant) {
    return guide || null;
  }

  const autoGuide = buildAutoPlantGuide(plant);
  const targetGuide = guide || autoGuide;

  targetGuide.slug = targetGuide.slug || autoGuide.slug;
  targetGuide.summary = targetGuide.summary || autoGuide.summary;
  targetGuide.seeding = hasGuideSection(targetGuide.seeding) ? targetGuide.seeding : autoGuide.seeding;
  targetGuide.planting = hasGuideSection(targetGuide.planting) ? targetGuide.planting : autoGuide.planting;
  targetGuide.maintenance = hasGuideSection(targetGuide.maintenance) ? targetGuide.maintenance : autoGuide.maintenance;
  targetGuide.pruning = hasGuideSection(targetGuide.pruning) ? targetGuide.pruning : autoGuide.pruning;
  targetGuide.winterizing = hasGuideSection(targetGuide.winterizing) ? targetGuide.winterizing : autoGuide.winterizing;

  if (!guide) {
    GARDENING_PLANT_GUIDES.push(targetGuide);
  }

  return targetGuide;
}

function getPlantGuideByName(name) {
  const existingGuide = GARDENING_PLANT_GUIDES.find((guide) => guide.commonName === name) || null;
  const plant = getPlantDatabaseEntryByName(name);

  if (existingGuide) {
    return hydrateGuide(existingGuide, plant);
  }

  if (plant) {
    return hydrateGuide(null, plant);
  }

  return null;
}

function getPlantGuideBySlug(slug) {
  const existingGuide = GARDENING_PLANT_GUIDES.find((guide) => guide.slug === slug || slugifyGuideName(guide.commonName) === slug) || null;

  if (existingGuide) {
    return hydrateGuide(existingGuide, getPlantDatabaseEntryByName(existingGuide.commonName));
  }

  const plant = getPlantDatabaseEntryBySlug(slug);
  if (plant) {
    return hydrateGuide(null, plant);
  }

  return null;
}

window.GARDENING_PLANT_GUIDES = GARDENING_PLANT_GUIDES;
window.GARDENING_GET_PLANT_GUIDE_BY_NAME = getPlantGuideByName;
window.GARDENING_GET_PLANT_GUIDE_BY_SLUG = getPlantGuideBySlug;

if (window.__PLANT_PLANNER_BOOT) {
  window.__PLANT_PLANNER_BOOT.guidesLoaded = true;
}
