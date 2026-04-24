'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Code2, Palette, Server, Shield, ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import navData from '@/data/navigation.json'
import clsx from 'clsx'

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={16} />,
  Palette: <Palette size={16} />,
  Server: <Server size={16} />,
  Shield: <Shield size={16} />,
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveMenu(null)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const servicesLink = navData.mainLinks.find(l => l.submenu)

  return (
    <>
      <nav className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-dark-900/95 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-display font-bold text-sm shadow-lg group-hover:scale-105 transition-transform">
                D
              </div>
              <span className="font-display font-bold text-xl text-white">
                Digiprog<span className="text-brand-400">tech</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1" ref={menuRef}>
              {navData.mainLinks.map((link) => (
                <div key={link.label} className="relative">
                  {link.submenu ? (
                    <button
                      onMouseEnter={() => setActiveMenu(link.label)}
                      onMouseLeave={() => setActiveMenu(null)}
                      className={clsx(
                        'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all',
                        activeMenu === link.label
                          ? 'text-white bg-white/10'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      )}
                    >
                      {link.label}
                      <ChevronDown size={14} className={clsx('transition-transform', activeMenu === link.label && 'rotate-180')} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={clsx(
                        'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                        pathname === link.href
                          ? 'text-white bg-brand-500/20 text-brand-400'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      )}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Mega Menu */}
                  {link.submenu && activeMenu === link.label && (
                    <div
                      onMouseEnter={() => setActiveMenu(link.label)}
                      onMouseLeave={() => setActiveMenu(null)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[820px] glass rounded-2xl p-6 shadow-2xl border border-white/10"
                    >
                      <div className="grid grid-cols-4 gap-6">
                        {link.submenu.map((cat) => (
                          <div key={cat.category}>
                            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                              <span className="text-brand-400">{iconMap[cat.icon]}</span>
                              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{cat.category}</span>
                            </div>
                            <div className="space-y-1">
                              {cat.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="group block p-2 rounded-lg hover:bg-white/5 transition-colors"
                                >
                                  <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{item.label}</div>
                                  <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">{item.desc}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/audit" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white border border-white/15 hover:border-white/30 rounded-lg transition-all">
                Audit gratuit
              </Link>
              <Link href="/devis" className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white rounded-lg transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40">
                Devis gratuit
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-dark-900/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
          <div className="relative h-full overflow-y-auto pt-20 px-4 pb-8">
            <div className="space-y-1">
              {navData.mainLinks.map((link) => (
                <div key={link.label}>
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-white font-medium rounded-xl hover:bg-white/5 transition-colors"
                      >
                        {link.label}
                        <ChevronDown size={16} className={clsx('transition-transform text-slate-400', mobileExpanded === link.label && 'rotate-180')} />
                      </button>
                      {mobileExpanded === link.label && (
                        <div className="mt-1 ml-4 space-y-4 pb-2">
                          {link.submenu.map((cat) => (
                            <div key={cat.category}>
                              <div className="flex items-center gap-2 px-3 py-1 mb-1">
                                <span className="text-brand-400">{iconMap[cat.icon]}</span>
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{cat.category}</span>
                              </div>
                              {cat.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="flex items-center justify-between px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                >
                                  <span>{item.label}</span>
                                  <ArrowRight size={12} className="text-slate-600" />
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={clsx(
                        'flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-colors',
                        pathname === link.href ? 'text-brand-400 bg-brand-500/10' : 'text-white hover:bg-white/5'
                      )}
                    >
                      {link.label}
                      <ArrowRight size={14} className="text-slate-600" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <Link href="/audit" className="flex items-center justify-center w-full py-3 text-sm font-medium text-slate-300 border border-white/15 rounded-xl transition-all hover:border-white/30 hover:text-white">
                Demander un audit
              </Link>
              <Link href="/devis" className="flex items-center justify-center w-full py-3 text-sm font-semibold bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-xl transition-all">
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
