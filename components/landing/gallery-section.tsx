'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { gallery } from './data'

export function GallerySection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="section gallery-section" id="gallery">
      <div className="container">
        <div className={`section-heading ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <h2>Our Recent Work</h2>
          <div className="rule" />
        </div>
        <div className={`gallery-grid ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {gallery.map(([image, title]) =>
            <figure className="gallery-item" key={title}><img src={image} alt={title} />
              <figcaption>{title}</figcaption>
            </figure>)}
        </div>
      </div>
    </section>
  )
}
