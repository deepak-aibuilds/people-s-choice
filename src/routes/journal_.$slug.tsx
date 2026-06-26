import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { PageLead, SiteFrame } from "@/components/site-shell";
import { journalEntries } from "@/lib/site-content";

// NOTE on file name: "journal_.$slug.tsx" (underscore before the dot) is a
// non-nested route. Without the underscore, this file would nest inside
// journal.tsx — which renders a full listing page with no <Outlet />, so the
// entry content would never actually appear. The underscore makes this a
// standalone page at /journal/$slug instead.

function findEntry(slug: string) {
  return journalEntries.find((entry) => entry.slug === slug);
}

export const Route = createFileRoute("/journal_/$slug")({
  loader: ({ params }) => {
    const entry = findEntry(params.slug);
    if (!entry) {
      throw notFound();
    }
    return entry;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const entry = loaderData;
    return {
      meta: [
        { title: `${entry.title} — People's Choice Handicrafts Journal` },
        { name: "description", content: entry.excerpt },
        { property: "og:title", content: entry.title },
        { property: "og:description", content: entry.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: "People's Choice Handicrafts" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: entry.title,
            description: entry.excerpt,
            articleSection: "Craft Journal",
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
          }),
        },
      ],
    };
  },
  component: JournalEntryPage,
});

function JournalEntryPage() {
  const entry = Route.useLoaderData();

  return (
    <SiteFrame>
      <PageLead
        eyebrow={`Entry ${entry.numeral} — Journal`}
        title={entry.title}
        intro={entry.excerpt}
        aside={"Bharatpur XII\nChitwan, Nepal"}
      />

      <section className="mx-auto grid max-w-[1600px] gap-10 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <img
            src={entry.image}
            alt={entry.title}
            width={896}
            height={1216}
            className="aspect-[4/5] w-full object-cover md:aspect-[3/2]"
          />
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <div className="text-[15px] leading-relaxed text-foreground/85">
            {entry.body.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "" : "mt-5"}>
                {paragraph}
              </p>
            ))}
          </div>

          <Link
            to="/journal"
            className="mt-12 inline-flex items-center gap-3 border-b border-foreground pb-1 text-[11px] tracking-[0.3em] uppercase hover:text-accent"
          >
            ← Back to journal
          </Link>
        </div>
      </section>
    </SiteFrame>
  );
}
