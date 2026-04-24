# Digiprogtech — Site Web Professionnel

Site web Next.js 14 complet pour l'agence digitale Digiprogtech.

## 🚀 Démarrage rapide

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

## 🏗️ Stack technique
- **Next.js 14** (App Router)
- **React 18** + TypeScript
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icônes)

## 📁 Architecture

```
src/
├── app/
│   ├── layout.tsx              # Layout racine
│   ├── page.tsx                # Page d'accueil
│   ├── not-found.tsx           # Page 404
│   ├── sitemap.ts              # Sitemap XML auto
│   ├── robots.ts               # robots.txt auto
│   ├── services/
│   │   ├── developpement-web/  # Vue d'ensemble dev
│   │   ├── site-statique/      # ⭐ Site vitrine
│   │   ├── site-dynamique/     # ⭐ App dynamique
│   │   ├── refonte/
│   │   ├── optimisation/
│   │   ├── design-graphisme/   # Vue d'ensemble design
│   │   ├── logo/               # ⭐ Création logo
│   │   ├── ui-ux/              # ⭐ UI/UX design
│   │   ├── maquettes/
│   │   ├── charte-graphique/
│   │   ├── hebergement/
│   │   ├── cloud/
│   │   ├── deploiement/
│   │   ├── maintenance/
│   │   ├── securite/           # Vue d'ensemble sécu
│   │   ├── ssl/
│   │   ├── protection/
│   │   ├── anti-spam/
│   │   └── sauvegardes/
│   ├── audit/                  # ⭐ Formulaire audit
│   ├── devis/                  # ⭐ Formulaire devis
│   ├── blog/
│   │   ├── page.tsx            # Liste articles
│   │   └── [slug]/             # Article dynamique
│   ├── qui-sommes-nous/
│   ├── contact/
│   ├── mentions-legales/
│   ├── politique-confidentialite/
│   └── cookies/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navbar responsive + mega menu
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── PageHero.tsx
│   │   └── SectionTitle.tsx
│   └── sections/
├── data/
│   ├── navigation.json         # Structure du menu
│   └── blog.json               # Articles de blog
└── styles/
    └── globals.css             # Styles globaux + variables
```

## 🎨 Design System

- **Couleur primaire** : Blue brand (#3b63f7)
- **Couleur accent** : Orange (#f97316)
- **Background** : Dark (#080b14)
- **Police display** : Syne
- **Police body** : DM Sans
- **Police mono** : JetBrains Mono

## 📄 Pages créées (23 pages)

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/` | Hero + Services + CTA |
| Qui sommes-nous | `/qui-sommes-nous` | Équipe + valeurs |
| Site Statique | `/services/site-statique` | ⭐ Détail complet + packs |
| Site Dynamique | `/services/site-dynamique` | ⭐ Détail complet + process |
| Audit | `/audit` | ⭐ Formulaire audit complet |
| Devis | `/devis` | ⭐ Formulaire devis complet |
| Blog | `/blog` | Liste articles |
| Contact | `/contact` | Formulaire contact |
| + 15 autres pages services et légales | | |

## 🔧 Personnalisation

1. **Navigation** : Éditez `src/data/navigation.json`
2. **Blog** : Éditez `src/data/blog.json`
3. **Couleurs** : Éditez `tailwind.config.ts`
4. **SEO** : Chaque page a ses propres métadonnées

## 🌐 Déploiement

```bash
# Vercel (recommandé)
npx vercel

# Build statique
npm run build
npm start
```

## ✅ TODO avant mise en ligne

- [ ] Remplacer les infos légales (SIRET, adresse)
- [ ] Connecter les formulaires (ex: Resend, EmailJS, Formspree)
- [ ] Ajouter Google Analytics
- [ ] Configurer le domaine
- [ ] Ajouter les vraies images/illustrations
- [ ] Rédiger les articles de blog complets
- [ ] Connecter un CRM (optionnel)
