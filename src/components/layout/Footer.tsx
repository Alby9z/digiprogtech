import Link from 'next/link'
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-display font-bold text-sm">D</div>
              <span className="font-display font-bold text-xl text-white">Digiprog<span className="text-brand-400">tech</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Expert digital global — développement web sur mesure, design impactant, audit & optimisation, sécurité avancée.
            </p>
            <div className="space-y-2">
              <a href="mailto:contact@digiprogtech.fr" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <Mail size={14} className="text-brand-400" /> contact@digiprogtech.fr
              </a>
              <a href="tel:+33123456789" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <Phone size={14} className="text-brand-400" /> +33 1 23 45 67 89
              </a>
              <span className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin size={14} className="text-brand-400" /> France — Intervention nationale & internationale
              </span>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-500/20 border border-white/10 hover:border-brand-500/30 flex items-center justify-center text-slate-400 hover:text-brand-400 transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Dev */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Développement</h3>
            <ul className="space-y-2">
              {[
                ['Site Statique', '/services/site-statique'],
                ['Site Dynamique', '/services/site-dynamique'],
                ['Refonte de site', '/services/refonte'],
                ['Optimisation', '/services/optimisation'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-400" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Design */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Design & Cloud</h3>
            <ul className="space-y-2">
              {[
                ['Logo & Identité', '/services/logo'],
                ['UI/UX Design', '/services/ui-ux'],
                ['Maquettes', '/services/maquettes'],
                ['Hébergement', '/services/hebergement'],
                ['Cloud', '/services/cloud'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-400" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {[
                ['Qui sommes-nous', '/qui-sommes-nous'],
                ['Audit de site', '/audit'],
                ['Devis gratuit', '/devis'],
                ['Blog', '/blog'],
                ['Contact', '/contact'],
                ['Mentions légales', '/mentions-legales'],
                ['Confidentialité', '/politique-confidentialite'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-400" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Digiprogtech. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/mentions-legales" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Confidentialité</Link>
            <Link href="/cookies" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
