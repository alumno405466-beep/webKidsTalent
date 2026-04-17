import { Link } from 'react-router-dom'
import { CONTACT, whatsappLink } from '../content/contact'
import { PROGRAM_CATEGORIES } from '../content/programs'
import { PageTitle } from '../ui/Cards'

export function Home() {
  return (
    <div className="space-y-8">
      {/* Hero narrativo */}
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
        <div className="relative aspect-[16/9] w-full bg-slate-200">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.08),rgba(0,0,0,0.62))]" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-3xl font-extrabold leading-tight text-white drop-shadow sm:text-4xl">
              No es una academia.
              <br />
              Es desarrollo personal + creatividad + tecnología.
            </div>
            <div className="mt-2 max-w-[52ch] text-sm font-semibold text-white/90">
              Kids Talent es un ecosistema de aprendizaje creativo donde arte,
              tecnología e inteligencia emocional se integran para desarrollar el
              talento de niños y jóvenes.
            </div>
          </div>

          <div className="absolute right-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-extrabold text-white shadow-soft">
            Vídeo real
          </div>
        </div>
        <div className="grid gap-2 border-t border-slate-200 bg-white p-4 sm:grid-cols-3">
          <Link
            to="/programas"
            className="rounded-full bg-brand px-4 py-3 text-center text-sm font-extrabold text-white shadow-soft transition hover:brightness-95 active:scale-[0.99]"
          >
            Descubrir programas <span aria-hidden="true">→</span>
          </Link>
          <Link
            to="/contacto"
            className="rounded-full bg-slate-100 px-4 py-3 text-center text-sm font-extrabold text-slate-900 transition hover:bg-slate-200 active:scale-[0.99]"
          >
            Solicitar información <span aria-hidden="true">→</span>
          </Link>
          <a
            href={whatsappLink('Hola, me gustaría recibir información sobre Kids Talent.')}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-black active:scale-[0.99]"
          >
            WhatsApp <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Propuesta de valor */}
      <section className="rounded-2xl border border-brandD/30 bg-brandL/15 p-4">
        <PageTitle>Arte + tecnología + desarrollo personal</PageTitle>
        <p className="mt-2 text-center text-sm text-slate-700">
          En segundos debe quedar claro: aquí se aprende haciendo, se gana
          confianza y se construye autonomía.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            {
              title: 'Creatividad',
              body: 'Expresión, comunicación y confianza para mostrarse.',
            },
            { title: 'Tecnología', body: 'Pensamiento lógico aplicado a retos.' },
            {
              title: 'Desarrollo personal',
              body: 'Hábitos, autonomía, motivación y trabajo en equipo.',
            },
          ].map((b) => (
            <div
              key={b.title}
              className="rounded-2xl bg-white p-4 shadow-soft ring-1 ring-brandD/10 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-sm font-extrabold text-slate-900">
                {b.title}
              </div>
              <div className="mt-1 text-sm text-slate-700">{b.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Programas por categorías */}
      <section className="space-y-3">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-xl font-extrabold text-slate-900">Programas</h2>
          <Link
            to="/programas"
            className="text-sm font-extrabold text-brand transition hover:brightness-95"
          >
            Ver todos <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {PROGRAM_CATEGORIES.map((c) => (
            <Link
              key={c}
              to="/programas"
              className="rounded-2xl border border-brandD/40 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99]"
            >
              <div className="text-sm font-extrabold text-slate-900">{c}</div>
              <div className="mt-1 text-sm text-slate-700">
                Explora actividades relacionadas con {c.toLowerCase()}.
              </div>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand px-3 py-2 text-xs font-extrabold text-white">
                Descubrir <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Experiencia */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
        <div className="text-sm font-extrabold text-slate-900">
          Cómo es estar en Kids Talent
        </div>
        <p className="mt-1 text-sm text-slate-700">
          Imágenes reales + microcopy: ambiente, equipo, dinámica de grupo y
          evolución personal.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {[
            { label: 'Ambiente', tint: 'bg-success/10 ring-success/30' },
            { label: 'Proyectos', tint: 'bg-warning/10 ring-warning/30' },
            { label: 'Equipo', tint: 'bg-blue/10 ring-blue/30' },
          ].map((x) => (
            <div
              key={x.label}
              className={[
                'aspect-[4/3] overflow-hidden rounded-2xl ring-1 transition hover:-translate-y-0.5 hover:shadow-md',
                x.tint,
              ].join(' ')}
              aria-label={x.label}
            />
          ))}
        </div>
      </section>

      {/* Método (resumen) */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="text-sm font-extrabold text-slate-900">Método</div>
        <p className="mt-1 text-sm text-slate-700">
          Aprendizaje por proyectos, objetivos claros, feedback y un foco real en
          desarrollo personal.
        </p>
        <div className="mt-3">
          <Link
            to="/metodo"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-extrabold text-white shadow-soft transition hover:brightness-95 active:scale-[0.99]"
          >
            Ver método <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Confianza */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
        <div className="text-sm font-extrabold text-slate-900">Confianza</div>
        <p className="mt-1 text-sm text-slate-700">
          Testimonios, equipo y entorno. (Contenido editable en fase siguiente.)
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {[
            '“Mi hijo ganó confianza y motivación.”',
            '“Aprenden haciendo, sin presión.”',
            '“Se nota el enfoque personal.”',
          ].map((t) => (
            <div
              key={t}
              className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="font-extrabold text-slate-900">{t}</div>
              <div className="mt-2 text-xs text-slate-600">Familia (ejemplo)</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cierre */}
      <section className="rounded-2xl border border-slate-200 bg-brand p-5 text-white shadow-soft">
        <div className="text-xl font-extrabold">
          ¿Te ayudamos a elegir la mejor opción?
        </div>
        <div className="mt-1 text-sm text-white/90">
          {CONTACT.phone} · {CONTACT.email}
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <Link
            to="/contacto"
            className="rounded-full bg-white px-4 py-3 text-center text-sm font-extrabold text-slate-900 transition active:scale-[0.99]"
          >
            Solicitar info <span aria-hidden="true">→</span>
          </Link>
          <a
            href={whatsappLink('Hola, me gustaría solicitar información / visita.')}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-black active:scale-[0.99]"
          >
            WhatsApp <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </div>
  )
}

