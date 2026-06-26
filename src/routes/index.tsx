import { Link, createFileRoute } from "@tanstack/react-router";

import {
  EditorialCard,
  MuseumHeroCarousel,
  SectionNavStrip,
  SiteFrame,
} from "@/components/site-shell";
import { collectionRooms, images, journalEntries, materialNotes } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      // Keyword-first title — primary search intent first
      { title: "People's Choice Handicrafts — Nepali Craft, Bharatpur, Chitwan" },
      {
        name: "description",
        content:
          "People's Choice Handicrafts in Bharatpur XII, Chitwan, Nepal. A museum-style shop of hemp bags, pashmina shawls, singing bowls, dzi beads and jewelry. Open everyday.",
      },
      {
        name: "keywords",
        content:
          "Nepal handicrafts, hemp bags Nepal, pashmina Chitwan, singing bowls Nepal, Bharatpur shop",
      },
      { property: "og:title", content: "People's Choice Handicrafts — Bharatpur, Nepal" },
      {
        property: "og:description",
        content:
          "A museum-style shop of Nepali hemp, pashmina, jewelry and ritual objects in Bharatpur XII, Chitwan.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "People's Choice Handicrafts" },
      { name: "geo.region", content: "NP-BA" },
      { name: "geo.placename", content: "Bharatpur, Chitwan, Nepal" },
    ],
    // JSON-LD must be a real <script type="application/ld+json"> tag, not a
    // <meta> tag (a meta tag's content is never parsed as structured data,
    // so this block was previously invisible to Google entirely).
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "People's Choice Handicrafts",
          description:
            "A museum-style shop of Nepali hemp, pashmina, jewelry and ritual objects in Bharatpur XII, Chitwan.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bharatpur",
            addressRegion: "Chitwan",
            addressCountry: "NP",
          },
          openingHours: "Mo-Su",
          foundingDate: "2026",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteFrame>
      {/* Hero carousel — redesigned in site-shell.tsx */}
      <MuseumHeroCarousel />

      <SectionNavStrip
        items={[
          { label: "Collection", to: "/collection" },
          { label: "Journal", to: "/journal", align: "center" },
          { label: "House of Craft", to: "/house-of-craft", align: "center" },
          { label: "Artisans", to: "/artisans", align: "center" },
          { label: "Visit", to: "/visit", align: "right" },
        ]}
      />

      {/* ── Curatorial introduction ───────────────────────────────────────────
          CHANGE: py-16 → py-24 md:py-32 for a much more spacious feel.
          The headline and body copy are vertically centred within the grid
          rather than sitting at the top of their cells.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="mx-auto grid max-w-[1600px] gap-10 px-6 py-24 md:grid-cols-12 md:items-center md:py-32">
        <div className="md:col-span-5">
          <p className="mb-6 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            A note from us — Home collection
          </p>
          <h2 className="font-display text-6xl leading-[0.95] tracking-tight md:text-7xl">
            Craft chosen
            <br />
            with care.
          </h2>
          <p className="mt-4 text-sm tracking-[0.18em] uppercase text-muted-foreground">
            People&apos;s Choice Handicrafts
          </p>
        </div>

        <div className="text-[15px] leading-relaxed text-foreground/85 md:col-span-4 md:col-start-7">
          <p>
            People&apos;s Choice is arranged like a small museum of useful, beautiful things. Hemp
            bags are shown like design pieces. Earrings are shown like small treasures. Singing
            bowls are presented with care, like real instruments.
          </p>
          <p className="mt-5">
            Each room in this shop is planned with care, not just filled with stock. This includes
            our home page, full collection, artisan notes, journal and visit information.
          </p>
          <Link
            to="/collection"
            className="mt-10 inline-flex items-center gap-3 border-b border-foreground pb-1 text-[11px] tracking-[0.3em] uppercase hover:text-accent"
          >
            Enter the collection →
          </Link>
        </div>

        <div className="md:col-span-2 md:col-start-11 md:text-right">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Bharatpur XII
            <br />
            ESTD. 2026
            <br />
            Open Everyday
          </div>
        </div>
      </section>

      {/* ── Index of rooms ───────────────────────────────────────────────── */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:py-24">
          <div className="mb-12 flex items-end justify-between border-b border-border pb-8">
            <h2 className="font-display text-3xl tracking-tight">Index of rooms</h2>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Six rooms · One consistent house
            </span>
          </div>
          <ol className="divide-y divide-border">
            {collectionRooms.map((room) => (
              <li
                key={room.numeral}
                className="group grid gap-5 py-6 md:grid-cols-12 md:items-baseline"
              >
                <span className="font-mono text-xs text-muted-foreground md:col-span-1">
                  {room.numeral}
                </span>
                <span className="font-display text-2xl tracking-tight md:col-span-3">
                  {room.title}
                </span>
                <span className="text-sm text-muted-foreground md:col-span-5">{room.subtitle}</span>
                <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground md:col-span-2">
                  Available now
                </span>
                <span className="text-foreground/70 transition-transform group-hover:translate-x-1 md:col-span-1 md:text-right">
                  →
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Highlights from the collection ───────────────────────────────── */}
      <section className="mx-auto max-w-[1600px] px-6 py-20 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-border pb-8">
          <h2 className="font-display text-4xl tracking-tight">Highlights from the collection</h2>
          <Link
            to="/collection"
            className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            View all rooms
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <EditorialCard
            image={images.productEarrings}
            numeral="II"
            title="Adornment"
            body="Turquoise, coral and lapis-style jewelry, displayed neatly and carefully, like in a museum."
          />
          <EditorialCard
            image={images.productBowls}
            numeral="IV"
            title="Resonance"
            body="A room full of singing bowls and bells. The brass shines softly in the light."
          />
          <EditorialCard
            image={images.productPashmina}
            numeral="III"
            title="Pashmina Room"
            body="Soft pashmina shawls in rose, yellow, cream and indigo, chosen for their color, feel and warmth."
          />
        </div>
      </section>

      {/* ── Material register ─────────────────────────────────────────────── */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Our materials
            </p>
            <h2 className="mt-5 font-display text-4xl tracking-tight">
              This shop is built around touch, sound and tradition.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 md:self-center">
            <ul className="divide-y divide-border border-y border-border">
              {materialNotes.map((note) => (
                <li
                  key={note}
                  className="py-5 text-sm tracking-[0.12em] uppercase text-foreground/80"
                >
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── From the journal ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1600px] px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              From the journal
            </p>
            <h2 className="mt-5 font-display text-5xl tracking-tight">
              Notes from the collection rooms.
            </h2>
            <Link
              to="/journal"
              className="mt-10 inline-flex items-center gap-3 border-b border-foreground pb-1 text-[11px] tracking-[0.28em] uppercase hover:text-accent"
            >
              All journal entries →
            </Link>
          </div>
          <div className="grid gap-6 md:col-span-8 md:col-start-5 md:grid-cols-3">
            {journalEntries.map((entry) => (
              <Link
                key={entry.numeral}
                to="/journal/$slug"
                params={{ slug: entry.slug }}
                className="group block border border-border bg-secondary/30 p-6 transition-colors hover:border-foreground"
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  {entry.numeral}
                </p>
                <h3 className="mt-4 font-display text-2xl tracking-tight">{entry.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {entry.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
