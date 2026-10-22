import Link from 'next/link'
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Github,
  ArrowRight,
} from 'lucide-react'
import Image from 'next/image'

const developmentLinks = [
  ['Site Statique', '/services/site-statique'],
  ['Site Dynamique', '/services/site-dynamique'],
  ['Refonte de site', '/services/refonte'],
  ['Optimisation', '/services/optimisation'],
]

const designLinks = [
  ['Logo & Identité', '/services/logo'],
  ['UI/UX Design', '/services/ui-ux'],
  ['Maquettes', '/services/maquettes'],
  ['Hébergement', '/services/hebergement'],
  ['Cloud', '/services/cloud'],
]


const companyLinks = [
  ['Qui sommes-nous', '/qui-sommes-nous'],
  ['Réalisations', '/realisations'],
  ['Tarifs', '/tarifs'],
  ['Devis gratuit', '/devis'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
  ['Mentions légales', '/mentions-legales'],
  ['Conditions générales de vente', '/cgv'],
  ['Conditions générales d’utilisation', '/cgu'],
  ['Confidentialité', '/politique-confidentialite'],
  ['Cookies', '/cookies'],
]


const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/digiprogtech/',
    Icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/brian-martin-8707a3444/',
    Icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/',
    Icon: Github,
  },
]

function FooterLinkList({
  links,
}: {
  links: string[][]
}) {
  return (
    <ul className="space-y-2">
      {links.map(([label, href]) => (
        <li key={href}>
          <Link
            href={href}
            className="group flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <ArrowRight
              size={10}
              aria-hidden="true"
              className="text-brand-400 opacity-0 transition-opacity group-hover:opacity-100"
            />
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contenu principal */}
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Identité et coordonnées */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label="Digiprogtech — Accueil"
              className="mb-4 flex items-center gap-2"
            >
              <div className="relative h-12 w-12 shrink-0">
              <Image
                src="/images/realisation/logo.png"
                alt="Logo Digiprogtech"
                width={48}
                height={48}
                className="h-full w-full object-contain"
                />
               </div>
              <span className="font-display text-xl font-bold text-white">
                Digiprog
                <span className="text-brand-400">tech</span>
              </span>
            </Link>

            <p className="mb-6 max-w-xs text-sm leading-relaxed text-slate-400">
              Expert digital global — développement web sur mesure, design
              impactant, audit et optimisation, sécurité avancée.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:digiprogtech@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <Mail
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 text-brand-400"
                />
                digiprogtech@gmail.com
              </a>

              <a
                href="tel:+33658951441"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <Phone
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 text-brand-400"
                />
                06 58 95 14 41
              </a>

              <div className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin
                  size={16}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-brand-400"
                />
                <span>France — Intervention nationale et internationale</span>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visiter le profil ${label} de Digiprogtech`}
                  title={label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-brand-500/30 hover:bg-brand-500/20 hover:text-brand-400"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Développement */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Développement
            </h3>

            <FooterLinkList links={developmentLinks} />
          </div>

          {/* Design et Cloud */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Design & Cloud
            </h3>

            <FooterLinkList links={designLinks} />
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Entreprise
            </h3>

            <FooterLinkList links={companyLinks} />
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-6 sm:flex-row">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Digiprogtech. Tous droits réservés.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/mentions-legales"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              Mentions légales
            </Link>

            <Link
              href="/politique-confidentialite"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              Confidentialité
            </Link>

            <Link
              href="/cookies"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}