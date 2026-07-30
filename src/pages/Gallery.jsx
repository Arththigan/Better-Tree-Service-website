import { useState } from "react";
import { Maximize2, X } from "lucide-react";
import Seo from "../components/Seo";
import { PageHero, SectionHeading } from "../components/Sections";
import { gallery, images } from "../data";

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <Seo title="Tree Service Gallery | Better Tree Service Syracuse" description="See professional tree removal, pruning, cleanup and property care work from Better Tree Service in Syracuse, NY." path="/gallery" />
      <PageHero eyebrow="Our work" title="Care you can see." text="A look at the safe methods, thoughtful pruning, organized jobsites, and clean results that define professional tree care." image={images.canopy} />
      <section className="shell py-24">
        <SectionHeading eyebrow="Project gallery" title="From complex removals to healthy canopies." text="Select any image for a larger view." />
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((item, index) => (
            <button key={item.label} onClick={() => setSelected(item)} className="group relative mb-5 block w-full overflow-hidden rounded-3xl text-left" aria-label={`View ${item.label}`}>
              <img src={item.src} alt={item.alt} className={`w-full object-cover transition duration-700 group-hover:scale-105 ${index % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}`} loading="lazy" width="900" height={index % 3 === 1 ? "1125" : "675"} />
              <span className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent"/>
              <span className="absolute bottom-5 left-5 font-display text-xl uppercase">{item.label}</span>
              <span className="absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-white/15 backdrop-blur"><Maximize2 size={18}/></span>
            </button>
          ))}
        </div>
      </section>
      {selected && <div className="fixed inset-0 z-[80] grid place-items-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label={selected.label} onClick={() => setSelected(null)}><button className="absolute right-5 top-5 grid size-12 place-items-center rounded-full bg-white text-black" onClick={() => setSelected(null)} aria-label="Close image"><X/></button><img src={selected.src} alt={selected.alt} className="max-h-[85vh] max-w-full rounded-2xl object-contain" onClick={event => event.stopPropagation()}/></div>}
    </>
  );
}
