const resources = [
  {
    title: 'Digital Development & Internet Usage in Jordan',
    org: 'DataReportal',
    url: 'https://datareportal.com/reports/digital-2025-jordan',
    icon: '📊',
  },
  {
    title: 'Jordan Digital Economy & Entrepreneurship Strategy',
    org: 'Ministry of Digital Economy (MoDEE)',
    url: 'https://www.modee.gov.jo/EN/Pages/Digital_Skills__Entrepreneurship',
    icon: '🏛️',
  },
  {
    title: 'Jordan Artificial Intelligence Policy and Strategy',
    org: 'MoDEE',
    url: 'https://modee.gov.jo/en/pages/aicustompage',
    icon: '🤖',
  },
  {
    title: 'Digital Inclusion and Digital Economy Policy in Jordan',
    org: 'Ministry of Digital Economy and Entrepreneurship',
    url: 'https://www.modee.gov.jo/ebv4.0/root_storage/en/eb_list_page/jordanian_digital_inclusion_policy_2025.pdf',
    icon: '📋',
  },
  {
    title: 'Digital Skills Development for Youth in Jordan',
    org: 'UNICEF',
    url: 'https://www.unicef.org/jordan/stories/digital-skills-essential-youth-learn-and-earn',
    icon: '🎓',
  },
  {
    title: 'Digital Learning and Education Technology in Jordan',
    org: 'World Bank',
    url: 'https://blogs.worldbank.org/en/arabvoices/covid-19-and-digital-learning-preparedness-jordan',
    icon: '🌍',
  },
  {
    title: 'Youth and Digital Transformation for Sustainable Development',
    org: 'United Nations Sustainable Development Group',
    url: 'https://unsdg.un.org/latest/stories/clicks-progress-jordanian-youth-leverage-digital-transformation-sustainable',
    icon: '🇺🇳',
  },
]

export default function Resources() {
  return (
    <section id="resources" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Evidence Base</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">References & Resources</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            This proposal is grounded in credible research and official policy documents from leading organizations.
          </p>
        </div>

        <div className="space-y-3">
          {resources.map((r, i) => (
            <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-xl bg-[#0d1426] border border-white/10 hover:border-emerald-500/40 hover:bg-[#0f1830] transition-all group">
              <span className="text-2xl flex-shrink-0 mt-0.5">{r.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors truncate">{r.title}</p>
                <p className="text-slate-500 text-sm mt-0.5">{r.org}</p>
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
