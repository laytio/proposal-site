const communities = [
  {
    rank: '01',
    title: 'Rural Communities',
    icon: '🌾',
    gradient: 'from-green-500/20 to-emerald-500/10 border-green-500/30',
    badge: 'bg-green-500/20 text-green-300',
    description:
      'Rural communities often experience the largest digital gaps and limited access to advanced technological tools. Implementing digital sustainability initiatives in these communities can reduce inequalities and improve access to services such as healthcare, education, and digital information systems.',
    benefits: ['Healthcare digitization', 'Education access', 'Digital information systems', 'Reduced inequalities'],
  },
  {
    rank: '02',
    title: 'Youth Communities',
    icon: '🎓',
    gradient: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30',
    badge: 'bg-blue-500/20 text-blue-300',
    description:
      'Youth communities, especially university students and young professionals, represent a strong foundation for building sustainable digital ecosystems. By focusing on youth, the project can develop digital leaders who will expand responsible technology and AI use within society.',
    benefits: ['Digital leadership', 'AI skill development', 'Entrepreneurship', 'Multiplier effect'],
  },
  {
    rank: '03',
    title: 'Public Service Communities',
    icon: '🏥',
    gradient: 'from-purple-500/20 to-violet-500/10 border-purple-500/30',
    badge: 'bg-purple-500/20 text-purple-300',
    description:
      'Institutions such as schools, local health centers, and municipalities are critical community hubs. Integrating digital sustainability frameworks within these institutions can significantly improve service delivery and create long-term benefits for the broader community.',
    benefits: ['Improved service delivery', 'School digitization', 'Health center efficiency', 'Municipal modernization'],
  },
]

export default function PilotCommunities() {
  return (
    <section id="communities" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Pilot Implementation</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Top Three Communities</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Strategic communities selected for maximum impact, scalability, and long-term digital sustainability.
          </p>
        </div>

        <div className="space-y-6">
          {communities.map((c) => (
            <div key={c.rank}
              className={`p-8 rounded-2xl bg-gradient-to-br ${c.gradient} border hover:shadow-xl transition-all`}>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex items-start gap-5 flex-1">
                  <div className="flex-shrink-0">
                    <div className="text-4xl mb-2">{c.icon}</div>
                    <div className="text-3xl font-black text-white/10">{c.rank}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{c.title}</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">{c.description}</p>
                  </div>
                </div>
                <div className="lg:w-64 flex-shrink-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Key Benefits</p>
                  <div className="space-y-2">
                    {c.benefits.map(b => (
                      <div key={b} className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded-md font-medium ${c.badge}`}>✓ {b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
