import { useState, useEffect } from 'react'

const links = [
  { href: '#problem', label: 'Problem' },
  { href: '#root-cause', label: 'Root Cause' },
  { href: '#solution', label: 'Solution' },
  { href: '#communities', label: 'Communities' },
  { href: '#impact', label: 'Impact' },
  { href: '#pitch', label: 'Pitch' },
  { href: '#resources', label: 'Resources' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0f1e]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img
            src="/hfp-logo.png"
            alt="Al-Hussein Fellowship — Crown Prince Foundation"
            className="h-10 w-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#resources"
            className="ml-4 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold rounded-lg transition-colors">
            Get Involved
          </a>
        </div>

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

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0d1426] border-t border-white/5 px-6 py-4 flex flex-col gap-3">
          {links.map(l => (
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
