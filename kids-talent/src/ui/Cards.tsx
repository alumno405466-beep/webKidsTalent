import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useId, useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'

export function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-center text-3xl font-extrabold tracking-tight text-brand">
      {children}
    </h1>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-2xl font-extrabold tracking-tight text-brand">
      {children}
    </h2>
  )
}

export function Card({
  title,
  subtitle,
  image,
  footer,
  accent = 'teal',
  details,
}: {
  title: string
  subtitle?: string
  image?: ReactNode
  footer?: ReactNode
  accent?: 'teal' | 'none'
  details?: ReactNode
}) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const headingId = useId()

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.995 }}
      className="overflow-hidden rounded-2xl border border-brandD/60 bg-white shadow-soft"
      aria-labelledby={headingId}
    >
      {image ? (
        <div className="aspect-[16/9] w-full overflow-hidden bg-slate-200">{image}</div>
      ) : (
        <div className="aspect-[16/9] w-full bg-slate-200" aria-hidden="true" />
      )}

      <div
        className={[
          'px-3 py-2',
          accent === 'teal' ? 'bg-brand text-white' : 'bg-white',
        ].join(' ')}
      >
        <div
          id={headingId}
          className={[
            'text-lg font-extrabold leading-tight',
            accent === 'teal' ? 'text-white' : 'text-slate-900',
          ].join(' ')}
        >
          {title}
        </div>
        {subtitle ? (
          <div
            className={[
              'mt-1 text-xs',
              accent === 'teal' ? 'text-white/85' : 'text-slate-600',
            ].join(' ')}
          >
            {subtitle}
          </div>
        ) : null}
      </div>

      <div className="px-3 py-3">
        {footer ?? (
          <div className="flex items-center justify-between gap-2">
            <Button
              variant="secondary"
              className="h-9 min-h-0 rounded-full px-3 py-0 text-xs"
            >
              Reservar
            </Button>
            {/* Botón expandir — Fitts: min 44×44px */}
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-soft transition hover:brightness-95 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? `Cerrar detalles de ${title}` : `Ver detalles de ${title}`}
              onClick={() => setOpen((v) => !v)}
            >
              <motion.span
                className="text-lg font-bold leading-none"
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.18 }}
                aria-hidden="true"
              >
                +
              </motion.span>
            </button>
          </div>
        )}

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              id={panelId}
              role="region"
              aria-label={`Detalles de ${title}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="mt-3 rounded-2xl bg-slate-50 p-3 text-xs text-slate-700">
                {details ?? (
                  <div>
                    <div className="font-extrabold text-slate-900">
                      Detalles
                    </div>
                    <div className="mt-1">
                      Horarios, edades y plazas se confirman al contactar.
                    </div>
                  </div>
                )}
                <div className="mt-3">
                  <Link
                    to="/contacto"
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-extrabold text-white transition hover:brightness-95 active:scale-[0.99]"
                  >
                    Más info <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

export function PlaceholderImage({ label, src }: { label: string; src?: string }) {
  if (src) {
    return (
      <img
        src={src}
        alt={label}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    )
  }
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brandL/30 to-brand/20 text-sm font-extrabold text-brand/70"
      aria-label={label}
    >
      {label}
    </div>
  )
}
