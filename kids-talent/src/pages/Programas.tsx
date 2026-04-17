import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  PROGRAM_CATEGORIES,
  PROGRAMS,
  type ProgramCategory,
} from '../content/programs'
import { Card, PageTitle, PlaceholderImage } from '../ui/Cards'

export function Programas() {
  const [category, setCategory] = useState<ProgramCategory | 'Todas'>('Todas')
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return PROGRAMS.filter((p) => {
      const categoryOk = category === 'Todas' ? true : p.category === category
      const queryOk = !query
        ? true
        : [
            p.title,
            p.category,
            p.summary,
            p.ages,
            p.interests.join(' '),
          ]
            .join(' ')
            .toLowerCase()
            .includes(query)
      return categoryOk && queryOk
    })
  }, [category, q])

  return (
    <div className="space-y-4">
      <PageTitle>Nuestros Programas</PageTitle>
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
        <div className="text-sm font-extrabold text-slate-900">
          Encuentra el encaje
        </div>
        <p className="mt-1 text-sm text-slate-700">
          Filtra por tipo o busca por edad/interés. Cada programa es una unidad
          clara de contenido.
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar (ej: robótica, 8 años, creatividad)…"
            className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30"
          />
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {(['Todas', ...PROGRAM_CATEGORIES] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={[
                  'whitespace-nowrap rounded-full px-3 py-2 text-xs font-extrabold transition active:scale-[0.99]',
                  c === category
                    ? 'bg-brand text-white shadow-soft'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200',
                ].join(' ')}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filtered.map((p) => (
          <Link key={p.slug} to={`/programas/${p.slug}`} className="block">
            <Card
              title={p.title}
              subtitle={`${p.category} · ${p.ages}`}
              image={<PlaceholderImage label={p.category} />}
              details={
                <div>
                  <div className="font-extrabold text-slate-900">
                    Qué desarrolla
                  </div>
                  <ul className="mt-1 list-disc pl-4">
                    {p.develops.slice(0, 3).map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              }
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

