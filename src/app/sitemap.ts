import { MetadataRoute } from 'next'
import blogPosts from '@/data/blog.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://digiprogtech.fr'
  const staticPages = ['','qui-sommes-nous','services/developpement-web','services/site-statique','services/site-dynamique','services/refonte','services/optimisation','services/design-graphisme','services/logo','services/ui-ux','services/maquettes','services/charte-graphique','services/hebergement','services/cloud','services/deploiement','services/maintenance','services/securite','services/ssl','services/protection','services/anti-spam','services/sauvegardes','audit','devis','blog','contact']
  return [
    ...staticPages.map(page => ({ url: `${baseUrl}/${page}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: page === '' ? 1 : 0.8 })),
    ...blogPosts.map(post => ({ url: `${baseUrl}/blog/${post.slug}`, lastModified: new Date(post.date), changeFrequency: 'monthly' as const, priority: 0.6 })),
  ]
}
