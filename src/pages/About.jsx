import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  Award,
  Users,
  MapPin,
  BadgeCheck,
  Clock,
  Smartphone,
  Monitor,
  MonitorSmartphone,
  CloudUpload,
  Repeat,
  FileCheck2,
  CalendarDays,
  Home,
  Shield,
  GraduationCap,
  Briefcase,
  UserCircle2,
  Rocket,
  ShieldCheck,
  ThumbsUp,
} from 'lucide-react'
import LanguageSelector from '../components/LanguageSelector.jsx'
import CTABand from '../components/CTABand.jsx'

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-brand-softblue2 via-brand-softblue to-white">
        <DotPattern />
        <div className="container-x py-10 md:py-14 grid lg:grid-cols-[1.1fr,1fr] gap-10 items-center relative z-10">
          {/* Left */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-brand-navy">
              We pioneered online traffic school. We've been refining it ever since.
            </h1>
            <p className="mt-5 text-base text-brand-navy/80 max-w-xl leading-relaxed">
              Founded in 2000, GoToTrafficSchool helped bring traffic school online. Today, over 10 million drivers trust our platform nationwide.
            </p>
            <div className="mt-6">
              <Link to="/how-it-works" className="btn-primary">Start Your Course</Link>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-brand-navy">
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-orange" /> No timers
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-orange" /> Self-paced
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-orange" /> Same-day processing (State dependent)
              </li>
            </ul>
          </div>

          {/* Right card */}
          <div className="relative">
            <div className="flex justify-end mb-3">
              <LanguageSelector />
            </div>
            <ul className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white shadow-card divide-y divide-brand-line">
              {[
                { icon: <Award className="h-5 w-5" />, label: 'One of the first online traffic school (2000)' },
                { icon: <Users className="h-5 w-5" />, label: '10 million+ drivers served' },
                { icon: <MapPin className="h-5 w-5" />, label: 'Approved nationwide where allowed' },
                { icon: <BadgeCheck className="h-5 w-5" />, label: 'Same-day certificate processing (state dependent)' },
              ].map((it) => (
                <li key={it.label} className="flex items-center gap-4 px-5 py-4">
                  <span className="h-10 w-10 rounded-full bg-brand-softblue text-brand-blue flex items-center justify-center">
                    {it.icon}
                  </span>
                  <span className="text-sm md:text-[15px] text-brand-navy">{it.label}</span>
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
              { icon: Clock, label: 'Fully Self-Paced' },
              { icon: Clock, label: 'No Timers' },
              { icon: MonitorSmartphone, label: 'Any Devices' },
              { icon: Smartphone, label: 'Mobile Apps' },
              { icon: CloudUpload, label: 'Auto-Serve Progress' },
              { icon: Repeat, label: 'Devices Switching' },
              { icon: FileCheck2, label: 'Fast Processing' },
              { icon: CalendarDays, label: 'Fast Anytime' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center">
                <Icon className="h-10 w-10 text-brand-blue" strokeWidth={1.6} />
                <div className="mt-3 text-sm font-medium text-brand-navy">{label}</div>
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
            <ul className="mt-5 space-y-4">
              {[
                { t: 'No Timer or waiting periods', d: 'We never force time restrictions or unnecessary delays.' },
                { t: 'True Self-Paced Learning', d: "You're in control — complete the course on your schedule." },
                { t: 'Same-Day Certificate Processing', d: 'Fast, reliable processing in many states.' },
                { t: 'Real Human Support', d: 'Talk to a real person when you need help.' },
                { t: 'Lowest Price Guarantee', d: 'If you find a comparable course for less, we will beat it.' },
              ].map((row) => (
                <li key={row.t} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-1 text-brand-blue shrink-0" />
                  <div>
                    <div className="font-semibold text-brand-navy">{row.t}</div>
                    <div className="text-sm text-brand-navy/75">{row.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <aside className="bg-brand-softblue rounded-2xl p-7 text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-white text-brand-blue flex items-center justify-center mb-3">
              <Rocket className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-brand-navy text-xl">Built for Efficiency</h3>
            <p className="mt-3 text-sm text-brand-navy/80 leading-relaxed">
              Most platforms add unnecessary steps. <br />
              We remove them.
            </p>
            <p className="mt-3 text-sm text-brand-navy/80 leading-relaxed">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, body: "We've been in this space longer than most — and it shows." },
              { icon: UserCircle2, body: 'Our platform prioritizes speed, flexibility, and simplicity over unnecessary restrictions.' },
              { icon: ThumbsUp, body: 'The result is a system that works the way drivers actually need it to.' },
            ].map(({ icon: Icon, body }, i) => (
              <div key={i} className="flex gap-4">
                <Icon className="h-10 w-10 text-brand-blue shrink-0" strokeWidth={1.5} />
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
    <svg className="absolute right-6 top-6 opacity-60" width="220" height="140" viewBox="0 0 220 140" aria-hidden="true">
      {[...Array(10)].map((_, r) =>
        [...Array(18)].map((_, c) => (
          <circle key={`${r}-${c}`} cx={5 + c * 12} cy={5 + r * 12} r="1.4" fill="#1E5A91" opacity="0.35" />
        ))
      )}
    </svg>
  )
}
