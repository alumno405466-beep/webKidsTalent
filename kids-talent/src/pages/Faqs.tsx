import { PageTitle } from '../ui/Cards'
import { JsonLd } from '../seo/JsonLd'

const faqs = [
  {
    q: '¿Qué es Kids Talent en Toledo y qué tipo de actividades ofrece para niños?',
    a: 'Kids Talent Toledo es un centro educativo en Toledo especializado en apoyo escolar, refuerzo educativo, técnicas de estudio y desarrollo emocional para niños. Sus actividades combinan aprendizaje académico con habilidades personales como la concentración, la autoestima y la motivación.',
  },
  {
    q: '¿A qué edades pueden asistir los niños a Kids Talent Toledo?',
    a: 'El centro está dirigido a niños desde educación infantil (aprox. 3 años) hasta secundaria, adaptando las clases según la edad, nivel académico y necesidades individuales.',
  },
  {
    q: '¿Es como una academia tradicional o hay diferencias?',
    a: 'A diferencia de una academia tradicional en Toledo, Kids Talent se centra no solo en aprobar asignaturas, sino en enseñar a los niños cómo estudiar, cómo concentrarse y cómo ganar confianza en sí mismos.',
  },
  {
    q: '¿Cómo ayudan a mejorar las notas de mi hijo?',
    a: 'El enfoque se basa en mejorar la comprensión, los hábitos de estudio y la organización. Esto suele traducirse en una mejora progresiva del rendimiento escolar.',
  },
  {
    q: '¿Qué pasa si mi hijo tiene problemas de atención o concentración?',
    a: 'En Kids Talent Toledo se aplican técnicas específicas para mejorar la atención, especialmente útiles en niños con dificultades de concentración o perfiles como TDAH.',
  },
  {
    q: '¿Trabajan también la parte emocional de los niños?',
    a: 'Sí, el desarrollo emocional es una parte fundamental. Se trabaja la autoestima, la frustración, la motivación y las habilidades sociales.',
  },
  {
    q: '¿Cómo son los grupos de alumnos?',
    a: 'Los grupos son reducidos, lo que permite una atención personalizada y un seguimiento cercano de cada niño.',
  },
  {
    q: '¿Cómo saben qué necesita exactamente mi hijo?',
    a: 'Se realiza una evaluación inicial para detectar nivel académico, dificultades y puntos fuertes, y así adaptar el aprendizaje.',
  },
  {
    q: '¿Hay comunicación con los padres?',
    a: 'Sí, el centro mantiene contacto frecuente con las familias para informar sobre el progreso y evolución del niño.',
  },
  {
    q: '¿Puede ayudar si mi hijo va mal en el colegio?',
    a: 'Sí, especialmente en casos de bajo rendimiento, falta de motivación o dificultades en asignaturas concretas.',
  },
  {
    q: '¿Se trabajan técnicas de estudio?',
    a: 'Sí, es uno de los pilares principales: organización, planificación, memorización y comprensión.',
  },
  {
    q: '¿Mi hijo puede ir solo unos días a la semana?',
    a: 'Sí, hay flexibilidad de horarios y asistencia según las necesidades de cada familia.',
  },
  {
    q: '¿Dónde está ubicado Kids Talent en Toledo?',
    a: 'El centro está situado en la Avenida de Irlanda, una zona accesible dentro de Toledo.',
  },
  {
    q: '¿Es adecuado para niños tímidos o con dificultades sociales?',
    a: 'Sí, el ambiente está diseñado para ser cercano y seguro, ayudando a los niños a integrarse progresivamente.',
  },
  {
    q: '¿Se puede probar antes de apuntarse?',
    a: 'Normalmente se ofrece una sesión inicial de valoración para conocer al niño y explicar el funcionamiento del centro.',
  },
]

export function Faqs() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }

  return (
    <div className="space-y-4">
      <JsonLd data={faqJsonLd} />
      <PageTitle>FAQs</PageTitle>
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
        <div className="space-y-2">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-slate-50 p-3">
              <summary className="cursor-pointer list-none text-sm font-extrabold text-slate-900 outline-none">
                {f.q}
              </summary>
              <div className="mt-2 text-sm text-slate-700">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}

