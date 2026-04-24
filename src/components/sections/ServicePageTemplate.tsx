import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import {
  Code2, Globe, Zap, RefreshCw, Gauge, Palette, PenTool, Layers,
  BookOpen, Server, Cloud, Wrench, Shield, Lock, ShieldCheck, HardDrive,
  Search, Image, Database, Settings, Users, Layout, MousePointer, Grid,
  TestTube, FileText, Wallet, Smartphone, Lightbulb, Copy, FileImage,
  Edit, GitBranch, Box, TrendingUp, Activity, Bell, Headphones, Target,
  BarChart2, Swords, Eye, Bug, HardDrive as HDD, RotateCcw, BarChart,
  Mail, Plug, LayoutDashboard, Type, MessageSquare, Monitor, Shapes,
  Printer, Brush,
} from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Badge, Button } from "@/components/ui";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2, Globe, Zap, RefreshCw, Gauge, Palette, PenTool, Layers, Brush,
  BookOpen, Server, Cloud, Wrench, Shield, Lock, ShieldCheck, HardDrive,
  Search, Image, Database, Settings, Users, Layout, MousePointer, Grid,
  TestTube, FileText, Wallet, Smartphone, Lightbulb, Copy, FileImage,
  Edit, GitBranch, Box, TrendingUp, Activity, Bell, Headphones, Target,
  BarChart2, Swords, Eye, Bug, HDD, RotateCcw, BarChart, Mail, Plug,
  LayoutDashboard, Type, MessageSquare, Monitor, Shapes, Printer,
};

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const I = ICON_MAP[name] || Code2;
  return <I size={size} />;
}

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  features: { title: string; desc: string; icon: string }[];
  useCases: string[];
  deliverables: string[];
  pricing: { label: string; price: string; note: string };
  process: { step: string; title: string; desc: string }[];
}

export default function ServicePageTemplate({ data, slug }: { data: ServiceData; slug: string }) {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-slate-300 transition-colors">Accueil</Link>
            <ChevronRight size={14} />
            <Link href="/services/developpement-web" className="hover:text-slate-300 transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-slate-300">{data.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge color="brand">
                <Icon name={data.icon} size={12} />
                {data.subtitle}
              </Badge>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                {data.title}
              </h1>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed">{data.description}</p>

              {/* Pricing pill */}
              <div className="mt-8 inline-flex items-center gap-3 glass px-6 py-4 rounded-2xl">
                <div>
                  <p className="text-xs text-slate-500">{data.pricing.label}</p>
                  <p className="text-2xl font-display font-bold text-white">{data.pricing.price}</p>
                  <p className="text-xs text-slate-500">{data.pricing.note}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Button href="/devis" size="lg" icon>Demander un devis</Button>
                <Button href="/contact" variant="outline" size="lg">Nous contacter</Button>
              </div>
            </div>

            {/* Visual card */}
            <div className={`relative hidden lg:block`}>
              <div className={`w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br ${data.color} opacity-10 absolute inset-0`} />
              <div className="relative glass rounded-3xl p-10 flex items-center justify-center aspect-square max-w-md mx-auto">
                <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${data.color} flex items-center justify-center text-white shadow-2xl`}>
                  <Icon name={data.icon} size={56} />
                </div>
                {/* Floating chips */}
                {data.features.slice(0, 3).map((f, i) => (
                  <div
                    key={i}
                    className="absolute glass px-4 py-2 rounded-xl text-xs font-medium text-slate-300"
                    style={{
                      top: i === 0 ? "15%" : i === 1 ? "50%" : "80%",
                      right: i % 2 === 0 ? "-5%" : undefined,
                      left: i % 2 !== 0 ? "-5%" : undefined,
                    }}
                  >
                    <Icon name={f.icon} size={12} /> {f.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white text-center mb-4">
            Ce qui est <span className="text-gradient">inclus</span>
          </h2>
          <p className="text-slate-400 text-center mb-14 max-w-xl mx-auto">
            Tout ce dont vous avez besoin, sans les mauvaises surprises.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.features.map((f) => (
              <div key={f.title} className="glass rounded-2xl p-6 hover:border-brand-500/25 transition-all group hover:-translate-y-1">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${data.color} flex items-center justify-center text-white mb-4`}>
                  <Icon name={f.icon} size={18} />
                </div>
                <h3 className="font-semibold text-white mb-1.5">{f.title}</h3>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white text-center mb-4">
            Notre <span className="text-gradient">processus</span>
          </h2>
          <p className="text-slate-400 text-center mb-14 max-w-xl mx-auto">
            Une méthodologie éprouvée pour garantir votre satisfaction.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((step, i) => (
              <div key={step.step} className="relative">
                {i < data.process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-brand-500/40 to-transparent z-0" style={{ width: "calc(100% - 3rem)", left: "4rem" }} />
                )}
                <div className="glass rounded-2xl p-6 relative z-10">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${data.color} flex items-center justify-center text-white font-display font-bold text-lg mb-4`}>
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases + deliverables */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-display font-bold text-white mb-6">Pour qui ?</h3>
            <ul className="space-y-3">
              {data.useCases.map((uc) => (
                <li key={uc} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="text-brand-400 flex-shrink-0" />
                  {uc}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-display font-bold text-white mb-6">Livrables</h3>
            <ul className="space-y-3">
              {data.deliverables.map((d) => (
                <li key={d} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="text-accent-400 flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`rounded-3xl bg-gradient-to-br ${data.color} p-px`}>
            <div className="bg-dark-800 rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Prêt à lancer votre projet ?
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Obtenez un devis personnalisé et gratuit en moins de 24h.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="/devis" size="lg" icon>Devis gratuit</Button>
                <Button href="/contact" variant="outline" size="lg">Nous contacter</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
