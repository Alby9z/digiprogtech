import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Contact — Digiprogtech',
  description: 'Contactez l\'équipe Digiprogtech. Formulaire, email, téléphone. Réponse sous 24h.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="📞 Contact"
        title="Parlons de votre"
        highlight="projet"
        description="Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans votre projet digital."
      />

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Infos contact */}
            <div className="space-y-6">
              <h2 className="font-display font-semibold text-xl text-white">Nos coordonnées</h2>
              {[
                { icon: <Mail size={18}/>, title: 'Email', value: 'digiprogtech@gmail.com', sub: 'Réponse sous 24h ouvrées' },
                { icon: <Phone size={18}/>, title: 'Téléphone', value: '+33 6 48 26 35 81', sub: 'Lun–Ven, 9h–18h' },
                { icon: <MapPin size={18}/>, title: 'Zone d\'intervention', value: 'France entière', sub: 'Intervention locale & à distance' },
                { icon: <Clock size={18}/>, title: 'Horaires', value: 'Lun–Ven : 9h–18h', sub: 'Support urgent disponible' },
              ].map(item => (
                <div key={item.title} className="flex gap-4 glass rounded-xl p-5 border border-white/6">
                  <div className="w-10 h-10 rounded-lg bg-brand-500/15 flex items-center justify-center text-brand-400 flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">{item.title}</div>
                    <div className="font-medium text-white text-sm">{item.value}</div>
                    <div className="text-xs text-slate-500">{item.sub}</div>
                  </div>
                </div>
              ))}

              <div className="glass rounded-xl p-5 border border-brand-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
                  <span className="text-sm font-medium text-white">Disponible maintenant</span>
                </div>
                <p className="text-xs text-slate-400">Notre équipe est en ligne et prête à répondre à vos questions.</p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl border border-white/10 p-8">
                <h2 className="font-display font-semibold text-xl text-white mb-6">Envoyez-nous un message</h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Nom complet *</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500/50 transition-colors" placeholder="Jean Dupont"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500/50 transition-colors" placeholder="jean@email.fr"/>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Téléphone</label>
                      <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500/50 transition-colors" placeholder="06 12 34 56 78"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Sujet *</label>
                      <select className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-brand-500/50 transition-colors">
                        <option>Demande de devis</option>
                        <option>Question sur un service</option>
                        <option>Audit de site</option>
                        <option>Support technique</option>
                        <option>Partenariat</option>
                        <option>Autre</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                    <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500/50 transition-colors resize-none" placeholder="Décrivez votre projet ou votre question..."/>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="rgpd" className="accent-brand-500 mt-0.5"/>
                    <label htmlFor="rgpd" className="text-xs text-slate-400">
                      J'accepte que mes données soient traitées conformément à la{' '}
                      <a href="/politique-confidentialite" className="text-brand-400 hover:underline">politique de confidentialité</a> de Digiprogtech.
                    </label>
                  </div>
                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white font-semibold rounded-xl transition-all hover:scale-[1.01] shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2">
                    Envoyer le message <ArrowRight size={16}/>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
