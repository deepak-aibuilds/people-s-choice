import { createFileRoute } from "@tanstack/react-router";

import { PageLead, SiteFrame } from "@/components/site-shell";
import { artisanStudios } from "@/lib/site-content";

export const Route = createFileRoute("/artisans")({
  head: () => ({
    meta: [
      { title: "Artisans — People's Choice Handicrafts" },
      {
        name: "description",
        content:
          "Meet the material traditions and maker communities that inform the collection at People's Choice Handicrafts.",
      },
      { property: "og:title", content: "Artisans — People's Choice Handicrafts" },
      {
        property: "og:description",
        content:
          "Meet the material traditions and maker communities that inform the collection at People's Choice Handicrafts.",
      },
    ],
  }),
  component: ArtisansPage,
});

function ArtisansPage() {
  return (
    <SiteFrame>
      <PageLead
        eyebrow="Artisans"
        title={
          <>
            Makers behind the
            <br />
            collection rooms.
          </>
        }
        intro="The site honors the hands behind the work by grouping crafts around maker traditions, regions and techniques rather than generic product categories."
        aside={"Maker focus\nRegional memory"}
      />

      <section className="mx-auto max-w-[1600px] px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {artisanStudios.map((studio) => (
            <article key={studio.title} className="border border-border bg-card p-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{studio.region}</p>
              <h2 className="mt-3 font-display text-3xl tracking-tight">{studio.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{studio.description}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}