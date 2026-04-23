import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { CONTACT, whatsappLink } from '../content/contact'
import { Button } from '../ui/Button'
import { GoogleMap } from '../ui/GoogleMap'

const schema = z.object({
  name: z.string().min(2, 'Escribe tu nombre'),
  email: z.string().email('Email no válido'),
  message: z.string().min(10, 'Escribe un mensaje un poco más largo'),
})

type FormValues = z.infer<typeof schema>

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', message: '' },
    mode: 'onChange',
  })

  const { isSubmitting } = form.formState

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
    >
      {/* Breadcrumb */}
      <motion.nav variants={itemVariants} aria-label="Ruta de navegación" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="transition hover:text-brand">Inicio</Link></li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li><span className="font-semibold text-slate-700" aria-current="page">Contacto</span></li>
        </ol>
      </motion.nav>

      {/* Datos de contacto */}
      <motion.section
        variants={itemVariants}
        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
        aria-labelledby="contact-heading"
      >
        <h1 id="contact-heading" className="text-2xl font-extrabold tracking-tight text-brand">Contacto</h1>
        <p className="mt-2 text-sm text-slate-600">
          Puedes llamarnos, escribirnos por email o usar el formulario. Te respondemos en menos de 24h.
        </p>

        <address className="mt-4 grid gap-2 text-sm not-italic">
          {/* Tel — link clickable mobile-first */}
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
            className="flex min-h-[52px] items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-slate-100 active:scale-[0.99]"
            aria-label={`Llamar al ${CONTACT.phone}`}
          >
            <span className="text-xl" aria-hidden="true">📞</span>
            <div>
              <div className="text-xs font-semibold text-slate-500">Teléfono</div>
              <div className="font-extrabold text-slate-900">{CONTACT.phone}</div>
            </div>
          </a>

          {/* Email — link clickable */}
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex min-h-[52px] items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-slate-100 active:scale-[0.99]"
            aria-label={`Enviar email a ${CONTACT.email}`}
          >
            <span className="text-xl" aria-hidden="true">✉️</span>
            <div>
              <div className="text-xs font-semibold text-slate-500">Email</div>
              <div className="font-extrabold text-slate-900">{CONTACT.email}</div>
            </div>
          </a>

          {/* Dirección */}
          <div className="flex min-h-[52px] items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
            <span className="text-xl" aria-hidden="true">📍</span>
            <div>
              <div className="text-xs font-semibold text-slate-500">Dirección</div>
              <div className="font-extrabold text-slate-900">{CONTACT.address}</div>
            </div>
          </div>

          {/* WhatsApp */}
          <motion.a
            className="flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-[#11AF4B] px-4 py-3 text-sm font-extrabold text-white shadow-soft transition hover:bg-[#0f9d42] active:scale-[0.99]"
            href={whatsappLink('Hola, me gustaría recibir información sobre Kids Talent.')}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.01 }}
          >
            <svg className="h-5 w-5 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escribir por WhatsApp
          </motion.a>
        </address>
      </motion.section>

      {/* Mapa */}
      <motion.section
        variants={itemVariants}
        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
        aria-labelledby="ubicacion-heading"
      >
        <h2 id="ubicacion-heading" className="text-lg font-extrabold text-slate-900">Ubicación</h2>
        <p className="mt-1 text-xs text-slate-500">
          {CONTACT.address} — Visítanos o consulta sobre horarios.
        </p>
        <div className="mt-3 overflow-hidden rounded-xl">
          <GoogleMap />
        </div>
      </motion.section>

      {/* Opiniones */}
      <motion.section
        variants={itemVariants}
        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
        aria-labelledby="opiniones-heading"
      >
        <h2 id="opiniones-heading" className="text-lg font-extrabold text-slate-900">Opiniones de familias</h2>
        <p className="mt-1 text-xs text-slate-500">Lo que dicen los padres y alumnos que confían en Kids Talent.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            { img: 'https://images.pexels.com/photos/4543646/pexels-photo-4543646.jpeg', alt: 'Familia feliz en el parque', text: '"Excelente experiencia para mi hijo"', role: 'Madre de alumno · Tecnología' },
            { img: 'https://images.pexels.com/photos/35893083/pexels-photo-35893083.jpeg', alt: 'Niños jugando al aire libre', text: '"Mi niña ama las clases de creatividad"', role: 'Padre de alumna · Creatividad' },
          ].map((r) => (
            <blockquote key={r.text} className="rounded-2xl bg-slate-50 p-3">
              <img src={r.img} alt={r.alt} className="mb-2 w-full rounded-2xl object-cover aspect-[4/3]" loading="lazy" />
              <p className="text-sm font-extrabold text-slate-900 italic">{r.text}</p>
              <footer className="mt-1 text-xs text-slate-500">{r.role}</footer>
            </blockquote>
          ))}
        </div>
      </motion.section>

      {/* Formulario */}
      <motion.section
        variants={itemVariants}
        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
        aria-labelledby="form-heading"
      >
        <h2 id="form-heading" className="text-lg font-extrabold text-slate-900">Formulario de contacto</h2>
        <p className="mt-1 text-xs text-slate-500">Te responderemos en menos de 24 horas.</p>
        <form
          className="mt-4 grid gap-4"
          onSubmit={form.handleSubmit(async (v) => {
            await new Promise((r) => setTimeout(r, 600))
            toast.success('Mensaje enviado correctamente. Te responderemos pronto.')
            form.reset()
            console.log('contact-form', v)
          })}
          noValidate
        >
          <fieldset className="contents" disabled={isSubmitting}>
            <Field label="Nombre" id="name" error={form.formState.errors.name?.message}>
              <input
                id="name"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30"
                autoComplete="name"
                {...form.register('name')}
              />
            </Field>
            <Field label="Email" id="email" error={form.formState.errors.email?.message}>
              <input
                id="email"
                type="email"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30"
                inputMode="email"
                autoComplete="email"
                {...form.register('email')}
              />
            </Field>
            <Field label="Mensaje" id="message" error={form.formState.errors.message?.message}>
              <textarea
                id="message"
                rows={4}
                className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30"
                {...form.register('message')}
              />
            </Field>
          </fieldset>

          <Button
            type="submit"
            disabled={!form.formState.isValid || isSubmitting}
            className="w-full"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Enviando…
              </span>
            ) : (
              <>Enviar mensaje <span aria-hidden="true">→</span></>
            )}
          </Button>
        </form>
      </motion.section>
    </motion.div>
  )
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold text-slate-800">{label}</label>
        {error ? (
          <span id={`${id}-error`} role="alert" className="text-xs font-semibold text-rose-600">{error}</span>
        ) : null}
      </div>
      {children}
    </div>
  )
}
