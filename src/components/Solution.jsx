import { useLanguage } from '../i18n/LanguageContext'

const icons = [
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
]

const layerColors = [
  'from-blue-500/20 to-cyan-500/10 border-blue-500/30 hover:border-blue-400/50 bg-blue-500/20 text-blue-300',
  'from-emerald-500/20 to-green-500/10 border-emerald-500/30 hover:border-emerald-400/50 bg-emerald-500/20 text-emerald-300',
  'from-purple-500/20 to-violet-500/10 border-purple-500/30 hover:border-purple-400/50 bg-purple-500/20 text-purple-300',
]

export default function Solution() {
  const { t } = useLanguage()
  const s = t('solution')

  return (
    <section id="solution" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">{s.label}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">{s.title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            {s.desc1}<strong className="text-white">{s.descSpan}</strong>{s.desc2}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {s.layers.map((layer, i) => {
            const [grad1, grad2, border, hover, badgeBg, badgeText] = layerColors[i].split(' ')
            return (
              <div key={layer.number}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${layerColors[i]} border transition-all hover:shadow-xl hover:-translate-y-1`}>
                <div className="absolute top-6 end-6 text-5xl font-black text-white/5">{layer.number}</div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${badgeBg} ${badgeText}`}>
                  {icons[i]}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{layer.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">{layer.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {layer.tags.map(tag => (
                    <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium ${badgeBg} ${badgeText}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">{s.pilotTitle}</h3>
              <p className="text-slate-300 leading-relaxed">
                {s.pilotText1}{' '}
                <span className="text-emerald-400">{s.pilotSpan}</span>
                {s.pilotText2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
