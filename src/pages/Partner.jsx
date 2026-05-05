import { useState, Fragment } from 'react'
import {
  Users,
  ShieldCheck,
  Tag,
  Award,
  Briefcase,
  Shield,
  Landmark,
  HandHeart,
  Users2,
  Link2,
  Settings,
  UserCircle2,
  Check,
  CheckCircle2,
  Gavel,
  Smartphone,
  MonitorSmartphone,
  ChevronDown,
} from 'lucide-react'
import LanguageSelector from '../components/LanguageSelector.jsx'

const states = [
  'Alaska', 'Arizona', 'California', 'Delaware', 'Florida', 'Idaho',
  'Indiana', 'Michigan', 'Minnesota', 'Missouri', 'New Jersey', 'New York',
  'North Dakota', 'Oregon', 'Tennessee', 'Virginia', 'Washington', 'Wisconsin',
]

const heroCards = [
  { icon: Users, big: '10 Millions+', sub: 'Drivers Served' },
  { icon: Shield, big: 'State & Court', sub: 'Accepted Programs' },
  { icon: Tag, big: 'White Label', sub: 'Available' },
  { icon: Award, big: 'Certificate', sub: 'Delivery Support' },
]

const opps = [
  {
    icon: Landmark,
    title: 'Courts',
    body: 'Reduce administrative burden and make traffic school easy for your constituents.',
    items: ['Offer online access', 'Fee collection (where directed)', 'Certificate delivery support', 'White label or direct link options'],
  },
  {
    icon: Briefcase,
    title: 'Traffic Attorneys',
    body: 'Give your clients a simple, reliable way to complete traffic school.',
    items: ['Custom referral links', 'Discount & coupon codes', 'White label solutions', 'Integration into your website'],
  },
  {
    icon: HandHeart,
    title: 'Insurance Companies',
    body: 'Support driver improvement and help reduce risk with our online programs.',
    items: ['Good-driver discounts', 'Point reduction programs', 'Driver safety initiatives', 'Flexible integration options'],
  },
  {
    icon: Users2,
    title: 'Businesses and Organizations',
    body: 'Offer traffic school as part of your services or platform.',
    items: ['Referral & link partnerships', 'Custom integrations', 'White label options', 'Certificate delivery available'],
  },
]

const partnershipSteps = [
  { n: '1', icon: Link2, t: 'Choose Your Partnership Model', d: 'Choose the option that works best for you: referral, direct link, white label, or custom integration.' },
  { n: '2', icon: Settings, t: 'We Configure Everything', d: 'We set up branding, reporting, certificate delivery, tracking, and everything you need.' },
  { n: '3', icon: UserCircle2, t: 'Your Users Start Online', d: 'Students enroll, complete the course, and receive their certificate — fully online.' },
]

const featureStrip = [
  { icon: Users, big: '10 Millions+', sub: 'Drivers Served' },
  { icon: ShieldCheck, big: 'State & Court', sub: 'Accepted Programs' },
  { icon: MonitorSmartphone, big: '100% Online', sub: 'Convenient & Easy' },
  { icon: Smartphone, big: 'Mobile Friendly', sub: 'IOS & Android' },
]

const whiteLabelItems = [
  'Fully branded partner experience',
  'Backend course & compliance management',
  'Reporting & tracking',
  'Certificate delivery options',
  'No need to build or maintain technology',
]

export default function Partner() {
  return (
    <>
      <PartnerHero />
      <FeatureStrip />
      <StateApproved />
      <PartnershipOpportunities />
      <HowPartnershipsWork />
      <WhiteLabelAndReferral />
      <PartnerForm />
    </>
  )
}

function PartnerHero() {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden">
      <div className="container-x py-12 md:py-16 grid lg:grid-cols-[1.05fr,1fr] gap-10 items-center relative z-10">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Partner With <br className="hidden md:block" />
            GoToTrafficSchool.com
          </h1>
          <p className="mt-5 text-white/85 max-w-xl">
            Online traffic school solutions for courts, attorneys, insurers, and businesses.
          </p>
          <p className="mt-3 text-white/75 text-sm max-w-xl leading-relaxed">
            GoToTrafficSchool.com helps partners offer compliant, convenient online traffic school programs with flexible referral, white-label, court, and business integration options.
          </p>
          <div className="mt-7">
            <a href="#partner-form" className="btn-primary shadow-md">Become a Partner</a>
          </div>
        </div>
        <div>
          <div className="flex justify-end mb-4">
            <LanguageSelector className="text-white" />
          </div>
          <div className="relative">
            <PartnerHeroImage />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2.5 w-[230px] translate-x-2">
              {heroCards.map((c) => <HeroCard key={c.sub} {...c} />)}
            </div>
            <div className="md:hidden mt-4 grid grid-cols-1 gap-2.5">
              {heroCards.map((c) => <HeroCard key={c.sub} {...c} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureStrip() {
  return (
    <section className="border-b border-brand-line">
      <div className="container-x py-8 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-brand-line">
        {featureStrip.map(({ icon: Icon, big, sub }) => (
          <div key={sub} className="flex items-center gap-3 px-4 py-3 md:py-0 first:pl-0 last:pr-0">
            <Icon className="h-9 w-9 text-brand-blue shrink-0" strokeWidth={1.6} />
            <div>
              <div className="text-base font-bold text-brand-blue">{big}</div>
              <div className="text-xs text-brand-navy/75">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function StateApproved() {
  return (
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {states.map((s) => (
            <span key={s} className="text-center text-sm text-brand-blue bg-white rounded-full px-3 py-1.5 border border-brand-blue/40 whitespace-nowrap">
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
          <a href="#partner-form" className="btn-navy text-sm whitespace-nowrap">Talk to Our Partnership Team</a>
        </div>
      </div>
    </section>
  )
}

function PartnershipOpportunities() {
  return (
    <section className="py-10">
      <div className="container-x">
        <h2 className="h-section">Partnership Opportunities</h2>
        <span className="h-section-underline block" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {opps.map((o) => (
            <div key={o.title} className="card">
              <span className="h-11 w-11 rounded-md bg-brand-softblue text-brand-blue flex items-center justify-center">
                <o.icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="mt-4 font-bold text-brand-navy">{o.title}</h3>
              <p className="text-xs text-brand-navy/75 mt-1 leading-relaxed">{o.body}</p>
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
  )
}

function HowPartnershipsWork() {
  return (
    <section className="py-10">
      <div className="container-x">
        <h2 className="h-section">How Our Partnerships Work</h2>
        <span className="h-section-underline block" />
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2">
          {partnershipSteps.map((step, idx, arr) => (
            <Fragment key={step.n}>
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <span className="h-12 w-12 md:h-14 md:w-14 shrink-0 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg md:text-xl">
                  {step.n}
                </span>
                <div className="card flex-1 flex gap-3 min-w-0">
                  <span className="h-11 w-11 shrink-0 rounded-full bg-brand-softblue text-brand-blue flex items-center justify-center">
                    <step.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-bold text-brand-navy text-sm leading-snug">{step.t}</h3>
                    <p className="mt-2 text-xs text-brand-navy/75 leading-relaxed">{step.d}</p>
                  </div>
                </div>
              </div>
              {idx < arr.length - 1 && (
                <div className="hidden md:flex items-center text-brand-blue/70 shrink-0 px-1">
                  <DashedArrow />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhiteLabelAndReferral() {
  return (
    <section className="py-10">
      <div className="container-x grid lg:grid-cols-[1.4fr,1fr] gap-6">
        <div className="bg-brand-softblue rounded-2xl p-6 md:p-8">
          <div className="grid md:grid-cols-[1.1fr,1fr] gap-6 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-navy leading-tight">
                White Label Traffic <br />School Programs
              </h3>
              <span className="block mt-3 mb-4 h-[3px] w-12 bg-brand-blue rounded-full" />
              <p className="text-sm text-brand-navy/80 leading-relaxed">
                Offer traffic school under your own brand while CyberActive manages everything.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {whiteLabelItems.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-brand-navy/85">
                    <Check className="h-4 w-4 mt-0.5 text-brand-navy shrink-0" strokeWidth={3} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#partner-form" className="btn-primary">Learn More About White Label</a>
              </div>
            </div>
            <WhiteLabelImage />
          </div>
        </div>
        <div className="bg-brand-softblue rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-extrabold text-brand-navy leading-tight">
            Simple Referral <br />Program
          </h3>
          <span className="block mt-3 mb-4 h-[3px] w-12 bg-brand-blue rounded-full" />
          <p className="text-sm text-brand-navy/80 leading-relaxed">
            For individuals and organizations, we offer easy referral links and codes.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-2 text-brand-navy/85">
              <Check className="h-4 w-4 mt-0.5 text-brand-navy shrink-0" strokeWidth={3} />
              <span>Earn $5 for each successful referral</span>
            </li>
            <li className="flex items-start gap-2 text-brand-navy/85">
              <Check className="h-4 w-4 mt-0.5 text-brand-navy shrink-0" strokeWidth={3} />
              <span>Your referral receives a $2 discount</span>
            </li>
          </ul>
          <p className="mt-3 ml-6 text-sm text-brand-navy/80 leading-relaxed">
            It's an easy way to share a trusted program while offering value to others.
          </p>
          <div className="mt-6">
            <a href="#partner-form" className="btn-navy">Request a Referral Code</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function PartnerForm() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <section id="partner-form" className="bg-brand-softblue py-14">
      <div className="container-x max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-brand-blue">
          Ready to Partner With GoToTrafficSchool.com?
        </h2>
        <span className="block mx-auto mt-3 mb-4 h-[3px] w-12 bg-brand-blue rounded-full" />
        <p className="text-center text-brand-navy/80 mt-2 mb-10">
          Fill out the form below and one of our partnership specialists will reach out to discuss the best solution for your needs.
        </p>
        <form
          className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5"
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
        >
          <Field label="Full Name" placeholder="Your full name" />
          <Field label="Email Address" placeholder="you@example.com" type="email" />
          <Field label="Phone" optional placeholder="(888) 329-7069" type="tel" />
          <Select label="Partnership Interest" optional options={['Select your interest', 'Court', 'Traffic Attorney', 'Insurance', 'Business']} />
          <Select label="Organizational Type" options={['Select your organization', 'Court', 'Law Firm', 'Insurance', 'Business']} />
          <div>
            <FieldLabel label="Message" />
            <textarea
              rows={1}
              placeholder="Write..."
              className="w-full rounded-md border border-brand-line bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
          <div className="md:col-span-3 flex justify-center mt-4">
            <button type="submit" className="btn-navy">
              {submitted ? 'Submitted ✓' : 'Submit Partnership Request'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

function HeroCard({ icon: Icon, big, sub }) {
  return (
    <div className="bg-white text-brand-navy rounded-md px-3 py-2.5 flex items-center gap-3 shadow-md">
      <span className="h-9 w-9 shrink-0 rounded-md bg-brand-softblue text-brand-blue flex items-center justify-center">
        <Icon className="h-4 w-4" />
      </span>
      <div className="leading-tight">
        <div className="text-[13px] font-bold">{big}</div>
        <div className="text-[11px] text-brand-navy/70">{sub}</div>
      </div>
    </div>
  )
}

function PartnerHeroImage() {
  return (
    <div className="relative shadow-lg">
      <img src="/partner.png" alt="GoToTrafficSchool partners" className="block w-full h-auto" draggable={false} />
    </div>
  )
}

function WhiteLabelImage() {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      <img
        src="/Gemini_Generated_Image_g7vci4g7vci4g7vc%201.png"
        alt="White label dashboard preview"
        className="block w-full h-auto"
        onError={(e) => { e.currentTarget.style.display = 'none' }}
        draggable={false}
      />
    </div>
  )
}

function DashedArrow() {
  return (
    <svg width="56" height="14" viewBox="0 0 56 14" fill="none" aria-hidden="true">
      <path d="M 2 7 H 46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />
      <path d="M 44 2 L 52 7 L 44 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function FieldLabel({ label, optional }) {
  return (
    <label className="block text-sm font-semibold text-brand-navy mb-1">
      {label}
      {optional && <span className="ml-1 font-normal text-brand-navy/55">(optional)</span>}
    </label>
  )
}

function Field({ label, optional, ...rest }) {
  return (
    <div>
      <FieldLabel label={label} optional={optional} />
      <input {...rest} className="w-full rounded-md border border-brand-line bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" />
    </div>
  )
}

function Select({ label, optional, options }) {
  return (
    <div>
      <FieldLabel label={label} optional={optional} />
      <div className="relative">
        <select className="w-full appearance-none rounded-md border border-brand-line bg-white px-3 py-2.5 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue">
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <ChevronDown className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-brand-navy/60 pointer-events-none" />
      </div>
    </div>
  )
}
