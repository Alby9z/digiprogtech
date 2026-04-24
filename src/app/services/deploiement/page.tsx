import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
export const metadata: Metadata = { title: 'Déploiement CI/CD & DevOps', description: 'Pipelines CI/CD automatisés, environnements staging et production séparés. Chaque mise à jour est testée et déployée en toute sécurité.' }
const items = ['Pipeline CI/CD GitHub Actions','Environnement staging','Tests automatisés','Déploiement zéro downtime','Rollback en 1 clic','Secrets & variables d\'env','Docker & containers','Documentation DevOps']
export default function Page() {
  return (<>
    <PageHero badge="🚀 CI/CD & DevOps" title="Déploiement" highlight="automatisé" description="Pipelines CI/CD automatisés, environnements staging et production séparés. Chaque mise à jour est testée et déployée en toute sécurité.">
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Demander un devis <ArrowRight size={16}/></Link>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 glass border border-white/15 hover:border-brand-500/40 text-slate-300 hover:text-white font-semibold rounded-xl transition-all">Nous contacter</Link>
      </div>
    </PageHero>
    <section className="py-24"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle badge="Notre prestation" title="Ce qui est" highlight="inclus" description="Pipelines CI/CD automatisés, environnements staging et production séparés. Chaque mise à jour est testée et déployée en toute sécurité." />
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
