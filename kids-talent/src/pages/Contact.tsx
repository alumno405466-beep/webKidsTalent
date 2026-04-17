import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { CONTACT, whatsappLink } from '../content/contact'
import { Button } from '../ui/Button'
import { GoogleMap } from '../ui/GoogleMap'

const schema = z.object({
  name: z.string().min(2, 'Escribe tu nombre'),
  email: z.string().email('Email no válido'),
  message: z.string().min(10, 'Escribe un mensaje un poco más largo'),
})

type FormValues = z.infer<typeof schema>

export function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', message: '' },
    mode: 'onChange',
  })

  return (
    <div className="space-y-3">
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
        <h1 className="text-2xl font-extrabold tracking-tight text-brand">
          Contacto
        </h1>
        <p className="mt-2 text-sm text-slate-700">
          Puedes llamarnos, escribirnos por email o dejar el formulario y te
          respondemos por los canales habituales.
        </p>
        <div className="mt-3 grid gap-2 text-sm">
          <div className="rounded-2xl bg-slate-50 px-3 py-3">
            <span className="font-extrabold text-slate-900">Teléfono:</span>{' '}
            {CONTACT.phone}
          </div>
          <div className="rounded-2xl bg-slate-50 px-3 py-3">
            <span className="font-extrabold text-slate-900">Email:</span>{' '}
            {CONTACT.email}
          </div>
          <div className="rounded-2xl bg-slate-50 px-3 py-3">
            <span className="font-extrabold text-slate-900">Dirección:</span>{' '}
            {CONTACT.address}
          </div>
          <a
            className="rounded-2xl bg-brand px-3 py-3 text-center text-sm font-extrabold text-white shadow-soft transition hover:brightness-95 active:scale-[0.99]"
            href={whatsappLink('Hola, me gustaría recibir información sobre Kids Talent.')}
            target="_blank"
            rel="noreferrer"
          >
            Escribir por WhatsApp <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
        <h2 className="text-lg font-extrabold text-slate-900">
          Ubicación
        </h2>
        <p className="mt-1 text-xs text-slate-600">
          Nos ubicamos en {CONTACT.address}. Visítanos o consulta directamente sobre nuestros horarios.
        </p>
        <div className="mt-3">
          <GoogleMap />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
        <h2 className="text-lg font-extrabold text-slate-900">
          Opiniones de nuestros clientes
        </h2>
        <p className="mt-1 text-xs text-slate-600">
          Mira lo que dicen los padres y alumnos que confían en Kids Talent.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
        <div className="text-sm font-extrabold text-slate-900">
          Formulario de contacto
        </div>
        <form
          className="mt-3 grid gap-3"
          onSubmit={form.handleSubmit((v) => {
            toast.success('Mensaje enviado (demo)')
            form.reset()
            console.log('contact-form', v)
          })}
        >
          <Field label="Nombre" error={form.formState.errors.name?.message}>
            <input
              className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30"
              {...form.register('name')}
            />
          </Field>
          <Field label="Email" error={form.formState.errors.email?.message}>
            <input
              className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30"
              inputMode="email"
              {...form.register('email')}
            />
          </Field>
          <Field label="Mensaje" error={form.formState.errors.message?.message}>
            <textarea
              rows={4}
              className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30"
              {...form.register('message')}
            />
          </Field>

          <Button
            type="submit"
            disabled={!form.formState.isValid}
            className="w-full"
          >
            Enviar <span aria-hidden="true">→</span>
          </Button>
        </form>
      </section>
    </div>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between gap-3">
        <label className="text-sm font-semibold text-slate-900">{label}</label>
        {error ? (
          <span className="text-xs font-semibold text-rose-600">{error}</span>
        ) : null}
      </div>
      {children}
    </div>
  )
}

