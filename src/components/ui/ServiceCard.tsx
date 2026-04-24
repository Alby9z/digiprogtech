import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import clsx from 'clsx'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  features?: string[]
  accent?: string
  className?: string
}

export default function ServiceCard({ title, description, href, icon, features, accent = 'brand', className }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'group relative glass rounded-2xl p-6 border border-white/8 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1',
        'hover:shadow-xl hover:shadow-brand-500/10',
        className
      )}
    >
      <div className="w-12 h-12 rounded-xl bg-brand-500/15 group-hover:bg-brand-500/25 flex items-center justify-center text-brand-400 mb-4 transition-colors">
        {icon}
      </div>
      <h3 className="font-display font-semibold text-lg text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
      {features && (
        <ul className="space-y-1 mb-4">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-1 h-1 rounded-full bg-brand-400 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}
      <span className="flex items-center gap-1 text-sm text-brand-400 font-medium group-hover:gap-2 transition-all">
        En savoir plus <ArrowRight size={14} />
      </span>
    </Link>
  )
}
