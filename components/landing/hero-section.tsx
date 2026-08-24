export function HeroSection() {
  return (
    <section id="top" className="hero overflow-hidden">
      {/* Just added the animation class, relying on your global.css for the rest */}
      <img
        src="/images/masonry-0.jpg"
        alt="Craftsperson laying bricks"
        className="animate-image-zoom"
      />
      <div className="hero-wash" />

      <div className="container hero-content">
        <div className="hero-copy">

          <h1 className="opacity-0 animate-fade-in-up">
            Expert Bricklaying<br />for Lasting Quality
          </h1>

          <p className="opacity-0 animate-fade-in-up">
            Specializing in restoration, renovations, and new builds with unmatched attention to detail. Built on a foundation of structural integrity and artisanal precision.
          </p>

          <div className="button-row opacity-0 animate-fade-in-up [animation-delay:400ms]">
            <a className="button" href="#contact">Get a Quote</a>
            <a className="button button-outline" href="#gallery">View Our Work</a>
          </div>

        </div>
      </div>
    </section>
  )
}