import { Metadata } from 'next'
export const metadata: Metadata = { title: 'Politique de Cookies', description: 'Politique de cookies et gestion des préférences — Digiprogtech.' }
export default function CookiesPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-bold text-4xl text-white mb-10">Politique de Cookies</h1>
        <div className="space-y-6">
          {[
            { title: 'Qu\'est-ce qu\'un cookie ?', content: 'Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d\'un site web. Il permet de mémoriser des informations sur votre navigation.' },
            { title: 'Cookies techniques (essentiels)', content: 'Ces cookies sont nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés. Ils permettent notamment de mémoriser vos préférences de navigation et d\'assurer la sécurité du site.', badge: 'Toujours actifs' },
            { title: 'Cookies analytiques', content: 'Nous utilisons Google Analytics pour comprendre comment vous utilisez notre site. Ces données sont anonymisées et nous aident à améliorer notre service. Ces cookies ne sont activés qu\'avec votre consentement.', badge: 'Avec consentement' },
            { title: 'Gestion de vos préférences', content: 'Vous pouvez modifier vos préférences de cookies à tout moment en cliquant sur "Gérer les cookies" dans le pied de page, ou en configurant votre navigateur pour refuser tous les cookies.' },
            { title: 'Durée de conservation', content: 'Les cookies analytiques sont conservés 13 mois maximum. Les cookies techniques persistent selon leur nature (session ou jusqu\'à 1 an).' },
          ].map(s => (
            <div key={s.title} className="glass rounded-xl p-6 border border-white/6">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="font-display font-semibold text-lg text-white">{s.title}</h2>
                {s.badge && <span className="px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-400 text-xs">{s.badge}</span>}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
