import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card, SectionTitle, PlaceholderImage } from '../ui/Cards'
import { whatsappLink } from '../content/contact'

const summer = [
  { title: 'Avda. de Irlanda', subtitle: 'Del 30 de junio al 8 de agosto' },
  { title: 'Layos Camp', subtitle: 'Del 30 de junio al 8 de agosto' },
  { title: 'Garcillaso de la Vega', subtitle: 'Del 30 de junio al 8 de agosto' },
  { title: 'Valparaíso', subtitle: 'Del 30 de junio al 8 de agosto' },
  { title: 'Andorra', subtitle: 'Del 14 al 18 de julio' },
]

const daysOff = [
  { title: 'Semana Blanca', subtitle: 'Actividades y talleres especiales' },
  { title: 'Semana Santa', subtitle: 'Actividades y talleres especiales' },
  { title: 'Festivos', subtitle: 'Actividades y talleres especiales' },
]



export function Campamentos() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav aria-label="Ruta de navegación" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="transition hover:text-brand">Inicio</Link></li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li><span className="font-semibold text-slate-700" aria-current="page">Campamentos</span></li>
        </ol>
      </nav>

      {/* Hero con imagen real */}
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft" aria-labelledby="camp-hero-heading">
        <div className="relative aspect-[16/9] bg-slate-200">
          <img
            src="https://images.pexels.com/photos/35893083/pexels-photo-35893083.jpeg"
            alt="Niños disfrutando actividades al aire libre en campamento Kids Talent"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),rgba(0,0,0,0.62))]" aria-hidden="true" />
          <div className="absolute bottom-4 left-4 right-4">
            <h1 id="camp-hero-heading" className="text-3xl font-extrabold text-white drop-shadow sm:text-4xl">
              Summer Camp
            </h1>
            <p className="mt-1 text-sm text-white/90 drop-shadow">
              Verano de aventura, aprendizaje y diversión para niños de Toledo
            </p>
          </div>
        </div>
      </section>

      {/* Summer Camp */}
      <section aria-labelledby="summer-heading">
        <SectionTitle>Summer Camp 2025</SectionTitle>
        <p className="mt-1 text-center text-sm text-slate-600">Distintas sedes para que elijas la más cercana.</p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
          {summer.map((c) => (
            <motion.div key={c.title} role="listitem" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 16 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
              <Card
                title={c.title}
                subtitle={c.subtitle}
                image={<PlaceholderImage label={c.title} />}
                footer={
                  <div className="flex items-center justify-end">
                    <Link to="/contacto" className="flex min-h-[44px] items-center rounded-full bg-brand px-4 py-2 text-xs font-extrabold text-white transition hover:brightness-95 active:scale-[0.99]" aria-label={`Más info sobre ${c.title}`}>
                      Más info →
                    </Link>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Días sin cole */}
      <section aria-labelledby="daysoff-heading">
        <SectionTitle>Días sin cole</SectionTitle>
        <p className="mt-1 text-center text-sm text-slate-600">Para que los niños disfruten los festivos.</p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
          {daysOff.map((c) => (
            <motion.div key={c.title} role="listitem" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 16 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
              <Card
                title={c.title}
                subtitle={c.subtitle}
                image={<PlaceholderImage label={c.title} />}
                footer={
                  <div className="flex items-center justify-end">
                    <Link to="/contacto" className="flex min-h-[44px] items-center rounded-full bg-brand px-4 py-2 text-xs font-extrabold text-white transition hover:brightness-95 active:scale-[0.99]" aria-label={`Más info sobre ${c.title}`}>
                      Más info →
                    </Link>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section className="rounded-2xl bg-gradient-to-r from-brand to-brandD p-5 text-white" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 16 }} viewport={{ once: true }} aria-labelledby="camp-cta-heading">
        <h2 id="camp-cta-heading" className="text-lg font-extrabold">¿Quieres reservar plaza?</h2>
        <p className="mt-1 text-sm text-white/90">Consulta disponibilidad y precios directamente con nosotros.</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link to="/contacto" className="flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-white/90 active:scale-[0.99]">
            Solicitar información →
          </Link>
          <a href={whatsappLink('Hola, me gustaría información sobre campamentos.')} target="_blank" rel="noreferrer" className="flex min-h-[48px] items-center justify-center rounded-full bg-[#11AF4B] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#0f9d42] active:scale-[0.99]">
            WhatsApp
          </a>
        </div>
      </motion.section>
    </div>
  )
}
