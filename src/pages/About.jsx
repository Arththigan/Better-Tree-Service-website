import { createElement } from "react";
import { ArrowUpRight, Eye, HeartHandshake, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { CheckList, PageHero, SectionHeading, TrustStrip } from "../components/Sections";
import { images } from "../data";

export default function About() {
  const values = [
    [Shield, "Safety", "A careful plan, proper equipment, and situational awareness come first."],
    [HeartHandshake, "Respect", "We communicate clearly and treat your home, yard, and neighbors with care."],
    [Target, "Precision", "Every cut and every rigging decision has a purpose."],
    [Eye, "Transparency", "You get a straightforward scope and practical recommendations."]
  ];
  return (
    <>
      <Seo title="About Better Tree Service | Local Syracuse Tree Care" description="Learn about Better Tree Service, a local Syracuse tree care company committed to safe work, honest guidance and clean results." path="/about" />
      <PageHero eyebrow="About us" title="Rooted in good work." text="Better Tree Service helps Syracuse property owners make confident decisions about the trees around their homes, businesses, and landscapes." image={images.woods} />

      <section className="shell py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-4">
            <img src={images.climber} alt="Professional arborist using safety equipment" className="mt-14 aspect-[3/4] rounded-3xl object-cover" loading="lazy"/>
            <img src={images.tree} alt="Healthy mature tree maintained by expert care" className="aspect-[3/4] rounded-3xl object-cover" loading="lazy"/>
          </div>
          <div>
            <SectionHeading eyebrow="Our approach" title="Practical advice. Skilled execution. A clean finish." text="Tree work should solve a real problem—not create new ones. We look at the whole site, explain the options, and plan the work around safety, tree health, access, and your goals." />
            <CheckList items={["Residential tree care", "Hazard evaluation", "Proactive maintenance", "Storm damage response", "Clean, organized jobsites", "Local property knowledge"]} />
            <Link to="/contact" className="btn-primary mt-9">Talk About Your Trees <ArrowUpRight size={18}/></Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 text-forest-950">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow !border-forest-950/15 !text-forest-600">What guides us</p>
            <h2 className="display-title mt-5 !text-4xl !text-forest-950 sm:!text-6xl">Values you can see on the jobsite.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map(([icon,title,text]) => <article key={title} className="rounded-3xl border border-forest-950/10 bg-white p-7"><span className="grid size-12 place-items-center rounded-full bg-leaf-400">{createElement(icon)}</span><h3 className="mt-6 font-display text-2xl uppercase">{title}</h3><p className="mt-3 text-sm leading-7 text-forest-600">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="shell py-24"><TrustStrip /></section>
    </>
  );
}
