import { useLanguage } from '../i18n/LanguageContext'

export default function Resources() {
  const { t } = useLanguage()
  const r = t('resources')

  return (
    <section id="resources" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">{r.label}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">{r.title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">{r.desc}</p>
        </div>

        <div className="space-y-3">
          {r.items.map((res, i) => (
            <a key={i} href={res.url} target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-xl bg-[#0d1426] border border-white/10 hover:border-emerald-500/40 hover:bg-[#0f1830] transition-all group">
              <span className="text-2xl flex-shrink-0 mt-0.5">{res.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors truncate">{res.title}</p>
                <p className="text-slate-500 text-sm mt-0.5">{res.org}</p>
              </div>
              <svg className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 flex-shrink-0 mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
