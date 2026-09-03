import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import Footer from '@/components/Footer'
import AboutSlideshow from '@/components/sections/AboutSlideshow'

export const metadata = { title: 'About Us — Health.IQ' }

const team = [
  {
    name: 'Ahmed Raza',
    role: 'CEO & Co-Founder',
    photo: '/images/team-ahmed-raza.jpeg',
    linkedin: 'https://www.linkedin.com/in/ahmedraza1/',
    crop: 'top',
  },
  {
    name: 'Dr. Mohammad Raza',
    role: 'Chief Medical Officer',
    photo: '/images/team-dr-raza.jpeg',
    linkedin: 'https://www.linkedin.com/in/dr-mohammad-raza-roshanali-b03a53396/',
    crop: 'top',
  },
  {
    name: 'Shehryar Hussain',
    role: 'Chief Technology Officer',
    photo: '/images/team-shehryar.jpeg',
    linkedin: 'https://www.linkedin.com/in/syedshehryarhussain/',
    crop: 'top',
  },
  {
    name: 'Rashmeen Patel',
    role: 'Chief Operations Officer',
    photo: '/images/team-blank.png',
    linkedin: 'https://www.linkedin.com/in/rashmeen-patel-533ab7b6/',
    crop: 'center',
  },
  {
    name: 'Mishal Raza-Taimuri',
    role: 'Head of Product',
    photo: '/images/team-mishal.jpeg',
    linkedin: 'https://www.linkedin.com/in/mishal-raza-taimuri-phd-600500199/',
    crop: 'top',
  },
  {
    name: 'Bushra Raza',
    role: 'Head of Data Science',
    photo: '/images/team-blank.png',
    linkedin: '#',
    crop: 'center',
  },
  {
    name: 'Ali Taimuri',
    role: 'Head of Applied AI',
    photo: '/images/team-ali.jpeg',
    linkedin: 'https://www.linkedin.com/in/ali-taimuri21/',
    crop: 'center',
  },
  {
    name: 'Dr. Faryal Raza',
    role: 'Medical Advisor',
    photo: '/images/ai-faq.png',
    linkedin: 'https://www.linkedin.com/in/drfaryal/',
    crop: '50% 8%',
    zoom: 'scale(1.5)',
    cardBg: 'linear-gradient(160deg, #daeef7 0%, #b2d8ea 40%, #8fc5dc 100%)',
  },
]

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5.5 7.5H3.5V16H5.5V7.5ZM4.5 6.5C5.05 6.5 5.5 6.05 5.5 5.5C5.5 4.95 5.05 4.5 4.5 4.5C3.95 4.5 3.5 4.95 3.5 5.5C3.5 6.05 3.95 6.5 4.5 6.5ZM16.5 16H14.5V11.75C14.5 10.37 13.99 9.75 13 9.75C12.01 9.75 11.5 10.42 11.5 11.75V16H9.5V7.5H11.5V8.5C12.06 7.62 12.9 7.22 14 7.22C15.72 7.22 16.5 8.37 16.5 10.5V16Z" fill="white" fillOpacity="0.7"/>
    </svg>
  )
}

export default function AboutPage() {
  return (
    <main>
      <Hero
        title="Revolutionizing Healthcare with Digital & AI"
        subtitle="For anyone anywhere!"
      />

      {/* Our Mission — photos left, text right */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="flex-1 grid grid-cols-2 gap-4 w-full">
              <div className="col-span-2 rounded-2xl overflow-hidden" style={{ height: 250 }}>
                <Image src="/images/slideshow-6.jpeg" alt="Health.IQ volunteers" width={627} height={376} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden" style={{ height: 180 }}>
                <Image src="/images/slideshow-3.jpeg" alt="Health.IQ team" width={300} height={290} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden" style={{ height: 180 }}>
                <Image src="/images/slideshow-2.jpeg" alt="Health.IQ community" width={300} height={290} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <h2
                className="text-2xl lg:text-[40px] font-bold leading-tight lg:leading-[1.15] text-[#1A1A1A] mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Our Mission
              </h2>
              <p className="text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Make healthcare inclusive and intelligent. We believe everyone deserves access to quality healthcare, regardless of location or socioeconomic background. That&apos;s why we develop innovative Artificial Intelligence (AI) solutions that address the unique challenges of the African healthcare landscape, while also offering robust solutions for our global partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slideshow — real Health.IQ community/field photos */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(98.63deg, #000000 -11.39%, #2B2B2B 49.52%, #8A07F1 155.77%, #CBCBCB 217.3%)' }}
      >
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px] py-12 lg:py-20">
          <AboutSlideshow />
        </div>
      </section>

      {/* Company Overview — photos left, text right */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="flex-1 w-full rounded-2xl overflow-hidden" style={{ height: 450 }}>
              <Image src="/images/slideshow-8.jpeg" alt="Health.IQ presentation" width={627} height={450} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h2
                className="text-2xl lg:text-[40px] font-bold leading-tight lg:leading-[1.15] text-[#1A1A1A] mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Company Overview
              </h2>
              <p className="text-[16px] text-[#505050] leading-[28px] mb-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
                We are Health.IQ, a pioneering African health-tech company, born from the vision and passion of transforming healthcare access and outcomes across the continent.
              </p>
              <p className="text-[16px] text-[#505050] leading-[28px] mb-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
                We have set out on a journey to revolutionize health by harnessing the power of data and Artificial Intelligence (AI) to develop innovative solutions that empower individuals and healthcare institutions, boost healthcare access, and improve health outcomes and lives across the continent and beyond.
              </p>
              <p className="text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                We bring Health and Tech together, to make a positive impact!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team — dark bg, 4 columns, 2 rows */}
      <section
        className="py-12 lg:py-20"
        style={{ background: 'linear-gradient(98.63deg, #000000 -11.39%, #2B2B2B 49.52%, #8A07F1 155.77%, #CBCBCB 217.3%)' }}
      >
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px]">
          <div className="mb-10 lg:mb-16">
            <h2
              className="text-2xl lg:text-[40px] font-bold leading-tight lg:leading-[50px] text-white mb-4 lg:mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Meet the Team Behind Health.IQ
            </h2>
            <p
              className="text-[16px] leading-[28px] text-white/70"
              style={{ fontFamily: 'Poppins, sans-serif', maxWidth: 432 }}
            >
              A diverse group of clinicians, engineers, and health advocates united by a mission to revolutionize healthcare through intelligent technology.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl overflow-hidden border border-white/10">
                <div
                  className="relative overflow-hidden"
                  style={{ height: 220, background: (member as any).cardBg || undefined }}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                    className="object-cover"
                    style={{
                      objectPosition: member.crop,
                      transform: (member as any).zoom || undefined,
                      transformOrigin: 'top center',
                    }}
                  />
                </div>
                <div className="p-4 bg-white/5">
                  <p className="font-bold text-white text-[15px] leading-tight">{member.name}</p>
                  <p className="text-[13px] text-white/60 mt-0.5">{member.role}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="inline-flex mt-3 hover:opacity-80 transition-opacity"
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
