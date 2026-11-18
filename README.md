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

- The résumé appears directly after the hero. `src/Resume.jsx` preserves the document’s serif typography, rules, aligned roles/dates, and bullets in a responsive text view. A generated PDF and edited Word copy are in `public/documents`.
- The résumé uses six selected honors from `src/resume-awards.js` in a plain comma-separated paragraph. The complete 15-entry Honors index stays on the site. Keep downloads in sync: `scripts/export-resume.mjs` regenerates the PDF, then `scripts/update-resume-awards.py` updates the Word awards.
- `src/Academics.jsx` follows the résumé: SAT 1520, Duolingo 145, ASYV Best Annual Academic Performer in 2024 and 2025, subjects, and self-directed study. Scores come from `src/content.js`.
- `src/professional-theme.css` is the active final palette: navy, white, light slate, and one blue accent. The hero and résumé remain white; Academics uses navy. Earlier theme files are base styles only.
- `src/project-colors.css` distinguishes project cards with muted blue, lavender, teal, and warm gray. Screenshots keep their original colors on white.
- Extracurriculars close the main content, replacing About. `src/Connect.jsx` follows them with a large “Want to connect?” heading, the email supplied in the résumé, LinkedIn, and the footer.
- The extracurricular index includes Code Club, Debate Club, Robotics & Innovation Club, ASYV Live Band, Isano Isangiwe, and Student Government. The résumé keeps its separate shorter selection, with Debate Club replacing Jackal Tech there.
- MOVA is clearly described as a prototype and business pitch.
- The supplied LinkedIn is used for contact. The résumé contact line is copied from the supplied document.
- Spelling Bee, Growthwave, and Model UN are removed from the extracurricular index. Delegate awards and their photographs remain in Honors.
- The application-dependent “Sure” interaction is removed. Creative activities stand on their own with named groups, performances, and contributions.
