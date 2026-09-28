import { ArrowRight } from "lucide-react";
import { INTRO_IMG } from "../data/site";
import { Lines, PImg, Reveal, SectionLabel } from "./anim";

export default function Intro({ onNav }: { onNav: (id: string) => void }) {
  return (
    <section id="philosophy" className="px-5 pb-24 pt-28 md:px-10 md:pb-40 md:pt-44" aria-label="Philosophy">
      <SectionLabel num="01" text="Philosophy" />

      <div className="mt-12 grid gap-x-14 gap-y-16 md:mt-16 md:grid-cols-12">
        <div className="md:col-span-8">
          <h2 className="font-display font-normal leading-[1.0] tracking-[-0.01em] text-ink">
            <Lines
              className="text-[12vw] sm:text-[10vw] lg:text-[5.9vw]"
              lines={[
                <>WE&nbsp;DESIGN</>,
                <>
                  THE&nbsp;<em className="font-light italic text-bronze">feeling</em>
                </>,
                <>OF&nbsp;A&nbsp;SPACE.</>,
              ]}
            />
          </h2>

          <Reveal delay={0.25} className="mt-10 max-w-md md:mt-14">
            <p className="text-[14.5px] leading-[1.95] text-ink/65">
              We create considered interiors where architecture, material, light
              and everyday life exist in balance — rooms that don't perform for the
              camera, but hold the people who live in them.
            </p>
            <button
              onClick={() => onNav("studio")}
              className="group mt-8 inline-flex items-center gap-3 text-[10.5px] font-medium uppercase tracking-[0.24em] text-ink"
            >
              <span className="link-line">Our approach</span>
              <ArrowRight size={13} className="transition-transform duration-500 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>

        <div className="md:col-span-4 md:pt-24">
          <Reveal delay={0.15}>
            <PImg
              src={INTRO_IMG.src}
              alt={INTRO_IMG.alt}
              ratio="aspect-[3/4]"
              caption="Leather, linen, low winter light"
              speed={5}
            />
          </Reveal>
        </div>
      </div>

      {/* baseline rule with coordinates */}
      <Reveal delay={0.1} className="mt-20 hidden items-baseline justify-between border-t border-ink/15 pt-4 text-[9.5px] font-medium uppercase tracking-[0.26em] text-fog md:mt-28 lg:flex">
        <span>Form / Light / Material</span>
        <span>Est. 2014 — Practising from New Delhi</span>
        <span>One studio, one project at a time</span>
      </Reveal>
    </section>
  );
}
