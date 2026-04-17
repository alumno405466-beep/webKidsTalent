export const CONTACT = {
  email: 'hello@kidstalent.es',
  phone: '925 260 767',
  address: 'Avenida Irlanda 24, Toledo',
  whatsappE164: '+34699439467',
} as const

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${CONTACT.whatsappE164.replace(/[^\d+]/g, '').replace('+', '')}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

