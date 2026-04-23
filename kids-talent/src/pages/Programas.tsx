import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  PROGRAM_CATEGORIES,
  PROGRAMS,
  type ProgramCategory,
} from '../content/programs'
import { Card, PageTitle } from '../ui/Cards'
import { whatsappLink } from '../content/contact'

function getImageForCategory(category: ProgramCategory): string {
  const images: Record<ProgramCategory, string> = {
    'Creatividad': 'https://images.pexels.com/photos/4543646/pexels-photo-4543646.jpeg',
    'Tecnología': 'https://images.pexels.com/photos/19902488/pexels-photo-19902488.jpeg',
    'Idiomas': 'https://images.pexels.com/photos/35893083/pexels-photo-35893083.jpeg',
    'Refuerzo académico': 'https://images.pexels.com/photos/4894738/pexels-photo-4894738.jpeg',
    'Experiencias': 'https://images.pexels.com/photos/5274629/pexels-photo-5274629.jpeg',
  }
  return images[category]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export function Programas() {
  const [category, setCategory] = useState<ProgramCategory | 'Todas'>('Todas')
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return PROGRAMS.filter((p) => {
      const categoryOk = category === 'Todas' ? true : p.category === category
      const queryOk = !query
        ? true
        : [p.title, p.category, p.summary, p.ages, p.interests.join(' ')]
            .join(' ')
            .toLowerCase()
            .includes(query)
      return categoryOk && queryOk
    })
  }, [category, q])

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Breadcrumb */}
      <motion.nav
        variants={itemVariants}
        aria-label="Ruta de navegación"
        className="text-sm text-slate-500"
      >
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link to="/" className="transition hover:text-brand">Inicio</Link>
          </li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li>
            <span className="font-semibold text-slate-700" aria-current="page">
              Programas
            </span>
          </li>
        </ol>
      </motion.nav>

      <motion.div variants={itemVariants}>
        <PageTitle>Nuestros Programas</PageTitle>
        <p className="mt-2 text-center text-sm text-slate-600 max-w-md mx-auto">
          Descubre actividades diseñadas para el desarrollo integral de tu hijo o hija.
        </p>
      </motion.div>

      {/* ——— Filtros y búsqueda ——— */}
      <motion.section
        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
        variants={itemVariants}
        aria-labelledby="filtros-heading"
      >
        <h2 id="filtros-heading" className="text-sm font-extrabold text-slate-900 mb-3">
          Encuentra el programa perfecto
        </h2>
        <div className="space-y-4">
          {/* Búsqueda con icono lupa */}
          <div className="relative">
            <label htmlFor="search" className="sr-only">Buscar programas</label>
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center" aria-hidden="true">
              <svg className="h-4 w-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </div>
            <input
              id="search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar por nombre, edad o interés…"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-9 pr-4 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              aria-describedby="search-help"
              autoComplete="off"
            />
            {q && (
              <button
                type="button"
                onClick={() => setQ('')}
                className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600"
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
          <p id="search-help" className="text-xs text-slate-500 -mt-2">
            Ej: robótica, 8 años, creatividad
          </p>

          {/* Chips de categoría */}
          <div role="group" aria-label="Filtrar por categoría">
            <div className="text-xs font-semibold text-slate-600 mb-2">Categoría</div>
            <div className="flex flex-wrap gap-2">
              {(['Todas', ...PROGRAM_CATEGORIES] as const).map((c) => (
                <motion.button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  className={[
                    'flex min-h-[44px] items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition',
                    c === category
                      ? 'bg-brand text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200',
                  ].join(' ')}
                  aria-pressed={c === category}
                >
                  {c === category && (
                    <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {c}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ——— Resultados ——— */}
      <section aria-live="polite" aria-atomic="false">
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-4 text-sm text-slate-500" aria-live="polite">
                <strong className="text-slate-800">{filtered.length}</strong>{' '}
                programa{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
              </div>
              <motion.div
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                role="list"
                aria-label="Lista de programas"
              >
                {filtered.map((p) => (
                  <motion.div
                    key={p.slug}
                    role="listitem"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <Link
                      to={`/programas/${p.slug}`}
                      className="block group"
                      aria-label={`Ver programa ${p.title}, ${p.category}, ${p.ages}`}
                    >
                      <Card
                        title={p.title}
                        subtitle={`${p.category} · ${p.ages}`}
                        image={
                          <img
                            src={getImageForCategory(p.category)}
                            alt={`Imagen de programa de ${p.category}`}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                        }
                        details={
                          <div>
                            <div className="font-semibold text-slate-900 mb-2">¿Qué desarrolla?</div>
                            <ul className="space-y-1 text-sm" aria-label="Habilidades que desarrolla">
                              {p.develops.slice(0, 3).map((x) => (
                                <li key={x} className="flex items-start gap-2">
                                  <span className="text-brand mt-0.5 shrink-0" aria-hidden="true">✓</span>
                                  {x}
                                </li>
                              ))}
                            </ul>
                            <p className="mt-3 text-xs text-slate-600">{p.summary}</p>
                          </div>
                        }
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-16 text-center"
              role="status"
              aria-live="polite"
            >
              <div className="text-5xl mb-4" aria-hidden="true">🔍</div>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                No se encontraron programas
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Prueba ajustando tus filtros o búsqueda.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={() => { setCategory('Todas'); setQ('') }}
                  className="min-h-[44px] rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-95 active:scale-[0.99]"
                >
                  Ver todos los programas
                </button>
                <a
                  href={whatsappLink('Hola, no encuentro el programa que busco. ¿Podéis ayudarme?')}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[44px] rounded-full bg-[#11AF4B] px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-95 active:scale-[0.99]"
                >
                  Preguntar por WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </motion.div>
  )
}
