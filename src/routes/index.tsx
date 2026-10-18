import { createFileRoute } from "@tanstack/react-router";
import { es as c } from "@/content/es";
import { ContactForm, FAQ, Nav, SectionHead, WorkflowDemo } from "@/components/landing";

const title = "Evolvia — Tecnología, producto digital e inteligencia aplicada";
const description = "Diseñamos productos digitales, automatizaciones e inteligencia aplicada para empresas de Brasil y Latinoamérica.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_419" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function ProjectVisual({ index }: { index: number }) {
  if (index === 0) return (
    <div className="project-window project-window--dashboard">
      <div className="project-window__bar"><span /><span /><span /><small>ROTA / OPERACIONES</small></div>
      <div className="project-dashboard">
        <aside><b>R.</b><i /><i /><i /><i /></aside>
        <div className="project-dashboard__main">
          <div className="project-kicker">RESUMEN DE OPERACIONES</div>
          <div className="project-stat-row"><div><small>Entregas activas</small><strong>1.284</strong><em>↗ 12,8%</em></div><div><small>En ruta</small><strong>86</strong><em>En tiempo real</em></div></div>
          <div className="project-chart"><div className="project-chart__grid" /><svg viewBox="0 0 360 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 80 C25 74 30 48 60 58 S100 72 130 38 S175 55 205 27 S255 46 280 18 S330 30 360 8" fill="none" stroke="currentColor" strokeWidth="3" /><path d="M0 80 C25 74 30 48 60 58 S100 72 130 38 S175 55 205 27 S255 46 280 18 S330 30 360 8 L360 100 L0 100Z" fill="currentColor" opacity=".09" /></svg></div>
          <div className="project-bars"><i /><i /><i /><i /><i /><i /><i /><i /></div>
        </div>
      </div>
    </div>
  );
  if (index === 1) return (
    <div className="project-window project-window--automation">
      <div className="project-window__bar"><span /><span /><span /><small>EVOLVIA / FLOW STUDIO</small></div>
      <div className="flow-canvas">
        <div className="flow-node"><b>01</b><span>Nuevo lead</span><small>Formulario web</small></div>
        <div className="flow-connector">↘</div>
        <div className="flow-node flow-node--active"><b>02</b><span>IA clasifica</span><small>Prioridad alta</small></div>
        <div className="flow-connector">↙</div>
        <div className="flow-node"><b>03</b><span>CRM actualizado</span><small>Equipo comercial</small></div>
        <div className="flow-orbit flow-orbit--one" /><div className="flow-orbit flow-orbit--two" />
      </div>
      <div className="flow-status"><span className="status-dot" /> FLUJO VISUAL · DEMOSTRACIÓN CONCEPTUAL</div>
    </div>
  );
  return (
    <div className="project-window project-window--ai">
      <div className="project-window__bar"><span /><span /><span /><small>MARIA / INTELLIGENCE</small></div>
      <div className="ai-panel">
        <div className="ai-panel__orb"><span>✳</span></div>
        <div className="ai-panel__copy"><small>ASISTENTE EMPRESARIAL</small><h4>De los datos a la decisión.</h4><p>Detecté 3 oportunidades para optimizar la operación de esta semana.</p></div>
        <div className="ai-insight"><span>01</span><div><b>Inventario</b><small>Revisar artículos con rotación baja</small></div><strong>↗</strong></div>
        <div className="ai-insight"><span>02</span><div><b>Operaciones</b><small>Consolidar tareas repetitivas</small></div><strong>↗</strong></div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="overflow-x-clip">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Saltar al contenido</a>
      <Nav c={c} />
      <main id="main">
        <section className="premium-hero relative isolate">
          <div className="premium-hero__glow" aria-hidden="true" />
          <div className="premium-hero__grid" aria-hidden="true" />
          <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-44 lg:grid-cols-12 lg:gap-8 xl:px-12">
            <div className="relative z-10 lg:col-span-7">
              <p className="eyebrow anim-rise flex items-center gap-3"><span className="status-dot" />{c.hero.eyebrow}</p>
              <h1 className="premium-title mt-7 max-w-5xl anim-rise" style={{ animationDelay: ".1s" }}>
                Tecnología que<br /><em>mueve</em> tu negocio<span className="text-primary">.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground anim-rise sm:text-lg" style={{ animationDelay: ".2s" }}>{c.hero.lead}</p>
              <div className="mt-10 flex flex-wrap items-center gap-4 anim-rise" style={{ animationDelay: ".3s" }}>
                <a href="#contacto" className="premium-button">{c.hero.primary}<span aria-hidden>↗</span></a>
                <a href="#portafolio" className="premium-text-link">{c.hero.secondary}<span aria-hidden>↓</span></a>
              </div>
              <div className="hero-footnote mt-14 anim-rise" style={{ animationDelay: ".4s" }}><span>ESTRATEGIA</span><i /> <span>DISEÑO</span><i /> <span>INGENIERÍA</span><i /> <span>IA APLICADA</span></div>
            </div>
            <div className="hero-art-wrap relative mx-auto w-full max-w-xl lg:col-span-5 lg:max-w-none">
              <div className="hero-art-orbit hero-art-orbit--outer" /><div className="hero-art-orbit hero-art-orbit--inner" />
              <div className="hero-art-card hero-art-card--main">
                <div className="hero-art-card__top"><span className="status-dot" /> EVOLVIA / SYSTEMS THINKING <span>01—04</span></div>
                <svg className="hero-network" viewBox="0 0 500 450" role="img" aria-label="Ilustración de sistemas digitales conectados">
                  <defs><radialGradient id="core"><stop offset="0" stopColor="currentColor" stopOpacity=".38"/><stop offset="1" stopColor="currentColor" stopOpacity="0"/></radialGradient></defs>
                  <circle cx="250" cy="220" r="155" fill="url(#core)" />
                  {[55,95,135,175].map(r=><circle key={r} cx="250" cy="220" r={r} fill="none" stroke="currentColor" strokeOpacity=".16" strokeDasharray={r===135?"3 8":"1 7"} />)}
                  <g stroke="currentColor" strokeOpacity=".45" strokeWidth="1.2" fill="none"><path d="M75 105 170 160 250 80 350 150 430 95M65 285 155 250 250 330 345 265 440 315M170 160 155 250M350 150 345 265M250 80 250 330M75 105 65 285M430 95 440 315" className="anim-dash"/><path d="M155 250 250 220 350 150M170 160 250 220 345 265" /></g>
                  {[[75,105],[170,160],[250,80],[350,150],[430,95],[65,285],[155,250],[250,330],[345,265],[440,315],[250,220]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r={i===10?24:10} fill="currentColor" opacity={i===10?".12":".08"} /><circle cx={x} cy={y} r={i===10?7:3.5} fill="currentColor" className={i%3===0?"anim-node":""}/></g>)}
                  <rect x="218" y="188" width="64" height="64" rx="18" fill="#d6ff69" /><text x="250" y="228" textAnchor="middle" fontSize="29" fill="#171914" fontFamily="sans-serif">e.</text>
                </svg>
                <div className="hero-art-card__bottom"><span>BUILT AROUND YOUR BUSINESS</span><span>● LIVE CONCEPT</span></div>
              </div>
              <div className="hero-float hero-float--top"><span className="hero-float__icon">✳</span><span><small>INTELIGENCIA</small><b>Ideas en movimiento</b></span></div>
              <div className="hero-float hero-float--bottom"><span className="hero-float__metric">↗</span><span><small>DE LA IDEA</small><b>A un sistema real</b></span></div>
            </div>
          </div>
          <div className="hero-bottom-line"><span>INDEPENDENT DIGITAL STUDIO</span><span>BRASIL · LATINOAMÉRICA</span><a href="#servicios">EXPLORAR ↓</a></div>
        </section>

        <section aria-label={c.trust.label} className="proof-strip">
          <div className="proof-strip__label eyebrow">UNA FORMA DE TRABAJAR</div>
          <div className="proof-strip__items">{c.trust.items.map((item,i)=><div key={item} className="proof-item"><span>0{i+1}</span>{item}</div>)}</div>
        </section>

        <section id="servicios" className="premium-section mx-auto max-w-[1440px] scroll-mt-20 px-5 py-24 sm:px-8 md:py-32 xl:px-12">
          <div className="section-intro"><p className="eyebrow">01 / LO QUE HACEMOS</p><h2 className="premium-section-title">Construimos lo que<br /><em>viene después.</em></h2><p className="section-intro__lead">Un equipo para pensar, diseñar y construir experiencias digitales que resuelven problemas reales.</p></div>
          <div className="service-grid">
            {c.services.items.map((s,i)=><article key={s.n} className={"service-card service-card--"+(i+1)}><div className="service-card__top"><span>{s.n} / 0{i+1}</span><span className="service-arrow">↗</span></div><div className={"service-symbol service-symbol--"+i} aria-hidden="true">{i===0?"◫":i===1?"⌘":i===2?"✳":"◈"}</div><h3>{s.title}</h3><p>{s.body}</p><div className="service-card__line" /></article>)}
          </div>
        </section>

        <section id="portafolio" className="portfolio-section scroll-mt-20 py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 xl:px-12">
            <div className="portfolio-heading"><div><p className="eyebrow">02 / LABORATORIO DIGITAL</p><h2 className="premium-section-title">Ideas que toman<br /><em>forma.</em></h2></div><p className="portfolio-heading__note">{c.portfolio.disclaimer}</p></div>
            <div className="portfolio-grid">{c.portfolio.items.map((p,i)=><article key={p.name} className={"portfolio-card portfolio-card--"+i}><a href="#contacto" className="portfolio-card__visual group" aria-label={"Consultar un proyecto como "+p.name}><ProjectVisual index={i}/><span className="portfolio-card__open">↗</span></a><div className="portfolio-card__meta"><span className="eyebrow">{p.sector} / CONCEPTO 0{i+1}</span><span className="portfolio-card__index">0{i+1}</span></div><h3>{p.name}</h3><p>{p.body}</p></article>)}</div>
          </div>
        </section>

        <section id="demo" className="premium-section mx-auto max-w-[1440px] scroll-mt-20 px-5 py-24 sm:px-8 md:py-32 xl:px-12">
          <div className="section-intro"><p className="eyebrow">03 / VER PARA ENTENDER</p><h2 className="premium-section-title">Menos tareas.<br /><em>Más movimiento.</em></h2><p className="section-intro__lead">Explora un ejemplo interactivo de cómo una automatización puede conectar procesos y reducir fricción operativa.</p></div>
          <WorkflowDemo c={c.demo} />
        </section>

        <section id="proceso" className="process-section scroll-mt-20 py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 xl:px-12"><div className="section-intro"><p className="eyebrow">04 / CÓMO LO HACEMOS</p><h2 className="premium-section-title">De la pregunta<br /><em>al producto.</em></h2></div><ol className="process-grid">{c.process.steps.map((s,i)=><li key={s.t} className="process-step"><span className="process-step__number">0{i+1}</span><div className="process-step__symbol">{["↗","⌘","◫","✳"][i]}</div><h3>{s.t}</h3><p>{s.d}</p><span className="process-step__rule" /></li>)}</ol></div>
        </section>

        <section id="faq" className="premium-section mx-auto max-w-[1440px] scroll-mt-20 px-5 py-24 sm:px-8 md:py-32 xl:px-12"><div className="faq-layout"><div><p className="eyebrow">05 / PREGUNTAS</p><h2 className="premium-section-title">Lo que necesitas<br /><em>saber.</em></h2></div><FAQ c={c.faq} /></div></section>

        <section id="contacto" className="contact-section scroll-mt-20 py-24 md:py-32">
          <div className="contact-glow" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 xl:px-12">
            <div className="lg:col-span-5"><p className="eyebrow">06 / EL SIGUIENTE PASO</p><h2 className="contact-title mt-6">{c.contact.title.split(" ").slice(0,2).join(" ")}<br /><em>{c.contact.title.split(" ").slice(2).join(" ")}</em></h2><p className="mt-6 max-w-md leading-7 text-muted-foreground">{c.contact.lead}</p><div className="contact-aside mt-12"><span className="status-dot" /><span>CUÉNTANOS TU RETO. PENSEMOS EN GRANDE.</span></div></div>
            <div className="contact-form-wrap lg:col-span-7"><ContactForm c={c.contact} /></div>
          </div>
        </section>
      </main>
      <footer className="premium-footer"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between xl:px-12"><div><p className="premium-footer__brand">evolvia<span>.</span></p><p className="mt-2 text-sm text-muted-foreground">{c.footer.tagline}</p></div><div className="premium-footer__right"><a href="#top">VOLVER ARRIBA ↑</a><p>© {new Date().getFullYear()} {c.footer.rights}</p></div></div></footer>
    </div>
  );
}
