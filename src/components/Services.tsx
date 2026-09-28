import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data/site";
import { Lines, Reveal, SectionLabel } from "./anim";
import { cn } from "../utils/cn";

export default function Services({ onNav }: { onNav: (id: string) => void }) {
  const [active, setActive] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const floaterRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0, rx: 0, ry: 0, raf: 0 });

  /* smooth-follow floating preview — desktop pointers only */
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    const t = target.current;
    const loop = () => {
      t.rx += (t.x - t.rx) * 0.12;
      t.ry += (t.y - t.ry) * 0.12;
      if (floaterRef.current)
        floaterRef.current.style.transform = `translate(${t.rx}px, ${t.ry}px) translate(-50%, -58%)`;
      t.raf = requestAnimationFrame(loop);
    };
    t.raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(t.raf);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    target.current.x = e.clientX;
    target.current.y = e.clientY;
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative bg-ink px-5 py-24 text-ivory md:px-10 md:py-40"
      aria-label="Services"
    >
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <SectionLabel num="05" text="Services" dark />
          <h2 className="mt-10 font-display font-normal leading-[0.98] tracking-tight md:mt-12">
            <Lines className="text-[11vw] sm:text-[9vw] lg:text-[6vw]" lines={[<>WHAT&nbsp;WE</>, <>DO&nbsp;<em className="font-light italic text-bronze">best.</em></>]} />
          </h2>
        </div>
        <Reveal delay={0.2} className="max-w-xs pb-2 text-[12.5px] leading-[1.9] text-ivory/60">
          Six disciplines, one team, a single point of responsibility — from the
          first site walk to the final stem in the vase.
        </Reveal>
      </div>

      <Reveal className="mt-16 md:mt-24">
        <ul onMouseLeave={() => setActive(null)}>
          {SERVICES.map((s, i) => (
            <li key={s.name} className="border-t border-ivory/12 last:border-b">
              <button
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => onNav("contact")}
                data-cursor="ENQUIRE"
                aria-label={`${s.name.toLowerCase()} — start an enquiry`}
                className="group flex w-full items-center gap-5 py-6 text-left md:gap-10 md:py-9"
              >
                <span
                  className={cn(
                    "text-[10px] font-medium tracking-[0.24em] transition-colors duration-500",
                    active === i ? "text-bronze" : "text-ivory/40"
                  )}
                >
                  {s.index}
                </span>
                <span
                  className={cn(
                    "font-display text-[6.4vw] font-normal uppercase leading-[1.04] tracking-tight transition-all duration-600 sm:text-4xl md:text-[3.4vw]",
                    active === i ? "translate-x-2 italic md:translate-x-4" : "",
                    active !== null && active !== i ? "text-ivory/25" : "text-ivory"
                  )}
                >
                  {s.name}
                </span>
                <span className="ml-auto hidden text-right text-[9.5px] font-medium uppercase leading-[1.9] tracking-[0.2em] text-ivory/40 lg:block">
                  {s.tags}
                </span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.25}
                  className={cn(
                    "shrink-0 transition-all duration-500",
                    active === i ? "translate-x-0 text-bronze opacity-100" : "-translate-x-2 opacity-30"
                  )}
                />
              </button>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* floating cursor preview */}
      <div
        ref={floaterRef}
        aria-hidden
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[60] hidden h-[300px] w-[230px] overflow-hidden transition-opacity duration-500 lg:block",
          active !== null ? "opacity-100" : "opacity-0"
        )}
      >
        {SERVICES.map((s, i) => (
          <img
            key={s.name}
            src={s.src}
            alt=""
            loading="lazy"
            decoding="async"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out",
              active === i ? "scale-100 opacity-100" : "scale-[1.07] opacity-0"
            )}
          />
        ))}
      </div>

      <Reveal className="mt-12 flex items-center justify-between text-[9.5px] font-medium uppercase tracking-[0.24em] text-ivory/45">
        <span>Every engagement begins with a conversation</span>
        <button onClick={() => onNav("contact")} className="link-line text-ivory/80 hover:text-ivory">
          Tell us about yours
        </button>
      </Reveal>
    </section>
  );
}
