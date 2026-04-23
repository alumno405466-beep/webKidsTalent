import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageTitle } from '../ui/Cards'
import { whatsappLink } from '../content/contact'

const staff = [
  { name: 'Zara Imni', role: 'Coordinación', bio: 'Experta en coordinación educativa y gestión de talento infantil con más de 10 años de experiencia.' },
  { name: 'Beatriz Sánchez', role: 'Psicopedagogía', bio: 'Especialista en aprendizaje y desarrollo emocional, adaptando cada programa a las necesidades del niño.' },
  { name: 'Virginia Ramos', role: 'Formación', bio: 'Diseñadora curricular apasionada por métodos activos y el aprendizaje basado en proyectos.' },
  { name: 'Pablo Carrascoso', role: 'Audiovisual', bio: 'Creador de contenidos audiovisuales que inspiran a niños a explorar la comunicación y la tecnología.' },
]

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()
}

const avatarColors = [
  'bg-brand text-white',
  'bg-warning text-charcoal',
  'bg-success text-white',
  'bg-blue text-white',
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export function Nosotros() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav aria-label="Ruta de navegación" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="transition hover:text-brand">Inicio</Link></li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li><span className="font-semibold text-slate-700" aria-current="page">Nosotros</span></li>
        </ol>
      </nav>

      {/* Intro */}
      <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-brandL/15 to-brand/5 p-5" aria-labelledby="nosotros-heading">
        <PageTitle>Nuestros profes</PageTitle>
        <p className="mt-2 text-center text-sm text-slate-700 max-w-sm mx-auto">
          Un equipo vocacional que pone al niño en el centro para orientarle y encontrar el mejor encaje.
        </p>
      </section>

      {/* Valores */}
      <section aria-labelledby="valores-heading">
        <h2 id="valores-heading" className="sr-only">Nuestros valores</h2>
        <div className="grid gap-3 sm:grid-cols-3" role="list">
          {[
            { icon: '❤️', title: 'Vocación', text: 'Cada profesional trabaja con pasión y compromiso real con el desarrollo del niño.' },
            { icon: '🎯', title: 'Personalización', text: 'Adaptamos cada programa a los intereses, ritmo y objetivos de cada alumno.' },
            { icon: '🤝', title: 'Familia', text: 'Mantenemos comunicación constante con los padres para un seguimiento cercano.' },
          ].map((v) => (
            <motion.div
              key={v.title}
              role="listitem"
              className="rounded-2xl bg-white p-4 shadow-soft ring-1 ring-slate-100"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 16 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-2 text-2xl" aria-hidden="true">{v.icon}</div>
              <div className="text-sm font-extrabold text-slate-900">{v.title}</div>
              <p className="mt-1 text-xs text-slate-600">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Staff */}
      <section aria-labelledby="equipo-heading">
        <h2 id="equipo-heading" className="text-xl font-extrabold text-slate-900 mb-4">El equipo</h2>
        <div className="grid gap-3" role="list">
          {staff.map((p, i) => (
            <motion.div
              key={p.name}
              role="listitem"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="rounded-2xl bg-slate-900 p-4 text-white"
            >
              <div className="flex items-center gap-4">
                {/* Avatar con iniciales */}
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-base font-extrabold ${avatarColors[i % avatarColors.length]}`}
                  aria-hidden="true"
                >
                  {getInitials(p.name)}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold">{p.name}</div>
                  <div className="text-xs text-white/70">{p.role}</div>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/80">{p.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft" aria-labelledby="nosotros-cta-heading">
        <h2 id="nosotros-cta-heading" className="text-base font-extrabold text-slate-900">¿Hablamos?</h2>
        <p className="mt-1 text-sm text-slate-600">
          Contacta con nosotros para conocer al equipo y ver cómo podemos ayudar a tu hijo.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/contacto"
            className="flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-brand px-4 py-3 text-center text-sm font-extrabold text-white shadow-soft transition hover:brightness-95 active:scale-[0.99]"
          >
            Contacto →
          </Link>
          <a
            href={whatsappLink('Hola, me gustaría conocer más sobre vuestro equipo y programas.')}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-[#11AF4B] px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-[#0f9d42] active:scale-[0.99]"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
