import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { User, Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'

const links = [
  { to: '/about', label: 'About Us' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/faq', label: 'FAQs' },
  { to: '/partner', label: 'Partner with us' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b border-brand-line sticky top-0 z-40">
      <div className="container-x flex items-center justify-between h-[72px]">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[15px] font-medium transition-colors ${
                  isActive ? 'text-brand-blue font-semibold' : 'text-brand-navy hover:text-brand-blue'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-navy text-white text-sm font-semibold px-4 py-2 hover:bg-brand-navy2 transition-colors"
          >
            <User className="h-4 w-4" />
            Log In
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden text-brand-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-brand-line bg-white">
          <div className="container-x py-3 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-2 py-2 rounded-md text-[15px] font-medium ${
                    isActive ? 'bg-brand-softblue text-brand-blue' : 'text-brand-navy hover:bg-brand-softblue'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-navy text-white text-sm font-semibold px-4 py-2"
            >
              <User className="h-4 w-4" />
              Log In
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
