import { useLanguage } from '../i18n/LanguageContext'

const colors = [
  'from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400',
  'from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400',
  'from-amber-500/20 to-amber-600/10 border-amber-500/30 text-amber-400',
  'from-green-500/20 to-green-600/10 border-green-500/30 text-green-400',
  'from-rose-500/20 to-rose-600/10 border-rose-500/30 text-rose-400',
  'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-400',
]

export default function Fishbone() {
  const { t } = useLanguage()
  const f = t('fishbone')

  return (
    <section id="fishbone" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">{f.label}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">{f.title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">{f.desc}</p>
        </div>

        <div className="flex items-center justify-center mb-12">
          <div className="px-8 py-4 rounded-2xl bg-red-500/10 border border-red-500/40 text-center">
            <p className="text-xs text-red-400 font-semibold uppercase tracking-widest mb-1">{f.problemLabel}</p>
            <p className="text-white font-bold text-lg whitespace-pre-line">{f.problemText}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {f.categories.map((cat, i) => {
            const [grad, , border, text] = colors[i].split(' ')
            const colorClass = colors[i]
            return (
              <div key={cat.title}
                className={`p-6 rounded-2xl bg-gradient-to-br ${colorClass} border hover:scale-[1.01] transition-transform`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-bold text-sm uppercase tracking-wide">{cat.title}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="mt-1 flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
