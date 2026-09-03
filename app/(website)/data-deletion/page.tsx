import Hero from '@/components/sections/Hero'
import Footer from '@/components/Footer'

export const metadata = { title: 'Data Deletion — Health.IQ' }

export default function DataDeletionPage() {
  return (
    <main>
      <Hero title="Data Deletion Request" subtitle="Your right to control your personal data" />
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[900px] mx-auto px-4 lg:px-8">

          <div className="mb-10 pb-10 border-b border-[#EAECF0]">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Retention Policy</h2>
            <p className="text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting, or reporting requirements. When we no longer need to use your personal information, we will either delete it or anonymize it so that it can no longer be associated with you.
            </p>
          </div>

          <div className="mb-10 pb-10 border-b border-[#EAECF0]">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Deletion Policy</h2>
            <p className="text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              You have the right to request the deletion of your personal information at any time. Upon your request, we will delete your personal information, subject to certain exceptions such as for legal compliance or legitimate business purposes.
            </p>
          </div>

          <div className="mb-10 pb-10 border-b border-[#EAECF0]">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>How to Request Deletion</h2>
            <p className="text-[16px] text-[#505050] leading-[28px] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>You can request deletion of your personal data in two ways:</p>
            <ul className="list-disc pl-6 space-y-3 text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <li>
                <strong>In-App:</strong> Open the Health.IQ app, go to <em>My Profile</em>, and tap <em>Delete Account</em>. Follow the on-screen prompts to submit your deletion request directly from within the app.
              </li>
              <li>
                <strong>By Email:</strong> Send a deletion request to{' '}
                <a href="mailto:itis.support@hlthiq.com" className="text-[#8A07F1] hover:underline">itis.support@hlthiq.com</a>{' '}
                with the subject line &quot;Data Deletion Request.&quot; Please include the name and email address associated with your account so we can locate and process your request.
              </li>
            </ul>
            <p className="text-[16px] text-[#505050] leading-[28px] mt-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Once we receive your request, we will process it within a reasonable timeframe and confirm deletion via email. Please note that some information may be retained where required by law or for legitimate business purposes as outlined in our full{' '}
              <a href="/privacy" className="text-[#8A07F1] hover:underline">Privacy Policy</a>.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Us</h2>
            <p className="text-[16px] text-[#505050] leading-[28px] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>If you have any questions about this policy or your deletion request, please reach out:</p>
            <ul className="list-none space-y-1 text-[16px] text-[#505050] leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <li>Email: <a href="mailto:itis.support@hlthiq.com" className="text-[#8A07F1] hover:underline">itis.support@hlthiq.com</a></li>
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
