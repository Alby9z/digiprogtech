import { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Clock, MessageSquare, Zap } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Devis Gratuit — Estimation de votre projet web',
  description: 'Demandez votre devis gratuit pour votre projet web : site statique, application dynamique, design, audit. Réponse sous 24h.',
}

export default function DevisPage() {
  return (
    <>
      <PageHero
        badge="💰 Devis Gratuit"
        title="Votre devis personnalisé"
        highlight="sous 24h"
        description="Décrivez votre projet et recevez une estimation précise et transparente. Aucun engagement, aucune surprise."
      >
        <div className="flex flex-wrap gap-6 justify-center text-sm text-slate-400">
          {[<><Clock size={14} className="text-brand-400"/> Réponse sous 24h</>,<><CheckCircle2 size={14} className="text-brand-400"/> Sans engagement</>,<><Zap size={14} className="text-brand-400"/> Consultation offerte</>].map((item, i) => (
            <span key={i} className="flex items-center gap-2">{item}</span>
          ))}
        </div>
      </PageHero>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl border border-white/10 p-8 md:p-10">
            <form className="space-y-6">
              {/* Infos contact */}
              <div>
                <h3 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 text-xs flex items-center justify-center font-bold">1</span>
                  Vos coordonnées
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[['text','Nom complet *','Jean Dupont'],['text','Entreprise','Mon Entreprise SAS'],['email','Email *','jean@monentreprise.fr'],['tel','Téléphone','06 12 34 56 78']].map(([type, label, ph]) => (
                    <div key={String(label)}>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{String(label)}</label>
                      <input type={String(type)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500/50 transition-colors" placeholder={String(ph)}/>
                    </div>
                  ))}
                </div>
              </div>

              {/* Type de projet */}
              <div>
                <h3 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 text-xs flex items-center justify-center font-bold">2</span>
                  Type de projet *
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['Site statique (vitrine)','Site dynamique (app)','Refonte de site','Design / Logo','Audit de site','Hébergement / Cloud','Sécurité web','Autre'].map(type => (
                    <label key={type} className="flex items-center gap-2 p-3 glass rounded-xl border border-white/8 hover:border-brand-500/30 cursor-pointer transition-colors">
                      <input type="checkbox" className="accent-brand-500 rounded"/>
                      <span className="text-xs text-slate-300">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 text-xs flex items-center justify-center font-bold">3</span>
                  Description du projet *
                </h3>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500/50 transition-colors resize-none" placeholder="Décrivez votre projet : objectifs, fonctionnalités souhaitées, inspiration éventuelle, audience cible..."/>
              </div>

              {/* Fonctionnalités */}
              <div>
                <h3 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 text-xs flex items-center justify-center font-bold">4</span>
                  Fonctionnalités souhaitées
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['Blog / Actualités','E-commerce','Espace membres','Formulaire de contact','Chat en ligne','Multilangue','CMS (édition facile)','Paiement en ligne','Intégration CRM','Newsletter','Carte interactive','Galerie médias'].map(f => (
                    <label key={f} className="flex items-center gap-2 p-3 glass rounded-xl border border-white/8 hover:border-brand-500/30 cursor-pointer transition-colors">
                      <input type="checkbox" className="accent-brand-500 rounded"/>
                      <span className="text-xs text-slate-300">{f}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget & délais */}
              <div>
                <h3 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 text-xs flex items-center justify-center font-bold">5</span>
                  Budget & délais
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Budget estimatif</label>
                    <select className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-brand-500/50 transition-colors">
                      <option>À définir</option>
                      <option>Moins de 1 000€</option>
                      <option>1 000€ – 2 000€</option>
                      <option>2 000€ – 3 000€</option>
                      <option>3 000€ – 5 000€</option>
                      <option>Plus de 5 000€</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Délai souhaité</label>
                    <select className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-brand-500/50 transition-colors">
                      <option>Urgent (moins d'1 mois)</option>
                      <option>1 – 2 mois</option>
                      <option>2 – 4 mois</option>
                      <option>Pas de contrainte</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Upload */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Fichiers complémentaires (optionnel)</label>
                <div className="border-2 border-dashed border-white/10 hover:border-brand-500/30 rounded-xl p-6 text-center cursor-pointer transition-colors">
                  <p className="text-sm text-slate-400">Glissez vos fichiers ici ou <span className="text-brand-400">cliquez pour parcourir</span></p>
                  <p className="text-xs text-slate-600 mt-1">Maquettes, logos, briefs, cahier des charges (PDF, PNG, JPG — max 10MB)</p>
                </div>
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white font-semibold rounded-xl transition-all hover:scale-[1.01] shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 text-base">
                Envoyer ma demande de devis <ArrowRight size={16}/>
              </button>
              <p className="text-center text-xs text-slate-500">
                Réponse sous 24h ouvrées. Vos données sont traitées conformément à notre <a href="/politique-confidentialite" className="text-brand-400 hover:underline">politique de confidentialité</a>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
