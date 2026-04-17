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
  interests: z
    .array(z.string())
    .min(1, 'Selecciona al menos 1 interés')
    .max(5),
  consent: z.boolean().refine((v) => v, 'Necesitamos tu consentimiento'),
})

type FormValues = z.infer<typeof schema>

const interestOptions = [
  'Artes escénicas',
  'Deporte',
  'Música',
  'Moda',
  'Modelaje',
  'Cine/TV',
  'Influencer',
]

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
    defaultValues: {
      guardianName: '',
      email: '',
      phone: '',
      kidName: '',
      kidAge: 8,
      interests: [],
      consent: false,
    },
    mode: 'onChange',
  })

  useEffect(() => {
    form.reset(defaults)
  }, [defaults, form])

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

  return (
    <div className="space-y-4">
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft"
      >
        <h1 className="text-lg font-extrabold tracking-tight text-slate-900">
          Empieza en menos de 1 minuto
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Esto nos ayuda a responderte con precisión (y no con mensajes genéricos).
        </p>
      </motion.section>

      <form
        onSubmit={form.handleSubmit((v) => mutation.mutate(v))}
        className="space-y-3"
      >
        <section className="rounded-3xl border border-slate-200 bg-white p-4">
          <div className="grid gap-3">
            <Field label="Tu nombre" error={form.formState.errors.guardianName?.message}>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30"
                placeholder="Nombre y apellidos"
                {...form.register('guardianName')}
              />
            </Field>

            <Field label="Email" error={form.formState.errors.email?.message}>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30"
                placeholder="tu@email.com"
                inputMode="email"
                {...form.register('email')}
              />
            </Field>

            <Field label="Teléfono" error={form.formState.errors.phone?.message}>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30"
                placeholder="600 000 000"
                inputMode="tel"
                {...form.register('phone')}
              />
            </Field>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-4">
          <div className="grid gap-3">
            <Field label="Nombre del peque" error={form.formState.errors.kidName?.message}>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30"
                placeholder="Nombre"
                {...form.register('kidName')}
              />
            </Field>

            <Field label="Edad" error={form.formState.errors.kidAge?.message}>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brandL/30"
                type="number"
                min={0}
                max={18}
                {...form.register('kidAge', { valueAsNumber: true })}
              />
            </Field>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-4">
          <Field label="Intereses (máx. 5)" error={form.formState.errors.interests?.message as string | undefined}>
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
                    className={[
                      'rounded-full px-3 py-2 text-xs font-semibold transition active:scale-[0.99] disabled:opacity-40',
                      selected
                        ? 'bg-brand text-white shadow-soft'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200',
                    ].join(' ')}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
          </Field>

          <label className="mt-4 flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 rounded border-slate-300 accent-brand"
              {...form.register('consent')}
            />
            <div>
              <div className="text-sm font-semibold text-slate-900">
                Acepto que me contacten para orientarme
              </div>
              <div className="text-xs text-slate-600">
                Solo usaremos tus datos para esta comunicación.
              </div>
              {form.formState.errors.consent?.message ? (
                <div className="mt-1 text-xs font-semibold text-rose-600">
                  {form.formState.errors.consent.message}
                </div>
              ) : null}
            </div>
          </label>
        </section>

        <div className="rounded-3xl border border-slate-200 bg-white p-3">
          <Button
            type="submit"
            className="w-full"
            disabled={!form.formState.isValid || mutation.isPending}
          >
            {mutation.isPending ? 'Enviando…' : 'Enviar'}
          </Button>
          <div className="mt-2 text-center text-xs text-slate-500">
            Te responderemos por los canales de contacto facilitados.
          </div>
        </div>
      </form>
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

