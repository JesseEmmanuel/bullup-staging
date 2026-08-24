'use client'

import { FormEvent, useState } from 'react'
import { DottedMap } from '@/components/ui/dotted-map'
import { Arrow, serviceMapMarkers } from './data'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function ContactSection() {
  const [sent, setSent] = useState(false)
  const { ref, isVisible } = useScrollAnimation()
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true) }
  return (
    <section ref={ref} className="contact section" id="contact">
      <div className="contact-map" aria-hidden="true">
        <DottedMap width={150} height={75} mapSamples={4200} markers={serviceMapMarkers} dotColor="rgba(45,45,45,.19)" markerColor="#aa301a" dotRadius={0.22} pulse />
      </div>
      <div className="container contact-grid">
        <div className={`contact-copy ${isVisible ? 'animate-fade-in-from-left' : 'opacity-0'}`}>
          <span className="eyebrow">
            START A PROJECT
          </span>
          <h2>Let&apos;s build
            <br />something lasting.
          </h2>
          <p>Tell us about your project and our team will be in touch to discuss how we can bring your vision to life.
          </p>
          <div className="contact-meta"><span>BUILT WITH INTEGRITY
          </span>
            <span>SYDNEY · NSW
            </span>
          </div>
        </div>
        <form className={`${isVisible ? 'animate-fade-in-from-right' : 'opacity-0'}`} onSubmit={submit}>
          <label>Name<input required name="name" placeholder="Your full name" />
          </label>
          <label>Email<input required type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>Project details<textarea required name="details" placeholder="Tell us about your project" rows={4} />
          </label>
          <button className="button" type="submit">{sent ? 'Request Received' : 'Request a Quote'}
            <Arrow />
          </button>
        </form>
      </div>
    </section>
  )
}
