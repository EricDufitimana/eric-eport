import React from 'react';
import { scores } from './content';

export default function Academics() {
  return <section id="academics" className="academics-section" aria-labelledby="academics-title">
    <div className="page-width">
      <div className="academics-heading"><div><p className="eyebrow">ACADEMIC BACKGROUND</p><h2 id="academics-title">Academics</h2></div><p>Grade 12 at Agahozo-Shalom Youth Village, Rwanda.<br />Mathematics, Physics & Computer Science.</p></div>
      <div className="academic-scores">
        {scores.map(score => <div className="academic-stat" key={score.name}><span className="academic-label">{score.name}</span><p><strong>{score.score}</strong><span>/ {score.outOf}</span></p></div>)}
        <div className="academic-stat academic-recognition"><span className="academic-label">ASYV Best Annual Academic Performer</span><p><strong>2024 <span>&</span> 2025</strong></p><span className="academic-note">Recognized in both years</span></div>
      </div>
      <div className="academic-study"><h3>Learning in class.<br />Applying it beyond class.</h3><p>My studies in Mathematics, Physics, and Computer Science connect with my interest in software development and artificial intelligence. Outside class, I have explored machine learning through Kaggle, studied with CMU CS Academy, and worked through week four of CS50x. I apply what I learn in the software I build for my school.</p></div>
    </div>
  </section>;
}
