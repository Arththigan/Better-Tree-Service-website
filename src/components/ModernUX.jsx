import { useEffect, useRef, useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { business, images } from "../data";

export function SplitText({ text, className = "" }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, index) => (
        <span className="split-word-wrap" aria-hidden="true" key={`${word}-${index}`}>
          <span className="split-word" style={{ "--word-index": index }}>{word}</span>
        </span>
      ))}
    </span>
  );
}

function CountUp({ value, suffix = "" }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setCount(value);
      return undefined;
    }

    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const started = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - started) / 1200, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(value * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.45 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Stats() {
  const stats = [
    [6, "Core services", ""],
    [24, "Emergency response", "/7"],
    [100, "Property respect", "%"],
    [1, "Clear point of contact", ""]
  ];
  return (
    <div className="stats-grid">
      {stats.map(([value, label, suffix]) => (
        <div className="stat-item" key={label}>
          <strong><CountUp value={value} suffix={suffix}/></strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function BeforeAfter() {
  const [position, setPosition] = useState(52);
  return (
    <div className="comparison" style={{ "--comparison": `${position}%` }}>
      <img src={images.comparisonAfter} alt="Dense green forest shown in the after position" loading="lazy" />
      <div className="comparison-before">
        <img src={images.comparisonBefore} alt="Cleared land with cut trees shown in the before position" loading="lazy" />
      </div>
      <span className="comparison-label comparison-label-before">Before</span>
      <span className="comparison-label comparison-label-after">After</span>
      <div className="comparison-line" aria-hidden="true"><span>↔</span></div>
      <input
        aria-label="Compare property before and after tree care"
        type="range"
        min="8"
        max="92"
        value={position}
        onChange={(event) => setPosition(event.target.value)}
      />
    </div>
  );
}

export function Faq() {
  const [active, setActive] = useState(0);
  const items = [
    ["How do I know if a tree needs to be removed?", "Dead wood, major cracks, root failure, severe lean, trunk decay, or storm damage can indicate elevated risk. We assess the tree and surrounding targets before recommending removal."],
    ["Do you clean up branches and debris?", "Yes. Cleanup is planned as part of the project scope so your property is left organized and usable when the work is complete."],
    ["Can you help after a storm?", "Yes. Call directly for fallen trees, hanging limbs, split trunks, or trees threatening a structure. Keep a safe distance from damaged trees and utility lines."],
    ["Is trimming healthy for every tree?", "Correct pruning can improve structure, clearance, and health. Poor timing or excessive cutting can create stress, so recommendations should match the species and condition."],
    ["What happens to the stump after removal?", "Stump grinding can be included to reduce the stump below grade and make the area easier to restore or reuse."]
  ];
  return (
    <div className="faq-list">
      {items.map(([question, answer], index) => {
        const open = active === index;
        return (
          <article className={`faq-item ${open ? "open" : ""}`} key={question}>
            <button onClick={() => setActive(open ? -1 : index)} aria-expanded={open}>
              <span>{question}</span><ChevronDown />
            </button>
            <div className="faq-answer"><div><p>{answer}</p></div></div>
          </article>
        );
      })}
    </div>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const maximum = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(maximum > 0 ? (window.scrollY / maximum) * 100 : 0);
        document.documentElement.style.setProperty("--parallax", `${Math.min(window.scrollY * 0.08, 90)}px`);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />;
}

export function MobileCallBar() {
  return (
    <a className="mobile-call-bar" href={`tel:${business.phone}`}>
      <span className="call-pulse"><Phone size={18}/></span>
      <span><small>Need tree service?</small><strong>Call {business.phoneDisplay}</strong></span>
    </a>
  );
}
