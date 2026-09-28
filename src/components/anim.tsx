import { type ReactNode, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "../utils/cn";

export const EASE = [0.22, 1, 0.36, 1] as const;

/* Fade + rise into view, once. */
export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* Masked-line headline reveal — architecture being uncovered. */
export function Lines({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.11,
  animate = false,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  animate?: boolean; // run immediately on mount (hero)
}) {
  const reduce = useReducedMotion();
  return (
    <span className={cn("block", className)}>
      {lines.map((l, i) => (
        <span key={i} className={cn("block overflow-hidden pb-[0.08em] -mb-[0.08em]", lineClassName)}>
          <motion.span
            className="block will-change-transform"
            initial={reduce ? false : { y: "115%" }}
            {...(animate
              ? { animate: { y: "0%" } }
              : { whileInView: { y: "0%" }, viewport: { once: true, margin: "-8% 0px" } })}
            transition={{ duration: 1.05, ease: EASE, delay: delay + i * stagger }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Editorial image: parallax drift inside a masked frame + soft reveal. */
export function PImg({
  src,
  alt,
  ratio = "aspect-[4/3]",
  className,
  imgClassName,
  caption,
  speed = 6,
  eager = false,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  imgClassName?: string;
  caption?: string;
  speed?: number;
  eager?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed}%`, `${-speed}%`]);

  return (
    <figure ref={ref} className={cn("relative overflow-hidden bg-stone", ratio, className)}>
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        className={cn("absolute inset-0 h-full w-full object-cover will-change-transform", imgClassName)}
        style={reduce ? { scale: 1 } : { y, scale: 1.14 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: EASE }}
      />
      {caption && (
        <figcaption className="absolute bottom-3 left-3 z-10 text-[9px] font-medium uppercase tracking-[0.22em] text-white mix-blend-difference">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* Small uppercase section label — "( 02 ) ——— SELECTED WORKS" */
export function SectionLabel({
  num,
  text,
  dark = false,
  className,
}: {
  num: string;
  text: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.28em]",
        dark ? "text-ivory/50" : "text-fog",
        className
      )}
    >
      <span className="text-bronze">( {num} )</span>
      <span className={cn("h-px w-12", dark ? "bg-ivory/25" : "bg-ink/20")} aria-hidden />
      <span>{text}</span>
    </Reveal>
  );
}
