import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-horizontal.png'
import { whatsappLink } from '../content/contact'

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/metodo', label: 'Método' },
  { to: '/programas', label: 'Programas' },
  { to: '/campamentos', label: 'Campamentos' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Cerrar con Escape (Nielsen #3 — control del usuario)
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  // Mover foco al botón cerrar al abrir el drawer
  useEffect(() => {
    if (open) {
      setTimeout(() => closeButtonRef.current?.focus(), 50)
    }
  }, [open])

  // Bloquear scroll del body cuando el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-[#10B2AE] text-white">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-3 py-2 sm:px-4">
          <NavLink
            to="/"
            className="flex items-center rounded-xl px-2 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-label="KidsTalent — Ir a inicio"
            onClick={() => setOpen(false)}
          >
            <img
              src={logo}
              alt="KidsTalent"
              className="h-9 w-auto"
            />
          </NavLink>

          {/* Botón hamburguesa — Fitts: min 48×48px */}
          <button
            ref={menuButtonRef}
            type="button"
            className="flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-1.5 rounded-xl bg-white/15 px-3 py-2 transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:bg-white/20"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="nav-drawer"
            aria-label={open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            {/* Icono hamburguesa / X animado */}
            <motion.span
              className="block h-0.5 w-5 origin-center rounded-full bg-white"
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-5 rounded-full bg-white"
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block h-0.5 w-5 origin-center rounded-full bg-white"
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          >
            <motion.aside
              id="nav-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ type: 'spring', stiffness: 520, damping: 40 }}
              className="absolute right-0 top-0 flex h-full w-[320px] max-w-[86vw] flex-col bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cabecera del drawer */}
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4">
                <img src={logo} alt="KidsTalent" className="h-7 w-auto" />
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand active:scale-95"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                >
                  {/* Icono X */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Navegación — Fitts: min-h-[48px] en cada item */}
              <nav aria-label="Menú principal" className="flex-1 overflow-y-auto px-4 py-3">
                <div className="grid gap-1">
                  {navItems.map((it) => (
                    <NavLink
                      key={it.to}
                      to={it.to}
                      end={it.to === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        [
                          'flex min-h-[48px] items-center justify-between rounded-2xl px-4 py-3 text-sm font-extrabold transition',
                          isActive
                            ? 'bg-brand text-white shadow-sm'
                            : 'text-slate-800 hover:bg-slate-100 active:bg-slate-200',
                        ].join(' ')
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{it.label}</span>
                          <span
                            className={isActive ? 'text-white/80' : 'text-slate-400'}
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>
              </nav>

              {/* CTA WhatsApp en drawer — acceso rápido al canal principal */}
              <div className="border-t border-slate-100 px-4 py-4">
                <a
                  href={whatsappLink('Hola, me gustaría recibir información sobre Kids Talent.')}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-[#11AF4B] px-4 py-3 text-sm font-extrabold text-white shadow transition hover:bg-[#0f9d42] active:scale-[0.98]"
                  onClick={() => setOpen(false)}
                >
                  {/* Icono WhatsApp */}
                  <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contactar por WhatsApp
                </a>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
