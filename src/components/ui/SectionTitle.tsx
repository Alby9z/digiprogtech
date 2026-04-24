interface SectionTitleProps {
  badge?: string
  title: string
  highlight?: string
  description?: string
  center?: boolean
}

export default function SectionTitle({ badge, title, highlight, description, center = true }: SectionTitleProps) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-brand-500/30 text-brand-400 text-xs font-medium mb-4`}>
          {badge}
        </div>
      )}
      <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
        {title}
        {highlight && (
          <> <span className="gradient-text">{highlight}</span></>
        )}
      </h2>
      {description && (
        <p className="text-slate-400 leading-relaxed">{description}</p>
      )}
    </div>
  )
}
