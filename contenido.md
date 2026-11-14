# Alcancía — Contenido de la landing page

Contenido de cada sección de la landing (títulos, textos y botones), antes de elegir tecnología y diseño. Es un proyecto independiente de `sitio-web/`.

- **Público:** usuarios finales (Juan, doña Mary, Rosa y Luis). El mercado, el modelo de negocio y la viabilidad van en el pitch, no aquí.
- **Objetivo de la página:** que la persona se registre o escriba al WhatsApp oficial.
- **Fuente de los datos:** `docs/alcancia-prd.md`. Cada sección indica las reglas (RN) en las que se apoya.

---

## Reglas de redacción

1. **Tú, cercano y claro.** Frases cortas, sin tecnicismos: nada de KYC, backtest, domiciliación ni fondo de inversión en los títulos.
2. **Nunca prometer rendimientos.** No decir "tu dinero crece", "gana más" ni "rendimiento garantizado". Las cifras de las estrategias son hipotéticas y nunca prometemos ganarle al mercado (RN-13).
3. **La proyección siempre es un rango**, con sus supuestos visibles y ya descontada la comisión (RN-14).
4. **No compararse con las Afores** sin revisión legal previa (RN-23).
5. **Decir los riesgos tal cual:** el riesgo del tipo de cambio lo asume el usuario (RN-07). La bolsa de largo plazo no tiene beneficio fiscal (RN-16).
6. **Cada costo, en dinero.** Si se menciona un cobro, se dice cuánto es (RN-21).

---

## Orden de las secciones y por qué

| # | Sección | Duda que resuelve |
| --- | --- | --- |
| 1 | Hero | ¿Qué es esto? |
| 2 | El problema | ¿Por qué lo necesito? |
| 3 | Cómo funciona | ¿Es complicado? |
| 4 | Calculadora | ¿Cuánto tendría yo? |
| 5 | Para quién | ¿Es para mí? |
| 6 | Tu familia también aporta | ¿Mi hijo en EE.UU. puede ayudarme? |
| 7 | Dos bolsas | ¿Puedo sacar mi dinero si lo necesito? |
| 8 | Seguridad | ¿Y si es un fraude? |
| 9 | Costos a la vista | ¿Cuánto me van a cobrar? |
| 10 | Estrategias | ¿Dónde está mi dinero? |
| 11 | Preguntas frecuentes | Lo que quede pendiente |
| 12 | Llamado final | Empezar |
| 13 | Nuestro equipo | ¿Quién está detrás? |

La calculadora va pronto, porque la validación con usuarios mostró que prefieren la tanda por la satisfacción inmediata (PRD §3): ver su número engancha. Después viene el bloque de confianza (bolsas, seguridad y costos), que responde a sus miedos reales.

---

## 1. Hero

**Objetivo:** explicar en una línea qué es Alcancía y dar los dos caminos para empezar.

**Título:** Ahorra para tu retiro, con lo que puedas y cuando puedas.

**Subtítulo:** Sin trámites, sin descargar nada y con todo a la vista.

**Etiquetas debajo del título:**

- Desde $50 pesos
- Sin descargar ninguna app
- No cobramos por aportar
- Comisión de 0.53 % al año

**Botones:**

- Principal: **Empezar a ahorrar** → registro
- Secundario: **Calcula cuánto tendrías** → sección 4

**Fuente:** PRD §1, RN-02, RN-22, RN-23.

---

## 2. El problema

**Objetivo:** que la persona se reconozca en la situación. Hablarle a ella, no dar una estadística.

**Título:** Si trabajas por tu cuenta o en Estados Unidos, nadie está ahorrando por ti para tu retiro.

**Texto:**

> En México, el ahorro para el retiro depende de tener un empleo formal. Si tu ingreso cambia cada semana, cobras en efectivo o trabajas del otro lado, nadie aparta ese ahorro por ti. La tanda y el dinero guardado en casa ayudan hoy, pero no se invierten para mañana.

**Dato de apoyo (pequeño, debajo del texto):**

> Solo 6.8 % de las cuentas de ahorro para el retiro en México tiene ahorro voluntario.
> Fuente: Azuara et al., BID, *Ahorro sin barreras*, 2021.

**Fuente:** PRD §2.

---

## 3. Cómo funciona

**Objetivo:** demostrar que es fácil, en tres pasos.

**Título:** Empezar es así de fácil

| Paso | Título | Texto |
| --- | --- | --- |
| 1 | Regístrate desde tu celular | Con tu INE o pasaporte mexicano. Contestas 5 preguntas para conocer qué tanto riesgo quieres tomar. |
| 2 | Aporta como puedas | Desde $50 pesos: en efectivo en OXXO, por transferencia, con tarjeta o con un ahorro programado que tú autorizas. |
| 3 | Se invierte a tu nombre | Tu dinero se guarda en dólares y siempre ves tu saldo en dólares y en pesos, en la web o por WhatsApp. |

**Nota bajo los pasos:** El ahorro programado solo se activa si tú lo autorizas. Te avisamos antes de cada cargo y lo pausas o cancelas cuando quieras.

**Fuente:** PRD §1 y §2.1, RN-01, RN-02, RN-06, RN-11.

---

## 4. Calculadora

**Objetivo:** que la persona vea su propio número.

**Título:** ¿Cuánto podrías juntar?

**Subtítulo:** Elige cuánto ahorrarías y cada cuándo. Siempre es un rango, no una promesa.

**Datos que pide:**

- Monto por aportación, en pesos (mínimo $50)
- Frecuencia: cada semana, cada quincena o cada mes
- Edad actual

**Resultado:** un rango de lo que podría tener a los 65 años, en pesos y en dólares.

**Texto bajo el resultado:** Ya descontamos la comisión de 0.53 % al año. Es una estimación con estos supuestos: [mostrar supuestos]. Lo que obtengas puede ser menor.

**Botón:** **Empezar a ahorrar** → registro

**Fuente:** RN-02, RN-14, RN-23.

---

## 5. Para quién

**Objetivo:** que cada persona se vea reflejada en un caso.

**Título:** Hecho para ti, trabajes donde trabajes

| Persona | Título de la tarjeta | Texto |
| --- | --- | --- |
| Juan | Trabajas en Estados Unidos | Cuando envías dinero a México, puedes mandar a tu propia cartera y construir tu patrimonio, sin trámites. |
| Doña Mary | Recibes dinero de tu familia | Cobras en una tienda cerca de tu casa y, si quieres, guardas una parte. Te avisamos y consultas tu ahorro por WhatsApp, sin apps. |
| Rosa | Trabajas por tu cuenta | Aporta cuando te va bien, en efectivo en OXXO y desde $50 pesos. |
| Luis | Tienes un empleo formal | Complementa tu retiro con un ahorro programado cada quincena, sin pensarlo. |

**Fuente:** PRD §3.

---

## 6. Tu familia también aporta

**Objetivo:** mostrar lo que nos diferencia: el dinero que llega de EE.UU. se puede convertir en ahorro.

**Título:** Tu familia también puede ayudarte a ahorrar

**Texto:**

> Si tu hijo o tu hija vive en Estados Unidos, puede mandar dinero directo a tu cartera de ahorro, en lugar de que te llegue para gastarlo.

**Cómo funciona (3 puntos):**

- **Tú decides quién aporta.** Aceptas a tu familiar como aportante y él verifica su identidad.
- **Solo puede depositar.** Nunca puede retirar ni mover tu dinero.
- **El dinero es tuyo.** Todo lo que aporta queda a tu nombre.

**Nota:** Cada envío tiene un solo destino: tu familiar, tu propia cartera o la cartera de tu familiar.

**Fuente:** PRD §1 y §4, RN-05.

---

## 7. Dos bolsas

**Objetivo:** quitar el miedo a no poder sacar el dinero, que es por lo que la gente prefiere la tanda.

**Título:** Tu dinero, disponible cuando lo necesitas

**Subtítulo:** Tu ahorro se divide en dos bolsas, para que una emergencia no acabe con tu retiro.

| | Bolsa de emergencias | Bolsa de largo plazo |
| --- | --- | --- |
| Para qué | Imprevistos | Tu retiro |
| Dónde está | Guardada en dólares, sin invertir | Invertida según tu perfil de riesgo |
| Cómo se saca | Cuando quieras, sin castigo | Antes de los 65 también, sin penalización: con 10 días de espera y una confirmación extra, para proteger tu ahorro de decisiones impulsivas |

**Cómo se reparte:** cada aportación va 30 % a emergencias y 70 % a largo plazo, hasta juntar $1,000 dólares de emergencias. Después, todo va a largo plazo. Si eliges una bolsa al aportar, va completa ahí.

**Fuente:** RN-03, RN-04, RN-12, RN-15, RN-16.

---

## 8. Seguridad

**Objetivo:** responder el miedo número uno: el fraude por WhatsApp.

**Título:** Tu dinero solo sale a tu nombre

**Subtítulo:** Así te protegemos, en cada canal.

**Cuatro reglas (tarjetas):**

| Regla | Texto |
| --- | --- |
| Un solo canal oficial | Un solo sitio web y un solo número de WhatsApp verificado. Cualquier otro es falso. |
| WhatsApp nunca saca dinero | Por WhatsApp solo te avisamos, consultas y pides datos para aportar. Nunca se puede retirar ni transferir a otra persona. |
| Tu dinero solo sale a tu nombre | Los retiros van únicamente a una cuenta o tarjeta tuya, con código y selfie o NIP. |
| Nunca te pedimos tu NIP | Si alguien te lo pide, aunque diga ser tu hijo, es fraude. |

**Más protecciones (lista corta):**

- Te avisamos de cada movimiento, con la opción **¿No fuiste tú?** para bloquear al instante.
- Para cambiar tu estrategia, tu celular o tu cuenta de retiro te pedimos un código por SMS.
- Detenemos los movimientos fuera de lo normal y te los confirmamos antes de procesarlos.
- Siempre puedes hablar con una persona.

**Fuente:** PRD §2.4, RN-17 a RN-20.

---

## 9. Costos a la vista

**Objetivo:** responder el miedo a las comisiones ocultas, con números.

**Título:** Sin letras chiquitas

**Puntos:**

- **0.53 % al año sobre tu saldo.** Por ejemplo, si tienes $1,000 dólares, pagas $5.30 dólares al año.
- **No cobramos por aportar.**
- **Los costos de otros, antes de pagar.** La comisión de OXXO o el margen del tipo de cambio se muestran en pesos antes de que confirmes.
- **El tipo de cambio, comparado.** Ves el que aplicamos, el oficial de referencia (FIX de Banxico) y la diferencia en pesos.

**Fuente:** RN-08, RN-09, RN-21, RN-22, RN-23.

---

## 10. Estrategias

**Objetivo:** explicar dónde se invierte el dinero, sin tecnicismos.

**Título:** Tu dinero se invierte según el riesgo que quieras tomar

**Texto:**

> Más riesgo significa que tu saldo puede subir más, pero también caer más. Con 5 preguntas te asignamos la estrategia que va con tu perfil, y puedes cambiarla cuando quieras.

| Perfil | Título de la tarjeta | Texto | Nombre de la estrategia |
| --- | --- | --- | --- |
| Riesgo bajo | Para ir con calma | Busca que tu saldo se mueva poco. | KHATAR · Riesgo Alternativo |
| Riesgo moderado | Para un punto medio | Acepta subidas y bajadas a cambio de buscar más crecimiento. | TAVAN · Quality Momentum |
| Riesgo alto | Para quien aguanta los altibajos | Puede tener caídas fuertes; es para quien piensa en muchos años. | KIVUN · Trend Factor |

**Aviso:** Las estrategias se presentan con resultados hipotéticos. No prometemos ganarle al mercado y lo que obtengas puede ser menor, incluso negativo.

**Decisión de contenido:** la landing no muestra cifras de desempeño. Son referenciales mientras el modelo sigue en desarrollo (RN-10).

**Fuente:** RN-10, RN-11, RN-13.

---

## 11. Preguntas frecuentes

**Objetivo:** cerrar las dudas que quedan. Se muestran plegadas.

**Título:** Preguntas frecuentes

1. **¿Necesito descargar una app?**
   No. Usas Alcancía desde el sitio web o por nuestro WhatsApp oficial.
2. **¿En qué moneda está mi ahorro?**
   En dólares. Lo que aportas en pesos se convierte al tipo de cambio del momento, que ves antes de confirmar. El riesgo del tipo de cambio lo asumes tú; por eso tu saldo siempre se muestra en dólares y en pesos.
3. **¿Puedo sacar mi dinero antes de los 65?**
   Sí. La bolsa de emergencias se retira sin castigo. La de largo plazo también, sin penalización, con 10 días de espera y una confirmación extra. El dinero solo sale a una cuenta o tarjeta a tu nombre, y nunca por WhatsApp.
4. **¿Tiene beneficio fiscal?**
   No. La bolsa de largo plazo es ahorro voluntario sin beneficio fiscal. No es un plan de pensiones con penalización.
5. **¿Quién cuida mi dinero?**
   Se invierte a tu nombre a través de una operadora o distribuidora de fondos autorizada por la CNBV. El dinero lo mueven y lo custodian entidades reguladas.
6. **¿Los resultados están garantizados?**
   No. Las cifras de las estrategias son resultados hipotéticos. Nunca prometemos ganarle al mercado.

**Fuente:** respuestas de `sitio-web/src/app/preguntas-frecuentes/page.tsx`, basadas en RN-06, RN-07, RN-13, RN-15, RN-16 y RN-17.

---

## 12. Llamado final

**Objetivo:** cerrar con los dos caminos para empezar.

**Título:** Empieza hoy, con $50 pesos

**Subtítulo:** Desde tu celular, sin trámites y sin descargar nada.

**Botones:**

- Principal: **Empezar a ahorrar** → registro
- Secundario: **Escríbenos por WhatsApp** → número oficial

**Nota:** Nuestro único número oficial es [por definir]. Cualquier otro es falso.

**Código QR:** solo en pantallas grandes, a la derecha: "Escanea con tu celular para abrir la demo". El archivo es `public/qr-demo.svg` y abre `https://qr.link/mtsyqz`, que redirige a `https://alcancia-opal.vercel.app/`.

---

## 13. Nuestro equipo

**Objetivo:** mostrar quién está detrás de Alcancía.

**Título:** Cuatro perfiles, una visión compartida.

**Contenido:** presentación del equipo y una tarjeta por integrante con especialidad, formación, perfil profesional y contacto (correo, teléfono y LinkedIn). Los textos completos están en `src/data/content.ts` (`TEAM_INTRO` y `TEAM`).

**Integrantes:** Luis Jonathan Orihuela Genis · Juan David Villegas Anaya · José Adolfo Ramírez Acevedo · Daniel Lorenzo Sánchez Ramírez

---

## Pie de página

- Enlaces: Cómo funciona · Seguridad · Preguntas frecuentes · WhatsApp oficial
- Aviso: Esta es una demostración con cifras de ejemplo. Todavía no se maneja dinero real.

**Fuente:** PRD §4 (fuera del alcance del hackathon: dinero real).

---

## Pendientes por definir

- [ ] Número oficial de WhatsApp y dominio, que se usan en las secciones 8 y 12. Mientras tanto, la landing dice "nuestro número oficial verificado", sin mostrar un número.
- [ ] A dónde lleva **Empezar a ahorrar**: ¿al registro del sitio demo (`sitio-web`) o a una lista de espera? Por ahora, **Empezar a ahorrar** lleva a `/registro` y **Escríbenos por WhatsApp** a `/whatsapp` del sitio demo. La dirección base se cambia con la variable `PUBLIC_DEMO_URL`.
- [x] Supuestos de la calculadora: los mismos ejemplos del sitio demo (`sitio-web/src/domain/projection.ts`). Rendimiento de entre 2 % y 6 % al año antes de la comisión, comisión de 0.53 % y tipo de cambio de $18.45 pesos por dólar.
- [ ] Confirmar el teléfono de José Adolfo Ramírez Acevedo (sección 13). Mientras tanto, su tarjeta no muestra teléfono.
- [ ] Validar con el equipo los títulos de las tarjetas de riesgo de la sección 10.
- [ ] Revisar si TAVAN debe seguir como "riesgo moderado": su peor caída en el backtest fue de −64 % (RN-10), lo que no cuadra con "un punto medio".
- [ ] Muchos usuarios temen al SAT (PRD §3). Falta saber, con el socio o con revisión legal, qué se le puede decir sobre eso antes de agregarlo a las preguntas frecuentes.
