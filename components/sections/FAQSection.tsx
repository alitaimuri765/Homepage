'use client'
import Image from 'next/image'
import { useState } from 'react'

const defaultFaqs = [
  { question: 'What is Health.IQ?', answer: 'Health.IQ is an AI-powered digital health companion that delivers personalized health insights, smart action recommendations, daily tracking tools, and curated health resources — all in one mobile app.' },
  { question: 'How is my data protected?', answer: 'All data is encrypted at rest and in transit, stored on secure infrastructure, and handled in accordance with applicable health data regulations. Your privacy is our priority.' },
  { question: 'How do I get started?', answer: 'Simply download the Health.IQ app from the App Store or Google Play, create your profile, and complete a short health assessment to unlock your personalized experience.' },
  { question: 'Is Health.IQ available in my country?', answer: 'Health.IQ is available globally and is currently active in 35+ countries. Download the app and get started today.' },
]

interface Props {
  faqs?: Array<{ question: string; answer: string }>
}

export default function FAQSection({ faqs = defaultFaqs }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-white py-12 lg:py-20" id="faqs">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-0">

          {/* Left — gradient panel + woman image (same treatment as SuperchargeRight) */}
          <div className="relative flex-1 min-h-[300px] lg:min-h-[500px]">
            {/* Dark gradient panel behind image */}
            <div
              className="absolute rounded-[6px]"
              style={{
                background: 'linear-gradient(98.63deg, #000000 -11.39%, #2B2B2B 49.52%, #8A07F1 155.77%, #CBCBCB 217.3%)',
                left: 0,
                right: 30,
                top: 72,
                bottom: 0,
              }}
            />
            {/* Woman image overlay */}
            <div
              className="absolute rounded-[4px] overflow-hidden"
              style={{ width: 'min(374px, 80%)', height: 'min(500px, calc(100% - 16px))', left: 16, top: 0 }}
            >
              <Image
                src="/images/ai-faq.png"
                alt="Health professional"
                fill
                className="object-contain object-top"
              />
            </div>
          </div>

          {/* Right — heading + FAQ accordion */}
          <div className="flex-1 lg:pl-16 flex flex-col justify-center">
            <h2
              className="text-2xl lg:text-[50px] font-bold leading-tight lg:leading-[60px] mb-4"
              style={{ color: '#1A1A1A' }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-[16px] lg:text-[18px] leading-[28px] mb-6 lg:mb-8"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#505050' }}
            >
              Everything you need to know about Health.IQ. Can&apos;t find the answer you&apos;re looking for? Reach out to our team.
            </p>
            <div>
              {faqs.map((faq, i) => (
                <div key={i}>
                  <div className="w-full h-px" style={{ background: '#EAECF0' }} />
                  <button
                    className="w-full flex items-center justify-between py-4 text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <div className="flex items-center gap-3 lg:gap-4 flex-1 mr-4">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" className="flex-shrink-0">
                        <circle cx="10.5" cy="10.5" r="10" stroke="#EAECF0"/>
                      </svg>
                      <span
                        className="text-[15px] lg:text-[18px] font-semibold leading-[24px] lg:leading-[28px]"
                        style={{ fontFamily: 'Poppins, sans-serif', color: '#1A1A1A' }}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <div className="flex-shrink-0">
                      {open === i ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M18 12H6" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 6v12M18 12H6" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )}
                    </div>
                  </button>
                  {open === i && faq.answer && (
                    <p className="pb-4 text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] pl-8 lg:pl-10" style={{ color: '#505050' }}>{faq.answer}</p>
                  )}
                </div>
              ))}
              <div className="w-full h-px" style={{ background: '#EAECF0' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
