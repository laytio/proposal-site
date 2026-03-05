import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const f = t('footer')

  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
            <span className="text-white font-bold text-xs">HFP</span>
          </div>
          <div>
            <p className="text-white font-semibold text-sm">{f.name}</p>
            <p className="text-slate-500 text-xs">{f.sub}</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {f.links.map((href, i) => (
            <a key={href} href={href}
              className="text-slate-500 hover:text-emerald-400 text-sm transition-colors">
              {f.linkLabels[i]}
            </a>
          ))}
        </div>

        <p className="text-slate-600 text-sm">
          &copy; 2026 {f.copy}
        </p>
      </div>
    </footer>
  )
}
