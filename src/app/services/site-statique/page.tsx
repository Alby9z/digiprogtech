import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Zap, Globe, Shield, TrendingUp, CheckCircle2, Code2, Search, Smartphone } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'Création Site Web Statique (Vitrine)',
  description: 'Création de sites web statiques ultra-rapides avec Next.js. Sites vitrines performants, SEO optimisés, sécurisés. Devis gratuit.',
}

const avantages = [
  { icon: <Zap size={20} />, title: 'Ultra-rapide', desc: 'Chargement < 1s, score Lighthouse > 95. Pages pré-générées pour une rapidité maximale.' },
  { icon: <Shield size={20} />, title: 'Sécurité maximale', desc: 'Aucune base de données exposée. Surface d\'attaque minimale. HTTPS inclus.' },
  { icon: <Search size={20} />, title: 'SEO optimal', desc: 'HTML pré-rendu favorisé par Google. Sitemap, balises OG, schema.org automatisés.' },
  { icon: <TrendingUp size={20} />, title: 'Coût réduit', desc: 'Hébergement économique sur Vercel ou Netlify. Maintenance simplifiée.' },
  { icon: <Smartphone size={20} />, title: 'Mobile-first', desc: 'Design responsive parfait sur tous les appareils, tablettes et mobiles.' },
  { icon: <Globe size={20} />, title: 'Disponibilité 99.9%', desc: 'CDN mondial, déploiement distribué. Votre site toujours en ligne.' },
]

const techStack = ['Next.js 14', 'React 18', 'Tailwind CSS', 'TypeScript', 'Vercel CDN', 'Framer Motion']

const inclus = [
  'Maquette Figma incluse',
  'Design responsive mobile-first',
  'Optimisation SEO complète',
  'Certificat SSL / HTTPS',
  'Formulaire de contact',
  'Intégration Google Analytics',
  'Vitesse optimisée (< 1s)',
  'Livrables complets + code source',
  'Formation à l\'utilisation',
  '3 mois de support inclus',
]

const packs = [
  {
    name: 'Essentiel',
    price: 'À partir de 890€',
    desc: 'Idéal pour lancer votre activité',
    features: ['5 pages', 'Design sur mesure', 'SEO de base', 'SSL + Hébergement 1 an', 'Support 1 mois'],
  },
  {
    name: 'Professionnel',
    price: 'À partir de 1 890€',
    desc: 'Pour une présence impactante',
    features: ['10 pages', 'Design premium', 'SEO avancé', 'Blog intégré', 'Formulaires avancés', 'Support 3 mois'],
    highlighted: true,
  },
  {
    name: 'Sur Mesure',
    price: 'Devis personnalisé',
    desc: 'Pour des besoins spécifiques',
    features: ['Pages illimitées', 'Fonctionnalités custom', 'Intégrations API', 'CMS headless', 'Support 6 mois'],
  },
]

export default function SiteStatiquePage() {
  return (
    <>
      <PageHero
        badge="🚀 Site Web Statique"
        title="Sites vitrines"
        highlight="ultra-performants"
        description="Obtenez un site vitrine qui charge en moins d'une seconde, se positionne en tête de Google et convertit vos visiteurs en clients. Développé avec Next.js & React."
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">
            Demander un devis <ArrowRight size={16} />
          </Link>
          <Link href="/audit" className="inline-flex items-center gap-2 px-8 py-4 glass border border-white/15 hover:border-brand-500/40 text-slate-300 hover:text-white font-semibold rounded-xl transition-all">
            Audit de l'existant
          </Link>
        </div>
      </PageHero>

      {/* Avantages */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Pourquoi choisir un site statique ?" title="Les avantages" highlight="incomparables" description="Un site statique moderne n'est pas un site basique — c'est la technologie la plus performante qui existe aujourd'hui." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avantages.map((a) => (
              <div key={a.title} className="glass rounded-2xl p-6 border border-white/8 hover:border-brand-500/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand-500/15 flex items-center justify-center text-brand-400 mb-4">{a.icon}</div>
                <h3 className="font-display font-semibold text-white mb-2">{a.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/3 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle badge="Inclus dans chaque projet" title="Tout ce qu'il vous faut," highlight="rien de superflu" center={false} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {inclus.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-brand-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl border border-white/10 p-8">
              <h3 className="font-display font-semibold text-white mb-6">Stack technologique</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium">{tech}</span>
                ))}
              </div>
              <div className="mt-8 p-4 bg-brand-500/5 rounded-xl border border-brand-500/15">
                <div className="text-xs text-brand-400 font-mono mb-2">// Performance garantie</div>
                <div className="space-y-2">
                  {[['Lighthouse Score', '95+/100'], ['Temps de chargement', '< 1 seconde'], ['Core Web Vitals', 'Tous au vert']].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-sm">
                      <span className="text-slate-400">{k}</span>
                      <span className="text-white font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Nos formules" title="Choisissez votre" highlight="pack" description="Des formules transparentes adaptées à chaque budget. Tous les prix incluent la conception, le développement et la mise en ligne." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packs.map((pack) => (
              <div key={pack.name} className={`glass rounded-2xl p-8 border transition-colors ${pack.highlighted ? 'border-brand-500/40 glow-blue' : 'border-white/8 hover:border-brand-500/20'}`}>
                {pack.highlighted && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-medium mb-4">
                    ⭐ Recommandé
                  </div>
                )}
                <h3 className="font-display font-bold text-xl text-white mb-1">{pack.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{pack.desc}</p>
                <div className="font-display font-bold text-2xl text-brand-400 mb-6">{pack.price}</div>
                <ul className="space-y-3 mb-8">
                  {pack.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={14} className="text-brand-400" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/devis" className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all ${pack.highlighted ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:opacity-90' : 'glass border border-white/15 hover:border-brand-500/30 text-slate-300 hover:text-white'}`}>
                  Choisir ce pack <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Prêt à lancer votre site vitrine ?</h2>
          <p className="text-slate-400 mb-8">Devis gratuit et sans engagement sous 24h. Nos experts analysent votre projet et vous proposent la meilleure solution.</p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">
            Demander mon devis gratuit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
