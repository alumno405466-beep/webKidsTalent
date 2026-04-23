import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PageTitle } from '../ui/Cards'
import { JsonLd } from '../seo/JsonLd'

const faqCategories = [
  {
    label: 'El centro',
    icon: '🏫',
    faqs: [
      { q: '¿Qué es Kids Talent en Toledo y qué tipo de actividades ofrece para niños?', a: 'Kids Talent Toledo es un centro educativo en Toledo especializado en apoyo escolar, refuerzo educativo, técnicas de estudio y desarrollo emocional para niños. Sus actividades combinan aprendizaje académico con habilidades personales como la concentración, la autoestima y la motivación.' },
      { q: '¿Es como una academia tradicional o hay diferencias?', a: 'A diferencia de una academia tradicional en Toledo, Kids Talent se centra no solo en aprobar asignaturas, sino en enseñar a los niños cómo estudiar, cómo concentrarse y cómo ganar confianza en sí mismos.' },
      { q: '¿Dónde está ubicado Kids Talent en Toledo?', a: 'El centro está situado en la Avenida de Irlanda, una zona accesible dentro de Toledo.' },
      { q: '¿Se puede probar antes de apuntarse?', a: 'Normalmente se ofrece una sesión inicial de valoración para conocer al niño y explicar el funcionamiento del centro.' },
    ],
  },
  {
    label: 'Alumnos',
    icon: '👦',
    faqs: [
      { q: '¿A qué edades pueden asistir los niños a Kids Talent Toledo?', a: 'El centro está dirigido a niños desde educación infantil (aprox. 3 años) hasta secundaria, adaptando las clases según la edad, nivel académico y necesidades individuales.' },
      { q: '¿Es adecuado para niños tímidos o con dificultades sociales?', a: 'Sí, el ambiente está diseñado para ser cercano y seguro, ayudando a los niños a integrarse progresivamente.' },
      { q: '¿Puede ayudar si mi hijo va mal en el colegio?', a: 'Sí, especialmente en casos de bajo rendimiento, falta de motivación o dificultades en asignaturas concretas.' },
      { q: '¿Mi hijo puede ir solo unos días a la semana?', a: 'Sí, hay flexibilidad de horarios y asistencia según las necesidades de cada familia.' },
    ],
  },
  {
    label: 'Método',
    icon: '📚',
    faqs: [
      { q: '¿Cómo ayudan a mejorar las notas de mi hijo?', a: 'El enfoque se basa en mejorar la comprensión, los hábitos de estudio y la organización. Esto suele traducirse en una mejora progresiva del rendimiento escolar.' },
      { q: '¿Se trabajan técnicas de estudio?', a: 'Sí, es uno de los pilares principales: organización, planificación, memorización y comprensión.' },
      { q: '¿Cómo saben qué necesita exactamente mi hijo?', a: 'Se realiza una evaluación inicial para detectar nivel académico, dificultades y puntos fuertes, y así adaptar el aprendizaje.' },
      { q: '¿Qué pasa si mi hijo tiene problemas de atención o concentración?', a: 'En Kids Talent Toledo se aplican técnicas específicas para mejorar la atención, especialmente útiles en niños con dificultades de concentración o perfiles como TDAH.' },
      { q: '¿Trabajan también la parte emocional de los niños?', a: 'Sí, el desarrollo emocional es una parte fundamental. Se trabaja la autoestima, la frustración, la motivación y las habilidades sociales.' },
    ],
  },
  {
    label: 'Grupos y familias',
    icon: '👨‍👩‍👧',
    faqs: [
      { q: '¿Cómo son los grupos de alumnos?', a: 'Los grupos son reducidos, lo que permite una atención personalizada y un seguimiento cercano de cada niño.' },
      { q: '¿Hay comunicación con los padres?', a: 'Sí, el centro mantiene contacto frecuente con las familias para informar sobre el progreso y evolución del niño.' },
    ],
  },
]

const allFaqs = faqCategories.flatMap((c) => c.faqs)

export function Faqs() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const displayCategories = activeCategory
    ? faqCategories.filter((c) => c.label === activeCategory)
    : faqCategories

  const filtered = search.trim()
    ? [{
        label: 'Resultados',
        icon: '🔍',
        faqs: allFaqs.filter(
          (f) =>
            f.q.toLowerCase().includes(search.toLowerCase()) ||
            f.a.toLowerCase().includes(search.toLowerCase()),
        ),
      }]
    : displayCategories

  return (
    <div className="space-y-6">
      <JsonLd data={faqJsonLd} />

      {/* Breadcrumb */}
      <nav aria-label="Ruta de navegación" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="transition hover:text-brand">Inicio</Link></li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li><span className="font-semibold text-slate-700" aria-current="page">FAQs</span></li>
        </ol>
      </nav>

      <PageTitle>Preguntas frecuentes</PageTitle>

      {/* Búsqueda */}
      <div className="relative">
        <label htmlFor="faq-search" className="sr-only">Buscar en las preguntas frecuentes</label>
        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center" aria-hidden="true">
          <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
          </svg>
        </div>
        <input
          id="faq-search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar pregunta…"
          className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-9 pr-4 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
          aria-label="Buscar en las preguntas frecuentes"
        />
      </div>

      {/* Chips de categoría — Ley de Miller: agrupar */}
      {!search && (
        <div role="group" aria-label="Filtrar por categoría" className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            aria-pressed={activeCategory === null}
            className={['flex min-h-[40px] items-center rounded-full px-4 py-2 text-sm font-semibold transition', activeCategory === null ? 'bg-brand text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'].join(' ')}
          >
            Todas
          </button>
          {faqCategories.map((c) => (
            <button
              key={c.label}
              type="button"
              onClick={() => setActiveCategory(c.label === activeCategory ? null : c.label)}
              aria-pressed={activeCategory === c.label}
              className={['flex min-h-[40px] items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition', activeCategory === c.label ? 'bg-brand text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'].join(' ')}
            >
              <span aria-hidden="true">{c.icon}</span> {c.label}
            </button>
          ))}
        </div>
      )}

      {/* FAQs agrupadas */}
      {filtered.map((cat) => (
        <section key={cat.label} aria-labelledby={`cat-${cat.label}`}>
          {!search && (
            <h2 id={`cat-${cat.label}`} className="mb-3 flex items-center gap-2 text-base font-extrabold text-slate-900">
              <span aria-hidden="true">{cat.icon}</span> {cat.label}
            </h2>
          )}
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
            {cat.faqs.length === 0 ? (
              <p className="py-4 text-center text-sm text-slate-400">No se encontraron preguntas.</p>
            ) : (
              cat.faqs.map((f, i) => {
                const key = `${cat.label}-${i}`
                const isOpen = openIndex === key
                return (
                  <div key={key} className="rounded-2xl bg-slate-50 overflow-hidden">
                    <button
                      type="button"
                      className="flex w-full min-h-[52px] items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-extrabold text-slate-900 transition hover:bg-slate-100"
                      onClick={() => setOpenIndex(isOpen ? null : key)}
                      aria-expanded={isOpen}
                      aria-controls={`answer-${key}`}
                    >
                      <span>{f.q}</span>
                      {/* Chevron animado */}
                      <motion.svg
                        className="h-4 w-4 shrink-0 text-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`answer-${key}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="overflow-hidden"
                          role="region"
                          aria-label={f.q}
                        >
                          <p className="px-4 pb-4 pt-1 text-sm leading-relaxed text-slate-700">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })
            )}
          </div>
        </section>
      ))}
    </div>
  )
}
