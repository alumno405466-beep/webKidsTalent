import { Card, PageTitle, PlaceholderImage } from '../ui/Cards'

const summer = [
  { title: 'Avda. de Irlanda', subtitle: 'Del 30 de junio al 8 de agosto' },
  { title: 'Layos Camp', subtitle: 'Del 30 de junio al 8 de agosto' },
  { title: 'Garcillaso de la Vega', subtitle: 'Del 30 de junio al 8 de agosto' },
  { title: 'Valparaíso', subtitle: 'Del 30 de junio al 8 de agosto' },
  { title: 'Andorra', subtitle: 'Del 14 al 18 de julio' },
]

const daysOff = [
  { title: 'Semana Blanca', subtitle: 'Actividades y talleres' },
  { title: 'Semana Santa', subtitle: 'Actividades y talleres' },
  { title: 'Festivos', subtitle: 'Actividades y talleres' },
]

export function Campamentos() {
  return (
    <div className="space-y-5">
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
        <div className="relative aspect-[16/9] bg-slate-200">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),rgba(0,0,0,0.55))]" />
          <div className="absolute bottom-4 left-4 text-3xl font-extrabold text-white drop-shadow">
            Summer
            <br />
            Camp
          </div>
        </div>
      </section>

      <div>
        <PageTitle>Summer Camp</PageTitle>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {summer.map((c) => (
            <Card
              key={c.title}
              title={c.title}
              subtitle={c.subtitle}
              image={<PlaceholderImage label={c.title} />}
              footer={
                <div className="flex items-center justify-end">
                  <a
                    className="rounded-full bg-brand px-4 py-2 text-xs font-extrabold text-white shadow-soft transition active:scale-[0.99]"
                    href="#"
                  >
                    Más info
                  </a>
                </div>
              }
            />
          ))}
        </div>
      </div>

      <div>
        <PageTitle>Días sin cole</PageTitle>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {daysOff.map((c) => (
            <Card
              key={c.title}
              title={c.title}
              subtitle={c.subtitle}
              image={<PlaceholderImage label={c.title} />}
              footer={
                <div className="flex items-center justify-end">
                  <a
                    className="rounded-full bg-brand px-4 py-2 text-xs font-extrabold text-white shadow-soft transition active:scale-[0.99]"
                    href="#"
                  >
                    Más info
                  </a>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

