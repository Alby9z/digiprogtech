export const NAV_SERVICES = [
  {
    category: "Développement Web",
    icon: "Code2",
    href: "/services/developpement-web",
    children: [
      { label: "Site Statique (Vitrine)", href: "/services/site-statique", icon: "Globe" },
      { label: "Site Dynamique (App Web)", href: "/services/site-dynamique", icon: "Zap" },
      { label: "Refonte de Site", href: "/services/refonte", icon: "RefreshCw" },
      { label: "Optimisation Performance", href: "/services/optimisation", icon: "Gauge" },
    ],
  },
  {
    category: "Design & Graphisme",
    icon: "Palette",
    href: "/services/design-graphisme",
    children: [
      { label: "Création de Logo", href: "/services/logo", icon: "PenTool" },
      { label: "UI/UX Design", href: "/services/ui-ux", icon: "Layers" },
      { label: "Charte Graphique", href: "/services/charte-graphique", icon: "Brush" },
    ],
  },
  {
    category: "Hébergement & Cloud",
    icon: "Server",
    href: "/services/hebergement",
    children: [
      { label: "Hébergement Web", href: "/services/hebergement", icon: "Server" },
      { label: "Cloud & Infrastructure", href: "/services/cloud", icon: "Cloud" },
      { label: "Maintenance Technique", href: "/services/maintenance", icon: "Wrench" },
    ],
  },
  {
    category: "Sécurité Web",
    icon: "Shield",
    href: "/services/securite",
    children: [
      { label: "Certificat SSL / HTTPS", href: "/services/ssl", icon: "Lock" },
      { label: "Anti-Spam & Anti-Bot", href: "/services/anti-spam", icon: "ShieldCheck" },
      { label: "Sauvegardes & Monitoring", href: "/services/sauvegardes", icon: "HardDrive" },
    ],
  },
];

export const NAV_MAIN = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services/developpement-web", hasDropdown: true },
  { label: "Audit", href: "/audit" },
  { label: "Blog", href: "/blog" },
  { label: "À Propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];
