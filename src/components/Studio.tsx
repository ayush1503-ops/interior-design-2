import { img } from "../data/site";
import { Lines, PImg, Reveal, SectionLabel } from "./anim";

const STATS: [string, string][] = [
  ["12", "Years of practice"],
  ["140+", "Projects delivered"],
  ["09", "Cities across India"],
  ["18", "Design awards"],
];

export default function Studio() {
  return (
    <section id="studio" className="px-5 py-24 md:px-10 md:py-40" aria-label="About the studio">
      <SectionLabel num="06" text="The Studio" />

      <div className="mt-12 grid gap-x-14 gap-y-16 md:mt-16 md:grid-cols-12">
        <div className="md:col-span-8">
          <h2 className="font-display font-normal leading-[1.02] tracking-tight text-ink">
            <Lines
              className="text-[10.5vw] sm:text-[8.5vw] lg:text-[4.9vw]"
              lines={[
                <>WE&nbsp;BELIEVE&nbsp;A&nbsp;SPACE</>,
                <>SHOULD&nbsp;FEEL&nbsp;LIKE&nbsp;IT</>,
                <>
                  <em className="font-light italic text-bronze">belongs</em>&nbsp;TO&nbsp;YOU.
                </>,
              ]}
            />
          </h2>

          <Reveal delay={0.2} className="mt-12 grid max-w-2xl gap-8 md:grid-cols-2 md:gap-12">
            <p className="text-[13.5px] leading-[1.95] text-ink/65">
              Noor Studio is a twelve-person practice of interior architects,
              product designers and stylists working from a former printing
              press in Lutyens' Delhi. We take on a small number of projects
              each year and stay with them from first sketch to final styling.
            </p>
            <p className="text-[13.5px] leading-[1.95] text-ink/65">
              Our work is quiet on purpose. We are more interested in how a
              room ages than how it launches — in patina, proportion and the
              discipline of knowing what to leave out.
              <span className="mt-6 block font-display text-lg italic text-ink">— Arjun Mehra, Principal</span>
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-4 md:pt-28">
          <Reveal delay={0.1}>
            <PImg
              src={img("teamSamples", 1100)}
              alt="Two designers reviewing material samples and plans at the studio worktable"
              ratio="aspect-[3/4]"
              caption="The studio, Amrita Shergill Marg"
              speed={5}
            />
          </Reveal>
        </div>
      </div>

      {/* stats */}
      <div className="mt-20 grid grid-cols-2 gap-y-12 border-t border-ink/15 pt-10 md:mt-28 md:grid-cols-4 md:pt-12">
        {STATS.map(([n, l], i) => (
          <Reveal key={l} delay={i * 0.08}>
            <p className="font-display text-6xl font-light leading-none tracking-tight text-ink md:text-7xl">
              {n}
            </p>
            <p className="mt-3 text-[9.5px] font-medium uppercase tracking-[0.24em] text-fog">{l}</p>
          </Reveal>
        ))}
      </div>

      {/* portrait + process image overlapping composition */}
      <div className="mt-24 grid gap-x-14 gap-y-12 md:mt-36 md:grid-cols-12">
        <div className="md:col-span-5 md:col-start-2">
          <Reveal>
            <PImg
              src={img("architectCoffee", 1100)}
              alt="Arjun Mehra, principal designer, reviewing drawings at his desk"
              ratio="aspect-[3/4]"
              caption="Arjun Mehra — Principal Designer"
              speed={6}
            />
          </Reveal>
        </div>
        <div className="md:col-span-4 md:col-start-8 md:mt-32">
          <Reveal delay={0.15}>
            <PImg
              src={img("sketchMan", 1200)}
              alt="Hand-sketching interior elevations at the drawing board"
              ratio="aspect-[4/3]"
              caption="Every project still begins on paper"
              speed={7}
            />
            <p className="mt-8 max-w-xs text-[12px] leading-[1.9] text-ink/60">
              Drawings before renders, samples before specifications. We hold
              every material in the hand it will live in before it earns a
              place in your home.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
