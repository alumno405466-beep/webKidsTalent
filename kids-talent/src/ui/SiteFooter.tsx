import { Link } from 'react-router-dom'
import { CONTACT, whatsappLink } from '../content/contact'

export function SiteFooter() {
  return (
    <footer className="mt-10 bg-charcoal text-white">
      <div className="mx-auto w-full max-w-5xl px-3 py-10 sm:px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-sm font-extrabold">KidsTalent</div>
            <p className="mt-2 text-xs text-white/80">
              Web mobile-first orientada a captación y contacto. Información
              genérica de ejemplo.
            </p>
          </div>

          <div>
            <div className="text-sm font-extrabold">Contacto</div>
            <ul className="mt-2 space-y-2 text-xs text-white/80">
              <li>
                <span className="font-bold text-white">Tel:</span> {CONTACT.phone}
              </li>
              <li>
                <span className="font-bold text-white">Email:</span>{' '}
                {CONTACT.email}
              </li>
              <li>
                <span className="font-bold text-white">Dirección:</span>{' '}
                {CONTACT.address}
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-extrabold text-white/90 transition hover:bg-white/15 active:scale-[0.99]"
                  href={whatsappLink('Hola, me gustaría recibir información sobre Kids Talent.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp <span aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-extrabold">Enlaces</div>
            <ul className="mt-2 space-y-2 text-xs">
              <li>
                <Link className="text-white/80 hover:text-white" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-white/80 hover:text-white" to="/faqs">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80 hover:text-white"
                  to="/privacidad"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80 hover:text-white"
                  to="/proteccion-datos"
                >
                  Protección de datos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-extrabold">Redes Sociales</div>
            <div className="mt-2 flex flex-wrap gap-3">
              {[
                {
                  label: 'Instagram',
                  href: '#',
                  icon: (
                    <svg
                      className="h-6 w-6 fill-white"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                    </svg>
                  ),
                },
                {
                  label: 'Facebook',
                  href: '#',
                  icon: (
                    <svg
                      className="h-6 w-6 fill-white"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: 'YouTube',
                  href: '#',
                  icon: (
                    <svg
                      className="h-6 w-6 fill-white"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
                {
                  label: 'TikTok',
                  href: '#',
                  icon: (
                    <svg
                      className="h-6 w-6 fill-white"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19.498 3h-3.996a.5.5 0 0 0-.5.5v13a3 3 0 1 1-6 0v-3.5a.5.5 0 0 0-1 0v3.5a4 4 0 1 0 8 0V8.881a5 5 0 0 0 3.5-4.713V3.5a.5.5 0 0 0-.5-.5z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full bg-white/10 p-2.5 text-white/90 transition hover:bg-white/20 hover:scale-110 active:scale-100"
                  aria-label={`Ir a ${s.label}`}
                  title={s.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-4 text-center text-[11px] text-white/60">
          © {new Date().getFullYear()} KidsTalent · Demo educativa
        </div>
      </div>
    </footer>
  )
}

