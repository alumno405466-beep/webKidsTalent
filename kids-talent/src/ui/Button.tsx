import { motion, type HTMLMotionProps } from 'framer-motion'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'

export function Button({
  variant = 'primary',
  className = '',
  ...props
}: Omit<HTMLMotionProps<'button'>, 'className'> & {
  variant?: Variant
  className?: string
}) {
  const base =
    // min-h-[48px] — Ley de Fitts: área táctil mínima recomendada para móvil
    'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-black uppercase tracking-wider outline-none transition-all focus-visible:ring-4 focus-visible:ring-[#10B2AE]/40 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed select-none'

  const variants: Record<Variant, string> = {
    primary:
      'bg-[#10B2AE] text-white shadow-[0_4px_20px_rgba(16,178,174,0.3)] hover:shadow-[#10B2AE]/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]',
    secondary:
      'bg-[#FDBC1F] text-[#282828] shadow-[0_4px_15px_rgba(253,188,31,0.2)] hover:brightness-105 hover:-translate-y-0.5 active:scale-[0.99]',
    ghost:
      'bg-transparent text-[#282828] border-2 border-slate-200 hover:border-[#10B2AE] hover:text-[#10B2AE] active:scale-[0.99]',
    danger:
      'bg-[#E92634] text-white hover:brightness-110 shadow-lg shadow-[#E92634]/20 active:scale-[0.99]',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  )
}