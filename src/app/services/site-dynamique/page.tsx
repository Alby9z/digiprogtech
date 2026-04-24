import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Database, Users, RefreshCw, Lock, BarChart3, Layers, CheckCircle2, Code2 } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'Création Site Web Dynamique — Application Web Sur Mesure',
  description: 'Développement d\'applications web dynamiques : e-commerce, portails, SaaS, dashboards. Next.js, React, API. Devis gratuit.',
}

const useCases = [
  { icon: <Database size={20} />, title: 'E-commerce & Boutiques', desc: 'Boutiques en ligne, catalogues produits, paiement sécurisé, gestion de stocks.' },
  { icon: <Users size={20} />, title: 'Portails & Espaces membres', desc: 'Authentification, profils utilisateurs, contenus privés, abonnements.' },
  { icon: <BarChart3 size={20} />, title: 'Dashboards & SaaS', desc: 'Tableaux de bord interactifs, analytics temps réel, applications métier.' },
  { icon: <RefreshCw size={20} />, title: 'Plateformes & Marketplaces', desc: 'Mise en relation, réservations, multi-vendeurs, gestion de transactions.' },
  { icon: <Lock size={20} />, title: 'CRM & Outils internes', desc: 'Gestion clients, workflows automatisés, intégrations API tierces.' },
  { icon: <Layers size={20} />, title: 'Blogs & CMS personnalisés', desc: 'Gestion de contenu avancée, rôles d\'éditeurs, médias et SEO dynamique.' },
]

const techStack = [
  { cat: 'Frontend', items: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS'] },
  { cat: 'Backend', items: ['Node.js', 'Prisma ORM', 'tRPC / REST API', 'GraphQL'] },
  { cat: 'Base de données', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'] },
  { cat: 'Auth & Cloud', items: ['NextAuth.js', 'Clerk', 'Vercel', 'AWS S3'] },
]

const process = [
  { step: '01', title: 'Analyse & Cahier des charges', desc: 'Nous définissons ensemble vos besoins fonctionnels, vos utilisateurs cibles et vos objectifs business.' },
  { step: '02', title: 'Architecture & Maquettes', desc: 'Conception de l\'architecture technique et des wireframes / maquettes Figma pour validation.' },
  { step: '03', title: 'Développement agile', desc: 'Développement itératif avec démos régulières. Vous suivez l\'avancement en temps réel.' },
  { step: '04', title: 'Tests & Déploiement', desc: 'Tests complets (unitaires, intégration, E2E), déploiement CI/CD et mise en production.' },
  { step: '05', title: 'Formation & Support', desc: 'Formation à l\'utilisation, documentation technique et support continu post-lancement.' },
]

export default function SiteDynamiquePage() {
  return (
    <>
      <PageHero
        badge="⚡ Application Web Dynamique"
        title="Applications web"
        highlight="sur mesure"
        description="Des applications web puissantes et évolutives, pensées pour votre métier. E-commerce, SaaS, portails membres, dashboards — nous développons la solution exacte dont vous avez besoin."
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">
            Discuter de mon projet <ArrowRight size={16} />
          </Link>
          <Link href="/services/site-statique" className="inline-flex items-center gap-2 px-8 py-4 glass border border-white/15 hover:border-brand-500/40 text-slate-300 hover:text-white font-semibold rounded-xl transition-all">
            Voir site statique
          </Link>
        </div>
      </PageHero>

      {/* Différence statique/dynamique */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6 border border-white/8">
              <div className="text-slate-400 text-xs font-mono mb-3">// Site statique</div>
              <h3 className="font-display font-semibold text-white mb-2">Site statique</h3>
              <p className="text-sm text-slate-400 mb-4">Pages fixes pré-générées. Idéal pour sites vitrines, blogs, portfolios.</p>
              <div className="space-y-1">
                {['✅ Ultra-rapide', '✅ SEO optimal', '✅ Coût d\'hébergement minimal', '❌ Pas de compte utilisateur', '❌ Contenu non interactif'].map(f => (
                  <div key={f} className="text-xs text-slate-400">{f}</div>
                ))}
              </div>
              <Link href="/services/site-statique" className="mt-4 inline-flex items-center gap-1 text-sm text-brand-400 hover:text-brand-300 transition-colors">
                En savoir plus <ArrowRight size={12} />
              </Link>
            </div>
            <div className="glass rounded-2xl p-6 border border-brand-500/30 glow-blue">
              <div className="text-brand-400 text-xs font-mono mb-3">// Site dynamique ← Vous êtes ici</div>
              <h3 className="font-display font-semibold text-white mb-2">Application dynamique</h3>
              <p className="text-sm text-slate-400 mb-4">Contenu interactif en temps réel. Idéal pour e-commerce, SaaS, membres.</p>
              <div className="space-y-1">
                {['✅ Comptes utilisateurs', '✅ Données en temps réel', '✅ Interactions avancées', '✅ Base de données', '✅ Évolutif sans limite'].map(f => (
                  <div key={f} className="text-xs text-slate-300">{f}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Applications possibles" title="Ce que nous" highlight="développons pour vous" description="Chaque projet est unique. Voici les types d'applications que nous réalisons avec expertise." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((u) => (
              <div key={u.title} className="glass rounded-2xl p-6 border border-white/8 hover:border-brand-500/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand-500/15 flex items-center justify-center text-brand-400 mb-4">{u.icon}</div>
                <h3 className="font-display font-semibold text-white mb-2">{u.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/3 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Notre processus" title="De l'idée à la" highlight="mise en ligne" description="Un processus éprouvé qui garantit un projet livré dans les délais, dans le budget, et au-delà de vos attentes." />
          <div className="space-y-6">
            {process.map((p, i) => (
              <div key={p.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-brand-500/15 border border-brand-500/20 flex items-center justify-center font-mono font-bold text-brand-400 flex-shrink-0 text-sm">
                  {p.step}
                </div>
                <div className="glass rounded-xl p-5 border border-white/6 flex-1 hover:border-brand-500/15 transition-colors">
                  <h3 className="font-display font-semibold text-white mb-1">{p.title}</h3>
                  <p className="text-sm text-slate-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Technologies" title="Stack moderne &" highlight="éprouvé" description="Nous utilisons les meilleures technologies du marché pour des applications fiables et évolutives." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((cat) => (
              <div key={cat.cat} className="glass rounded-2xl p-5 border border-white/8">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{cat.cat}</h3>
                <div className="space-y-2">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Votre projet est unique. Notre approche aussi.</h2>
          <p className="text-slate-400 mb-8">Parlez-nous de votre projet lors d'un appel découverte gratuit de 30 minutes. Nous vous proposons ensuite une architecture et un devis personnalisés.</p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">
            Démarrer mon projet <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
