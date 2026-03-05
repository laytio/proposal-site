export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/hfp-logo.png"
            alt="Al-Hussein Fellowship — Crown Prince Foundation"
            className="h-28 w-auto object-contain"
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Project Proposal · Jordan 2026
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Digital Sustainability for{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Jordanian Communities
          </span>
        </h1>

        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-4 leading-relaxed">
          Building Sustainable Digital Ecosystems through AI and Technology
        </p>

        <p className="text-slate-500 text-base max-w-2xl mx-auto mb-12">
          A community-centered framework that integrates artificial intelligence, digital literacy,
          and long-term governance to bridge the digital divide across Jordan.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { label: 'Target Communities', value: '3+' },
            { label: 'Framework Layers', value: '3' },
            { label: 'Impact Areas', value: '6+' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-emerald-400">{s.value}</div>
              <div className="text-sm text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#problem"
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/25">
            Explore the Proposal
          </a>
          <a href="#pitch"
            className="px-8 py-3 border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-white font-semibold rounded-xl transition-all bg-white/5">
            View the Pitch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs">Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent animate-bounce" />
      </div>
    </section>
  )
}
