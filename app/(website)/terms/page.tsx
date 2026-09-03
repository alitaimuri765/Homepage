import Hero from '@/components/sections/Hero'
import Footer from '@/components/Footer'

export const metadata = { title: 'Terms of Use — Health.IQ' }

export default function TermsPage() {
  return (
    <main>
      <Hero title="Terms of Use" subtitle="Health.IQ Platform Terms of Use (Registered Users)" />
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[900px] mx-auto px-4 lg:px-8">
          <p className="text-[14px] text-[#505050] mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>Last Updated: October 8, 2025</p>

          <p className="text-[16px] text-[#505050] leading-[28px] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Health.IQ Limited (&quot;Health.IQ,&quot; &quot;our,&quot; &quot;us,&quot; or &quot;we&quot;) offers a digital health navigation solution accessible at https://hlthiq.com and its associated sites at Google Play and the App Store, collectively referred to as the &quot;Health.IQ Platform.&quot;
          </p>
          <p className="text-[16px] text-[#505050] leading-[28px] mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
            BY CLICKING ON &quot;I AGREE&quot; AND USING THE HEALTH.IQ PLATFORM, YOU AFFIRMATIVELY ACCEPT THESE TERMS OF USE.
          </p>

          {[
            {
              title: 'Section 1 – Uses, Limitations, and Restrictions',
              content: (
                <div className="space-y-4 text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <p><strong>A. Supplemental Tool:</strong> Your use of the Health.IQ Platform is intended to supplement, and is not intended to substitute, the expertise and judgment of your healthcare professional. We use machine learning and AI to help create personalized experiences. Reliance on information provided through the Health.IQ Platform is voluntary and solely at your own risk.</p>
                  <p><strong>B. Educational Resources:</strong> The Platform may make available self-care informational services which provide general medical, wellness and health-related information for general educational purposes only and should not be relied upon as a substitute for patient-specific medical diagnosis and treatment.</p>
                  <p><strong>C. Accurate Information:</strong> You agree to provide true, accurate, current and complete information about yourself and to maintain and update this information. If you knowingly provide untrue or incomplete information, Health.IQ has the right to terminate your account.</p>
                  <p><strong>D. Mandatory Reporting:</strong> We may share details of communication we receive to aid in mandatory reporting of abuse or neglect, prevent a serious threat to another&apos;s health or safety, or to report other reportable events as required by law.</p>
                  <p><strong>E. Changes To Our Platform:</strong> The Health.IQ Platform may be changed or updated at any time without direct notice to you. Health.IQ may also discontinue products, services or programs at any time without liability.</p>
                  <p><strong>F. Account Security:</strong> You agree to keep your password protected and not share it with others, and to promptly inform us at <a href="mailto:info@hlthiq.com" className="text-[#8A07F1] hover:underline">info@hlthiq.com</a> if you feel your account is not secure.</p>
                  <p><strong>Restrictions — You agree that you will not:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the Platform in an abusive, excessive, or inappropriate manner.</li>
                    <li>Use the Platform to invade the privacy of or obtain personal information about any other user.</li>
                    <li>Modify, erase or damage any information contained on any user&apos;s computer connected to the Platform.</li>
                    <li>Copy, modify, publish, distribute, or transfer any portion of the Platform.</li>
                    <li>Reverse engineer, disassemble, or decompile the Health.IQ Platform.</li>
                    <li>Post or transmit harmful, threatening, harassing, libelous, obscene, or fraudulent information.</li>
                    <li>Develop, sell or distribute applications integrated with the Platform without prior written consent.</li>
                  </ul>
                </div>
              ),
            },
            {
              title: 'Section 2 – Partnerships with Third Parties',
              content: (
                <div className="space-y-4 text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <p>The Health.IQ Platform is not sponsored or endorsed by any third parties, however we may share information with third party partners or affiliates for the purpose of providing our services.</p>
                  <p><strong>A. Third Party Software:</strong> The Platform may contain copyrighted software of our suppliers obtained under license. All third party licensors retain all right, title and interest in such software.</p>
                  <p><strong>B. Consent to Access:</strong> You permit Health.IQ to retrieve your information maintained online by third-party administrators with which you engage in healthcare transactions.</p>
                  <p><strong>C. Use of Account Information:</strong> By submitting your Account Information to us, you represent that you are entitled to submit it for use in Health.IQ providing services to you. We make no effort to review the contents of your Account Information for accuracy, legality or non-infringement.</p>
                </div>
              ),
            },
            {
              title: 'Section 3 – Legal Disclaimers and Limitation of Liability',
              content: (
                <div className="space-y-4 text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <p><strong>DISCLAIMERS:</strong> YOUR USE OF THE HEALTH.IQ PLATFORM IS AT YOUR SOLE RISK AND DISCRETION. THE HEALTH.IQ PLATFORM IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. HEALTH.IQ EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, STATUTORY, OR IMPLIED.</p>
                  <p><strong>LIMITATION OF LIABILITY:</strong> IN NO EVENT SHALL HEALTH.IQ BE LIABLE FOR ANY DIRECT DAMAGES IN EXCESS OF THE GREATER OF (i) ACTUAL FEES PAID BY YOU TO US, OR (ii) $0.99 USD. IN NO EVENT SHALL HEALTH.IQ BE LIABLE FOR ANY SPECIAL, PUNITIVE, CONSEQUENTIAL, INCIDENTAL OR INDIRECT DAMAGES.</p>
                </div>
              ),
            },
            {
              title: 'Section 4 – SMS Terms and Conditions',
              content: (
                <div className="space-y-4 text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <p>When you provide your mobile phone number during registration, we may send communications by SMS for the purpose of informing you of your account status, health related information or appointment reminders.</p>
                  <p><strong>SMS Opt-In:</strong> When you opt-in to our Service, we will send you a message asking you to confirm your signup. Message and data rates may apply.</p>
                  <p><strong>Message and Data Rates:</strong> Message and data rates may apply for any messages sent to you from us and to us from you. For all questions about Health.IQ services email <a href="mailto:info@hlthiq.com" className="text-[#8A07F1] hover:underline">info@hlthiq.com</a>.</p>
                </div>
              ),
            },
            {
              title: 'Section 5 – Intellectual Property and Confidentiality',
              content: (
                <div className="space-y-4 text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <p><strong>General.</strong> The Health.IQ Platform is the property of Health.IQ or its licensor(s) and is protected by copyright and other intellectual property laws. All rights not expressly granted to you are reserved by Health.IQ.</p>
                  <p><strong>Confidentiality.</strong> The Health.IQ Platform is the confidential information of Health.IQ. You agree not to disclose Health.IQ confidential information to any third party.</p>
                  <p><strong>Copyrights, Trademarks and Patents.</strong> All content, trademarks, trade names, logos, and patents included on the Health.IQ Platform are the property of Health.IQ, its partners or content providers, and are protected by international copyright, trademark or patent laws.</p>
                  <p><strong>Limited License.</strong> Health.IQ authorizes you to download content on the Platform solely for your personal, non-commercial use. The Health.IQ Platform may not be reproduced, duplicated, copied, sold, or otherwise exploited for any commercial purpose not expressly permitted by Health.IQ.</p>
                  <p><strong>Feedback Data.</strong> Any feedback you provide will become the confidential and proprietary information of Health.IQ, and you agree that Health.IQ may use in any manner all comments, suggestions, and other feedback you provide relating to the Platform.</p>
                </div>
              ),
            },
            {
              title: 'Section 6 – General Legal Provisions',
              content: (
                <div className="space-y-4 text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <p><strong>Governing Law and Jurisdiction.</strong> These Terms of Use are governed by Tanzanian law. You hereby consent to the jurisdiction and venue of the courts in Tanzania.</p>
                  <p><strong>Indemnification.</strong> You agree to indemnify, defend and hold harmless Health.IQ, its shareholders, affiliates, directors, managers or employees from and against any claims, liabilities and settlements resulting from your violation of these Terms of Use.</p>
                  <p><strong>Deactivation.</strong> If you want to deactivate your account, please contact User Support at <a href="mailto:info@hlthiq.com" className="text-[#8A07F1] hover:underline">info@hlthiq.com</a> and a support team member will assist you.</p>
                  <p><strong>Termination.</strong> These Terms of Use shall continue in effect unless terminated by us. We reserve the right to refuse access to the Health.IQ Platform and to terminate your use if we believe your conduct violates any applicable law or is harmful to the interests of Health.IQ.</p>
                  <p><strong>Entire Agreement.</strong> These Terms of Use constitute the entire agreement between you and Health.IQ with respect to your use of the Health.IQ Platform.</p>
                  <p><strong>Contact Us.</strong> If you have any questions, comments or concerns, please contact us at <a href="mailto:info@hlthiq.com" className="text-[#8A07F1] hover:underline">info@hlthiq.com</a>.</p>
                </div>
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
