import { readDb, writeDb } from './storage'
import type { LeadProfile } from './types'

function nowIso() {
  return new Date().toISOString()
}

export async function getLead(): Promise<LeadProfile | null> {
  const db = readDb()
  return (db.lead as LeadProfile | null) ?? null
}

export async function upsertLead(
  partial: Partial<Omit<LeadProfile, 'createdAt' | 'updatedAt'>> & {
    stage?: LeadProfile['stage']
  },
): Promise<LeadProfile> {
  const db = readDb()
  const existing = (db.lead as LeadProfile | null) ?? null

  const base: LeadProfile =
    existing ??
    ({
      stage: 'new',
      guardianName: '',
      email: '',
      phone: '',
      kidName: '',
      kidAge: null,
      interests: [],
      consent: false,
      createdAt: nowIso(),
      updatedAt: nowIso(),
    } satisfies LeadProfile)

  const next: LeadProfile = {
    ...base,
    ...partial,
    updatedAt: nowIso(),
  }

  writeDb({ ...db, lead: next })
  return next
}

