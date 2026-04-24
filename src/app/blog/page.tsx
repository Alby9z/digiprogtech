import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import blogPosts from '@/data/blog.json'

export const metadata: Metadata = {
  title: 'Blog — Conseils Web, SEO, Design & Sécurité',
  description: 'Conseils pratiques et guides experts sur le développement web, le SEO, le design UI/UX et la sécurité web. Par les experts Digiprogtech.',
}

const categories = ['Tous', 'Développement', 'SEO', 'Design', 'Performance', 'Sécurité', 'Stratégie Digitale']

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/8 rounded-full blur-3xl"/>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-brand-500/30 text-brand-400 text-xs font-medium mb-6">📖 Blog & Ressources</div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
            Ressources <span className="gradient-text">Experts</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Guides pratiques, conseils stratégiques et analyses approfondies pour faire croître votre présence digitale.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat, i) => (
              <button key={cat} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${i === 0 ? 'bg-brand-500/20 text-brand-400 border border-brand-500/30' : 'glass border border-white/8 text-slate-400 hover:text-white hover:border-white/20'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured article */}
          <div className="mb-12">
            <Link href={`/blog/${blogPosts[0].slug}`} className="group block glass rounded-2xl border border-white/8 hover:border-brand-500/20 transition-all overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-brand-500/20 to-accent-500/10 flex items-center justify-center">
                  <div className="text-6xl">📱</div>
                </div>
                <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-medium">{blogPosts[0].category}</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1"><Clock size={12}/> {blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 group-hover:text-brand-400 transition-colors leading-tight">{blogPosts[0].title}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                  <span className="flex items-center gap-2 text-brand-400 text-sm font-medium group-hover:gap-3 transition-all">
                    Lire l'article <ArrowRight size={14}/>
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group glass rounded-2xl border border-white/8 hover:border-brand-500/20 transition-all overflow-hidden hover:-translate-y-1">
                <div className="h-40 bg-gradient-to-br from-brand-500/15 to-dark-700 flex items-center justify-center">
                  <div className="text-4xl">
                    {post.category === 'Performance' ? '⚡' : post.category === 'Sécurité' ? '🔐' : post.category === 'Design' ? '🎨' : post.category === 'SEO' ? '🔍' : '💻'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 rounded-full bg-brand-500/15 text-brand-400 text-xs font-medium">{post.category}</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1"><Clock size={10}/> {post.readTime}</span>
                  </div>
                  <h3 className="font-display font-semibold text-white mb-3 group-hover:text-brand-400 transition-colors leading-snug">{post.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <span className="flex items-center gap-1 text-brand-400 text-xs font-medium group-hover:gap-2 transition-all">
                    Lire <ArrowRight size={12}/>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="glass rounded-2xl border border-white/10 p-10">
            <h2 className="font-display font-bold text-3xl text-white mb-4">Recevez nos meilleurs conseils</h2>
            <p className="text-slate-400 mb-6">Newsletter mensuelle : stratégie digitale, tips SEO, design et performance. Sans spam.</p>
            <div className="flex gap-3">
              <input type="email" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500/50 transition-colors" placeholder="votre@email.fr"/>
              <button type="button" className="px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm whitespace-nowrap">S'abonner</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
