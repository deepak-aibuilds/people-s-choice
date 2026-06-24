import { createFileRoute } from "@tanstack/react-router";

import { PageLead, SiteFrame } from "@/components/site-shell";
import { images, visitFacts } from "@/lib/site-content";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — People's Choice Handicrafts" },
      {
        name: "description",
        content:
          "Plan your visit to People's Choice Handicrafts in Bharatpur XII, Chitwan. Open everyday since 2026.",
      },
      { property: "og:title", content: "Visit — People's Choice Handicrafts" },
      {
        property: "og:description",
        content:
          "Plan your visit to People's Choice Handicrafts in Bharatpur XII, Chitwan. Open everyday since 2026.",
      },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <SiteFrame>
      <PageLead
        eyebrow="Visit"
        title={
          <>
            Come through the
            <br />
            front room.
          </>
        }
        intro="The visit page is treated as an arrival card: where to find the house, when to come and what kind of atmosphere to expect when you step inside."
        aside={"Bharatpur XII\nOpen Everyday"}
      />

      <section className="mx-auto grid max-w-[1600px] gap-10 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <img
            src={images.storefront}
            alt="People's Choice Handicrafts storefront"
            width={896}
            height={1216}
            className="aspect-[4/5] w-full object-cover md:aspect-[16/10]"
          />
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <div className="divide-y divide-border border-y border-border">
            {visitFacts.map((fact) => (
              <div key={fact.label} className="flex items-start justify-between gap-4 py-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{fact.label}</span>
                <span className="text-right text-sm leading-relaxed text-foreground/85">{fact.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-border bg-secondary/30 p-6">
            <h2 className="font-display text-3xl tracking-tight">What to expect</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A narrow, warmly lit house of textiles, hemp pieces, jewelry and ritual objects. The experience is intimate and walk-in friendly, with each room composed like a small exhibition.
            </p>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}