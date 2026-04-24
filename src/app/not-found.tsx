import Link from 'next/link'
import { ArrowRight, Home } from 'lucide-react'
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 grid-bg opacity-20"/>
      <div className="relative text-center px-4">
        <div className="font-display font-bold text-8xl text-brand-500/20 mb-4">404</div>
        <h1 className="font-display font-bold text-4xl text-white mb-4">Page introuvable</h1>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">La page que vous cherchez n'existe pas ou a été déplacée.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
            <Home size={16}/> Retour à l'accueil
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/15 text-slate-300 hover:text-white font-semibold rounded-xl transition-all">
            Contact <ArrowRight size={14}/>
          </Link>
        </div>
      </div>
    </div>
  )
}
