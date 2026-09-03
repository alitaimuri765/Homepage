import Hero from '@/components/sections/Hero'
import Footer from '@/components/Footer'

export const metadata = { title: 'Privacy Policy — Health.IQ' }

export default function PrivacyPage() {
  return (
    <main>
      <Hero title="Privacy Policy" subtitle="Health.IQ Platform Privacy Policy (Registered Users)" />
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[900px] mx-auto px-4 lg:px-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <p className="text-[16px] text-[#505050] leading-[28px] mb-4"><strong>Platform Privacy Policy</strong></p>
          <p className="text-[16px] text-[#505050] leading-[28px] mb-4"><strong>HEALTH.IQ PLATFORM PRIVACY POLICY (Registered Users)</strong></p>
          <p className="text-[16px] text-[#505050] leading-[28px] mb-6">Last Updated: June 30, 2024 Health.IQ Limited (&quot;Health.IQ&quot;).</p>

          <p className="text-[16px] text-[#505050] leading-[28px] mb-4">Health.IQ Limited (&quot;Health.IQ&quot;, &quot;our,&quot; &quot;us,&quot; or &quot;we&quot;), a personalized health mobile application, values our relationship with you, the Registered User (&quot;consumer,&quot; &quot;individual,&quot; &quot;member,&quot; &quot;patient,&quot; &quot;you&quot;, or &quot;user&quot;) of the Health.IQ service, accessible at https://hlthiq.com and associated sites, Google Play, and/or the App Store, collectively referred to as the &quot;Health.IQ Platform.&quot; The Health.IQ Platform provides health and wellness services only to users who register, log-in, and use the Health.IQ platform (i.e., Registered Users as defined below).</p>

          <p className="text-[16px] text-[#505050] leading-[28px] mb-4">For purposes of this Privacy Policy, the term &quot;Registered User&quot; shall mean any individual whose eligibility to use the Health.IQ Platform and it&apos;s services.</p>

          <p className="text-[16px] text-[#505050] leading-[28px] mb-4">Health.IQ is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. Please read this Privacy Policy carefully.</p>

          <p className="text-[16px] text-[#505050] leading-[28px] mb-4">This Privacy Policy, however, is not intended for and does not apply to Personal Information, as defined below, that may be collected (i) from unregistered users; (ii) from visitors, customers, and/or prospects visiting www.hlthiq.com/; or (iii) by third party sites or applications, including platform service providers, to which we provide access through our Health.IQ Platform. Information collected by such third party sites are subject to those third party&apos;s privacy policies, which we encourage you to review before you access or use such third party sites.</p>

          <p className="text-[16px] text-[#505050] leading-[28px] mb-4">We encourage you to read this document in its entirety to ensure you fully understand how your personal information is processed and your rights in relation to such information. If you do not agree with or are not comfortable with this Privacy Policy or our Terms of Use, you should immediately discontinue use of the Health.IQ Platform. We may modify this Privacy Policy as needed to accurately reflect our information collection, use, and sharing practices, and when required by law. If we make changes to this Privacy Policy, the revised statement will be posted on the Health.IQ Platform with the effective date. When we change our Privacy Policy in a material way, we may notify you by sending notice to the e-mail address we have on file, and you may be required to accept the changes in order to use the Health.IQ Platform. We may also provide &quot;just-in-time&quot; disclosure or additional information about our data collection, use and sharing practices of specific services. The original version of this Privacy Policy is written in English. To the extent any translated version of this Privacy Policy conflicts with the English version, the English version controls.</p>

          <p className="text-[16px] text-[#505050] leading-[28px] mb-4">This Privacy Policy is an agreement between Health.IQ and registered users of the Health.IQ Platform. BY CLICKING ON &quot;I AGREE&quot; AND USING THE HEALTH.IQ PLATFORM, YOU AFFIRMATIVELY ACCEPT THIS PLATFORM PRIVACY POLICY.</p>

          <p className="text-[16px] text-[#505050] leading-[28px] mb-2">The Health.IQ Platform Privacy Policy consists of the following sections:</p>
          <ul className="list-disc pl-6 mb-10 space-y-1 text-[16px] text-[#505050] leading-[28px]">
            <li>Section 1 – Information we Collect</li>
            <li>Section 2 – How we Use your Information</li>
            <li>Section 3 – Sharing your Information</li>
            <li>Section 4 – Security of your Information</li>
            <li>Section 5 – Your Consent &amp; Your Rights</li>
            <li>Section 6 – De-identified &amp; Aggregate Data Use</li>
            <li>Section 7 – Data Retention &amp; Deletion Policy</li>
            <li>Section 8 – HealthKit Framework Data Collection</li>
            <li>Section 10 – Third Party Links</li>
            <li>Section 11 – International Transfers</li>
            <li>Section 12 – Changes to this Privacy Policy</li>
            <li>Section 13 – Contact Us</li>
          </ul>

          {/* Section 1 */}
          <div className="mb-8 pb-8 border-b border-[#EAECF0]">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4">Section 1 – Information We Collect</h2>
            <p className="text-[16px] text-[#505050] leading-[28px] mb-4">Personal Information: We collect personal information when you interact with our Platform and when you contact us for user support. We use the term &quot;Personal Information&quot; (also referred to as &quot;personal data&quot; or &quot;personally identifiable information&quot; in some jurisdictions) to refer to information that reasonably identifies, relates to, describes, or can be associated with you. Data that has been de–identified, anonymized, or aggregated, or that otherwise cannot reasonably be related back to a specific person is not considered Personal Information. Although the precise definition of Personal Information may vary depending on your state, province, or country of residence, we take the same approach to protecting your privacy. The types of personal information that we may collect about you may include, but are not limited to, the data provided to us when you use the Health.IQ Platform.</p>
            <p className="text-[16px] text-[#505050] leading-[28px]">We collect the following Personal Information from you: Name, Email, Phone Number, Gender, Age, Physical Information, Clinical Vitals, Mental Status and Individual &amp; Family Medical History. We also collect information you share during registration and interaction with our platform.</p>
          </div>

          {/* Section 2 */}
          <div className="mb-8 pb-8 border-b border-[#EAECF0]">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4">Section 2 – How We Use Your Information</h2>
            <p className="text-[16px] text-[#505050] leading-[28px] mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#505050] leading-[28px]">
              <li>Provide and Improve Our Services: To deliver the functionalities of our app, improve its performance, and enhance user experience.</li>
              <li>Personalization: To personalize your experience and tailor the app&apos;s content and features to your needs.</li>
              <li>Analytics and Research: To analyze usage patterns, monitor trends, and conduct research to improve our services.</li>
              <li>Communication: To communicate with you about updates, security alerts, and support issues.</li>
              <li>Compliance: To comply with legal obligations and enforce our terms of service.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-8 pb-8 border-b border-[#EAECF0]">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4">Section 3 – Sharing Your Information</h2>
            <p className="text-[16px] text-[#505050] leading-[28px] mb-4">We do not share your personal information with third parties, except in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#505050] leading-[28px]">
              <li>With Your Consent: We may share information with your explicit consent.</li>
              <li>Service Providers: We may share information with service providers and affiliates who perform services on our behalf, such as data analysis and customer support. These service providers and affiliates are bound by confidentiality agreements and do not have the right to use your information for any purpose other than to assist us.</li>
              <li>Legal Requirements: We may disclose information if required to do so by law or in response to valid requests by public authorities (e.g., court or government agencies).</li>
              <li>Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-8 pb-8 border-b border-[#EAECF0]">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4">Section 4 – Security of Your Information</h2>
            <p className="text-[16px] text-[#505050] leading-[28px] mb-4">We implement a variety of security measures to protect your personal information. These measures include:</p>
            <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#505050] leading-[28px]">
              <li>Encryption in Transit: Data is encrypted during transmission using industry-standard encryption protocols (e.g., TLS/SSL).</li>
              <li>Full-Disk Encryption: We use full-disk encryption to protect data stored on our servers.</li>
              <li>Encryption at Rest: Data is encrypted at rest in our databases using strong encryption algorithms.</li>
              <li>Access Controls: Access to personal information is restricted to authorized personnel only.</li>
              <li>Regular Audits: We conduct regular security audits to ensure the safety of our systems.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-8 pb-8 border-b border-[#EAECF0]">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4">Section 5 – Your Consent &amp; Your Rights</h2>
            <p className="text-[16px] text-[#505050] leading-[28px] mb-4">By using our app, you consent to our Privacy Policy and the collection, use, and sharing of your information as described herein. You also grant Health.IQ a nonexclusive, royalty-free, perpetual, transferable, irrevocable and fully sublicensable right to use, reproduce, delete, modify, adapt, translate, distribute, publish, create derivative works from and publicly display and perform information contained in a user account, profile and/or review for any purpose whatsoever throughout the world in any media, now known or hereafter devised.</p>
            <p className="text-[16px] text-[#505050] leading-[28px] mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#505050] leading-[28px]">
              <li>Access: You have the right to request access to your personal information.</li>
              <li>Correction: You have the right to request correction of any inaccurate or incomplete information.</li>
              <li>Deletion: You have the right to request deletion of your personal information, subject to certain exceptions.</li>
              <li>Objection: You have the right to object to the processing of your personal information.</li>
              <li>Restriction: You have the right to request the restriction of processing of your personal information.</li>
              <li>Data Portability: You have the right to request a copy of your personal information in a structured, commonly used, and machine-readable format.</li>
            </ul>
            <p className="text-[16px] text-[#505050] leading-[28px] mt-4">To exercise any of these rights, please contact us using the contact information provided below.</p>
          </div>

          {/* Section 6 */}
          <div className="mb-8 pb-8 border-b border-[#EAECF0]">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4">Section 6 – De-identified &amp; Aggregate Data Use</h2>
            <p className="text-[16px] text-[#505050] leading-[28px]">We may use de-identified and aggregate data for various purposes including but not limited to research, statistical analysis, and improving our services. De-identified data refers to data that does not identify you personally. Aggregate data refers to data that is combined with data from other users and does not identify any individual user.</p>
          </div>

          {/* Section 7 */}
          <div className="mb-8 pb-8 border-b border-[#EAECF0]">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4">Section 7 – Data Retention &amp; Deletion Policy</h2>
            <p className="text-[16px] text-[#505050] leading-[28px] mb-4">Retention Policy: We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting, or reporting requirements. When we no longer need to use your personal information, we will either delete it or anonymize it so that it can no longer be associated with you.</p>
            <p className="text-[16px] text-[#505050] leading-[28px]">Deletion Policy: You have the right to request the deletion of your personal information at any time. Upon your request, we will delete your personal information, subject to certain exceptions such as for legal compliance or legitimate business purposes. To request deletion of your personal information, please visit our <a href="/data-deletion" className="text-[#8A07F1] hover:underline font-bold">Data Deletion Request page</a>.</p>
          </div>

          {/* Section 8 */}
          <div className="mb-8 pb-8 border-b border-[#EAECF0]">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4">Section 8 – HealthKit Framework Data Collection</h2>
            <p className="text-[16px] text-[#505050] leading-[28px] mb-4">Our wellness application integrates with Apple&apos;s HealthKit framework to collect and process step count data to enhance your health and fitness tracking experience. This data collection is subject to the following practices:</p>
            <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#505050] leading-[28px]">
              <li>Data Types: We collect step count data through HealthKit to track your daily physical activity and provide personalized wellness insights.</li>
              <li>User Consent: Step data is only accessed with your explicit permission through HealthKit&apos;s authorization system. You can revoke this permission at any time through your device&apos;s Health app settings.</li>
              <li>Data Usage: Step count information is used solely to provide wellness tracking features, generate health insights, and improve your app experience.</li>
              <li>Data Security: All HealthKit data is processed in accordance with Apple&apos;s HealthKit guidelines and our security measures outlined in Section 4 of this policy.</li>
              <li>Data Retention: HealthKit step data follows the same retention policies outlined in Section 7 of this privacy policy.</li>
            </ul>
            <p className="text-[16px] text-[#505050] leading-[28px] mt-4">You maintain full control over your HealthKit data and can manage permissions through your device&apos;s Health app at any time.</p>
          </div>

          {/* Section 9 */}
          <div className="mb-8 pb-8 border-b border-[#EAECF0]">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4">Section 9 – Children&apos;s Privacy</h2>
            <p className="text-[16px] text-[#505050] leading-[28px]">Our services are not intended for use by children under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will delete such information as quickly as possible. If you believe that we might have any information from or about a child under 13, please contact us.</p>
          </div>

          {/* Section 10 */}
          <div className="mb-8 pb-8 border-b border-[#EAECF0]">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4">Section 10 – Third Party Links</h2>
            <p className="text-[16px] text-[#505050] leading-[28px]">Our app may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices or content of these third-party websites or services. We encourage you to review the privacy policies of any third-party websites or services you visit.</p>
          </div>

          {/* Section 11 */}
          <div className="mb-8 pb-8 border-b border-[#EAECF0]">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4">Section 11 – International Transfers</h2>
            <p className="text-[16px] text-[#505050] leading-[28px]">Your information may be transferred to and maintained on servers or databases located outside your country, where data protection laws may differ. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy. By providing your information, you consent to the transfer of your information to countries outside of your residence.</p>
          </div>

          {/* Section 12 */}
          <div className="mb-8 pb-8 border-b border-[#EAECF0]">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4">Section 12 – Changes to This Privacy Policy</h2>
            <p className="text-[16px] text-[#505050] leading-[28px]">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.</p>
          </div>

          {/* Section 13 */}
          <div className="mb-8">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4">Section 13 – Contact Us</h2>
            <p className="text-[16px] text-[#505050] leading-[28px] mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
            <ul className="list-disc pl-6 space-y-1 text-[16px] text-[#505050] leading-[28px]">
              <li>Email: <a href="mailto:info@hlthiq.com" className="text-[#8A07F1] hover:underline">info@hlthiq.com</a></li>
              <li>Phone: +255 696 066 774</li>
              <li>HQ: Suite no. 1101-W, Mafao House, Nyerere Rd. Arusha, United Republic of Tanzania</li>
            </ul>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  )
}
