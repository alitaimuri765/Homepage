import Hero from '@/components/sections/Hero'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = { title: 'Privacy Policy — Health.IQ' }

const sections = [
  {
    title: '1. Introduction',
    content:
      'Health.IQ Limited ("we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, website, or platform.',
  },
  {
    title: '2. Information We Collect',
    content:
      'We collect information you provide directly to us — such as when you create an account, use our services, complete a health assessment, or contact us for support. This may include your name, email address, phone number, and health data you choose to share. We also collect usage data and technical information automatically when you interact with our platform.',
  },
  {
    title: '3. How We Use Your Information',
    content:
      'We use the information we collect to provide, maintain, and improve our services; process transactions; send technical notices and support messages; respond to your questions; and deliver health insights and recommendations based on your data. We do not sell your personal information to third parties.',
  },
  {
    title: '4. Data Sharing and Disclosure',
    content:
      'We may share your information with healthcare providers you have authorised, service providers who assist in our operations (under strict confidentiality obligations), and as required by law or regulation. We never share identifiable patient data for advertising purposes.',
  },
  {
    title: '5. Data Security',
    content:
      'We take reasonable measures to protect your information from loss, theft, misuse, and unauthorised access. All data is encrypted at rest and in transit and stored securely on our Azure cloud infrastructure. Access to personal data is restricted to authorised personnel only.',
  },
  {
    title: '6. Data Retention',
    content:
      'We retain your personal information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time by contacting us, subject to any legal or contractual requirements to retain certain records.',
  },
  {
    title: '7. Your Rights',
    content:
      'Depending on your location, you may have rights including: the right to access your personal data, the right to correct inaccurate data, the right to request deletion, the right to object to processing, and the right to data portability. To exercise any of these rights, please contact us at info@hlthiq.com.',
  },
  {
    title: '8. Cookies and Tracking',
    content:
      'Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyse usage patterns. You can control cookies through your browser settings. Disabling cookies may affect some features of our platform.',
  },
  {
    title: "9. Children's Privacy",
    content:
      'Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected such information, we will take steps to delete it promptly.',
  },
  {
    title: '10. Changes to This Policy',
    content:
      'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated date. Your continued use of our services after any changes constitutes your acceptance of the revised policy.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero — gradient background, no CTA button for a legal page */}
      <Hero
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Please read this policy carefully to understand how Health.IQ Limited handles your personal information."
        hideCta
      />

      {/* Content section */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px]">
          {/* Last updated label */}
          <p
            className="text-[14px] leading-[24px] mb-8 lg:mb-12"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#999999' }}
          >
            Last updated: June 2026
          </p>

          {/* Sections */}
          <div>
            {/* Top divider */}
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

            {/* Contact section */}
            <div className="py-8 lg:py-10" style={{ borderBottom: '1px solid #EAECF0' }}>
              <h2
                className="text-[18px] lg:text-[22px] font-bold leading-[28px] lg:leading-[32px] mb-3 lg:mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#1A1A1A' }}
              >
                11. Contact Us
              </h2>
              <p
                className="text-[16px] leading-[28px]"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#505050' }}
              >
                If you have any questions, concerns, or requests regarding this Privacy Policy or your
                personal data, please contact us at{' '}
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
