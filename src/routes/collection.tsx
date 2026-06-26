import { createFileRoute } from "@tanstack/react-router";

import { PageLead, SiteFrame } from "@/components/site-shell";
import { collectionRooms } from "@/lib/site-content";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Collection — People's Choice Handicrafts" },
      {
        name: "description",
        content:
          "Explore the full collection rooms at People's Choice Handicrafts, from hemp and pashmina to jewelry, brass and carved wood.",
      },
      { property: "og:title", content: "Collection — People's Choice Handicrafts" },
      {
        property: "og:description",
        content:
          "Explore the full collection rooms at People's Choice Handicrafts, from hemp and pashmina to jewelry, brass and carved wood.",
      },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  return (
    <SiteFrame>
      <PageLead
        eyebrow="Collection rooms"
        title={
          <>
            The permanent
            <br />
            collection.
          </>
        }
        intro="Each room groups objects by feeling, material and use. This makes the collection feel like a series of small rooms, not just a list of products."
        aside={"Six chosen rooms\nShown like a small museum"}
      />

      <section className="mx-auto max-w-[1600px] px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {collectionRooms.map((room) => (
            <article key={room.numeral} className="border border-border bg-card">
              <img
                src={room.image}
                alt={room.title}
                width={896}
                height={1216}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  Room {room.numeral}
                </p>
                <h2 className="mt-3 font-display text-4xl tracking-tight">{room.title}</h2>
                <p className="mt-2 text-[11px] tracking-[0.24em] uppercase text-muted-foreground">
                  {room.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{room.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
