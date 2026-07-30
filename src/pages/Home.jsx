import { ArrowUpRight, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { CheckList, Process, SectionHeading, ServiceGrid, Testimonials, TrustStrip } from "../components/Sections";
import { business, images } from "../data";
import { BeforeAfter, Faq, SplitText, Stats } from "../components/ModernUX";

export default function Home() {
  return (
    <>
      <Seo title="Better Tree Service | Tree Removal & Trimming in Syracuse, NY" description="Professional tree removal, trimming, stump grinding and emergency tree service in Syracuse, NY. Request a clear, no-pressure estimate." />
      <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden">
        <img src={images.hero} alt="Professional arborist performing safe tree removal" className="absolute inset-0 -z-30 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-forest-950 via-forest-950/80 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-900 via-transparent to-transparent" />
        <div className="shell flex min-h-[calc(100svh-5rem)] items-end pb-16 pt-28 lg:items-center lg:pb-10">
          <div className="max-w-4xl">
            <p className="eyebrow">Syracuse, New York tree care</p>
            <h1 className="display-title mt-7 max-w-4xl">
              <SplitText text="Strong trees."/><br/>
              <SplitText text="Safer property." className="text-leaf-400"/>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">Professional tree removal, precise pruning, stump grinding, and storm response—planned carefully and finished cleanly.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Free Estimate <ArrowUpRight size={18}/></Link>
              <a href={`tel:${business.phone}`} className="btn-secondary"><Phone size={18}/> {business.phoneDisplay}</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/55">
              <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-leaf-400"/> Safety-focused service</span>
              <a className="flex items-center gap-2 hover:text-white" href={business.mapUrl} target="_blank" rel="noreferrer"><MapPin size={18} className="text-leaf-400"/> Syracuse, NY 13215</a>
            </div>
          </div>
        </div>
      </section>

      <section className="shell -mt-1 pb-20"><TrustStrip /></section>

      <section className="shell pb-20"><Stats /></section>

      <section className="shell py-20">
        <SectionHeading eyebrow="What we do" title="Complete care for every tree and property." text="From routine pruning to complex removals, every project begins with a clear plan and ends with a clean site." />
        <ServiceGrid limit={6} />
      </section>

      <section className="bg-forest-800 py-24">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img src={images.climber} alt="Tree care professional working safely in a mature tree" className="aspect-[4/5] w-full rounded-[2rem] object-cover" loading="lazy" width="900" height="1125" />
            <div className="absolute -bottom-7 -right-2 rounded-3xl bg-leaf-400 p-7 text-forest-950 sm:right-7">
              <p className="font-display text-5xl">LOCAL</p>
              <p className="mt-1 text-sm font-bold">Syracuse tree care</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Why Better Tree Service" title="Careful work starts with the right plan." text="Trees are valuable, and the work around them can be complex. We focus on sound decisions, respectful crews, and a result that protects your home and landscape." />
            <CheckList items={["Clear project scope", "Property-conscious methods", "Professional safety practices", "Thorough debris cleanup", "Responsive communication", "Tree-first recommendations"]} />
            <Link to="/about" className="btn-primary mt-9">Meet Better Tree Service <ArrowUpRight size={18}/></Link>
          </div>
        </div>
      </section>

      <section className="shell py-24">
        <SectionHeading eyebrow="Simple process" title="From first look to final cleanup." align="center" />
        <Process />
      </section>

      <section className="bg-cream py-24 text-forest-950">
        <div className="shell grid items-center gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow !border-forest-950/15 !text-forest-600">Visual comparison</p>
            <h2 className="display-title mt-5 !text-4xl !text-forest-950 sm:!text-6xl">Make room for a safer landscape.</h2>
            <p className="mt-5 text-base leading-8 text-forest-600">Drag the slider to compare the cleared tree area with the dense green landscape view. Representative imagery.</p>
          </div>
          <BeforeAfter />
        </div>
      </section>

      <section className="bg-forest-950 py-24">
        <div className="shell">
          <SectionHeading eyebrow="What customers value" title="Tree care built around trust." text="Straight answers, careful work, and respect for the property—that is the experience we aim to deliver." />
          <Testimonials />
        </div>
      </section>

      <section className="shell py-24">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <SectionHeading eyebrow="Common questions" title="Useful answers before the work begins." text="Every property is different, but these answers cover the questions we hear most often." />
          <Faq />
        </div>
      </section>
    </>
  );
}
