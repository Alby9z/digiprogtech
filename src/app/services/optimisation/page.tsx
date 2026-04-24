import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Zap, TrendingUp, BarChart3 } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
export const metadata: Metadata = { title: 'Optimisation Performance Web — Core Web Vitals', description: 'Optimisez votre site web : vitesse de chargement, Core Web Vitals, Lighthouse 95+. Résultats mesurables garantis.' }
const metriques = [['Lighthouse Score','< 50 → 95+'],['LCP (chargement)','> 4s → < 1.5s'],['CLS (stabilité)','> 0.25 → < 0.1'],['FID (interaction)','> 300ms → < 50ms'],['Taille page','−60% en moyenne'],['Taux de conversion','+150 à +300%']]
const actions = ['Audit complet des performances actuelles','Compression & optimisation des images (WebP/AVIF)','Lazy loading et code splitting','Minification CSS/JS/HTML','Mise en cache avancée (CDN + Browser)','Optimisation des polices et ressources tierces','Réduction du render-blocking','Optimisation base de données (si dynamique)','Rapport avant/après avec métriques']
export default function OptimisationPage() {
  return (<>
    <PageHero badge="⚡ Optimisation Performance" title="Site lent = clients" highlight="perdus" description="Un délai de 1 seconde de chargement = -7% de conversions. Nous optimisons votre site pour le faire voler et grimper dans les résultats Google.">
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/audit" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Auditer mes performances <ArrowRight size={16}/></Link>
        <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 glass border border-white/15 hover:border-brand-500/40 text-slate-300 hover:text-white font-semibold rounded-xl transition-all">Devis optimisation</Link>
      </div>
    </PageHero>
    <section className="py-24"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionTitle badge="Résultats typiques" title="Avant / Après" highlight="l'optimisation" center={false} />
          <div className="glass rounded-2xl border border-white/10 p-6">
            {metriques.map(([k,v]) => (<div key={k} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"><span className="text-sm text-slate-400">{k}</span><span className="font-display font-bold text-brand-400 text-sm">{v}</span></div>))}
          </div>
        </div>
        <div>
          <SectionTitle badge="Ce que nous faisons" title="Actions" highlight="concrètes" center={false} />
          <div className="space-y-2">{actions.map(a => (<div key={a} className="flex items-center gap-3"><CheckCircle2 size={14} className="text-brand-400 flex-shrink-0"/><span className="text-sm text-slate-300">{a}</span></div>))}</div>
        </div>
      </div>
    </div></section>
    <section className="py-16"><div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="font-display font-bold text-3xl text-white mb-4">Mesurez l'impact réel sur votre business</h2>
      <p className="text-slate-400 mb-8">Rapport détaillé avant/après avec toutes les métriques de performance.</p>
      <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Optimiser mon site <ArrowRight size={16}/></Link>
    </div></section>
  </>)
}
