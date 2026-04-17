export type ProgramCategory =
  | 'Creatividad'
  | 'Tecnología'
  | 'Idiomas'
  | 'Refuerzo académico'
  | 'Experiencias'

export type Program = {
  slug: string
  title: string
  category: ProgramCategory
  ages: string
  interests: string[]
  summary: string
  whatIs: string
  forWho: string
  develops: string[]
  howWeWork: string[]
  practical: {
    duration?: string
    schedule?: string
    location?: string
  }
}

export const PROGRAM_CATEGORIES: ProgramCategory[] = [
  'Creatividad',
  'Tecnología',
  'Idiomas',
  'Refuerzo académico',
  'Experiencias',
]

export const PROGRAMS: Program[] = [
  {
    slug: 'robotica-creativa',
    title: 'Robótica creativa',
    category: 'Tecnología',
    ages: 'Flexible (orientativo: 6–12)',
    interests: ['Robótica', 'Construcción', 'Creatividad'],
    summary: 'Construcción + pensamiento lógico + trabajo en equipo.',
    whatIs:
      'Un programa donde los niños construyen, prueban y mejoran prototipos con retos semanales.',
    forWho:
      'Para peques curiosos que disfrutan montando, desmontando y entendiendo “cómo funciona”.',
    develops: [
      'Pensamiento lógico',
      'Resolución de problemas',
      'Creatividad aplicada',
      'Trabajo en equipo',
    ],
    howWeWork: [
      'Retos cortos con objetivo claro',
      'Aprendizaje por proyectos',
      'Feedback y celebración de avances',
    ],
    practical: { duration: 'Sesiones de 60–90 min (orientativo)' },
  },
  {
    slug: 'artes-escenicas',
    title: 'Artes escénicas',
    category: 'Creatividad',
    ages: 'Flexible (orientativo: 6–14)',
    interests: ['Teatro', 'Expresión', 'Confianza'],
    summary: 'Expresión, comunicación y seguridad personal.',
    whatIs:
      'Un espacio para explorar voz, cuerpo y escena con dinámicas de grupo y creación.',
    forWho:
      'Para quienes quieren expresarse mejor, ganar confianza y crear en equipo.',
    develops: ['Comunicación', 'Autoestima', 'Creatividad', 'Empatía'],
    howWeWork: ['Dinámicas de escena', 'Improvisación guiada', 'Proyecto final'],
    practical: { duration: 'Sesiones semanales (orientativo)' },
  },
  {
    slug: 'english-boost',
    title: 'English Boost',
    category: 'Idiomas',
    ages: 'Flexible (orientativo: 6–14)',
    interests: ['Idiomas', 'Conversación', 'Juegos'],
    summary: 'Inglés práctico con conversación y proyectos.',
    whatIs:
      'Sesiones donde el idioma se usa para hacer cosas: juegos, retos y mini-proyectos.',
    forWho:
      'Para mejorar fluidez y confianza, sin presión y con enfoque comunicativo.',
    develops: ['Expresión oral', 'Comprensión', 'Confianza', 'Autonomía'],
    howWeWork: ['Grupos reducidos', 'Juego + conversación', 'Proyectos cortos'],
    practical: { duration: '60 min (orientativo)' },
  },
  {
    slug: 'refuerzo-con-proposito',
    title: 'Refuerzo con propósito',
    category: 'Refuerzo académico',
    ages: 'Flexible (según necesidad)',
    interests: ['Estudio', 'Método', 'Organización'],
    summary: 'Técnicas de estudio + acompañamiento emocional.',
    whatIs:
      'Refuerzo académico que incorpora hábitos, organización y un enfoque de desarrollo personal.',
    forWho:
      'Para mejorar resultados sin perder motivación: método + confianza.',
    develops: ['Hábitos de estudio', 'Autogestión', 'Persistencia', 'Seguridad'],
    howWeWork: ['Plan semanal', 'Objetivos pequeños', 'Seguimiento de avances'],
    practical: { duration: 'Sesiones según objetivo (orientativo)' },
  },
  {
    slug: 'experiencias-kids',
    title: 'Experiencias Kids',
    category: 'Experiencias',
    ages: 'Flexible',
    interests: ['Campamentos', 'Talleres', 'Amistad'],
    summary: 'Actividades intensivas para aprender y socializar.',
    whatIs:
      'Experiencias puntuales (talleres, eventos, jornadas) donde se mezclan creatividad, tecnología y convivencia.',
    forWho:
      'Para probar, descubrir intereses y vivir una experiencia completa.',
    develops: ['Socialización', 'Curiosidad', 'Trabajo en equipo', 'Iniciativa'],
    howWeWork: ['Retos por estaciones', 'Dinámicas de grupo', 'Cierre con showcase'],
    practical: { duration: 'Eventos puntuales (orientativo)' },
  },
]

export function getProgram(slug: string) {
  return PROGRAMS.find((p) => p.slug === slug) ?? null
}

