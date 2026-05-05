import {
  Monitor,
  Clock,
  MonitorSmartphone,
  Gauge,
  ShieldCheck,
} from 'lucide-react'
import LanguageSelector from '../components/LanguageSelector.jsx'
import CTABand from '../components/CTABand.jsx'

export default function HowItWorks() {
  return (
    <>
      <section className="relative bg-white">
        <div className="container-x py-10 md:py-14 grid lg:grid-cols-[1.2fr,1fr] gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">
              How It Works
            </h1>
            <span className="block mt-3 mb-6 h-[3px] w-14 bg-brand-blue rounded-full" />
            <p className="text-brand-navy/80 max-w-xl leading-relaxed">
              Completing your traffic school is simple and 100% online. Here's exactly what to expect from start to finish.
            </p>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col items-end">
              <LanguageSelector />
              <div className="mt-6">
                <DeviceIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-2">
        <div className="container-x max-w-5xl">
          <div>
            {steps.map((s, i) => (
              <div key={s.n}>
                {i > 0 && <hr className="border-t border-brand-line/70 my-0" />}
                <div className="relative grid grid-cols-[64px,16px,56px,1fr] md:grid-cols-[80px,20px,64px,1fr] gap-3 md:gap-6 items-start py-8 md:py-10">
                  {i < steps.length - 1 && (
                    <span className="absolute left-[31px] md:left-[39px] top-[80px] md:top-[100px] bottom-0 w-px border-l border-dashed border-brand-line" />
                  )}
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-brand-navy text-white flex items-center justify-center text-xl md:text-2xl font-bold">
                    {s.n}
                  </div>
                  <div className="flex justify-center items-start pt-7 md:pt-9">
                    <span className="h-2 w-2 rounded-full bg-brand-navy" />
                  </div>
                  <div className="pt-1 md:pt-2">
                    <span className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-brand-softblue text-brand-blue flex items-center justify-center">
                      <s.icon className="h-7 w-7 md:h-8 md:w-8" />
                    </span>
                  </div>
                  <div className="pt-2 md:pt-3">
                    <h2 className="text-xl md:text-2xl font-bold text-brand-navy">{s.title}</h2>
                    {s.body.map((p, j) => (
                      <p key={j} className="mt-3 text-sm md:text-[15px] text-brand-navy/80 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 text-center">
            {[
              { icon: Monitor, t: '100% Online — No Classroom Required' },
              { icon: Clock, t: 'Start and Stop Anytime' },
              { icon: MonitorSmartphone, t: 'Works on Phone, Tablet, or Computer' },
              { icon: Gauge, t: 'Fast Certificate Processing' },
              { icon: ShieldCheck, t: 'Fully State-Approved and Court Accepted' },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="flex flex-col items-center">
                <Icon className="h-10 w-10 text-brand-navy" strokeWidth={1.6} />
                <div className="mt-3 text-sm font-medium text-brand-navy max-w-[160px]">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="You can start your course anytime"
        subtitle="and complete it at your own pace."
        buttonLabel="Start Your Course Now"
        buttonStyle="white"
        buttonTo="/faq"
      />
    </>
  )
}

const steps = [
  {
    n: '01',
    icon: PersonStepIcon,
    title: 'Enrol Online',
    body: [
      'Sign up in minutes and get instant access to your state-approved traffic school course.',
      "You can pay now or start the course first to make sure it's right for you.",
    ],
  },
  {
    n: '02',
    icon: DocumentStepIcon,
    title: 'Complete Your Course',
    body: [
      "Your course is divided into a set number of chapters based on your state's requirements. You'll complete short quizzes and a final exam along the way — all designed to be fast and easy.",
      'Most students finish quickly and pass on their first attempt.',
    ],
  },
  {
    n: '03',
    icon: CertificateStepIcon,
    title: 'We Handle Your Certificate the Right Way',
    body: [
      'Once you finish, we process your certificate of completion based on your state and court requirements.',
      'We either send it directly to the court or provide it to you with simple instructions to submit.',
    ],
  },
]

function PersonStepIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="16" cy="11" r="4.5" />
      <path d="M7 26 C 8 19, 24 19, 25 26" />
    </svg>
  )
}

function DocumentStepIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 8 H 17 L 21 12 V 25 H 7 Z" />
      <path d="M17 8 V 12 H 21" />
      <path d="M11 6 H 21 L 25 10 V 23 H 11 Z" fill="#fff" />
      <path d="M11 6 H 21 L 25 10 V 23 H 11 Z" />
      <path d="M21 6 V 10 H 25" />
      <path d="M14 14 H 22" />
      <path d="M14 17 H 22" />
      <path d="M14 20 H 19" />
    </svg>
  )
}

function CertificateStepIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 4 H 19 L 23 8 V 22 H 7 Z" />
      <path d="M19 4 V 8 H 23" />
      <path d="M10 12 H 19" />
      <path d="M10 15 H 19" />
      <circle cx="21" cy="24" r="5" fill="#fff" />
      <circle cx="21" cy="24" r="5" />
      <path d="M21 21 L 21.8 22.7 L 23.6 22.9 L 22.3 24.1 L 22.6 25.8 L 21 25 L 19.4 25.8 L 19.7 24.1 L 18.4 22.9 L 20.2 22.7 Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

function DeviceIllustration() {
  return (
    <svg width="320" height="200" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="20" y="40" width="200" height="120" rx="8" fill="#fff" stroke="#004985" strokeWidth="2.5" />
      <rect x="34" y="54" width="172" height="92" rx="3" fill="#EAF2F9" />
      <circle cx="120" cy="100" r="22" fill="#fff" stroke="#1E5A91" strokeWidth="2.5" />
      <polyline points="110,100 118,108 132,94" fill="none" stroke="#1E5A91" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="10" y="160" width="220" height="8" rx="3" fill="#004985" />
      <rect x="220" y="80" width="56" height="100" rx="8" fill="#fff" stroke="#004985" strokeWidth="2.5" />
      <rect x="226" y="90" width="44" height="74" rx="3" fill="#EAF2F9" />
      <circle cx="248" cy="127" r="11" fill="#fff" stroke="#1E5A91" strokeWidth="2" />
      <polyline points="243,127 247,131 254,123" fill="none" stroke="#1E5A91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="296" cy="180" rx="18" ry="4" fill="#004985" opacity="0.1" />
      <path d="M296 170 q-8 -20 -2 -38 q6 18 2 38z" fill="#7CB46A" />
      <path d="M296 170 q10 -16 6 -34 q-10 14 -6 34z" fill="#9CCB8E" />
      <path d="M286 178 h22 l-3 -10 h-16z" fill="#7AA0C4" />
    </svg>
  )
}
