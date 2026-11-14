import type { IconName } from './icons';

/**
 * Copy of the landing page. The source is `landing-page/contenido.md`, based on `docs/alcancia-prd.md`.
 * Rules: never promise returns (RN-13), projections are always a range (RN-14), every cost in money (RN-21).
 */

export interface IconItem {
  readonly icon: IconName;
  readonly title: string;
  readonly body: string;
}

export interface PlainItem {
  readonly title: string;
  readonly body: string;
}

export const HERO_TAGS = [
  'Desde $50 pesos',
  'Sin descargar ninguna app',
  'No cobramos por aportar',
  'Comisión de 0.53 % al año',
] as const;

export const PROBLEM = {
  title: 'Si trabajas por tu cuenta o en Estados Unidos, nadie está ahorrando por ti para tu retiro.',
  body: 'En México, el ahorro para el retiro depende de tener un empleo formal. Si tu ingreso cambia cada semana, cobras en efectivo o trabajas del otro lado, nadie aparta ese ahorro por ti. La tanda y el dinero guardado en casa ayudan hoy, pero no se invierten para mañana.',
  stat: '6.8 %',
  statLabel: 'de las cuentas de ahorro para el retiro en México tiene ahorro voluntario.',
  statSource: 'Fuente: Azuara et al., BID, Ahorro sin barreras, 2021.',
} as const;

export const STEPS: readonly IconItem[] = [
  {
    icon: 'id-card',
    title: 'Regístrate desde tu celular',
    body: 'Con tu INE o pasaporte mexicano. Contestas 5 preguntas para conocer qué tanto riesgo quieres tomar.',
  },
  {
    icon: 'hand-coins',
    title: 'Aporta como puedas',
    body: 'Desde $50 pesos: en efectivo en OXXO, por transferencia, con tarjeta o con un ahorro programado que tú autorizas.',
  },
  {
    icon: 'wallet',
    title: 'Se invierte a tu nombre',
    body: 'Tu dinero se guarda en dólares y siempre ves tu saldo en dólares y en pesos, en la web o por WhatsApp.',
  },
];

export const STEPS_NOTE =
  'El ahorro programado solo se activa si tú lo autorizas. Te avisamos antes de cada cargo y lo pausas o cancelas cuando quieras.';

export const PERSONAS: readonly IconItem[] = [
  {
    icon: 'plane',
    title: 'Trabajas en Estados Unidos',
    body: 'Cuando envías dinero a México, puedes mandar a tu propia cartera y construir tu patrimonio, sin trámites.',
  },
  {
    icon: 'message-circle',
    title: 'Recibes dinero de tu familia',
    body: 'Cobras en una tienda cerca de tu casa y, si quieres, guardas una parte. Te avisamos y consultas tu ahorro por WhatsApp, sin apps.',
  },
  {
    icon: 'store',
    title: 'Trabajas por tu cuenta',
    body: 'Aporta cuando te va bien, en efectivo en OXXO y desde $50 pesos.',
  },
  {
    icon: 'briefcase',
    title: 'Tienes un empleo formal',
    body: 'Complementa tu retiro con un ahorro programado cada quincena, sin pensarlo.',
  },
];

export const FAMILY_POINTS: readonly IconItem[] = [
  {
    icon: 'user-check',
    title: 'Tú decides quién aporta.',
    body: 'Aceptas a tu familiar como aportante y él verifica su identidad.',
  },
  {
    icon: 'arrow-down-to-line',
    title: 'Solo puede depositar.',
    body: 'Nunca puede retirar ni mover tu dinero.',
  },
  {
    icon: 'badge-check',
    title: 'El dinero es tuyo.',
    body: 'Todo lo que aporta queda a tu nombre.',
  },
];

export const FAMILY_NOTE =
  'Cada envío tiene un solo destino: tu familiar, tu propia cartera o la cartera de tu familiar.';

export const POCKET_ID = {
  EMERGENCY: 'emergency',
  LONG_TERM: 'long-term',
} as const;

export type PocketId = (typeof POCKET_ID)[keyof typeof POCKET_ID];

export interface Pocket {
  readonly id: PocketId;
  readonly name: string;
  readonly share: string;
  readonly purpose: string;
  readonly where: string;
  readonly withdraw: string;
}

export const POCKETS: readonly Pocket[] = [
  {
    id: POCKET_ID.EMERGENCY,
    name: 'Bolsa de emergencias',
    share: '30 %',
    purpose: 'Imprevistos',
    where: 'Guardada en dólares, sin invertir',
    withdraw: 'Cuando quieras, sin castigo',
  },
  {
    id: POCKET_ID.LONG_TERM,
    name: 'Bolsa de largo plazo',
    share: '70 %',
    purpose: 'Tu retiro',
    where: 'Invertida según tu perfil de riesgo',
    withdraw:
      'Antes de los 65 también, sin penalización: con 10 días de espera y una confirmación extra, para proteger tu ahorro de decisiones impulsivas',
  },
];

export const POCKET_PHASES: readonly PlainItem[] = [
  {
    title: 'Mientras juntas tu fondo de emergencias',
    body: 'Cada aportación va 30 % a emergencias y 70 % a largo plazo, hasta juntar $1,000 dólares de emergencias.',
  },
  {
    title: 'Cuando llegas a la meta',
    body: 'Después, todo va a largo plazo. Si eliges una bolsa al aportar, va completa ahí.',
  },
];

export const SECURITY_RULES: readonly IconItem[] = [
  {
    icon: 'badge-check',
    title: 'Un solo canal oficial',
    body: 'Un solo sitio web y un solo número de WhatsApp verificado. Cualquier otro es falso.',
  },
  {
    icon: 'message-circle-off',
    title: 'WhatsApp nunca saca dinero',
    body: 'Por WhatsApp solo te avisamos, consultas y pides datos para aportar. Nunca se puede retirar ni transferir a otra persona.',
  },
  {
    icon: 'lock',
    title: 'Tu dinero solo sale a tu nombre',
    body: 'Los retiros van únicamente a una cuenta o tarjeta tuya, con código y selfie o NIP.',
  },
  {
    icon: 'key-round',
    title: 'Nunca te pedimos tu NIP',
    body: 'Si alguien te lo pide, aunque diga ser tu hijo, es fraude.',
  },
];

export interface IconLine {
  readonly icon: IconName;
  readonly text: string;
}

export const SECURITY_EXTRAS: readonly IconLine[] = [
  { icon: 'bell-ring', text: 'Te avisamos de cada movimiento, con la opción “¿No fuiste tú?” para bloquear al instante.' },
  { icon: 'smartphone', text: 'Para cambiar tu estrategia, tu celular o tu cuenta de retiro te pedimos un código por SMS.' },
  { icon: 'shield-check', text: 'Detenemos los movimientos fuera de lo normal y te los confirmamos antes de procesarlos.' },
  { icon: 'headset', text: 'Siempre puedes hablar con una persona.' },
];

export const COSTS: readonly IconItem[] = [
  {
    icon: 'percent',
    title: '0.53 % al año sobre tu saldo.',
    body: 'Por ejemplo, si tienes $1,000 dólares, pagas $5.30 dólares al año.',
  },
  {
    icon: 'circle-check',
    title: 'No cobramos por aportar.',
    body: 'Alcancía no te cobra por cada aportación que haces.',
  },
  {
    icon: 'receipt',
    title: 'Los costos de otros, antes de pagar.',
    body: 'La comisión de OXXO o el margen del tipo de cambio se muestran en pesos antes de que confirmes.',
  },
  {
    icon: 'arrow-left-right',
    title: 'El tipo de cambio, comparado.',
    body: 'Ves el que aplicamos, el oficial de referencia (FIX de Banxico) y la diferencia en pesos.',
  },
];

export interface Strategy {
  readonly level: string;
  readonly title: string;
  readonly body: string;
  readonly name: string;
  /** Height of the illustrative wave: how much the balance can move, not a result. */
  readonly amplitude: number;
}

export const STRATEGIES: readonly Strategy[] = [
  {
    level: 'Riesgo bajo',
    title: 'Para ir con calma',
    body: 'Busca que tu saldo se mueva poco.',
    name: 'KHATAR · Riesgo Alternativo',
    amplitude: 4,
  },
  {
    level: 'Riesgo moderado',
    title: 'Para un punto medio',
    body: 'Acepta subidas y bajadas a cambio de buscar más crecimiento.',
    name: 'TAVAN · Quality Momentum',
    amplitude: 11,
  },
  {
    level: 'Riesgo alto',
    title: 'Para quien aguanta los altibajos',
    body: 'Puede tener caídas fuertes; es para quien piensa en muchos años.',
    name: 'KIVUN · Trend Factor',
    amplitude: 22,
  },
];

export const STRATEGIES_NOTICE =
  'Las estrategias se presentan con resultados hipotéticos. No prometemos ganarle al mercado y lo que obtengas puede ser menor, incluso negativo.';

export interface Question {
  readonly question: string;
  readonly answer: string;
}

export const FAQ: readonly Question[] = [
  {
    question: '¿Necesito descargar una app?',
    answer: 'No. Usas Alcancía desde el sitio web o por nuestro WhatsApp oficial.',
  },
  {
    question: '¿En qué moneda está mi ahorro?',
    answer:
      'En dólares. Lo que aportas en pesos se convierte al tipo de cambio del momento, que ves antes de confirmar. El riesgo del tipo de cambio lo asumes tú; por eso tu saldo siempre se muestra en dólares y en pesos.',
  },
  {
    question: '¿Puedo sacar mi dinero antes de los 65?',
    answer:
      'Sí. La bolsa de emergencias se retira sin castigo. La de largo plazo también, sin penalización, con 10 días de espera y una confirmación extra. El dinero solo sale a una cuenta o tarjeta a tu nombre, y nunca por WhatsApp.',
  },
  {
    question: '¿Tiene beneficio fiscal?',
    answer:
      'No. La bolsa de largo plazo es ahorro voluntario sin beneficio fiscal. No es un plan de pensiones con penalización.',
  },
  {
    question: '¿Quién cuida mi dinero?',
    answer:
      'Se invierte a tu nombre a través de una operadora o distribuidora de fondos autorizada por la CNBV. El dinero lo mueven y lo custodian entidades reguladas.',
  },
  {
    question: '¿Los resultados están garantizados?',
    answer: 'No. Las cifras de las estrategias son resultados hipotéticos. Nunca prometemos ganarle al mercado.',
  },
];

export interface Education {
  readonly degree: string;
  readonly institution: string;
}

export interface TeamMember {
  /** Fallback when there is no photo. */
  readonly icon: IconName;
  /** File name inside `public/profile`. */
  readonly photo?: string;
  readonly name: string;
  readonly specialty: string;
  readonly education: readonly Education[];
  readonly profile: readonly string[];
  readonly email: string;
  /** Display format. Omitted while the number is not confirmed. */
  readonly phone?: string;
  readonly linkedin: string;
}

export const TEAM_INTRO = {
  title: 'Cuatro perfiles, una visión compartida.',
  lead: 'Somos un equipo multidisciplinario integrado por estudiantes universitarios y de posgrado, con formación en finanzas, ciencias de la computación, actuaría y banca.',
  body: [
    'Nuestra diversidad académica y profesional nos permite abordar los desafíos financieros desde distintas perspectivas, combinando análisis cuantitativo, desarrollo tecnológico y estrategia empresarial.',
    'Buscamos desarrollar soluciones financieras accesibles, funcionales y sostenibles, utilizando la tecnología como herramienta para mejorar la relación de las personas con sus finanzas.',
  ],
} as const;

export const TEAM: readonly TeamMember[] = [
  {
    icon: 'chart-line',
    photo: 'Johnny.jpeg',
    name: 'Luis Jonathan Orihuela Genis',
    specialty: 'Dirección Financiera',
    education: [
      {
        degree: 'Estudiante de la Licenciatura en Dirección Financiera',
        institution: 'Universidad Anáhuac Puebla',
      },
    ],
    profile: [
      'Estudiante de Dirección Financiera con formación orientada a la planeación financiera, evaluación de proyectos y análisis de decisiones empresariales. Su perfil aporta una perspectiva económica y estratégica al desarrollo de Alcancía, particularmente en la evaluación de modelos de negocio y viabilidad financiera.',
    ],
    email: 'Jonathan.orihuela@anahuac.mx',
    phone: '735 205 6641',
    linkedin: 'https://www.linkedin.com/in/jonathan-orihuela-genis/',
  },
  {
    icon: 'code-xml',
    photo: 'David.jpeg',
    name: 'Juan David Villegas Anaya',
    specialty: 'Desarrollo de Software y Tecnología',
    education: [
      {
        degree: 'Estudiante de la Licenciatura en Ciencias de la Computación',
        institution: 'Benemérita Universidad Autónoma de Puebla (BUAP)',
      },
    ],
    profile: [
      'Estudiante de Ciencias de la Computación con conocimientos en programación, desarrollo de software e infraestructura tecnológica. Su formación contribuye al diseño y desarrollo de soluciones digitales, integración de sistemas y construcción de herramientas tecnológicas orientadas a resolver problemas financieros.',
    ],
    email: 'daavidanaya@gmail.com',
    phone: '222 207 1940',
    linkedin: 'https://www.linkedin.com/in/david-villegas-anaya/',
  },
  {
    icon: 'sigma',
    name: 'José Adolfo Ramírez Acevedo',
    specialty: 'Actuaría y Análisis Cuantitativo',
    education: [
      {
        degree: 'Estudiante de la Licenciatura en Actuaría',
        institution: 'Benemérita Universidad Autónoma de Puebla (BUAP)',
      },
    ],
    profile: [
      'Estudiante de Actuaría con formación en matemáticas aplicadas, probabilidad, estadística y análisis de riesgos. Su perfil aporta una perspectiva cuantitativa para la evaluación de escenarios financieros, el análisis de datos y el desarrollo de modelos orientados a respaldar decisiones financieras.',
    ],
    email: 'joses650279@gmail.com',
    // PENDING: phone number not confirmed yet, so it is not published.
    linkedin: 'https://www.linkedin.com/in/jos%C3%A9-r-914a2b410/',
  },
  {
    icon: 'landmark',
    photo: 'Daniel.jpeg',
    name: 'Daniel Lorenzo Sánchez Ramírez',
    specialty: 'Banca, Mercados Financieros y Estrategia Empresarial',
    education: [
      {
        degree: 'Maestrante en Banca y Mercados Financieros',
        institution: 'Universidad Anáhuac México, Campus Norte',
      },
      {
        degree: 'Licenciado en Administración Financiera',
        institution: 'Tecnológico de Monterrey',
      },
    ],
    profile: [
      'Profesional de las finanzas y maestrante en Banca y Mercados Financieros, con experiencia en consultoría de riesgos, operaciones financieras y procesos de valuación en instituciones bancarias.',
      'Ha desarrollado su trayectoria profesional en TCM Partners y HSBC México, participando en actividades relacionadas con gestión de riesgos, operaciones de mercados y análisis financiero.',
      'Complementa su experiencia profesional con el desarrollo de proyectos empresariales y tecnológicos orientados al sector financiero, integrando conocimientos de estrategia, finanzas y desarrollo de negocios.',
    ],
    email: 'daniel.tzvi@hayya-system.com',
    phone: '55 4841 5814',
    linkedin: 'https://www.linkedin.com/in/dalsrb/',
  },
];
