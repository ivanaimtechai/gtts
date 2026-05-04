import { Link } from 'react-router-dom'
import { Search, MapPin, FileText, ChevronRight } from 'lucide-react'
import LanguageSelector from '../components/LanguageSelector.jsx'
import CTABand from '../components/CTABand.jsx'

const faqs = [
  { q: 'What is traffic school?', a: 'Traffic school is a course designed to improve driving knowledge and, in many cases, reduce the impact of a traffic ticket.' },
  { q: 'Is traffic school the same as defensive driving?', a: 'Yes. Depending on your state, it may be called defensive driving, driver improvement, basic driver improvement (BDI), or driver safety program (DSP). All refer to similar courses.' },
  { q: 'Is online traffic school accepted?', a: 'Yes. As long as the course is approved by your state or accepted by your court, it is valid.' },
  { q: 'Am I eligible to take traffic school?', a: "Eligibility depends on your state and court. Typically, you must have a valid driver's license and a minor violation." },
  { q: 'Can I take traffic school for any ticket?', a: 'No. Serious violations (like DUI or reckless driving) are usually not eligible.' },
  { q: 'Do I need court approval before taking traffic school?', a: 'Yes. If your state does not have a state-approved program, you should confirm with your court that the course will be accepted before enrolling.' },
  { q: 'Will traffic school dismiss my ticket?', a: 'It depends on your state and court. Some states allow dismissal, while others only prevent points from affecting your record. Rules vary by location.' },
  { q: 'Will I still have to pay my ticket?', a: 'Yes. Traffic school does not remove the fine.' },
  { q: 'Does traffic school remove points from my record?', a: 'Not exactly. In most cases, it prevents points from being visible to insurance companies.' },
  { q: 'Will my insurance accept traffic school?', a: 'In most cases, yes — but you should confirm with your insurance carrier to be sure the course qualifies.' },
  { q: 'Can traffic school lower my insurance?', a: 'Some insurance providers offer discounts for completing a defensive driving or traffic school course, but approval varies by carrier.' },
  { q: 'How long is the course?', a: 'Most courses take between 4–8 hours, depending on state requirements.' },
  { q: 'Is the course self-paced?', a: 'Yes. You can start, stop, and resume anytime.' },
  { q: 'Can I take it on my phone?', a: 'Yes. Courses are mobile-friendly and work across devices.' },
  { q: 'Do I have to pay before taking the course?', a: 'You can start your course for free. However, you must pay before taking the final exam and completing the course.' },
  { q: 'Is there a final exam?', a: 'Yes, in most states. It is designed to be straightforward and easy to pass.' },
  { q: 'What happens after I complete the course?', a: 'Your completion is processed and your certificate is delivered based on your state or court requirements.' },
  { q: 'How long do I have to complete traffic school?', a: 'Your deadline is set by the court or state.' },
  { q: 'What happens if I miss my deadline?', a: 'You may lose eligibility or face additional penalties.' },
  { q: 'How do I know the exact rules for my state?', a: 'Traffic school rules vary by state, court, and insurance provider. Check the state page for where your ticket was issued to see the exact rules that apply to you.' },
]

export default function FAQ() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-brand-softblue2 via-brand-softblue to-white">
        <DotPattern />
        <div className="container-x py-10 md:py-12 relative z-10">
          <div className="flex justify-end">
            <LanguageSelector />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">Traffic School FAQ</h1>
          <p className="mt-3 text-brand-navy/85 max-w-2xl">
            Find answers to the most common questions about traffic school, eligibility, tickets, insurance, and more.
          </p>
          <form className="mt-6 max-w-xl flex items-stretch rounded-md border border-brand-line bg-white overflow-hidden">
            <div className="flex items-center px-3 text-brand-navy/60">
              <Search className="h-4 w-4" />
            </div>
            <input
              placeholder="Search for a question"
              className="flex-1 px-2 py-2 text-sm focus:outline-none"
            />
            <button type="submit" className="bg-brand-navy text-white px-5 text-sm font-semibold hover:bg-brand-navy2">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* TWO INFO CARDS */}
      <section className="py-8">
        <div className="container-x grid md:grid-cols-2 gap-5">
          <div className="bg-brand-softorange rounded-2xl p-5 md:p-6 grid grid-cols-[auto,1fr,auto] gap-4 items-center">
            <span className="h-12 w-12 rounded-full bg-white text-brand-orange flex items-center justify-center">
              <MapPin className="h-6 w-6" />
            </span>
            <div>
              <div className="font-semibold text-brand-navy">Looking for questions specific to your state?</div>
              <div className="text-xs text-brand-navy/75 mt-1">
                Check out your state FAQ page for rules, eligibility, and requirements.
              </div>
            </div>
            <Link to="/faq/alabama" className="btn-primary text-sm whitespace-nowrap">
              <MapPin className="h-4 w-4" /> Find Your State FAQ <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="bg-brand-softblue rounded-2xl p-5 md:p-6 grid grid-cols-[auto,1fr,auto] gap-4 items-center">
            <span className="h-12 w-12 rounded-full bg-white text-brand-blue flex items-center justify-center">
              <FileText className="h-6 w-6" />
            </span>
            <div>
              <div className="font-semibold text-brand-navy">Are you ready to sign up for the course?</div>
              <div className="text-xs text-brand-navy/75 mt-1">
                Select your state to see your course options and get started today.
              </div>
            </div>
            <Link to="/how-it-works" className="btn-navy text-sm whitespace-nowrap">
              <MapPin className="h-4 w-4" /> Select Your State to Get Started <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="pb-12">
        <div className="container-x">
          <ol className="divide-y divide-brand-line border-t border-brand-line">
            {faqs.map((f, i) => (
              <li key={f.q} className="py-4 grid grid-cols-[36px,1fr] gap-3">
                <span className="h-7 w-7 rounded-md bg-brand-softblue text-brand-blue text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <div className="font-semibold text-brand-blue">{f.q}</div>
                  <p className="mt-1 text-sm text-brand-navy/85 leading-relaxed">{f.a}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTABand
        variant="split"
        title="Ready to get started?"
        subtitle="Start your Alabama traffic school course today and complete it at your own pace."
        buttonLabel="Go to Alabama Traffic School"
        buttonStyle="white"
        buttonIcon={<MapPin className="h-4 w-4" />}
        buttonTo="/faq/alabama"
      />
    </>
  )
}

function DotPattern() {
  return (
    <svg className="absolute right-6 top-6 opacity-60" width="200" height="120" viewBox="0 0 200 120" aria-hidden="true">
      {[...Array(8)].map((_, r) =>
        [...Array(16)].map((_, c) => (
          <circle key={`${r}-${c}`} cx={5 + c * 12} cy={5 + r * 12} r="1.4" fill="#1E5A91" opacity="0.35" />
        ))
      )}
    </svg>
  )
}
