import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PageTitle } from '../ui/Cards'

const posts = [
  {
    title: 'Cómo elegir una actividad extraescolar',
    excerpt: '3 preguntas rápidas para orientar la decisión: interés, horario y objetivo.',
    readTime: '2 min',
    date: 'Abril 2025',
    emoji: '🎯',
  },
  {
    title: 'Campamentos: qué llevar',
    excerpt: 'Una checklist completa para no olvidarte de lo importante antes del campamento.',
    readTime: '3 min',
    date: 'Marzo 2025',
    emoji: '🎒',
  },
  {
    title: 'Aprendizaje por proyectos',
    excerpt: 'Por qué funciona y cómo se adapta a diferentes edades para potenciar la motivación.',
    readTime: '4 min',
    date: 'Febrero 2025',
    emoji: '🚀',
  },
]



export function Blog() {
  return (
    <div className="space-y-5">
      {/* Breadcrumb */}
      <nav aria-label="Ruta de navegación" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="transition hover:text-brand">Inicio</Link></li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li><span className="font-semibold text-slate-700" aria-current="page">Blog</span></li>
        </ol>
      </nav>

      <PageTitle>Blog</PageTitle>
      <p className="text-center text-sm text-slate-500">Consejos, guías y recursos para familias.</p>

      {/* Lista de posts */}
      <div className="grid gap-4" role="list" aria-label="Artículos del blog">
        {posts.map((p, i) => (
          <motion.article
            key={p.title}
            role="listitem"
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 16 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.07 }}
            aria-labelledby={`post-${i}-heading`}
          >
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-2xl" aria-hidden="true">
                {p.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span>{p.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>
                    <span className="sr-only">Tiempo de lectura: </span>{p.readTime} de lectura
                  </span>
                </div>
                <h2 id={`post-${i}-heading`} className="mt-1 text-base font-extrabold text-slate-900">
                  {p.title}
                </h2>
                <p className="mt-1 text-sm text-slate-600">{p.excerpt}</p>
                {/* Link semántico — sustituye el button sin acción */}
                <Link
                  to="/contacto"
                  className="mt-3 inline-flex min-h-[40px] items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-extrabold text-white transition hover:brightness-95 active:scale-[0.99]"
                  aria-label={`Leer más sobre ${p.title}`}
                >
                  Leer más <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Suscripción / CTA */}
      <motion.section
        className="rounded-2xl bg-gradient-to-br from-brandL/20 to-brand/10 p-5"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 16 }}
        viewport={{ once: true }}
        aria-labelledby="blog-cta-heading"
      >
        <h2 id="blog-cta-heading" className="text-base font-extrabold text-slate-900">
          ¿Tienes una pregunta?
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Contáctanos directamente y te orientamos sin compromiso.
        </p>
        <Link
          to="/contacto"
          className="mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-extrabold text-white shadow-soft transition hover:brightness-95 active:scale-[0.99]"
        >
          Contactar →
        </Link>
      </motion.section>
    </div>
  )
}
