import { Link } from 'react-router-dom'

export function Metodo() {
  return (
    <div className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-brand pb-10 pt-4 text-white">
      <div className="mx-auto w-full max-w-5xl px-3 sm:px-4">
        <div className="text-left">
          <h1 className="text-2xl font-extrabold">Método</h1>
        </div>

        <section className="mt-3 rounded-2xl bg-white p-4 text-slate-900 shadow-soft">
          <div className="text-sm font-extrabold text-slate-900">Método</div>
          <p className="mt-2 text-sm text-slate-700">
            Trabajamos con un plan orientado a objetivos y recomendaciones
            concretas según edad, intereses y disponibilidad.
          </p>
        </section>

        <section className="mt-4 rounded-2xl bg-white p-4 text-slate-900 shadow-soft">
          <div className="text-sm font-extrabold text-slate-900">Objetivos</div>
          <p className="mt-2 text-sm text-slate-700">
            Evitar “probar al azar”. Buscamos encaje: intereses, edad, horarios y
            expectativas. Te acompañamos con comunicación continua.
          </p>
        </section>

        <div className="mt-5">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-slate-900 shadow-soft transition hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
          >
            Más info <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

