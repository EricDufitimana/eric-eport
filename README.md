# Eric Dufitimana — ePortfolio

A standalone React + Vite portfolio. It is independent of the parent league app. Nothing is published automatically.

## Local preview

```sh
cd eric-portfolio
npm install
npm run dev
```

Open the Local URL printed by Vite (normally http://127.0.0.1:5173).

```sh
npm run build
npm run preview
```

## Editing

- `src/content.js`: profile, project descriptions, roles, learning, all 15 honors, and track names.
- `src/main.jsx`: editorial copy and page components.
- `src/styles.css`: responsive layout, colors, typography, and reduced-motion behavior.
- Screenshots: add `public/images/career.webp`, `public/images/clubs.webp`, and `public/images/champions.webp`. Real images automatically replace the text layouts. The champion screenshot is also used in the homepage feature. Use public-safe images only. The supplied remote image sources returned HTTP 403 during implementation; no replacement photographs or screenshots are fabricated.
- Add a confirmed public URL or `mailto:` address to `profile.contact` to display a contact link. Unknown project links stay hidden.

## Private handoff — before publishing

- Confirm the sequence of Debate Club officer titles. The public page currently says “Debate Club leadership.”
- Confirm the Jackal Tech officer title. The page currently says “Student software team.”
- Confirm current/completed status of Code Club and other activities; completed roles are described in past tense.
- Confirm project deployment/maintenance status, particularly the Career Resources Center revamp and Clubs Management System.
- MOVA remains labeled a prototype and business pitch; no projected figures are presented as impact.
- Supply the three public-safe screenshots when ready, and optionally a performance photograph or original poem. No real performance photo or poem is implied by the placeholder.
- No public contact details have been supplied. No contact destination is invented.
- Review content before publishing. No application essays, private family details, or personal identities are included.

## Design reference

Inspired by https://nudge-folio.framer.website/: oversized introductory typography, restrained navigation, numbered project stories, generous spacing, and playful editorial accents. The warm paper, deep green, Instrument Serif/DM Sans pairing, first-person content, and equal attention to creative work follow the supplied portfolio brief.
