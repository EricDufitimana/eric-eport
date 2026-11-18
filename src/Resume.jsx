import React, { useState } from 'react';
import './resume.css';
import resumeHeader from './resume-header.json';
import { resumeAwards } from './resume-awards';

const entries = [
  {name:'Yale Young African Scholar',location:'Nairobi, Kenya',role:'Participant',date:'August 2025 – August 2025',points:[
    'Participated in seminars and workshops on US college applications, essay writing, and personal statements.',
    'Collaborated with peers from across Africa on team projects and case studies, fostering cross-cultural problem-solving skills.',
    'Strengthened critical thinking, communication, and collaboration skills through interactive discussions and group activities.'
  ]},
  {name:'Raspberry Pi Code Club @ ASYV',location:'Rwamagana, Rwanda',role:'Co-founder and President',date:'April 2025 – Present',points:[
    'Established and scaled the first Raspberry Pi Foundation Code Club in Rwanda, democratizing digital literacy for a community of 70+ students.',
    'Led end-to-end instructional design for weekly workshops, focusing on deploying real-world applications and optimizing code efficiency.'
  ]},
  {name:'Robotics Club',location:'Rwamagana, Rwanda',role:'Co-founder and Vice-President',date:'June 2024 – Jan 2026',points:[
    'Founded and scaled the school’s first Robotics Club, recruiting and mentoring a team of students in hardware engineering and LEGO Spike Prime programming.',
    'Led the team to a 3rd-place national finish in the FIRST LEGO LEAGUE (FLL) competition during our inaugural year, competing against established programs across Rwanda.',
    'Architected the “Best Innovative Project” at the 2025 ASYV STEAM Fair, designing a technical solution that addressed local community challenges.',
    'Managed a budget and technical inventory for robotics kits, ensuring all members had hands-on “learn-by-doing” opportunities with sensors and motors.'
  ]},
  {name:'ASYV Debate Club',location:'Rwamagana, Rwanda',role:'Secretary (Grade 10); Vice President (Grade 11)',date:'Grades 10–11',points:[
    'Ran 20-minute daily sessions on rebuttals and thinking on the spot, helping coordinate speaking practice for 50+ members.',
    'Mentored first-year students who reached the semifinals of a national debate competition.'
  ]}
];

export default function Resume() {
  const [textView, setTextView] = useState(true);
  return <section id="resume" className="resume-section page-width" aria-labelledby="resume-heading">
    <div className="resume-toolbar"><div><p className="resume-kicker">EDUCATION & EXPERIENCE</p><h2 id="resume-heading">My résumé</h2></div><div className="resume-actions"><button onClick={()=>setTextView(!textView)} aria-pressed={textView}>{textView ? 'View PDF' : 'Read on page'}</button><a href="/documents/eric-dufitimana-resume.pdf" download>Download PDF ↓</a><a href="/documents/eric-dufitimana-resume.docx" download>Word ↓</a></div></div>
    {!textView ? <div className="resume-embed"><iframe src="/documents/eric-dufitimana-resume.pdf#view=FitH" title="Eric Dufitimana résumé — education, experience and additional information" loading="lazy"/><p>Prefer another view? <button onClick={()=>setTextView(true)}>Read the résumé as text</button> or <a href="/documents/eric-dufitimana-resume.pdf" target="_blank" rel="noreferrer">open the PDF</a>.</p></div> :
      <article className="resume-paper" aria-label="Résumé text version">
        <header><h3>{resumeHeader.name}</h3><p>{resumeHeader.contact}</p></header>
        <h4>EDUCATION</h4><div className="resume-entry"><div className="resume-row"><strong>Liquidnet Family High School @ Agahozo-Shalom Youth Village (ASYV)</strong><span>Rwamagana, Rwanda</span></div><div className="resume-row"><em>Advanced Level</em><span>Expected Graduation: July 2027</span></div><p>Private, full English instruction school in Rwamagana, Rwanda</p><p>Combination: Mathematics, Physics, Computer</p></div>
        <h4>WORK EXPERIENCE & EXTRACURRICULARS</h4>{entries.map(entry=><div className="resume-entry" key={entry.name}><div className="resume-row"><strong>{entry.name}</strong><span>{entry.location}</span></div><div className="resume-row"><em>{entry.role}</em><span>{entry.date}</span></div><ul>{entry.points.map(point=><li key={point}>{point}</li>)}</ul></div>)}
        <h4>ADDITIONAL INFORMATION</h4><div className="resume-entry"><p><strong>Languages:</strong> Kinyarwanda (native), English (fluent)</p><p><strong>Certifications:</strong> Intro to Web Development (CodeAcademy), Intro to Programming (Georgia Tech on edX)</p><p><strong>Interests:</strong> Web App Development, Artificial Intelligence, Basketball, Public Speaking</p><p><strong>Skills:</strong> React, Next.js, JavaScript, Tailwind CSS</p><p className="resume-awards"><strong>Awards:</strong> {resumeAwards.map(award => award.resumeLabel || award.title).join(', ')}.</p></div>
      </article>}
  </section>;
}
