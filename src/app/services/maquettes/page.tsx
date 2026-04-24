import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Figma, Layers, MousePointer, RefreshCw } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
export const metadata: Metadata = { title: 'Maquettes & Prototypes Figma', description: 'Maquettes Figma haute fidélité et prototypes interactifs. Visualisez votre projet avant le développement. Iterations rapides.' }
const livrables = ['Wireframes basse fidélité','Maquettes desktop + mobile haute fidélité','Prototype cliquable Figma','Annotations pour les développeurs','Design system de base','Exports assets optimisés','2 tours de révisions inclus']
export default function MaquettesPage() {
  return (<>
    <PageHero badge="🎭 Maquettes Figma" title="Visualisez avant de" highlight="développer" description="Ne payez pas pour du développement qui ne vous convient pas. Nos maquettes Figma haute fidélité vous donnent un aperçu 100% réaliste avant d'écrire la moindre ligne de code.">
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Démarrer mon maquettage <ArrowRight size={16} /></Link>
      </div>
    </PageHero>
    <section className="py-24"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle badge="Livrables inclus" title="Ce que vous" highlight="recevez" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {livrables.map(item => (<div key={item} className="flex items-center gap-3 glass rounded-xl p-4 border border-white/6 hover:border-brand-500/20 transition-colors"><CheckCircle2 size={16} className="text-brand-400 flex-shrink-0" /><span className="text-sm text-slate-300">{item}</span></div>))}
      </div>
    </div></section>
    <section className="py-16"><div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="font-display font-bold text-3xl text-white mb-4">Zéro surprise au développement</h2>
      <p className="text-slate-400 mb-8">Validez chaque détail avant de commencer. Économisez du temps et de l'argent.</p>
      <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Commander mes maquettes <ArrowRight size={16} /></Link>
    </div></section>
  </>)
}
