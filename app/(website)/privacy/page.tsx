import Hero from '@/components/sections/Hero'
import Footer from '@/components/Footer'

export const metadata = { title: 'Privacy Policy — Health.IQ' }

export default function PrivacyPage() {
  return (
    <main>
      <Hero title="Privacy Policy" subtitle="Health.IQ Platform Privacy Policy (Registered Users)" />
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[900px] mx-auto px-4 lg:px-8">
          <p className="text-[14px] text-[#505050] mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>Last Updated: June 30, 2024</p>

          <p className="text-[16px] text-[#505050] leading-[28px] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Health.IQ Limited (&quot;Health.IQ&quot;, &quot;our,&quot; &quot;us,&quot; or &quot;we&quot;), a personalized health mobile application, values our relationship with you, the Registered User of the Health.IQ service, accessible at https://hlthiq.com and associated sites, Google Play, and/or the App Store, collectively referred to as the &quot;Health.IQ Platform.&quot;
          </p>
          <p className="text-[16px] text-[#505050] leading-[28px] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Health.IQ is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. Please read this Privacy Policy carefully.
          </p>
          <p className="text-[16px] text-[#505050] leading-[28px] mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
            BY CLICKING ON &quot;I AGREE&quot; AND USING THE HEALTH.IQ PLATFORM, YOU AFFIRMATIVELY ACCEPT THIS PLATFORM PRIVACY POLICY.
          </p>

          {[
            {
              title: 'Section 1 – Information We Collect',
              content: (
                <>
                  <p className="text-[16px] text-[#505050] leading-[28px] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    We collect personal information when you interact with our Platform and when you contact us for user support. We collect the following Personal Information from you: Name, Email, Phone Number, Gender, Age, Physical Information, Clinical Vitals, Mental Status and Individual &amp; Family Medical History.
                  </p>
                </>
              ),
            },
            {
              title: 'Section 2 – How We Use Your Information',
              content: (
                <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <li>Provide and Improve Our Services: To deliver the functionalities of our app, improve its performance, and enhance user experience.</li>
                  <li>Personalization: To personalize your experience and tailor the app&apos;s content and features to your needs.</li>
                  <li>Analytics and Research: To analyze usage patterns, monitor trends, and conduct research to improve our services.</li>
                  <li>Communication: To communicate with you about updates, security alerts, and support issues.</li>
                  <li>Compliance: To comply with legal obligations and enforce our terms of service.</li>
                </ul>
              ),
            },
            {
              title: 'Section 3 – Sharing Your Information',
              content: (
                <>
                  <p className="text-[16px] text-[#505050] leading-[28px] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>We do not share your personal information with third parties, except in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <li>With Your Consent: We may share information with your explicit consent.</li>
                    <li>Service Providers: We may share information with service providers who perform services on our behalf. These service providers are bound by confidentiality agreements.</li>
                    <li>Legal Requirements: We may disclose information if required to do so by law or in response to valid requests by public authorities.</li>
                    <li>Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                  </ul>
                </>
              ),
            },
            {
              title: 'Section 4 – Security of Your Information',
              content: (
                <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <li>Encryption in Transit: Data is encrypted during transmission using industry-standard protocols (TLS/SSL).</li>
                  <li>Full-Disk Encryption: We use full-disk encryption to protect data stored on our servers.</li>
                  <li>Encryption at Rest: Data is encrypted at rest using strong encryption algorithms.</li>
                  <li>Access Controls: Access to personal information is restricted to authorized personnel only.</li>
                  <li>Regular Audits: We conduct regular security audits to ensure the safety of our systems.</li>
                </ul>
              ),
            },
            {
              title: 'Section 5 – Your Consent & Your Rights',
              content: (
                <>
                  <p className="text-[16px] text-[#505050] leading-[28px] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>You have the following rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <li>Access: You have the right to request access to your personal information.</li>
                    <li>Correction: You have the right to request correction of any inaccurate or incomplete information.</li>
                    <li>Deletion: You have the right to request deletion of your personal information, subject to certain exceptions.</li>
                    <li>Objection: You have the right to object to the processing of your personal information.</li>
                    <li>Data Portability: You have the right to request a copy of your personal information in a machine-readable format.</li>
                  </ul>
                </>
              ),
            },
            {
              title: 'Section 6 – De-identified & Aggregate Data Use',
              content: (
                <p className="text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  We may use de-identified and aggregate data for research, statistical analysis, and improving our services. De-identified data does not identify you personally. Aggregate data is combined with data from other users and does not identify any individual user.
                </p>
              ),
            },
            {
              title: 'Section 7 – Data Retention & Deletion Policy',
              content: (
                <>
                  <p className="text-[16px] text-[#505050] leading-[28px] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <strong>Retention Policy:</strong> We retain your personal information for as long as necessary to fulfill the purposes for which it was collected. When we no longer need it, we will delete it or anonymize it.
                  </p>
                  <p className="text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <strong>Deletion Policy:</strong> You have the right to request deletion of your personal information at any time. To request deletion, please visit our{' '}
                    <a href="/data-deletion" className="text-[#8A07F1] hover:underline">Data Deletion Request page</a>.
                  </p>
                </>
              ),
            },
            {
              title: 'Section 8 – HealthKit Framework Data Collection',
              content: (
                <>
                  <p className="text-[16px] text-[#505050] leading-[28px] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Our app integrates with Apple&apos;s HealthKit framework to collect step count data to enhance your health and fitness tracking experience.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <li>Data Types: We collect step count data through HealthKit to track your daily physical activity.</li>
                    <li>User Consent: Step data is only accessed with your explicit permission. You can revoke this permission at any time through your device&apos;s Health app settings.</li>
                    <li>Data Usage: Step count information is used solely to provide wellness tracking features and generate health insights.</li>
                    <li>Data Security: All HealthKit data is processed in accordance with Apple&apos;s HealthKit guidelines.</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Section 9 – Children's Privacy",
              content: (
                <p className="text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Our services are not intended for use by children under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If we become aware that we have collected such information, we will delete it promptly.
                </p>
              ),
            },
            {
              title: 'Section 10 – Third Party Links',
              content: (
                <p className="text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Our app may contain links to third-party websites or services not owned or controlled by us. We encourage you to review the privacy policies of any third-party websites you visit.
                </p>
              ),
            },
            {
              title: 'Section 11 – International Transfers',
              content: (
                <p className="text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Your information may be transferred to and maintained on servers located outside your country, where data protection laws may differ. We will take all steps reasonably necessary to ensure your data is treated securely.
                </p>
              ),
            },
            {
              title: 'Section 12 – Changes to This Privacy Policy',
              content: (
                <p className="text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
                </p>
              ),
            },
            {
              title: 'Section 13 – Contact Us',
              content: (
                <ul className="list-none space-y-1 text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <li>Email: <a href="mailto:info@hlthiq.com" className="text-[#8A07F1] hover:underline">info@hlthiq.com</a></li>
                  <li>Phone: +255 696 066 774</li>
                  <li>HQ: Suite no. 1101-W, Mafao House, Nyerere Rd. Arusha, United Republic of Tanzania</li>
                </ul>
              ),
            },
          ].map((section, i) => (
            <div key={i} className="mb-10 pb-10 border-b border-[#EAECF0] last:border-0">
              <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{section.title}</h2>
              {section.content}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
