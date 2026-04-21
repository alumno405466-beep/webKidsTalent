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
    'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-black uppercase tracking-wider outline-none transition-all focus-visible:ring-4 focus-visible:ring-[#10B2AE]/40 disabled:opacity-50 disabled:pointer-events-none'

  const variants: Record<Variant, string> = {
    primary:
      'bg-[#10B2AE] text-white shadow-[0_4px_20px_rgba(16,178,174,0.3)] hover:shadow-[#10B2AE]/50 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-[#FDBC1F] text-[#282828] shadow-[0_4px_15px_rgba(253,188,31,0.2)] hover:brightness-105 hover:-translate-y-0.5',
    ghost:
      'bg-transparent text-[#282828] border-2 border-slate-100 hover:border-[#10B2AE] hover:text-[#10B2AE]',
    danger:
      'bg-[#E92634] text-white hover:brightness-110 shadow-lg shadow-[#E92634]/20'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 500, damping: 15 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  )
}