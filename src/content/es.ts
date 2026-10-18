// Spanish copy. Duplicate this file as pt.ts with the same shape for Portuguese.
export const es = {
  lang: "es",
  nav: {
    links: [
      { href: "#servicios", label: "Servicios" },
      { href: "#demo", label: "Demo" },
      { href: "#proceso", label: "Proceso" },
      { href: "#portafolio", label: "Portafolio" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "Agendar conversación",
  },
  hero: {
    eyebrow: "Agencia de tecnología · Brasil & Latinoamérica",
    title: ["Software que", "evoluciona", "con tu negocio."],
    lead: "Diseñamos productos digitales, automatizaciones e inteligencia aplicada para empresas que quieren operar con menos fricción y crecer con criterio.",
    primary: "Iniciar un proyecto",
    secondary: "Ver la demo",
  },
  trust: {
    label: "Cómo trabajamos",
    items: ["Equipo bilingüe ES · PT", "Zonas horarias de LATAM", "Código propiedad del cliente", "Entregas semanales", "Documentación incluida", "Sin contratos de permanencia"],
  },
  services: {
    eyebrow: "01 — Servicios",
    title: "Cuatro disciplinas, un mismo equipo.",
    items: [
      { n: "A", title: "Producto digital", body: "Plataformas web y apps a medida, desde el descubrimiento hasta el lanzamiento." },
      { n: "B", title: "Automatización", body: "Flujos que conectan tus herramientas y eliminan trabajo manual repetitivo." },
      { n: "C", title: "IA aplicada", body: "Asistentes, clasificación y extracción de datos integrados a procesos reales." },
      { n: "D", title: "Diseño & marca", body: "Sistemas visuales e interfaces con una identidad clara y coherente." },
    ],
  },
  demo: {
    eyebrow: "02 — Demo interactiva",
    title: "Así se ve un flujo automatizado.",
    note: "Simulación visual. No se conecta a ningún servicio externo.",
    run: "Ejecutar flujo",
    running: "Ejecutando…",
    reset: "Reiniciar",
    scenarios: [
      { id: "leads", label: "Captura de leads", steps: ["Formulario web recibido", "Datos validados y normalizados", "Lead clasificado por prioridad", "Asignado al equipo comercial", "Mensaje de bienvenida programado"] },
      { id: "facturas", label: "Facturas", steps: ["Factura PDF recibida", "Campos extraídos", "Comparada con orden de compra", "Enviada a aprobación", "Registrada en contabilidad"] },
      { id: "soporte", label: "Soporte", steps: ["Ticket entrante", "Idioma detectado (ES/PT)", "Categoría sugerida", "Respuesta borrador generada", "Revisión humana solicitada"] },
    ],
  },
  process: {
    eyebrow: "03 — Proceso",
    title: "Un método simple, sin sorpresas.",
    steps: [
      { t: "Descubrir", d: "Entendemos el negocio, los usuarios y las restricciones." },
      { t: "Diseñar", d: "Prototipos navegables para validar antes de construir." },
      { t: "Construir", d: "Ciclos semanales con demos y acceso continuo al avance." },
      { t: "Evolucionar", d: "Medimos, ajustamos y acompañamos después del lanzamiento." },
    ],
  },
  portfolio: {
    eyebrow: "04 — Portafolio",
    title: "Exploraciones de concepto.",
    disclaimer: "Proyectos conceptuales creados para mostrar enfoque y estilo. No representan clientes reales.",
    tag: "Concepto",
    items: [
      { name: "Rota", sector: "Logística", body: "Panel de seguimiento de flotas con alertas predictivas." },
      { name: "Caju", sector: "Fintech", body: "App de finanzas personales para freelancers en Brasil." },
      { name: "Clínica Norte", sector: "Salud", body: "Agenda inteligente y recordatorios por WhatsApp." },
    ],
  },
  faq: {
    eyebrow: "05 — Preguntas",
    title: "Preguntas frecuentes.",
    items: [
      { q: "¿Trabajan con empresas fuera de Brasil?", a: "Sí. Trabajamos con equipos en toda Latinoamérica, en español y portugués." },
      { q: "¿Cuánto dura un proyecto típico?", a: "Depende del alcance. Definimos plazos concretos después de la fase de descubrimiento." },
      { q: "¿De quién es el código?", a: "Del cliente. Entregamos repositorio, documentación y accesos completos." },
      { q: "¿Pueden integrar nuestras herramientas actuales?", a: "Evaluamos cada caso. Confirmamos la viabilidad técnica antes de comprometer una integración." },
    ],
  },
  contact: {
    eyebrow: "06 — Contacto",
    title: "Cuéntanos qué quieres construir.",
    lead: "Respondemos con preguntas concretas, no con una propuesta genérica.",
    fields: { name: "Nombre", email: "Correo", company: "Empresa (opcional)", message: "Mensaje", interest: "Interés" },
    interests: ["Producto digital", "Automatización", "IA aplicada", "Diseño"],
    submit: "Enviar mensaje",
    prototype: "Prototipo: el formulario valida los datos pero aún no envía mensajes.",
    success: "¡Gracias! Validamos tu mensaje. En esta versión de prototipo no se envía a ningún servidor.",
    errors: { name: "Escribe tu nombre", email: "Correo no válido", message: "Escribe al menos 10 caracteres" },
  },
  footer: { tagline: "Tecnología con criterio para Latinoamérica.", rights: "Evolvia. Todos los derechos reservados." },
};
export type Content = typeof es;
