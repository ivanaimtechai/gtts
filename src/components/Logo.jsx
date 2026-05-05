import { useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Renders the brand logo.
 * - Tries to load `/logo.png` from the `public/` folder first (drop your asset there).
 * - Falls back to an inline-SVG approximation if the image fails to load,
 *   so the site never renders without a logo.
 */
export default function Logo({ className = '', height = 44 }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <Link to="/about" className={`flex items-center ${className}`} aria-label="Go To Traffic School — Home">
      {!imgFailed ? (
        <img
          src="/logo.png"
          alt="Go To Traffic School"
          height={height}
          style={{ height: `${height}px`, width: 'auto' }}
          onError={() => setImgFailed(true)}
          draggable={false}
        />
      ) : (
        <FallbackSVG height={height} />
      )}
    </Link>
  )
}

function FallbackSVG({ height }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        width={height}
        height={height}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="2" y="6" width="40" height="40" rx="6" fill="#1E5A91" />
        {/* white road lines */}
        <path d="M10 42 L26 18 L34 18 L18 42 Z" fill="#ffffff" opacity="0.85" />
        <path d="M22 42 L36 22 L40 22 L26 42 Z" fill="#ffffff" opacity="0.55" />
        {/* red curving swoosh */}
        <path
          d="M6 50 Q 24 30, 50 36 Q 58 38, 60 28"
          stroke="#E63946"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <div className="leading-tight">
        <div className="text-[15px] font-semibold text-brand-navy">Go To</div>
        <div className="text-[18px] font-bold text-brand-navy -mt-0.5">
          Traffic <span className="font-semibold">School</span>
        </div>
      </div>
    </div>
  )
}
