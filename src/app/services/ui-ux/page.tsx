import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MousePointer, BarChart3, Users, Eye } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'UI/UX Design — Interfaces qui Convertissent',
  description: 'Design UI/UX centré utilisateur. Wireframes, maquettes Figma, prototypes interactifs. Augmentez votre taux de conversion jusqu\'à 200%.',
}

const principes = [
  { icon: <MousePointer size={20} />, title: 'User-Centered Design', desc: 'Chaque décision de design est basée sur les besoins réels de vos utilisateurs, pas sur nos préférences.' },
  { icon: <BarChart3 size={20} />, title: 'Design orienté conversion', desc: 'Hiérarchie visuelle, CTA optimisés, parcours utilisateur fluide. Chaque élément sert un objectif.' },
  { icon: <Users size={20} />, title: 'Tests utilisateurs', desc: 'Validation des maquettes auprès de vrais utilisateurs avant le développement. Zéro surprise.' },
  { icon: <Eye size={20} />, title: 'Cohérence visuelle', desc: 'Design system structuré pour une expérience cohérente sur toutes les pages et tous les appareils.' },
]

const livrables = [
  'Audit UX de l\'existant (si refonte)',
  'User personas & parcours clients',
  'Wireframes basse fidélité',
  'Maquettes haute fidélité Figma',
  'Prototype interactif cliquable',
  'Design system & composants',
  'Guide d\'utilisation',
  'Assets exportés pour les devs',
]

export default function UiUxPage() {
  return (
    <>
      <PageHero
        badge="🖥️ UI/UX Design"
        title="Interfaces pensées pour"
        highlight="convertir"
        description="Un bon UX, c'est +200% de taux de conversion. Nous concevons des interfaces intuitives qui guident vos utilisateurs vers l'action souhaitée, naturellement."
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">
            Demander un devis <ArrowRight size={16} />
          </Link>
        </div>
      </PageHero>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Notre approche" title="Design qui parle" highlight="à vos utilisateurs" description="Nous combinons psychologie, données et créativité pour concevoir des expériences mémorables." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principes.map((p) => (
              <div key={p.title} className="glass rounded-2xl p-6 border border-white/8 hover:border-brand-500/20 transition-colors flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/15 flex items-center justify-center text-brand-400 flex-shrink-0">{p.icon}</div>
                <div>
                  <h3 className="font-display font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/3 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle badge="Livrables" title="Ce que vous" highlight="obtenez" center={false} />
              <div className="space-y-3">
                {livrables.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-brand-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl border border-white/10 p-8">
              <h3 className="font-display font-semibold text-white mb-6">Impact UX sur votre business</h3>
              {[
                ['Taux de rebond', '-45%'],
                ['Temps sur le site', '+3 minutes'],
                ['Taux de conversion', '+200%'],
                ['Satisfaction client', '9.2/10'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                  <span className="text-sm text-slate-400">{k}</span>
                  <span className="font-display font-bold text-brand-400">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Transformez vos visiteurs en clients</h2>
          <p className="text-slate-400 mb-8">Parlez-nous de votre projet. Audit UX gratuit inclus dans chaque devis.</p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">
            Demander mon audit UX <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
