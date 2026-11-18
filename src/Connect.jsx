import React from 'react';
import { profile } from './content';
import './connect.css';

export default function Connect({ children }) {
  return <section id="connect" className="connect-section" aria-labelledby="connect-title"><div className="page-width">
    <div className="connect-content"><p className="eyebrow">GET IN TOUCH</p><h2 id="connect-title">Want to connect?</h2><p className="connect-intro">Have a project in mind, a question, or something you’d like to share? I’d love to hear from you.</p>
      <div className="connect-links"><a href={`mailto:${profile.email}`}><span className="connect-label">EMAIL</span><span className="connect-destination">{profile.email}<span aria-hidden="true">↗</span></span></a><a href={profile.contact} target="_blank" rel="noopener noreferrer"><span className="connect-label">LINKEDIN</span><span className="connect-destination">Let’s connect on LinkedIn<span aria-hidden="true">↗</span></span></a></div>
    </div>{children}
  </div></section>;
}
