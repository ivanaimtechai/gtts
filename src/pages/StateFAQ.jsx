import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, MapPin, FileText, ChevronRight } from 'lucide-react'
import LanguageSelector from '../components/LanguageSelector.jsx'
import CTABand from '../components/CTABand.jsx'

const allFaqs = [
  { q: 'Who is eligible for traffic school in Alabama?', a: "Eligibility depends on the court, but typically you must have a valid Alabama driver's license and a qualifying violation." },
  { q: 'How do I know if traffic school is an option for my ticket in Alabama?', a: 'Check your ticket or contact the court that issued it to confirm if traffic school is an available option for your case.' },
  { q: 'Will traffic school dismiss my ticket in Alabama?', a: 'It depends on your court and the violation. Some Alabama courts may dismiss the ticket, while others may only help prevent points.' },
  { q: 'How does traffic school affect points on my Alabama driving record?', a: 'Completing traffic school in Alabama may prevent points from being added to your driving record, depending on your case.' },
  { q: 'Will traffic school affect my insurance rates in Alabama?', a: 'In most cases, completing traffic school can help prevent increases in your insurance rates. Always check with your insurance carrier.' },
  { q: 'How long do I have to complete traffic school in Alabama?', a: 'Deadlines are set by the court that issued your ticket. Be sure to complete the course before your due date.' },
  { q: 'How long is the Alabama traffic school course?', a: 'The Alabama traffic school course is 4 hours long, as required by the Alabama Law Enforcement Agency (ALEA).' },
  { q: 'Is the Alabama traffic school course online?', a: 'Yes! Our Alabama traffic school course is 100% online, state-approved, and available 24/7 from any device.' },
  { q: 'Do I have to pay before I start the Alabama traffic school course?', a: 'You can start the course for free. You must pay before the final exam to complete the course and receive your certificate.' },
  { q: 'Is there a final exam for Alabama traffic school?', a: 'Yes, there is a final exam. You must pass it with a score of 80% or higher to complete the course.' },
  { q: 'How many questions are on the final exam?', a: 'The final exam consists of 20 multiple-choice questions.' },
  { q: 'What happens if I fail the final exam?', a: "If you don't pass, you can retake the exam. Additional attempts may be available if needed." },
  { q: 'How will my completion be reported in Alabama?', a: 'We electronically report your completion to the Alabama Law Enforcement Agency (ALEA) within the required timeframe.' },
  { q: 'How long does it take to get my certificate in Alabama?', a: 'Most students receive their certificate immediately after passing the course. It is also emailed to you for your records.' },
  { q: 'What happens if I miss my deadline in Alabama?', a: 'Missing your deadline may result in additional penalties, fines, or loss of eligibility. Contact your court as soon as possible.' },
  { q: 'Can I take the course on my phone?', a: 'Yes — the Alabama course works on phones, tablets, and computers.' },
  { q: 'Is the course self-paced?', a: 'Yes. Start, stop, and resume anytime — no timers, no waiting periods.' },
]

export default function StateFAQ() {
  const [showAll, setShowAll] = useState(false)
  const [query, setQuery] = useState('')

  const filtered = allFaqs.filter(
    (f) =>
      f.q.toLowerCase().includes(query.toLowerCase()) ||
      f.a.toLowerCase().includes(query.toLowerCase())
  )
  const visible = showAll ? filtered : filtered.slice(0, 15)

  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-brand-softblue2 via-brand-softblue to-white">
        <DotPattern />
        <div className="container-x py-10 md:py-12 relative z-10">
          <div className="flex justify-end">
            <LanguageSelector />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">
            Alabama Traffic School FAQ
          </h1>
          <p className="mt-3 text-brand-navy/85 max-w-2xl">
            Find answers to the most common questions about Alabama traffic school, eligibility, ticket, insurance, and more.
          </p>
          <form
            className="mt-6 max-w-xl flex items-stretch rounded-md border border-brand-line bg-white overflow-hidden"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex items-center px-3 text-brand-navy/60">
              <Search className="h-4 w-4" />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a question"
              className="flex-1 px-2 py-2 text-sm focus:outline-none"
            />
            <button type="submit" className="bg-brand-navy text-white px-5 text-sm font-semibold hover:bg-brand-navy2">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* INFO CARD */}
      <section className="py-8">
        <div className="container-x">
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
              <MapPin className="h-4 w-4" /> Go to Alabama Traffic School <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="text-center text-xs text-brand-navy/70 mt-2">
            See Alabama course details, pricing, and requirements.
          </p>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="pb-10">
        <div className="container-x">
          <h2 className="text-lg font-bold text-brand-navy mb-3">Alabama Traffic School Questions</h2>
          <ol className="divide-y divide-brand-line border-t border-brand-line">
            {visible.map((f) => (
              <li key={f.q} className="py-4">
                <div className="font-semibold text-brand-blue">{f.q}</div>
                <p className="mt-1 text-sm text-brand-navy/85 leading-relaxed">{f.a}</p>
              </li>
            ))}
          </ol>

          {filtered.length > 15 && (
            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="btn-navy text-sm"
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </div>
      </section>

      <CTABand
        variant="split"
        title="Ready to get started?"
        subtitle="Start your Alabama traffic school course today and complete it at your own pace."
        buttonLabel="Go to Alabama Traffic School"
        buttonStyle="white"
        buttonIcon={<MapPin className="h-4 w-4" />}
        buttonTo="/how-it-works"
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
