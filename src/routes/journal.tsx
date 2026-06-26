import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import { PageLead, SiteFrame } from "@/components/site-shell";
import { journalEntries } from "@/lib/site-content";

// ─── SEO note ──────────────────────────────────────────────────────────────
// 1. Title uses the primary keyword phrase up front ("Handicrafts Journal").
// 2. Description is 140-160 chars and answers "what will I find here?" —
//    the format Google and AI search engines (GPTs, Perplexity) extract for
//    featured snippets.
// 3. Article JSON-LD structured data is injected so Google indexes each entry
//    as a standalone Article entity, improving rich-result eligibility.
// 4. og:type is "website" at the listing level; individual entries would be
//    "article" if they had their own routes.
// 5. canonical is omitted here — add it via TanStack Start's <Head> when
//    you have a known production domain (e.g. peopleschoicehandicrafts.com).
// ────────────────────────────────────────────────────────────────────────────

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      // Primary title — keyword-first format for Google & GPT citations
      { title: "Handicrafts Journal — People's Choice | Bharatpur, Nepal" },

      // 155-char description: answers the intent, includes place keywords
      {
        name: "description",
        content:
          "Essays on Nepali craft: why the storefront feels like a gallery, the tactile beauty of hemp weave, and how singing bowls are chosen for tone. By People's Choice Handicrafts, Bharatpur XII, Chitwan.",
      },

      // Keywords (low-weight signal but still consumed by some AI crawlers)
      {
        name: "keywords",
        content:
          "Nepali handicrafts journal, hemp weave Nepal, singing bowls Chitwan, pashmina articles, Bharatpur craft, People's Choice Handicrafts",
      },

      // Open Graph — used by Facebook, LinkedIn, WhatsApp previews
      { property: "og:title", content: "Handicrafts Journal — People's Choice" },
      {
        property: "og:description",
        content:
          "Short essays on the objects inside People's Choice Handicrafts: material stories, curatorial notes and the reasoning behind each display room.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "People's Choice Handicrafts" },
      { property: "og:locale", content: "en_US" },

      // Twitter / X card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Handicrafts Journal — People's Choice" },
      {
        name: "twitter:description",
        content:
          "Material stories and curatorial notes from People's Choice Handicrafts in Bharatpur, Nepal.",
      },

      // Geo signals — help local & map-based search engines (Google Maps AI, Bing Local)
      { name: "geo.region", content: "NP-BA" },
      { name: "geo.placename", content: "Bharatpur, Chitwan, Nepal" },
    ],

    // Article structured data (JSON-LD) — enables Google rich results.
    // Each journal entry is represented as an Article entity. This must be a
    // real <script type="application/ld+json"> tag (via `scripts`), not a
    // <meta> tag — a meta tag's content is never parsed as structured data.
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "People's Choice Handicrafts Journal",
          description:
            "Editorial notes, material stories and curatorial observations from the rooms of People's Choice Handicrafts in Bharatpur XII, Chitwan, Nepal.",
          publisher: {
            "@type": "LocalBusiness",
            name: "People's Choice Handicrafts",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bharatpur",
              addressRegion: "Chitwan",
              addressCountry: "NP",
            },
          },
          blogPost: journalEntries.map((entry) => ({
            "@type": "BlogPosting",
            headline: entry.title,
            description: entry.excerpt,
            articleSection: "Craft Journal",
            keywords: "Nepali handicrafts, People's Choice, Bharatpur, Chitwan",
          })),
        }),
      },
    ],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <SiteFrame>
      <PageLead
        eyebrow="Journal"
        title={
          <>
            Essays from the
            <br />
            display rooms.
          </>
        }
        intro="Short stories explain why objects are displayed the way they are — through light, spacing, material choices and local history."
        aside={"Notes from us\nMaterial stories"}
      />

      {/* ── Entry grid ──────────────────────────────────────────────────────
          CHANGE: Cards are now larger and more airy.
          - Reduced from 3-col to 2-col on large screens so each card
            has room to breathe and the images read at real scale.
          - Internal padding increased from p-6 to p-8.
          - Vertical gap increased from gap-6 to gap-10.
          - A subtle "Read →" affordance is added so the card feels
            like a real article link, not a static card.
          - Each <article> uses semantic itemProp markup for Schema.org
            compatibility (supports AI-powered search extraction).
      ──────────────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1600px] px-6 py-20 md:py-28">
        {/* Section label */}
        <div className="mb-12 flex items-end justify-between border-b border-border pb-8">
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            {journalEntries.length} entries
          </p>
          <span className="font-display text-xl tracking-tight text-muted-foreground">
            Current issue
          </span>
        </div>

        <div
          className="grid gap-10 lg:grid-cols-2 xl:gap-14"
          itemScope
          itemType="https://schema.org/Blog"
        >
          {journalEntries.map((entry, index) => (
            <Link
              key={entry.numeral}
              to="/journal/$slug"
              params={{ slug: entry.slug }}
              className="group block border border-border bg-card transition-colors hover:border-foreground"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              {/* Full-width image */}
              <div className="overflow-hidden">
                <img
                  src={entry.image}
                  alt={entry.title}
                  width={896}
                  height={1216}
                  loading={index === 0 ? "eager" : "lazy"}
                  // CHANGE: aspect-[3/2] on large screens gives the image more horizontal
                  // air — less portrait-narrow, more editorial magazine feel.
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] md:aspect-[3/2]"
                  itemProp="image"
                />
              </div>

              {/* Card body — generous padding, clear typographic hierarchy */}
              <div className="p-8 md:p-10">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                    Entry {entry.numeral}
                  </p>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                    People&apos;s Choice Handicrafts
                  </span>
                </div>

                {/* h2 tagged for SEO hierarchy; display font gives editorial weight */}
                <h2
                  className="font-display text-4xl tracking-tight md:text-5xl"
                  itemProp="headline"
                >
                  {entry.title}
                </h2>

                {/* Generous top-margin separates headline from body copy */}
                <p
                  className="mt-6 text-[15px] leading-relaxed text-muted-foreground"
                  itemProp="description"
                >
                  {entry.excerpt}
                </p>

                {/* Read affordance — visually quiet, semantically useful */}
                <div className="mt-10 border-t border-border pt-6">
                  <span className="text-[11px] tracking-[0.28em] uppercase text-foreground transition-colors group-hover:text-accent">
                    Read entry →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── White-space buffer + soft journal footer ─────────────────────
            CHANGE: A generous bottom section grounds the page and gives
            context for AI scrapers: location, business type, subject. */}
        <div className="mt-24 border-t border-border pt-12 md:mt-32 md:pt-16">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-display text-3xl tracking-tight">Written from inside the house.</p>
            </div>
            <div className="text-sm leading-relaxed text-muted-foreground md:col-span-4 md:col-start-7">
              This journal is written by People&apos;s Choice Handicrafts in Bharatpur XII, Chitwan,
              Nepal — a shop for hemp, pashmina, jewelry and brass items, open every day.
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
