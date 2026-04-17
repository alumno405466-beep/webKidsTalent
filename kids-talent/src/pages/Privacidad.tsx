import { PageTitle } from '../ui/Cards'

export function Privacidad() {
  return (
    <div className="space-y-4">
      <PageTitle>Política de privacidad</PageTitle>
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
        <div className="prose prose-slate max-w-none text-sm">
          <p>
            Este texto es <strong>genérico</strong> y sirve como placeholder.
            Sustitúyelo por tu política real.
          </p>
          <h2>Responsable</h2>
          <p>KidsTalent (ejemplo) · contacto: hola@kidstalent.es</p>
          <h2>Finalidad</h2>
          <p>
            Gestionar solicitudes de información y responder a través de los
            canales de contacto facilitados.
          </p>
          <h2>Legitimación</h2>
          <p>Consentimiento del usuario.</p>
          <h2>Derechos</h2>
          <p>
            Acceso, rectificación, supresión, oposición, limitación y
            portabilidad.
          </p>
        </div>
      </section>
    </div>
  )
}

