import { motion, type HTMLMotionProps } from 'framer-motion'

type Variant = 'primary' | 'secondary' | 'ghost'

export function Button({
  variant = 'primary',
  className = '',
  ...props
}: Omit<HTMLMotionProps<'button'>, 'className'> & {
  variant?: Variant
  className?: string
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-brand-400/60 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none'

  const variants: Record<Variant, string> = {
    primary:
      'bg-brand text-white shadow-soft hover:brightness-95 active:brightness-90',
    secondary:
      'bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300',
    ghost:
      'bg-transparent text-slate-900 hover:bg-slate-100 active:bg-slate-200',
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 900, damping: 45 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  )
}

