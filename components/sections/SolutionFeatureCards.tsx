interface CardItem {
  title: string
  description: string
}

const defaultCards: CardItem[] = [
  { title: 'SIMPLE', description: 'Easy to use, mobile first experience that allows individuals of all literacy levels to take advantage of digital innovation.' },
  { title: 'SMART', description: 'Technology that leverages data, analytics & artificial intelligence to generate insights that reduce cognitive load.' },
  { title: 'PERSONALIZED', description: 'Actionable information & insights for the participant. A trusted digital companion for an individual\'s health journey.' },
]

interface SolutionFeatureCardsProps {
  cards?: CardItem[]
}

export default function SolutionFeatureCards({ cards = defaultCards }: SolutionFeatureCardsProps) {
  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Card 0: SIMPLE - white */}
          <div
            className="flex-1 rounded-[14px] p-6 lg:p-8 shadow-[0px_0px_4px_rgba(0,0,0,0.04),0px_8px_16px_rgba(0,0,0,0.08)]"
            style={{ border: '0.5px solid #ececec', background: 'white' }}
          >
            <p className="text-[20px] lg:text-[22px] font-semibold text-black leading-[30px] mb-2 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {cards[0]?.title ?? defaultCards[0].title}
            </p>
            <div className="w-[85px] h-[3px] rounded-[50px] mx-auto mb-3" style={{ background: '#8A07F1' }} />
            <p className="text-[16px] text-[#656565] leading-[22px] text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {cards[0]?.description ?? defaultCards[0].description}
            </p>
          </div>

          {/* Card 1: SMART - dark gradient */}
          <div
            className="flex-1 rounded-[14px] p-6 lg:p-8"
            style={{
              background: 'linear-gradient(98.63deg, #000000 -11.39%, #2B2B2B 49.52%, #8A07F1 155.77%, #CBCBCB 217.3%)',
              boxShadow: '0px 0px 4px rgba(0,0,0,0.04), 0px 8px 16px rgba(0,0,0,0.08)',
            }}
          >
            <p className="text-[20px] lg:text-[22px] font-semibold text-white leading-[30px] mb-2 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {cards[1]?.title ?? defaultCards[1].title}
            </p>
            <div className="w-[85px] h-[3px] rounded-[50px] mx-auto mb-3" style={{ background: 'white' }} />
            <p className="text-[16px] text-white leading-[22px] text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {cards[1]?.description ?? defaultCards[1].description}
            </p>
          </div>

          {/* Card 2: PERSONALIZED - white */}
          <div
            className="flex-1 rounded-[14px] p-6 lg:p-8 shadow-[0px_0px_4px_rgba(0,0,0,0.04),0px_8px_16px_rgba(0,0,0,0.08)]"
            style={{ border: '0.5px solid #ececec', background: 'white' }}
          >
            <p className="text-[20px] lg:text-[22px] font-semibold text-black leading-[30px] mb-2 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {cards[2]?.title ?? defaultCards[2].title}
            </p>
            <div className="w-[85px] h-[3px] rounded-[50px] mx-auto mb-3" style={{ background: '#8A07F1' }} />
            <p className="text-[16px] text-[#656565] leading-[22px] text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {cards[2]?.description ?? defaultCards[2].description}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
