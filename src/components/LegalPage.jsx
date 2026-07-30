import Seo from "./Seo";

export default function LegalPage({ title, description, path, intro, sections }) {
  return (
    <>
      <Seo title={`${title} | Better Tree Service`} description={description} path={path} />
      <section className="border-b border-white/10 bg-forest-950">
        <div className="shell py-20 md:py-28">
          <p className="eyebrow">Legal information</p>
          <h1 className="display-title mt-6 !text-5xl md:!text-7xl">{title}</h1>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[.12em] text-leaf-400">Effective Date: January 19, 2025 &nbsp;|&nbsp; Last Updated: July 9, 2026</p>
          <p className="mt-8 max-w-3xl text-base leading-8 text-white/60">{intro}</p>
        </div>
      </section>
      <section className="shell py-20">
        <div className="legal-content">
          {sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
              {section.subsections?.map((subsection) => (
                <div className="legal-subsection" key={subsection.title}>
                  <h3>{subsection.title}</h3>
                  {subsection.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {subsection.items && <ul>{subsection.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
