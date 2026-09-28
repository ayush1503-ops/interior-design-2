import { useState } from "react";
import { MATERIALS } from "../data/site";
import { Lines, Reveal, SectionLabel } from "./anim";
import { cn } from "../utils/cn";

export default function Materials() {
  const [active, setActive] = useState(0);

  return (
    <section id="materials" className="px-5 py-24 md:px-10 md:py-40" aria-label="Material philosophy">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <SectionLabel num="04" text="Materials" />
          <h2 className="mt-10 font-display font-normal leading-[0.98] tracking-tight text-ink md:mt-12">
            <Lines className="text-[11vw] sm:text-[9vw] lg:text-[6vw]" lines={[<>AN&nbsp;HONEST</>, <>PALETTE<em className="font-light italic text-bronze">.</em></>]} />
          </h2>
        </div>
        <Reveal delay={0.2} className="max-w-xs pb-2 text-[12.5px] leading-[1.9] text-ink/60">
          Six materials recur in everything we build. Chosen for how they age,
          not how they photograph on day one.
        </Reveal>
      </div>

      <div className="mt-16 grid gap-x-16 md:mt-24 md:grid-cols-12">
        {/* word list */}
        <Reveal className="md:col-span-7">
          <ul>
            {MATERIALS.map((m, i) => (
              <li key={m.name} className="border-t border-ink/15 last:border-b">
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className="group flex w-full items-baseline gap-5 py-4 text-left md:gap-8 md:py-6"
                >
                  <span className="text-[10px] font-medium tracking-[0.22em] text-fog">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "font-display text-[2.6rem] font-normal leading-none tracking-tight transition-all duration-500 sm:text-6xl md:text-[4.6vw]",
                      active === i ? "translate-x-2 font-light italic text-bronze md:translate-x-3" : "text-ink"
                    )}
                  >
                    {m.name}
                  </span>
                  <span
                    className={cn(
                      "ml-auto hidden max-w-[230px] text-right text-[10px] font-medium uppercase leading-[1.9] tracking-[0.18em] transition-opacity duration-500 md:block",
                      active === i ? "text-fog opacity-100" : "opacity-0"
                    )}
                  >
                    {m.note}
                  </span>
                </button>
                {/* mobile inline image */}
                <div
                  className={cn(
                    "overflow-hidden transition-[max-height,padding] duration-700 ease-out md:hidden",
                    active === i ? "max-h-72 pb-5" : "max-h-0"
                  )}
                >
                  <img src={m.src} alt={m.alt} loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover" />
                  <p className="mt-3 text-[10px] font-medium uppercase leading-[1.9] tracking-[0.18em] text-fog">{m.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* sticky crossfading image (desktop) */}
        <div className="hidden md:col-span-5 md:block">
          <div className="sticky top-28">
            <Reveal delay={0.15}>
              <div className="relative aspect-[3/4] overflow-hidden bg-stone">
                {MATERIALS.map((m, i) => (
                  <img
                    key={m.name}
                    src={m.src}
                    alt={active === i ? m.alt : ""}
                    aria-hidden={active !== i}
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-out",
                      active === i ? "scale-100 opacity-100" : "scale-[1.05] opacity-0"
                    )}
                  />
                ))}
                <span className="absolute bottom-3 left-3 text-[9px] font-medium uppercase tracking-[0.22em] text-white mix-blend-difference">
                  {MATERIALS[active].name} — {String(active + 1).padStart(2, "0")} / 06
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
