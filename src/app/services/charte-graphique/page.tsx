import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'Charte Graphique — Cohérence Visuelle',
  description: 'Création de chartes graphiques complètes : couleurs, typographies, règles d\'usage. Cohérence visuelle sur tous vos supports.',
}

const inclus = [
  'Palette de couleurs principale et secondaires',
  'Typographies sélectionnées et hiérarchie',
  'Règles d\'usage du logo',
  'Composants UI de base (boutons, inputs, cards)',
  'Iconographie et style graphique',
  'Ton et style photographique',
  'Templates email & réseaux sociaux',
  'Guide PDF complet',
]

export default function CharteGraphiquePage() {
  return (
    <>
      <PageHero badge="📐 Charte Graphique" title="Cohérence visuelle" highlight="totale" description="Une charte graphique, c'est la boussole visuelle de votre marque. Couleurs, typographies, espaces — tout est documenté pour une cohérence parfaite sur chaque support.">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">
            Demander un devis <ArrowRight size={16} />
          </Link>
        </div>
      </PageHero>
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Inclus dans chaque charte" title="Un guide complet pour" highlight="votre équipe" description="Votre équipe, vos prestataires, vos partenaires — tous travaillent avec le même guide visuel." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inclus.map((item) => (
              <div key={item} className="flex items-center gap-3 glass rounded-xl p-4 border border-white/6 hover:border-brand-500/20 transition-colors">
                <CheckCircle2 size={16} className="text-brand-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Une marque cohérente inspire confiance</h2>
          <p className="text-slate-400 mb-8">Commandez votre charte graphique complète dès aujourd'hui.</p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">
            Démarrer ma charte <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
