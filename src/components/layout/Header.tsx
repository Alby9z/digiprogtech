'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  ChevronDown,
  Code2,
  Globe,
  Zap,
  RefreshCw,
  Gauge,
  Palette,
  PenTool,
  Layers,
  BookOpen,
  Server,
  Cloud,
  Wrench,
  Shield,
  Lock,
  ShieldCheck,
  HardDrive,
} from 'lucide-react'

import { NAV_SERVICES } from '@/data/navigation'

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Zap,
  RefreshCw,
  Gauge,
  Palette,
  PenTool,
  Layers,
  BookOpen,
  Server,
  Cloud,
  Wrench,
  Shield,
  Lock,
  ShieldCheck,
  HardDrive,
}

function ServiceIcon({ name }: { name: string }) {
  const Icon = ICON_MAP[name] || Code2

  return <Icon size={16} aria-hidden="true" />
}

const mainLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Audit', href: '/audit' },
  { label: 'Blog', href: '/blog' },
  { label: 'À propos', href: '/qui-sommes-nous' },
  { label: 'Contact', href: '/contact' },
]

function isActivePath(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/'
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

function navLinkClass(active: boolean) {
  return [
    'rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200',
    'whitespace-nowrap',
    active
      ? 'bg-brand-500/10 text-brand-400'
      : 'text-slate-300 hover:bg-white/5 hover:text-white',
  ].join(' ')
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const pathname = usePathname()
  const megaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
    setMobileExpanded(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        megaRef.current &&
        !megaRef.current.contains(event.target as Node)
      ) {
        setMegaOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? 'border-brand-500/10 bg-dark-800/95 py-3 shadow-lg shadow-black/10 backdrop-blur-xl'
            : 'border-transparent bg-dark-900/30 py-5 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Digiprogtech — Accueil"
            className="group flex shrink-0 items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-lg shadow-brand-500/30 transition-shadow group-hover:shadow-brand-500/50">
              <span className="font-display text-sm font-bold text-white">
                D
              </span>
            </div>

            <span className="whitespace-nowrap font-display text-xl font-bold tracking-tight">
              <span className="text-white">Digi</span>
              <span className="text-gradient-blue">prog</span>
              <span className="text-accent-400">tech</span>
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-0.5 xl:flex"
          >
            <Link
              href="/"
              className={navLinkClass(isActivePath(pathname, '/'))}
            >
              Accueil
            </Link>

            {/* Menu Services */}
            <div ref={megaRef} className="relative">
              <button
                type="button"
                aria-expanded={megaOpen}
                aria-haspopup="true"
                onMouseEnter={() => setMegaOpen(true)}
                onClick={() => setMegaOpen((open) => !open)}
                className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname.startsWith('/services')
                    ? 'bg-brand-500/10 text-brand-400'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                Services

                <ChevronDown
                  size={14}
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${
                    megaOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {megaOpen && (
                <div
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                  className="absolute left-1/2 top-full mt-3 grid w-[780px] -translate-x-1/2 grid-cols-4 gap-4 rounded-2xl border border-brand-500/15 bg-dark-800 p-6 shadow-2xl shadow-black/50"
                >
                  {NAV_SERVICES.map((group) => (
                    <div key={group.category} className="min-w-0">
                      <Link
                        href={group.href}
                        onClick={() => setMegaOpen(false)}
                        className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400 transition-colors hover:text-brand-300"
                      >
                        <ServiceIcon name={group.icon} />
                        <span>{group.category}</span>
                      </Link>

                      <ul className="space-y-1">
                        {group.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setMegaOpen(false)}
                              className={`flex items-center gap-2 rounded-lg px-2 py-2 text-sm transition-colors ${
                                isActivePath(pathname, child.href)
                                  ? 'bg-brand-500/10 text-brand-300'
                                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
                              }`}
                            >
                              <ServiceIcon name={child.icon} />

                              <span>{child.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Liens principaux */}
            {mainLinks
              .filter((item) => item.href !== '/')
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass(
                    isActivePath(pathname, item.href),
                  )}
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          {/* Boutons desktop */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <Link
              href="/audit"
              className="whitespace-nowrap text-sm font-medium text-slate-300 transition-colors hover:text-brand-400"
            >
              Audit
            </Link>

            <Link
              href="/devis"
              className="whitespace-nowrap rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:text-white xl:hidden"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Navigation mobile */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 xl:hidden ${
          mobileOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Fond assombri */}
        <button
          type="button"
          aria-label="Fermer le menu"
          tabIndex={mobileOpen ? 0 : -1}
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 h-full w-full bg-dark-900/80 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Panneau mobile */}
        <div
          className={`absolute bottom-0 right-0 top-0 flex w-[min(340px,88vw)] flex-col overflow-y-auto border-l border-brand-500/10 bg-dark-800 shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* En-tête mobile */}
          <div className="flex items-center justify-between border-b border-white/5 p-5">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-700">
                <span className="text-xs font-bold text-white">D</span>
              </div>

              <span className="font-display text-lg font-bold">
                <span className="text-white">Digi</span>
                <span className="text-brand-400">prog</span>
                <span className="text-accent-400">tech</span>
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Fermer le menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Liens mobiles */}
          <nav
            aria-label="Navigation mobile"
            className="flex-1 space-y-1 p-4"
          >
            {mainLinks
              .filter((item) => item.href === '/')
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-4 py-3 font-medium transition-colors ${
                    isActivePath(pathname, item.href)
                      ? 'bg-brand-500/10 text-brand-400'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

            {/* Services mobile */}
            <div>
              <button
                type="button"
                onClick={() => setMobileExpanded((expanded) => !expanded)}
                aria-expanded={mobileExpanded}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 font-medium transition-colors ${
                  pathname.startsWith('/services')
                    ? 'bg-brand-500/10 text-brand-400'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                Services

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    mobileExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileExpanded && (
                <div className="ml-3 mt-2 space-y-4 border-l border-white/10 pb-2 pl-3">
                  {NAV_SERVICES.map((group) => (
                    <div key={group.category}>
                      <Link
                        href={group.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-brand-400"
                      >
                        <ServiceIcon name={group.icon} />
                        {group.category}
                      </Link>

                      <ul className="space-y-0.5">
                        {group.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                                isActivePath(pathname, child.href)
                                  ? 'bg-brand-500/10 text-brand-300'
                                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
                              }`}
                            >
                              <ServiceIcon name={child.icon} />
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {mainLinks
              .filter((item) => item.href !== '/')
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-4 py-3 font-medium transition-colors ${
                    isActivePath(pathname, item.href)
                      ? 'bg-brand-500/10 text-brand-400'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          {/* Boutons mobiles */}
          <div className="space-y-3 border-t border-white/5 p-5">
            <Link
              href="/audit"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-xl border border-brand-500/30 px-5 py-3 text-center font-semibold text-brand-400 transition-colors hover:bg-brand-500/10"
            >
              Demander un audit
            </Link>

            <Link
              href="/devis"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-xl bg-brand-500 px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-brand-400"
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}