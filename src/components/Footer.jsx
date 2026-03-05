export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">DS</span>
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Digital Sustainability for Jordanian Communities</p>
            <p className="text-slate-500 text-xs">Project Proposal · Jordan {year}</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {['#problem', '#root-cause', '#solution', '#communities', '#impact', '#pitch', '#resources'].map(href => (
            <a key={href} href={href}
              className="text-slate-500 hover:text-emerald-400 text-sm capitalize transition-colors">
              {href.replace('#', '').replace('-', ' ')}
            </a>
          ))}
        </div>

        <p className="text-slate-600 text-sm">
          &copy; {year} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
