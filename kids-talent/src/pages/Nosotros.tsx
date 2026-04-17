import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PageTitle } from '../ui/Cards'

const staff = [
  { name: 'Zara Inni', role: 'Coordinación' },
  { name: 'Beatriz Sánchez', role: 'Psicopedagogía' },
  { name: 'Virginia Ramos', role: 'Formación' },
  { name: 'Pablo Carrascoso', role: 'Audiovisual' },
]

export function Nosotros() {
  return (
    <div className="space-y-4">
      <section className="rounded-2xl border border-slate-200 bg-slate-100 p-4">
        <PageTitle>Nuestros profes</PageTitle>
        <p className="mt-2 text-center text-sm text-slate-700">
          Un equipo para orientarte y ayudarte a encontrar el mejor encaje.
        </p>
      </section>

      <div className="grid gap-3">
        {staff.map((p) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="rounded-2xl bg-slate-900 p-3 text-white"
          >
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-2xl bg-white/10" />
              <div className="min-w-0">
                <div className="text-sm font-extrabold">{p.name}</div>
                <div className="text-xs text-white/70">{p.role}</div>
              </div>
              <div className="ml-auto rounded-full bg-brand px-3 py-1 text-xs font-extrabold">
                Online
              </div>
            </div>
            <div className="mt-3 text-xs text-white/80">
              Te escribimos con un siguiente paso concreto según objetivos,
              horarios e intereses.
            </div>
          </motion.div>
        ))}
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="text-sm font-extrabold text-slate-900">¿Hablamos?</div>
        <p className="mt-1 text-sm text-slate-700">
          Contacta con nosotros por los canales habituales o usa el formulario.
        </p>
        <div className="mt-3 flex gap-2">
          <Link
            to="/contacto"
            className="flex-1 rounded-full bg-brand px-4 py-2 text-center text-sm font-extrabold text-white shadow-soft transition hover:brightness-95 active:scale-[0.99]"
          >
            Contacto <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

