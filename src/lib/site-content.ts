import storefront from "@/assets/storefront.jpg";
import productEarrings from "@/assets/product-earrings.jpg";
import productBowls from "@/assets/product-bowls.jpg";
import productHemp from "@/assets/product-hemp.jpg";
import productDzi from "@/assets/product-dzi.jpg";
import productPashmina from "@/assets/product-pashmina.jpg";
import productWood from "@/assets/product-wood.jpg";

export const navItems = [
  { label: "Home", to: "/" as const },
  { label: "Collection", to: "/collection" as const },
  { label: "Journal", to: "/journal" as const },
  { label: "House of Craft", to: "/house-of-craft" as const },
  { label: "Artisans", to: "/artisans" as const },
  { label: "Visit", to: "/visit" as const },
];

export const heroSlides = [
  {
    code: "Plate I",
    title: "The house at Bharatpur XII",
    note:
      "A narrow storefront staged like a living museum, where shawls, ritual brass and hemp weave are arranged as a procession rather than a shop window.",
    meta: "ESTD. 2026 · Open Everyday",
    image: storefront,
  },
  {
    code: "Plate II",
    title: "Adornment in color and stone",
    note:
      "Turquoise, coral and lapis are set against warm cloth like archival specimens, giving the jewelry room a ceremonial stillness.",
    meta: "Collection wing · Adornment",
    image: productEarrings,
  },
  {
    code: "Plate III",
    title: "Ritual sound in brass",
    note:
      "Hand-hammered singing bowls are shown with the quiet dignity of instruments waiting to be heard.",
    meta: "Collection wing · Resonance",
    image: productBowls,
  },
  {
    code: "Plate IV",
    title: "Hemp weave for everyday carrying",
    note:
      "Softly structured travel pouches and natural fibers bring the practical warmth of Nepali craft into the collection.",
    meta: "Collection wing · Hemp Atelier",
    image: productHemp,
  },
];

export const collectionRooms = [
  {
    numeral: "I",
    title: "Hemp Atelier",
    subtitle: "Travel pouches, tote bags and soft carriers",
    image: productHemp,
    summary:
      "Handwoven hemp pieces with quiet structure, earthy texture and practical beauty for daily ritual.",
  },
  {
    numeral: "II",
    title: "Adornment",
    subtitle: "Earrings, necklaces and small ceremonial details",
    image: productEarrings,
    summary:
      "Jewelry shaped by vibrant stone inlay, floral motifs and the color language of Himalayan ornament.",
  },
  {
    numeral: "III",
    title: "Pashmina Room",
    subtitle: "Shawls, wraps and layered softness",
    image: productPashmina,
    summary:
      "Light-catching folds of pashmina in muted jewel tones, arranged like textile studies.",
  },
  {
    numeral: "IV",
    title: "Resonance",
    subtitle: "Singing bowls, bells and meditative brass",
    image: productBowls,
    summary:
      "Ritual brassware chosen for tone, engraving and the calm presence of hand-finished metal.",
  },
  {
    numeral: "V",
    title: "Dzi Cabinet",
    subtitle: "Symbolic beads, cords and protective talismans",
    image: productDzi,
    summary:
      "Dzi-inspired bead pieces presented as amulets of pattern, contrast and cultural memory.",
  },
  {
    numeral: "VI",
    title: "Carving Study",
    subtitle: "Wood figures, boxes and small altar objects",
    image: productWood,
    summary:
      "Carved wood objects with serene silhouettes and cabinet-like detailing for contemplative interiors.",
  },
];

export const journalEntries = [
  {
    numeral: "01",
    title: "Why the storefront feels like a gallery",
    excerpt:
      "The entrance at People's Choice is composed like a threshold exhibition — layered, lit and slow to reveal itself.",
    image: storefront,
  },
  {
    numeral: "02",
    title: "Hemp's tactile elegance",
    excerpt:
      "The beauty of hemp lies in restraint: its weave ages well, holds shape and carries the visible memory of the loom.",
    image: productHemp,
  },
  {
    numeral: "03",
    title: "Objects that sound as beautiful as they look",
    excerpt:
      "Singing bowls are chosen not only for decoration but for tone, resonance and the mark of the maker's hand.",
    image: productBowls,
  },
];

export const materialNotes = [
  "Natural hemp weave from Nepali makers",
  "Turquoise, coral and lapis-inspired stonework",
  "Soft pashmina in seasonal color stories",
  "Brass ritual objects and hand-carved wood",
];

export const artisanStudios = [
  {
    title: "Hemp Weavers",
    region: "Chitwan & surrounding valleys",
    description:
      "Practical objects are built from fiber, patience and repeated hand-finishing rather than factory uniformity.",
  },
  {
    title: "Metalworkers",
    region: "Kathmandu valley traditions",
    description:
      "Bowls and ritual brassware are valued for sound, weight and the soft irregularity of hand-hammered surfaces.",
  },
  {
    title: "Textile Finishers",
    region: "House-selected weaving partners",
    description:
      "Shawls are chosen for drape, warmth and a color register that feels lived-in rather than loud.",
  },
  {
    title: "Wood Carvers",
    region: "Small workshop collections",
    description:
      "Compact altar objects and carved figures bring warmth, devotion and cabinet-level craftsmanship into the home.",
  },
];

export const visitFacts = [
  { label: "Address", value: "Bharatpur XII, Chitwan, Nepal" },
  { label: "Open", value: "Everyday" },
  { label: "Founded", value: "ESTD. 2026" },
  { label: "Experience", value: "Walk-in gallery shop" },
];

export const images = {
  storefront,
  productEarrings,
  productBowls,
  productHemp,
  productDzi,
  productPashmina,
  productWood,
};