import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ARTICLES, type Article } from "../data/site";
import { Lines, PImg, Reveal, SectionLabel } from "./anim";
import { cn } from "../utils/cn";

function Meta({ a, className }: { a: Article; className?: string }) {
  return (
    <p className={cn("text-[9.5px] font-medium uppercase tracking-[0.22em] text-fog", className)}>
      {a.category} — {a.date} · {a.read} read
    </p>
  );
}

export default function Journal() {
  const [featured, ...rest] = ARTICLES;

  return (
    <section id="journal" className="px-5 py-24 md:px-10 md:py-40" aria-label="Journal — notes on design">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <SectionLabel num="08" text="Journal" />
          <h2 className="mt-10 font-display font-normal leading-[0.98] tracking-tight text-ink md:mt-12">
            <Lines className="text-[11vw] sm:text-[9vw] lg:text-[6vw]" lines={[<>NOTES&nbsp;ON&nbsp;SPACE</>, <>AND&nbsp;<em className="font-light italic text-bronze">light.</em></>]} />
          </h2>
        </div>
        <Reveal delay={0.2} className="pb-2">
          <a href="#journal" onClick={(e) => e.preventDefault()} data-cursor="EXPLORE" className="link-line text-[10.5px] font-medium uppercase tracking-[0.24em] text-ink">
            All stories ( 24 )
          </a>
        </Reveal>
      </div>

      {/* featured article */}
      <Reveal className="mt-16 md:mt-24">
        <article
          data-cursor="READ"
          aria-label={featured.title}
          className="group grid cursor-pointer gap-x-14 gap-y-8 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <div className="zoom-frame">
              <PImg src={featured.src} alt={featured.alt} ratio="aspect-[4/3]" speed={5} />
            </div>
          </div>
          <div className="flex flex-col justify-end md:col-span-5 md:pb-2">
            <Meta a={featured} />
            <h3 className="mt-5 font-display text-4xl font-normal leading-[1.08] tracking-tight transition-transform duration-700 group-hover:translate-x-1.5 md:text-[3.2vw]">
              {featured.title}
            </h3>
            <p className="mt-6 max-w-md text-[13px] leading-[1.9] text-ink/60">{featured.excerpt}</p>
            <span className="mt-8 inline-flex items-center gap-3 text-[10.5px] font-medium uppercase tracking-[0.24em]">
              <span className="link-line">Read article</span>
              <ArrowRight size={13} className="transition-transform duration-500 group-hover:translate-x-1" />
            </span>
          </div>
        </article>
      </Reveal>

      {/* uneven grid of further stories */}
      <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 md:mt-28 lg:grid-cols-12">
        {rest.map((a, i) => (
          <Reveal
            key={a.id}
            delay={i * 0.06}
            className={cn(
              i === 0 && "lg:col-span-3",
              i === 1 && "lg:col-span-4 lg:mt-24",
              i === 2 && "lg:col-span-5 lg:mt-10",
              i === 3 && "lg:col-span-6 lg:col-start-4 lg:-mt-6"
            )}
          >
            <article
              data-cursor="READ"
              aria-label={a.title}
              className="group cursor-pointer"
            >
              <div className="zoom-frame">
                <PImg src={a.src} alt={a.alt} ratio={a.ratio} speed={6} />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <Meta a={a} />
                  <h3 className="mt-3 max-w-sm font-display text-[1.55rem] font-normal leading-[1.15] tracking-tight transition-all duration-500 group-hover:translate-x-1 group-hover:italic">
                    {a.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.25}
                  className="mt-1 shrink-0 text-ink/40 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bronze"
                />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
