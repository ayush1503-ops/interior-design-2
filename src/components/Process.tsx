import { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { STAGES, type Stage } from "../data/site";
import { Lines, Reveal, SectionLabel } from "./anim";
import { cn } from "../utils/cn";

function StageRow({ stage }: { stage: Stage }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-42% 0px -42% 0px" });

  return (
    <li ref={ref} className="relative grid grid-cols-[52px_1fr] gap-x-6 py-10 md:grid-cols-[90px_1fr] md:gap-x-12 md:py-14">
      {/* dot on the line */}
      <span
        aria-hidden
        className={cn(
          "absolute -left-[5px] top-[52px] h-[9px] w-[9px] rounded-full border transition-all duration-500 md:top-[72px]",
          inView ? "scale-110 border-ink bg-ink" : "border-ink/30 bg-ivory"
        )}
      />
      <span
        className={cn(
          "font-display text-2xl font-light italic transition-colors duration-500 md:text-4xl",
          inView ? "text-bronze" : "text-ink/25"
        )}
      >
        {stage.index}
      </span>
      <div
        className={cn(
          "transition-all duration-700",
          inView ? "translate-x-0 opacity-100" : "translate-x-1 opacity-35"
        )}
      >
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <h3 className="font-display text-4xl font-normal tracking-tight text-ink md:text-6xl">
            {stage.name}
          </h3>
          <span className="rounded-full border border-ink/20 px-3.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.22em] text-fog">
            {stage.span}
          </span>
        </div>
        <p className="mt-4 max-w-md text-[13px] leading-[1.9] text-ink/60 md:mt-5">{stage.desc}</p>
      </div>
    </li>
  );
}

export default function Process() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.62", "end 0.62"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <section id="process" className="border-t border-ink/12 bg-paper px-5 py-24 md:px-10 md:py-40" aria-label="Design process">
      <div className="grid gap-x-14 gap-y-16 md:grid-cols-12">
        {/* sticky intro */}
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <SectionLabel num="07" text="Process" />
            <h2 className="mt-10 font-display font-normal leading-[1.0] tracking-tight text-ink md:mt-12">
              <Lines
                className="text-[10.5vw] sm:text-[8vw] lg:text-[4.4vw]"
                lines={[
                  <>FROM&nbsp;FIRST&nbsp;SKETCH</>,
                  <>TO&nbsp;FINAL</>,
                  <>
                    <em className="font-light italic text-bronze">styling.</em>
                  </>,
                ]}
              />
            </h2>
            <Reveal delay={0.2} className="mt-10 max-w-sm text-[13px] leading-[1.95] text-ink/60">
              Five stages, one unbroken thread. The same principal designer who
              meets you on day one supervises the day the art is hung.
            </Reveal>
          </div>
        </div>

        {/* timeline */}
        <div ref={listRef} className="relative md:col-span-7">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-ink/10" aria-hidden />
          <motion.div
            className="absolute left-0 top-0 h-full w-px origin-top bg-ink"
            style={{ scaleY }}
            aria-hidden
          />
          <ul>
            {STAGES.map((s) => (
              <StageRow key={s.index} stage={s} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
