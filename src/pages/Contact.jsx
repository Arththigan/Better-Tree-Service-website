import { Clock3, MapPin, Phone } from "lucide-react";
import Seo from "../components/Seo";
import { PageHero, SectionHeading } from "../components/Sections";
import { business, images } from "../data";

export default function Contact() {
  return (
    <>
      <Seo title="Contact Better Tree Service | Free Estimate in Syracuse, NY" description="Request a tree service estimate in Syracuse, NY. Call Better Tree Service or send details about your tree removal, trimming or stump project." path="/contact" />
      <PageHero eyebrow="Contact us" title="Let’s talk about your trees." text="Tell us what you are seeing and what you would like to accomplish. We will help you plan the safest, most practical next step." image={images.landscape} />
      <section className="shell py-24">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Request an estimate" title="Start with a quick conversation." text="For urgent hazards, call us directly. For planned work, share a few project details using the form." />
            <div className="mt-9 space-y-4">
              <a href={`tel:${business.phone}`} className="contact-row"><span><Phone/></span><div><small>Call us</small><strong>{business.phoneDisplay}</strong></div></a>
              <a href={business.mapUrl} target="_blank" rel="noreferrer" className="contact-row"><span><MapPin/></span><div><small>Find us</small><strong>{business.address}</strong></div></a>
              <div className="contact-row"><span><Clock3/></span><div><small>Service hours</small><strong>Mon–Sat, 7:00 AM–6:00 PM</strong></div></div>
            </div>
          </div>
          <div className="contact-form-embed">
            <iframe
              src="https://link.kdlead.com/widget/form/cx5VXriqqIQp8DBXYreW"
              id="inline-cx5VXriqqIQp8DBXYreW"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Better Tree Service"
              data-height="883"
              data-layout-iframe-id="inline-cx5VXriqqIQp8DBXYreW"
              data-form-id="cx5VXriqqIQp8DBXYreW"
              title="Better Tree Service"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
