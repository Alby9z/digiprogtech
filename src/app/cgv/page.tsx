
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales de vente | Digiprogtech",
  description:
    "Consultez les conditions générales de vente des prestations web, SEO et maintenance proposées par Digiprogtech.",
};

const sections = [
  {
    title: "1. Objet et champ d’application",
    content: [
      "Les présentes conditions générales de vente encadrent les prestations proposées par Digiprogtech, notamment la création et la refonte de sites web, l’optimisation SEO, les audits et la maintenance.",
      "Toute commande implique l’acceptation des conditions applicables à la prestation concernée, sous réserve des dispositions légales impératives.",
    ],
  },
  {
    title: "2. Prestations proposées",
    content: [
      "Les prestations sont décrites sur le site et, lorsque nécessaire, précisées dans un devis personnalisé. Le périmètre, les livrables, les délais et les éventuelles options sont définis avant le démarrage du projet.",
      "Toute demande supplémentaire ou modification importante du périmètre initial peut faire l’objet d’un devis complémentaire.",
    ],
  },
  {
    title: "3. Prix et devis",
    content: [
      "À titre indicatif, les tarifs affichés sont les suivants : site vitrine à partir de 890 €, audit SEO à 49,95 € et maintenance web à 34,99 € par mois.",
      "Le prix applicable, les prestations incluses et les éventuels frais supplémentaires sont précisés dans le devis ou l’offre acceptée. Le traitement de la TVA doit être indiqué sur les documents commerciaux selon le régime applicable.",
      "Un devis accepté par le client constitue la référence pour la prestation commandée.",
    ],
  },
  {
    title: "4. Commande et démarrage",
    content: [
      "La commande est confirmée après acceptation du devis et, le cas échéant, règlement de l’acompte prévu sur celui-ci.",
      "Le client s’engage à transmettre dans des délais raisonnables les informations, contenus, accès et éléments nécessaires à la réalisation de la prestation.",
    ],
  },
  {
    title: "5. Modalités de paiement",
    content: [
      "Les échéances et moyens de paiement sont indiqués sur le devis ou la facture.",
      "Tout acompte, paiement intermédiaire ou solde dû doit respecter l’échéancier convenu entre les parties.",
    ],
  },
  {
    title: "6. Délais et obligations du client",
    content: [
      "Les délais de réalisation sont communiqués au client en fonction du projet et des éléments disponibles. Ils peuvent être ajustés lorsque des contenus, validations ou accès nécessaires sont transmis tardivement.",
      "Le client reste responsable de la légalité des contenus et documents qu’il fournit, ainsi que de l’obtention des autorisations nécessaires à leur utilisation.",
    ],
  },
  {
    title: "7. Livraison et validation",
    content: [
      "Les modalités de livraison, de recette et de validation sont définies dans le devis ou les échanges contractuels associés au projet.",
      "Les corrections incluses et leur périmètre, lorsqu’elles sont prévues, sont précisés dans l’offre acceptée. Les évolutions supplémentaires peuvent être facturées séparément.",
    ],
  },
  {
    title: "8. Retard de paiement",
    content: [
      "En cas de retard de paiement, les mesures applicables sont celles prévues par la réglementation et les documents contractuels remis au client.",
      "Pour les clients professionnels, les pénalités de retard et l’indemnité forfaitaire de recouvrement applicables sont mentionnées sur les factures conformément aux règles en vigueur.",
    ],
  },
  {
    title: "9. Propriété intellectuelle",
    content: [
      "Sauf stipulation contraire écrite, les conditions de cession ou de licence des créations, développements, maquettes et autres livrables sont précisées dans le devis ou le contrat.",
      "Les logiciels, bibliothèques, outils et éléments tiers restent soumis à leurs licences respectives.",
    ],
  },
  {
    title: "10. Responsabilité",
    content: [
      "Chaque partie s’engage à respecter ses obligations contractuelles. Digiprogtech ne garantit pas un classement précis dans les moteurs de recherche ni un résultat commercial déterminé, ces résultats dépendant notamment de facteurs externes.",
      "Les dispositions du présent article s’appliquent sous réserve des règles légales impératives applicables.",
    ],
  },
  {
    title: "11. Réclamations et règlement des différends",
    content: [
      "Toute question ou réclamation concernant une prestation peut être adressée à Digiprogtech à l’aide des coordonnées figurant sur le site et les documents commerciaux.",
      "En cas de différend, les parties chercheront une solution amiable avant d’entreprendre toute démarche, sans préjudice des droits dont elles disposent en vertu de la loi.",
    ],
  },
  {
    title: "12. Droit applicable",
    content: [
      "Les présentes conditions sont soumises au droit français, sous réserve des règles impératives applicables au client et au contrat concerné.",
    ],
  },
];

export default function CGVPage() {
  return (
    <main className="min-h-screen bg-charcoal-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-charcoal-900 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="mb-4 inline-flex rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-2 text-sm font-semibold text-brand-300">
            Informations contractuelles
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
            Conditions générales{" "}
            <span className="gradient-text">de vente</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Les conditions applicables aux prestations Digiprogtech :
            création web, référencement, optimisation et maintenance.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Version à valider avant publication commerciale.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8">
          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:sticky lg:top-24">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Sommaire
            </h2>
            <nav aria-label="Sommaire des conditions générales de vente">
              <ul className="space-y-3">
                {sections.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#cgv-${index + 1}`}
                      className="text-sm text-slate-300 transition-colors hover:text-brand-300"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="space-y-6">
            <div className="rounded-2xl border border-brand-400/20 bg-brand-400/5 p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-white">
                À propos de ces conditions
              </h2>
              <p className="mt-3 leading-7 text-slate-300">
                Ces conditions doivent être lues avec le devis, la facture
                et les éventuelles conditions particulières propres à chaque
                prestation. En cas de différence, les règles légales
                impératives prévalent.
              </p>
            </div>

            {sections.map((section, index) => (
              <article
                key={section.title}
                id={`cgv-${index + 1}`}
                className="scroll-mt-28 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-slate-300 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}

            <p className="px-2 text-sm leading-6 text-slate-500">
              Cette page est un projet de rédaction à vérifier et compléter
              avant publication. Les informations de l’entreprise, les
              modalités de paiement, les règles de rétractation applicables,
              les garanties et les dispositions propres aux consommateurs
              doivent être validées selon l’activité et le statut de Digiprogtech.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
