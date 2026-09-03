import Hero from '@/components/sections/Hero'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = { title: 'Terms of Use — Health.IQ' }

const sections = [
  {
    title: '1. Acceptance of Terms',
    content:
      'By accessing or using the Health.IQ platform, website, or any of our services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.',
  },
  {
    title: '2. Use of Services',
    content:
      'You agree to use Health.IQ services only for lawful purposes and in accordance with these Terms. You must not use our platform in any way that violates applicable local, national, or international laws or regulations, or to transmit any unsolicited or unauthorised advertising material.',
  },
  {
    title: '3. Account Responsibilities',
    content:
      'If you create an account with us, you are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You agree to notify us immediately of any unauthorised use of your account.',
  },
  {
    title: '4. Intellectual Property',
    content:
      'All content, features, and functionality of the Health.IQ platform — including but not limited to text, graphics, logos, and software — are the exclusive property of Health.IQ Limited and are protected by applicable intellectual property laws.',
  },
  {
    title: '5. Health Information Disclaimer',
    content:
      'Health.IQ is a technology platform and does not provide medical advice, diagnosis, or treatment. All health-related information provided through the platform is for informational purposes only. Always seek the advice of a qualified healthcare professional for any medical condition.',
  },
  {
    title: '6. Data and Privacy',
    content:
      'Your use of Health.IQ is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our services, you consent to the collection and use of your data as described in our Privacy Policy.',
  },
  {
    title: '7. Limitation of Liability',
    content:
      'To the fullest extent permitted by law, Health.IQ Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our services.',
  },
  {
    title: '8. Termination',
    content:
      'We reserve the right to suspend or terminate your access to our services at any time, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, third parties, or the public.',
  },
  {
    title: '9. Changes to Terms',
    content:
      'We may update these Terms of Use from time to time. We will notify you of material changes by posting the updated terms on this page with a revised date. Your continued use of our services after changes are posted constitutes your acceptance of the updated terms.',
  },
]

export default function TermsOfUsePage() {
  return (
    <main>
      <Hero
        title="Terms of Use"
        subtitle="Please read these terms carefully before using Health.IQ. By using our platform, you agree to be bound by these terms."
        hideCta
      />

      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px]">
          <p
            className="text-[14px] leading-[24px] mb-8 lg:mb-12"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#999999' }}
          >
            Last updated: June 2026
          </p>

          <div>
            <div style={{ borderTop: '1px solid #EAECF0' }} />

            {sections.map((s, i) => (
              <div
                key={i}
                className="py-8 lg:py-10"
                style={{ borderBottom: '1px solid #EAECF0' }}
              >
                <h2
                  className="text-[18px] lg:text-[22px] font-bold leading-[28px] lg:leading-[32px] mb-3 lg:mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#1A1A1A' }}
                >
                  {s.title}
                </h2>
                <p
                  className="text-[16px] leading-[28px]"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#505050' }}
                >
                  {s.content}
                </p>
              </div>
            ))}

            <div className="py-8 lg:py-10" style={{ borderBottom: '1px solid #EAECF0' }}>
              <h2
                className="text-[18px] lg:text-[22px] font-bold leading-[28px] lg:leading-[32px] mb-3 lg:mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#1A1A1A' }}
              >
                10. Contact Us
              </h2>
              <p
                className="text-[16px] leading-[28px]"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#505050' }}
              >
                If you have any questions about these Terms of Use, please contact us at{' '}
                <Link
                  href="mailto:info@hlthiq.com"
                  className="font-medium hover:underline transition-all"
                  style={{ color: '#8A07F1' }}
                >
                  info@hlthiq.com
                </Link>{' '}
                or by post at: Health.IQ Limited, Arusha, Tanzania.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
