import { useState } from 'react'
import { Mail, Phone, MapPin, User, ChevronDown, AtSign, Pencil, ShieldAlert, FileText } from 'lucide-react'
import LanguageSelector from '../components/LanguageSelector.jsx'
import CTABand from '../components/CTABand.jsx'

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-softblue2 via-brand-softblue to-white">
        <DotPattern />
        <WaveCorner />
        <div className="container-x py-10 md:py-14 grid lg:grid-cols-[1.4fr,1fr] gap-6 items-end relative z-10">
          <div>
            <p className="uppercase text-xs tracking-[0.18em] text-brand-blue font-semibold border-b border-brand-blue/40 inline-block pb-1">
              We're here to help
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy mt-4">
              Contact Us
            </h1>
            <p className="mt-4 text-brand-navy/85 max-w-xl">
              Have a question or need assistance?
              <br />
              Reach out to us by phone, email, or by filling out the form below.
            </p>
          </div>
          <div className="flex justify-end">
            <LanguageSelector />
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-x grid lg:grid-cols-[1.3fr,1fr] gap-6">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <CTABand
        variant="split"
        title="Ready to get started?"
        subtitle="Select your state to get started and complete your traffic school today."
        buttonLabel="Choose Your State"
        buttonStyle="white"
        buttonIcon={<MapPin className="h-4 w-4" />}
        buttonTo="/faq"
      />
    </>
  )
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className="card">
      <div className="flex items-center gap-3">
        <span className="h-10 w-10 rounded-full bg-brand-navy text-white flex items-center justify-center">
          <Mail className="h-5 w-5" />
        </span>
        <h2 className="text-lg font-bold text-brand-navy">Send Us a Message</h2>
      </div>

      <form
        className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={(e) => {
          e.preventDefault()
          setSubmitted(true)
        }}
      >
        <Field label="Full Name" icon={User} placeholder="Your full name" />
        <Field label="Email Address" icon={AtSign} placeholder="you@example.com" type="email" />
        <Field label="Phone (Optional)" icon={Phone} placeholder="(888) 329-7069" type="tel" />
        <Select label="Topic" icon={FileText} options={['Select a topic', 'Course Question', 'Billing', 'Certificate', 'Partner Inquiry', 'Other']} />

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-brand-navy mb-1">Message</label>
          <div className="relative">
            <Pencil className="h-4 w-4 absolute left-3 top-3 text-brand-navy/50" />
            <textarea
              rows={4}
              placeholder="How can we help you?"
              className="w-full rounded-md border border-brand-line px-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
          <p className="text-xs text-brand-navy/60 mt-2 inline-flex items-center gap-1.5">
            <ShieldAlert className="h-3.5 w-3.5" />
            Please do not include sensitive information such as credit card numbers.
          </p>
        </div>

        <div className="md:col-span-2">
          <button type="submit" className="btn-navy">
            {submitted ? 'Message Sent ✓' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  )
}

function ContactInfo() {
  return (
    <div className="card">
      <h2 className="text-lg font-bold text-brand-navy">Contact Information</h2>
      <p className="text-xs text-brand-navy/60 mt-1">Other ways to reach us</p>

      <ul className="mt-5 divide-y divide-brand-line">
        <li className="flex gap-4 py-4 first:pt-0">
          <span className="h-11 w-11 shrink-0 rounded-full bg-brand-softblue text-brand-blue flex items-center justify-center">
            <Phone className="h-5 w-5" />
          </span>
          <div>
            <div className="font-bold text-brand-navy">Phone</div>
            <a href="tel:1-888-329-7069" className="text-sm text-brand-navy/85 block mt-0.5">1-888-329-7069</a>
            <div className="text-xs text-brand-navy/60 mt-1">Mon–Fri: 5AM–10PM PT</div>
          </div>
        </li>
        <li className="flex gap-4 py-4">
          <span className="h-11 w-11 shrink-0 rounded-full bg-brand-softblue text-brand-blue flex items-center justify-center">
            <Mail className="h-5 w-5" />
          </span>
          <div>
            <div className="font-bold text-brand-navy">Email</div>
            <a href="mailto:info@gototrafficschool.com" className="text-sm text-brand-navy/85 block mt-0.5">info@gototrafficschool.com</a>
            <div className="text-xs text-brand-navy/60 mt-1">We typically respond within 24 hours</div>
          </div>
        </li>
        <li className="flex gap-4 py-4 last:pb-0">
          <span className="h-11 w-11 shrink-0 rounded-full bg-brand-softblue text-brand-blue flex items-center justify-center">
            <MapPin className="h-5 w-5" />
          </span>
          <div>
            <div className="font-bold text-brand-navy">Office Address</div>
            <div className="text-sm text-brand-navy/85 mt-0.5">Beverly Hills, CA</div>
          </div>
        </li>
      </ul>
    </div>
  )
}

function Field({ label, icon: Icon, ...rest }) {
  return (
    <div>
      <label className="block text-sm font-medium text-brand-navy mb-1">{label}</label>
      <div className="relative">
        {Icon && <Icon className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-brand-navy/50" />}
        <input
          {...rest}
          className={`w-full rounded-md border border-brand-line ${Icon ? 'pl-9' : 'pl-3'} pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue`}
        />
      </div>
    </div>
  )
}

function Select({ label, icon: Icon, options }) {
  return (
    <div>
      <label className="block text-sm font-medium text-brand-navy mb-1">{label}</label>
      <div className="relative">
        {Icon && <Icon className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-brand-navy/50" />}
        <select className={`w-full appearance-none rounded-md border border-brand-line ${Icon ? 'pl-9' : 'pl-3'} pr-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white`}>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <ChevronDown className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-brand-navy/60 pointer-events-none" />
      </div>
    </div>
  )
}

function DotPattern() {
  return (
    <svg className="absolute right-6 top-6 opacity-60 pointer-events-none" width="200" height="120" viewBox="0 0 200 120" aria-hidden="true">
      {[...Array(8)].map((_, r) =>
        [...Array(16)].map((_, c) => (
          <circle key={`${r}-${c}`} cx={5 + c * 12} cy={5 + r * 12} r="1.4" fill="#1E5A91" opacity="0.35" />
        ))
      )}
    </svg>
  )
}

function WaveCorner() {
  return (
    <svg
      className="absolute -right-10 -bottom-10 w-[420px] h-[200px] opacity-70 pointer-events-none"
      viewBox="0 0 420 200"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 170 C 110 90, 250 220, 420 110 L 420 200 L 0 200 Z" fill="#CFE2F2" opacity="0.55" />
      <path d="M0 185 C 130 130, 270 200, 420 150 L 420 200 L 0 200 Z" fill="#BCD6EC" opacity="0.55" />
    </svg>
  )
}
