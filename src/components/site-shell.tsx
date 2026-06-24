import * as React from "react";
import { Link } from "@tanstack/react-router";

import logoMark from "@/assets/pch-mark.png";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { heroSlides, navItems } from "@/lib/site-content";

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto grid max-w-[1600px] grid-cols-3 items-center px-6 py-4 text-[11px] tracking-[0.22em] uppercase">
          <div className="text-muted-foreground">Bharatpur XII · Chitwan, Nepal</div>
          <div className="text-center font-medium">People&apos;s Choice — Handicrafts</div>
          <div className="text-right text-muted-foreground">ESTD. 2026 · Open Everyday</div>
        </div>

        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 border-t border-border px-6 py-5">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoMark} alt="People's Choice Handicrafts logo" width={44} height={44} className="h-11 w-11" />
            <div className="leading-tight">
              <div className="font-display text-[1.65rem] tracking-tight">People&apos;s Choice</div>
              <div className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground">Handicrafts</div>
            </div>
          </Link>

          <nav className="flex flex-wrap items-center justify-end gap-x-8 gap-y-2 text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-6 py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="font-display text-3xl tracking-tight">A living collection of Nepali craft.</div>
          </div>
          <div className="text-sm leading-relaxed text-muted-foreground md:col-span-4">
            People&apos;s Choice Handicrafts brings together hemp, pashmina, adornment and ritual objects in a house that feels curated rather than commercial.
          </div>
          <div className="text-[11px] tracking-[0.24em] uppercase text-muted-foreground md:col-span-4 md:text-right">
            Bharatpur XII · Chitwan, Nepal
            <br />
            ESTD. 2026 · Open Everyday
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageLead({
  eyebrow,
  title,
  intro,
  aside,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  aside?: string;
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="mb-6 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{eyebrow}</p>
          <h1 className="font-display text-6xl leading-[0.92] tracking-tight md:text-7xl">{title}</h1>
        </div>
        <div className="md:col-span-4 md:col-start-7 md:pt-2">
          <p className="text-[15px] leading-relaxed text-foreground/85">{intro}</p>
        </div>
        {aside ? (
          <div className="md:col-span-2 md:col-start-11 md:text-right">
            <div className="whitespace-pre-line border-l border-border pl-4 text-[10px] tracking-[0.28em] uppercase text-muted-foreground md:border-r md:border-l-0 md:pr-4 md:pl-0">
              {aside}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function MuseumHeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));

    const id = window.setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => window.clearInterval(id);
  }, [api]);

  return (
    // CHANGE: Removed py-8 crowding. Hero now breathes with more generous top/bottom padding.
    // The title and descriptor are separated into distinct visual bands, not stacked together.
    <section className="border-b border-border">
      {/* Hero headline — its own spacious band above the carousel */}
      <div className="mx-auto max-w-[1600px] px-6 pb-8 pt-14 md:pt-20">
        <p className="mb-5 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Now on view — permanent collection
        </p>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-16">
          <h1 className="font-display text-5xl leading-[0.92] tracking-tight md:text-[5.5rem]">
            A flowing museum
            <br />
            of everyday craft.
          </h1>
          {/* CHANGE: Descriptor moved to its own flex column, right-aligned on desktop.
              No longer crammed beside the headline — it reads as a caption, not a subtitle. */}
          <p className="max-w-xs pb-1 text-sm leading-relaxed text-muted-foreground md:text-right">
            Each plate slides into the next — storefront, object, material, ritual.
          </p>
        </div>
      </div>

      {/* Carousel — full bleed within the max-width container */}
      <div className="mx-auto max-w-[1600px] px-6 pb-14 md:pb-20">
        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="museum-carousel">
          <CarouselContent className="-ml-3 md:-ml-5">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={slide.code} className="basis-[90%] pl-3 md:basis-[68%] md:pl-5">
                <article className="grid overflow-hidden border border-border bg-card md:grid-cols-12">
                  <div className="md:col-span-8">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      width={896}
                      height={1216}
                      className="aspect-[4/5] w-full object-cover md:aspect-[16/10]"
                    />
                  </div>
                  {/* CHANGE: Panel is now more spacious (p-8 vs p-6), with larger title and better line-height. */}
                  <div className="flex flex-col justify-between p-8 md:col-span-4 md:border-l md:border-border">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{slide.code}</p>
                      <h2 className="mt-4 font-display text-3xl leading-[1.05] tracking-tight md:text-4xl">{slide.title}</h2>
                      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{slide.note}</p>
                    </div>
                    <div className="mt-10 border-t border-border pt-5 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                      {slide.meta}
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* CHANGE: Dot indicators replace position-absolute arrows cluttering the image.
              Prev/Next buttons are repositioned below the carousel, outside the image plane. */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "h-px w-8 transition-all duration-300",
                    i === current ? "bg-foreground" : "bg-border hover:bg-muted-foreground"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <CarouselPrevious className="static translate-y-0 border-border bg-background text-foreground hover:bg-secondary" />
              <CarouselNext className="static translate-y-0 border-border bg-background text-foreground hover:bg-secondary" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export function SectionNavStrip({ items }: { items: Array<{ label: string; to: string; align?: "left" | "center" | "right" }> }) {
  return (
    <nav className="mx-auto grid max-w-[1600px] gap-px border-b border-border px-6 text-[11px] tracking-[0.25em] uppercase md:grid-cols-5">
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={cn(
            "border-t border-border py-5 text-muted-foreground transition-colors hover:text-foreground",
            item.align === "center" && "text-left md:text-center",
            item.align === "right" && "text-left md:text-right",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function EditorialCard({ image, numeral, title, body }: { image: string; numeral: string; title: string; body: string }) {
  return (
    <article className="border border-border bg-card">
      <img src={image} alt={title} width={896} height={1216} loading="lazy" className="aspect-[4/5] w-full object-cover" />
      <div className="p-6">
        <p className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">Room {numeral}</p>
        <h3 className="mt-3 font-display text-3xl tracking-tight">{title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </article>
  );
}