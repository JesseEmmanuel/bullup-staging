import type { Marker } from '@/components/ui/dotted-map'

export const serviceMapMarkers: Marker[] = [
  { lat: -33.8688, lng: 151.2093, size: 0.7, pulse: true },
  { lat: -37.8136, lng: 144.9631, size: 0.45 },
  { lat: -27.4698, lng: 153.0251, size: 0.45 },
]

export const services = [
  { title: 'Brick Restoration', tags: ['HERITAGE', 'REPAIR'], image: '/images/masonry-1.jpg', text: 'Meticulous repointing and heritage masonry repair, ensuring historical accuracy and renewed structural strength.', link: 'Explore Restoration' },
  { title: 'New Builds', tags: ['CONTEMPORARY', 'ARCHITECTURE'], image: '/images/masonry-2.jpg', text: 'Executing clean lines and modern architectural designs with robust brickwork for high-end residential construction.', link: 'View Projects' },
  { title: 'Renovations', tags: ['MODERNIZATION', 'EXTENSIONS'], image: '/images/masonry-3.jpg', text: 'Seamless integration of new masonry with existing structures to modernize and reinforce structural integrity.', link: 'Learn More' },
]

export const gallery = [
  ['/images/masonry-4.jpg', 'Heritage Restoration'],
  ['/images/masonry-5.jpg', 'Architectural New Build'],
  ['/images/masonry-6.jpg', 'Residential Renovation'],
] as const

export function Arrow() { return <span aria-hidden="true" className="arrow">→</span> }
