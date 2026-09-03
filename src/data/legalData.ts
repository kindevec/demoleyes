import { PracticeArea, Attorney, CaseStudy, Testimonial, FaqItem, FeeModel } from '../types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corporativo-m-a',
    title: 'Derecho Corporativo & M&A',
    subtitle: 'Fusiones, Adquisiciones y Gobernanza Estratégica',
    description: 'Estructuración jurídica integral de operaciones mercantiles complejas, compraventa de compañías, alianzas estratégicas (joint ventures) y pactos parasociales de alta exigencia fiduciaria.',
    iconName: 'Scale',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    services: [
      'Fusiones y Adquisiciones (M&A) transfronterizas con Due Diligence integral',
      'Pactos de Accionistas, Protocolos de Salida y Protección de Mayorías/Minorías',
      'Financiamiento Estructurado, Emisión de Deuda Privada y Mercado de Capitales'
    ],
    tag: 'Corporativo',
    leadPartner: 'Dra. Elena Mendoza Carrión',
    leadPartnerRole: 'Socia Directora de M&A y Derecho Societario',
    typicalCases: [
      'Adquisición hostil o amistosa de paquetes accionarios mayoritarios',
      'Reestructuración de holdings empresariales para optimizar gobierno corporativo',
      'Negociación de acuerdos de inversión y capital de riesgo con fondos internacionales'
    ],
    keyBenefits: [
      'Blindaje de contingencias pasivas ocultas mediante cláusulas de indemnidad',
      'Alineación rigurosa con normativas antimonopolio y control del poder de mercado',
      'Gestión integral y confidencial coordinada directamente por socios senior'
    ],
    turnaroundTime: 'Respuesta inicial en 24h | Cierres transaccionales en 30 a 60 días'
  },
  {
    id: 'litigios-penal',
    title: 'Litigios Complejos & Defensa Penal Económica',
    subtitle: 'Patrocinio Procesal en Disputas Judiciales Críticas',
    description: 'Defensa técnica especializada y representación litigiosa en tribunales ordinarios, cortes arbitrales internacionales y fueros penales en delitos societarios y patrimoniales.',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    services: [
      'Arbitrajes Comerciales Nacionales e Internacionales (CIADI, CCI, Cámara de Comercio)',
      'Defensa Técnica en Delitos Económicos, Fraude Corporativo y Delincuencia Financiera',
      'Medidas Cautelares de Urgencia, Secuestro de Bienes y Recuperación de Activos'
    ],
    tag: 'Litigios',
    leadPartner: 'Dr. Fernando Valmont Ramos',
    leadPartnerRole: 'Socio Fundador & Director de Litigación Estratégica',
    typicalCases: [
      'Demandas de responsabilidad civil extracontractual de cuantía superior a $1M',
      'Defensa penal de directores ejecutivos por imputaciones de administración desleal',
      'Conflictos societarios judiciales entre accionistas por control de la administración'
    ],
    keyBenefits: [
      'Estrategia de litigio ofensivo-defensiva con simulación previa de escenarios procesales',
      'Activación inmediata de medidas cautelares para evitar vaciamiento patrimonial',
      'Guardia penal permanente 24/7 para emergencias y detenciones procesales'
    ],
    turnaroundTime: 'Activación en < 2 horas para urgencias | Monitoreo procesal continuo'
  },
  {
    id: 'tributario-fiscal',
    title: 'Asesoría Tributaria & Fiscalidad Internacional',
    subtitle: 'Optimización Impositiva y Defensa Contenciosa',
    description: 'Diseño de arquitecturas fiscales eficientes y patrocinio litigioso de primer nivel frente a determinaciones impositivas, fiscalizaciones y liquidaciones de la Administración Tributaria.',
    iconName: 'FileCheck',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    services: [
      'Planificación Fiscal Corporativa y Estructuración Transfronteriza',
      'Juicios Contencioso-Tributarios y Acciones de Impugnación de Glosas',
      'Precios de Transferencia, Devolución de Tributos y Auditorías Preventivas'
    ],
    tag: 'Tributario',
    leadPartner: 'Dr. Carlos Alarcón Pareja',
    leadPartnerRole: 'Socio de Penal Económico & Fiscalidad Estratégica',
    typicalCases: [
      'Impugnación judicial de actas de determinación fiscal millonarias',
      'Estructuración de flujos de dividendos y regalías hacia jurisdicciones con CDI',
      'Defensa prejudicial en inspecciones fiscales con riesgo sancionatorio'
    ],
    keyBenefits: [
      'Ahorro impositivo legítimo mediante aplicación estricta de incentivos y convenios',
      'Mitigación total de contingencias por recargos, intereses o multas punitivas',
      'Respaldo técnico documental con peritajes contables y económicos integrados'
    ],
    turnaroundTime: 'Diagnóstico preliminar en 48h | Defensa de reparos en plazos perentorios'
  },
  {
    id: 'patrimonial-sucesiones',
    title: 'Protección Patrimonial & Family Offices',
    subtitle: 'Blindaje Fiduciario y Sucesión Intergeneracional',
    description: 'Estructuración de vehículos fiduciarios, trusts y mandatos de sucesión pacífica para resguardar patrimonios de familias empresarias contra contingencias imprevistas y disputas hereditarias.',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    services: [
      'Fideicomisos Mercantiles Irrevocables de Administración y Garantía',
      'Protocolos Familiares de Gobernanza y Acuerdos de Consejo de Familia',
      'Testamentos Estratégicos, Donaciones con Reserva de Usufructo y Sucesiones'
    ],
    tag: 'Patrimonial',
    leadPartner: 'Dr. Carlos Alarcón Pareja',
    leadPartnerRole: 'Socio de Protección Patrimonial & Fideicomisos',
    typicalCases: [
      'Transferencia controlada del mando operativo de una empresa familiar a la 2da generación',
      'Blindaje de activos inmobiliarios y financieros frente a eventuales reclamaciones de terceros',
      'Creación de estructuras de Family Office para gestión diversificada de portafolios'
    ],
    keyBenefits: [
      'Inembargabilidad legítima de patrimonios autónomos fiduciarios',
      'Eliminación de fricciones o fracturas familiares mediante protocolos consensuados',
      'Total discreción y confidencialidad en el manejo de registros patrimoniales'
    ],
    turnaroundTime: 'Estructuración de protocolo familiar en 30 a 90 días'
  },
  {
    id: 'laboral-compliance',
    title: 'Compliance Laboral & Alta Dirección',
    subtitle: 'Gestión Preventiva del Talento y Mitigación de Riesgos',
    description: 'Asesoramiento preventivo integral para juntas directivas y gerencias de recursos humanos en desvinculaciones estratégicas de altos ejecutivos, convenios colectivos y programas de ética laboral.',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    services: [
      'Diseño e Implementación de Programas de Compliance y Canales Éticos',
      'Desvinculaciones Estratégicas de Ejecutivos y Golden Parachutes',
      'Negociación de Contratos Colectivos, Prevención de Huelgas y Arbitraje Laboral'
    ],
    tag: 'Compliance',
    leadPartner: 'Dra. Elena Mendoza Carrión',
    leadPartnerRole: 'Socia Directora de M&A y Compliance',
    typicalCases: [
      'Negociación de acuerdos transaccionales con ejecutivos clave evitando litigio público',
      'Auditoría laboral preventiva previa a transacciones de compra o fusión empresarial',
      'Defensa ante reclamaciones masivas por supuestos despidos ineficaces o discriminación'
    ],
    keyBenefits: [
      'Protección reputacional de la marca y de la alta dirección',
      'Reducción drástica del pasivo contingente derivado de indemnizaciones desproporcionadas',
      'Documentación laboral blindada ante fiscalizaciones del Ministerio de Trabajo'
    ],
    turnaroundTime: 'Resolución de acuerdos ejecutivos en 24 a 72 horas'
  },
  {
    id: 'inmobiliario-inversion',
    title: 'Inversión Inmobiliaria & Urbanismo',
    subtitle: 'Desarrollo de Proyectos, Suelo y Seguridad Jurídica Registral',
    description: 'Blindaje legal integral para promotores, fondos de inversión inmobiliaria y propietarios de suelo en estructuraciones fiduciarias, permutas inmobiliarias y licencias de edificación.',
    iconName: 'Landmark',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    services: [
      'Due Diligence Registral, Catastral y Estudio de Títulos Inmobiliarios de 30 Años',
      'Estructuración Fiduciaria de Desarrollos Urbanos y Torres Corporativas/Residenciales',
      'Permisología Municipal, Impacto Ambiental y Régimen de Propiedad Horizontal'
    ],
    tag: 'Inmobiliario',
    leadPartner: 'Dr. Fernando Valmont Ramos',
    leadPartnerRole: 'Socio Fundador & Director de Litigios',
    typicalCases: [
      'Adquisición de macro-lotes para urbanización con gravámenes o litigios en curso',
      'Constitución de fideicomisos inmobiliarios para apalancamiento de preventas',
      'Resolución de disputas de linderos y nulidad de escrituras con el municipio'
    ],
    keyBenefits: [
      'Cero sorpresas registrales antes del desembolso de fondos o firma de promesas',
      'Seguridad financiera para inversionistas mediante figuras de patrimonio autónomo',
      'Agilidad en tramitología normativa y convenios urbanísticos'
    ],
    turnaroundTime: 'Estudio de títulos express en 5 días | Fideicomiso en 20 días'
  }
];

export const ATTORNEYS: Attorney[] = [
  {
    id: 'fernando-valmont',
    name: 'Dr. Fernando Valmont Ramos',
    role: 'Socio Fundador & Director de Litigios',
    specialty: 'Litigios Complejos y Arbitraje Internacional',
    education: [
      'LL.M. in International Legal Studies — Harvard Law School (Cambridge, MA)',
      'Doctor en Jurisprudencia (Summa Cum Laude) — Pontificia Universidad Católica',
      'Ex-Conjuez de la Corte Nacional de Justicia & Árbitro Certificado Cámara de Comercio'
    ],
    barNumber: 'Matrícula Profesional No. 17-2004-892',
    experience: '24+ Años de Ejercicio Impecable',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    bio: 'Reconocido por Chambers & Partners como líder indiscutido en resolución de litigios corporativos y arbitrajes comerciales de alta envergadura. Ha liderado más de 850 audiencias complejas en cortes nacionales y tribunales internacionales CIADI.',
    publications: [
      'Tratado de la Prueba en el Arbitraje Comercial Internacional (2023)',
      'Responsabilidad Civil de Administradores en Sociedades Anónimas (2020)'
    ],
    notableWins: [
      'Sentencia absolutoria en disputa civil por $12M frente a consorcio extranjero',
      'Laudo arbitral favorable por $7.8M en controversia contractual de infraestructura'
    ]
  },
  {
    id: 'elena-mendoza',
    name: 'Dra. Elena Mendoza Carrión',
    role: 'Socia Directora de M&A y Derecho Corporativo',
    specialty: 'Fusiones, Adquisiciones y Banca de Inversión',
    education: [
      'Máster en Asesoría Jurídica de Empresas — Universidad de Salamanca (España)',
      'Especialista en Mercado de Valores y Fusiones — IE Law School (Madrid)',
      'Abogada de los Tribunales con Mención de Honor y Excelencia Académica'
    ],
    barNumber: 'Matrícula Profesional No. 17-2009-411',
    experience: '18+ Años Liderando Negociaciones M&A',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    bio: 'Ha estructurado y cerrado transacciones corporativas de compra, venta y fusión de empresas por más de 120 millones de dólares en sectores farmacéutico, agroexportador, telecomunicaciones y tecnología fintech en América Latina.',
    publications: [
      'Manual Práctico de Due Diligence Corporativo y Cláusulas MAC (2024)',
      'Gobernanza Corporativa y Pactos de Accionistas Modernos (2021)'
    ],
    notableWins: [
      'Cierre de adquisición transfronteriza por $4.2M en tiempo récord de 45 días',
      'Blindaje fiduciario de joint venture tecnológico valorado en $15M'
    ]
  },
  {
    id: 'carlos-alarcon',
    name: 'Dr. Carlos Alarcón Pareja',
    role: 'Socio de Penal Económico & Fiscalidad Estratégica',
    specialty: 'Defensa de Delitos de Cuello Blanco & Planificación Patrimonial',
    education: [
      'LL.M. in Criminal Law & Corporate Compliance — Columbia Law School (Nueva York)',
      'Diplomado Superior en Derecho Tributario Internacional — Universidad Austral',
      'Miembro Activo de la International Fiscal Association (IFA) & Colegio de Abogados'
    ],
    barNumber: 'Matrícula Profesional No. 17-2011-534',
    experience: '16+ Años en Estrategia Sancionatoria',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    bio: 'Especialista en defensa penal de altos directivos frente a imputaciones de fraude tributario, aduanero y administración desleal. Diseña estructuras fiduciarias seguras para blindaje patrimonial de familias empresarias.',
    publications: [
      'El Dolo Eventual en la Responsabilidad Penal Empresarial (2022)',
      'Fideicomisos Familiares y Planificación Sucesoria sin Conflictos (2021)'
    ],
    notableWins: [
      'Sobreseimiento definitivo en investigación penal económica de $6.5M',
      'Estructuración fiduciaria de Family Office protegiendo $18M en activos'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'caso-fusion',
    title: 'Blindaje y Cierre de Fusión Transfronteriza por $4.2M',
    category: 'Derecho Corporativo & M&A',
    impact: '$4,200,000 USD protegidos',
    result: 'Cierre Exitoso sin Pasivos Ocultos',
    summary: 'Estructuración integral de contrato de compraventa de acciones, due diligence regulatorio y superación de objeciones antimonopolio en plazo récord de 45 días.',
    year: '2025',
    tag: 'Operación M&A',
    strategyApplied: 'Implementación de cuenta Escrow condicionada a hitos regulatorios y cláusulas de indemnidad reforzadas con garantías hipotecarias solidarias.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'caso-penal-corporativo',
    title: 'Sobreseimiento Definitivo en Litigio Penal Económico',
    category: 'Penal Corporativo & Litigios',
    impact: 'Absolución Total y Desbloqueo de Cuentas',
    result: 'Sentencia de Inocencia Unánime',
    summary: 'Defensa técnica de un consorcio industrial frente a imputaciones infundadas de defraudación tributaria; desestimación judicial en etapa evaluatoria de juicio.',
    year: '2025',
    tag: 'Defensa Penal',
    strategyApplied: 'Peritaje forense contable independiente que demostró la licitud de las deducciones fiscales y nulidad de la prueba acusatoria por vicios de forma.',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'caso-reestructuracion-familiar',
    title: 'Reestructuración Patrimonial de Family Office',
    category: 'Protección Patrimonial & Fideicomisos',
    impact: 'Patrimonio de $18M blindado con fiduciaria',
    result: 'Gobernanza Unificada y Cero Disputas',
    summary: 'Diseño de fideicomiso mercantil irrevocable y protocolo de sucesión que blindó los activos productivos de una familia empresarial de segunda y tercera generación.',
    year: '2024',
    tag: 'Family Office',
    strategyApplied: 'Constitución de patrimonio autónomo inembargable complementado con estatuto de consejo de familia y fideicomiso de desinversión progresiva.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientType: 'Grupo Financiero & Fintech',
    industry: 'Sector Banca, Pagos y Tecnología',
    quote: 'La precisión analítica del Dr. Valmont y su equipo evitó un litigio de 8 cifras que amenazaba nuestra ronda de expansión internacional. Su destreza en negociación procesal y rigor probatorio son sencillamente incomparables.',
    authorTitle: 'Vicepresidente Legal & Riesgos',
    statusVerified: true,
    confidentialId: 'Expediente Confidencial V-40192',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    clientType: 'Consorcio Agroindustrial Exportador',
    industry: 'Comercio Exterior & Logística',
    quote: 'Elena Mendoza no solo domina el marco normativo societario, entiende la velocidad y el apetito de riesgo del negocio. Condujo una fusión transfronteriza protegiendo nuestros intereses accionarios con una maestría impecable.',
    authorTitle: 'Presidente del Directorio',
    statusVerified: true,
    confidentialId: 'Protocolo M&A-89',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    clientType: 'Patrimonio Familiar Privado',
    industry: 'Bienes Raíces & Inversiones Privadas',
    quote: 'El blindaje fiduciario que estructuraron para nuestra familia nos permitió trasladar los activos comerciales a nuestros hijos sin una sola discrepancia ni sobrecosto impositivo. Máxima discreción y probidad institucional.',
    authorTitle: 'Director de Family Office',
    statusVerified: true,
    confidentialId: 'Trust Privado F-102',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Honorarios',
    question: '¿Cómo se estructuran los honorarios profesionales de la firma?',
    answer: 'Nuestra firma opera con absoluta transparencia tarifaria formalizada mediante contrato escrito previo. Dependiendo de la naturaleza del encargo, ofrecemos: (1) Iguala Corporativa Mensual (Retainer) con horas y asesoría integral ilimitada; (2) Honorarios por Fases Procesales con hitos económicos predecibles; o (3) Acuerdos de Cuota Litis vinculados al éxito de la resolución judicial o laudo arbitral.'
  },
  {
    id: 'faq-2',
    category: 'Confidencialidad',
    question: '¿Cómo se garantiza el secreto profesional y la confidencialidad?',
    answer: 'Todo contacto preliminar, consulta y documentación recibida queda amparada bajo el secreto profesional legal (Art. 11 del Código de Ética y normativa procesal vigente), con acuerdos de confidencialidad (NDA) automáticos. Disponemos de almacenamiento cifrado bajo protocolo ISO 27001 con aislamiento digital de expedientes.'
  },
  {
    id: 'faq-3',
    category: 'Urgencias',
    question: '¿Cuál es el tiempo de respuesta ante un requerimiento judicial o urgencia?',
    answer: 'Para situaciones calificadas como de Urgencia Inmediata (medidas cautelares, allanamientos, detenciones, citaciones judiciales con plazos perentorios), nuestro equipo de guardia penal y procesal responde en menos de 2 horas hábiles. Para consultas ordinarias, el dictamen preliminar se emite en 24 a 48 horas.'
  },
  {
    id: 'faq-4',
    category: 'Internacional',
    question: '¿Atienden a clientes corporativos internacionales o residentes en el exterior?',
    answer: 'Sí. Asesoramos permanentemente a fondos de inversión extranjeros, multinacionales y familias radicadas en Estados Unidos, Europa y Latinoamérica. Gestionamos procesos mediante poderes especiales formalizados, salas virtuales de audiencia y canales de teleconferencia cifrada con validez procesal total.'
  },
  {
    id: 'faq-5',
    category: 'Procesal',
    question: '¿Qué información o documentación se requiere para la primera sesión?',
    answer: 'Para optimizar la sesión de diagnóstico inicial, recomendamos contar con una relación cronológica de los hechos y copia digitalizada de contratos, notificaciones o providencias relevantes. Si el expediente se encuentra en una judicatura pública, nuestro equipo puede gestionar las copias certificadas con autorización previa.'
  }
];

export const FEE_MODELS: FeeModel[] = [
  {
    id: 'retainer',
    name: 'Iguala Corporativa (Retainer)',
    badge: 'Recomendado para Empresas',
    description: 'Acompañamiento legal permanente con un socio senior asignado, revisión continua de contratos, gobierno corporativo y consultas prioritarias ilimitadas.',
    idealFor: 'Compañías medianas y grandes que buscan prevenir contingencias y externalizar su departamento jurídico.',
    billingFrequency: 'Facturación Mensual Predecible',
    features: [
      'Revisión y elaboración ilimitada de contratos comerciales ordinarios',
      'Asesoría directa en juntas directivas y asambleas de accionistas',
      'Línea de consulta telefónica prioritaria para gerencias ejecutivas',
      'Auditoría laboral y societaria preventiva semestral',
      'Tarifa preferencial reducida en caso de requerir litigios'
    ],
    estimatedRange: 'Planes a medida desde $1,200/mes'
  },
  {
    id: 'phased',
    name: 'Honorario por Etapas Procesales',
    badge: 'Máxima Predictibilidad',
    description: 'Presupuesto estructurado y fraccionado según los hitos clave del procedimiento judicial o transacción mercantil (Fase prejudicial, Demanda, Audiencia, Sentencia).',
    idealFor: 'Litigios civiles, juicios contencioso-tributarios o negociaciones puntuales de contratos y fusiones.',
    billingFrequency: 'Pago por Hito Procesal Alcanzado',
    features: [
      'Cero costos ocultos ni cobros sorpresivos por horas no planificadas',
      'Cronograma financiero alineado al avance real del expediente',
      'Informes mensuales de estado procesal con copias de providencias',
      'Incentivo económico enfocado en la pronta resolución del caso',
      'Gastos judiciales y peritajes desglosados con total claridad'
    ],
    estimatedRange: 'Estructurado según cuantía y complejidad'
  },
  {
    id: 'success',
    name: 'Pacto de Cuota Litis (Éxito)',
    badge: 'Alineación de Intereses',
    description: 'Esquema donde una porción fundamental de los honorarios queda condicionada estrictamente a la obtención de una sentencia favorable o cobro efectivo de la indemnización.',
    idealFor: 'Recuperación de activos comerciales, cobro judicial de acreencias de alta cuantía o arbitrajes.',
    billingFrequency: 'Al Cierre Favorable del Proceso',
    features: [
      'Mínima inversión inicial para el cliente (gastos fijos administrativos)',
      'Máxima motivación y compromiso del equipo litigante con el resultado',
      'Evaluación previa de viabilidad jurídica antes de aceptar el mandato',
      'Formalización notarial con cláusulas de transparencia mutua',
      'Liquidación sobre el valor real efectivamente ingresado'
    ],
    estimatedRange: 'Porcentaje acordado sobre el valor recuperado'
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

