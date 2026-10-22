
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d’utilisation | Digiprogtech",
  description:
    "Consultez les conditions d’utilisation du site Digiprogtech : accès, contenus, propriété intellectuelle, responsabilités et données personnelles.",
};

const sections = [
  {
    title: "1. Objet",
    content: [
      "Les présentes conditions générales d’utilisation (CGU) définissent les règles d’accès et d’utilisation du site Digiprogtech.",
      "En naviguant sur le site, l’utilisateur est invité à prendre connaissance de ces conditions et des informations légales accessibles depuis le site.",
    ],
  },
  {
    title: "2. Accès au site",
    content: [
      "Le site est accessible gratuitement, hors frais de connexion et d’équipement qui restent à la charge de l’utilisateur.",
      "Digiprogtech s’efforce de maintenir le site accessible. Toutefois, l’accès peut être temporairement interrompu pour des opérations de maintenance, des mises à jour ou des raisons indépendantes de sa volonté.",
    ],
  },
  {
    title: "3. Présentation des services",
    content: [
      "Le site présente notamment des prestations de création de sites web, de refonte, de référencement naturel, d’audit, de design et de maintenance.",
      "Les informations publiées sont fournies à titre informatif. Une prestation n’est commandée que selon les modalités convenues avec Digiprogtech, notamment par devis ou accord contractuel.",
    ],
  },
  {
    title: "4. Utilisation du site",
    content: [
      "L’utilisateur s’engage à utiliser le site conformément à la législation applicable et à ne pas porter atteinte à son fonctionnement, à sa sécurité ou aux droits de tiers.",
      "Il est notamment interdit de tenter d’accéder sans autorisation aux systèmes, données ou espaces protégés, d’introduire un code malveillant ou d’utiliser le site à des fins frauduleuses.",
    ],
  },
  {
    title: "5. Propriété intellectuelle",
    content: [
      "Sauf indication contraire, les éléments du site — notamment les textes, éléments graphiques, logos, mises en page et contenus — sont protégés par les règles applicables en matière de propriété intellectuelle.",
      "Toute reproduction, représentation, adaptation ou exploitation non autorisée de ces éléments est interdite, sauf exception prévue par la loi ou autorisation préalable du titulaire des droits.",
    ],
  },
  {
    title: "6. Formulaires et demandes de contact",
    content: [
      "Lorsque l’utilisateur transmet une demande par formulaire ou par un moyen de contact proposé sur le site, il s’engage à fournir des informations exactes et à ne pas transmettre de contenu illicite.",
      "L’envoi d’une demande de contact ou de devis ne constitue pas, à lui seul, une acceptation de commande ni un engagement de réalisation d’une prestation.",
    ],
  },
  {
    title: "7. Liens vers des sites tiers",
    content: [
      "Le site peut contenir des liens vers des sites ou services tiers. Ces liens sont proposés à titre pratique ou informatif.",
      "Digiprogtech ne contrôle pas nécessairement ces sites tiers et ne peut garantir leur disponibilité, leur contenu ou leurs pratiques. L’utilisateur consulte ces sites sous sa propre responsabilité.",
    ],
  },
  {
    title: "8. Disponibilité et responsabilité",
    content: [
      "Digiprogtech s’efforce de fournir des informations actualisées et de maintenir le bon fonctionnement du site, sans garantir l’absence d’erreurs, d’interruptions ou d’anomalies.",
      "L’utilisateur reste responsable de son équipement, de sa connexion et de l’usage qu’il fait des informations consultées. Le présent article s’applique sous réserve des dispositions légales impératives.",
    ],
  },
  {
    title: "9. Données personnelles et cookies",
    content: [
      "Le traitement éventuel des données personnelles est décrit dans la politique de confidentialité du site.",
      "Les informations relatives aux cookies et aux technologies similaires sont présentées dans la page dédiée aux cookies, lorsqu’elle est applicable.",
    ],
  },
  {
    title: "10. Évolution des conditions",
    content: [
      "Digiprogtech peut modifier les présentes CGU afin de tenir compte des évolutions du site, de ses services ou du cadre légal.",
      "La version publiée sur cette page est celle destinée à être consultée par les utilisateurs. Il leur est conseillé de la consulter régulièrement.",
    ],
  },
  {
    title: "11. Droit applicable",
    content: [
      "Les présentes conditions sont soumises au droit français, sous réserve des règles impératives applicables.",
      "En cas de difficulté, les parties sont invitées à rechercher une solution amiable avant toute démarche contentieuse, sans préjudice des droits dont elles disposent en vertu de la loi.",
    ],
  },
];

export default function CGUPage() {
  return (
    <main className="min-h-screen bg-charcoal-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-charcoal-900 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="mb-4 inline-flex rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-2 text-sm font-semibold text-brand-300">
            Informations du site
          </span>

          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
            Conditions générales{" "}
            <span className="gradient-text">d’utilisation</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Les règles d’accès et d’utilisation du site Digiprogtech,
            de ses contenus et des fonctionnalités proposées.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Version à vérifier avant publication.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8">
          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:sticky lg:top-24">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Sommaire
            </h2>

            <nav aria-label="Sommaire des conditions générales d’utilisation">
              <ul className="space-y-3">
                {sections.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#cgu-${index + 1}`}
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
                Utilisation responsable
              </h2>
              <p className="mt-3 leading-7 text-slate-300">
                L’utilisation du site implique le respect des lois
                applicables, des droits de tiers et des règles de sécurité.
                Les conditions particulières d’une prestation commandée
                restent définies dans les documents contractuels concernés.
              </p>
            </div>

            {sections.map((section, index) => (
              <article
                key={section.title}
                id={`cgu-${index + 1}`}
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
              Cette page doit être vérifiée au regard du fonctionnement réel
              du site, de ses formulaires, de ses outils de mesure d’audience
              et de ses traitements de données avant publication.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
