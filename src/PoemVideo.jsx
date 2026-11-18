import React, { useState } from 'react';
import './poem.css';

export default function PoemVideo() {
  const [failed, setFailed] = useState(false);
  return <article className="poem-feature" aria-labelledby="poem-title" data-reveal>
    <div className="poem-copy">
      <span className="handwritten">a poem, a microphone, and me.</span>
      <span className="eyebrow">YALE YOUNG AFRICAN SCHOLARS · TALENT SHOW</span>
      <h3 id="poem-title">My poetry,<br />on stage.</h3>
      <p>I performed this poem at the Yale Young African Scholars talent show. Watch the recording here.</p>
      <a className="simple-link" href="https://photos.app.goo.gl/3RtVTUVpuYxgUhNMA" target="_blank" rel="noreferrer">OPEN ORIGINAL IN GOOGLE PHOTOS ↗</a>
    </div>
    <figure className="poem-recording">
      {failed ? <div className="poem-error" role="status"><p>The recording could not load.</p><a className="button" href="https://photos.app.goo.gl/3RtVTUVpuYxgUhNMA" target="_blank" rel="noreferrer">Watch on Google Photos ↗</a></div> :
        <video controls playsInline preload="metadata" poster="/images/yyas-poem-poster.jpg" aria-label="Eric performing a poem at the Yale Young African Scholars talent show" onError={() => setFailed(true)}>
          <source src="/images/yyas-poem.mp4" type="video/mp4" />
          Your browser cannot play this video. <a href="https://photos.app.goo.gl/3RtVTUVpuYxgUhNMA">Watch the original recording.</a>
        </video>}
      <figcaption>POETRY PERFORMANCE / YYAS TALENT SHOW</figcaption>
    </figure>
  </article>;
}
