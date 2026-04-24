import { Metadata } from 'next'
export const metadata: Metadata = { title: 'Mentions Légales', description: 'Mentions légales de Digiprogtech.' }
export default function MentionsLegalesPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-bold text-4xl text-white mb-10">Mentions Légales</h1>
        <div className="prose prose-invert max-w-none space-y-8">
          {[
            { title: 'Éditeur du site', content: ['Raison sociale : Digiprogtech','Forme juridique : [À compléter]','Capital social : [À compléter]','Siège social : [Adresse à compléter]','SIRET : [À compléter]','Email : digiprogtech@gmail.com'] },
            { title: 'Directeur de la publication', content: ['[Nom du dirigeant à compléter]','contact@digiprogtech.fr'] },
            { title: 'Hébergement', content: ['Hébergeur : Vercel Inc.','340 Pine Street, San Francisco, CA 94104, États-Unis','https://vercel.com'] },
            { title: 'Propriété intellectuelle', content: ['L\'ensemble du contenu de ce site (textes, images, code) est protégé par le droit d\'auteur. Toute reproduction est interdite sans autorisation préalable écrite de Digiprogtech.'] },
            { title: 'Limitation de responsabilité', content: ['Digiprogtech s\'efforce de fournir des informations exactes et à jour, mais ne peut garantir l\'exactitude, la complétude ou l\'actualité des informations diffusées sur le site.'] },
          ].map(section => (
            <div key={section.title} className="glass rounded-xl p-6 border border-white/6">
              <h2 className="font-display font-semibold text-xl text-white mb-4">{section.title}</h2>
              {section.content.map((line, i) => <p key={i} className="text-slate-400 text-sm">{line}</p>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
