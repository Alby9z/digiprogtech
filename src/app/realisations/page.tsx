import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  ShoppingBag,
  Search,
  Layers3,
} from 'lucide-react'

const projects = [
    {
  title: 'Toitures Christophe',
  category: 'Site vitrine',
  description:
    'Création d’un site vitrine professionnel pour un artisan couvreur intervenant dans le Haut-Rhin et les départements voisins. Présentation des prestations de couverture, zinguerie et étanchéité, mise en avant des certifications et prise de contact pour les devis gratuits.',
  image: '/images/realisation/toitures-christophe.png',
  alt: 'Aperçu du site Toitures Christophe, artisan couvreur dans le Haut-Rhin',
  tags: ['Next.js', 'Site vitrine', 'Design sur mesure', 'Responsive'],
  href: 'https://toiturechristophe.vercel.app/',
  status: 'Projet client',
},
  {
    title: 'AKN Confiserie',
    category: 'E-commerce',
    description:
      'Une boutique en ligne dédiée à la confiserie, avec catalogue produits, panier et parcours de commande.',
    image: '/images/realisation/akn-confiserie.png',
    alt: 'Aperçu du site AKN Confiserie',
    tags: ['Next.js', 'E-commerce', 'Stripe'],
    href: 'https://github.com/Alby9z/akn-confiserie',
    status: 'Projet développé',
  },
  {
    title: 'Garage GMT 90',
    category: 'Site vitrine',
    description:
      'Un site professionnel conçu pour présenter les services du garage et faciliter la prise de contact.',
    image: '/images/realisation/garage-gmt-90.png',
    alt: 'Aperçu du site Garage GMT 90',
    tags: ['Site vitrine', 'SEO', 'Responsive'],
    href: '',
    status: 'Projet client',
  },
  {
  title: 'Chucho',
  category: 'Site vitrine',
  description:
    'Un site vitrine professionnel dédié aux petits travaux, au jardinage, aux espaces verts, à l’aménagement extérieur et au nettoyage.',
  image: '/images/realisation/chucho.png',
  alt: 'Aperçu du site Chucho',
  tags: ['Site vitrine', 'Responsive', 'SEO'],
  href: 'https://chucho-gamma.vercel.app',
  status: 'Projet client',
},
  {
  title: 'KVC Nuisibles',
  category: 'Site vitrine',
  description:
    'Un site professionnel dédié à la présentation des services de KVC Nuisibles, pour valoriser son activité et permettre aux clients de prendre contact facilement.',
  image: '/images/realisation/kvc.png',
  alt: 'Aperçu du site KVC Nuisibles',
  tags: ['Next.js', 'Site vitrine', 'SEO'],
  href: 'https://kvc-nuisibles.fr',
  status: 'Projet client',
},
]

const categories = [
  {
    title: 'Sites vitrines',
    description:
      'Des sites professionnels pour présenter une activité et transformer les visites en prises de contact.',
    icon: Code2,
  },
  {
    title: 'E-commerce',
    description:
      'Des boutiques en ligne pensées pour présenter les produits et simplifier le parcours d’achat.',
    icon: ShoppingBag,
  },
  {
    title: 'SEO & performance',
    description:
      'Des optimisations techniques pour améliorer la vitesse, la structure et la visibilité des sites.',
    icon: Search,
  },
]

export default function RealisationsPage() {
  return (
    <main className="min-h-screen bg-dark-900 pb-24 pt-32 text-white">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-400">
            <Layers3 size={16} />
            NOS RÉALISATIONS
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Des projets web conçus
            <span className="mt-2 block bg-gradient-to-r from-brand-400 to-orange-400 bg-clip-text text-transparent">
              pour faire la différence.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Découvrez les projets développés par Digiprogtech : sites vitrines,
            solutions e-commerce et optimisation web. Chaque projet répond à
            des objectifs concrets.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/devis"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              Parler de mon projet
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-brand-400/50 hover:bg-white/5"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-400">
              NOTRE PORTFOLIO
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Nos projets récents
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-slate-400">
            Une sélection de projets et de réalisations liés à notre activité.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-xl hover:shadow-brand-500/5"
            >
              {/* Aperçu du projet */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-dark-900/90 px-3 py-1.5 text-xs font-semibold text-brand-400 backdrop-blur">
                  {project.category}
                </span>
              </div>

              {/* Informations */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold transition-colors group-hover:text-brand-400">
                    {project.title}
                  </h3>

                  <span className="shrink-0 rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-400">
                    {project.status}
                  </span>
                </div>

                <p className="mb-6 flex-1 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.href ? (
                  <Link
                    href={project.href}
                    target={project.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      project.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-brand-400"
                  >
                    {project.href.startsWith('http')
                      ? 'Voir le projet'
                      : 'Visiter le site'}
                    <ExternalLink size={16} />
                  </Link>
                ) : (
                  <span className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-400">
                    Projet client — lien à ajouter
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm leading-6 text-slate-500">
          Certains liens et aperçus sont à compléter avec les adresses publiques
          et les captures réelles des projets.
        </p>
      </section>

      {/* EXPERTISES */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-400">
            NOS EXPERTISES
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Des solutions adaptées à chaque besoin
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Du premier écran à la mise en ligne, nous construisons des
            expériences web adaptées à votre activité et à vos objectifs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-brand-400/30"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                <Icon size={23} />
              </div>

              <h3 className="mb-3 text-xl font-bold">{title}</h3>

              <p className="leading-7 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-400/20 bg-gradient-to-br from-brand-500/10 via-white/[0.03] to-orange-400/5 px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-400">
            VOTRE PROJET
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold sm:text-4xl">
            Et si le prochain projet était le vôtre ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Présentez-nous votre idée. Nous étudierons vos besoins pour vous
            proposer une solution adaptée à votre activité et à votre budget.
          </p>

          <Link
            href="/devis"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-500 px-7 py-3 font-semibold text-white transition hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            Demander un devis gratuit
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}