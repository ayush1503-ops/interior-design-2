import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PROJECTS, type Project, type Shot } from "../data/site";
import { EASE, Lines, PImg, Reveal } from "./anim";
import { cn } from "../utils/cn";

function MetaCell({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[9px] font-medium uppercase tracking-[0.26em] text-fog">{k}</dt>
      <dd className="mt-2 font-display text-xl font-normal tracking-tight text-ink md:text-2xl">{v}</dd>
    </div>
  );
}

function ShotRenderer({ shot, i }: { shot: Shot; i: number }) {
  switch (shot.kind) {
    case "full":
      return (
        <Reveal>
          <PImg src={shot.src} alt={shot.alt} ratio="aspect-[16/9]" speed={5} caption={shot.caption} />
        </Reveal>
      );
    case "duo":
      return (
        <Reveal>
          <div className="grid gap-6 md:grid-cols-12 md:gap-x-14">
            <div className="md:col-span-7">
              <PImg src={shot.a.src} alt={shot.a.alt} ratio="aspect-[4/3]" speed={5} />
            </div>
            <div className="md:col-span-4 md:col-start-9 md:mt-32">
              <PImg src={shot.b.src} alt={shot.b.alt} ratio="aspect-[3/4]" speed={7} caption={shot.caption} />
            </div>
          </div>
        </Reveal>
      );
    case "aside":
      return (
        <Reveal>
          <div className="grid items-center gap-y-10 md:grid-cols-12 md:gap-x-14">
            <div
              className={cn(
                "md:col-span-6",
                shot.side === "right" ? "md:col-start-7 md:order-2" : "md:col-start-2"
              )}
            >
              <PImg src={shot.src} alt={shot.alt} ratio="aspect-[4/5]" speed={6} />
            </div>
            <div className={cn("md:col-span-4", shot.side === "right" ? "md:col-start-2 md:order-1" : "md:col-start-9")}>
              <p className="text-[9.5px] font-medium uppercase tracking-[0.26em] text-bronze">
                Detail — {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 font-display text-3xl font-normal leading-[1.12] tracking-tight text-ink md:text-4xl">
                {shot.heading}
              </h3>
              <p className="mt-6 text-[13px] leading-[1.95] text-ink/60">{shot.text}</p>
              <span className="mt-8 block h-px w-14 bg-ink/25" aria-hidden />
            </div>
          </div>
        </Reveal>
      );
    case "quote":
      return (
        <Reveal>
          <blockquote className="mx-auto max-w-4xl py-6 text-center md:py-14">
            <p className="font-display text-[7.5vw] font-light italic leading-[1.15] tracking-tight text-ink sm:text-5xl md:text-[3.4vw]">
              “{shot.text}”
            </p>
            <cite className="mt-8 block text-[9.5px] font-medium not-italic uppercase tracking-[0.28em] text-fog">
              — {shot.by}
            </cite>
          </blockquote>
        </Reveal>
      );
  }
}

export default function ProjectDetail({
  project,
  onBack,
  onNext,
}: {
  project: Project;
  onBack: () => void;
  onNext: (id: string) => void;
}) {
  const idx = PROJECTS.findIndex((p) => p.id === project.id);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* minimal gallery header over imagery */}
      <header className="fixed inset-x-0 top-0 z-[70] text-white mix-blend-difference">
        <nav className="flex h-[68px] items-center justify-between px-5 md:h-[76px] md:px-10" aria-label="Project">
          <button onClick={onBack} aria-label="Noor Studio — back to home" className="leading-none">
            <span className="font-display text-[23px] font-medium tracking-tight">Noor</span>
            <span className="ml-2 align-middle text-[9px] font-medium uppercase tracking-[0.34em]">Studio</span>
          </button>
          <span className="hidden text-[9.5px] font-medium uppercase tracking-[0.28em] md:block">
            Project {project.index} / 0{PROJECTS.length}
          </span>
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.24em]"
          >
            <ArrowLeft size={13} className="transition-transform duration-500 group-hover:-translate-x-1" />
            <span className="link-line">All projects</span>
          </button>
        </nav>
      </header>

      {/* hero */}
      <section className="relative h-[88svh] min-h-[520px] overflow-hidden" aria-label={`${project.name} hero`}>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: EASE }}
        >
          <img src={project.hero.src} alt={project.hero.alt} fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-ink/65 via-ink/15 to-transparent" aria-hidden />
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 px-5 pb-9 md:px-10 md:pb-12">
          <p className="mb-4 text-[9.5px] font-medium uppercase tracking-[0.28em] text-ivory/80">
            {project.type} — {project.location}
          </p>
          <h1 className="font-display font-normal leading-[0.95] tracking-tight text-ivory">
            <Lines
              animate
              delay={0.4}
              className="text-[11vw] md:text-[7.6vw]"
              lines={project.name.split(" ").map((w, i, arr) => (
                <span key={i}>
                  {w}
                  {i === arr.length - 1 && (
                    <em className="font-light italic text-bronze">.</em>
                  )}
                </span>
              ))}
            />
          </h1>
          <div className="mt-7 flex items-center justify-between border-t border-ivory/25 pt-4 text-[9.5px] font-medium uppercase tracking-[0.26em] text-ivory/75">
            <span>{project.tagline.split(".")[0]}.</span>
            <span className="hidden sm:block">Scroll for the story</span>
          </div>
        </div>
      </section>

      {/* meta band */}
      <section className="border-b border-ink/12 px-5 py-10 md:px-10 md:py-14" aria-label="Project facts">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">
          <MetaCell k="Location" v={project.location} />
          <MetaCell k="Year" v={project.year} />
          <MetaCell k="Area" v={project.area} />
          <MetaCell k="Scope" v={project.scope} />
        </dl>
      </section>

      {/* the idea */}
      <section className="grid gap-x-14 gap-y-8 px-5 py-20 md:grid-cols-12 md:px-10 md:py-32" aria-label="The idea">
        <div className="md:col-span-3">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-fog">( The idea )</p>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            <p className="font-display text-2xl font-normal leading-[1.4] tracking-tight text-ink md:text-[2.05rem]">
              {project.idea[0]}
            </p>
            <p className="mt-8 max-w-xl text-[13.5px] leading-[2] text-ink/60">{project.idea[1]}</p>
          </Reveal>
        </div>
      </section>

      {/* story sequence */}
      <section className="space-y-24 px-5 md:space-y-36 md:px-10" aria-label="Project story">
        {project.shots.map((s, i) => (
          <ShotRenderer key={i} shot={s} i={i} />
        ))}
      </section>

      {/* materials */}
      <section className="mx-5 mt-24 bg-paper px-6 py-14 md:mx-10 md:mt-36 md:px-14 md:py-20" aria-label="Material schedule">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-fog">( Materials )</p>
        <dl className="mt-8 grid gap-x-16 md:grid-cols-2">
          {project.materials.map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-6 border-t border-ink/12 py-4 md:py-5">
              <dt className="text-[9.5px] font-medium uppercase tracking-[0.24em] text-fog">{k}</dt>
              <dd className="text-right font-display text-lg font-normal tracking-tight text-ink md:text-xl">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* next project */}
      <button
        onClick={() => onNext(next.id)}
        data-cursor="OPEN"
        className="group mt-24 block w-full border-t border-ink/12 px-5 py-20 text-center md:mt-36 md:py-32"
        aria-label={`Next project — ${next.name}`}
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-fog">Next project</span>
        <span className="mt-6 flex items-center justify-center gap-5 font-display text-[10vw] font-normal leading-none tracking-tight text-ink transition-all duration-500 group-hover:italic md:gap-8 md:text-[6.5vw]">
          {next.name}
          <ArrowRight className="h-[7vw] w-[7vw] text-bronze transition-transform duration-500 group-hover:translate-x-2 md:h-[4.5vw] md:w-[4.5vw]" strokeWidth={1} />
        </span>
        <span className="mt-6 block text-[9.5px] font-medium uppercase tracking-[0.26em] text-fog">
          {next.location} — {next.type} / {next.year}
        </span>
      </button>

      <p className="border-t border-ink/12 py-7 text-center text-[9px] font-medium uppercase tracking-[0.26em] text-fog">
        © 2026 Noor Studio — {project.name}
      </p>
    </motion.div>
  );
}
