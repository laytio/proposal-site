export default function Pitch() {
  return (
    <section id="pitch" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Our Vision</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">The Pitch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="space-y-6">
          {[
            {
              icon: '🌐',
              text: 'Digital technologies are transforming the world, yet many communities still struggle to use these tools in a sustainable and meaningful way.',
            },
            {
              icon: '🇯🇴',
              text: 'In Jordan, the challenge is not only access to technology, but the lack of sustainable digital ecosystems that allow communities to continuously benefit from digital tools and artificial intelligence.',
            },
            {
              icon: '🎯',
              text: 'Our project focuses on digital sustainability — ensuring that technology is not introduced temporarily but integrated in a way that empowers communities for the long term.',
            },
            {
              icon: '🔧',
              text: 'We aim to design a digital sustainability framework that helps communities adopt technology responsibly, build digital skills, and integrate AI solutions that support local services such as healthcare, education, and community development.',
            },
            {
              icon: '🚀',
              text: 'By combining technology, training, and community engagement, this framework can create scalable digital ecosystems that strengthen community resilience and support long-term development across Jordan.',
            },
          ].map((block, i) => (
            <div key={i}
              className="flex items-start gap-5 p-6 rounded-2xl bg-[#0d1426] border border-white/10 hover:border-emerald-500/30 transition-all">
              <span className="text-3xl flex-shrink-0">{block.icon}</span>
              <p className="text-slate-300 leading-relaxed text-lg">{block.text}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-emerald-500/15 to-teal-500/15 border border-emerald-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Join Us in Building a Digitally Sustainable Jordan</h3>
          <p className="text-slate-400 mb-6">
            Together we can bridge the digital divide and create lasting, meaningful change at the community level.
          </p>
          <a href="#resources"
            className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/25">
            Explore Resources →
          </a>
        </div>
      </div>
    </section>
  )
}
