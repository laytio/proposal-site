function AssumptionCard({ text, index }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors">
      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center mt-0.5">
        {index + 1}
      </span>
      <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
    </div>
  )
}

const assumptions = [
  'Communities are willing to adopt digital technologies.',
  'Young people are interested in developing digital skills.',
  'Artificial intelligence can support community services and improve efficiency.',
  'Basic digital infrastructure such as internet connectivity and devices is available.',
]

export default function ProblemStatement() {
  return (
    <section id="problem" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">The Challenge</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Problem Statement</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Core problem */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Core Problem</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Many communities in Jordan lack sustainable digital ecosystems that enable them to effectively
              integrate technology and artificial intelligence into local services, decision-making processes,
              and long-term community development.
            </p>
          </div>

          {/* Symptom vs Root */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/5 to-yellow-500/5 border border-amber-500/20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Symptom vs. Root Cause</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              The problem identified is primarily a <span className="text-amber-400 font-semibold">symptom</span>.
              The deeper root cause lies in the <span className="text-amber-300">absence of structured frameworks</span> that
              support digital sustainability at the community level. Technology exists globally, but communities
              lack the systems, training, and institutional support to use it sustainably.
            </p>
          </div>
        </div>

        {/* Narrow framing note */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-12">
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <span className="text-emerald-400">⟳</span> Avoiding Narrow Framing
          </h4>
          <p className="text-slate-400 leading-relaxed">
            The problem should not be framed solely as a lack of AI tools. The issue is broader and includes
            <span className="text-slate-200"> digital literacy, infrastructure limitations, institutional support, and sustainable governance models.</span>
            {' '}The solution must combine technology, training, and long-term sustainability mechanisms.
          </p>
        </div>

        {/* Who benefits */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-12">
          <h4 className="text-white font-semibold mb-3">Who Benefits from the Current Situation?</h4>
          <p className="text-slate-400 leading-relaxed">
            Traditional systems relying on outdated processes continue to operate without disruption.
            Organizations providing services only in urban centers may indirectly benefit from the lack of
            digital transformation elsewhere. However, the wider society loses opportunities for development,
            innovation, and equal access to digital services.
          </p>
        </div>

        {/* Assumptions */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Key Assumptions Being Made</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {assumptions.map((a, i) => <AssumptionCard key={i} text={a} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
