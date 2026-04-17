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

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.995 }}
      className="overflow-hidden rounded-2xl border border-brandD/60 bg-white shadow-soft"
    >
      {image ? (
        <div className="aspect-[16/9] w-full bg-slate-200">{image}</div>
      ) : (
        <div className="aspect-[16/9] w-full bg-slate-200" />
      )}

      <div
        className={[
          'px-3 py-2',
          accent === 'teal' ? 'bg-brand text-white' : 'bg-white',
        ].join(' ')}
      >
        <div
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
              className="h-9 rounded-full px-3 py-0 text-xs"
            >
              Reservar
            </Button>
            <button
              type="button"
              className="grid h-8 w-8 place-items-center rounded-full bg-brand text-white shadow-soft transition hover:brightness-95 active:scale-[0.98]"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? 'Cerrar detalles' : 'Abrir detalles'}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={[
                  'text-lg leading-none transition-transform',
                  open ? 'rotate-45' : '',
                ].join(' ')}
                aria-hidden="true"
              >
                +
              </span>
            </button>
          </div>
        )}

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              id={panelId}
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
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-extrabold text-white transition active:scale-[0.99]"
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

export function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-100 text-xs font-extrabold text-slate-600">
      {label}
    </div>
  )
}

