"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, Code2, Palette, Server, Shield,
  Globe, Zap, RefreshCw, Gauge, PenTool, Layers, BookOpen,
  Cloud, Wrench, Lock, ShieldCheck, HardDrive, ExternalLink
} from "lucide-react";
import { NAV_SERVICES, NAV_MAIN } from "@/data/navigation";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2, Globe, Zap, RefreshCw, Gauge, Palette, PenTool, Layers,
  BookOpen, Server, Cloud, Wrench, Shield, Lock, ShieldCheck, HardDrive,
};

function ServiceIcon({ name }: { name: string }) {
  const Icon = ICON_MAP[name] || Code2;
  return <Icon size={16} />;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark-800/95 backdrop-blur-xl border-b border-brand-500/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 transition-shadow">
              <span className="text-white font-display font-bold text-sm">D</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              <span className="text-white">Digi</span>
              <span className="text-gradient-blue">prog</span>
              <span className="text-accent-400">tech</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === "/" ? "text-brand-400 bg-brand-500/10" : "text-slate-300 hover:text-white hover:bg-white/5"}`}>
              Accueil
            </Link>

            {/* Services mega menu trigger */}
            <div className="relative" ref={megaRef}>
              <button
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                onClick={() => setMegaOpen(!megaOpen)}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith("/services") ? "text-brand-400 bg-brand-500/10" : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Services
                <ChevronDown size={14} className={`transition-transform ${megaOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Menu */}
              {megaOpen && (
                <div
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[780px] glass rounded-2xl shadow-2xl shadow-black/50 border border-brand-500/15 p-6 grid grid-cols-4 gap-4"
                >
                  {NAV_SERVICES.map((group) => (
                    <div key={group.category}>
                      <Link href={group.href} className="flex items-center gap-2 text-brand-400 font-semibold text-xs uppercase tracking-wider mb-3 hover:text-brand-300 transition-colors">
                        <ServiceIcon name={group.icon} />
                        {group.category}
                      </Link>
                      <ul className="space-y-1">
                        {group.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`flex items-center gap-2 text-sm py-1.5 px-2 rounded-lg transition-colors ${
                                pathname === child.href
                                  ? "text-brand-300 bg-brand-500/10"
                                  : "text-slate-400 hover:text-white hover:bg-white/5"
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

            <Link href="/audit" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === "/audit" ? "text-brand-400 bg-brand-500/10" : "text-slate-300 hover:text-white hover:bg-white/5"}`}>
              Audit
            </Link>
            <Link href="/blog" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname.startsWith("/blog") ? "text-brand-400 bg-brand-500/10" : "text-slate-300 hover:text-white hover:bg-white/5"}`}>
              Blog
            </Link>
            <Link href="/a-propos" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === "/a-propos" ? "text-brand-400 bg-brand-500/10" : "text-slate-300 hover:text-white hover:bg-white/5"}`}>
              À Propos
            </Link>
            <Link href="/contact" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === "/contact" ? "text-brand-400 bg-brand-500/10" : "text-slate-300 hover:text-white hover:bg-white/5"}`}>
              Contact
            </Link>
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/audit" className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors">
              Audit gratuit
            </Link>
            <Link
              href="/devis"
              className="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-brand-500/30 hover:-translate-y-0.5"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl glass text-slate-300 hover:text-white transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-[320px] bg-dark-800 border-l border-brand-500/10 overflow-y-auto transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">D</span>
                </div>
                <span className="font-display font-bold text-lg">
                  <span className="text-white">Digi</span>
                  <span className="text-brand-400">prog</span>
                  <span className="text-accent-400">tech</span>
                </span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-slate-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="space-y-1">
              <Link href="/" className="block px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-colors">
                Accueil
              </Link>

              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-colors"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${mobileExpanded === "services" ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileExpanded === "services" && (
                  <div className="ml-4 mt-1 space-y-3 pb-2">
                    {NAV_SERVICES.map((group) => (
                      <div key={group.category}>
                        <div className="px-4 py-1.5 text-xs font-semibold text-brand-400 uppercase tracking-wider flex items-center gap-2">
                          <ServiceIcon name={group.icon} />
                          {group.category}
                        </div>
                        <ul className="space-y-0.5">
                          {group.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
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

              <Link href="/audit" className="block px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-colors">
                Audit de site
              </Link>
              <Link href="/blog" className="block px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-colors">
                Blog
              </Link>
              <Link href="/a-propos" className="block px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-colors">
                À Propos
              </Link>
              <Link href="/contact" className="block px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Mobile CTAs */}
            <div className="mt-8 space-y-3">
              <Link
                href="/audit"
                className="block w-full text-center px-5 py-3 rounded-xl border border-brand-500/30 text-brand-400 font-semibold hover:bg-brand-500/10 transition-colors"
              >
                Demander un audit
              </Link>
              <Link
                href="/devis"
                className="block w-full text-center px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold transition-colors"
              >
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
