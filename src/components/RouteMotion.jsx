import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const revealSelectors = [
  "section:not(:first-child) .eyebrow",
  "section:not(:first-child) .display-title",
  "section:not(:first-child) .service-card",
  "section:not(:first-child) article",
  "section:not(:first-child) figure",
  "section:not(:first-child) form",
  "section:not(:first-child) .contact-row",
  "section:not(:first-child) img"
].join(",");

export default function RouteMotion({ children }) {
  const location = useLocation();

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return undefined;

    const elements = [...document.querySelectorAll(revealSelectors)];
    const groups = new Map();

    elements.forEach((element) => {
      const group = element.closest(".grid, .columns-1");
      const siblings = groups.get(group) || [];
      siblings.push(element);
      groups.set(group, siblings);
    });

    groups.forEach((groupElements) => {
      groupElements.forEach((element, index) => {
        element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
      });
    });

    elements.forEach((element) => element.classList.add("reveal-pending"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="route-enter">
      {children}
    </div>
  );
}
