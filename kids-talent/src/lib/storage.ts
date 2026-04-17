const KEY = 'kids-talent:v1'

type DB = {
  lead: unknown
}

function safeParse(json: string | null): DB | null {
  if (!json) return null
  try {
    return JSON.parse(json) as DB
  } catch {
    return null
  }
}

export function readDb(): DB {
  const parsed = safeParse(localStorage.getItem(KEY))
  return (
    parsed ?? {
      lead: null,
    }
  )
}

export function writeDb(next: DB) {
  localStorage.setItem(KEY, JSON.stringify(next))
}

