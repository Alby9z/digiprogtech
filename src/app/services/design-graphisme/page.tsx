import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Palette, PenTool, Layout, Layers } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCard from '@/components/ui/ServiceCard'

export const metadata: Metadata = {
  title: 'Design & Graphisme — UI/UX, Logo, Charte Graphique',
  description: 'Services de design complets : création de logo, UI/UX design, maquettes Figma, charte graphique. Des interfaces qui convertissent.',
}

const services = [
  { icon: <PenTool size={20} />, title: 'Création de Logo', description: 'Identité visuelle forte et mémorable qui reflète vos valeurs.', href: '/services/logo', features: ['3 propositions', 'Tous formats', 'Charte de base'] },
  { icon: <Layout size={20} />, title: 'UI/UX Design', description: 'Interfaces intuitives pensées pour l\'utilisateur et la conversion.', href: '/services/ui-ux', features: ['Wireframes', 'Prototypes', 'Tests utilisateurs'] },
  { icon: <Layers size={20} />, title: 'Maquettes & Prototypes', description: 'Visualisez votre projet avant le développement avec Figma.', href: '/services/maquettes', features: ['Figma', 'Clickable prototypes', 'Itérations illimitées'] },
  { icon: <Palette size={20} />, title: 'Charte Graphique', description: 'Cohérence visuelle sur tous vos supports digitaux et print.', href: '/services/charte-graphique', features: ['Couleurs', 'Typographies', 'Règles d\'usage'] },
]

export default function DesignGraphismePage() {
  return (
    <>
      <PageHero
        badge="🎨 Design & Graphisme"
        title="Design qui"
        highlight="convertit"
        description="Un bon design ne sert pas qu'à être beau. Nos interfaces sont pensées pour guider vos visiteurs, renforcer votre crédibilité et transformer les clics en clients."
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-all">
            Demander un devis <ArrowRight size={16} />
          </Link>
        </div>
      </PageHero>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Nos spécialités" title="Tout le design," highlight="rien que le design" description="Du logo à l'interface complète, nous couvrons tous vos besoins graphiques." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
