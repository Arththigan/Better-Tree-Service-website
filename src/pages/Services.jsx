import Seo from "../components/Seo";
import { PageHero, Process, SectionHeading, ServiceGrid } from "../components/Sections";
import { images } from "../data";

export default function Services() {
  return (
    <>
      <Seo title="Tree Services in Syracuse, NY | Better Tree Service" description="Tree removal, trimming, stump grinding, emergency response and tree health care for Syracuse, NY properties." path="/services" />
      <PageHero eyebrow="Our services" title="The right care for every tree." text="Routine maintenance, urgent storm cleanup, and complex removals—handled with a clear plan and professional attention to the property." image={images.climber} />
      <section className="shell py-24">
        <SectionHeading eyebrow="Tree care solutions" title="Built around safety, health, and a clean result." text="Choose the service you need, or contact us for help understanding the best next step for your tree." />
        <ServiceGrid />
      </section>
      <section className="bg-forest-800 py-24">
        <div className="shell">
          <SectionHeading eyebrow="How it works" title="A straightforward service experience." align="center" />
          <Process />
        </div>
      </section>
      <section className="shell py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Residential", "Tree care that protects homes, driveways, fences, gardens, and family spaces."],
            ["Commercial", "Dependable maintenance and risk reduction for businesses and managed properties."],
            ["Emergency", "Responsive support when storms, failures, or hanging limbs create an urgent risk."]
          ].map(([title,text]) => <article key={title} className="rounded-3xl border border-white/10 p-8"><span className="font-display text-sm uppercase tracking-widest text-leaf-400">Property care</span><h3 className="mt-4 font-display text-3xl uppercase">{title}</h3><p className="mt-4 text-sm leading-7 text-white/55">{text}</p></article>)}
        </div>
      </section>
    </>
  );
}
