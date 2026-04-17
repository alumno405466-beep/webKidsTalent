import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PROGRAMS, getProgram } from '../content/programs'
import { CONTACT, whatsappLink } from '../content/contact'
import { PageTitle } from '../ui/Cards'
import { JsonLd } from '../seo/JsonLd'

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
      audience: {
        '@type': 'Audience',
        audienceType: 'Niños y jóvenes',
      },
    }
  }, [program])

  if (!program) {
    return (
      <div className="space-y-4">
        <PageTitle>Programa</PageTitle>
        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
          <div className="text-sm font-extrabold text-slate-900">
            No encontrado
          </div>
          <p className="mt-1 text-sm text-slate-700">
            Ese programa no existe. Vuelve a la lista.
          </p>
          <div className="mt-3">
            <Link
              to="/programas"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-extrabold text-white transition active:scale-[0.99]"
            >
              Ver programas <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const siblings = PROGRAMS.filter((p) => p.slug !== program.slug).slice(0, 3)

  return (
    <div className="space-y-4">
      {jsonLd ? <JsonLd data={jsonLd} /> : null}

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
        <div className="text-xs font-extrabold text-slate-600">
          {program.category} · {program.ages}
        </div>
        <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">
          {program.title}
        </h1>
        <p className="mt-2 text-sm text-slate-700">{program.summary}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {program.interests.map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-100 px-3 py-2 text-xs font-extrabold text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <a
            href={whatsappLink(
              `Hola, me gustaría información sobre el programa: ${program.title}.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand px-4 py-3 text-center text-sm font-extrabold text-white shadow-soft transition hover:brightness-95 active:scale-[0.99]"
          >
            WhatsApp <span aria-hidden="true">→</span>
          </a>
          <Link
            to="/contacto"
            className="rounded-full bg-slate-100 px-4 py-3 text-center text-sm font-extrabold text-slate-900 transition hover:bg-slate-200 active:scale-[0.99]"
          >
            Solicitar info <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <h2 className="text-lg font-extrabold text-slate-900">Qué es</h2>
        <p className="mt-2 text-sm text-slate-700">{program.whatIs}</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <h2 className="text-lg font-extrabold text-slate-900">Para quién</h2>
        <p className="mt-2 text-sm text-slate-700">{program.forWho}</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <h2 className="text-lg font-extrabold text-slate-900">Qué desarrolla</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          {program.develops.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <h2 className="text-lg font-extrabold text-slate-900">Cómo se trabaja</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          {program.howWeWork.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <h2 className="text-lg font-extrabold text-slate-900">
          Información práctica
        </h2>
        <div className="mt-2 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-3">
            <span className="font-extrabold text-slate-900">Duración:</span>{' '}
            {program.practical.duration ?? 'A confirmar'}
          </div>
          <div className="rounded-2xl bg-white p-3">
            <span className="font-extrabold text-slate-900">Horarios:</span>{' '}
            {program.practical.schedule ?? 'A confirmar'}
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-600">
          Rangos y horarios concretos se ajustan a operativa real.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="text-sm font-extrabold text-slate-900">
          También te puede interesar
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {siblings.map((p) => (
            <Link
              key={p.slug}
              to={`/programas/${p.slug}`}
              className="rounded-2xl bg-slate-50 p-3 text-sm font-extrabold text-slate-900 transition hover:bg-slate-100 active:scale-[0.99]"
            >
              {p.title} <span className="text-slate-500">→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

