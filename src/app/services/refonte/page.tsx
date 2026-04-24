import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, AlertTriangle, TrendingUp } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
export const metadata: Metadata = { title: 'Refonte de Site Web — Modernisez Votre Présence', description: 'Refonte complète de site web : nouveau design, code moderne, SEO préservé. Donnez une seconde vie à votre site.' }
const signaux = ['Design vieillissant ou non mobile','Temps de chargement > 3 secondes','Taux de rebond > 70%','Peu de leads générés','Difficile à mettre à jour','Mal positionné sur Google']
const inclus = ['Audit complet de l\'existant','Nouveau design sur mesure','Migration sans perte SEO','Optimisation performance','Formation à l\'utilisation','3 mois de support']
export default function RefontePage() {
  return (<>
    <PageHero badge="🔄 Refonte de Site" title="Donnez une seconde vie à" highlight="votre site" description="Votre site actuel ne vous représente plus ? Trop lent, design dépassé, peu de conversions ? Nous le refondons entièrement en préservant votre référencement acquis.">
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/audit" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Audit gratuit de mon site <ArrowRight size={16}/></Link>
        <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 glass border border-white/15 hover:border-brand-500/40 text-slate-300 hover:text-white font-semibold rounded-xl transition-all">Demander un devis</Link>
      </div>
    </PageHero>
    <section className="py-24"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <SectionTitle badge="Signes d'alerte" title="Votre site a besoin d'une" highlight="refonte si..." center={false} />
          <div className="space-y-3">{signaux.map(s => (<div key={s} className="flex items-center gap-3 glass rounded-xl p-4 border border-orange-500/15"><AlertTriangle size={14} className="text-orange-400 flex-shrink-0"/><span className="text-sm text-slate-300">{s}</span></div>))}</div>
        </div>
        <div>
          <SectionTitle badge="Notre prestation" title="Ce que comprend" highlight="la refonte" center={false} />
          <div className="space-y-3">{inclus.map(i => (<div key={i} className="flex items-center gap-3 glass rounded-xl p-4 border border-white/6"><CheckCircle2 size={14} className="text-brand-400 flex-shrink-0"/><span className="text-sm text-slate-300">{i}</span></div>))}</div>
        </div>
      </div>
    </div></section>
    <section className="py-16"><div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="font-display font-bold text-3xl text-white mb-4">Commencez par un audit gratuit</h2>
      <p className="text-slate-400 mb-8">On analyse votre site actuel et vous propose un plan d'action chiffré, sans engagement.</p>
      <Link href="/audit" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Audit gratuit de mon site <ArrowRight size={16}/></Link>
    </div></section>
  </>)
}
