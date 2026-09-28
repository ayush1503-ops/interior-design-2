import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { STUDIO } from "../data/site";
import { EASE, Lines, Reveal, SectionLabel } from "./anim";

const inputCls =
  "w-full rounded-none border-b border-ivory/25 bg-transparent py-3 font-body text-[13.5px] text-ivory placeholder:text-ivory/30 outline-none transition-colors duration-500 focus:border-bronze";
const labelCls = "mb-1 block text-[9.5px] font-medium uppercase tracking-[0.24em] text-ivory/45";

const CONTACT_ROWS: [string, string, string?][] = [
  ["Email", STUDIO.email, `mailto:${STUDIO.email}`],
  ["Phone", STUDIO.phone, `tel:${STUDIO.phone.replace(/\s/g, "")}`],
  ["Studio", STUDIO.address.join(", ")],
  ["Instagram", "@noor.studio", "https://instagram.com"],
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-ink px-5 pt-24 text-ivory md:px-10 md:pt-40" aria-label="Contact">
      <SectionLabel num="09" text="Contact" dark />

      <h2 className="mt-12 font-display font-normal leading-[0.96] tracking-tight md:mt-14">
        <Lines
          className="text-[11.5vw] sm:text-[9.5vw] lg:text-[7.2vw]"
          lines={[
            <>LET'S&nbsp;CREATE</>,
            <>A&nbsp;SPACE&nbsp;WORTH</>,
            <>
              <em className="font-light italic text-bronze">remembering.</em>
            </>,
          ]}
        />
      </h2>

      <div className="mt-16 grid gap-x-14 gap-y-16 pb-24 md:mt-24 md:grid-cols-12 md:pb-36">
        {/* details */}
        <Reveal className="md:col-span-5">
          <dl>
            {CONTACT_ROWS.map(([k, v, href]) => (
              <div key={k} className="group border-t border-ivory/12 py-5 last:border-b md:py-6">
                <dt className="text-[9.5px] font-medium uppercase tracking-[0.26em] text-ivory/40">{k}</dt>
                <dd className="mt-2.5 font-display text-[1.45rem] font-normal leading-snug tracking-tight md:text-2xl">
                  {href ? (
                    <a href={href} className="link-line inline-flex items-center gap-3 hover:text-ivory/90">
                      {v}
                      {href.startsWith("http") && <ArrowUpRight size={16} strokeWidth={1.25} className="text-bronze" />}
                    </a>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-sm text-[12px] leading-[1.9] text-ivory/50">
            We take on four to six projects a year. The diary for 2026 — 27
            opens this spring; early conversations are always welcome.
          </p>
        </Reveal>

        {/* form */}
        <div className="md:col-span-6 md:col-start-7">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="flex h-full flex-col items-start justify-center border border-ivory/15 p-10 md:p-14"
              role="status"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-bronze text-bronze">
                <Check size={18} strokeWidth={1.5} />
              </span>
              <h3 className="mt-8 font-display text-4xl font-normal tracking-tight">Thank you.</h3>
              <p className="mt-4 max-w-sm text-[13px] leading-[1.9] text-ivory/60">
                Your enquiry is with the studio. We read everything personally
                and reply within two working days.
              </p>
            </motion.div>
          ) : (
            <Reveal delay={0.1}>
              <form onSubmit={submit} className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2" aria-label="Project enquiry form">
                <div>
                  <label htmlFor="f-name" className={labelCls}>Name</label>
                  <input id="f-name" name="name" required autoComplete="name" placeholder="Your full name" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="f-email" className={labelCls}>Email</label>
                  <input id="f-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputCls} />
                </div>
                <div className="relative">
                  <label htmlFor="f-type" className={labelCls}>Project type</label>
                  <select id="f-type" name="type" required defaultValue="" className={`${inputCls} appearance-none pr-6`}>
                    <option value="" disabled className="text-ink">Select a type</option>
                    {["Residential interior", "Hospitality", "Commercial space", "Architectural interior", "Furniture / styling"].map((o) => (
                      <option key={o} className="text-ink">{o}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute bottom-4 right-1 text-ivory/40" aria-hidden>▾</span>
                </div>
                <div className="relative">
                  <label htmlFor="f-budget" className={labelCls}>Approximate budget</label>
                  <select id="f-budget" name="budget" defaultValue="" className={`${inputCls} appearance-none pr-6`}>
                    <option value="" disabled className="text-ink">Select a range</option>
                    {["₹25 — 50 lakh", "₹50 lakh — 1 cr", "₹1 — 3 crore", "₹3 crore +", "Prefer to discuss"].map((o) => (
                      <option key={o} className="text-ink">{o}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute bottom-4 right-1 text-ivory/40" aria-hidden>▾</span>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="f-location" className={labelCls}>Location</label>
                  <input id="f-location" name="location" placeholder="City / neighbourhood" className={inputCls} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="f-message" className={labelCls}>About the project</label>
                  <textarea
                    id="f-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="The rooms, the rough timeline, and how you want the space to feel…"
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group mt-2 inline-flex items-center gap-4 rounded-full border border-ivory/30 px-8 py-4 text-[10.5px] font-medium uppercase tracking-[0.24em] transition-colors duration-500 hover:bg-ivory hover:text-ink"
                  >
                    Send enquiry
                    <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
