import { useLanguage } from '../i18n/LanguageContext'

export default function HowMightWe() {
  const { t } = useLanguage()
  const h = t('hmw')

  return (
    <section id="hmw" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">{h.label}</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-16">{h.title}</h2>

        <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-cyan-500/10 border border-emerald-500/30 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="text-6xl sm:text-8xl font-black text-emerald-400/20 mb-6 leading-none">"</div>
            <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed mb-6">{h.quote}</p>
            <div className="text-6xl sm:text-8xl font-black text-emerald-400/20 leading-none flex justify-end">"</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {h.tags.map(tag => (
            <span key={tag}
              className="px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm font-medium">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
