import { useEffect, useRef } from "react";

/**
 * Abstract hero field: concentric elliptical contours on a 2D canvas.
 * The field reacts to three inputs, all gently:
 *  - cursor position (the centre drifts, and contours near the cursor bulge)
 *  - scroll progress (the centre migrates and the field opens up)
 *  - time (a very slow breathing wobble)
 */
export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;
    let t = 0;
    let scroll = 0;
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(([e]) => {
      visible = !!e?.isIntersecting;
    });
    io.observe(canvas);

    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const onScroll = () => {
      scroll = Math.min(1, window.scrollY / Math.max(1, window.innerHeight));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const rings = 28;
    const SEGMENTS = 84;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      pointer.x += (target.x - pointer.x) * 0.045;
      pointer.y += (target.y - pointer.y) * 0.045;

      // centre migrates with scroll, drifts with the cursor
      const cx = width * (0.58 + scroll * 0.05) + pointer.x * width * 0.045;
      const cy = height * (0.5 - scroll * 0.12) + pointer.y * height * 0.045;
      const base = Math.min(width, height) * 0.06;

      // cursor position in canvas space, for local distortion
      const px = cx + pointer.x * width * 0.34;
      const py = cy + pointer.y * height * 0.34;
      const influence = Math.min(width, height) * 0.3;

      for (let i = 0; i < rings; i++) {
        const p = i / rings;
        const r = base + p * Math.min(width, height) * (0.52 + scroll * 0.08);
        const wobble = Math.sin(t * 0.0006 + p * 5.2) * 0.14;
        const rxr = r * (1 + wobble * 0.5);
        const ryr = r * (0.62 + wobble);
        const rot = -0.42 + pointer.x * 0.14 + Math.sin(t * 0.0004 + p) * 0.06 + scroll * 0.12;
        const cos = Math.cos(rot);
        const sin = Math.sin(rot);

        ctx.beginPath();
        for (let s = 0; s <= SEGMENTS; s++) {
          const a = (s / SEGMENTS) * Math.PI * 2;
          let ex = Math.cos(a) * rxr;
          let ey = Math.sin(a) * ryr;
          let x = cx + ex * cos - ey * sin;
          let y = cy + ex * sin + ey * cos;

          // local bulge away from the cursor, a few pixels at most
          const dx = x - px;
          const dy = y - py;
          const d = Math.hypot(dx, dy);
          if (d < influence && d > 0.001) {
            const push = (1 - d / influence) ** 2 * 9;
            x += (dx / d) * push;
            y += (dy / d) * push;
          }

          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();

        const alpha = (0.055 + (1 - p) * 0.14) * (1 - scroll * 0.45);
        ctx.strokeStyle =
          i % 6 === 0 ? `rgba(38, 74, 52, ${alpha + 0.08})` : `rgba(24, 24, 22, ${alpha})`;
        ctx.lineWidth = i % 6 === 0 ? 1 : 0.7;
        ctx.stroke();
      }

      if (!reduced) t += 16;
    };

    const loop = () => {
      if (visible) draw();
      raf = requestAnimationFrame(loop);
    };
    draw();
    if (!reduced) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="h-full w-full" />;
}
