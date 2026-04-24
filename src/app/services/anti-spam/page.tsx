import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
export const metadata: Metadata = { title: 'Anti-Spam & Anti-Bot — Protection Formulaires', description: 'Captcha invisible, honeypot et filtrage intelligent contre spam et bots. Protégez vos formulaires et bases de données.' }
const items = ['Captcha invisible reCAPTCHA v3','Honeypot anti-bot','Filtrage formulaires avancé','Blacklist IP automatique','Rate limiting API','Anti-scraping','Logs & statistiques','Configuration sur mesure']
export default function AntiSpamPage() {
  return (<>
    <PageHero badge="🤖 Anti-Spam" title="Stoppez les bots et" highlight="le spam définitivement" description="Captcha invisible, honeypot et filtrage intelligent. Vos formulaires et bases de données protégés contre le spam et les bots malveillants.">
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Activer la protection <ArrowRight size={16}/></Link>
      </div>
    </PageHero>
    <section className="py-24"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle badge="Protection incluse" title="Ce qui est" highlight="configuré" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map(item => (<div key={item} className="flex items-center gap-3 glass rounded-xl p-4 border border-white/6 hover:border-brand-500/20 transition-colors"><CheckCircle2 size={14} className="text-brand-400 flex-shrink-0"/><span className="text-sm text-slate-300">{item}</span></div>))}
      </div>
    </div></section>
    <section className="py-16"><div className="max-w-3xl mx-auto px-4 text-center">
      <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Devis gratuit <ArrowRight size={16}/></Link>
    </div></section>
  </>)
}
