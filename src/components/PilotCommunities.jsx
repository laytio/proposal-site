import { useLanguage } from '../i18n/LanguageContext'

const gradients = [
  'from-green-500/20 to-emerald-500/10 border-green-500/30 bg-green-500/20 text-green-300',
  'from-blue-500/20 to-indigo-500/10 border-blue-500/30 bg-blue-500/20 text-blue-300',
  'from-purple-500/20 to-violet-500/10 border-purple-500/30 bg-purple-500/20 text-purple-300',
]

export default function PilotCommunities() {
  const { t } = useLanguage()
  const c = t('communities')

  return (
    <section id="communities" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">{c.label}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">{c.title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">{c.desc}</p>
        </div>

        <div className="space-y-6">
          {c.items.map((item, i) => {
            const [g1, g2, border, badgeBg, badgeText] = gradients[i].split(' ')
            return (
              <div key={item.rank}
                className={`p-8 rounded-2xl bg-gradient-to-br ${gradients[i]} border hover:shadow-xl transition-all`}>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-start gap-5 flex-1">
                    <div className="flex-shrink-0">
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <div className="text-3xl font-black text-white/10">{item.rank}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-slate-300 leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="lg:w-64 flex-shrink-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">{c.benefitsLabel}</p>
                    <div className="space-y-2">
                      {item.benefits.map(b => (
                        <span key={b} className={`block text-xs px-2 py-1 rounded-md font-medium ${badgeBg} ${badgeText}`}>
                          ✓ {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
