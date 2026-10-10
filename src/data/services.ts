import type { ImageProps } from "next/image";
import wave1 from "@/assets/images/services/wave-1.webp";
import wave2 from "@/assets/images/services/wave-2.webp";
import wave3 from "@/assets/images/services/wave-3.webp";
import collageStrategy from "@/assets/images/services/collage-strategy.webp";
import collageBrand from "@/assets/images/services/collage-brand.webp";
import collageCreative from "@/assets/images/services/collage-creative.webp";
import collageProduct from "@/assets/images/services/collage-product.webp";

export type Service = {
  id: string;
  title: string;
  tagline: string;
  bullets: string[];
  note?: string;
  collage: ImageProps["src"];
  collageAlt: string;
  background: ImageProps["src"];
};

export const services: Service[] = [
  {
    id: "strategy",
    title: "Strategy and Insight",
    tagline:
      "We interrogate what others assume. Then we build the brief behind the brief.",
    bullets: [
      "Brand strategy & positioning",
      "Messaging & tone of voice",
      "Audience & competitor research",
      "Workshops & creative sprints",
    ],
    collage: collageStrategy,
    collageAlt:
      "Strategy workshop boards with audience personas, research notes and brand documents",
    background: wave1,
  },
  {
    id: "brand-identity",
    title: "Brand & visual identity",
    tagline:
      "We build systems, not just logos. So you own the category, not just the conversation.",
    bullets: [
      "Brand identity & visual language",
      "Guidelines & naming",
      "Illustration & iconography",
      "Brand architecture & systems",
    ],
    collage: collageBrand,
    collageAlt:
      "Brand identity samples including colour palette, graphics and a presentation mockup",
    background: wave2,
  },
  {
    id: "product-digital",
    title: "Product & digital experience",
    tagline:
      "We design for humans and metrics. So users stay, engage, and come back.",
    bullets: [
      "UI/UX & website design",
      "Design systems & prototyping",
      "User research & testing",
      "Motion graphics & micro-interactions",
    ],
    collage: collageProduct,
    collageAlt:
      "Product design samples including app screens on a laptop, a typography specimen and brand colour swatches",
    background: wave3,
  },
  {
    id: "creative-production",
    title: "Creative & campaign production",
    tagline: "We turn attention into action. Then we prove it worked.",
    bullets: [
      "Campaign creative & social content",
      "Presentations & pitch decks",
      "Marketing collateral & ad creative",
    ],
    note: "psst.. Also, physical spaces. Because not everything happens on a screen experiential and spatial design for exhibitions, placemaking and branded environments, Just ask.",
    collage: collageCreative,
    collageAlt:
      "Campaign examples including a billboard, outdoor and digital ad mockups",
    background: wave1,
  },

];