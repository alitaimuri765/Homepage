import HomeSlideshow from '@/components/sections/HomeSlideshow'

interface Props {
  heading?: string
  body?: string
}

export default function VideoSection({
  heading = 'A one-stop shop for living a happier, healthier & smarter life.',
  body = 'Health.IQ brings together personalized health insights, smart actions, daily tracking tools, and curated health resources — all in one place.',
}: Props) {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px] pt-10 lg:pt-16 pb-0">
        <div className="mb-6 lg:mb-8">
          <h2
            className="text-2xl lg:text-[40px] font-bold leading-[114.5%] mb-4 lg:mb-[29px]"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#1A1A1A' }}
          >
            {heading}
          </h2>
          <p
            className="text-[16px] leading-[142%] max-w-full lg:max-w-[1082px]"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#505050' }}
          >
            {body}
          </p>
        </div>
        <HomeSlideshow />
      </div>
    </section>
  )
}
