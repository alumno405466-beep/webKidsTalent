import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonicalUrl?: string
  ogImage?: string
  keywords?: string
}

export function SEO({
  title,
  description,
  canonicalUrl,
  ogImage = 'https://kidstalent.es/og-image.jpg',
  keywords = 'centro educativo Toledo, apoyo escolar Toledo, extraescolares Toledo, desarrollo emocional infantil, técnicas de estudio, Kids Talent',
}: SEOProps) {
  const siteName = 'Kids Talent Toledo'
  const fullTitle = `${title} | ${siteName}`

  return (
    <Helmet>
      {/* Título y descripción (SEO Clásico y LLMs) */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL para evitar contenido duplicado */}
      {canonicalUrl && <link rel="canonical" href={`https://kidstalent.es${canonicalUrl}`} />}

      {/* Open Graph (Facebook, LinkedIn, y visualización en iMessage/WhatsApp) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {canonicalUrl && <meta property="og:url" content={`https://kidstalent.es${canonicalUrl}`} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Etiquetas adicionales de IA/LLM (Geo-targeting y contexto de bot) */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
    </Helmet>
  )
}
