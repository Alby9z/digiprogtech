import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
export const metadata: Metadata = { title: 'Maintenance Technique & Support Web', description: 'Mises à jour de sécurité, corrections de bugs, backups quotidiens et monitoring 24/7. Votre site est entre de bonnes mains.' }
const items = ['Mises à jour sécurité','Corrections de bugs','Sauvegardes quotidiennes','Monitoring uptime 24/7','Rapports mensuels','Support email & téléphone','Optimisations continues','Conseil stratégique']
export default function Page() {
  return (<>
    <PageHero badge="🔧 Maintenance" title="Votre site toujours" highlight="opérationnel" description="Mises à jour de sécurité, corrections de bugs, backups quotidiens et monitoring 24/7. Votre site est entre de bonnes mains.">
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Demander un devis <ArrowRight size={16}/></Link>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 glass border border-white/15 hover:border-brand-500/40 text-slate-300 hover:text-white font-semibold rounded-xl transition-all">Nous contacter</Link>
      </div>
    </PageHero>
    <section className="py-24"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle badge="Notre prestation" title="Ce qui est" highlight="inclus" description="Mises à jour de sécurité, corrections de bugs, backups quotidiens et monitoring 24/7. Votre site est entre de bonnes mains." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item: string) => (<div key={item} className="flex items-center gap-3 glass rounded-xl p-4 border border-white/6 hover:border-brand-500/20 transition-colors"><CheckCircle2 size={14} className="text-brand-400 flex-shrink-0"/><span className="text-sm text-slate-300">{item}</span></div>))}
      </div>
    </div></section>
    <section className="py-16"><div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="font-display font-bold text-3xl text-white mb-4">Prêt à démarrer ?</h2>
      <p className="text-slate-400 mb-8">Devis gratuit et personnalisé sous 24h, sans engagement.</p>
      <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Devis gratuit <ArrowRight size={16}/></Link>
    </div></section>
  </>)
}
