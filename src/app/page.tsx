import Link from 'next/link'
import { ArrowRight, CheckCircle2, Code2, Palette, Server, Shield, BarChart3, Star, Zap, Globe, TrendingUp, Users } from 'lucide-react'
import ServiceCard from '@/components/ui/ServiceCard'

const stats = [
  { value: '150+', label: 'Projets livrés' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '3 ans', label: "D'expertise" },
  { value: '24h', label: 'Support réactif' },
]

const services = [
  {
    icon: <Code2 size={22} />,
    title: 'Développement Web',
    description: 'Sites statiques ultra-rapides ou applications dynamiques complexes, développés avec les dernières technologies.',
    href: '/services/developpement-web',
    features: ['Next.js & React', 'Performance optimisée', 'SEO natif'],
  },
  {
    icon: <Palette size={22} />,
    title: 'Design & Graphisme',
    description: 'Interfaces mémorables et identités visuelles percutantes qui convertissent et fidélisent vos visiteurs.',
    href: '/services/design-graphisme',
    features: ['UI/UX Design', 'Logo & identité', 'Maquettes Figma'],
  },
  {
    icon: <Server size={22} />,
    title: 'Hébergement & Cloud',
    description: 'Infrastructure cloud fiable, scalable et sécurisée pour que votre site soit toujours disponible.',
    href: '/services/hebergement',
    features: ['Vercel / AWS / OVH', 'CI/CD automatisé', 'Monitoring 24/7'],
  },
  {
    icon: <Shield size={22} />,
    title: 'Sécurité Web',
    description: 'Protection complète contre les menaces : SSL, pare-feu, anti-DDoS et sauvegardes automatisées.',
    href: '/services/securite',
    features: ['SSL / HTTPS', 'Protection DDoS', 'Sauvegardes auto'],
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Audit de Site Web',
    description: 'Analyse complète SEO, performance, sécurité et UX avec rapport détaillé et plan d\'action priorisé.',
    href: '/audit',
    features: ['Audit SEO complet', 'Core Web Vitals', 'Rapport actionnable'],
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Optimisation & Refonte',
    description: 'Boostez votre site existant : vitesse, conversions, référencement et expérience utilisateur.',
    href: '/services/optimisation',
    features: ['Core Web Vitals', '+150% de conversions', 'Refonte complète'],
  },
]

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'CEO, TechStartup',
    content: 'Digiprogtech a transformé notre présence en ligne. Notre taux de conversion a augmenté de 180% en 3 mois.',
    rating: 5,
  },
  {
    name: 'Marc Dubois',
    role: 'Directeur Marketing',
    content: 'L\'audit de site qu\'ils ont réalisé a été une révélation. Plan d\'action clair et résultats concrets.',
    rating: 5,
  },
  {
    name: 'Amélie Leroy',
    role: 'Fondatrice, E-commerce',
    content: 'Site livré dans les délais, design magnifique et performances excellentes. Je recommande vivement.',
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-500/6 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-brand-500/30 text-brand-400 text-xs font-medium mb-8">
              <Zap size={12} />
              Agence Digitale Expert — France
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-6">
              Votre site web,{' '}
              <span className="gradient-text">votre croissance</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
              Digiprogtech conçoit des sites web performants, sécurisés et optimisés qui génèrent de vrais résultats. 
              Du design à l'hébergement, nous gérons tout pour vous.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all hover:scale-[1.02] glow-blue">
                Obtenir un devis gratuit <ArrowRight size={16} />
              </Link>
              <Link href="/audit" className="inline-flex items-center gap-2 px-8 py-4 glass border border-white/15 hover:border-brand-500/40 text-slate-300 hover:text-white font-semibold rounded-xl transition-all">
                Audit gratuit de votre site
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10">
              {[
                'Résultats en 30 jours',
                'Support inclus 3 mois',
                'Devis sous 24h',
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-brand-400" /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-4xl text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-brand-500/30 text-brand-400 text-xs font-medium mb-4">
              Nos expertises
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
              Des solutions digitales <span className="gradient-text">complètes</span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              De la conception à la mise en ligne, nous couvrons l'ensemble de vos besoins digitaux avec expertise et passion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/3 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-brand-500/30 text-brand-400 text-xs font-medium mb-6">
                Pourquoi Digiprogtech ?
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                Sans site optimisé, <span className="gradient-text">vous perdez des clients</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Aujourd'hui, 97% des consommateurs recherchent des entreprises en ligne. Un site lent, mal référencé ou peu sécurisé, 
                c'est des opportunités perdues chaque jour.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Globe size={16} />, title: 'Visibilité sur Google', desc: 'Référencement technique et SEO content optimisés' },
                  { icon: <Zap size={16} />, title: 'Performance maximale', desc: 'Core Web Vitals au vert, chargement < 1 seconde' },
                  { icon: <Shield size={16} />, title: 'Sécurité avancée', desc: 'SSL, protection DDoS et sauvegardes automatiques' },
                  { icon: <Users size={16} />, title: 'UX qui convertit', desc: 'Design pensé pour transformer les visiteurs en clients' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 glass rounded-xl border border-white/6 hover:border-brand-500/20 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-brand-500/15 flex items-center justify-center text-brand-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium text-white text-sm mb-0.5">{item.title}</div>
                      <div className="text-xs text-slate-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-2xl border border-white/10 p-8">
                <div className="font-mono text-xs text-slate-400 mb-6">
                  <span className="text-brand-400">// Impact réel</span>
                </div>
                {[
                  ['Visibilité Google', '+320%'],
                  ['Taux de conversion', '+180%'],
                  ['Vitesse de chargement', '×4 plus rapide'],
                  ['Leads générés', '+250%'],
                ].map(([label, val]) => (
                  <div key={label} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <span className="text-sm text-slate-400">{label}</span>
                    <span className="font-display font-bold text-brand-400">{val}</span>
                  </div>
                ))}
                <Link href="/devis" className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity">
                  Obtenir ces résultats <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Ce que disent <span className="gradient-text">nos clients</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-2xl p-6 border border-white/8 hover:border-brand-500/20 transition-colors">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-accent-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{t.content}"</p>
                <div>
                  <div className="font-medium text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl border border-white/10 p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                Prêt à <span className="gradient-text">transformer</span> votre présence digitale ?
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                Obtenez un devis personnalisé sous 24h. Consultation gratuite incluse.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all hover:scale-[1.02]">
                  Démarrer mon projet <ArrowRight size={16} />
                </Link>
                <Link href="/audit" className="inline-flex items-center gap-2 px-8 py-4 glass border border-white/15 hover:border-brand-500/40 text-slate-300 hover:text-white font-semibold rounded-xl transition-all">
                  Audit gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
