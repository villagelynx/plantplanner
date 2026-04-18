# Plant Planner

Static web app for filtering and ranking plants based on project criteria.

Current domain: `gardenplannertool.com`

## Features

- Filter by sunlight, soil, water, indoor/outdoor, color, climate, hardiness, growth habit, bloom season, pollinator value, toxicity, pest resistance, drainage, wind exposure, container suitability, pruning needs, lifespan, cost, and purpose.
- Shows best matches first with a score out of 10.
- Displays common name, Latin name, and a generic plant image card.
- Supports real plant photos when available, with automatic fallback to the generated image when no photo is provided.
- Includes a ZIP/postal-code hardiness lookup helper on the main planner.
- Includes a separate local nursery browse page for regional nursery leads.

## Run

Open `index.html` in a browser.

Image manager:

- Open `images.html` to drag and drop saved photos for plants across the database.
- Those saved photos are stored in your browser on that computer and automatically override the generated plant images.

Nursery page:

- Open `nurseries.html` to browse curated nursery leads by region, city, or ZIP/postal search text.

Optional local server:

```powershell
py -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Real Photos

Place licensed plant photos in the `images` folder and point plant records to them in `app.js`.

The planner now also auto-detects permanent image files by filename, so you can drop photos in:

`images/plants/`

using the slugified common name or Latin name, for example:

- `images/plants/blueberry.jpg`
- `images/plants/vaccinium-corymbosum.jpg`
- `images/plants/snake-plant.png`
- `images/plants/monstera-deliciosa.webp`

Supported auto-detected extensions:

- `.jpg`
- `.jpeg`
- `.png`
- `.webp`
- `.gif`

For the top 20 popular plants, the app also supports automatic image pickup from:

`images/popular/`

using matching filenames such as `lavender.jpg`, `hydrangea.jpg`, `snake-plant.jpg`, `monstera.jpg`, and `aloe-vera.jpg`.

Supported fields:
- `image`
- `imageUrl`
- `photo`
- `photoUrl`
- `imagePath`
- `photoPath`
- `imageFile`
- `photoFile`

Image lookup order is:

1. Explicit image fields on the plant record
2. Saved browser image from `images.html`
3. Popular image mapping
4. Auto-detected files in `images/plants/`
5. Built-in generated illustration

If none of those are available, the app automatically uses the built-in generated illustration.
