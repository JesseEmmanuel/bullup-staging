"use client";

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Arrow, services } from './data';

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section overflow-hidden" id="services">
      <div className="container">

        {/* HEADING: Slides in from the left */}
        <div className={`section-heading ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <h2>
            Our Capabilities
          </h2>
          <p>
            Engineered solutions for residential and commercial masonry.
          </p>
        </div>

        <div className={`service-grid  ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {services.map((service, index) => (
            <article
              className={`service-card`}
              key={service.title}
              style={isVisible ? { animationDelay: `${index * 200 + 400}ms` } : {}}
            >
              <div className="card-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="tags">
                {service.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#contact">{service.link} <Arrow /></a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}