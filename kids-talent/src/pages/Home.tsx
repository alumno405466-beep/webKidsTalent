import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CONTACT, whatsappLink } from '../content/contact'
import { PROGRAM_CATEGORIES } from '../content/programs'
import { PageTitle } from '../ui/Cards'

// Variantes reutilizables
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

// Iconos de categoría
const categoryIcons: Record<string, string> = {
  Creatividad: '🎨',
  Tecnología: '💻',
  Idiomas: '🌍',
  'Refuerzo académico': '📚',
  Experiencias: '🌟',
}

export function Home() {
  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ——— Hero ——— */}
      <motion.section
        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft"
        variants={itemVariants}
        aria-labelledby="hero-heading"
      >
        <div className="relative aspect-[16/9] w-full bg-slate-200">
          {/* eager + fetchpriority: imagen above-the-fold */}
          <img
            src="https://images.pexels.com/photos/35893083/pexels-photo-35893083.jpeg"
            alt="Niños jugando al aire libre con alegría en Kids Talent Toledo"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.08),rgba(0,0,0,0.62))]" aria-hidden="true" />
          <motion.div
            className="absolute bottom-4 left-4 right-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h1
              id="hero-heading"
              className="text-2xl font-extrabold leading-tight text-white drop-shadow sm:text-3xl md:text-4xl text-center"
            >
              Estimulamos las capacidades naturales de niños y niñas.
            </h1>
          </motion.div>
        </div>

        {/* CTAs principales — Fitts: min-h-[48px] */}
        <motion.div
          className="grid gap-2 border-t border-slate-200 bg-white p-4 sm:grid-cols-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/programas"
              className="flex min-h-[48px] w-full items-center justify-center rounded-full border-2 border-brand px-6 py-3 text-center text-base font-extrabold text-brand shadow-soft transition hover:bg-brand hover:text-white active:scale-[0.99]"
            >
              Descubrir programas <span aria-hidden="true">→</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <a
              href={whatsappLink('Hola, me gustaría recibir información sobre Kids Talent.')}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#11AF4B] px-6 py-3 text-center text-base font-extrabold text-white transition hover:bg-[#0f9d42] active:scale-[0.99]"
              aria-label="Contactar por WhatsApp"
            >
              <svg className="h-5 w-5 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ——— Propuesta de valor ——— */}
      <motion.section
        className="rounded-2xl border border-brandD/30 bg-gradient-to-br from-brandL/15 to-brandD/10 p-5"
        variants={itemVariants}
        whileInView="visible"
        viewport={{ once: true }}
        aria-labelledby="valor-heading"
      >
        <PageTitle>Arte + Tecnología + Desarrollo Personal</PageTitle>
        <p className="mt-2 text-center text-sm text-slate-700">
          Aquí se aprende creando, se gana confianza y se construye autonomía de manera única.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3" role="list">
          {[
            {
              icon: '🎨',
              title: 'Creatividad',
              body: 'Desarrolla tu voz creativa y gana confianza en expresarte.',
            },
            {
              icon: '💻',
              title: 'Tecnología',
              body: 'Resuelve problemas con lógica y tecnología divertida.',
            },
            {
              icon: '🌱',
              title: 'Desarrollo Personal',
              body: 'Construye hábitos positivos, independencia y colabora en equipo.',
            },
          ].map((b) => (
            <motion.div
              key={b.title}
              role="listitem"
              className="rounded-2xl bg-white p-4 shadow-soft ring-1 ring-brandD/10 transition hover:-translate-y-0.5 hover:shadow-md"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-2 text-2xl" aria-hidden="true">{b.icon}</div>
              <div className="text-sm font-extrabold text-slate-900">{b.title}</div>
              <div className="mt-1 text-sm text-slate-700">{b.body}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ——— Programas por categorías ——— */}
      <motion.section
        className="space-y-3"
        whileInView="visible"
        initial="hidden"
        variants={containerVariants}
        viewport={{ once: true }}
        aria-labelledby="programas-heading"
      >
        <div className="flex items-baseline justify-between gap-3">
          <h2 id="programas-heading" className="text-xl font-extrabold text-slate-900">
            Programas
          </h2>
          <Link
            to="/programas"
            className="text-sm font-extrabold text-brand transition hover:brightness-95 underline-offset-2 hover:underline"
          >
            Ver todos <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-3" role="list">
          {PROGRAM_CATEGORIES.map((c) => (
            <motion.div
              key={c}
              role="listitem"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.99 }}
            >
              <Link
                to="/programas"
                className="block rounded-2xl border border-brandD/40 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99]"
                aria-label={`Ver programas de ${c}`}
              >
                <div className="mb-1 text-xl" aria-hidden="true">
                  {categoryIcons[c] ?? '⭐'}
                </div>
                <div className="text-sm font-extrabold text-slate-900">{c}</div>
                <div className="mt-1 text-sm text-slate-600">
                  Explora actividades de {c.toLowerCase()}.
                </div>
                <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1.5 text-xs font-extrabold text-white">
                  Descubrir <span aria-hidden="true">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ——— Galería de experiencia ——— */}
      <motion.section
        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 32 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-labelledby="experiencia-heading"
      >
        <h2 id="experiencia-heading" className="text-base font-extrabold text-slate-900">
          Cómo es estar en Kids Talent
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Ambiente cercano, proyectos reales y un equipo que cuida cada etapa del proceso.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3" role="list">
          {[
            {
              label: 'Ambiente',
              img: 'https://images.pexels.com/photos/4543646/pexels-photo-4543646.jpeg',
              alt: 'Ambiente familiar y cercano en Kids Talent',
            },
            {
              label: 'Proyectos',
              img: 'https://images.pexels.com/photos/19902488/pexels-photo-19902488.jpeg',
              alt: 'Niños realizando proyectos creativos juntos',
            },
            {
              label: 'Equipo',
              img: 'https://images.pexels.com/photos/4894738/pexels-photo-4894738.jpeg',
              alt: 'Trabajo en equipo y colaboración entre niños',
            },
          ].map((x) => (
            <motion.figure
              key={x.label}
              role="listitem"
              className="overflow-hidden rounded-2xl"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={x.img}
                  alt={x.alt}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-1.5 text-center text-xs font-semibold text-slate-600">
                {x.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.section>

      {/* ——— Método (resumen) ——— */}
      <motion.section
        className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 32 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-labelledby="metodo-heading"
      >
        <h2 id="metodo-heading" className="text-base font-extrabold text-slate-900">
          Nuestro método
        </h2>
        <p className="mt-1 text-sm text-slate-700">
          Aprendizaje por proyectos, objetivos claros, feedback constante y un foco real en
          desarrollo personal.
        </p>
        <div className="mt-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/metodo"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-extrabold text-white shadow-soft transition hover:brightness-95 active:scale-[0.99]"
            >
              Ver método <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ——— Testimonios ——— */}
      <motion.section
        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 32 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-labelledby="testimonios-heading"
      >
        <h2 id="testimonios-heading" className="text-base font-extrabold text-slate-900">
          Lo que dicen las familias
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3" role="list">
          {[
            {
              quote: 'Mi hija floreció en creatividad y confianza. Un centro increíble.',
              author: 'Laura M.',
              role: 'Madre de alumna',
              stars: 5,
            },
            {
              quote: 'El aprendizaje práctico sin estrés es exactamente lo que mi hijo necesitaba.',
              author: 'Carlos R.',
              role: 'Padre de alumno',
              stars: 5,
            },
            {
              quote: 'Cada niño recibe atención individualizada. Se nota que les importa.',
              author: 'Ana B.',
              role: 'Madre de alumna',
              stars: 5,
            },
          ].map((t) => (
            <motion.blockquote
              key={t.quote}
              role="listitem"
              className="rounded-2xl bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:shadow-md"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 16 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Estrellas */}
              <div className="mb-2 flex gap-0.5" aria-label={`${t.stars} estrellas de 5`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-warning text-sm" aria-hidden="true">★</span>
                ))}
              </div>
              <p className="text-sm font-medium text-slate-800 italic">"{t.quote}"</p>
              <footer className="mt-3">
                <div className="text-xs font-extrabold text-slate-900">{t.author}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </motion.section>

      {/* ——— CTA de cierre ——— */}
      <motion.section
        className="rounded-2xl border border-slate-200 bg-gradient-to-r from-brand to-brandD p-6 text-white shadow-soft"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        aria-labelledby="cta-heading"
      >
        <h2 id="cta-heading" className="text-xl font-extrabold">
          ¿Te ayudamos a elegir la mejor opción?
        </h2>
        <p className="mt-1 text-sm text-white/90">
          {CONTACT.phone} · {CONTACT.email}
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contacto"
              className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-white px-5 py-3 text-center text-sm font-extrabold text-slate-900 transition hover:bg-white/90 active:scale-[0.99]"
            >
              Solicitar información <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <a
              href={whatsappLink('Hola, me gustaría solicitar información / visita.')}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#11AF4B] px-5 py-3 text-center text-sm font-extrabold text-white transition hover:bg-[#0f9d42] active:scale-[0.99]"
              aria-label="Contactar por WhatsApp para solicitar una visita"
            >
              <svg className="h-4 w-4 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}
