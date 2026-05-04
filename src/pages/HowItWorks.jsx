import {
  UserCircle2,
  ClipboardCheck,
  BadgeCheck,
  Monitor,
  Clock,
  Smartphone,
  Gauge,
  ShieldCheck,
} from 'lucide-react'
import LanguageSelector from '../components/LanguageSelector.jsx'
import CTABand from '../components/CTABand.jsx'

export default function HowItWorks() {
  return (
    <>
      {/* HERO */}
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

      {/* STEPS */}
      <section className="py-6 md:py-10">
        <div className="container-x max-w-4xl">
          <ol className="relative">
            {steps.map((s, i) => (
              <li key={s.n} className="grid grid-cols-[64px,1fr] md:grid-cols-[80px,1fr] gap-4 md:gap-8 pb-10 last:pb-0 relative">
                {/* connector */}
                {i < steps.length - 1 && (
                  <span className="absolute left-[31px] md:left-[39px] top-16 bottom-0 w-px border-l border-dashed border-brand-line" />
                )}
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-brand-navy text-white flex items-center justify-center text-xl md:text-2xl font-bold ring-4 ring-white shadow">
                    {s.n}
                  </div>
                </div>
                <div className="pt-2 grid sm:grid-cols-[64px,1fr] gap-4">
                  <span className="hidden sm:flex h-12 w-12 rounded-full bg-brand-softblue text-brand-blue items-center justify-center self-start">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-navy">{s.title}</h2>
                    {s.body.map((p, j) => (
                      <p key={j} className="mt-2 text-brand-navy/80 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FEATURES ROW */}
      <section className="py-10 md:py-14">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 text-center">
            {[
              { icon: Monitor, t: '100% Online — No Classroom Required' },
              { icon: Clock, t: 'Start and Stop Anytime' },
              { icon: Smartphone, t: 'Works on Phone, Tablet, or Computer' },
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
    icon: UserCircle2,
    title: 'Enrol Online',
    body: [
      'Sign up in minutes and get instant access to your state-approved traffic school course.',
      "You can pay now or start the course first to make sure it's right for you.",
    ],
  },
  {
    n: '02',
    icon: ClipboardCheck,
    title: 'Complete Your Course',
    body: [
      "Your course is divided into a set number of chapters based on your state's requirements. You'll complete short quizzes and a final exam along the way — all designed to be fast and easy.",
      'Most students finish quickly and pass on their first attempt.',
    ],
  },
  {
    n: '03',
    icon: BadgeCheck,
    title: 'We Handle Your Certificate the Right Way',
    body: [
      'Once you finish, we process your certificate of completion based on your state and court requirements.',
      'We either send it directly to the court or provide it to you with simple instructions to submit.',
    ],
  },
]

function DeviceIllustration() {
  return (
    <svg width="320" height="200" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* laptop */}
      <rect x="20" y="40" width="200" height="120" rx="8" fill="#fff" stroke="#0F2A47" strokeWidth="2.5" />
      <rect x="34" y="54" width="172" height="92" rx="3" fill="#EAF2F9" />
      <circle cx="120" cy="100" r="22" fill="#fff" stroke="#1E5A91" strokeWidth="2.5" />
      <polyline points="110,100 118,108 132,94" fill="none" stroke="#1E5A91" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="10" y="160" width="220" height="8" rx="3" fill="#0F2A47" />
      {/* phone */}
      <rect x="220" y="80" width="56" height="100" rx="8" fill="#fff" stroke="#0F2A47" strokeWidth="2.5" />
      <rect x="226" y="90" width="44" height="74" rx="3" fill="#EAF2F9" />
      <circle cx="248" cy="127" r="11" fill="#fff" stroke="#1E5A91" strokeWidth="2" />
      <polyline points="243,127 247,131 254,123" fill="none" stroke="#1E5A91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* plant */}
      <ellipse cx="296" cy="180" rx="18" ry="4" fill="#0F2A47" opacity="0.1" />
      <path d="M296 170 q-8 -20 -2 -38 q6 18 2 38z" fill="#7CB46A" />
      <path d="M296 170 q10 -16 6 -34 q-10 14 -6 34z" fill="#9CCB8E" />
      <path d="M286 178 h22 l-3 -10 h-16z" fill="#7AA0C4" />
    </svg>
  )
}
