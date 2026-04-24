import { Metadata } from 'next'
import { Search, BarChart3, Shield, Users, FileText, TrendingUp, CheckCircle2, ArrowRight, Zap } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'Audit de Site Web Gratuit — SEO, Performance, Sécurité, UX',
  description: 'Audit complet de votre site : analyse SEO, performance, sécurité et UX. Rapport détaillé avec plan d\'action priorisé. Demandez votre audit gratuit.',
}

const auditDomaines = [
  { icon: <Zap size={22}/>, title: 'Audit Performance', desc: 'Vitesse de chargement, Core Web Vitals, Lighthouse score, optimisation images et ressources.', items: ['LCP, FID, CLS','Score Lighthouse','Temps de chargement TTFB','Optimisation ressources'] },
  { icon: <Search size={22}/>, title: 'Audit SEO', desc: 'Structure des balises, mots-clés, indexation Google, backlinks et positionnement actuel.', items: ['Balises title & meta','Structure Hn','Sitemap & robots.txt','Indexation Google'] },
  { icon: <Users size={22}/>, title: 'Audit UX/UI', desc: 'Parcours utilisateur, ergonomie, taux de rebond, design et cohérence visuelle.', items: ['Parcours conversion','Responsive mobile','Lisibilité & contrastes','CTA & formulaires'] },
  { icon: <Shield size={22}/>, title: 'Audit Sécurité', desc: 'Certificat SSL, vulnérabilités connues, protection des données et conformité RGPD.', items: ['SSL & HTTPS','Headers sécurité','Vulnérabilités CMS','Conformité RGPD'] },
]

const livrables = [
  'Rapport PDF complet (15-25 pages)',
  'Liste priorisée des problèmes détectés',
  'Recommandations concrètes et actionnables',
  'Plan d\'amélioration par priorité (Quick wins / Moyen terme / Long terme)',
  'Comparaison avec les concurrents principaux',
  'Score global et par catégorie',
  'Présentation vidéo des résultats (option)',
]

export default function AuditPage() {
  return (
    <>
      <PageHero
        badge="🔍 Audit de Site Web"
        title="Analysez, corrigez,"
        highlight="performez"
        description="Recevez un rapport complet de 20-40 pages sur l'état de votre site : SEO, performance, sécurité et UX. Avec un plan d'action priorisé pour des résultats immédiats."
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#formulaire-audit" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">
            Demander mon audit gratuit <ArrowRight size={16}/>
          </a>
        </div>
      </PageHero>

      {/* Ce que comprend l'audit */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="4 dimensions analysées" title="Un audit" highlight="360°" description="Notre audit couvre toutes les dimensions qui impactent votre visibilité, vos conversions et la sécurité de votre site." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {auditDomaines.map(d => (
              <div key={d.title} className="glass rounded-2xl p-6 border border-white/8 hover:border-brand-500/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-500/15 flex items-center justify-center text-brand-400 mb-4">{d.icon}</div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{d.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{d.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {d.items.map(item => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-1 h-1 rounded-full bg-brand-400"/>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Livrables */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/3 to-transparent"/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle badge="Ce que vous recevez" title="Un rapport" highlight="actionnable" center={false} description="Pas un rapport générique — un document personnalisé avec des recommandations précises pour votre site." />
              <div className="space-y-3">
                {livrables.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-400 flex-shrink-0 mt-0.5"/>
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl border border-white/10 p-8">
              <h3 className="font-display font-semibold text-white mb-2">Impact des corrections</h3>
              <p className="text-sm text-slate-400 mb-6">Résultats moyens constatés après mise en œuvre des recommandations :</p>
              {[['Trafic organique Google','+85%'],['Taux de conversion','+140%'],['Vitesse de chargement','×3 plus rapide'],['Taux de rebond','-45%'],['Score sécurité','A+ (vs D avant)']].map(([k,v]) => (
                <div key={k} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                  <span className="text-sm text-slate-400">{k}</span>
                  <span className="font-display font-bold text-brand-400">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire audit */}
      <section className="py-24" id="formulaire-audit">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Demandez votre audit" title="Formulaire d'audit" highlight="gratuit" description="Remplissez ce formulaire et recevez votre rapport dans les 5 jours ouvrés." />
          <div className="glass rounded-2xl border border-white/10 p-8">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Nom complet *</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500/50 transition-colors" placeholder="Jean Dupont"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500/50 transition-colors" placeholder="jean@monentreprise.fr"/>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">URL du site à analyser *</label>
                <input type="url" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500/50 transition-colors" placeholder="https://www.monsite.fr"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Objectifs principaux *</label>
                <select className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-brand-500/50 transition-colors">
                  <option value="">Sélectionnez votre objectif principal</option>
                  <option>Améliorer le référencement Google</option>
                  <option>Augmenter les conversions</option>
                  <option>Améliorer la vitesse</option>
                  <option>Renforcer la sécurité</option>
                  <option>Améliorer l'expérience utilisateur</option>
                  <option>Tous les aspects</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Problèmes rencontrés actuellement</label>
                <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500/50 transition-colors resize-none" placeholder="Décrivez les problèmes que vous observez : site lent, peu de trafic, peu de contacts..."/>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Budget pour les corrections</label>
                  <select className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-brand-500/50 transition-colors">
                    <option>À définir selon les résultats</option>
                    <option>Moins de 500€</option>
                    <option>500€ - 2 000€</option>
                    <option>2 000€ - 5 000€</option>
                    <option>Plus de 5 000€</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Délai souhaité</label>
                  <select className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-brand-500/50 transition-colors">
                    <option>Urgent (1-2 semaines)</option>
                    <option>Dans le mois</option>
                    <option>Dans les 3 mois</option>
                    <option>Pas de contrainte</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white font-semibold rounded-xl transition-all hover:scale-[1.01] shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2">
                Demander mon audit gratuit <ArrowRight size={16}/>
              </button>
              <p className="text-center text-xs text-slate-500">
                Rapport livré sous 5 jours ouvrés. Aucun engagement requis.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
