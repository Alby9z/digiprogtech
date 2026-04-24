import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | Digiprogtech',
    default: 'Digiprogtech — Agence Digitale Expert Web, Design & Sécurité',
  },
  description: 'Digiprogtech : développement web sur mesure, design UI/UX, hébergement cloud, sécurité web et audit de sites. Solutions digitales performantes pour votre croissance.',
  keywords: ['développement web', 'agence digitale', 'design ui ux', 'hébergement cloud', 'audit site web', 'sécurité web', 'Next.js', 'React'],
  authors: [{ name: 'Digiprogtech' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://digiprogtech.fr',
    siteName: 'Digiprogtech',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="noise">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
