const defaultLabels = [
  'SIMPLE',
  'SMART',
  'PERSONALIZED',
  'CONNECTED',
]

interface Props {
  labels?: string[]
}

export default function FeatureLabelsRow({ labels = defaultLabels }: Props) {
  return (
    <section className="bg-white py-8 lg:py-10">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px]">
        {/* Small grey pill on first item */}
        <div className="mb-3">
          <div className="w-[63px] h-[5px] rounded-full" style={{ background: '#737373' }} />
        </div>
        {/* Horizontal line above */}
        <div className="w-full mb-4 lg:mb-6" style={{ borderTop: '2px solid #BEBEBE' }} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {labels.map((label, i) => (
            <p
              key={i}
              className="text-[18px] lg:text-[22px] font-medium leading-[28px] lg:leading-[30px]"
              style={{ color: '#000000' }}
            >
              {label}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
