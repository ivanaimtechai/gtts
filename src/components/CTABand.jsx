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
        <DotsBg />
        <div className="container-x py-10 md:py-14 grid md:grid-cols-[auto,1fr,auto] gap-6 items-center relative z-10">
          <ShieldBadge />
          <div className="md:pl-2">
            <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
            {subtitle && <p className="text-white/80 text-sm md:text-base mt-1">{subtitle}</p>}
          </div>
          <div className="md:justify-self-end">
            <Btn>
              {buttonIcon}
              {buttonLabel}
            </Btn>
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
      <svg className="absolute right-10 bottom-6 hidden md:block" width="160" height="40" viewBox="0 0 160 40" aria-hidden="true">
        <path d="M5 30 Q 50 -5, 100 20 T 155 18" stroke="white" strokeWidth="1.5" strokeDasharray="3 4" fill="none" opacity="0.6" />
        <polygon points="150,14 158,18 150,22" fill="white" opacity="0.6" />
      </svg>
    </>
  )
}

function ShieldBadge() {
  return (
    <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white/10 flex items-center justify-center ring-1 ring-white/30">
      <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-white/15 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      </div>
    </div>
  )
}
