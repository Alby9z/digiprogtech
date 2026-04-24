import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Award, Code2, Heart, Target, Users, Zap, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'Qui sommes-nous — L\'équipe Digiprogtech',
  description: 'Découvrez Digiprogtech : notre histoire, notre équipe d\'experts digitaux, notre vision et nos valeurs. Expert web, design et sécurité.',
}

const valeurs = [
  { icon: <Zap size={20}/>, title: 'Innovation', desc: 'Nous utilisons les technologies les plus récentes pour vous livrer des solutions qui durent.' },
  { icon: <Award size={20}/>, title: 'Performance', desc: 'Chaque projet est optimisé pour la vitesse, le SEO et les conversions. Les métriques ne mentent pas.' },
  { icon: <Heart size={20}/>, title: 'Fiabilité', desc: 'Délais respectés, communication transparente, support réactif. Nous sommes là pour vous.' },
  { icon: <Target size={20}/>, title: 'Résultats', desc: 'Nous mesurons notre succès à l\'aune du vôtre. Vos objectifs business guident chaque décision.' },
]

const expertises = ['Next.js & React', 'TypeScript', 'Node.js & API REST', 'Bases de données (SQL/NoSQL)', 'UI/UX Design (Figma)', 'SEO technique & content', 'Sécurité web (OWASP)', 'Cloud (AWS, Vercel, OVH)', 'CI/CD & DevOps', 'Performance & Core Web Vitals']

const chiffres = [
  { value: '5+', label: 'Années d\'expérience' },
  { value: '150+', label: 'Projets livrés' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '24h', label: 'Délai de réponse max' },
]

export default function QuiSommesNousPage() {
  return (
    <>
      <PageHero
        badge="👥 L'équipe Digiprogtech"
        title="Des experts passionnés"
        highlight="par le digital"
        description="Digiprogtech, c'est une équipe d'experts digitaux avec une seule obsession : livrer des solutions web qui génèrent de vrais résultats pour votre business."
      />

      {/* Chiffres */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {chiffres.map(c => (
              <div key={c.label}>
                <div className="font-display font-bold text-4xl text-white mb-1">{c.value}</div>
                <div className="text-sm text-slate-400">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle badge="Notre histoire" title="Pourquoi" highlight="Digiprogtech ?" center={false} />
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>Digiprogtech est née d'un constat simple : trop d'entreprises perdent des opportunités à cause d'un site web sous-performant. Trop lent, mal référencé, peu sécurisé — des problèmes qui coûtent des milliers d'euros chaque mois sans qu'on s'en rende compte.</p>
                <p>Notre mission est claire : concevoir et développer des solutions web qui <strong className="text-white">performent vraiment</strong>. Pas des sites vitrine génériques, mais des outils digitaux taillés sur mesure pour votre activité et vos objectifs.</p>
                <p>Nous combinons expertise technique, sensibilité design et vision stratégique pour livrer des projets qui dépassent les attentes — dans les délais et dans le budget.</p>
              </div>
            </div>
            <div className="space-y-4">
              {valeurs.map(v => (
                <div key={v.title} className="flex gap-4 glass rounded-xl p-5 border border-white/6 hover:border-brand-500/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-brand-500/15 flex items-center justify-center text-brand-400 flex-shrink-0">{v.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{v.title}</h3>
                    <p className="text-sm text-slate-400">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/3 to-transparent"/>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Stack technique" title="Nos" highlight="expertises" description="Nous maîtrisons l'ensemble de la chaîne de valeur digitale, du design à l'infrastructure." />
          <div className="flex flex-wrap gap-3 justify-center">
            {expertises.map(e => (
              <span key={e} className="px-4 py-2 glass rounded-xl border border-white/8 hover:border-brand-500/20 text-sm text-slate-300 hover:text-white transition-all cursor-default">{e}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="glass rounded-3xl border border-white/10 p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-brand-500/8 rounded-full blur-3xl"/>
            <div className="relative">
              <blockquote className="font-display font-bold text-2xl md:text-3xl text-white leading-relaxed mb-6">
                "Notre mission : faire du web un levier de croissance réel, mesurable et durable pour chaque client."
              </blockquote>
              <p className="text-slate-400 mb-8">— L'équipe Digiprogtech</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/devis" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">Travailler avec nous <ArrowRight size={14}/></Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/15 text-slate-300 hover:text-white font-semibold rounded-xl transition-all">Nous contacter</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
