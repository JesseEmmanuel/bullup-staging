'use client'

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function StatementSection() {

  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="statement">
      <div className="container statement-inner">
        <div className={`${isVisible ? 'animate-fade-in-from-left' : 'opacity-0'}`}>
          <span className="eyebrow">THE BULLPUP STANDARD</span>
          <h2>Built to endure.<br />Crafted to impress.</h2>
        </div>
        <p className={`${isVisible ? 'animate-fade-in-from-right' : 'opacity-0'}`}>
          Every project is a testament to our commitment to precision, durability, and the timeless beauty of brickwork. We don&apos;t just build walls; we build legacies.
        </p>
      </div>
    </section>
  )
}
