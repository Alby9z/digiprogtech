import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCard from '@/components/ui/ServiceCard'
import { Lock, Shield, Bot, HardDrive } from 'lucide-react'
export const metadata: Metadata = { title: 'Sécurité Web Complète — Protection & Monitoring', description: 'Sécurisation complète de votre site web : SSL, protection DDoS, anti-spam, sauvegardes. Monitoring 24/7.' }
const subs = [
  { icon: <Lock size={20}/>, title: 'Certificat SSL / HTTPS', description: 'Chiffrement des données, confiance visiteurs et boost SEO Google.', href: '/services/ssl', features: ['HTTPS activé','Renouvellement auto','SEO boost'] },
  { icon: <Shield size={20}/>, title: 'Protection Anti-Attaques', description: 'Pare-feu WAF, protection DDoS et monitoring des tentatives d\'intrusion.', href: '/services/protection', features: ['WAF actif','Anti-DDoS','Alertes temps réel'] },
  { icon: <Bot size={20}/>, title: 'Anti-Spam & Anti-Bot', description: 'Filtrage intelligent des bots, captcha et protection des formulaires.', href: '/services/anti-spam', features: ['Captcha avancé','Honeypot','IP blacklisting'] },
  { icon: <HardDrive size={20}/>, title: 'Sauvegardes Automatiques', description: 'Backups quotidiens chiffrés avec restauration en un clic.', href: '/services/sauvegardes', features: ['Backup quotidien','Restauration 1 clic','Chiffrement AES-256'] },
]
export default function SecuritePage() {
  return (<>
    <PageHero badge="🔐 Sécurité Web" title="Protégez votre" highlight="business en ligne" description="Une faille de sécurité peut coûter des milliers d'euros et détruire votre réputation. Nous sécurisons votre site de A à Z avec une protection multicouche.">
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/audit" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">Audit sécurité gratuit <ArrowRight size={16}/></Link>
      </div>
    </PageHero>
    <section className="py-24"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle badge="Nos protections" title="Sécurité" highlight="multicouche" description="Chaque couche de sécurité protège votre site contre un type de menace spécifique." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{subs.map(s => <ServiceCard key={s.href} {...s} />)}</div>
    </div></section>
  </>)
}
