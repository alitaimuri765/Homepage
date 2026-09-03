const defaultStats = [
  { value: '35K+', label: 'Active users' },
  { value: '95%', label: 'User satisfaction rate' },
  { value: '20+', label: 'Healthcare partners' },
  { value: '35+', label: 'Countries reached' },
]

interface StatItem { value: string; label: string }

export default function StatsSection({ stats }: { stats?: StatItem[] }) {
  const data = stats ?? defaultStats
  const topRow = data.slice(0, 4)
  const bottomRow = data.slice(4)
  return (
    <section
      className="py-12 lg:py-16"
      style={{ background: 'linear-gradient(98.63deg, #000000 -11.39%, #2B2B2B 49.52%, #8A07F1 155.77%, #CBCBCB 217.3%)' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px]">
        {/* Top row: all stats in a responsive grid on mobile */}
        <div className="grid grid-cols-2 lg:flex lg:justify-between mb-0 lg:mb-10 gap-y-8 lg:gap-0 pb-8 lg:pb-10" style={{ borderBottom: '1px solid #FFFFFF' }}>
          {topRow.map((s, i) => (
            <div key={i} className="text-center text-white">
              <div className="text-[32px] lg:text-[44px] font-bold leading-[42px] lg:leading-[54px]">{s.value}</div>
              <div className="text-[14px] lg:text-[18px] leading-[22px] lg:leading-[30px] text-white">{s.label}</div>
            </div>
          ))}
        </div>
        {/* Bottom row: remaining stats */}
        {bottomRow.length > 0 && (
          <div className="grid grid-cols-2 lg:flex lg:justify-center lg:gap-48 mt-8 gap-y-8">
            {bottomRow.map((s, i) => (
              <div key={i} className="text-center text-white">
                <div className="text-[32px] lg:text-[44px] font-bold leading-[42px] lg:leading-[54px]">{s.value}</div>
                <div className="text-[14px] lg:text-[18px] leading-[22px] lg:leading-[30px] text-white">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
