import { Metadata } from 'next'
export const metadata: Metadata = { title: 'Politique de Confidentialité', description: 'Politique de confidentialité et protection des données personnelles — Digiprogtech.' }
export default function PolitiqueConfidentialitePage() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-bold text-4xl text-white mb-4">Politique de Confidentialité</h1>
        <p className="text-slate-400 mb-10">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {day:'numeric',month:'long',year:'numeric'})}</p>
        <div className="space-y-6">
          {[
            { title: 'Données collectées', content: 'Nous collectons uniquement les données que vous nous transmettez volontairement via nos formulaires de contact, de devis ou d\'audit : nom, prénom, adresse email, numéro de téléphone, et informations relatives à votre projet.' },
            { title: 'Finalité du traitement', content: 'Vos données sont collectées pour : répondre à vos demandes de contact, établir des devis, réaliser des audits commandés, envoyer notre newsletter (avec votre consentement), et améliorer nos services.' },
            { title: 'Base légale', content: 'Le traitement de vos données est fondé sur votre consentement et/ou l\'exécution d\'un contrat. Vous pouvez retirer votre consentement à tout moment.' },
            { title: 'Durée de conservation', content: 'Vos données sont conservées pendant 3 ans à compter de notre dernier contact, sauf obligation légale contraire.' },
            { title: 'Vos droits (RGPD)', content: 'Conformément au RGPD, vous disposez des droits d\'accès, de rectification, d\'effacement, de limitation, de portabilité et d\'opposition. Pour exercer ces droits, contactez-nous à : digiprogtech@gmail.com' },
            { title: 'Cookies', content: 'Notre site utilise des cookies techniques nécessaires au fonctionnement, et des cookies analytiques (avec votre consentement). Voir notre politique de cookies pour plus d\'informations.' },
            { title: 'Contact DPO', content: 'Pour toute question relative à vos données personnelles : digiprogtech@gmail.com' },
          ].map(s => (
            <div key={s.title} className="glass rounded-xl p-6 border border-white/6">
              <h2 className="font-display font-semibold text-lg text-white mb-3">{s.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
