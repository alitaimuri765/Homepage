'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const slides = [
  '/images/slideshow-1.jpeg',
  '/images/slideshow-2.jpeg',
  '/images/slideshow-3.jpeg',
  '/images/slideshow-4.jpeg',
  '/images/slideshow-5.jpeg',
  '/images/slideshow-6.jpeg',
  '/images/slideshow-7.jpeg',
  '/images/slideshow-8.jpeg',
]

export default function AboutSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      style={{ height: 'clamp(280px, 55vw, 620px)' }}
    >
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`Health.IQ community photo ${i + 1}`}
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
