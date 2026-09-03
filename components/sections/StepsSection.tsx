interface StepItem {
  number: string
  title: string
  description: string
}

const defaultSteps: StepItem[] = [
  {
    number: '1',
    title: 'Sign Up',
    description: 'Register with your mobile number and set up your profile.',
  },
  {
    number: '2',
    title: 'Take Health Assessment',
    description: 'Complete a quick health assessment and click submit.',
  },
  {
    number: '3',
    title: 'Unlock Personalized Insights',
    description: 'Instantly gain access to your personalized health insights & suggestions.',
  },
]

const defaultHeading = '3 simple steps to unleashing your health and life potential.'

interface StepsSectionProps {
  heading?: string
  steps?: StepItem[]
}

export default function StepsSection({ heading = defaultHeading, steps = defaultSteps }: StepsSectionProps) {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          {/* Steps */}
          <div className="flex-1 w-full">
            <div className="w-12 h-1 bg-[#8a07f1] rounded-full mb-6" />
            <h2
              className="text-2xl lg:text-[40px] font-bold leading-tight lg:leading-[48px] mb-8 lg:mb-10"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#1A1A1A' }}
            >
              {heading}
            </h2>
            <div className="space-y-6 lg:space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 lg:gap-5">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-[#8a07f1] text-[#8a07f1] flex items-center justify-center font-bold text-[14px]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h4
                      className="font-bold text-[16px] leading-[24px] mb-1"
                      style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {step.title}
                    </h4>
                    <p
                      className="text-[14px] leading-[22px]"
                      style={{ color: '#505050', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockup — hidden on mobile to save space */}
          <div className="hidden lg:flex flex-1 justify-center lg:justify-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/solution-steps-phone.png"
              alt="Health.IQ app preview"
              className="w-full max-w-[600px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
