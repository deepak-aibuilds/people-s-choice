import { createFileRoute } from "@tanstack/react-router";

import { PageLead, SiteFrame } from "@/components/site-shell";
import { images } from "@/lib/site-content";

export const Route = createFileRoute("/house-of-craft")({
  head: () => ({
    meta: [
      { title: "House of Craft — People's Choice Handicrafts" },
      {
        name: "description",
        content:
          "Learn the curatorial approach, atmosphere and material philosophy behind People's Choice Handicrafts.",
      },
      { property: "og:title", content: "House of Craft — People's Choice Handicrafts" },
      {
        property: "og:description",
        content:
          "Learn the curatorial approach, atmosphere and material philosophy behind People's Choice Handicrafts.",
      },
    ],
  }),
  component: HouseOfCraftPage,
});

function HouseOfCraftPage() {
  return (
    <SiteFrame>
      <PageLead
        eyebrow="House of Craft"
        title={
          <>
            A store arranged
            <br />
            like a museum.
          </>
        }
        intro="This room explains the visual logic of People's Choice: objects are presented with breathing space, tactile warmth and a sense of ritual calm."
        aside={"Museum structure\nRetail warmth"}
      />

      <section className="mx-auto grid max-w-[1600px] gap-6 px-6 py-16 md:grid-cols-2">
        <img
          src={images.storefront}
          alt="Storefront of People's Choice Handicrafts"
          width={896}
          height={1216}
          className="aspect-[4/5] w-full object-cover"
        />
        <div className="grid gap-6">
          <img
            src={images.productPashmina}
            alt="Folded pashmina shawls"
            width={896}
            height={1216}
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="border border-border bg-secondary/30 p-6">
            <h2 className="font-display text-4xl tracking-tight">
              The atmosphere is calm, tactile and intentional.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Instead of pushing volume, the house privileges composition. Texture is allowed to read slowly. Each room balances practical craft with gallery-like restraint, making the shopping experience feel closer to discovering a collection.
            </p>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}