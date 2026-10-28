
"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    );

    if (!media.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!dot || !ring || !canvas || !ctx) return;

    let active = false;
    let frameId = 0;
    let lastX = 0;
    let lastY = 0;
    let lastParticleTime = 0;
    let particles = [];

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticle = (x, y, now) => {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        life: 1,
        size: 1 + Math.random() * 1.5,
      });

      // Plafond strict pour limiter le coût de rendu.
      if (particles.length > 24) {
        particles.shift();
      }

      lastParticleTime = now;
    };

    const animate = () => {
      frameId = 0;

      if (!active) {
        particles = [];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles = particles.filter((particle) => particle.life > 0.03);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.035;

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.size * particle.life,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(56, 189, 248, ${particle.life * 0.65})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#38bdf8";
        ctx.fill();
      }

      ctx.shadowBlur = 0;

      if (particles.length > 0) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const startAnimation = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const onPointerMove = (event) => {
      const { clientX: x, clientY: y } = event;

      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ring.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      const now = performance.now();
      const distance = Math.hypot(x - lastX, y - lastY);

      if (
        distance >= 9 &&
        now - lastParticleTime >= 12
      ) {
        createParticle(x, y, now);
        startAnimation();
      }

      lastX = x;
      lastY = y;
    };

    const onPointerEnter = (event) => {
      if (event.pointerType === "touch") return;

      active = true;
      document.body.classList.add("cursor-enabled");
      dot.classList.add("is-visible");
      ring.classList.add("is-visible");

      onPointerMove(event);
    };

    const onPointerLeave = () => {
      active = false;
      document.body.classList.remove("cursor-enabled");
      dot.classList.remove("is-visible");
      ring.classList.remove("is-visible");

      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = 0;
      }

      particles = [];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const onPointerOver = (event) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const interactive = target.closest(
        'a, button, [role="button"], input, select, textarea, label, [data-cursor-hover]'
      );

      ring.classList.toggle("is-hovering", Boolean(interactive));
    };

    const onWindowBlur = () => onPointerLeave();

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", onPointerMove, {
      passive: true,
    });
    window.addEventListener("pointerover", onPointerOver);
    window.addEventListener("blur", onWindowBlur);
    document.documentElement.addEventListener(
      "pointerleave",
      onPointerLeave
    );
    document.documentElement.addEventListener(
      "pointerenter",
      onPointerEnter
    );

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("blur", onWindowBlur);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave
      );
      document.documentElement.removeEventListener(
        "pointerenter",
        onPointerEnter
      );

      document.body.classList.remove("cursor-enabled");

      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="custom-cursor-system" aria-hidden="true">
      <canvas ref={canvasRef} className="cursor-trail" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
