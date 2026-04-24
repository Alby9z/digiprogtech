import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from 'lucide-react'
import blogPosts from '@/data/blog.json'
import { notFound } from 'next/navigation'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) return { title: 'Article non trouvé' }
  return { title: post.title, description: post.excerpt }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) notFound()
  const related = blogPosts.filter(p => p.slug !== params.slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"/>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mb-8">
            <ArrowLeft size={14}/> Retour au blog
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-medium">{post.category}</span>
            <span className="text-xs text-slate-500 flex items-center gap-1"><Calendar size={12}/> {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span className="text-xs text-slate-500 flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">{post.title}</h1>
          <p className="text-xl text-slate-400 leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Article content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-64 glass rounded-2xl border border-white/10 mb-12 flex items-center justify-center">
            <div className="text-7xl">
              {post.category === 'Performance' ? '⚡' : post.category === 'Sécurité' ? '🔐' : post.category === 'Design' ? '🎨' : post.category === 'SEO' ? '🔍' : '💻'}
            </div>
          </div>

          {/* Article body (demo content) */}
          <div className="prose prose-invert max-w-none">
            <div className="glass rounded-2xl border border-white/8 p-8 md:p-12 space-y-6">
              <p className="text-slate-300 leading-relaxed text-base">{post.excerpt}</p>

              <h2 className="font-display font-bold text-2xl text-white pt-4">Introduction</h2>
              <p className="text-slate-400 leading-relaxed">Dans cet article, nous allons explorer en profondeur le sujet de <strong className="text-white">{post.title.toLowerCase()}</strong>. Ce guide pratique vous donnera les clés pour comprendre les enjeux et mettre en place des actions concrètes.</p>

              <h2 className="font-display font-bold text-2xl text-white pt-4">Les points essentiels</h2>
              <div className="space-y-3">
                {['Comprendre les fondamentaux','Analyser votre situation actuelle','Mettre en place les bonnes pratiques','Mesurer les résultats','Optimiser continuellement'].map((point, i) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">{i+1}</span>
                    <p className="text-slate-400">{point}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display font-bold text-2xl text-white pt-4">Conclusion</h2>
              <p className="text-slate-400 leading-relaxed">En suivant ces recommandations, vous serez en mesure d'améliorer significativement vos résultats. N'hésitez pas à nous contacter pour un accompagnement personnalisé.</p>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-slate-500">Cet article a été rédigé par l'équipe Digiprogtech. Vous avez des questions ? <Link href="/contact" className="text-brand-400 hover:underline">Contactez-nous</Link>.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 glass rounded-2xl border border-white/10 p-8 text-center">
            <h3 className="font-display font-bold text-2xl text-white mb-4">Besoin d'aide pour votre projet ?</h3>
            <p className="text-slate-400 mb-6">Notre équipe est disponible pour vous accompagner. Devis gratuit sous 24h.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/devis" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">Devis gratuit <ArrowRight size={14}/></Link>
              <Link href="/audit" className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/15 text-slate-300 hover:text-white font-semibold rounded-xl transition-all">Audit gratuit</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl text-white mb-8">Articles similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group glass rounded-2xl border border-white/8 hover:border-brand-500/20 p-6 transition-all hover:-translate-y-1">
                <span className="px-2 py-1 rounded-full bg-brand-500/15 text-brand-400 text-xs font-medium mb-3 inline-block">{p.category}</span>
                <h3 className="font-display font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors text-sm leading-snug">{p.title}</h3>
                <span className="flex items-center gap-1 text-brand-400 text-xs font-medium group-hover:gap-2 transition-all">Lire <ArrowRight size={10}/></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
