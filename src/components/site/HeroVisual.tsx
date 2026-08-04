import { useEffect, useRef } from "react";

/**
 * Abstract hero visual: a slowly rotating field of concentric elliptical
 * contours rendered on a 2D canvas. Deliberately geometric and quiet — it
 * reacts gently to cursor position and scroll, and pauses off-screen.
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

    const rings = 26;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      pointer.x += (target.x - pointer.x) * 0.045;
      pointer.y += (target.y - pointer.y) * 0.045;

      const cx = width / 2 + pointer.x * width * 0.05;
      const cy = height / 2 + pointer.y * height * 0.05;
      const base = Math.min(width, height) * 0.06;

      for (let i = 0; i < rings; i++) {
        const p = i / rings;
        const r = base + p * Math.min(width, height) * 0.52;
        const wobble = Math.sin(t * 0.0006 + p * 5.2) * 0.14;
        ctx.beginPath();
        ctx.ellipse(
          cx,
          cy,
          r * (1 + wobble * 0.5),
          r * (0.62 + wobble),
          -0.42 + pointer.x * 0.16 + Math.sin(t * 0.0004 + p) * 0.06,
          0,
          Math.PI * 2,
        );
        const alpha = 0.055 + (1 - p) * 0.14;
        ctx.strokeStyle =
          i % 6 === 0
            ? `rgba(38, 74, 52, ${alpha + 0.08})`
            : `rgba(24, 24, 22, ${alpha})`;
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
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="h-full w-full"
    />
  );
}
