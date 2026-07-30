import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useOutlet } from "react-router-dom";
import { ArrowUpRight, MapPin, Menu, Phone, TreePine, X } from "lucide-react";
import { business, services } from "../data";
import RouteMotion from "./RouteMotion";
import { MobileCallBar, ScrollProgress } from "./ModernUX";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/gallery", "Gallery"],
  ["/contact", "Contact"]
];

function BrandLogo({ footer = false }) {
  return (
    <span className={`brand-logo-frame ${footer ? "brand-logo-footer" : ""}`}>
      <img
        src="/images/better-tree-service-logo.png"
        alt="Better Tree Service — Established 2023"
        width="896"
        height="1200"
      />
    </span>
  );
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const outlet = useOutlet();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 28);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-forest-900 text-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-leaf-400 focus:p-3 focus:text-forest-950">Skip to content</a>
      <ScrollProgress />
      <header className={`site-header fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-forest-950/90 backdrop-blur-xl ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner shell flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-center gap-3" aria-label="Better Tree Service home">
            <BrandLogo />
            <span className="hidden font-display text-xl font-semibold uppercase leading-none tracking-wide sm:block xl:hidden">Better <span className="text-leaf-400">Tree</span><br/><span className="text-xs tracking-[.22em] text-white/60">Service</span></span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {links.map(([to, label]) => <NavLink key={to} to={to} className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>{label}</NavLink>)}
          </nav>

          <a href={`tel:${business.phone}`} className="btn-primary hidden xl:inline-flex"><Phone size={18}/>{business.phoneDisplay}</a>
          <button className="grid size-11 place-items-center rounded-full border border-white/15 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
        </div>

        {open && (
          <nav className="border-t border-white/10 bg-forest-950 px-5 py-6 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-2">
              {links.map(([to, label]) => <NavLink key={to} to={to} className={({isActive}) => `rounded-xl px-4 py-3 text-lg font-semibold ${isActive ? "bg-leaf-400 text-forest-950" : "text-white/80"}`}>{label}</NavLink>)}
              <a href={`tel:${business.phone}`} className="btn-primary mt-3 justify-center"><Phone size={18}/> Call {business.phoneDisplay}</a>
            </div>
          </nav>
        )}
      </header>

      <main id="main" className="pt-20"><RouteMotion>{outlet}</RouteMotion></main>

      <section className="shell py-16">
        <div className="relative overflow-hidden rounded-[2rem] bg-leaf-400 px-6 py-12 text-forest-950 md:px-12 lg:flex lg:items-center lg:justify-between">
          <TreePine className="absolute -right-8 -top-14 size-56 text-forest-950/10" />
          <div className="relative max-w-2xl">
            <p className="eyebrow !border-forest-950/20 !text-forest-950">Get in touch</p>
            <h2 className="display-title mt-5 !text-4xl md:!text-6xl">Ready for safer, healthier trees?</h2>
          </div>
          <div className="relative mt-8 flex flex-wrap gap-3 lg:mt-0">
            <a className="btn-dark" href={`tel:${business.phone}`}><Phone size={18}/> Call Now</a>
            <Link className="btn-outline-dark" to="/contact">Request a Quote <ArrowUpRight size={18}/></Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-forest-950">
        <div className="shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex" aria-label="Better Tree Service home"><BrandLogo footer /></Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/55">Reliable tree care focused on safety, clean work, and the long-term health of Syracuse properties.</p>
          </div>
          <div>
            <h3 className="footer-title">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/55">{services.slice(0, 5).map(item => <li key={item.title}><Link className="hover:text-leaf-400" to="/services">{item.title}</Link></li>)}</ul>
          </div>
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/55">{links.map(([to,label]) => <li key={to}><Link className="hover:text-leaf-400" to={to}>{label}</Link></li>)}</ul>
          </div>
          <div>
            <h3 className="footer-title">Contact</h3>
            <a className="mt-5 flex gap-3 text-sm text-white/55 hover:text-leaf-400" href={`tel:${business.phone}`}><Phone size={18}/>{business.phoneDisplay}</a>
            <a className="mt-4 flex gap-3 text-sm leading-6 text-white/55 hover:text-leaf-400" href={business.mapUrl} target="_blank" rel="noreferrer"><MapPin className="shrink-0" size={18}/>{business.address}</a>
          </div>
        </div>
        <div className="shell flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center text-xs text-white/40 sm:flex-row sm:text-left">
          <span>© 2026 Better Tree Service. All rights reserved.</span>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Legal">
            <Link className="transition hover:text-leaf-400" to="/privacy-policy">Privacy Policy</Link>
            <Link className="transition hover:text-leaf-400" to="/terms-and-conditions">Terms & Conditions</Link>
          </nav>
        </div>
      </footer>
      <MobileCallBar />
    </div>
  );
}
