import Link from 'next/link'
import clsx from 'clsx'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  external?: boolean
}

export default function Button({
  href, onClick, variant = 'primary', size = 'md', children, className, type = 'button', disabled, external
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 gap-2'
  const variants = {
    primary: 'bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02]',
    outline: 'border border-white/20 hover:border-brand-500/50 text-slate-300 hover:text-white hover:bg-white/5',
    ghost: 'text-slate-400 hover:text-white hover:bg-white/5',
  }
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }
  const cn = clsx(base, variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed', className)

  if (href) {
    return external
      ? <a href={href} className={cn} target="_blank" rel="noopener noreferrer">{children}</a>
      : <Link href={href} className={cn}>{children}</Link>
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cn}>
      {children}
    </button>
  )
}
