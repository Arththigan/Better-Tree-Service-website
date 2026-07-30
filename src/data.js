import { Axe, Leaf, Shovel, Siren, Sprout, Wind } from "lucide-react";

export const business = {
  name: "Better Tree Service",
  phoneDisplay: "(315) 660-7687",
  phone: "+13156607687",
  address: "5006 Aitchison Rd, Syracuse, NY 13215",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=5006+Aitchison+Rd+Syracuse+NY+13215"
};

export const images = {
  hero: "https://images.unsplash.com/photo-1754321860056-ca7254d5e7ac?auto=format&fit=crop&w=420&q=24&fm=avif",
  heroDesktop: "https://images.unsplash.com/photo-1754321860056-ca7254d5e7ac?auto=format&fit=crop&w=1400&q=52&fm=avif",
  climber: "https://images.pexels.com/photos/6218318/pexels-photo-6218318.jpeg?auto=compress&cs=tinysrgb&w=900",
  forest: "https://images.pexels.com/photos/11930042/pexels-photo-11930042.jpeg?auto=compress&cs=tinysrgb&w=900",
  canopy: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=70&fm=webp",
  tree: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=70&fm=webp",
  woods: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=70&fm=webp",
  logs: "https://images.pexels.com/photos/1629998/pexels-photo-1629998.jpeg?auto=compress&cs=tinysrgb&w=480",
  landscape: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=70&fm=webp",
  comparisonBefore: "https://labs.google/fx/api/og-image/shared/3ddcb1c4-0c89-4a1a-b66c-687b7716d040",
  comparisonAfter: "https://labs.google/fx/api/og-image/shared/ff562c7a-d718-4f1a-8b79-59129eecd1c8"
};

export const services = [
  {
    title: "Tree Removal",
    description: "Safe, controlled removal of hazardous, dead, or unwanted trees around your home and property.",
    icon: Axe,
    image: images.hero
  },
  {
    title: "Tree Trimming",
    description: "Thoughtful pruning that improves tree health, clearance, structure, and curb appeal.",
    icon: Leaf,
    image: images.climber
  },
  {
    title: "Stump Grinding",
    description: "Efficient stump and surface-root grinding to reclaim usable, clean yard space.",
    icon: Shovel,
    image: images.logs
  },
  {
    title: "Emergency Service",
    description: "Fast response for storm-damaged, fallen, split, or dangerously leaning trees.",
    icon: Siren,
    image: images.forest
  },
  {
    title: "Cabling & Support",
    description: "Targeted support systems that reduce stress on vulnerable limbs and tree unions.",
    icon: Wind,
    image: images.canopy
  },
  {
    title: "Tree Health Care",
    description: "Practical evaluations and care plans that help valuable trees thrive season after season.",
    icon: Sprout,
    image: images.tree
  }
];

export const gallery = [
  { src: images.hero, alt: "Professional arborist safely removing a mature tree", label: "Hazardous Tree Removal" },
  { src: images.climber, alt: "Arborist in safety equipment trimming a tree", label: "Canopy Pruning" },
  { src: images.forest, alt: "Tree worker operating professional equipment", label: "Technical Tree Work" },
  { src: images.logs, alt: "Freshly cut timber from a completed tree project", label: "Site Cleanup" },
  { src: images.canopy, alt: "Healthy green tree canopy", label: "Tree Health" },
  { src: images.woods, alt: "Well maintained woodland path", label: "Property Care" },
  { src: images.tree, alt: "Sunlight through a healthy mature tree", label: "Crown Maintenance" },
  { src: images.landscape, alt: "Beautifully maintained outdoor property", label: "Finished Property" }
];
