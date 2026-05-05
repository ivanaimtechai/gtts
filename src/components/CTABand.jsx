import { Link } from 'react-router-dom'
import { Users } from 'lucide-react'

export default function CTABand({
  variant = 'center',
  title,
  subtitle,
  buttonLabel,
  buttonTo = '#',
  buttonStyle = 'orange',
  buttonIcon = null,
  trustNote = null,
}) {
  const Btn = ({ children }) =>
    buttonStyle === 'white' ? (
      <Link to={buttonTo} className="btn-white shadow">{children}</Link>
    ) : (
      <Link to={buttonTo} className="btn-primary shadow">{children}</Link>
    )

  if (variant === 'split') {
    return (
      <section className="text-white relative overflow-hidden" style={{ backgroundColor: '#133D60' }}>
        <div className="container-x py-10 md:py-14 grid md:grid-cols-[auto,1fr,auto] gap-6 items-center relative z-10">
          <ShieldBadge />
          <div className="md:pl-2">
            <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
            {subtitle && <p className="text-white/80 text-sm md:text-base mt-1">{subtitle}</p>}
          </div>
          <div className="md:justify-self-end relative">
            <Btn>
              {buttonIcon}
              {buttonLabel}
            </Btn>
            <CurvedArrowBack />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="text-white relative overflow-hidden" style={{ backgroundColor: '#133D60' }}>
      {trustNote ? <WaveLines /> : <DotsBg />}
      <div className="container-x py-12 md:py-16 text-center relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
        {subtitle && <p className="text-white/85 mt-3 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="mt-6 flex justify-center">
          <Btn>
            {buttonIcon}
            {buttonLabel}
          </Btn>
        </div>
        {trustNote && (
          <p className="mt-6 text-sm font-semibold text-white inline-flex items-center gap-2 justify-center">
            <Users className="h-4 w-4" />
            {trustNote}
          </p>
        )}
      </div>
    </section>
  )
}

function WaveLines() {
  return (
    <svg
      className="absolute left-0 top-0 h-full w-[280px] md:w-[340px] opacity-50 pointer-events-none"
      viewBox="0 0 340 220"
      fill="none"
      preserveAspectRatio="xMinYMid slice"
      aria-hidden="true"
    >
      {[...Array(9)].map((_, i) => {
        const offset = i * 8
        return (
          <path
            key={i}
            d={`M -20 ${30 + offset} C 60 ${10 + offset}, 140 ${110 + offset}, 240 ${50 + offset} S 360 ${110 + offset}, 420 ${70 + offset}`}
            stroke="#7FB3DC"
            strokeWidth="1"
            strokeLinecap="round"
            opacity={0.55 - i * 0.03}
          />
        )
      })}
    </svg>
  )
}

function DotsBg() {
  return (
    <>
      <svg className="absolute left-4 top-4 opacity-30" width="120" height="80" viewBox="0 0 120 80" aria-hidden="true">
        {[...Array(8)].map((_, r) =>
          [...Array(12)].map((_, c) => (
            <circle key={`${r}-${c}`} cx={4 + c * 10} cy={4 + r * 10} r="1.2" fill="#ffffff" opacity="0.45" />
          ))
        )}
      </svg>
      <svg className="absolute right-4 bottom-4 opacity-30" width="120" height="80" viewBox="0 0 120 80" aria-hidden="true">
        {[...Array(8)].map((_, r) =>
          [...Array(12)].map((_, c) => (
            <circle key={`${r}-${c}`} cx={4 + c * 10} cy={4 + r * 10} r="1.2" fill="#ffffff" opacity="0.45" />
          ))
        )}
      </svg>
    </>
  )
}

function ShieldBadge() {
  return (
    <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white/10 flex items-center justify-center ring-1 ring-white/20">
      <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-white/15 flex items-center justify-center">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="0" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" stroke="#004985" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

function CurvedArrowBack() {
  return (
    <svg
      className="absolute -right-20 -top-2 hidden md:block pointer-events-none"
      width="120"
      height="50"
      viewBox="0 0 120 50"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M 110 4 C 95 8, 70 12, 30 32"
        stroke="white"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        strokeLinecap="round"
        opacity="0.75"
        fill="none"
      />
      <path
        d="M 36 26 L 28 32 L 36 38"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
        fill="none"
      />
    </svg>
  )
}
