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
    note: "Our shop is set up like a small museum. Shawls, brass pieces and hemp weaves are placed in a clear order, not packed together like an ordinary store.",
    meta: "ESTD. 2026 · Open Everyday",
    image: storefront,
  },
  {
    code: "Plate II",
    title: "Adornment in color and stone",
    note: "Turquoise, coral and lapis stones are placed on warm cloth, like pieces in a museum case. This gives the jewelry room a calm, special feeling.",
    meta: "Collection wing · Adornment",
    image: productEarrings,
  },
  {
    code: "Plate III",
    title: "Ritual sound in brass",
    note: "Hand-hammered singing bowls are displayed with care, like real instruments waiting to be played.",
    meta: "Collection wing · Resonance",
    image: productBowls,
  },
  {
    code: "Plate IV",
    title: "Hemp weave for everyday carrying",
    note: "Soft, well-made travel pouches made from natural hemp fiber show the warm, useful side of Nepali craft.",
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
    summary: "Hand-woven hemp bags and pouches. Strong, simple and useful for everyday life.",
  },
  {
    numeral: "II",
    title: "Adornment",
    subtitle: "Earrings, necklaces and other small jewelry",
    image: productEarrings,
    summary:
      "Jewelry with bright stones and flower patterns, made in the traditional Himalayan style.",
  },
  {
    numeral: "III",
    title: "Pashmina Room",
    subtitle: "Shawls and soft wraps",
    image: productPashmina,
    summary: "Soft pashmina shawls in gentle colors. Light and warm, good for any season.",
  },
  {
    numeral: "IV",
    title: "Resonance",
    subtitle: "Singing bowls, bells and brass for meditation",
    image: productBowls,
    summary:
      "Brass singing bowls and bells, chosen for their sound, design and careful hand-finishing.",
  },
  {
    numeral: "V",
    title: "Dzi Cabinet",
    subtitle: "Symbolic beads, cords and protective charms",
    image: productDzi,
    summary:
      "Dzi-style beads believed to bring protection and good luck. Each one has its own pattern and meaning.",
  },
  {
    numeral: "VI",
    title: "Carving Study",
    subtitle: "Wood figures, boxes and small altar objects",
    image: productWood,
    summary:
      "Hand-carved wooden figures and boxes. Simple shapes and fine detail, good for a calm home.",
  },
];

export const journalEntries = [
  {
    numeral: "01",
    slug: "storefront-gallery",
    title: "Why the storefront feels like a gallery",
    excerpt:
      "When you walk into People's Choice, it feels like stepping into a small gallery. The light, the layout and the slow reveal of each shelf are all done on purpose.",
    image: storefront,
    body: [
      "When you walk into People's Choice, it feels different from a normal shop. The light is soft. The shelves are spaced out. Each object has room to be seen on its own.",
      "This is on purpose. Instead of filling every shelf with as much stock as possible, we leave space around each piece. A hemp bag, a brass bowl, a pashmina shawl — each one gets a small stage of its own.",
      "We did this because the objects in this shop are made by hand, by real artisans in Nepal. A crowded shelf makes it hard to notice that. A calm, open layout gives each piece a chance to be looked at properly, the same way you would look at something in a small museum.",
      "So when you step through our door, take your time. Walk slowly. The shop is built for that.",
    ],
  },
  {
    numeral: "02",
    slug: "hemp-simple-beauty",
    title: "The simple beauty of hemp",
    excerpt:
      "Hemp doesn't need decoration to look good. Its weave gets better with age, holds its shape well and still shows the pattern of the hand loom.",
    image: productHemp,
    body: [
      "Hemp is one of the simplest materials we sell, and that is exactly why we love it. It doesn't need bright colors or extra decoration. The weave itself is already beautiful.",
      "Each hemp bag or pouch in our shop is made on a hand loom, by hand, thread by thread. If you look closely, you can still see the pattern of the loom in the fabric. No two pieces are exactly the same.",
      "Hemp also gets better with age. It holds its shape, it softens with use, and it lasts for years. This is part of why Nepali makers have used it for so long — it is strong, simple and honest material.",
      "We keep our hemp room simple too. No loud colors, no extra display. Just the bags, the pouches, and the natural texture of the fiber, given space to speak for itself.",
    ],
  },
  {
    numeral: "03",
    slug: "singing-bowls-sound",
    title: "Objects that sound as beautiful as they look",
    excerpt:
      "We choose our singing bowls not only for how they look, but for how they sound. Each one carries the mark of the artisan who made it.",
    image: productBowls,
    body: [
      "Most shops choose singing bowls and bells based on how they look on a shelf. We do something different. Before we decide to sell a bowl, someone in our team strikes it and listens.",
      "A good singing bowl has a clear, steady tone that lasts a few seconds after it is struck. That sound comes from the metal, the shape and the way it was hand-hammered. You cannot get that sound from a machine-made copy.",
      "Every bowl and bell in our Resonance room is chosen this way. We look at the engraving, we check the weight in the hand, and most importantly, we listen to the sound it makes.",
      "When you visit, we encourage you to do the same. Pick up a bowl. Strike it gently. Listen. That is the best way to understand why we chose it.",
    ],
  },
];

export const materialNotes = [
  "Natural hemp weave from Nepali makers",
  "Turquoise, coral and lapis stones",
  "Soft pashmina in colors for every season",
  "Brass ritual objects and hand-carved wood",
];

export const artisanStudios = [
  {
    title: "Hemp Weavers",
    region: "Chitwan & surrounding valleys",
    description:
      "Hemp items are made by hand, with care and patience, not in a factory. Every piece is a little different.",
  },
  {
    title: "Metalworkers",
    region: "Kathmandu valley traditions",
    description:
      "Our brass bowls and bells are valued for their sound, their weight, and the small natural marks left by hand-hammering.",
  },
  {
    title: "Textile Finishers",
    region: "House-selected weaving partners",
    description:
      "We choose shawls for how they fall, how warm they are, and soft colors that feel comfortable, not flashy.",
  },
  {
    title: "Wood Carvers",
    region: "Small workshop collections",
    description:
      "Small wooden figures and prayer objects, carved with skill and care, made to bring warmth into any home.",
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
