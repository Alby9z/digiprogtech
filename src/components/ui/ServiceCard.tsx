
import Link from 'next/link'
import {
  ArrowUpRight,
  Code2,
  Palette,
  Server,
  Shield,
  BarChart3,
  TrendingUp,
  Layers3,
  Activity,
  Globe2,
  LockKeyhole,
  Workflow,
} from 'lucide-react'
import clsx from 'clsx'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  features?: string[]
  accent?: string
  className?: string
  visual?: number
}

function ServiceVisual({ type }: { type: number }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-full min-h-[185px] items-center justify-center overflow-hidden rounded-xl border border-white/[0.045] bg-gradient-to-br from-[#202024] via-[#17171b] to-[#101014] sm:min-h-[205px]"
    >
      {/* Grille de fond */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.10) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#111114]/80 via-transparent to-white/[0.025]" />

      {type === 1 && (
        <div className="relative w-[78%] max-w-[330px] -rotate-2 rounded-xl border border-white/15 bg-[#17171b] p-3 shadow-2xl transition-transform duration-700 group-hover:rotate-0 group-hover:scale-[1.03] sm:p-4">
          <div className="mb-3 flex items-center gap-1.5 border-b border-white/10 pb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <div className="ml-3 h-1.5 flex-1 rounded-full bg-white/[0.07]" />
          </div>
          <div className="grid grid-cols-[1fr_1.3fr] gap-3">
            <div className="space-y-2 pt-1">
              <div className="h-2 w-3/4 rounded bg-white/15" />
              <div className="h-2 w-full rounded bg-white/[0.07]" />
              <div className="h-2 w-5/6 rounded bg-white/[0.07]" />
              <div className="mt-4 h-8 rounded-lg border border-blue-300/20 bg-blue-400/[0.08]" />
            </div>
            <div className="flex min-h-[95px] items-center justify-center rounded-lg border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-transparent">
              <Code2 size={39} strokeWidth={1} className="text-white/70" />
            </div>
          </div>
        </div>
      )}

      {type === 2 && (
        <div className="relative flex w-[80%] max-w-[290px] items-center justify-center gap-3 transition-transform duration-700 group-hover:scale-105">
          <div className="absolute h-28 w-28 rounded-full border border-white/10" />
          <div className="absolute h-20 w-20 rounded-full border border-white/10" />
          <div className="relative flex h-24 w-16 -rotate-6 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#424248] to-[#17171b] shadow-xl">
            <Palette size={27} strokeWidth={1.2} className="text-white/80" />
          </div>
          <div className="relative flex h-32 w-20 translate-y-2 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-b from-[#34343b] to-[#17171b] shadow-xl">
            <Layers3 size={32} strokeWidth={1.1} className="text-white/80" />
          </div>
          <div className="relative flex h-20 w-14 rotate-6 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#414148] to-[#17171b] shadow-xl">
            <Globe2 size={25} strokeWidth={1.2} className="text-white/80" />
          </div>
        </div>
      )}

      {type === 3 && (
        <div className="relative w-[82%] max-w-[340px] rounded-xl border border-white/10 bg-black/20 p-4 transition-transform duration-700 group-hover:scale-[1.03] sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] text-white/45">Infrastructure</div>
              <div className="mt-1 text-sm font-medium text-white/85">Cloud status</div>
            </div>
            <span className="rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-2 py-1 text-[9px] text-emerald-200/80">
              Operational
            </span>
          </div>
          <div className="my-4 flex items-center justify-center gap-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] py-4">
                <Server size={20} strokeWidth={1.2} className="text-white/70" />
                <div className="h-1 w-8 rounded-full bg-emerald-200/40" />
              </div>
            ))}
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-white/[0.08]">
            <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-white/20 to-white/60" />
          </div>
        </div>
      )}

      {type === 4 && (
        <div className="relative flex h-36 w-36 items-center justify-center transition-transform duration-700 group-hover:scale-110 sm:h-40 sm:w-40">
          <div className="absolute inset-0 rounded-full border border-white/[0.08]" />
          <div className="absolute inset-4 rounded-full border border-white/10" />
          <div className="absolute inset-8 rounded-full border border-white/10" />
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#38383e] to-[#17171b] shadow-2xl">
            <Shield size={38} strokeWidth={1.1} className="text-white/85" />
          </div>
          <span className="absolute right-1 top-5 h-2 w-2 rounded-full bg-white/50 shadow-[0_0_16px_rgba(255,255,255,0.25)]" />
          <span className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>
      )}

      {type === 5 && (
        <div className="relative w-[84%] max-w-[340px] rounded-xl border border-white/10 bg-[#17171b]/90 p-4 transition-transform duration-700 group-hover:scale-[1.03] sm:p-5">
          <div className="flex items-center justify-between">
            <div className="text-[10px] text-white/50">Performance report</div>
            <Activity size={15} className="text-white/50" />
          </div>
          <div className="mt-2 text-2xl font-semibold tracking-tight text-white/90">98<span className="text-sm text-white/40">/100</span></div>
          <div className="mt-3 flex h-16 items-end gap-1.5">
            {[35, 48, 42, 60, 53, 73, 68, 88, 78, 96, 84, 100].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-white/10 to-white/55"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="mt-3 flex justify-between text-[9px] text-white/35">
            <span>SEO</span>
            <span>Performance</span>
            <span>UX</span>
          </div>
        </div>
      )}

      {type === 6 && (
        <div className="relative w-[82%] max-w-[340px] rounded-xl border border-white/10 bg-[#17171b]/90 p-4 transition-transform duration-700 group-hover:scale-[1.03] sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-xs text-white/70">Growth overview</div>
            <TrendingUp size={17} className="text-white/60" />
          </div>
          <div className="flex items-end justify-between gap-2">
            {[30, 45, 39, 58, 51, 73, 66, 87, 100].map((height, index) => (
              <div key={index} className="flex flex-1 items-end">
                <div
                  className="w-full rounded-t-sm border-t border-white/40 bg-gradient-to-t from-white/[0.03] to-white/25"
                  style={{ height: `${height}px` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 border-t border-white/[0.08] pt-3 text-[10px] text-white/40">
            Performance · Expérience · Croissance
          </div>
        </div>
      )}

      {/* Voile de finition */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-white/[0.015]" />
    </div>
  )
}

export default function ServiceCard({
  title,
  description,
  href,
  icon,
  features,
  className,
}: ServiceCardProps) {
  const visualByHref: Record<string, number> = {
    '/services/developpement-web': 1,
    '/services/design-graphisme': 2,
    '/services/hebergement': 3,
    '/services/securite': 4,
    '/audit': 5,
    '/services/optimisation': 6,
  }

  const visual = visualByHref[href] ?? 1

  return (
    <Link
      href={href}
      aria-label={`Découvrir ${title}`}
      className={clsx(
        'group relative flex h-full flex-col overflow-hidden rounded-[22px]',
        'border border-white/[0.09] bg-[#121216] p-3',
        'shadow-[0_8px_28px_rgba(0,0,0,0.14)]',
        'transition-all duration-300 hover:-translate-y-1',
        'hover:border-white/[0.17] hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300',
        className
      )}
    >
      {/* Deuxième bordure intérieure */}
      <div className="pointer-events-none absolute inset-3 rounded-[17px] border border-white/[0.035]" />

      <ServiceVisual type={visual} />

      <div className="flex flex-1 flex-col px-3 pb-3 pt-5 sm:px-5 sm:pt-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-white/40 [&>svg]:h-4 [&>svg]:w-4">
            {icon}
          </span>
          <span className="h-px flex-1 bg-white/[0.07]" />
          <ArrowUpRight
            size={16}
            className="text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/90"
          />
        </div>

        <h3 className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-neutral-400">
          {description}
        </p>

        {features && features.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[10px] text-neutral-400 transition-colors group-hover:border-white/[0.13] group-hover:text-neutral-300"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center gap-2 pt-5 text-xs font-medium text-neutral-300 transition-colors group-hover:text-white">
          Explorer le service
          <ArrowUpRight size={14} />
        </div>
      </div>
    </Link>
  )
}
