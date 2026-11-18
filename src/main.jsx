import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { activities, honors, learning, profile, projects, tracks } from './content';
import './styles.css';

const navigation = [['work', 'Work'], ['leadership', 'Leadership'], ['creative', 'Creative life'], ['honors', 'Honors'], ['about', 'About']];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '↗'}</span>;
}

function Asterisk({ className = '' }) {
  return <svg className={`asterisk ${className}`} viewBox="0 0 100 100" fill="none" aria-hidden="true">{[0, 45, 90, 135].map(angle => <path key={angle} d="M50 8V92" stroke="currentColor" strokeWidth="10" transform={`rotate(${angle} 50 50)`} />)}</svg>;
}

function ProjectImage({ project, hero = false }) {
  const [failed, setFailed] = useState(false);
  return <div className={`project-image image-${project.id} ${hero ? 'hero-image' : ''}`}>
    {!failed && project.image ? <img src={project.image} alt={project.alt} loading={hero ? 'eager' : 'lazy'} onError={() => setFailed(true)} /> :
      <div className="image-fallback"><span className="eyebrow">{project.name}</span><p>{project.title}</p><ol>{project.fallback?.map(item => <li key={item}>{item}</li>)}</ol><span className="image-note">{hero ? 'The wheel we use to draw school matchups.' : 'A closer look at the project'}</span></div>}
  </div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    }), { rootMargin: '-15% 0px -60% 0px' });
    navigation.forEach(([id]) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    const onKey = event => { if (event.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } };
    document.addEventListener('keydown', onKey);
    return () => { observer.disconnect(); document.removeEventListener('keydown', onKey); };
  }, []);
  return <header className="site-header"><div className="header-inner">
    <a href="#home" className="wordmark" aria-label="Eric Dufitimana, home">ed<span>.</span></a>
    <button id="menu-toggle" className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button>
    <nav id="main-nav" aria-label="Main navigation" className={open ? 'is-open' : ''}>{navigation.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <span className="header-location"><span className="status-dot" /> A student in Rwanda</span>
  </div></header>;
}

function SectionLabel({ number, children, aside }) {
  return <div className="section-label"><span><span className="section-number">{number}</span>{children}</span>{aside && <span className="label-aside">{aside}</span>}</div>;
}

function Hero() {
  return <section id="home" className="hero page-width">
    <div className="hero-kicker eyebrow"><span>SOFTWARE, WORDS & EVERYTHING BETWEEN.</span><span>BASED IN RWANDA <span aria-hidden="true">↙</span></span></div>
    <div className="name-line"><h1>Eric Dufitimana<span className="name-period">.</span></h1><Asterisk /></div>
    <div className="hero-grid"><div className="hero-copy">
      <p className="small-intro">Hello, I’m Eric <span aria-hidden="true">↗</span></p>
      <h2>A curious mind.<br />A <em>work in progress.</em></h2>
      <p className="intro-text">{profile.introduction}</p>
      <div className="hero-links"><a href="#work" className="button-primary">Explore my work <Arrow /></a><a href="#creative" className="text-link">Beyond the screen <span aria-hidden="true">↓</span></a></div>
      <div className="hero-footnote"><span className="status-dot" /> Grade 12 · Mathematics, Physics & Computer Science</div>
    </div><figure className="hero-feature"><div className="hero-photo-top"><span>FROM AN IDEA TO OUR SCHOOL PITCH</span><span>003 / SELECTED WORK</span></div><a href="#champions" className="hero-image-link" aria-label="Read the Champions League Tracker project story"><ProjectImage project={projects[2]} hero /><span className="round-link"><Arrow /></span></a><figcaption><span>The wheel we use to draw school matchups.</span><span className="handwritten">made for the people here ↗</span></figcaption></figure></div>
    <div className="hero-bottom"><span>BUILDING THINGS. FINDING MY VOICE.</span><a href="#work">A few things I’ve put into the world <span aria-hidden="true">↓</span></a></div>
  </section>;
}

function MovaVisual() {
  return <div className="mova-visual" role="img" aria-label="MOVA concept: a basic-phone passenger requests a moto and connects with a driver by phone number"><div className="mova-top"><span>MOVA</span><span>A shorter way<br />to your next ride.</span></div><div className="mova-route"><span className="route-point" /><span className="route-line" /><span className="route-point end" /></div><div className="mova-bottom"><span>BASIC PHONE<br /><strong>You</strong></span><span>USSD → PHONE NUMBER</span><span>MOTO DRIVER<br /><strong>Your ride</strong></span></div><span className="mova-note">A concept in motion. A prototype for now.</span></div>;
}

function Work() {
  return <section id="work" className="work page-width"><SectionLabel number="01" aside="BUILT AROUND REAL PEOPLE">SELECTED WORK</SectionLabel><div className="section-heading"><h2>Small beginnings.<br /><em>Useful things.</em></h2><p>Most of my projects started with something I noticed at school. Then came the question: could I build something to help?</p></div>
    {projects.map((project, index) => <article key={project.id} id={project.id} className={`project project-${project.id}`}><div className="project-meta"><span>PROJECT {project.number}</span><span>{project.category}</span></div><div className="project-layout"><div className="project-copy"><span className="project-name">{project.name}</span><h3>{project.title.split('\n').map((line, i) => <React.Fragment key={line}>{i > 0 && <br />}{line}</React.Fragment>)}</h3><p>{project.description}</p><p className="project-detail">{project.detail}</p><div className="project-impact"><span className="status-dot" />{project.impact}</div>{project.technology && <span className="technical-note">{project.technology}</span>}{project.url && <a className="text-link project-link" href={project.url} target="_blank" rel="noreferrer">{project.linkLabel} <Arrow /></a>}</div><div className="project-visual">{project.id === 'mova' ? <MovaVisual /> : <ProjectImage project={project} />}{index === 0 && <div className="visual-caption"><span>01 — Helping students find their next step.</span><span>Built for ASYV</span></div>}</div></div></article>)}
  </section>;
}

function Leadership() {
  return <section id="leadership" className="leadership page-width"><SectionLabel number="02" aside="BETTER WHEN WE DO IT TOGETHER">LEADERSHIP & COMMUNITY</SectionLabel><div className="section-heading"><h2>Showing up.<br /><em>Bringing others along.</em></h2><p>A good idea gets better when other people have room to make it their own.</p></div><div className="activity-list">{activities.map((activity, index) => <article key={activity.name} className="activity"><span className="activity-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{activity.name}</h3><span className="activity-role">{activity.role}</span></div><div><p>{activity.text}</p>{activity.honor && <a className="inline-link" href={`#${activity.honor}`}>Team recognition <Arrow /></a>}{activity.honors?.map(honor => <a key={honor.id} className="inline-link" href={`#${honor.id}`}>{honor.label} <Arrow /></a>)}</div></article>)}</div><div className="learning"><div><span className="eyebrow">STILL A STUDENT. ALWAYS A LEARNER.</span><h3>Beyond the<br /><em>classroom.</em></h3></div><dl>{learning.map(([name, detail]) => <div key={name}><dt>{name}</dt><dd>{detail}</dd></div>)}</dl></div></section>;
}

function Creative() {
  return <section id="creative" className="creative"><div className="page-width"><SectionLabel number="03" aside="THERE’S MORE THAN ONE WAY TO SAY IT">BEYOND THE SCREEN</SectionLabel><h2 className="sure-line"><span>Sure!</span><span>Sure…</span><span><em>Sure?</em></span><span>Suuure.</span></h2><div className="sure-caption"><span>Same word. Four different deliveries.</span><span>Writing, performing, and paying attention.</span></div><div className="creative-intro"><h3>A different kind<br />of <em>expression.</em></h3><p>I write poems about growth and love, act in school productions, and sing with the school band for audiences of 550+. Some ideas need a stage instead of a screen.</p></div><div className="editorial-grid"><article className="editorial music"><span className="eyebrow">01 / ON MUSIC & CURIOSITY</span><h3>Who picked<br /><em>the next song?</em></h3><p>A music recommendation from my brother led me toward Frank Ocean. I like discovering music that makes me want to listen more closely.</p><p>As a programmer, that curiosity turns into another question: how does a recommendation system decide what I should hear next? And what might I miss if it only learns what I already like?</p><div className="tracklist"><div><span>IN THE ROTATION</span><span>FRANK OCEAN</span></div><ol>{tracks.map((track, index) => <li key={track}><span className="track-number">0{index + 1}</span><span>{track}</span><span aria-hidden="true">↗</span></li>)}</ol></div></article><article className="editorial stage"><span className="eyebrow">02 / ON MAKING SPACE</span><h3>Leaving room<br /><em>on stage.</em></h3><p>In my reflection on Village Time theatre, I wrote about removing the MCs and learning to leave more room for the people performing.</p><p>I think about that when I teach code or mentor younger students, too. Sometimes my contribution is to step back and give someone else the space to try.</p><div className="poem-space"><Asterisk /><p>Some things are<br />still being written.</p><span>A space for a poem or a moment from the stage.</span></div></article></div><div className="creative-bottom"><span>ALSO IN THE MIX</span><span>Guitar <i>·</i> Music discovery <i>·</i> Film <i>·</i> Poetry <i>·</i> Theatre</span></div></div></section>;
}

function Honors() {
  return <section id="honors" className="honors page-width"><SectionLabel number="04" aside="INDIVIDUAL EFFORT. SHARED ACHIEVEMENTS.">HONORS & RECOGNITION</SectionLabel><div className="section-heading"><h2>A few milestones<br /><em>along the way.</em></h2><p>Selections, wins, and lessons along the way. The team achievements belong to all of us.</p></div><div className="honors-table-wrap"><table><caption className="sr-only">Complete honors index, with grade and recognition context</caption><thead><tr><th scope="col">RECOGNITION</th><th scope="col">GRADE</th><th scope="col">CONTEXT</th></tr></thead><tbody>{honors.map(honor => <tr key={honor.id} id={honor.id}><th scope="row">{honor.name}</th><td>{honor.grade}</td><td>{honor.context}</td></tr>)}</tbody></table></div></section>;
}

function About() {
  return <section id="about" className="about page-width"><SectionLabel number="05">A LITTLE ABOUT ME</SectionLabel><div className="about-grid"><div><h2>Still curious.<br /><em>Still becoming.</em></h2><Asterisk /></div><div className="about-copy"><p>I’m Eric, a Grade 12 student studying Mathematics, Physics, and Computer Science at Agahozo-Shalom Youth Village in Rwanda.</p><p>I build software for my school, speak and debate, and find a different voice through poetry, theatre, and music. I’m interested in what happens when the things I learn become useful to the people around me.</p><p className="away"><span className="eyebrow">AWAY FROM THE KEYBOARD</span>Basketball, guitar, and a good film.</p>{profile.contact && <a className="text-link" href={profile.contact}>Get in touch <Arrow /></a>}</div></div><footer><a href="#home" className="wordmark">ed<span>.</span></a><span>Eric Dufitimana · Made with curiosity, in Rwanda.</span><a href="#home" className="text-link">Back to top <span aria-hidden="true">↑</span></a></footer></section>;
}

function App() {
  return <><a href="#main" className="skip-link">Skip to content</a><Header /><main id="main"><Hero /><Work /><Leadership /><Creative /><Honors /><About /></main></>;
}

createRoot(document.getElementById('root')).render(<App />);
