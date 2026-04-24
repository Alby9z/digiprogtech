import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
export const metadata: Metadata = { title: 'Sauvegardes Automatiques & Restauration', description: 'Backups quotidiens chiffrés, stockage multi-région, restauration 1 clic. Vos données toujours récupérables.' }
const items = ['Backup automatique quotidien','Chiffrement AES-256','Stockage multi-région','Rétention 30 jours','Restauration 1 clic','Tests de restauration mensuels','Backup base de données','Rapport hebdomadaire']
export default function SauvegardesPage() {
  return (<>
    <PageHero badge="💾 Sauvegardes" title="Vos données en" highlight="sécurité totale" description="Sauvegardes quotidiennes chiffrées, stockage redondant multi-région. Restauration complète en 1 clic. Même en cas d'incident grave, vos données sont récupérables.">
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Activer les sauvegardes <ArrowRight size={16}/></Link>
      </div>
    </PageHero>
    <section className="py-24"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle badge="Inclus" title="Votre protection" highlight="données complète" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map(item => (<div key={item} className="flex items-center gap-3 glass rounded-xl p-4 border border-white/6 hover:border-brand-500/20 transition-colors"><CheckCircle2 size={14} className="text-brand-400 flex-shrink-0"/><span className="text-sm text-slate-300">{item}</span></div>))}
      </div>
    </div></section>
    <section className="py-16"><div className="max-w-3xl mx-auto px-4 text-center">
      <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Devis gratuit <ArrowRight size={16}/></Link>
    </div></section>
  </>)
}
