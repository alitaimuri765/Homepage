'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const slides = [
  '/images/hs-01.jpeg',
  '/images/hs-02.jpeg',
  '/images/hs-03.jpeg',
  '/images/hs-04.jpeg',
  '/images/hs-05.jpeg',
  '/images/hs-06.jpeg',
  '/images/hs-07.jpeg',
  '/images/hs-08.jpeg',
  '/images/hs-09.jpeg',
  '/images/hs-10.jpeg',
  '/images/hs-11.jpeg',
  '/images/hs-12.jpeg',
  '/images/hs-13.jpeg',
  '/images/hs-14.jpeg',
  '/images/hs-15.jpeg',
  '/images/hs-16.jpeg',
  '/images/hs-17.jpeg',
]

export default function HomeSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="relative rounded-[4px] overflow-hidden bg-black"
      style={{ aspectRatio: '1320/791' }}
    >
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`Health.IQ photo ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 1320px"
            className="object-contain"
            priority={i === 0}
            quality={95}
          />
        </div>
      ))}
      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 20 : 8,
              height: 8,
              background: i === current ? '#8A07F1' : 'rgba(255,255,255,0.5)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
