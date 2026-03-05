const whys = [
  {
    q: 'Why do many communities struggle to use digital technologies effectively?',
    a: 'Because digital skills and technology adoption remain limited in many communities.',
  },
  {
    q: 'Why are digital skills and technology adoption limited?',
    a: 'Because there are insufficient training opportunities and digital literacy programs.',
  },
  {
    q: 'Why are there limited training programs?',
    a: 'Because most digital initiatives and investments are concentrated in major cities.',
  },
  {
    q: 'Why are initiatives focused mainly in cities?',
    a: 'Because cities typically have stronger infrastructure, higher demand, and more accessible resources.',
  },
  {
    q: 'Why are sustainable digital models not developed for local communities?',
    a: 'Because there is a lack of community-centered digital sustainability frameworks that connect technology, capacity building, and long-term development.',
  },
]

export default function RootCause() {
  return (
    <section id="root-cause" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Five Whys Analysis</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Root Cause Analysis</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A systematic drill-down to uncover why Jordanian communities face digital sustainability challenges.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-5 top-8 bottom-8 w-px bg-gradient-to-b from-emerald-500/50 via-teal-500/30 to-transparent hidden sm:block" />

          <div className="space-y-4">
            {whys.map((w, i) => (
              <div key={i} className="flex gap-6 group">
                {/* Number badge */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center font-bold text-white text-sm z-10 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <div className="flex-1 pb-4">
                  <div className="p-5 rounded-2xl bg-[#0d1426] border border-white/10 hover:border-emerald-500/30 transition-all hover:bg-[#0f1830]">
                    <p className="text-sm text-emerald-400 font-semibold mb-2">Why {i + 1}:</p>
                    <p className="text-slate-400 text-sm mb-3 italic">{w.q}</p>
                    <p className="text-slate-200 leading-relaxed">{w.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Root finding callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Root Finding</h4>
              <p className="text-slate-300 leading-relaxed">
                The fundamental root cause is the <span className="text-emerald-400 font-semibold">lack of community-centered digital sustainability frameworks</span> that
                connect technology, capacity building, and long-term development — not merely a lack of access to devices or internet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
