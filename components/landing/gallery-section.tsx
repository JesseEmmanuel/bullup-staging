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
      path: '/before-after/before-after-1.jpg'
    },
    {
      id: 2,
      path: '/before-after/before-after-2.jpg'
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

          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
            {beforeAfterWork.map((project) => (
              <div key={project.id}>
                <div className="relative group w-full overflow-hidden rounded-xl shadow-lg">
                  <img src={project.path} alt={`Before`} className="w-full h-full object-cover" />
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
                        className="relative overflow-hidden group cursor-pointer shadow-md bg-gray-100"
                      >
                        <img
                          src={imagePath}
                          alt={title}
                          className="h-auto max-w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
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