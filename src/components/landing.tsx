import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import type { Content } from "@/content/es";

export function NetworkArt({ className = "" }: { className?: string }) {
  const nodes: [number, number][] = [[60,80],[200,40],[330,110],[120,210],[260,230],[380,260],[180,330],[320,360],[60,320]];
  const edges: [number, number][] = [[0,1],[1,2],[0,3],[3,4],[2,4],[4,5],[3,6],[6,7],[5,7],[8,6],[8,3],[1,4]];
  return (
    <svg viewBox="0 0 440 420" className={className} aria-hidden="true">
      {edges.map(([a,b],i)=>(
        <line key={i} x1={nodes[a]![0]} y1={nodes[a]![1]} x2={nodes[b]![0]} y2={nodes[b]![1]}
          className="anim-dash stroke-primary/50" strokeWidth="1" style={{animationDelay:`${i*-0.4}s`}} />
      ))}
      {nodes.map(([x,y],i)=>(
        <g key={i}>
          <circle cx={x} cy={y} r="14" className="fill-primary/10 anim-node" style={{animationDelay:`${i*0.3}s`}} />
          <circle cx={x} cy={y} r="4" className={i===4?"fill-primary":"fill-foreground/80"} />
        </g>
      ))}
      <rect x="236" y="206" width="48" height="48" rx="10" className="fill-none stroke-primary" strokeWidth="1.5" />
    </svg>
  );
}

export function Nav({ c }: { c: Content }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5" aria-label="Principal">
        <a href="#top" className="flex items-center gap-2 font-display text-2xl">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />Evolvia
        </a>
        <ul className="hidden gap-8 text-sm text-muted-foreground md:flex">
          {c.nav.links.map(l=><li key={l.href}><a href={l.href} className="transition-colors hover:text-foreground">{l.label}</a></li>)}
        </ul>
        <a href="#contacto" className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:glow md:inline-block">{c.nav.cta}</a>
        <button className="md:hidden eyebrow" aria-expanded={open} aria-controls="mnav" onClick={()=>setOpen(!open)}>{open?"Cerrar":"Menú"}</button>
      </nav>
      {open && (
        <ul id="mnav" className="space-y-1 border-t border-line px-5 py-4 md:hidden">
          {[...c.nav.links,{href:"#contacto",label:c.nav.cta}].map(l=>(
            <li key={l.href}><a onClick={()=>setOpen(false)} href={l.href} className="block py-2 text-lg">{l.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-14 grid gap-4 md:grid-cols-12">
      <p className="eyebrow md:col-span-3 md:pt-4">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-[1.05] md:col-span-9 md:text-6xl">{title}</h2>
    </div>
  );
}

export function WorkflowDemo({ c }: { c: Content["demo"] }) {
  const [sid, setSid] = useState(c.scenarios[0]?.id ?? "");
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const sc = c.scenarios.find(s=>s.id===sid) ?? c.scenarios[0]!;
  useEffect(()=>()=>clearInterval(timer.current),[]);
  const reset = () => { clearInterval(timer.current); setRunning(false); setStep(-1); };
  const run = () => {
    reset(); setRunning(true); let i = -1;
    timer.current = setInterval(()=>{ i++; setStep(i); if(i>=sc.steps.length-1){ clearInterval(timer.current); setRunning(false);} }, 750);
  };
  const done = step >= sc.steps.length-1 && !running;
  return (
    <div className="grid overflow-hidden rounded-2xl border border-line bg-surface md:grid-cols-[260px_1fr]">
      <div className="border-b border-line p-5 md:border-b-0 md:border-r" role="tablist" aria-label="Escenarios">
        {c.scenarios.map(s=>(
          <button key={s.id} role="tab" aria-selected={s.id===sid} onClick={()=>{reset(); setSid(s.id);}}
            className={`mb-2 w-full rounded-lg px-4 py-3 text-left text-sm transition ${s.id===sid?"bg-accent text-accent-foreground":"text-muted-foreground hover:bg-surface-2"}`}>
            {s.label}
          </button>
        ))}
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{c.note}</p>
      </div>
      <div className="p-6 md:p-10">
        <ol className="space-y-3" aria-live="polite">
          {sc.steps.map((t,i)=>{
            const st = i<step||(i===step&&!running)||done ? "done" : i===step ? "active" : "idle";
            return (
              <li key={t} className={`flex items-center gap-4 rounded-xl border px-4 py-3 transition-all duration-500 ${st==="idle"?"border-line opacity-50":st==="active"?"border-primary bg-accent":"border-line bg-surface-2"}`}>
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full font-mono text-xs ${st==="idle"?"border border-line":"bg-primary text-primary-foreground"}`}>{st==="done"?"✓":i+1}</span>
                <span className="text-sm md:text-base">{t}</span>
                {st==="active" && <span className="ml-auto eyebrow text-accent-foreground">en curso</span>}
              </li>
            );
          })}
        </ol>
        <div className="mt-8 flex gap-3">
          <button onClick={run} disabled={running} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:glow disabled:opacity-60">{running?c.running:c.run}</button>
          <button onClick={reset} className="rounded-full border border-line px-6 py-3 text-sm transition hover:bg-surface-2">{c.reset}</button>
        </div>
      </div>
    </div>
  );
}

export function FAQ({ c }: { c: Content["faq"] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {c.items.map(i=>(
        <details key={i.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg md:text-xl">
            {i.q}<span className="font-mono text-primary transition-transform group-open:rotate-45" aria-hidden>+</span>
          </summary>
          <p className="mt-3 max-w-2xl text-muted-foreground">{i.a}</p>
        </details>
      ))}
    </div>
  );
}

export function ContactForm({ c }: { c: Content["contact"] }) {
  const schema = z.object({
    name: z.string().trim().min(1,c.errors.name).max(100),
    email: z.string().trim().email(c.errors.email).max(255),
    company: z.string().trim().max(120).optional(),
    interest: z.string().max(60),
    message: z.string().trim().min(10,c.errors["message"]).max(1000),
  });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const r = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!r.success) { const er: Record<string,string> = {}; r.error.issues.forEach(i=>{ er[String(i.path[0])] ??= i.message; }); setErrors(er); return; }
    setErrors({}); setSent(true); e.currentTarget.reset();
  };
  const field = "w-full rounded-lg border border-input bg-surface px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";
  if (sent) return <div role="status" className="rounded-2xl border border-primary bg-accent p-8 text-lg">{c.success}<button onClick={()=>setSent(false)} className="mt-6 block eyebrow text-accent-foreground">← Nuevo mensaje</button></div>;
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2"><F errors={errors} field={field} n="name" label={c.fields.name} /><F errors={errors} field={field} n="email" label={c.fields.email} type="email" /></div>
      <div className="grid gap-5 sm:grid-cols-2">
        <F errors={errors} field={field} n="company" label={c.fields.company} />
        <label className="block"><span className="mb-2 block text-sm text-muted-foreground">{c.fields.interest}</span>
          <select name="interest" className={field}>{c.interests.map(i=><option key={i}>{i}</option>)}</select></label>
      </div>
      <label className="block"><span className="mb-2 block text-sm text-muted-foreground">{c.fields.message}</span>
        <textarea name="message" rows={5} className={field} aria-invalid={!!errors["message"]} aria-describedby={errors["message"]?"message-e":undefined} />
        {errors["message"] && <span id="message-e" className="mt-1 block text-sm text-destructive">{errors["message"]}</span>}
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button className="rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:glow">{c.submit} →</button>
        <p className="text-xs text-muted-foreground">{c.prototype}</p>
      </div>
    </form>
  );
}

function F({ n, label, type = "text", errors, field }: { n: string; label: string; type?: string; errors: Record<string, string>; field: string }) {
  return (
    <label className="block"><span className="mb-2 block text-sm text-muted-foreground">{label}</span>
      <input name={n} type={type} className={field} aria-invalid={!!errors[n]} aria-describedby={errors[n] ? `${n}-e` : undefined} />
      {errors[n] && <span id={`${n}-e`} className="mt-1 block text-sm text-destructive">{errors[n]}</span>}
    </label>
  );
}
