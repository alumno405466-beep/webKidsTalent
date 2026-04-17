import { useMemo } from 'react'

export function JsonLd({ data }: { data: unknown }) {
  const json = useMemo(() => JSON.stringify(data), [data])
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}

