import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PROGRAMS, getProgram } from '../content/programs'
import { CONTACT, whatsappLink } from '../content/contact'
import { JsonLd } from '../seo/JsonLd'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export function ProgramDetail() {
  const { slug } = useParams()
  const program = slug ? getProgram(slug) : null

  const jsonLd = useMemo(() => {
    if (!program) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: program.title,
      description: program.summary,
      provider: {
        '@type': 'Organization',
        name: 'KidsTalent',
        email: CONTACT.email,
        telephone: CONTACT.phone,
        address: CONTACT.address,
      },
      audience: { '@type': 'Audience', audienceType: 'Niños y jóvenes' },
    }
  }, [program])

  if (!program) {
    return (
      <div className="space-y-4">
        {/* Breadcrumb 404 */}
        <nav aria-label="Ruta de navegación" className="text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link to="/" className="transition hover:text-brand">Inicio</Link></li>
            <li aria-hidden="true" className="text-slate-300">/</li>
            <li><Link to="/programas" className="transition hover:text-brand">Programas</Link></li>
            <li aria-hidden="true" className="text-slate-300">/</li>
            <li><span className="font-semibold text-slate-700" aria-current="page">No encontrado</span></li>
          </ol>
        </nav>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft">
          <div className="text-5xl mb-4" aria-hidden="true">🔍</div>
          <h1 className="text-xl font-extrabold text-slate-900">Programa no encontrado</h1>
          <p className="mt-2 text-sm text-slate-600">Ese programa no existe o ha cambiado de dirección.</p>
          <Link
            to="/programas"
            className="mt-5 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-extrabold text-white shadow-soft transition hover:brightness-95 active:scale-[0.99]"
          >
            Ver todos los programas →
          </Link>
        </div>
      </div>
    )
  }

  const siblings = PROGRAMS.filter((p) => p.slug !== program.slug).slice(0, 3)

  return (
    <motion.div
      className="space-y-5"
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
    >
      {jsonLd ? <JsonLd data={jsonLd} /> : null}

      {/* Breadcrumb */}
      <motion.nav variants={itemVariants} aria-label="Ruta de navegación" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="transition hover:text-brand">Inicio</Link></li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li><Link to="/programas" className="transition hover:text-brand">Programas</Link></li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li><span className="font-semibold text-slate-700" aria-current="page">{program.title}</span></li>
        </ol>
      </motion.nav>

      {/* Cabecera del programa */}
      <motion.section variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft" aria-labelledby="program-heading">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-extrabold text-brand">
            {program.category}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {program.ages}
          </span>
        </div>
        <h1 id="program-heading" className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
          {program.title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{program.summary}</p>

        <div className="mt-3 flex flex-wrap gap-2" role="list" aria-label="Intereses relacionados">
          {program.interests.map((t) => (
            <span key={t} role="listitem" className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
              {t}
            </span>
          ))}
        </div>

        {/* CTAs — jerarquía clara: primario (WhatsApp) > secundario */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <motion.a
            href={whatsappLink(`Hola, me gustaría información sobre el programa: ${program.title}.`)}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#11AF4B] px-6 py-3 text-center text-sm font-extrabold text-white transition hover:bg-[#0f9d42] active:scale-[0.99]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Preguntar por WhatsApp sobre ${program.title}`}
          >
            <svg className="h-4 w-4 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Preguntar por WhatsApp
          </motion.a>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contacto"
              className="flex min-h-[48px] items-center justify-center rounded-full border-2 border-brand px-6 py-3 text-center text-sm font-extrabold text-brand transition hover:bg-brand hover:text-white active:scale-[0.99]"
            >
              Solicitar información →
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Qué es */}
      <motion.section variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-5" aria-labelledby="whatis-heading">
        <h2 id="whatis-heading" className="text-base font-extrabold text-slate-900">Qué es</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">{program.whatIs}</p>
      </motion.section>

      {/* Para quién */}
      <motion.section variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-5" aria-labelledby="forwho-heading">
        <h2 id="forwho-heading" className="text-base font-extrabold text-slate-900">Para quién</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">{program.forWho}</p>
      </motion.section>

      {/* Qué desarrolla */}
      <motion.section variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-5" aria-labelledby="develops-heading">
        <h2 id="develops-heading" className="text-base font-extrabold text-slate-900">Qué desarrolla</h2>
        <ul className="mt-2 space-y-2" aria-label="Habilidades y competencias">
          {program.develops.map((x) => (
            <li key={x} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="mt-0.5 text-brand shrink-0" aria-hidden="true">✓</span>
              {x}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Cómo se trabaja */}
      <motion.section variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-5" aria-labelledby="howwe-heading">
        <h2 id="howwe-heading" className="text-base font-extrabold text-slate-900">Cómo se trabaja</h2>
        <ul className="mt-2 space-y-2">
          {program.howWeWork.map((x) => (
            <li key={x} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="mt-0.5 text-brand shrink-0" aria-hidden="true">→</span>
              {x}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Info práctica */}
      <motion.section variants={itemVariants} className="rounded-2xl border border-slate-200 bg-slate-50 p-5" aria-labelledby="practical-heading">
        <h2 id="practical-heading" className="text-base font-extrabold text-slate-900">Información práctica</h2>
        <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-3">
            <div className="text-xs font-semibold text-slate-500">Duración</div>
            <div className="mt-0.5 font-extrabold text-slate-900">{program.practical.duration ?? 'A confirmar'}</div>
          </div>
          <div className="rounded-2xl bg-white p-3">
            <div className="text-xs font-semibold text-slate-500">Horarios</div>
            <div className="mt-0.5 font-extrabold text-slate-900">{program.practical.schedule ?? 'A confirmar'}</div>
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-400">Rangos y horarios concretos se ajustan al alumno.</p>
      </motion.section>

      {/* También te puede interesar */}
      {siblings.length > 0 && (
        <motion.section variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-5" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-base font-extrabold text-slate-900">También te puede interesar</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-3" role="list">
            {siblings.map((p) => (
              <Link
                key={p.slug}
                to={`/programas/${p.slug}`}
                role="listitem"
                className="flex min-h-[64px] flex-col justify-between rounded-2xl bg-slate-50 p-3 text-sm transition hover:bg-slate-100 active:scale-[0.99]"
                aria-label={`Ver programa ${p.title}`}
              >
                <span className="font-extrabold text-slate-900">{p.title}</span>
                <span className="mt-1 text-xs text-slate-500">{p.category} → </span>
              </Link>
            ))}
          </div>
        </motion.section>
      )}
    </motion.div>
  )
}
