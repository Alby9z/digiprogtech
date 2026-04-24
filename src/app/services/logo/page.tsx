import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Star, Zap, Eye, Award } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'Création de Logo & Identité Visuelle',
  description: 'Création de logos professionnels et identités visuelles percutantes. 3 propositions incluses, tous formats livrés, charte graphique de base.',
}

const livrables = [
  'Logo en 3 propositions créatives',
  'Déclinaisons couleur (clair/sombre)',
  'Versions PNG, SVG, PDF, AI',
  'Logo couleur & noir & blanc',
  'Favicon & icône mobile',
  'Charte typographique de base',
  'Palette de couleurs officielle',
  'Guide d\'utilisation',
  '2 révisions incluses',
]

const process = [
  { step: '01', title: 'Brief créatif', desc: 'Questionnaire détaillé sur votre activité, vos valeurs, votre cible et vos préférences esthétiques.' },
  { step: '02', title: 'Recherche & Moodboard', desc: 'Analyse de votre secteur, de vos concurrents et création d\'un moodboard d\'inspiration.' },
  { step: '03', title: '3 propositions uniques', desc: 'Trois directions créatives distinctes vous sont soumises pour validation.' },
  { step: '04', title: 'Révisions & Finalisation', desc: '2 tours de révisions sur la proposition choisie, puis livraison de tous les fichiers.' },
]

export default function LogoPage() {
  return (
    <>
      <PageHero
        badge="✏️ Création de Logo"
        title="Votre identité,"
        highlight="inoubliable"
        description="Un logo n'est pas qu'une image — c'est la première impression que vous donnez. Nous créons des identités visuelles uniques qui vous démarquent et restent gravées dans les mémoires."
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">
            Créer mon logo <ArrowRight size={16} />
          </Link>
        </div>
      </PageHero>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle badge="Ce qui est livré" title="Tout ce dont vous" highlight="avez besoin" center={false} />
              <div className="grid grid-cols-1 gap-3">
                {livrables.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-brand-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: <Eye size={20} />, title: 'Mémorable & Unique', desc: 'Un logo conçu pour se distinguer dans votre secteur d\'activité.' },
                { icon: <Zap size={20} />, title: 'Professionnel & Polyvalent', desc: 'Fonctionne sur tous supports : web, print, réseaux sociaux, enseignes.' },
                { icon: <Star size={20} />, title: '100% Sur Mesure', desc: 'Aucun template, aucune banque d\'images. Tout est créé spécifiquement pour vous.' },
                { icon: <Award size={20} />, title: 'Droits complets', desc: 'Vous êtes propriétaire à 100% de votre logo. Cession complète des droits.' },
              ].map((item) => (
                <div key={item.title} className="glass rounded-xl p-5 border border-white/8 hover:border-brand-500/20 transition-colors flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-500/15 flex items-center justify-center text-brand-400 flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/3 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Notre processus" title="Comment nous" highlight="travaillons" />
          <div className="space-y-6">
            {process.map((p) => (
              <div key={p.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-brand-500/15 border border-brand-500/20 flex items-center justify-center font-mono font-bold text-brand-400 flex-shrink-0 text-sm">{p.step}</div>
                <div className="glass rounded-xl p-5 border border-white/6 flex-1">
                  <h3 className="font-display font-semibold text-white mb-1">{p.title}</h3>
                  <p className="text-sm text-slate-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Votre logo en 10 jours</h2>
          <p className="text-slate-400 mb-8">Brief → Propositions → Révisions → Livraison. Simple, rapide, professionnel.</p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">
            Commander mon logo <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
