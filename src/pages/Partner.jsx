import { useState } from 'react'
import {
  Users,
  ShieldCheck,
  Tag,
  Award,
  Briefcase,
  Scale,
  Shield,
  Building2,
  Link2,
  Settings,
  UserCircle2,
  CheckCircle2,
  Gavel,
  Smartphone,
  Globe2,
  ChevronDown,
} from 'lucide-react'
import LanguageSelector from '../components/LanguageSelector.jsx'

const states = [
  'Alaska', 'Arizona', 'California', 'Delaware', 'Florida', 'Idaho',
  'Indiana', 'Michigan', 'Minnesota', 'Missouri', 'New Jersey', 'New York',
  'North Dakota', 'Oregon', 'Tennessee', 'Virginia', 'Washington', 'Wisconsin',
]

export default function Partner() {
  return (
    <>
      {/* HERO (dark) */}
      <section className="relative bg-brand-navy text-white overflow-hidden">
        <div className="container-x py-12 md:py-16 grid lg:grid-cols-[1.2fr,1fr] gap-10 items-center relative z-10">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Partner With <br className="hidden md:block" />
              GoToTrafficSchool.com
            </h1>
            <p className="mt-5 text-white/85 max-w-xl">
              Online traffic school solutions for courts, attorneys, insurers, and businesses.
            </p>
            <p className="mt-3 text-white/75 text-sm max-w-xl">
              GoToTrafficSchool.com helps partners offer compliant, convenient online traffic school programs with flexible referral, white-label, court, and business integration options.
            </p>
            <div className="mt-6">
              <a href="#partner-form" className="btn-primary">Become a Partner</a>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="flex justify-end">
              <LanguageSelector className="text-white" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: <Users className="h-5 w-5" />, big: '10 Millions+', sub: 'Drivers Served' },
                { icon: <Shield className="h-5 w-5" />, big: 'State & Court', sub: 'Accepted Programs' },
                { icon: <Tag className="h-5 w-5" />, big: 'White Label', sub: 'Available' },
                { icon: <Award className="h-5 w-5" />, big: 'Certificate', sub: 'Delivery Support' },
              ].map((s) => (
                <div key={s.sub} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg px-4 py-3 flex items-center gap-3">
                  <span className="h-9 w-9 rounded-md bg-white/15 flex items-center justify-center">
                    {s.icon}
                  </span>
                  <div>
                    <div className="text-sm font-semibold leading-tight">{s.big}</div>
                    <div className="text-xs text-white/75">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="border-b border-brand-line">
        <div className="container-x py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, big: '10 Millions+', sub: 'Drivers Served' },
            { icon: ShieldCheck, big: 'State & Court', sub: 'Accepted Programs' },
            { icon: Globe2, big: '100% Online', sub: 'Convenient & Easy' },
            { icon: Smartphone, big: 'Mobile Friendly', sub: 'iOS & Android' },
          ].map(({ icon: Icon, big, sub }) => (
            <div key={sub} className="flex items-center gap-3">
              <Icon className="h-7 w-7 text-brand-blue" strokeWidth={1.6} />
              <div>
                <div className="text-sm font-bold text-brand-navy">{big}</div>
                <div className="text-xs text-brand-navy/70">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATE-APPROVED */}
      <section className="py-12">
        <div className="container-x grid lg:grid-cols-[1fr,1.4fr] gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
              State-Approved Programs Across the U.S.
            </h2>
            <p className="mt-4 text-sm text-brand-navy/80 leading-relaxed">
              GoToTrafficSchool.com offers approved traffic school, defensive driving, and driver improvement programs in multiple states, with compliance handled by CyberActive.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
            {states.map((s) => (
              <span key={s} className="text-center text-sm text-brand-blue bg-brand-softblue rounded-md px-3 py-2 border border-brand-softblue2">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="container-x mt-10">
          <div className="bg-brand-softblue rounded-2xl p-5 md:p-6 grid md:grid-cols-[auto,1fr,auto] gap-4 items-center">
            <span className="h-12 w-12 rounded-full bg-white text-brand-blue flex items-center justify-center">
              <Gavel className="h-6 w-6" />
            </span>
            <div>
              <div className="font-semibold text-brand-blue">No Statewide Approval? We Can Work Directly With Courts.</div>
              <div className="text-sm text-brand-navy/80 mt-1">
                In states where approval is handled locally, we work with courts and jurisdictions to provide accepted online traffic school solutions.
              </div>
            </div>
            <a href="#partner-form" className="btn-navy text-sm">Talk to Our Partnership Team</a>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP OPPORTUNITIES */}
      <section className="py-10">
        <div className="container-x">
          <h2 className="h-section">Partnership Opportunities</h2>
          <span className="h-section-underline block" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {opps.map((o) => (
              <div key={o.title} className="card">
                <span className="h-10 w-10 rounded-md bg-brand-softblue text-brand-blue flex items-center justify-center">
                  <o.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-brand-navy">{o.title}</h3>
                <p className="text-xs text-brand-navy/75 mt-1">{o.body}</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {o.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-brand-navy/85">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-blue shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW PARTNERSHIPS WORK */}
      <section className="py-10">
        <div className="container-x">
          <h2 className="h-section">How Our Partnerships Work</h2>
          <span className="h-section-underline block" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { n: '1', icon: Link2, t: 'Choose Your Partnership Model', d: 'Choose the option that works best for you: referral, direct link, white label, or custom integration.' },
              { n: '2', icon: Settings, t: 'We Configure Everything', d: 'We set up branding, reporting, certificate delivery, tracking, and everything you need.' },
              { n: '3', icon: UserCircle2, t: 'Your Users Start Online', d: 'Students enroll, complete the course, and receive their certificate fully online.' },
            ].map(({ n, icon: Icon, t, d }) => (
              <div key={n} className="card flex gap-4">
                <span className="h-9 w-9 shrink-0 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold">{n}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-brand-blue" />
                    <h3 className="font-semibold text-brand-navy">{t}</h3>
                  </div>
                  <p className="mt-2 text-sm text-brand-navy/75">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHITE LABEL vs REFERRAL */}
      <section className="py-10">
        <div className="container-x grid lg:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold text-brand-navy">White Label Traffic School Programs</h3>
            <p className="mt-2 text-sm text-brand-navy/80">
              Offer traffic school under your own brand while CyberActive manages everything.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                'Fully branded partner experience',
                'Backend course & compliance management',
                'Reporting & tracking',
                'Certificate delivery options',
                'No need to build or maintain technology',
              ].map((it) => (
                <li key={it} className="flex items-start gap-2 text-brand-navy/85">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-blue shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <a href="#partner-form" className="btn-primary">Learn More About White Label</a>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-brand-navy">Simple Referral Program</h3>
            <p className="mt-2 text-sm text-brand-navy/80">
              For individuals and organizations, we offer easy referral links and codes.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-2 text-brand-navy/85">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-blue shrink-0" />
                <span>Earn $5 for each successful referral</span>
              </li>
              <li className="flex items-start gap-2 text-brand-navy/85">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-blue shrink-0" />
                <span>Your referral receives a $2 discount</span>
              </li>
            </ul>
            <p className="mt-3 text-sm text-brand-navy/80">
              It's an easy way to share a trusted program while offering value to others.
            </p>
            <div className="mt-5">
              <a href="#partner-form" className="btn-navy">Request a Referral Code</a>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <PartnerForm />
    </>
  )
}

const opps = [
  {
    icon: Building2,
    title: 'Courts',
    body: 'Reduce administrative burden and make traffic school easy for your constituents.',
    items: ['Offer online access', 'Fee collection (where directed)', 'Certificate delivery support', 'White label or direct link options'],
  },
  {
    icon: Scale,
    title: 'Traffic Attorneys',
    body: 'Give your clients a simple, reliable way to complete traffic school.',
    items: ['Custom referral links', 'Discount & coupon codes', 'White label solutions', 'Integration into your website'],
  },
  {
    icon: Shield,
    title: 'Insurance Companies',
    body: 'Support driver improvement and help reduce risk with our online programs.',
    items: ['Good driver discounts', 'Point reduction programs', 'Driver safety initiatives', 'Flexible integration options'],
  },
  {
    icon: Briefcase,
    title: 'Businesses and Organizations',
    body: 'Offer traffic school as part of your services or platform.',
    items: ['Referral & link partnerships', 'Custom integrations', 'White label options', 'Certificate delivery available'],
  },
]

function PartnerForm() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <section id="partner-form" className="bg-brand-softblue py-12">
      <div className="container-x max-w-5xl">
        <h2 className="h-section text-brand-blue">Ready to Partner With GoToTrafficSchool.com?</h2>
        <p className="text-center text-brand-navy/80 mt-2 mb-8">
          Fill out the form below and one of our partnership specialists will reach out to discuss the best solution for your needs.
        </p>
        <form
          className="bg-white rounded-2xl p-6 md:p-8 shadow-card grid grid-cols-1 md:grid-cols-3 gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <Field label="Full Name" placeholder="Your full name" />
          <Field label="Email Address" placeholder="you@example.com" type="email" />
          <Field label="Phone (optional)" placeholder="(888) 329-7069" type="tel" />

          <Select label="Partnership Interest (optional)" options={['Select your interest', 'Court', 'Traffic Attorney', 'Insurance', 'Business']} />
          <Select label="Organizational Type" options={['Select your organization', 'Court', 'Law Firm', 'Insurance', 'Business']} />
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-brand-navy mb-1">Message</label>
            <textarea
              rows={1}
              placeholder="Write..."
              className="w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          <div className="md:col-span-3 flex justify-center mt-2">
            <button type="submit" className="btn-navy">
              {submitted ? 'Submitted ✓' : 'Submit Partnership Request'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

function Field({ label, ...rest }) {
  return (
    <div>
      <label className="block text-sm font-medium text-brand-navy mb-1">{label}</label>
      <input
        {...rest}
        className="w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
      />
    </div>
  )
}
function Select({ label, options }) {
  return (
    <div>
      <label className="block text-sm font-medium text-brand-navy mb-1">{label}</label>
      <div className="relative">
        <select className="w-full appearance-none rounded-md border border-brand-line px-3 py-2 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white">
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <ChevronDown className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-brand-navy/60 pointer-events-none" />
      </div>
    </div>
  )
}
