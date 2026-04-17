import { PageTitle } from '../ui/Cards'

const posts = [
  {
    title: 'Cómo elegir una actividad',
    excerpt:
      '3 preguntas rápidas para orientar la decisión: interés, horario y objetivo.',
  },
  {
    title: 'Campamentos: qué llevar',
    excerpt:
      'Una checklist simple para no olvidarte de lo importante. (Contenido genérico)',
  },
  {
    title: 'Aprendizaje por proyectos',
    excerpt:
      'Por qué funciona y cómo se adapta a diferentes edades. (Contenido genérico)',
  },
]

export function Blog() {
  return (
    <div className="space-y-4">
      <PageTitle>Blog</PageTitle>
      <div className="grid gap-3">
        {posts.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h2 className="text-lg font-extrabold text-slate-900">{p.title}</h2>
            <p className="mt-1 text-sm text-slate-700">{p.excerpt}</p>
            <button
              type="button"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-extrabold text-white transition active:scale-[0.99]"
            >
              Leer más <span aria-hidden="true">→</span>
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}

