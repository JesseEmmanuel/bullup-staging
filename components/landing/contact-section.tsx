'use client'

import { FormEvent, useState } from 'react'
import { DottedMap } from '@/components/ui/dotted-map'
import { Arrow, serviceMapMarkers } from './data'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Briefcase, Check, Copy, Mail, Phone, Search } from 'lucide-react'

export function ContactSection() {
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(null), 2000) // Reset after 2 seconds
  }
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
          <p>
            Tell us about your project and our team will be in touch to discuss how we can bring your vision to life.
          </p>
          <div className='flex flex-col gap-4 mt-4 justify-center'>

            {/* Phone */}
            <span className='flex gap-2 items-center group'>
              <Phone size={15} />
              <p
                onClick={() => handleCopy('(+61) 424 775 116')}
                className='text-sm! font-bold cursor-pointer hover:text-[#dca75a] transition-colors flex items-center gap-2'
                title="Copy phone number"
              >
                (+61) 424 775 116
                {copied === '(+61) 424 775 116' ? (
                  <Check size={14} className="text-green-500" />
                ) : (
                  <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                )}
              </p>
            </span>

            {/* Email */}
            <span className='flex gap-2 items-center group'>
              <Mail size={15} />
              <p
                onClick={() => handleCopy('BULLPUP2024@outlook.com')}
                className='text-sm! font-bold cursor-pointer hover:text-[#dca75a] transition-colors flex items-center gap-2'
                title="Copy email address"
              >
                BULLPUP2024@outlook.com
                {copied === 'BULLPUP2024@outlook.com' ? (
                  <Check size={14} className="text-green-500" />
                ) : (
                  <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                )}
              </p>
            </span>

            {/* ABN */}
            <span className='flex gap-2 items-center group'>
              <Search size={15} />
              <p
                onClick={() => handleCopy('86 675 953 349')}
                className='text-sm! font-bold cursor-pointer hover:text-[#dca75a] transition-colors flex items-center gap-2'
                title="Copy ABN"
              >
                (ABN): 86 675 953 349
                {copied === '86 675 953 349' ? (
                  <Check size={14} className="text-green-500" />
                ) : (
                  <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                )}
              </p>
            </span>

          </div>
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
