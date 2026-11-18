import { useEffect } from 'react';

export function useProjectStack() {
  useEffect(() => {
    const cards = [...document.querySelectorAll('.project')];
    const media = matchMedia('(min-width:901px) and (min-height:700px) and (prefers-reduced-motion:no-preference)');
    cards.forEach((card, i) => {
      card.style.setProperty('--stack-index', i);
      card.style.setProperty('--stack-layer', i + 1);
    });
    let frame;
    const update = () => {
      frame = null;
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        const progress = media.matches && next ? Math.max(0, Math.min(1, (innerHeight * .8 - next.getBoundingClientRect().top) / (innerHeight * .8 - 100))) : 0;
        card.style.setProperty('--stack-scale', 1 - progress * .045);
        card.style.setProperty('--stack-brightness', 1 - progress * .06);
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', schedule);
    update();
    return () => { removeEventListener('scroll', schedule); removeEventListener('resize', schedule); cancelAnimationFrame(frame); };
  }, []);
}
