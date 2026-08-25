'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface GallerySectionProps {
  dynamicImages?: string[];
}

export function GallerySection({ dynamicImages = [] }: GallerySectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const beforeAfterWork = [
    {
      id: 1,
      before: '/before-after/before-1.jpg',
      after: '/before-after/after-1.jpg',
    },
    {
      id: 2,
      before: '/before-after/before-2.jpg',
      after: '/before-after/after-2.jpg',
    }
  ];
  const masonryColumns = [
    dynamicImages.filter((_, index) => index % 4 === 0),
    dynamicImages.filter((_, index) => index % 4 === 1),
    dynamicImages.filter((_, index) => index % 4 === 2),
    dynamicImages.filter((_, index) => index % 4 === 3),
  ];

  return (
    <section ref={ref} className="section gallery-section py-16" id="gallery">
      <div className="container mx-auto px-4">

        <div className={`section-heading mb-12 text-center ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Recent Work</h2>
          <div className="rule w-16 h-1 bg-[#dca75a] mx-auto mb-8" />
        </div>
        <div className={`mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold mb-6 text-[#111827] text-center uppercase tracking-widest">
            Transformations
          </h3>

          <div className="flex flex-col gap-12">
            {beforeAfterWork.map((project) => (
              <div key={project.id} className="flex flex-col md:flex-row gap-4">
                <div className="relative group w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg">
                  <img src={project.before} alt={`Before`} className="w-full h-64 md:h-80 object-cover" />
                  <div className="absolute top-4 left-4 bg-black/80 text-white px-4 py-1.5 text-xs font-black tracking-widest uppercase rounded shadow">Before</div>
                </div>

                <div className="relative group w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg border-2 border-[#dca75a]">
                  <img src={project.after} alt={`After`} className="w-full h-64 md:h-80 object-cover" />
                  <div className="absolute top-4 right-4 bg-[#dca75a] text-[#111827] px-4 py-1.5 text-xs font-black tracking-widest uppercase rounded shadow">After</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {dynamicImages.length > 0 && (
          <div className={`mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} [animation-delay:200ms]`}>
            <h3 className="text-2xl font-bold mb-8 text-[#111827] text-center uppercase tracking-widest">
              Project Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {masonryColumns.map((column, colIndex) => (
                <div key={colIndex} className="grid gap-4 h-fit">
                  {column.map((imagePath, imgIndex) => {
                    const fileName = imagePath.split('/').pop()?.split('.')[0] || '';
                    const title = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

                    return (
                      <figure
                        key={imgIndex}
                        className="relative overflow-hidden rounded-xl group cursor-pointer shadow-md bg-gray-100"
                      >
                        <img
                          src={imagePath}
                          alt={title}
                          className="h-auto max-w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end h-1/2">
                          <span className="font-bold text-sm tracking-wide">{title}</span>
                        </figcaption>
                      </figure>
                    );
                  })}
                </div>
              ))}

            </div>
          </div>
        )}

      </div>
    </section>
  )
}