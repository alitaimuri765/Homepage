import Image from 'next/image'

function MicrosoftLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 216 46"
      width="216"
      height="46"
      aria-label="Microsoft"
      role="img"
    >
      {/* Four-color Windows mark — 21×21 grid */}
      <rect x="0" y="0" width="21" height="21" fill="#F25022"/>
      <rect x="23" y="0" width="21" height="21" fill="#7FBA00"/>
      <rect x="0" y="23" width="21" height="21" fill="#00A4EF"/>
      <rect x="23" y="23" width="21" height="21" fill="#FFB900"/>
      {/* Microsoft wordmark */}
      <text
        x="54"
        y="33"
        fontFamily="'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
        fontSize="28"
        fontWeight="300"
        fill="#737373"
        letterSpacing="-0.5"
      >
        Microsoft
      </text>
    </svg>
  )
}

export default function PartnerLogos() {
  return (
    <section className="bg-white py-10 lg:py-14" style={{ borderTop: '1px solid #F2F2F2', borderBottom: '1px solid #F2F2F2' }}>
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px]">
        <p
          className="text-center text-[12px] font-semibold uppercase tracking-[0.14em] mb-8 lg:mb-10"
          style={{ color: '#ABABAB', fontFamily: 'Poppins, sans-serif' }}
        >
          Trusted by our partners
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20">

          {/* Roshan Poly Clinic */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="rounded-2xl overflow-hidden shadow-sm"
              style={{ width: 96, height: 96, flexShrink: 0 }}
            >
              <Image
                src="/images/partner-rpc.jpeg"
                alt="Roshan Poly Clinic"
                width={192}
                height={192}
                quality={100}
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-[11px] font-medium text-center leading-tight"
              style={{ color: '#888888', fontFamily: 'Poppins, sans-serif', maxWidth: 100 }}
            >
              Roshan Poly Clinic
            </span>
          </div>

          {/* Red Gold */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="rounded-2xl overflow-hidden shadow-sm"
              style={{ width: 96, height: 96, flexShrink: 0 }}
            >
              <Image
                src="/images/partner-redgold.jpeg"
                alt="Red Gold"
                width={192}
                height={192}
                quality={100}
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-[11px] font-medium text-center leading-tight"
              style={{ color: '#888888', fontFamily: 'Poppins, sans-serif' }}
            >
              Red Gold
            </span>
          </div>

          {/* Microsoft — official colors, no theme override */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-center" style={{ height: 96 }}>
              <MicrosoftLogo />
            </div>
            <span
              className="text-[11px] font-medium text-center leading-tight"
              style={{ color: '#888888', fontFamily: 'Poppins, sans-serif' }}
            >
              Microsoft
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
