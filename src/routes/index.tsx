import { createFileRoute } from "@tanstack/react-router";
import { es as c } from "@/content/es";
import { ContactForm, FAQ, Nav, NetworkArt, SectionHead, WorkflowDemo } from "@/components/landing";

const title = "Evolvia — Agencia de tecnología para Brasil y Latinoamérica";
const description = "Producto digital, automatización e IA aplicada para empresas de Brasil y Latinoamérica. Equipo bilingüe español y portugués.";

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

function Index() {
  return (
    <div id="top" className="overflow-x-hidden">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Saltar al contenido</a>
      <Nav c={c} />
      <main id="main">
        {/* Hero */}
        <section className="relative grain isolate pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 xl:px-12">
            <div className="lg:col-span-7">
              <p className="eyebrow anim-rise">{c.hero.eyebrow}</p>
              <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[0.92] tracking-[-0.045em] anim-rise sm:text-7xl md:text-8xl lg:text-[6.4rem]" style={{animationDelay:".1s"}}>
                {c.hero.title[0]} <em className="text-primary">{c.hero.title[1]}</em><br />{c.hero.title[2]}
              </h1>
              <p className="mt-8 max-w-lg text-base leading-8 text-muted-foreground anim-rise sm:text-lg" style={{animationDelay:".2s"}}>{c.hero.lead}</p>
              <div className="mt-10 flex flex-wrap items-center gap-3 anim-rise" style={{animationDelay:".3s"}}>
                <a href="#contacto" className="rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-[0_0_32px_-12px_var(--color-primary)] transition duration-300 hover:-translate-y-0.5 hover:glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{c.hero.primary} →</a>
                <a href="#demo" className="rounded-full border border-line px-7 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{c.hero.secondary}</a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl lg:col-span-5 lg:max-w-none">
              <div className="absolute inset-10 rounded-full bg-primary/10 blur-3xl" aria-hidden />
              <div className="relative rounded-[2rem] border border-line/80 bg-surface/35 p-3 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-5"><div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent pointer-events-none" aria-hidden /><NetworkArt className="relative w-full" /><div className="relative mx-2 mb-2 flex items-center justify-between border-t border-line/70 pt-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:mx-4"><span>Estratégia · Engenharia · IA</span><span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Sistemas conectados</span></div></div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section aria-label={c.trust.label} className="border-y border-line bg-surface py-5">
          <div className="flex w-max anim-marquee gap-12 whitespace-nowrap">
            {[...c.trust.items, ...c.trust.items].map((t,i)=>(
              <span key={i} className="flex items-center gap-12 eyebrow" aria-hidden={i>=c.trust.items.length}>{t}<span className="text-primary">✦</span></span>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="servicios" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28">
          <SectionHead eyebrow={c.services.eyebrow} title={c.services.title} />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {c.services.items.map(s=>(
              <article key={s.n} className="group bg-background p-8 transition-colors hover:bg-surface md:p-12">
                <span className="font-mono text-sm text-primary">{s.n}</span>
                <h3 className="mt-10 font-display text-3xl md:text-4xl">{s.title}</h3>
                <p className="mt-3 max-w-sm text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Demo */}
        <section id="demo" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28">
          <SectionHead eyebrow={c.demo.eyebrow} title={c.demo.title} />
          <WorkflowDemo c={c.demo} />
        </section>

        {/* Process */}
        <section id="proceso" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28">
          <SectionHead eyebrow={c.process.eyebrow} title={c.process.title} />
          <ol className="grid gap-10 md:grid-cols-4">
            {c.process.steps.map((s,i)=>(
              <li key={s.t} className="border-t border-primary/60 pt-6">
                <span className="font-mono text-xs text-primary">0{i+1}</span>
                <h3 className="mt-4 font-display text-3xl">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Portfolio */}
        <section id="portafolio" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28">
          <SectionHead eyebrow={c.portfolio.eyebrow} title={c.portfolio.title} />
          <p className="-mt-8 mb-10 max-w-2xl text-sm text-muted-foreground md:ml-[25%]">{c.portfolio.disclaimer}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {c.portfolio.items.map((p,i)=>(
              <article key={p.name} className="group overflow-hidden rounded-2xl border border-line bg-surface">
                <div className="relative aspect-[4/3] grain bg-surface-2">
                  <svg viewBox="0 0 200 150" className="h-full w-full transition-transform duration-700 group-hover:scale-105" aria-hidden>
                    {Array.from({length:6}).map((_,k)=>(
                      <circle key={k} cx={100} cy={75} r={12+k*14+i*3} className="fill-none stroke-primary/30" strokeWidth=".6" />
                    ))}
                    <circle cx={100+(i-1)*30} cy={75} r="8" className="fill-primary" />
                  </svg>
                  <span className="absolute left-4 top-4 rounded-full border border-primary px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">{c.portfolio.tag}</span>
                </div>
                <div className="p-6">
                  <p className="eyebrow">{p.sector}</p>
                  <h3 className="mt-2 font-display text-3xl">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28">
          <SectionHead eyebrow={c.faq.eyebrow} title={c.faq.title} />
          <div className="md:ml-[25%]"><FAQ c={c.faq} /></div>
        </section>

        {/* Contact */}
        <section id="contacto" className="scroll-mt-20 border-t border-line bg-surface/50 py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">{c.contact.eyebrow}</p>
              <h2 className="mt-4 font-display text-5xl leading-[1.05] md:text-6xl">{c.contact.title}</h2>
              <p className="mt-6 text-muted-foreground">{c.contact.lead}</p>
            </div>
            <div className="lg:col-span-7"><ContactForm c={c.contact} /></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-5xl">Evolvia<span className="text-primary">.</span></p>
            <p className="mt-2 text-muted-foreground">{c.footer.tagline}</p>
          </div>
          <p className="eyebrow">© {new Date().getFullYear()} {c.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}
