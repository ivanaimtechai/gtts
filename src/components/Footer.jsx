import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import Logo from './Logo.jsx'

const company = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
  { label: 'News', to: '#' },
  { label: 'Partner Program', to: '/partner' },
]

const legal = [
  { label: 'Privacy', to: '#' },
  { label: 'Policy Terms of Service', to: '#' },
  { label: 'Court Directory', to: '#' },
  { label: 'Student Comments', to: '#' },
]

const socials = [
  { label: 'Tiktok', icon: TiktokIcon },
  { label: 'Instagram', icon: InstagramIcon },
  { label: 'X', icon: XIcon },
  { label: 'YouTube', icon: YouTubeIcon },
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'LinkedIn', icon: LinkedInIcon },
]

export default function Footer() {
  return (
    <>
      <footer className="bg-brand-softblue text-brand-navy">
        <div className="container-x py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo />
            <p className="text-sm text-brand-navy/80 mt-4 leading-relaxed">
              The fastest, easiest way to complete your traffic school online. Trusted by over 10 million drivers nationwide.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-brand-blue">
                <Phone className="h-4 w-4" />
                <a href="tel:1-888-329-7069">1-888-329-7069</a>
              </li>
              <li className="flex items-center gap-2 text-brand-blue">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@gototrafficschool.com">info@gototrafficschool.com</a>
              </li>
              <li className="flex items-center gap-2 text-brand-blue">
                <MapPin className="h-4 w-4" />
                <span>Garden Grove, California</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-blue mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              {company.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-brand-blue text-brand-navy/80">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-blue mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.to} className="hover:text-brand-blue text-brand-navy/80">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-blue mb-3">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <li key={s.label}>
                    <a href="#" className="inline-flex items-center gap-2 hover:text-brand-blue text-brand-navy/80">
                      <Icon className="h-4 w-4" />
                      {s.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </footer>

      <div className="bg-black text-white">
        <div className="container-x py-4 text-xs text-center text-white/85">
          © 2026 gototrafficschool.com Powered by{' '}
          <span className="font-semibold">Cyberactive</span>. All rights reserved.
        </div>
      </div>
    </>
  )
}

/* simple monochrome social glyphs */
function TiktokIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12.5 2h2.7a4.7 4.7 0 0 0 4.6 4.5v2.7a7.4 7.4 0 0 1-4.6-1.6v7.6a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.8a2.8 2.8 0 1 0 1.9 2.7V2z"/>
    </svg>
  )
}
function InstagramIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  )
}
function XIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M3 3h4.5l4.3 5.8L16.5 3H21l-7 8.6L21 21h-4.6l-4.6-6.2L6.5 21H2l7.5-9L3 3z"/>
    </svg>
  )
}
function YouTubeIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.6A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8 3 3 0 0 0 3.1 19c1.9.5 8.9.5 8.9.5s7 0 8.9-.5A3 3 0 0 0 23 16.8 31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.2zM10 15.5v-7l6 3.5-6 3.5z"/>
    </svg>
  )
}
function FacebookIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M13 22v-8h2.7l.4-3.1H13V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7v3.1h2.6V22H13z"/>
    </svg>
  )
}
function LinkedInIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.9-2 3.9-2 4.1 0 4.9 2.7 4.9 6.2V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9z"/>
    </svg>
  )
}
