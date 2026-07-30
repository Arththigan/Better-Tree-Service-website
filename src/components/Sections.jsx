import { ArrowRight, Check, ShieldCheck, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { images, services } from "../data";
import { SplitText } from "./ModernUX";

export function PageHero({ eyebrow, title, text, image = images.canopy }) {
  return (
    <section className="relative isolate min-h-[520px] overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950 via-forest-950/85 to-forest-950/25" />
      <div className="shell flex min-h-[520px] items-end py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-title mt-6"><SplitText text={title}/></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">{text}</p>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow ${align === "center" ? "mx-auto" : ""}`}>{eyebrow}</p>
      <h2 className="display-title mt-5 !text-4xl sm:!text-5xl lg:!text-6xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-white/55 md:text-lg">{text}</p>}
    </div>
  );
}

export function ServiceGrid({ limit }) {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.slice(0, limit || services.length).map((service, index) => {
        const Icon = service.icon;
        return (
          <article key={service.title} className="service-card group">
            <div className="relative h-56 overflow-hidden rounded-2xl">
              <img src={service.cardImage || service.image} alt={`${service.title} by Better Tree Service`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" decoding="async" width="360" height="240"/>
              <span className="absolute left-4 top-4 grid size-12 place-items-center rounded-full bg-leaf-400 text-forest-950"><Icon size={23}/></span>
            </div>
            <div className="px-2 pb-2 pt-6">
              <span className="font-display text-sm text-leaf-400">0{index + 1}</span>
              <h3 className="mt-2 font-display text-3xl uppercase">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{service.description}</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-leaf-400">Get an estimate <ArrowRight size={17}/></Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function TrustStrip() {
  return (
    <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
      {[
        ["Safety First", "Careful planning on every job"],
        ["Clean Work", "Thorough property cleanup"],
        ["Local Service", "Serving greater Syracuse"],
        ["Clear Quotes", "Honest, straightforward scope"]
      ].map(([title, text]) => (
        <div key={title} className="bg-forest-800 p-7">
          <ShieldCheck className="text-leaf-400" />
          <h2 className="mt-4 font-display text-xl uppercase">{title}</h2>
          <p className="mt-2 text-sm text-white/50">{text}</p>
        </div>
      ))}
    </div>
  );
}

export function Process() {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-3">
      {[
        ["01", "Walk the property", "We assess access, targets, tree condition, and your priorities."],
        ["02", "Build a safe plan", "You receive a clear scope designed for safe, efficient work."],
        ["03", "Complete & clean", "Our crew performs the work and leaves your property tidy."]
      ].map(([number,title,text]) => (
        <article key={number} className="rounded-3xl border border-white/10 bg-forest-800 p-8">
          <span className="font-display text-5xl text-leaf-400/35">{number}</span>
          <h3 className="mt-8 font-display text-2xl uppercase">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/55">{text}</p>
        </article>
      ))}
    </div>
  );
}

export function Testimonials() {
  const items = [
    ["Fast, professional, and careful around our fence and garden. The cleanup was excellent.", "Syracuse homeowner"],
    ["They explained the safest option, gave a clear quote, and handled a difficult tree smoothly.", "Onondaga County customer"],
    ["Responsive after a storm and respectful of the whole property. I would call them again.", "Local property owner"]
  ];
  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-3">
      {items.map(([quote, author]) => <figure key={quote} className="rounded-3xl bg-cream p-8 text-forest-950"><div className="flex text-bark">{[1,2,3,4,5].map(n => <Star key={n} size={16} fill="currentColor"/>)}</div><blockquote className="mt-6 text-lg font-medium leading-8">“{quote}”</blockquote><figcaption className="mt-6 text-sm font-bold text-forest-600">{author}</figcaption></figure>)}
    </div>
  );
}

export function CheckList({ items }) {
  return <ul className="mt-7 grid gap-4 sm:grid-cols-2">{items.map(item => <li key={item} className="flex items-center gap-3 text-sm text-white/70"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-leaf-400 text-forest-950"><Check size={14}/></span>{item}</li>)}</ul>;
}
