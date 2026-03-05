const categories = [
  {
    title: 'Technology Factors',
    icon: '💻',
    color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
    badge: 'text-blue-400',
    items: [
      'Limited access to advanced digital tools',
      'Low adoption of AI solutions',
      'Limited community-based digital platforms',
      'Dependence on traditional systems',
    ],
  },
  {
    title: 'Human Capacity',
    icon: '👥',
    color: 'from-purple-500/20 to-purple-600/10 border-purple-500/30',
    badge: 'text-purple-400',
    items: [
      'Low digital literacy among community members',
      'Limited technical skills for advanced technologies',
      'Lack of digital sustainability training programs',
      'Resistance to adopting new technologies',
    ],
  },
  {
    title: 'Institutional Factors',
    icon: '🏛️',
    color: 'from-amber-500/20 to-amber-600/10 border-amber-500/30',
    badge: 'text-amber-400',
    items: [
      'Weak coordination between supporting institutions',
      'Limited government initiatives for community digital sustainability',
      'Lack of clear digital transformation policies',
    ],
  },
  {
    title: 'Economic Factors',
    icon: '💰',
    color: 'from-green-500/20 to-green-600/10 border-green-500/30',
    badge: 'text-green-400',
    items: [
      'Limited funding for digital transformation',
      'High cost of implementing advanced technologies',
      'Limited investment in community-based tech development',
    ],
  },
  {
    title: 'Cultural & Social',
    icon: '🌍',
    color: 'from-rose-500/20 to-rose-600/10 border-rose-500/30',
    badge: 'text-rose-400',
    items: [
      'Preference for traditional working methods',
      'Low awareness of long-term digital benefits',
      'Limited trust in AI and digital systems',
    ],
  },
  {
    title: 'Infrastructure',
    icon: '🔌',
    color: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30',
    badge: 'text-cyan-400',
    items: [
      'Unequal access to reliable internet connectivity',
      'Limited digital infrastructure in communities',
      'Insufficient tech equipment in local institutions',
    ],
  },
]

export default function Fishbone() {
  return (
    <section id="fishbone" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Ishikawa Analysis</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Fishbone Root Cause Diagram</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A multi-dimensional analysis of why digital sustainability is lacking in Jordanian communities.
          </p>
        </div>

        {/* Problem spine */}
        <div className="flex items-center justify-center mb-12">
          <div className="px-8 py-4 rounded-2xl bg-red-500/10 border border-red-500/40 text-center">
            <p className="text-xs text-red-400 font-semibold uppercase tracking-widest mb-1">Core Problem</p>
            <p className="text-white font-bold text-lg">Lack of Digital Sustainability<br/>in Jordanian Communities</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title}
              className={`p-6 rounded-2xl bg-gradient-to-br ${cat.color} border hover:scale-[1.01] transition-transform`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className={`font-bold text-sm uppercase tracking-wide ${cat.badge}`}>{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className={`${cat.badge} mt-1 flex-shrink-0`}>›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
