export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "pourquoi-site-web-rapide-essentiel",
    title: "Pourquoi un site web rapide est essentiel pour votre SEO en 2024",
    excerpt: "La vitesse de chargement est désormais un facteur de classement majeur pour Google. Découvrez comment optimiser vos Core Web Vitals.",
    category: "SEO & Performance",
    date: "2024-11-15",
    readTime: "7 min",
    image: "/blog/seo-vitesse.jpg",
    tags: ["SEO", "Performance", "Core Web Vitals"],
    content: `La vitesse de chargement d'un site web n'est plus seulement un critère de confort pour vos visiteurs — c'est devenu un facteur de classement officiel pour Google depuis l'introduction des Core Web Vitals.

## Qu'est-ce que les Core Web Vitals ?

Les Core Web Vitals sont trois métriques clés que Google utilise pour évaluer l'expérience utilisateur :

- **LCP (Largest Contentful Paint)** : mesure le temps de chargement de l'élément principal visible
- **FID (First Input Delay)** : mesure la réactivité aux interactions
- **CLS (Cumulative Layout Shift)** : mesure la stabilité visuelle

## Comment améliorer vos scores ?

### 1. Optimisez vos images
Utilisez des formats modernes comme WebP ou AVIF. Compressez sans perte de qualité visible.

### 2. Mettez en place un CDN
Un Content Delivery Network distribue vos fichiers depuis le serveur le plus proche de vos visiteurs.

### 3. Minimisez le JavaScript
Supprimez le code inutilisé, lazy-loadez les scripts non critiques.

### 4. Activez le cache navigateur
Configurez les headers HTTP pour mettre en cache les ressources statiques.

## L'impact sur le business

Un site qui charge en 1 seconde convertit 3x mieux qu'un site qui charge en 5 secondes. Chaque seconde de délai supplémentaire représente une perte de 7% de conversions.`,
  },
  {
    slug: "securite-web-guide-complet",
    title: "Guide complet de la sécurité web : protéger votre site en 2024",
    excerpt: "Attaques DDoS, injections SQL, XSS... Découvrez les menaces actuelles et les meilleures pratiques pour sécuriser votre site web.",
    category: "Sécurité",
    date: "2024-11-08",
    readTime: "10 min",
    image: "/blog/securite-web.jpg",
    tags: ["Sécurité", "HTTPS", "Protection"],
    content: `La sécurité web est devenue une priorité absolue pour toute entreprise en ligne. Les cyberattaques touchent des milliers de sites chaque jour, même les petits.

## Les principales menaces

### Injections SQL
Les injections SQL permettent à un attaquant d'exécuter des requêtes malveillantes dans votre base de données.

### Cross-Site Scripting (XSS)
Les attaques XSS injectent des scripts malveillants dans vos pages web pour voler des données utilisateur.

### Attaques par force brute
Des bots tentent des milliers de combinaisons mot de passe pour accéder à vos comptes admin.

## Les solutions essentielles

1. **HTTPS obligatoire** — Chiffrez toutes les communications
2. **WAF (Web Application Firewall)** — Filtrez le trafic malveillant
3. **Mises à jour régulières** — Corrigez les vulnérabilités connues
4. **Sauvegardes automatiques** — Récupérez en cas d'incident`,
  },
  {
    slug: "tendances-design-web-2024",
    title: "Les tendances design web incontournables de 2024",
    excerpt: "Glassmorphism, dark mode, micro-animations... Le design web évolue rapidement. Voici ce qui définit les interfaces modernes.",
    category: "Design",
    date: "2024-11-01",
    readTime: "6 min",
    image: "/blog/design-tendances.jpg",
    tags: ["Design", "UI/UX", "Tendances"],
  },
  {
    slug: "hebergement-cloud-vs-traditionnel",
    title: "Cloud vs Hébergement Traditionnel : que choisir pour votre projet ?",
    excerpt: "VPS, cloud, mutualisé... Naviguer entre les options d'hébergement peut être complexe. Voici un guide clair pour faire le bon choix.",
    category: "Hébergement",
    date: "2024-10-24",
    readTime: "8 min",
    image: "/blog/cloud-hebergement.jpg",
    tags: ["Cloud", "Hébergement", "Infrastructure"],
  },
  {
    slug: "react-vs-nextjs-quelle-difference",
    title: "React vs Next.js : quelle différence et lequel choisir ?",
    excerpt: "Next.js est construit sur React mais apporte bien plus. SSR, SSG, SEO optimisé... On vous explique tout en termes simples.",
    category: "Développement",
    date: "2024-10-17",
    readTime: "9 min",
    image: "/blog/react-nextjs.jpg",
    tags: ["React", "Next.js", "Développement"],
  },
  {
    slug: "audit-seo-comment-ca-marche",
    title: "Comment fonctionne un audit SEO et pourquoi en avez-vous besoin ?",
    excerpt: "Un audit SEO révèle les freins cachés qui empêchent votre site de ranker. Découvrez notre méthode en 4 étapes.",
    category: "SEO & Performance",
    date: "2024-10-10",
    readTime: "7 min",
    image: "/blog/audit-seo.jpg",
    tags: ["SEO", "Audit", "Google"],
  },
];
