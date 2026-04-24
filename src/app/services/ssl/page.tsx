import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Lock, Search, Shield } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
export const metadata: Metadata = { title: 'Certificat SSL & HTTPS — Sécurisez Votre Site', description: 'Installation et configuration du certificat SSL pour votre site. HTTPS activé, SEO amélioré, confiance visiteurs renforcée.' }
const benefices = [
  { icon: <Lock size={18}/>, title: 'Données chiffrées', desc: 'Toutes les communications entre votre site et vos visiteurs sont chiffrées en AES-256.' },
  { icon: <Search size={18}/>, title: 'Boost SEO Google', desc: 'Google favorise les sites HTTPS. Sans SSL, vous perdez des positions dans les résultats.' },
  { icon: <Shield size={18}/>, title: 'Confiance des visiteurs', desc: 'Le cadenas vert rassure vos visiteurs et réduit le taux d\'abandon.' },
]
export default function SslPage() {
  return (<>
    <PageHero badge="🔒 SSL / HTTPS" title="Votre site en" highlight="HTTPS sécurisé" description="Le SSL n'est plus optionnel : Google pénalise les sites sans HTTPS, les navigateurs affichent des avertissements et vos visiteurs fuient. Activons votre certificat aujourd'hui.">
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Activer mon SSL <ArrowRight size={16}/></Link>
      </div>
    </PageHero>
    <section className="py-24"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle badge="Pourquoi le SSL est vital" title="3 raisons de" highlight="passer en HTTPS" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefices.map(b => (<div key={b.title} className="glass rounded-2xl p-6 border border-white/8 hover:border-brand-500/20 transition-colors text-center">
          <div className="w-12 h-12 rounded-xl bg-brand-500/15 flex items-center justify-center text-brand-400 mx-auto mb-4">{b.icon}</div>
          <h3 className="font-display font-semibold text-white mb-2">{b.title}</h3>
          <p className="text-sm text-slate-400">{b.desc}</p>
        </div>))}
      </div>
    </div></section>
    <section className="py-16"><div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="font-display font-bold text-3xl text-white mb-4">Activation SSL en moins de 24h</h2>
      <p className="text-slate-400 mb-8">Installation, configuration et vérification. Renouvellement automatique inclus.</p>
      <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Sécuriser mon site <ArrowRight size={16}/></Link>
    </div></section>
  </>)
}
