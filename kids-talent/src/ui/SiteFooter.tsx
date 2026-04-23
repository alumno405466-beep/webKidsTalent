import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CONTACT, whatsappLink } from '../content/contact'

export function SiteFooter() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.footer
      className="mt-10 bg-charcoal text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-label="Pie de página"
    >
      <div className="mx-auto w-full max-w-5xl px-3 py-10 sm:px-4">
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
        >
          {/* Descripción */}
          <motion.div variants={itemVariants}>
            <div className="text-sm font-extrabold">KidsTalent Toledo</div>
            <p className="mt-2 text-xs leading-relaxed text-white/80">
              Centro educativo en Toledo especializado en apoyo escolar, desarrollo emocional y actividades extraescolares para niños de 3 a 16 años.
            </p>
          </motion.div>

          {/* Contacto — con links clickables (mobile-first) */}
          <motion.div variants={itemVariants}>
            <div className="text-sm font-extrabold">Contacto</div>
            <address className="mt-2 space-y-2 text-xs text-white/80 not-italic">
              <div>
                <span className="font-bold text-white">Tel:</span>{' '}
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="transition hover:text-white focus-visible:text-white underline-offset-2 hover:underline"
                  aria-label={`Llamar al ${CONTACT.phone}`}
                >
                  {CONTACT.phone}
                </a>
              </div>
              <div>
                <span className="font-bold text-white">Email:</span>{' '}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition hover:text-white focus-visible:text-white underline-offset-2 hover:underline"
                  aria-label={`Enviar email a ${CONTACT.email}`}
                >
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <span className="font-bold text-white">Dirección:</span>{' '}
                {CONTACT.address}
              </div>
              <div>
                <motion.a
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#11AF4B] px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-[#0f9d42] active:scale-[0.99]"
                  href={whatsappLink('Hola, me gustaría recibir información sobre Kids Talent.')}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Contactar por WhatsApp"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Icono WhatsApp */}
                  <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </motion.a>
              </div>
            </address>
          </motion.div>

          {/* Navegación de footer */}
          <motion.div variants={itemVariants}>
            <div className="text-sm font-extrabold">Navegación</div>
            <nav aria-label="Navegación secundaria del pie de página">
              <ul className="mt-2 space-y-2 text-xs">
                <li>
                  <Link className="text-white/80 transition hover:text-white underline-offset-2 hover:underline" to="/programas">
                    Programas
                  </Link>
                </li>
                <li>
                  <Link className="text-white/80 transition hover:text-white underline-offset-2 hover:underline" to="/campamentos">
                    Campamentos
                  </Link>
                </li>
                <li>
                  <Link className="text-white/80 transition hover:text-white underline-offset-2 hover:underline" to="/nosotros">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link className="text-white/80 transition hover:text-white underline-offset-2 hover:underline" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="text-white/80 transition hover:text-white underline-offset-2 hover:underline" to="/faqs">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white/80 transition hover:text-white underline-offset-2 hover:underline"
                    to="/privacidad"
                  >
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white/80 transition hover:text-white underline-offset-2 hover:underline"
                    to="/proteccion-datos"
                  >
                    Protección de datos
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>

          {/* Redes Sociales — targets ≥ 44×44px */}
          <motion.div variants={itemVariants}>
            <div className="text-sm font-extrabold">Síguenos</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                {
                  label: 'Instagram',
                  href: '#',
                  icon: (
                    <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                    </svg>
                  ),
                },
                {
                  label: 'Facebook',
                  href: '#',
                  icon: (
                    <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: 'YouTube',
                  href: '#',
                  icon: (
                    <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
                {
                  label: 'TikTok',
                  href: '#',
                  icon: (
                    <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.498 3h-3.996a.5.5 0 0 0-.5.5v13a3 3 0 1 1-6 0v-3.5a.5.5 0 0 0-1 0v3.5a4 4 0 1 0 8 0V8.881a5 5 0 0 0 3.5-4.713V3.5a.5.5 0 0 0-.5-.5z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white/90 transition hover:bg-white/25 active:scale-95"
                  aria-label={`Visitar ${s.label} de KidsTalent`}
                  title={s.label}
                  rel="noreferrer"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-10 border-t border-white/10 pt-4 text-center text-[11px] text-white/50"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} KidsTalent Toledo · Todos los derechos reservados
        </motion.div>
      </div>
    </motion.footer>
  )
}
