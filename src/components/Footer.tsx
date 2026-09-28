import { ArrowUp, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, STUDIO } from "../data/site";
import { Reveal } from "./anim";

export default function Footer({ onNav }: { onNav: (id: string) => void }) {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-ivory/12 bg-ink px-5 pb-8 pt-20 text-ivory md:px-10 md:pt-28" aria-label="Footer">
      {/* wordmark */}
      <Reveal>
        <p aria-hidden className="select-none text-center font-display text-[24vw] font-light leading-[0.8] tracking-tight text-ivory md:text-[19vw]">
          Noor<em className="italic text-bronze">.</em>
        </p>
        <div className="mt-6 flex items-baseline justify-between text-[9px] font-medium uppercase tracking-[0.3em] text-ivory/40 md:text-[10px]">
          <span>Interior architecture studio</span>
          <span className="hidden sm:block">Est. 2014</span>
          <span>New Delhi — India</span>
        </div>
      </Reveal>

      {/* link columns */}
      <div className="mt-16 grid gap-y-12 border-t border-ivory/12 pt-12 sm:grid-cols-2 md:mt-20 md:grid-cols-12 md:pt-14">
        <div className="md:col-span-3">
          <p className="text-[9.5px] font-medium uppercase tracking-[0.26em] text-ivory/40">Menu</p>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button onClick={() => onNav(l.id)} className="link-line text-[13px] text-ivory/80 hover:text-ivory">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[9.5px] font-medium uppercase tracking-[0.26em] text-ivory/40">Socials</p>
          <ul className="mt-5 space-y-3">
            {STUDIO.socials.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="group inline-flex items-center gap-2 text-[13px] text-ivory/80 hover:text-ivory"
                >
                  <span className="link-line">{s}</span>
                  <ArrowUpRight size={12} className="text-ivory/40 transition-colors group-hover:text-bronze" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[9.5px] font-medium uppercase tracking-[0.26em] text-ivory/40">Studio</p>
          <address className="mt-5 text-[13px] not-italic leading-[2] text-ivory/80">
            {STUDIO.address.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
            <a href={`mailto:${STUDIO.email}`} className="link-line mt-1 inline-block">{STUDIO.email}</a>
          </address>
        </div>

        <div className="flex items-start md:col-span-2 md:justify-end">
          <button
            onClick={toTop}
            className="group flex items-center gap-4 text-left"
            aria-label="Back to top"
          >
            <span className="text-[9.5px] font-medium uppercase leading-[1.9] tracking-[0.26em] text-ivory/40 group-hover:text-ivory/70">
              Back<br />to top
            </span>
            <span className="flex h-13 w-13 items-center justify-center rounded-full border border-ivory/25 p-4 transition-colors duration-500 group-hover:bg-ivory group-hover:text-ink">
              <ArrowUp size={16} strokeWidth={1.5} className="transition-transform duration-500 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>
      </div>

      {/* baseline */}
      <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-ivory/12 pt-6 text-[9px] font-medium uppercase tracking-[0.24em] text-ivory/35 md:mt-16">
        <span>© 2026 Noor Studio</span>
        <span className="hidden md:block">Photography — studio archive · Imaging for presentation</span>
        <span>Made with light in New Delhi</span>
      </div>
    </footer>
  );
}
