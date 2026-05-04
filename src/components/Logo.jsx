import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link to="/about" className={`flex items-center gap-2 ${className}`}>
      <svg width="44" height="44" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="2" width="60" height="60" rx="8" fill="#fff" stroke="#0F2A47" strokeWidth="2"/>
        {/* stylized A / road mark */}
        <path d="M14 50 L26 14 L38 14 Q44 14 46 22 L50 50 L42 50 L40 40 L24 40 L20 50 Z M27 32 L37 32 L34 22 Q33 19 30 19 L29 19 Z" fill="#0F2A47"/>
        {/* red swoosh */}
        <path d="M40 16 Q56 20 52 36 Q49 46 38 46" stroke="#E63946" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      </svg>
      <div className="leading-tight">
        <div className="text-[15px] font-semibold text-brand-navy">Go To</div>
        <div className="text-[18px] font-bold text-brand-navy -mt-0.5">
          Traffic <span className="font-semibold">School</span>
        </div>
      </div>
    </Link>
  )
}
