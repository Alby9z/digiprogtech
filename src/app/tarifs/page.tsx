import Link from 'next/link'
import { ArrowRight, Check, Sparkles } from 'lucide-react'

const offers = [
  {
    id: 'vitrine',
    name: 'Site vitrine',
    price: '890 €',
    description:
      'Une présence professionnelle pour présenter votre activité, valoriser vos services et faciliter les prises de contact.',
    features: [
      'Design adapté à votre identité',
      'Affichage mobile et ordinateur',
      'Pages définies selon vos besoins',
      'Optimisation SEO de base',
      'Formulaire de contact',
    ],
    featured: false,
  },
  {
    id: 'seo',
    name: 'Audit SEO',
    price: '49,95 €',
    description:
      'Identifiez les points à améliorer pour renforcer la visibilité, la qualité technique et les performances de votre site.',
    features: [
      'Analyse technique et SEO',
      'Vérification des performances',
      'Identification des problèmes prioritaires',
      'Recommandations classées par priorité',
      'Rapport adapté à votre site',
    ],
    featured: true,
  },
  {
    id: 'maintenance',
    name: 'Maintenance web',
    price: '34,99 €',
    suffix: '/mois',
    description:
      'Un accompagnement technique pour contribuer au bon fonctionnement et à la pérennité de votre site.',
    features: [
      'Suivi selon la formule choisie',
      'Mises à jour prévues au contrat',
      'Contrôles techniques périodiques',
      'Assistance selon les conditions définies',
      'Sauvegardes selon la formule retenue',
    ],
    featured: false,
  },
]

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-dark-900 pt-32 pb-24 text-white">
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* En-tête */}
        <header className="mx-auto mb-16 max-w-4xl text-center sm:mb-20">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-brand-400">
            Nos tarifs
          </p>

          <h1 className="mb-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Des solutions web adaptées à{' '}
            <span className="text-brand-400">vos besoins</span>
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Création de sites, référencement et maintenance : découvrez nos
            offres de départ. Chaque projet fait l’objet d’un échange pour
            définir précisément vos besoins et établir un devis personnalisé.
          </p>
        </header>

        {/* Cartes tarifaires */}
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {offers.map((offer) => (
            <article
              key={offer.id}
              className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
                offer.featured
                  ? 'border-brand-400/60 bg-brand-500/[0.07] shadow-xl shadow-brand-500/10'
                  : 'border-white/10 bg-white/[0.025] hover:border-brand-400/30'
              }`}
            >
              {offer.featured && (
                <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-2 text-xs font-semibold text-brand-300">
                  <Sparkles size={14} />
                  Offre accessible
                </div>
              )}

              <h2 className="mb-4 text-2xl font-bold">{offer.name}</h2>

              <p className="mb-8 min-h-0 leading-7 text-slate-300">
                {offer.description}
              </p>

              <div className="mb-8 border-b border-white/10 pb-8">
                <p className="mb-2 text-sm text-slate-400">Tarif indicatif</p>

                <p className="text-4xl font-bold tracking-tight text-white">
                  {offer.price}
                  {'suffix' in offer && (
                    <span className="ml-1 text-base font-medium text-slate-400">
                      {offer.suffix}
                    </span>
                  )}
                </p>
              </div>

              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-slate-300">
                Ce qui est prévu
              </h3>

              <ul className="mb-10 flex-1 space-y-4">
                {offer.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-400">
                      <Check size={13} strokeWidth={3} />
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/devis?service=${encodeURIComponent(offer.name)}`}
                className={`mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-center font-semibold transition-all ${
                  offer.featured
                    ? 'bg-brand-500 text-white hover:bg-brand-400'
                    : 'border border-white/15 bg-white/[0.04] text-white hover:border-brand-400/50 hover:bg-brand-500/10'
                }`}
              >
                Demander un devis
                <ArrowRight size={17} />
              </Link>
            </article>
          ))}
        </div>

        {/* Offre personnalisée */}
        <section className="mt-20 rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-12 text-center sm:mt-24 sm:px-12 sm:py-16">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-400">
            Un besoin particulier ?
          </p>

          <h2 className="mb-5 text-2xl font-bold sm:text-3xl">
            Construisons une solution sur mesure
          </h2>

          <p className="mx-auto mb-9 max-w-2xl leading-7 text-slate-300">
            Vous avez un projet spécifique ou des besoins qui ne correspondent
            pas à nos offres ? Parlons de votre activité et trouvons ensemble
            la solution adaptée.
          </p>

          <Link
            href="/devis"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-3 font-semibold text-white transition-all hover:from-brand-400 hover:to-brand-500"
          >
            Parler de mon projet
            <ArrowRight size={17} />
          </Link>
        </section>

        <p className="mt-8 text-center text-xs leading-6 text-slate-500">
          Les tarifs affichés sont indicatifs. Le prix définitif dépend des
          besoins, du périmètre et des fonctionnalités de chaque projet.
        </p>
      </section>
    </main>
  )
}