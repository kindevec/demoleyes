import { PracticeArea, Attorney, CaseStudy, Testimonial, FaqItem } from '../types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corporativo-m-a',
    title: 'Derecho Corporativo & Fusiones',
    subtitle: 'M&A, Gobierno Corporativo y Finanzas',
    description: 'Estructuración jurídica integral de operaciones mercantiles, fusiones, adquisiciones y acuerdos de accionistas de alto valor estratégico.',
    iconName: 'Scale',
    services: [
      'Fusiones, Adquisiciones (M&A) y Due Diligence',
      'Pactos de Socios y Blindaje de Gobernanza',
      'Contratos Comerciales Internacionales y Financiación'
    ],
    tag: 'Corporativo'
  },
  {
    id: 'litigios-penal',
    title: 'Litigios Complejos & Defensa Penal Económica',
    subtitle: 'Resolución de Disputas de Alto Riesgo',
    description: 'Patrocinio procesal implacable en litigios civiles, arbitrajes comerciales y defensa técnica penal en delitos tributarios y societarios.',
    iconName: 'ShieldCheck',
    services: [
      'Arbitrajes Nacionales e Internacionales (CIADI / CCI)',
      'Defensa Penal Corporativa y Compliance Anticorrupción',
      'Medidas Cautelares de Urgencia y Recuperación de Activos'
    ],
    tag: 'Litigios'
  },
  {
    id: 'tributario-fiscal',
    title: 'Asesoría Tributaria & Fiscal',
    subtitle: 'Optimización y Defensa Ante la Administración',
    description: 'Planificación fiscal estratégica preventiva y defensa contencioso-tributaria frente a fiscalizaciones y reparos determinativos.',
    iconName: 'FileCheck',
    services: [
      'Planificación y Estructuración Fiscal Transfronteriza',
      'Patrocinio en Juicios Contenciosos Tributarios',
      'Auditorías Preventivas y Precios de Transferencia'
    ],
    tag: 'Tributario'
  },
  {
    id: 'patrimonial-sucesiones',
    title: 'Protección Patrimonial & Sucesiones',
    subtitle: 'Blindaje de Fortunas y Family Offices',
    description: 'Diseño de vehículos fiduciarios, trusts y protocolos familiares para asegurar la transmisión intergeneracional pacífica y segura.',
    iconName: 'Building2',
    services: [
      'Fideicomisos Mercantiles y Estructuras Fiduciarias',
      'Protocolos Familiares y Testamentos Estratégicos',
      'Mitigación de Riesgos Patrimoniales y Embargos'
    ],
    tag: 'Patrimonial'
  },
  {
    id: 'laboral-compliance',
    title: 'Derecho Laboral & Compliance Empresarial',
    subtitle: 'Gestión del Capital Humano y Mitigación de Riesgos',
    description: 'Blindaje preventivo para directores y corporaciones frente a contingencias laborales masivas, negociación colectiva y normativas.',
    iconName: 'Briefcase',
    services: [
      'Programas de Compliance Laboral y Prevención de Acoso',
      'Desvinculaciones Ejecutivas de Alta Dirección (Golden Parachutes)',
      'Negociación de Contratos Colectivos y Conflictos Sindicales'
    ],
    tag: 'Compliance'
  },
  {
    id: 'inmobiliario-inversion',
    title: 'Contratación e Inversión Inmobiliaria',
    subtitle: 'Desarrollo Urbano, Suelos y Proyectos de Envergadura',
    description: 'Seguridad jurídica total en compraventas de tierras, estructuración de fideicomisos inmobiliarios y licencias urbanísticas.',
    iconName: 'Landmark',
    services: [
      'Due Diligence Registral y Titularidad de Suelos',
      'Estructuración Fiduciaria de Proyectos Inmobiliarios',
      'Permisología Ambiental, Municipal y Régimen de Propiedad'
    ],
    tag: 'Inmobiliario'
  }
];

export const ATTORNEYS: Attorney[] = [
  {
    id: 'fernando-valenzuela',
    name: 'Dr. Fernando Valenzuela Ramos',
    role: 'Socio Fundador & Director de Litigios',
    specialty: 'Litigios Complejos y Arbitraje Internacional',
    education: [
      'LL.M. in International Legal Studies, Harvard Law School',
      'Doctor en Jurisprudencia, Pontificia Universidad Católica',
      'Ex-Conjuez de la Corte Nacional de Justicia'
    ],
    barNumber: 'Matrícula Profesional No. 17-2004-892',
    experience: '24+ Años de Ejercicio Impecable',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    bio: 'Reconocido por Chambers & Partners como líder indiscutido en resolución de litigios corporativos y arbitrajes comerciales de alta envergadura.'
  },
  {
    id: 'elena-mendoza',
    name: 'Dra. Elena Mendoza Carrión',
    role: 'Socia Directora de M&A y Derecho Corporativo',
    specialty: 'Fusiones, Adquisiciones y Banca de Inversión',
    education: [
      'Máster en Asesoría Jurídica de Empresas, Universidad de Salamanca',
      'Especialista en Mercado de Valores y Fusiones, IE Law School',
      'Abogada Cum Laude con Mención de Honor'
    ],
    barNumber: 'Matrícula Profesional No. 17-2009-411',
    experience: '18+ Años Liderando Negociaciones M&A',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    bio: 'Ha asesorado transacciones de fusión y venta de empresas por más de 120 millones de dólares en sectores industrial, retail y tecnológico.'
  },
  {
    id: 'carlos-alarcon',
    name: 'Dr. Carlos Alarcón Pareja',
    role: 'Socio de Penal Económico & Fiscalidad Estratégica',
    specialty: 'Defensa Penal de Delitos de Cuello Blanco & Tributario',
    education: [
      'LL.M. in Criminal Law & Corporate Compliance, Columbia Law School',
      'Diplomado en Derecho Tributario Internacional, Universidad Austral',
      'Miembro Titular de la International Fiscal Association (IFA)'
    ],
    barNumber: 'Matrícula Profesional No. 17-2011-534',
    experience: '16+ Años en Estrategia Sancionatoria',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    bio: 'Especialista en blindaje preventivo y defensa en juicio frente a acusaciones de fraude tributario, aduanero y administración desleal.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'caso-fusion',
    title: 'Blindaje y Cierre de Fusión Transfronteriza por $4.2M',
    category: 'Derecho Corporativo & M&A',
    impact: '$4,200,000 USD protegidos',
    result: 'Cierre Exitoso sin Contingencias Pasivas',
    summary: 'Estructuración integral de contrato de compraventa de acciones, due diligence regulatorio y superación de objeciones antimonopolio en plazo récord de 45 días.',
    year: '2025',
    tag: 'Operación M&A'
  },
  {
    id: 'caso-penal-corporativo',
    title: 'Sobreseimiento Definitivo en Litigio Penal Económico',
    category: 'Penal Corporativo & Litigios',
    impact: 'Absolución Total y Restitución de Garantías',
    result: 'Sentencia de Inocencia Unánime',
    summary: 'Defensa técnica de un consorcio industrial frente a imputaciones infundadas de defraudación tributaria; desestimación judicial en etapa evaluatoria de juicio.',
    year: '2025',
    tag: 'Defensa Penal'
  },
  {
    id: 'caso-reestructuracion-familiar',
    title: 'Reestructuración Patrimonial Intergeneracional de Family Office',
    category: 'Protección Patrimonial & Fideicomisos',
    impact: 'Patrimonio de $18M blindado con fiduciaria',
    result: 'Gobernanza Unificada y Cero Disputas',
    summary: 'Diseño de fideicomiso mercantil irrevocable y protocolo de sucesión que blindó los activos productivos de una familia empresarial de segunda y tercera generación.',
    year: '2024',
    tag: 'Family Office'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientType: 'Grupo Financiero & Fintech',
    industry: 'Sector Banca y Tecnología',
    quote: 'La precisión analítica del Dr. Valenzuela y su equipo evitó un litigio de 8 cifras que amenazaba nuestra ronda de expansión. Su capacidad de negociación y rigor jurídico son sencillamente incomparables.',
    authorTitle: 'Vicepresidente Legal & Riesgos',
    statusVerified: true,
    confidentialId: 'Ref. Expediente V-40192'
  },
  {
    id: 'test-2',
    clientType: 'Consorcio Agroindustrial Exportador',
    industry: 'Comercio Exterior & Logística',
    quote: 'Elena Mendoza no solo entiende el marco normativo, entiende el negocio. Nos acompañó en una fusión crítica protegiendo nuestros intereses accionarios con una destreza que nos dio total tranquilidad.',
    authorTitle: 'Presidente del Directorio',
    statusVerified: true,
    confidentialId: 'Ref. Protocolo M&A-89'
  },
  {
    id: 'test-3',
    clientType: 'Patrimonio Familiar Privado',
    industry: 'Bienes Raíces & Inversiones Privadas',
    quote: 'El blindaje fiduciario que construyeron para nuestra familia nos permitió transicionar el patrimonio a nuestros hijos sin una sola fricción ni fuga fiscal. Discreción absoluta y seriedad suprema.',
    authorTitle: 'Director de Family Office',
    statusVerified: true,
    confidentialId: 'Ref. Trust Privado F-102'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Honorarios & Contratación',
    question: '¿Cómo se estructuran los honorarios profesionales de la firma?',
    answer: 'Nuestra firma opera con total transparencia tarifaria adaptada a la complejidad del mandato. Implementamos esquemas de iguala corporativa mensual (retainer), honorarios por etapas procesales predecibles o pactos de cuota litis (éxito) condicionados al resultado favorable, formalizados mediante contrato de prestación de servicios desde el primer día.'
  },
  {
    id: 'faq-2',
    category: 'Confidencialidad & Ética',
    question: '¿Cómo se garantiza el secreto profesional y la confidencialidad?',
    answer: 'Todo contacto preliminar y documentación compartida está amparada bajo el secreto profesional legal (Art. 11 del Código de Ética y normativa procesal aplicable), suscrito por acuerdos de no divulgación (NDA) automáticos. Contamos con infraestructura de almacenamiento cifrado AES-256 para expedientes digitales y estricto control de accesos.'
  },
  {
    id: 'faq-3',
    category: 'Tiempos de Respuesta',
    question: '¿Cuál es el tiempo de respuesta ante un requerimiento judicial o urgencia?',
    answer: 'Para casos calificados como de Urgencia Inmediata (medidas cautelares, allanamientos, detenciones, notificaciones judiciales perentorias), nuestro equipo de guardia activa la respuesta en menos de 2 horas hábiles. Para consultas ordinarias, nuestro plazo estándar de dictamen preliminar es de 24 a 48 horas.'
  },
  {
    id: 'faq-4',
    category: 'Cobertura Geográfica',
    question: '¿Atienden a clientes corporativos internacionales o radicados en el exterior?',
    answer: 'Sí. Representamos a fondos de inversión, multinacionales y ciudadanos con intereses patrimoniales en el país desde Estados Unidos, Europa y América Latina. Gestionamos procesos mediante poderes especiales formalizados, salas virtuales seguras y canales directos de videoconferencia cifrada.'
  },
  {
    id: 'faq-5',
    category: 'Primera Consulta',
    question: '¿Qué información o documentación se requiere para la sesión de diagnóstico inicial?',
    answer: 'Para aprovechar al máximo su sesión de evaluación, sugerimos preparar una síntesis cronológica de los hechos y copia digital de los documentos contractuales, notificaciones o resoluciones vinculadas. Si no cuenta con el expediente completo, nuestro equipo solicitará las copias certificadas ante la autoridad correspondiente.'
  }
];

export const FIRM_METRICS = {
  yearsExperience: '18+',
  favorableRatio: '97.8%',
  protectedAssets: '+$45M',
  casesHandled: '1,850+',
  retainedCorporateClients: '120+',
  barAssociation: 'Colegio de Abogados de Pichincha & IBA'
};
