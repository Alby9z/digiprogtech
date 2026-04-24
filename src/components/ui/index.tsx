import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

// ─── Button ────────────────────────────────────────────────────────────────
interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
}

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  icon = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  const variants = {
    primary:
      "bg-brand-500 hover:bg-brand-400 text-white hover:shadow-lg hover:shadow-brand-500/30 hover:-translate-y-0.5",
    secondary:
      "bg-accent-500 hover:bg-accent-400 text-white hover:shadow-lg hover:shadow-accent-500/30 hover:-translate-y-0.5",
    outline:
      "border border-brand-500/40 text-brand-400 hover:bg-brand-500/10 hover:border-brand-400",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
  };
  const classes = clsx(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && <ArrowRight size={16} />}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
      {icon && <ArrowRight size={16} />}
    </button>
  );
}

// ─── Badge ─────────────────────────────────────────────────────────────────
export function Badge({
  children,
  color = "brand",
}: {
  children: React.ReactNode;
  color?: "brand" | "accent" | "green" | "purple";
}) {
  const colors = {
    brand: "bg-brand-500/15 text-brand-300 border-brand-500/20",
    accent: "bg-accent-500/15 text-accent-400 border-accent-500/20",
    green: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    purple: "bg-purple-500/15 text-purple-400 border-purple-500/20",
  };
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border",
        colors[color]
      )}
    >
      {children}
    </span>
  );
}

// ─── Section Wrapper ────────────────────────────────────────────────────────
export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={clsx("py-20 lg:py-28 px-4 sm:px-6", className)}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

// ─── Section Header ─────────────────────────────────────────────────────────
export function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
}: {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={clsx("mb-14", center && "text-center")}>
      {badge && (
        <Badge color="brand">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse2" />
          {badge}
        </Badge>
      )}
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

// ─── Feature Card ────────────────────────────────────────────────────────────
export function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient?: string;
}) {
  return (
    <div className="glass rounded-2xl p-6 hover:border-brand-500/25 transition-all group hover:-translate-y-1">
      <div
        className={clsx(
          "w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white",
          gradient
            ? `bg-gradient-to-br ${gradient}`
            : "bg-brand-500/20 text-brand-400"
        )}
      >
        <Icon size={20} />
      </div>
      <h3 className="font-display font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
