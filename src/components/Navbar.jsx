import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()
  const nav = t('nav')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0f1e]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">

        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
            <span className="text-white font-bold text-xs">HFP</span>
          </div>
          <span className="text-white font-semibold text-sm hidden sm:block">
            {lang === 'ar' ? 'الاستدامة الرقمية' : 'Digital Sustainability'}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-5">
          {nav.links.map(l => (
            <a key={l.href} href={l.href}
              className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#resources"
            className="ml-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold rounded-lg transition-colors">
            {nav.getInvolved}
          </a>
        </div>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition-all text-sm font-semibold"
          >
            <span className={lang === 'en' ? 'text-emerald-400' : 'text-slate-400'}>EN</span>
            <span className="text-slate-600 mx-0.5">|</span>
            <span className={lang === 'ar' ? 'text-emerald-400' : 'text-slate-400'}>AR</span>
          </button>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-slate-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0d1426] border-t border-white/5 px-6 py-4 flex flex-col gap-3">
          {nav.links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-emerald-400 text-sm font-medium py-1 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
