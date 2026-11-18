import React from 'react';

export default function Landing() {
  return <section id="home" className="landing" aria-labelledby="landing-name">
    <div className="landing-inner page-width">
      <div className="landing-copy">
        <p className="landing-eyebrow">STUDENT · SOFTWARE DEVELOPER · RWANDA</p>
        <h1 id="landing-name">Eric<br />Dufitimana<span>.</span></h1>
        <p className="landing-role">I build software for my school and the people around me.</p>
        <div className="landing-description">
          <p>I’m a Grade 12 student at Agahozo-Shalom Youth Village in Rwanda, studying Mathematics, Physics, and Computer Science. I like taking a problem I notice in everyday school life and working out how software could help.</p>
          <p>That has led me to build platforms for career resources, school clubs, and our friendly sports games. Outside programming, I teach web development, debate, rap with the ASYV Live Band, and write and perform poetry with Isano Isangiwe.</p>
        </div>
        <div className="landing-actions">
          <a className="landing-primary" href="#work">Explore my projects <span aria-hidden="true">↗</span></a>
          <a className="landing-secondary" href="#leadership">My activities <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <figure className="landing-portrait">
        <img src="/images/eric-portrait.jpg" alt="Eric Dufitimana speaking into a microphone at an ASYV podium" width="500" height="497" fetchPriority="high" />
        <figcaption><span>ERIC DUFITIMANA</span><span>Agahozo-Shalom Youth Village</span></figcaption>
      </figure>
    </div>
    <div className="landing-bottom page-width"><span>Building, learning, and sharing what I know.</span><a href="#work">SELECTED PROJECTS ↓</a></div>
  </section>;
}
