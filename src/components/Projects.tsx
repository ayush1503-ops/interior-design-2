import type { KeyboardEvent, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "../data/site";
import { Lines, PImg, Reveal, SectionLabel } from "./anim";
import { cn } from "../utils/cn";

function Block({
  p,
  onOpen,
  className,
  children,
  cursor = "VIEW PROJECT",
}: {
  p: Project;
  onOpen: (id: string) => void;
  className?: string;
  children: ReactNode;
  cursor?: string;
}) {
  const key = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(p.id);
    }
  };
  return (
    <article
      className={cn("group cursor-pointer", className)}
      data-cursor={cursor}
      role="link"
      tabIndex={0}
      aria-label={`View project — ${p.name}, ${p.location}, ${p.type} ${p.year}`}
      onClick={() => onOpen(p.id)}
      onKeyDown={key}
    >
      {children}
    </article>
  );
}

function Index({ n, className }: { n: string; className?: string }) {
  return (
    <span className={cn("font-display text-2xl font-light italic text-ink/45", className)} aria-hidden>
      ( {n} )
    </span>
  );
}

function Name({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3
      className={cn(
        "font-display font-normal leading-[1.02] tracking-tight text-ink transition-transform duration-700 ease-out group-hover:translate-x-2",
        className
      )}
    >
      {children}
    </h3>
  );
}

function Spec({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-t border-ink/12 py-2 text-[9.5px] font-medium uppercase tracking-[0.2em]">
      <dt className="text-fog">{k}</dt>
      <dd className="text-right text-ink/85">{v}</dd>
    </div>
  );
}

function ViewRow({ l, r }: { l: string; r: string }) {
  return (
    <div className="mt-3 flex items-center justify-between border-t border-ink/15 pt-3 text-[9.5px] font-medium uppercase tracking-[0.22em] text-ink/70">
      <span>{l}</span>
      <span className="flex items-center gap-3">
        {r}
        <ArrowUpRight size={12} className="transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bronze" />
      </span>
    </div>
  );
}

export default function Projects({ onOpen }: { onOpen: (id: string) => void }) {
  const [casa, terra, amber, courtyard] = PROJECTS;

  return (
    <section id="projects" className="px-5 py-24 md:px-10 md:py-40" aria-label="Selected works">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <SectionLabel num="02" text="Selected Works" />
          <h2 className="mt-10 font-display font-normal leading-[0.98] tracking-tight text-ink md:mt-12">
            <Lines className="text-[11vw] sm:text-[9vw] lg:text-[6.4vw]" lines={[<>FEATURED</>, <>PROJECTS<em className="font-light italic text-bronze">.</em></>]} />
          </h2>
        </div>
        <Reveal delay={0.2} className="pb-3 text-right text-[10px] font-medium uppercase leading-[2.1] tracking-[0.24em] text-fog">
          <p>2019 — 2026</p>
          <p>Residential · Hospitality · Commercial</p>
          <p aria-label="Four projects">( 04 )</p>
        </Reveal>
      </div>

      <div className="mt-24 space-y-28 md:mt-36 md:space-y-44">
        {/* ——— 01 / CASA NOIR — wide horizontal image offset right ——— */}
        <Reveal>
          <Block p={casa} onOpen={onOpen} className="md:grid md:grid-cols-12 md:items-end md:gap-x-14">
            <div className="mb-6 flex items-end justify-between md:col-span-3 md:mb-0 md:flex-col md:justify-between md:self-stretch md:pb-1">
              <Index n={casa.index} className="md:self-start" />
              <div className="text-right md:mt-16 md:w-full md:text-left">
                <Name className="text-4xl md:text-[2.6vw]">{casa.name}</Name>
                <dl className="mt-5 hidden md:block">
                  <Spec k="Location" v={casa.location} />
                  <Spec k="Type" v={`${casa.type} / ${casa.year}`} />
                  <Spec k="Area" v={casa.area} />
                </dl>
              </div>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <div className="zoom-frame">
                <PImg src={casa.listSrc} alt={casa.listAlt} ratio="aspect-[16/10]" speed={5} />
              </div>
              <ViewRow l="Residential — New Delhi" r="2026" />
            </div>
          </Block>
        </Reveal>

        {/* ——— 02 / TERRA COURT — tall portrait to the side ——— */}
        <Reveal>
          <Block p={terra} onOpen={onOpen} className="md:grid md:grid-cols-12 md:gap-x-14">
            <div className="md:col-span-5 md:col-start-2">
              <div className="zoom-frame">
                <PImg src={terra.listSrc} alt={terra.listAlt} ratio="aspect-[3/4]" speed={6} />
              </div>
            </div>
            <div className="mt-6 md:col-span-4 md:col-start-8 md:mt-0 md:flex md:flex-col md:justify-end md:pb-14">
              <Index n={terra.index} />
              <Name className="mt-6 text-4xl md:mt-10 md:text-[3.2vw]">
                TERRA<br />COURT
              </Name>
              <p className="mt-6 max-w-xs text-[13px] leading-[1.9] text-ink/60">{terra.tagline}</p>
              <ViewRow l="Goa — Retreat" r="2025" />
            </div>
          </Block>
        </Reveal>

        {/* ——— 03 / THE AMBER ROOM — meta band above, near full-width image ——— */}
        <Reveal>
          <Block p={amber} onOpen={onOpen}>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-6 md:mb-9 md:pb-8">
              <div className="flex items-baseline gap-6 md:gap-10">
                <Index n={amber.index} />
                <Name className="text-4xl md:text-[4vw]">
                  THE AMBER ROOM<em className="font-light italic text-bronze">.</em>
                </Name>
              </div>
              <p className="pb-1 text-right text-[10px] font-medium uppercase leading-[2] tracking-[0.22em] text-fog">
                Hospitality — Mumbai<br />3,100 sq ft · 2025
              </p>
            </div>
            <div className="md:grid md:grid-cols-12">
              <div className="md:col-span-10 md:col-start-2">
                <div className="zoom-frame">
                  <PImg src={amber.listSrc} alt={amber.listAlt} ratio="aspect-[21/10]" speed={5} />
                </div>
                <ViewRow l="Concept to opening — 42 seats" r="View case study" />
              </div>
            </div>
          </Block>
        </Reveal>

        {/* ——— 04 / COURTYARD HOUSE — two-image composition ——— */}
        <Reveal>
          <Block p={courtyard} onOpen={onOpen} className="md:grid md:grid-cols-12 md:gap-x-14">
            <div className="mb-6 flex items-end justify-between md:col-span-3 md:mb-0 md:flex-col md:justify-between md:self-stretch md:pb-1">
              <Index n={courtyard.index} className="md:self-start" />
              <div className="text-right md:mt-16 md:w-full md:text-left">
                <Name className="text-4xl md:text-[2.6vw]">
                  COURTYARD<br />HOUSE
                </Name>
                <p className="mt-5 hidden max-w-[220px] text-[10px] font-medium uppercase leading-[2] tracking-[0.2em] text-fog md:block">
                  Architectural interior — Jaipur<br />2024
                </p>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-4">
              <div className="zoom-frame">
                <PImg src={courtyard.listSrc} alt={courtyard.listAlt} ratio="aspect-[4/3]" speed={6} />
              </div>
              <ViewRow l="Restoration of a 1920s haveli" r="2024" />
            </div>
            <div className="mt-6 md:col-span-3 md:mt-40">
              <div className="zoom-frame">
                <PImg src={courtyard.secondSrc!} alt={courtyard.secondAlt!} ratio="aspect-[3/4]" speed={7} caption="The bathing court" />
              </div>
            </div>
          </Block>
        </Reveal>
      </div>

      {/* ——— archive index ——— */}
      <Reveal className="mt-28 md:mt-40">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.26em] text-fog">Full index</p>
        <ul>
          {PROJECTS.map((p) => (
            <li key={p.id}>
              <button
                onClick={() => onOpen(p.id)}
                data-cursor="OPEN"
                className="group flex w-full items-center justify-between gap-4 border-t border-ink/12 py-5 text-left transition-colors duration-300 last:border-b hover:bg-paper md:py-6"
                aria-label={`Open project — ${p.name}`}
              >
                <span className="flex items-baseline gap-5 md:gap-8">
                  <span className="text-[10px] font-medium tracking-[0.2em] text-fog">{p.index}</span>
                  <span className="font-display text-2xl font-normal tracking-tight transition-transform duration-500 group-hover:translate-x-1.5 group-hover:italic md:text-3xl">
                    {p.name}
                  </span>
                </span>
                <span className="flex items-center gap-5 text-[9.5px] font-medium uppercase tracking-[0.2em] text-fog md:gap-12">
                  <span className="hidden sm:block">{p.location}</span>
                  <span className="hidden md:block">{p.type}</span>
                  <span>{p.year}</span>
                  <ArrowRight size={14} className="text-ink transition-transform duration-500 group-hover:translate-x-1 group-hover:text-bronze" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
