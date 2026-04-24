import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
export const metadata: Metadata = { title: 'Protection Anti-Attaques & DDoS', description: 'Pare-feu WAF, protection DDoS et détection d\'intrusion. Votre site protégé 24/7 contre toutes les menaces.' }
const items = ['WAF applicatif actif','Protection DDoS L3/L4/L7','Détection intrusion IDS','Blocage IP malveillantes','Alertes temps réel','Rapports incidents','Fail2ban configuré','Support urgence 24/7']
export default function ProtectionPage() {
  return (<>
    <PageHero badge="🛡️ Protection Web" title="Pare-feu et anti-DDoS" highlight="actifs 24/7" description="Pare-feu WAF, protection DDoS et détection d'intrusion en temps réel. Votre site reste disponible même sous les attaques les plus intenses.">
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Protéger mon site <ArrowRight size={16}/></Link>
      </div>
    </PageHero>
    <section className="py-24"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle badge="Protection incluse" title="Ce qui est" highlight="activé pour vous" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map(item => (<div key={item} className="flex items-center gap-3 glass rounded-xl p-4 border border-white/6 hover:border-brand-500/20 transition-colors"><CheckCircle2 size={14} className="text-brand-400 flex-shrink-0"/><span className="text-sm text-slate-300">{item}</span></div>))}
      </div>
    </div></section>
    <section className="py-16"><div className="max-w-3xl mx-auto px-4 text-center">
      <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Devis gratuit <ArrowRight size={16}/></Link>
    </div></section>
  </>)
}
