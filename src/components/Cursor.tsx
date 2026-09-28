import { useEffect, useRef, useState } from "react";

/* Smooth trailing cursor. Elements opt into labels via data-cursor="VIEW PROJECT" etc. */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const state = useRef({ x: -100, y: -100, rx: -100, ry: -100, label: "", hover: false });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const apply = () => setEnabled(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-cursor");
    const s = state.current;
    let raf = 0;

    const applyState = () => {
      const ring = ringRef.current;
      if (!ring) return;
      ring.dataset.state = s.label ? "label" : s.hover ? "hover" : "default";
      if (labelRef.current && labelRef.current.textContent !== s.label) {
        labelRef.current.textContent = s.label;
      }
    };

    const onMove = (e: MouseEvent) => {
      s.x = e.clientX;
      s.y = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${s.x}px, ${s.y}px)`;
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const labelled = el.closest?.("[data-cursor]") as HTMLElement | null;
      const label = labelled?.dataset.cursor ?? "";
      const interactive = !!labelled || !!el.closest?.("a, button, [role='button'], input, select, textarea, label, summary");
      if (label !== s.label || interactive !== s.hover) {
        s.label = label;
        s.hover = interactive;
        applyState();
      }
    };

    const loop = () => {
      s.rx += (s.x - s.rx) * 0.16;
      s.ry += (s.y - s.ry) * 0.16;
      if (ringRef.current) ringRef.current.style.transform = `translate(${s.rx}px, ${s.ry}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[301]">
      <div ref={ringRef} className="cursor-ring" data-state="default">
        <span ref={labelRef} className="cursor-label" />
      </div>
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
