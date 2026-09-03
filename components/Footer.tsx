import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/Logo'

interface FooterProps {
  headline?: string
  subtext?: string
  address?: string
  tagline?: string
  email?: string
  phone?: string
  disclaimer?: string
}

export default function Footer({
  headline = 'Your Digital Health Companion available on iOS and Android.',
  subtext = 'Empowering people everywhere to live healthier lives.',
  address = 'Headquarters: Arusha, Tanzania',
  tagline = 'Empowering people everywhere to live healthier lives.',
  email = 'info@hlthiq.com',
  phone = '+255 696 066 774',
  disclaimer = 'Health.IQ does not contain or provide any medical/health advice. The medical/health information is provided for general, informational and educational purposes only and is not a substitute for professional advice. Before taking any action based upon such information, we encourage you to consult with appropriate professionals.',
}: FooterProps) {
  return (
    <footer style={{ background: '#FBFBFB' }}>
      <div
        style={{ background: 'linear-gradient(98.63deg, #000000 -11.39%, #2B2B2B 49.52%, #8A07F1 155.77%, #CBCBCB 217.3%)' }}
      >
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px] pt-12 lg:pt-16 pb-8 lg:pb-10">
          {/* Top: headline + phone mockup */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10 mb-10 lg:mb-12">
            <div className="max-w-full lg:max-w-[568px]">
              <h2
                className="text-2xl lg:text-[35px] font-bold leading-tight lg:leading-[60px] text-white"
              >
                {headline}
              </h2>
              <p
                className="text-[16px] leading-[28px] text-white mt-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {subtext}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://apps.apple.com/us/app/health-iq/id6535649551" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
                <Image
                  src="/images/btn-appstore.png"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-[42px] w-auto object-contain hover:opacity-90 transition-opacity"
                  unoptimized
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.healthiq&hl=en_US" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
                <Image
                  src="/images/btn-googleplay.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="h-[42px] w-auto object-contain hover:opacity-90 transition-opacity"
                  unoptimized
                />
              </a>
            </div>
          </div>

          {/* Footer columns */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="mb-4">
                <Logo width={130} height={40} />
              </div>
              <p className="text-[13px] leading-[20px] text-white/60 mb-4">
                Social media — coming soon
              </p>
              <p className="text-[16px] font-bold leading-[24px] text-white">
                {address}
              </p>
            </div>

            <div>
              <h4 className="text-[18px] font-bold leading-[24px] text-white mb-4">Navigate</h4>
              <ul className="space-y-1 text-[16px] leading-[40px] text-white" style={{ letterSpacing: '-0.015em' }}>
                <li><Link href="/" className="hover:opacity-80 transition-opacity">Home</Link></li>
                <li><Link href="/solution" className="hover:opacity-80 transition-opacity">Solution</Link></li>
                <li><Link href="/about" className="hover:opacity-80 transition-opacity">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[18px] font-bold leading-[24px] text-white mb-4">Support</h4>
              <ul className="space-y-1 text-[16px] leading-[40px] text-white" style={{ letterSpacing: '-0.015em' }}>
                <li><Link href="/contact" className="hover:opacity-80 transition-opacity">Contact Us</Link></li>
                <li><Link href="#faqs" className="hover:opacity-80 transition-opacity">FAQs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[18px] font-bold leading-[24px] text-white mb-4">Policy</h4>
              <ul className="space-y-1 text-[16px] leading-[40px] text-white" style={{ letterSpacing: '-0.015em' }}>
                <li><Link href="/terms-of-use" className="hover:opacity-80 transition-opacity">Terms of Use</Link></li>
                <li><Link href="/privacy-policy" className="hover:opacity-80 transition-opacity">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[18px] font-bold leading-[24px] text-white mb-4">Contact Us</h4>
              <p className="text-[16px] leading-[40px] text-white" style={{ letterSpacing: '-0.015em' }}>
                Email: {email}<br />
                Phone: {phone}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white mb-6" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[14px] leading-[24px] text-white" style={{ letterSpacing: '-0.015em' }}>
              © 2026 Health.IQ Limited. All Rights Reserved.
            </p>
          </div>

          {/* Disclaimer */}
          <p
            className="text-[14px] lg:text-[16px] font-semibold leading-[24px] text-white mt-4 max-w-[975px]"
          >
            {disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}
