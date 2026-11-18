# Eric Dufitimana — React portfolio

Independent React + Vite project, outside the zleague folder. Local only; nothing has been published.

## Run

```sh
npm install
npm run dev
```

Open the Local URL Vite prints. The default is http://127.0.0.1:5173; if it is occupied, Vite automatically selects the next available port.

```sh
npm run build
npm run preview
```

## Edit

- `src/content.js`: projects, confirmed external links, activities, scores, honors, and image captions.
- `src/main.jsx`: page structure, original SVG illustrations, accessible screenshot dialog, and editorial text.
- `src/styles.css`: white grid, cyan/pink/yellow/mint palette, Flux headings, handwritten notes, responsive layouts and motion.
- `src/stack.js`: scroll-driven project stacking. Desktop cards slide over the previous card, which gently scales back. Small screens and reduced-motion settings keep the cards readable without overlap.
- `public/images`: user-supplied project screenshots and photos. Project screenshots retain their original colors on white, without tinted backing.
- `src/PoemVideo.jsx` and `src/poem.css`: YYAS talent-show poem recording, with native in-page playback controls. The public shared video and poster are saved as `public/images/yyas-poem.mp4` and `yyas-poem-poster.jpg`, so playback does not depend on expiring Google Photos streaming URLs. The original Google Photos link remains available.

Design reference: https://nudge-folio.framer.website/. The public reference supplied the Flux display font asset; handwritten and body fonts use Google Fonts. Illustrations are original SVG components.

## Checks

With the dev server running, `npm run check` checks responsive widths, navigation, screenshot dialogs, images, content, keyboard access, and reduced motion. Set `PORTFOLIO_URL` if the dev server uses another port.

## Private handoff

- Confirm Jackal Tech officer title and current project maintenance status before publishing.
- Debate Club currently uses “Debate Club leadership”; verify the final officer sequence in the activity record before publishing.
- MOVA is clearly described as a prototype and business pitch.
- No public contact address was supplied, so no contact destination is invented.
- Spelling Bee, Growthwave, and Model UN are removed from the extracurricular index. Delegate awards and their photographs remain in Honors.
- The application-dependent “Sure” interaction is removed. Creative activities stand on their own with named groups, performances, and contributions.
