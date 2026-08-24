import { AboutSection } from '@/components/landing/about-section'
import { ContactSection } from '@/components/landing/contact-section'
import { GallerySection } from '@/components/landing/gallery-section'
import { HeroSection } from '@/components/landing/hero-section'
import { ServicesSection } from '@/components/landing/services-section'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteHeader } from '@/components/landing/site-header'
import { StatementSection } from '@/components/landing/statement-section'

export default function Page() {
  return <main className="site-shell">
    <SiteHeader />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <GallerySection />
    <StatementSection />
    <ContactSection />
    <SiteFooter />
  </main>
}
