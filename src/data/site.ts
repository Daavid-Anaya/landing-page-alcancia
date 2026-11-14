/**
 * Base URL of the demo site (`sitio-web`).
 * PENDING: replace with the real destinations once the team defines the official domain and WhatsApp number.
 */
const DEMO_URL = String(import.meta.env.PUBLIC_DEMO_URL ?? 'http://localhost:3000').replace(/\/$/, '');

export const LINKS = {
  register: `${DEMO_URL}/registro`,
  whatsapp: `${DEMO_URL}/whatsapp`,
} as const;

export const NAV = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#calculadora', label: 'Calculadora' },
  { href: '#seguridad', label: 'Seguridad' },
  { href: '#costos', label: 'Costos' },
  { href: '#preguntas', label: 'Preguntas' },
] as const;

export const SEO = {
  title: 'Alcancía · Ahorra para tu retiro, con lo que puedas y cuando puedas',
  description:
    'Ahorra para tu retiro desde $50 pesos, sin trámites y sin descargar nada. Tu dinero se invierte a tu nombre y siempre ves tu saldo y cada costo.',
} as const;
