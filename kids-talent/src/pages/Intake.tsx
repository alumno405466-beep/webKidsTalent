import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { getLead, upsertLead } from '../lib/api'
import { Button } from '../ui/Button'

const schema = z.object({
  guardianName: z.string().min(2, 'Escribe tu nombre'),
  email: z.string().email('Email no válido'),
  phone: z.string().min(6, 'Teléfono no válido'),
  kidName: z.string().min(2, 'Nombre del peque'),
  kidAge: z.number().int().min(0).max(18),
  interests: z.array(z.string()).min(1, 'Selecciona al menos 1 interés').max(5),
  consent: z.boolean().refine((v) => v, 'Necesitamos tu consentimiento'),
})

type FormValues = z.infer<typeof schema>

const interestOptions = [
  'Artes escénicas', 'Deporte', 'Música', 'Moda',
  'Modelaje', 'Cine/TV', 'Influencer',
]

const AGE_OPTIONS = Array.from({ length: 19 }, (_, i) => i)

const STEPS = ['Tus datos', 'Datos del peque', 'Intereses']

export function Intake() {
  const navigate = useNavigate()
  const qc = useQueryClient()
  const leadQuery = useQuery({ queryKey: ['lead'], queryFn: getLead })

  const defaults = useMemo<FormValues>(
    () => ({
      guardianName: leadQuery.data?.guardianName ?? '',
      email: leadQuery.data?.email ?? '',
      phone: leadQuery.data?.phone ?? '',
      kidName: leadQuery.data?.kidName ?? '',
      kidAge: leadQuery.data?.kidAge ?? 8,
      interests: leadQuery.data?.interests ?? [],
      consent: leadQuery.data?.consent ?? false,
    }),
    [leadQuery.data],
  )

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { guardianName: '', email: '', phone: '', kidName: '', kidAge: 8, interests: [], consent: false },
    mode: 'onChange',
  })

  useEffect(() => { form.reset(defaults) }, [defaults, form])

  const mutation = useMutation({
    mutationFn: async (values: FormValues) => {
      await upsertLead({ ...values, stage: 'submitted' })
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['lead'] })
      toast.success('Listo. Hemos recibido tu solicitud.')
      navigate('/contacto')
    },
  })

  const interests = form.watch('interests')

  // Calcular progreso visual (3 secciones)
  const progress = useMemo(() => {
    const s1 = form.watch('guardianName') && form.watch('email') && form.watch('phone')
    const s2 = form.watch('kidName') && form.watch('kidAge') !== undefined
    const s3 = interests.length > 0 && form.watch('consent')
    return [!!s1, !!s2, !!s3]
  }, [form, interests])

  return (
    <div className="space-y-5">
      {/* Cabecera */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
        aria-labelledby="intake-heading"
      >
        <h1 id="intake-heading" className="text-lg font-extrabold tracking-tight text-slate-900">
          Empieza en menos de 1 minuto
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Esto nos ayuda a responderte con precisión y no con mensajes genéricos.
        </p>

        {/* Barra de progreso — Nielsen #1 Visibilidad del sistema */}
        <div className="mt-4" role="progressbar" aria-label="Progreso del formulario" aria-valuenow={progress.filter(Boolean).length} aria-valuemin={0} aria-valuemax={3}>
          <div className="mb-2 flex justify-between">
            {STEPS.map((step, i) => (
              <span
                key={step}
                className={[
                  'text-xs font-semibold transition-colors',
                  progress[i] ? 'text-brand' : 'text-slate-400',
                ].join(' ')}
              >
                {step}
              </span>
            ))}
          </div>
          <div className="flex gap-1.5">
            {STEPS.map((step, i) => (
              <div
                key={step}
                className={[
                  'h-2 flex-1 rounded-full transition-all duration-500',
                  progress[i] ? 'bg-brand' : 'bg-slate-200',
                ].join(' ')}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </motion.section>

      <form onSubmit={form.handleSubmit((v) => mutation.mutate(v))} className="space-y-4" noValidate>
        {/* Sección 1: Datos tutor */}
        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft" aria-labelledby="guardian-heading">
          <h2 id="guardian-heading" className="mb-3 text-sm font-extrabold text-slate-900">
            1. Tus datos
          </h2>
          <div className="grid gap-3">
            <IntakeField label="Tu nombre" id="guardianName" error={form.formState.errors.guardianName?.message}>
              <input
                id="guardianName"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30"
                placeholder="Nombre y apellidos"
                autoComplete="name"
                {...form.register('guardianName')}
              />
            </IntakeField>
            <IntakeField label="Email" id="email" error={form.formState.errors.email?.message}>
              <input
                id="email"
                type="email"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30"
                placeholder="tu@email.com"
                inputMode="email"
                autoComplete="email"
                {...form.register('email')}
              />
            </IntakeField>
            <IntakeField label="Teléfono" id="phone" error={form.formState.errors.phone?.message}>
              <input
                id="phone"
                type="tel"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30"
                placeholder="600 000 000"
                inputMode="tel"
                autoComplete="tel"
                {...form.register('phone')}
              />
            </IntakeField>
          </div>
        </section>

        {/* Sección 2: Datos del niño */}
        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft" aria-labelledby="kid-heading">
          <h2 id="kid-heading" className="mb-3 text-sm font-extrabold text-slate-900">
            2. Datos del peque
          </h2>
          <div className="grid gap-3">
            <IntakeField label="Nombre del peque" id="kidName" error={form.formState.errors.kidName?.message}>
              <input
                id="kidName"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30"
                placeholder="Nombre"
                autoComplete="off"
                {...form.register('kidName')}
              />
            </IntakeField>
            {/* Select de edad — mejor UX en móvil que type=number */}
            <IntakeField label="Edad" id="kidAge" error={form.formState.errors.kidAge?.message}>
              <select
                id="kidAge"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30 appearance-none"
                {...form.register('kidAge', { valueAsNumber: true })}
              >
                {AGE_OPTIONS.map((age) => (
                  <option key={age} value={age}>{age === 0 ? 'Menos de 1 año' : `${age} año${age !== 1 ? 's' : ''}`}</option>
                ))}
              </select>
            </IntakeField>
          </div>
        </section>

        {/* Sección 3: Intereses y consentimiento */}
        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft" aria-labelledby="interests-heading">
          <h2 id="interests-heading" className="mb-3 text-sm font-extrabold text-slate-900">
            3. Intereses
          </h2>

          <div role="group" aria-labelledby="interests-heading">
            <p className="mb-2 text-xs text-slate-500">Selecciona hasta 5 intereses del niño</p>
            {form.formState.errors.interests?.message && (
              <p role="alert" className="mb-2 text-xs font-semibold text-rose-600">
                {String(form.formState.errors.interests.message)}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {interestOptions.map((opt) => {
                const selected = interests.includes(opt)
                const disabled = !selected && interests.length >= 5
                return (
                  <button
                    type="button"
                    key={opt}
                    disabled={disabled}
                    onClick={() => {
                      const next = selected
                        ? interests.filter((x) => x !== opt)
                        : [...interests, opt]
                      form.setValue('interests', next, { shouldValidate: true })
                    }}
                    aria-pressed={selected}
                    aria-label={`${opt}${selected ? ' (seleccionado)' : ''}`}
                    className={[
                      'flex min-h-[40px] items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed',
                      selected
                        ? 'bg-brand text-white shadow-soft'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200',
                    ].join(' ')}
                  >
                    {selected && <span aria-hidden="true">✓</span>}
                    {opt}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Consentimiento */}
          <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-2xl bg-slate-50 p-4">
            <input
              type="checkbox"
              className="mt-0.5 h-5 w-5 shrink-0 rounded border-slate-300 accent-brand"
              {...form.register('consent')}
            />
            <div>
              <div className="text-sm font-semibold text-slate-900">
                Acepto que me contacten para orientarme
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Solo usaremos tus datos para esta comunicación. Consulta nuestra{' '}
                <a href="/privacidad" className="text-brand underline hover:brightness-95">política de privacidad</a>.
              </div>
              {form.formState.errors.consent?.message ? (
                <p role="alert" className="mt-1 text-xs font-semibold text-rose-600">
                  {form.formState.errors.consent.message}
                </p>
              ) : null}
            </div>
          </label>
        </section>

        {/* Enviar */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <Button
            type="submit"
            className="w-full"
            disabled={!form.formState.isValid || mutation.isPending}
            aria-busy={mutation.isPending}
          >
            {mutation.isPending ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Enviando…
              </span>
            ) : <>Enviar solicitud <span aria-hidden="true">→</span></>}
          </Button>
          <p className="mt-2 text-center text-xs text-slate-400">
            Te responderemos por los canales de contacto facilitados.
          </p>
        </div>
      </form>
    </div>
  )
}

function IntakeField({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold text-slate-800">{label}</label>
        {error ? <span id={`${id}-error`} role="alert" className="text-xs font-semibold text-rose-600">{error}</span> : null}
      </div>
      {children}
    </div>
  )
}
