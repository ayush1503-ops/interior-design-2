import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { HERO } from "../data/site";
import { EASE, Lines } from "./anim";

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[600px] overflow-hidden bg-ink" aria-label="Introduction">
      {/* image — reveals like architecture */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.045 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.7, ease: EASE }}
      >
        <img
          src={HERO.src}
          alt={HERO.alt}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-ink/60 via-ink/15 to-transparent" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ivory/55 to-transparent" aria-hidden />
      </motion.div>

      {/* top-right metadata */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.9 }}
        className="absolute right-5 top-[92px] text-right text-[9.5px] font-medium uppercase leading-[2] tracking-[0.28em] text-ink/75 md:right-10 md:top-[110px] md:text-[10.5px]"
      >
        <p>New Delhi — India</p>
        <p>Interior Architecture / 2026</p>
      </motion.div>

      {/* left edge vertical label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="absolute left-8 top-1/2 hidden -translate-y-1/2 rotate-180 text-[9px] font-medium uppercase tracking-[0.34em] text-ink/60 [writing-mode:vertical-rl] lg:block"
      >
        Selected works — 2019 / 2026
      </motion.p>

      {/* headline block */}
      <div className="absolute inset-x-0 bottom-0 px-5 pb-9 md:px-10 md:pb-11 lg:pl-20">
        <div className="flex items-end justify-between gap-12">
          <h1 className="font-display font-normal leading-[0.95] tracking-[-0.01em] text-ivory">
            <Lines
              animate
              delay={0.55}
              stagger={0.13}
              className="text-[13.5vw] sm:text-[12vw] lg:text-[8.8vw]"
              lines={[
                <>SPACES</>,
                <>THAT&nbsp;SPEAK</>,
                <>
                  WITHOUT&nbsp;<em className="font-light italic">words.</em>
                </>,
              ]}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.35 }}
            className="mb-2 hidden w-[230px] shrink-0 text-[11.5px] leading-[1.9] text-ivory/85 lg:block"
          >
            Interior architecture &amp; design studio — creating considered,
            quietly luxurious spaces since 2014.
          </motion.p>
        </div>

        {/* bottom meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-8 flex items-center justify-between border-t border-ivory/25 pt-4 text-[9.5px] font-medium uppercase tracking-[0.26em] text-ivory/80 md:mt-10 md:text-[10px]"
        >
          <span className="flex items-center gap-3">
            Scroll to explore
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <ArrowDown size={12} strokeWidth={1.5} />
            </motion.span>
          </span>
          <span className="hidden sm:block">Residential · Hospitality · Commercial</span>
          <span className="hidden md:block">28.6139° N, 77.2090° E</span>
        </motion.div>
      </div>
    </section>
  );
}
