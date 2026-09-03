interface LogoProps {
  width?: number
  height?: number
}

export default function Logo({ width = 186, height = 58 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 185.8 57.85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Health.IQ"
    >
      {/* Border rectangle */}
      <rect x="0.5" y="0.5" width="184.8" height="56.85" stroke="white" strokeWidth="0.8" fill="none" />
      {/* Health.IQ text */}
      <text
        x="92.9"
        y="29"
        fill="white"
        fontFamily="var(--font-inria-serif), 'Inria Serif', serif"
        fontSize="30.5"
        fontWeight="700"
        textAnchor="middle"
        dominantBaseline="central"
      >
        Health.IQ
      </text>
    </svg>
  )
}
