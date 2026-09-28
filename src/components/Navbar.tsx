import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { NAV_LINKS, STUDIO } from "../data/site";
import { cn } from "../utils/cn";
import { EASE } from "./anim";

export function Wordmark({ onClick, light = false }: { onClick?: () => void; light?: boolean }) {
  return (
    <button
      onClick={onClick}
      aria-label="Noor Studio — home"
      className={cn("text-left leading-none focus-visible:outline-offset-4", light ? "text-ivory" : "text-ink")}
    >
      <span className="font-display text-[23px] font-medium tracking-tight">Noor</span>
      <span className="ml-2 align-middle text-[9px] font-medium uppercase tracking-[0.34em] text-bronze">
        Studio
      </span>
    </button>
  );
}

export default function Navbar({ onNav }: { onNav: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    onNav(id);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.35 }}
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-all duration-500",
          scrolled ? "border-b border-ink/8 bg-ivory/85 backdrop-blur-md" : "border-b border-transparent bg-transparent"
        )}
      >
        <nav aria-label="Primary" className="flex h-[68px] items-center justify-between px-5 md:h-[76px] md:px-10">
          <Wordmark onClick={() => go("top")} />

          <ul className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="link-line text-[10.5px] font-medium uppercase tracking-[0.24em] text-ink/80 hover:text-ink"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={() => go("contact")}
              className="group hidden items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.22em] transition-colors duration-500 hover:bg-ink hover:text-ivory md:inline-flex"
            >
              Start a project
              <ArrowUpRight size={12} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[7px] lg:hidden"
            >
              <span className="h-px w-6 bg-ink" aria-hidden />
              <span className="h-px w-6 bg-ink" aria-hidden />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed inset-0 z-[90] flex flex-col bg-ink text-ivory"
          >
            <div className="flex h-[68px] items-center justify-between px-5 md:px-10">
              <Wordmark light onClick={() => go("top")} />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="flex h-10 w-10 items-center justify-center">
                <X size={22} strokeWidth={1.25} />
              </button>
            </div>

            <nav aria-label="Menu" className="flex flex-1 flex-col justify-center px-6 md:px-14">
              <ul className="space-y-2">
                {NAV_LINKS.map((l, i) => (
                  <li key={l.id} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "110%", transition: { duration: 0.3, delay: 0 } }}
                      transition={{ duration: 0.85, ease: EASE, delay: 0.12 + i * 0.07 }}
                    >
                      <button
                        onClick={() => go(l.id)}
                        className="group flex w-full items-baseline gap-5 text-left"
                      >
                        <span className="font-body text-[10px] tracking-[0.3em] text-ivory/40">0{i + 1}</span>
                        <span className="font-display text-[15vw] leading-[1.06] tracking-tight transition-colors duration-300 group-hover:italic group-hover:text-bronze sm:text-6xl md:text-7xl">
                          {l.label}
                        </span>
                      </button>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-between gap-4 border-t border-ivory/15 px-6 py-6 text-[10px] uppercase tracking-[0.24em] text-ivory/60 md:px-14"
            >
              <a href={`mailto:${STUDIO.email}`} className="link-line">{STUDIO.email}</a>
              <span>New Delhi — India</span>
              <span>{STUDIO.socials.join("  ·  ")}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
