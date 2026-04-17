import { PageTitle } from '../ui/Cards'

export function ProteccionDatos() {
  return (
    <div className="space-y-4">
      <PageTitle>Protección de datos</PageTitle>
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
        <div className="prose prose-slate max-w-none text-sm">
          <p>
            Contenido <strong>genérico</strong>. Ajustar a RGPD/LOPDGDD y a tu
            realidad (encargados, plazos, etc.).
          </p>
          <h2>Conservación</h2>
          <p>
            Conservaremos los datos el tiempo necesario para atender la
            solicitud.
          </p>
          <h2>Comunicación a terceros</h2>
          <p>No se cederán datos salvo obligación legal.</p>
          <h2>Medidas de seguridad</h2>
          <p>Se aplicarán medidas técnicas y organizativas adecuadas.</p>
        </div>
      </section>
    </div>
  )
}

