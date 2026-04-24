import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCard from '@/components/ui/ServiceCard'
import { Code2, Zap, RefreshCw, TrendingUp } from 'lucide-react'
export const metadata: Metadata = { title: 'Développement Web Sur Mesure — Next.js React', description: 'Développement web professionnel : sites statiques, applications dynamiques, refonte, optimisation. Next.js, React, TypeScript.' }
const subs = [
  { icon: <Code2 size={20}/>, title: 'Site Statique (Vitrine)', description: 'Pages ultra-rapides pré-générées. SEO optimal et hébergement économique.', href: '/services/site-statique', features: ['< 1s de chargement','SEO natif','Hébergement CDN'] },
  { icon: <Zap size={20}/>, title: 'Site Dynamique', description: 'Applications web interactives avec base de données, authentification, temps réel.', href: '/services/site-dynamique', features: ['E-commerce','Espace membres','Dashboard'] },
  { icon: <RefreshCw size={20}/>, title: 'Refonte de Site', description: 'Modernisation complète de votre site existant : design, code et performances.', href: '/services/refonte', features: ['Migration sécurisée','0 perte SEO','Design moderne'] },
  { icon: <TrendingUp size={20}/>, title: 'Optimisation Performance', description: 'Boostez votre Lighthouse score et vos Core Web Vitals pour plus de trafic.', href: '/services/optimisation', features: ['Score 95+','Core Web Vitals','Conversion +200%'] },
]
export default function DevWebPage() {
  return (<>
    <PageHero badge="💻 Développement Web" title="Sites & Applications" highlight="qui performent" description="De la vitrine rapide à l'application complexe, nous développons avec les meilleures technologies du marché. Next.js, React, TypeScript — pour des résultats mesurables.">
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Démarrer mon projet <ArrowRight size={16}/></Link>
      </div>
    </PageHero>
    <section className="py-24"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle badge="Nos spécialités" title="Choisissez votre" highlight="solution" description="Chaque projet est unique. Voici nos quatre expertises principales en développement web." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{subs.map(s => <ServiceCard key={s.href} {...s} />)}</div>
    </div></section>
  </>)
}
