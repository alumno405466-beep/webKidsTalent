import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { whatsappLink } from '../content/contact'

const steps = [
  { icon: '🔍', title: 'Diagnóstico inicial', body: 'Evaluamos el nivel, intereses y objetivos de cada niño sin presión.' },
  { icon: '🎯', title: 'Plan personalizado', body: 'Diseñamos una ruta de aprendizaje adaptada a su edad y ritmo.' },
  { icon: '🚀', title: 'Aprendizaje activo', body: 'Proyectos reales, juegos y retos que hacen que aprender sea motivador.' },
  { icon: '📈', title: 'Seguimiento continuo', body: 'Feedback constante con la familia para ajustar y celebrar el progreso.' },
]



export function Metodo() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav aria-label="Ruta de navegación" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="transition hover:text-brand">Inicio</Link></li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li><span className="font-semibold text-slate-700" aria-current="page">Método</span></li>
        </ol>
      </nav>

      {/* Hero de color de marca */}
      <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-brand to-brandD p-6 text-white" aria-labelledby="metodo-heading">
        <h1 id="metodo-heading" className="text-2xl font-extrabold sm:text-3xl">Nuestro Método</h1>
        <p className="mt-2 text-sm leading-relaxed text-white/90 max-w-prose">
          Un enfoque personalizado basado en metas claras, adaptado a la edad, pasiones y disponibilidad de cada niño.
          Evitamos enfoques genéricos y buscamos la combinación perfecta para cada familia.
        </p>
      </section>

      {/* Proceso de 4 pasos */}
      <section aria-labelledby="proceso-heading">
        <h2 id="proceso-heading" className="text-xl font-extrabold text-slate-900 mb-4">
          Cómo trabajamos
        </h2>
        <div className="grid gap-4 sm:grid-cols-2" role="list">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              role="listitem"
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xl" aria-hidden="true">
                  {s.icon}
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand">
                  Paso {i + 1}
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enfoque */}
      <section aria-labelledby="enfoque-heading">
        <h2 id="enfoque-heading" className="text-xl font-extrabold text-slate-900 mb-3">Nuestro enfoque</h2>
        <div className="space-y-3">
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 16 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-sm font-extrabold text-slate-900">Metas y acompañamiento</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Buscamos la combinación perfecta: intereses personales, etapa de desarrollo, horarios flexibles y expectativas realistas.
              Mantenemos comunicación constante con las familias para asegurar el progreso.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 16 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <h3 className="text-sm font-extrabold text-slate-900">Actividades prácticas</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Nuestras sesiones incluyen proyectos reales, juegos interactivos y desafíos que fomentan el aprendizaje activo.
            </p>
            <div className="mt-3">
              <img
                src="https://images.pexels.com/photos/5274629/pexels-photo-5274629.jpeg"
                alt="Niños aprendiendo de forma práctica y divertida en Kids Talent"
                className="w-full rounded-2xl object-cover aspect-[16/9]"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 16 }}
        viewport={{ once: true }}
        aria-labelledby="metodo-cta-heading"
      >
        <h2 id="metodo-cta-heading" className="text-base font-extrabold text-slate-900">
          ¿Quieres conocer el método de primera mano?
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Te explicamos cómo funcionaría para tu hijo sin compromiso.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/contacto"
            className="flex min-h-[48px] items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-extrabold text-white shadow-soft transition hover:brightness-95 active:scale-[0.99]"
          >
            Solicitar información →
          </Link>
          <a
            href={whatsappLink('Hola, me gustaría más información sobre vuestro método de enseñanza.')}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[48px] items-center justify-center rounded-full bg-[#11AF4B] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#0f9d42] active:scale-[0.99]"
          >
            WhatsApp
          </a>
        </div>
      </motion.section>
    </div>
  )
}
