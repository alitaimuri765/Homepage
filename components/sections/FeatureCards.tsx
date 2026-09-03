import Image from 'next/image'

const defaultFeatures = [
  {
    title: 'Health Insights',
    description: 'Personalized and trusted health insights tailored to your unique health profile.',
    icon: '/images/hiq-icon-health-insights.svg',
  },
  {
    title: 'Smart Actions',
    description: 'Action recommendations to improve your overall health, delivered when you need them.',
    icon: '/images/hiq-icon-smart-actions.svg',
  },
  {
    title: 'Daily Tracking',
    description: 'Tools to easily track healthy habits and actions throughout your day.',
    icon: '/images/hiq-icon-daily-tracking.svg',
  },
  {
    title: 'Health Resources',
    description: 'Curated and vetted health resources for easy access, anytime, anywhere.',
    icon: '/images/hiq-icon-health-resources.svg',
  },
]

interface FeatureCardsProps {
  cards?: Array<{ title: string; description: string }>
}

export default function FeatureCards({ cards }: FeatureCardsProps) {
  const features = cards
    ? cards.map((c, i) => ({ ...c, icon: defaultFeatures[i % defaultFeatures.length].icon }))
    : defaultFeatures
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-[14px] overflow-hidden"
              style={{ border: 'none', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}
            >
              <div className="p-6 lg:p-9">
                {/* Care icon */}
                <div className="relative mb-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ background: '#F0E5FD' }}
                  >
                    <Image
                      src={f.icon}
                      alt=""
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  </div>
                </div>
                {/* Title */}
                <div className="mb-3">
                  <h3
                    className="text-[18px] lg:text-[22px] font-bold leading-[28px] lg:leading-[30px]"
                    style={{ color: '#000000' }}
                  >
                    {f.title}
                  </h3>
                </div>
                {/* Green accent bar */}
                <div
                  className="rounded-full mb-4"
                  style={{ width: 85, height: 3, background: '#8A07F1' }}
                />
                <p
                  className="text-[16px] leading-[22px]"
                  style={{ color: '#505050' }}
                >
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
