import { Link } from 'react-router-dom'
import {
  Check,
  CheckCircle2,
  Award,
  Users,
  MapPin,
  BadgeCheck,
  Home,
  Shield,
  GraduationCap,
  Briefcase,
  UserCircle2,
  Rocket,
  ThumbsUp,
} from 'lucide-react'
import LanguageSelector from '../components/LanguageSelector.jsx'
import CTABand from '../components/CTABand.jsx'

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-softblue2 via-brand-softblue to-white">
        <DotPattern />
        <WaveCorner />
        <div className="container-x py-10 md:py-14 grid lg:grid-cols-[1.1fr,1fr] gap-10 items-center relative z-10">
          {/* Left */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-brand-navy">
              We pioneered online traffic school. We've been refining it ever since.
            </h1>
            <p className="mt-5 text-base text-brand-navy/80 max-w-xl leading-relaxed">
              Founded in 2000, GoToTrafficSchool helped bring traffic school online. Today, over 10 million drivers trust our platform nationwide.
            </p>
            <div className="mt-7">
              <Link to="/how-it-works" className="btn-primary shadow-md">Start Your Course</Link>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-brand-navy">
              {['No timers', 'Self-paced', 'Same-day processing (State dependent)'].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-brand-blue text-white flex items-center justify-center">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div className="relative">
            <div className="flex justify-end mb-6">
              <LanguageSelector />
            </div>
            <ul className="divide-y divide-brand-navy/10">
              {[
                { icon: <Award className="h-5 w-5" />, label: 'One of the first online traffic school (2000)' },
                { icon: <Users className="h-5 w-5" />, label: '10 million+ drivers served' },
                { icon: <MapPin className="h-5 w-5" />, label: 'Approved nationwide where allowed' },
                { icon: <BadgeCheck className="h-5 w-5" />, label: 'Same-day certificate processing (state dependent)' },
              ].map((it) => (
                <li key={it.label} className="flex items-center gap-4 py-4">
                  <span className="h-11 w-11 shrink-0 rounded-full bg-white border border-brand-navy/20 text-brand-navy flex items-center justify-center">
                    {it.icon}
                  </span>
                  <span className="text-sm md:text-[15px] text-brand-navy leading-snug">{it.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-brand-line">
        <div className="container-x py-8 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            { big: '10M+', sub: 'Drivers Served' },
            { big: '2000', sub: 'Founded' },
            { big: 'Nationwide', sub: 'Approved Where Allowed' },
            { big: 'Same-Day', sub: 'Certificate Processing' },
            { big: 'Real Support', sub: 'No Bots' },
          ].map((s) => (
            <div key={s.sub}>
              <div className="text-xl md:text-2xl font-extrabold text-brand-blue">{s.big}</div>
              <div className="text-xs md:text-sm text-brand-navy/70 mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-14">
        <div className="container-x max-w-3xl text-center">
          <h2 className="h-section">Our Story</h2>
          <span className="h-section-underline block" />
          <p className="text-brand-navy/80 leading-relaxed">
            GoToTrafficSchool launched one of the first fully online traffic school programs in California in 2000, replacing the inconvenience of classroom courses with a flexible alternative. Since then, more than 10 million drivers have completed courses through our platform. Today, we operate nationwide in every state that allows online traffic school, defensive driving, or driver improvement programs.
          </p>
          <p className="text-brand-navy/80 leading-relaxed mt-4">
            Traffic School, Defensive Driving, and Driver Improvement may vary by state but the goal is the same: meet requirements, avoid points, and stay compliant.
          </p>
        </div>
      </section>

      {/* BUILT FOR SIMPLICITY */}
      <section className="pb-12">
        <div className="container-x">
          <h2 className="h-section">Built for Simplicity. Designed for Real Life</h2>
          <span className="h-section-underline block" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6 mt-2 text-center">
            {[
              { icon: SpeedGaugeIcon, label: 'Fully Self-Paced' },
              { icon: SpeedGaugeOffIcon, label: 'No Timers' },
              { icon: AnyDevicesIcon, label: 'Any Devices' },
              { icon: MobilePhoneIcon, label: 'Mobile Apps' },
              { icon: CloudUploadIcon, label: 'Auto-Serve Progress' },
              { icon: DeviceSwapIcon, label: 'Devices Switching' },
              { icon: CertificateAwardIcon, label: 'Fast Processing' },
              { icon: CalendarIcon, label: 'Fast Anytime' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center">
                <Icon className="h-12 w-12 text-brand-blue" />
                <div className="mt-3 text-sm font-semibold text-brand-navy">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES FOR EVERY DRIVER */}
      <section className="pb-14">
        <div className="container-x">
          <h2 className="h-section">Courses for Every Driver</h2>
          <span className="h-section-underline block" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: Home, title: 'Ticket Dismissal', body: 'Keep points off your record where eligible and dismiss tickets.' },
              { icon: Shield, title: 'Insurance Discount', body: 'Qualify for potential insurance savings with state-approved courses.' },
              { icon: UserCircle2, title: 'Mature Driver Programs', body: 'Stay sharp, refresh your skills, and access discounts designed for experienced drivers.' },
              { icon: Briefcase, title: 'Fleet Safety Training', body: 'Provide driver safety training for employees and reduce risk for your organization.' },
              { icon: GraduationCap, title: 'Teen Driver Education', body: 'State-required courses for new drivers preparing for permits and licenses.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="card text-center hover:shadow-md transition-shadow">
                <div className="mx-auto h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm text-brand-navy/75 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DRIVERS CHOOSE + BUILT FOR EFFICIENCY */}
      <section className="pb-14">
        <div className="container-x grid lg:grid-cols-[1.4fr,1fr] gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-brand-navy">Why Drivers Choose GoToTrafficSchool</h2>
            <ul className="mt-6 space-y-5">
              {[
                { t: 'No Timer or waiting periods', d: 'We never force time restrictions or unnecessary delays.' },
                { t: 'True Self-Paced Learning', d: "You're in control — complete the course on your schedule." },
                { t: 'Same-Day Certificate Processing', d: 'Fast, reliable processing in many states.' },
                { t: 'Real Human Support', d: 'Talk to a real person when you need help.' },
                { t: 'Lowest Price Guarantee', d: 'If you find a comparable course for less, we will beat it.' },
              ].map((row) => (
                <li key={row.t} className="flex gap-3">
                  <span className="h-6 w-6 mt-0.5 rounded-full bg-brand-navy text-white flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <div>
                    <div className="font-bold text-brand-navy">{row.t}</div>
                    <div className="text-sm text-brand-navy/70 mt-0.5">{row.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <aside className="bg-brand-softblue rounded-2xl p-8 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-brand-navy text-white flex items-center justify-center mb-4">
              <Rocket className="h-7 w-7" strokeWidth={1.8} />
            </div>
            <h3 className="font-bold text-brand-navy text-2xl">Built for Efficiency</h3>
            <p className="mt-5 text-[15px] text-brand-navy/80 leading-relaxed">
              Most platforms add unnecessary steps. <br />
              We remove them.
            </p>
            <p className="mt-5 text-[15px] text-brand-navy/80 leading-relaxed">
              Our system is designed to get you through traffic school quickly, correctly, and without friction.
            </p>
          </aside>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="pb-16">
        <div className="container-x">
          <h2 className="h-section">What Makes Us Different</h2>
          <span className="h-section-underline block" />
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto divide-y md:divide-y-0 md:divide-x divide-brand-line">
            {[
              {
                icon: ShieldStarIcon,
                body: (
                  <>We've been in this space longer than most — and it shows.</>
                ),
              },
              {
                icon: UserStarsIcon,
                body: (
                  <>
                    Our platform prioritizes <strong className="font-bold text-brand-navy">speed, flexibility, and simplicity</strong> over unnecessary restrictions.
                  </>
                ),
              },
              {
                icon: ThumbsUp,
                body: (
                  <>
                    The result is a system that <strong className="font-bold text-brand-navy">works the way drivers actually need it to.</strong>
                  </>
                ),
              },
            ].map(({ icon: Icon, body }, i) => (
              <div key={i} className="flex gap-4 items-start px-6 py-6">
                <Icon className="h-12 w-12 text-brand-blue shrink-0" strokeWidth={1.5} />
                <p className="text-sm text-brand-navy/80 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Start Your Traffic School Today"
        subtitle="Enroll in minutes. Complete at your own pace. Get back on the road."
        buttonLabel="Register Now"
        buttonTo="/how-it-works"
        trustNote="Trusted by over 10 million drivers nationwide."
      />
    </>
  )
}

function DotPattern() {
  return (
    <svg className="absolute right-6 top-6 opacity-60 pointer-events-none" width="220" height="140" viewBox="0 0 220 140" aria-hidden="true">
      {[...Array(10)].map((_, r) =>
        [...Array(18)].map((_, c) => (
          <circle key={`${r}-${c}`} cx={5 + c * 12} cy={5 + r * 12} r="1.4" fill="#1E5A91" opacity="0.35" />
        ))
      )}
    </svg>
  )
}

/* ---------- Custom outline icons (Built for Simplicity) ---------- */

const iconBase = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function SpeedGaugeIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...iconBase} aria-hidden="true">
      {/* gauge arc */}
      <path d="M14 32 A 12 12 0 0 1 38 32" />
      {/* needle */}
      <path d="M26 32 L 33 23" />
      <circle cx="26" cy="32" r="1.8" fill="currentColor" stroke="none" />
      {/* motion lines */}
      <path d="M2 22 H 10" />
      <path d="M0 27 H 9" />
      <path d="M3 32 H 9" />
    </svg>
  )
}

function SpeedGaugeOffIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...iconBase} aria-hidden="true">
      {/* gauge faded behind */}
      <path d="M14 32 A 12 12 0 0 1 38 32" />
      <path d="M26 32 L 33 23" />
      <circle cx="26" cy="32" r="1.8" fill="currentColor" stroke="none" />
      {/* motion lines */}
      <path d="M2 22 H 10" />
      <path d="M0 27 H 9" />
      <path d="M3 32 H 9" />
      {/* prohibition circle + slash */}
      <circle cx="28" cy="26" r="11" />
      <path d="M20 34 L 36 18" />
    </svg>
  )
}

function AnyDevicesIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...iconBase} aria-hidden="true">
      {/* monitor */}
      <rect x="14" y="10" width="28" height="18" rx="1.5" />
      <path d="M22 32 H 34" />
      <path d="M28 28 V 32" />
      {/* phone in front-left */}
      <rect x="6" y="18" width="11" height="20" rx="1.8" />
      <path d="M10 35 H 13" />
    </svg>
  )
}

function MobilePhoneIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...iconBase} aria-hidden="true">
      <rect x="15" y="6" width="18" height="36" rx="3" />
      <path d="M22 38 H 26" />
      <path d="M21 10 H 27" />
    </svg>
  )
}

function CloudUploadIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...iconBase} aria-hidden="true">
      {/* cloud */}
      <path d="M14 32 A 7 7 0 0 1 16 18 A 9 9 0 0 1 33 19 A 6 6 0 0 1 35 31" />
      <path d="M14 32 H 35" />
      {/* up arrow */}
      <path d="M24 38 V 24" />
      <path d="M19 28 L 24 23 L 29 28" />
    </svg>
  )
}

function DeviceSwapIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...iconBase} aria-hidden="true">
      {/* left phone */}
      <rect x="6" y="14" width="12" height="22" rx="2" />
      <path d="M10 32 H 14" />
      {/* right phone */}
      <rect x="30" y="14" width="12" height="22" rx="2" />
      <path d="M34 32 H 38" />
      {/* top arrow (left -> right) */}
      <path d="M19 14 C 24 8, 28 8, 30 12" />
      <path d="M28 8 L 30 12 L 26 13" />
      {/* bottom arrow (right -> left) */}
      <path d="M29 38 C 24 44, 20 44, 18 40" />
      <path d="M20 44 L 18 40 L 22 39" />
    </svg>
  )
}

function CertificateAwardIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...iconBase} aria-hidden="true">
      {/* document */}
      <rect x="6" y="8" width="36" height="24" rx="2" />
      {/* document lines */}
      <path d="M12 14 H 32" />
      <path d="M12 19 H 28" />
      <path d="M12 24 H 30" />
      {/* award badge */}
      <circle cx="24" cy="34" r="6" fill="#fff" />
      <circle cx="24" cy="34" r="6" />
      {/* ribbon tails */}
      <path d="M21 39 L 20 44 L 24 42 L 28 44 L 27 39" />
      {/* star */}
      <path
        d="M24 30.5 L 25 32.7 L 27.3 33 L 25.6 34.5 L 26 36.8 L 24 35.7 L 22 36.8 L 22.4 34.5 L 20.7 33 L 23 32.7 Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

function ShieldStarIcon({ className = '', strokeWidth = 1.5 }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* shield outline */}
      <path d="M24 6 L 38 11 V 24 C 38 33, 31 39, 24 42 C 17 39, 10 33, 10 24 V 11 Z" />
      {/* star inside */}
      <path
        d="M24 16 L 26.4 21 L 32 21.7 L 28 25.6 L 28.9 31 L 24 28.5 L 19.1 31 L 20 25.6 L 16 21.7 L 21.6 21 Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

function UserStarsIcon({ className = '', strokeWidth = 1.5 }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* head */}
      <circle cx="24" cy="14" r="5" />
      {/* shoulders */}
      <path d="M14 28 C 16 23, 32 23, 34 28" />
      {/* two stars below */}
      <path d="M16 36 L 17.6 39.2 L 21 39.6 L 18.5 41.9 L 19.1 45.2 L 16 43.6 L 12.9 45.2 L 13.5 41.9 L 11 39.6 L 14.4 39.2 Z" />
      <path d="M32 36 L 33.6 39.2 L 37 39.6 L 34.5 41.9 L 35.1 45.2 L 32 43.6 L 28.9 45.2 L 29.5 41.9 L 27 39.6 L 30.4 39.2 Z" />
    </svg>
  )
}

function CalendarIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...iconBase} aria-hidden="true">
      <rect x="7" y="10" width="34" height="30" rx="2" />
      <path d="M7 18 H 41" />
      <path d="M15 6 V 13" />
      <path d="M33 6 V 13" />
      {/* dots */}
      {[24, 30, 36].map((y) =>
        [14, 20, 26, 32].map((x) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.2" fill="currentColor" stroke="none" />
        ))
      )}
    </svg>
  )
}

function WaveCorner() {
  return (
    <svg
      className="absolute -right-10 -bottom-10 w-[520px] h-[260px] opacity-70 pointer-events-none"
      viewBox="0 0 520 260"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 220 C 140 120, 320 280, 520 140 L 520 260 L 0 260 Z"
        fill="#CFE2F2"
        opacity="0.55"
      />
      <path
        d="M0 240 C 160 160, 340 260, 520 180 L 520 260 L 0 260 Z"
        fill="#BCD6EC"
        opacity="0.55"
      />
    </svg>
  )
}
