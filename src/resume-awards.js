import { honors } from './content.js';

// A focused résumé selection; the complete honors index stays on the page.
const selection = [
  ['yale-delegate', 'Yale MAU V — Best Delegate', 'International · Grade 11'],
  ['green-hills', 'Green Hills MUN — Best Delegate', 'National · Grade 11'],
  ['idebate', 'iDebate — Team Champions', '2024 · 1st of 54 teams · Grade 10'],
  ['first-lego', 'FIRST LEGO League Rwanda — 3rd place', 'Innovation Project · National team · 2025'],
  ['yyas', 'Yale Young African Scholars — Selected', 'International · 2025 residential participant'],
  ['academic', 'ASYV Best Annual Academic Performer (2024 & 2025)', 'Earned twice · 2024 & 2025'],
];

export const resumeAwards = selection.map(([id, title, detail]) => ({
  ...honors.find(honor => honor.id === id), title, detail,
  resumeLabel: id === 'first-lego' ? 'FIRST LEGO League Rwanda Innovation Project — 3rd place (team)' : id === 'idebate' ? 'iDebate Tournament Champions (team)' : title,
}));
