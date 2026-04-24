interface PageHeroProps {
  badge?: string
  title: string
  highlight?: string
  description: string
  children?: React.ReactNode
}

export default function PageHero({ badge, title, highlight, description, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-brand-500/30 text-brand-400 text-xs font-medium mb-6">
            {badge}
          </div>
        )}
        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          {title}
          {highlight && (
            <> <span className="gradient-text">{highlight}</span></>
          )}
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
          {description}
        </p>
        {children}
      </div>
    </section>
  )
}
