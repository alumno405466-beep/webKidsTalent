import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { getLead, upsertLead } from '../lib/api'
import { Button } from '../ui/Button'

export function Profile() {
  const qc = useQueryClient()
  const leadQuery = useQuery({ queryKey: ['lead'], queryFn: getLead })

  const resetMutation = useMutation({
    mutationFn: async () => {
      await upsertLead({
        stage: 'new',
        guardianName: '',
        email: '',
        phone: '',
        kidName: '',
        kidAge: null,
        interests: [],
        consent: false,
      })
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['lead'] })
      toast.success('Perfil reiniciado')
    },
  })

  const lead = leadQuery.data

  return (
    <div className="space-y-3">
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft"
      >
        <h1 className="text-lg font-extrabold tracking-tight text-slate-900">
          Perfil
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Tu estado actual dentro del flujo de captación.
        </p>
      </motion.section>

      <section className="rounded-3xl border border-slate-200 bg-white p-4">
        <div className="text-sm font-extrabold text-slate-900">Estado</div>
        <div className="mt-2 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Stage</span>
            <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-extrabold text-brand-800">
              {lead?.stage ?? 'new'}
            </span>
          </div>
          <div className="mt-3 grid gap-1 text-xs text-slate-600">
            <div>
              <span className="font-semibold text-slate-700">Tutor/a:</span>{' '}
              {lead?.guardianName || '—'}
            </div>
            <div>
              <span className="font-semibold text-slate-700">Peque:</span>{' '}
              {lead?.kidName || '—'}
            </div>
            <div>
              <span className="font-semibold text-slate-700">Intereses:</span>{' '}
              {lead?.interests?.length ? lead.interests.join(', ') : '—'}
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => {
              navigator.clipboard
                .writeText(JSON.stringify(lead ?? {}, null, 2))
                .then(() => toast.success('Copiado'))
                .catch(() => toast.error('No se pudo copiar'))
            }}
          >
            Copiar datos
          </Button>
          <Button
            variant="ghost"
            className="w-full"
            onClick={() => resetMutation.mutate()}
            disabled={resetMutation.isPending}
          >
            Reiniciar
          </Button>
        </div>
      </section>
    </div>
  )
}

