import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="flex-1 rounded-2xl overflow-hidden w-full">
            <Image
              src="/images/doctor.png"
              alt="Healthcare professional"
              width={600}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          <div className="flex-1">
            <div
              className="w-16 h-1 rounded-full mb-6"
              style={{ background: 'linear-gradient(104deg, #000000 11%, #2b2b2b 50%, #8a07f1 100%)' }}
            />
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-5 leading-tight">
              Our team helps you get your life back on track.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue. Includes, but is not limited to, your work and home stressors.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-full hover:border-[#8a07f1] hover:text-[#8a07f1] transition-all duration-200 text-sm"
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
