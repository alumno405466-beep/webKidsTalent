import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo-horizontal.png'

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
  const location = useLocation()

  const activeLabel = useMemo(() => {
    const found = navItems.find((x) => x.to === location.pathname)
    return found?.label ?? 'Kids Talent'
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-[#10B2AE] text-white">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-3 py-3 sm:px-4">
          <NavLink
            to="/"
            className="flex items-center rounded-xl px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300/70"
            aria-label="Ir a inicio"
            onClick={() => setOpen(false)}
          >
            <img
  src={logo}
  alt="KidsTalent"
  className="h-8 w-auto"
/>
          </NavLink>

          <button
            type="button"
            className="rounded-xl bg-white/15 px-3 py-2 text-sm font-semibold transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300/70 active:bg-white/20"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Abrir menú"
          >
            Menú
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ type: 'spring', stiffness: 520, damping: 40 }}
              className="absolute right-0 top-0 h-full w-[320px] max-w-[86vw] bg-white p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-extrabold text-slate-900">
                  Navegación
                </div>
                <button
  className="rounded-xl bg-[#E92634] px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:text-[#c21f2b] hover:bg-[#d9c5c6] hover:shadow-red-200 active:scale-95"
  onClick={() => setOpen(false)}
>
  Cerrar
</button>
              </div>

              <div className="mt-3 grid gap-2">
                {navItems.map((it) => (
                  <NavLink
                    key={it.to}
                    to={it.to}
                    end={it.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        'rounded-2xl px-3 py-3 text-sm font-extrabold transition',
                        isActive
                          ? 'bg-brand text-white'
                          : 'bg-slate-50 text-slate-900 hover:bg-[#10B2AE] hover:text-white active:bg-slate-200',
                      ].join(' ')
                    }
                  >
                    {it.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-4 rounded-2xl bg-slate-50 p-3 text-xs text-slate-700">
                Canal de captación y comunicación. Puedes iniciar el formulario y
                seguir la conversación desde “Contacto”.
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

