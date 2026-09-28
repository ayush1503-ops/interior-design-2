import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { BEFORE_AFTER } from "../data/site";
import { Lines, Reveal, SectionLabel } from "./anim";

export default function BeforeAfter() {
  const [pos, setPos] = useState(58);
  const frame = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromX = (clientX: number) => {
    const r = frame.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(96, Math.max(4, ((clientX - r.left) / r.width) * 100)));
  };

  const down = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromX(e.clientX);
  };
  const move = (e: PointerEvent<HTMLDivElement>) => dragging.current && setFromX(e.clientX);
  const up = () => (dragging.current = false);

  const keys = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 3));
    if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 3));
  };

  return (
    <section id="transform" className="bg-ink px-5 py-24 text-ivory md:px-10 md:py-40" aria-label="Before and after transformation">
      <div className="flex flex-wrap items-end justify-between gap-10">
        <div>
          <SectionLabel num="03" text="Transformations" dark />
          <h2 className="mt-10 font-display font-normal leading-[0.98] tracking-tight md:mt-12">
            <Lines className="text-[10.5vw] sm:text-[8.5vw] lg:text-[5.6vw]" lines={[<>SAME&nbsp;ROOM.</>, <>DIFFERENT&nbsp;<em className="font-light italic text-bronze">life.</em></>]} />
          </h2>
        </div>
        <Reveal delay={0.2} className="max-w-xs pb-2 text-[12.5px] leading-[1.9] text-ivory/60">
          Drag the line. Light, material and proportion — reconsidered without
          moving a single wall.
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-14 md:mt-20">
        <div
          ref={frame}
          data-cursor="DRAG"
          role="slider"
          tabIndex={0}
          aria-label="Before and after comparison slider. Use arrow keys to move the divider."
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onPointerDown={down}
          onPointerMove={move}
          onPointerUp={up}
          onPointerCancel={up}
          onKeyDown={keys}
          className="relative aspect-[4/5] touch-none select-none overflow-hidden bg-soot sm:aspect-[16/10] md:aspect-[16/9]"
        >
          {/* AFTER */}
          <img
            src={BEFORE_AFTER.src}
            alt={BEFORE_AFTER.alt}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* BEFORE (clipped) */}
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} aria-hidden>
            <img
              src={BEFORE_AFTER.src}
              alt=""
              loading="lazy"
              decoding="async"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover brightness-[.62] contrast-[.88] grayscale-[.92] sepia-[.18]"
            />
          </div>

          {/* labels */}
          <span className="absolute left-4 top-4 border border-ivory/30 bg-ink/40 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.26em] backdrop-blur-sm md:left-6 md:top-6">
            Before
          </span>
          <span className="absolute right-4 top-4 border border-ivory/30 bg-ink/40 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.26em] backdrop-blur-sm md:right-6 md:top-6">
            After
          </span>

          {/* divider */}
          <div className="absolute inset-y-0" style={{ left: `${pos}%` }} aria-hidden>
            <div className="absolute inset-y-0 -ml-px w-px bg-ivory/90" />
            <div className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/80 bg-ink/30 text-ivory backdrop-blur-sm">
              <ChevronsLeftRight size={16} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[9.5px] font-medium uppercase tracking-[0.24em] text-ivory/50">
        <span>Defence Colony residence — drawing room</span>
        <span className="flex items-center gap-3">
          <span className="h-px w-10 bg-ivory/25" aria-hidden />
          Drag / use arrow keys
        </span>
      </Reveal>
    </section>
  );
}
