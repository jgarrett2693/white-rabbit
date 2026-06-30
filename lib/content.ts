/**
 * Editorial content for the site. Kept in one place so copy can be reviewed and
 * replaced without touching layout code. All copy is intentionally restrained,
 * payment-platform-safe, and free of explicit language.
 */

export type Service = {
  slug: string;
  name: string;
  summary: string;
  forWhom: string;
  detail: string;
};

export const services: Service[] = [
  {
    slug: "production",
    name: "Production",
    summary:
      "Visual direction, content, and creative concepts developed with cinematic restraint.",
    forWhom: "Brands and individuals who want a considered visual presence.",
    detail:
      "From concept to final delivery, we shape photography, film, and creative direction into a coherent, premium body of work."
  },
  {
    slug: "consulting",
    name: "Consulting",
    summary:
      "Strategic guidance for brand, hospitality, property, and client experience.",
    forWhom: "Founders and teams refining how they are seen and how they operate.",
    detail:
      "We work closely and quietly, translating ambition into clear positioning, structure, and a plan that holds up over time."
  },
  {
    slug: "wellness",
    name: "Wellness",
    summary:
      "Private, well-considered wellness offerings designed around discretion and calm.",
    forWhom: "Clients seeking restorative experiences handled with care.",
    detail:
      "Curated wellness programming arranged with trusted partners, with privacy and comfort treated as the priority throughout."
  },
  {
    slug: "property-management",
    name: "Property Management",
    summary:
      "Quiet, attentive oversight of distinctive properties and short-stay residences.",
    forWhom: "Owners who value reliability and a refined guest experience.",
    detail:
      "We manage presentation, standards, and day-to-day care so a property performs and presents at its best."
  },
  {
    slug: "brand-collaborations",
    name: "Brand Collaborations",
    summary:
      "Selective partnerships that align with the house's tone and audience.",
    forWhom: "Brands looking for a considered, mutually elevating collaboration.",
    detail:
      "We pursue a small number of partnerships each year, chosen for fit, taste, and a shared standard of execution."
  },
  {
    slug: "bespoke-experiences",
    name: "Bespoke Experiences",
    summary:
      "Private, curated moments arranged end to end with concierge-level attention.",
    forWhom: "Clients who want something singular, planned with discretion.",
    detail:
      "Tell us the intention and the constraints. We design, arrange, and quietly manage every detail of the experience."
  }
];

export type Project = {
  slug: string;
  title: string;
  category: "Production" | "Properties" | "Brand" | "Experiences" | "Consulting";
  year: string;
  summary: string;
  image: string;
  overview: string;
  scope: string[];
};

export const portfolioCategories = [
  "All",
  "Production",
  "Properties",
  "Brand",
  "Experiences",
  "Consulting"
] as const;

export const projects: Project[] = [
  {
    slug: "nocturne-film-series",
    title: "Nocturne Film Series",
    category: "Production",
    year: "2025",
    summary: "A three-part short film series exploring light, restraint, and place.",
    image: "/assets/scene-home.png",
    overview:
      "A cinematic series built around a single visual language: deep shadow, warm light, and patient framing. We developed the concept, directed production, and delivered a cohesive set of films and stills.",
    scope: ["Creative direction", "Film production", "Post & color", "Stills"]
  },
  {
    slug: "harbor-residence",
    title: "Harbor Residence",
    category: "Properties",
    year: "2025",
    summary: "Presentation and standards for a private waterfront residence.",
    image: "/assets/scene-moodboard.png",
    overview:
      "We refined the presentation of a distinctive residence and established a quiet operating standard for guest stays — from arrival to departure.",
    scope: ["Property presentation", "Standards & care", "Guest experience"]
  },
  {
    slug: "maison-noir-identity",
    title: "Maison Noir Identity",
    category: "Brand",
    year: "2024",
    summary: "A restrained identity system for a private hospitality brand.",
    image: "/assets/scene-brand.png",
    overview:
      "An identity built on negative space and a single accent. We shaped the system, tone, and core assets, then guided its rollout across touchpoints.",
    scope: ["Positioning", "Identity system", "Art direction"]
  },
  {
    slug: "midnight-table",
    title: "The Midnight Table",
    category: "Experiences",
    year: "2024",
    summary: "A private, invitation-only dining experience designed end to end.",
    image: "/assets/scene-system.png",
    overview:
      "A single evening arranged with discretion — location, atmosphere, and service designed as one. Every detail was planned and quietly managed.",
    scope: ["Concept", "Curation", "On-night management"]
  },
  {
    slug: "atlas-advisory",
    title: "Atlas Advisory",
    category: "Consulting",
    year: "2024",
    summary: "Positioning and structure for a founder-led hospitality venture.",
    image: "/assets/scene-system.png",
    overview:
      "We worked closely with the founders to clarify positioning, define structure, and build a plan the team could execute with confidence.",
    scope: ["Brand strategy", "Operating structure", "Roadmap"]
  },
  {
    slug: "still-water-retreat",
    title: "Still Water Retreat",
    category: "Experiences",
    year: "2023",
    summary: "A restorative private retreat arranged with trusted partners.",
    image: "/assets/scene-moodboard.png",
    overview:
      "A quiet, well-considered retreat designed around rest and privacy, arranged in full and managed discreetly from start to finish.",
    scope: ["Curation", "Partner coordination", "Discreet management"]
  }
];

export const values = [
  {
    name: "Discretion",
    body: "We protect privacy as a default, not a feature. What is shared with us stays with us."
  },
  {
    name: "Precision",
    body: "Details are not an afterthought. They are the work."
  },
  {
    name: "Atmosphere",
    body: "We design how something feels as carefully as how it functions."
  },
  {
    name: "Taste",
    body: "Restraint over noise. A clear point of view, quietly held."
  },
  {
    name: "Execution",
    body: "Ideas matter only when they are delivered. We finish what we begin."
  }
];

export const shopCategories = [
  {
    name: "Apparel",
    body: "Considered essentials carrying the White Rabbit mark."
  },
  {
    name: "Candles",
    body: "Low light and quiet scent for considered spaces."
  },
  {
    name: "Drinkware",
    body: "Weighted, understated pieces for the table."
  },
  {
    name: "Limited Objects",
    body: "Small, numbered releases. Final sale when marked."
  }
];

export const experiences = [
  {
    name: "Private Curation",
    body: "Singular moments arranged end to end, from concept to quiet management on the night."
  },
  {
    name: "Wellness & Rest",
    body: "Restorative programming arranged with trusted partners, with privacy treated as the priority."
  },
  {
    name: "Hospitality",
    body: "Considered hosting for intimate gatherings, dinners, and stays."
  },
  {
    name: "Concierge Requests",
    body: "Bespoke requests handled with discretion and attention to every detail."
  }
];
