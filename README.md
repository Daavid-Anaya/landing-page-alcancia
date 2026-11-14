# Alcancía · Landing page

Landing para el usuario final de Alcancía, con animaciones al hacer scroll. Es un proyecto independiente de `sitio-web/`.

**Stack:** [Astro](https://astro.build) · [Tailwind CSS 4](https://tailwindcss.com) · [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) · [Lenis](https://lenis.darkroom.engineering)

## Puesta en marcha

Necesitas Node.js 22.12 o superior y pnpm.

```sh
pnpm install
pnpm dev
```

La página queda en `http://localhost:4321`.

| Comando | Qué hace |
| :-- | :-- |
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Genera la página estática en `dist/` |
| `pnpm preview` | Sirve el build en local |
| `pnpm test` | Corre las pruebas de la calculadora |

## A dónde llevan los botones

**Probar demo** lleva a la dirección fija `LINKS.demo` de `src/data/site.ts`. **Escríbenos por WhatsApp** lleva a `/whatsapp` del sitio demo (`sitio-web`). Por omisión se asume que el sitio demo corre en `http://localhost:3000`. Para apuntar a otra dirección, define la variable antes de compilar:

```sh
PUBLIC_DEMO_URL=https://demo.ejemplo.com pnpm build
```

## Dónde está cada cosa

```text
contenido.md              Textos aprobados de cada sección, con sus reglas de redacción y sus pendientes
src/
├── data/
│   ├── content.ts        Textos de las secciones (salen de contenido.md)
│   ├── site.ts           Enlaces, menú y metadatos
│   └── icons.ts          Iconos de Lucide que usa la página
├── lib/projection.ts     Cálculo de la calculadora, con sus pruebas (projection.test.ts)
├── components/           Una sección por archivo, en el orden de contenido.md
├── scripts/
│   ├── motion.ts         Animaciones al hacer scroll
│   └── calculator.ts     Parte interactiva de la calculadora
├── styles/global.css     Colores, tipografía y estados de las animaciones
├── layouts/Layout.astro  <head> de la página
└── pages/index.astro     La landing
```

## Cómo funcionan las animaciones

La página está completa sin JavaScript: cada ilustración se dibuja en su estado final. El script solo la regresa al inicio y la reproduce con el scroll. Con `prefers-reduced-motion` no corre ninguna animación.

Son tres capas, el patrón de [midudev/mcp-higgsfield-landing](https://github.com/midudev/mcp-higgsfield-landing):

1. **Scroll suave.** Lenis suaviza el scroll y avisa a ScrollTrigger en cada movimiento.
2. **Apariciones.** Un `IntersectionObserver` agrega la clase `is-in` a cada elemento con `data-reveal` cuando entra en pantalla.
3. **Efectos ligados al scroll.** ScrollTrigger mueve cada efecto hacia adelante y hacia atrás con el scroll:

| Sección | Efecto | Atributo |
| :-- | :-- | :-- |
| El problema | La frase se ilumina palabra por palabra | `data-words` |
| Cómo funciona | La línea se llena y cada paso se enciende | `data-steps` |
| Tu familia también aporta | La moneda viaja de Estados Unidos a la cartera | `data-route` |
| Dos bolsas | Diez monedas caen 3 y 7 en las dos bolsas; después de la meta, todas van a largo plazo | `data-pockets` |
| Estrategias | Cada línea se dibuja de izquierda a derecha | `data-wave` |

En pantallas grandes, la sección de las dos bolsas se queda fija mientras caen las monedas. En celular no se fija: la animación avanza mientras la ilustración cruza la pantalla.

## Editar el contenido

Los textos viven en `src/data/content.ts` y salen de `contenido.md`. Antes de cambiar un texto, revisa las reglas de redacción de `contenido.md`: no prometer rendimientos, mostrar la proyección siempre como un rango y decir cada costo en dinero.

Los supuestos de la calculadora están en `src/lib/projection.ts` y son los mismos ejemplos del sitio demo (`sitio-web/src/domain/projection.ts`). Si cambian allá, hay que cambiarlos aquí.

## Pendiente

Los pendientes de contenido están al final de `contenido.md`: el número oficial de WhatsApp, el destino final de los botones, la clasificación de riesgo de TAVAN y qué decir sobre el SAT.
