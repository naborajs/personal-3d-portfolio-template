import React, { useEffect, useRef, useCallback } from 'react';

/**
 * Ambient Background
 *
 * Renders slow-moving, large glowing orbs that drift organically across
 * the viewport. Uses a lightweight canvas approach with minimal draw calls.
 * Orbs respond very subtly to mouse position for a living feel.
 *
 * This intentionally avoids the "AI particle + connection lines" look.
 */

interface Orb {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  hue: number;
  saturation: number;
  lightness: number;
  alpha: number;
  phase: number; // for organic pulsing
  phaseSpeed: number;
}

const ORB_COUNT_DESKTOP = 6;
const ORB_COUNT_MOBILE = 4;

function createOrb(w: number, h: number): Orb {
  const hueChoice = Math.random();
  let hue: number;
  let saturation: number;
  let lightness: number;

  if (hueChoice < 0.4) {
    // Cyan / Teal
    hue = 175 + Math.random() * 15;
    saturation = 80 + Math.random() * 20;
    lightness = 45 + Math.random() * 15;
  } else if (hueChoice < 0.7) {
    // Deep blue
    hue = 220 + Math.random() * 20;
    saturation = 60 + Math.random() * 20;
    lightness = 35 + Math.random() * 15;
  } else {
    // Soft purple
    hue = 260 + Math.random() * 20;
    saturation = 50 + Math.random() * 30;
    lightness = 30 + Math.random() * 20;
  }

  return {
    x: Math.random() * w,
    y: Math.random() * h,
    radius: Math.min(w, h) * (0.15 + Math.random() * 0.2),
    vx: (Math.random() - 0.5) * 0.15,
    vy: (Math.random() - 0.5) * 0.12,
    hue,
    saturation,
    lightness,
    alpha: 0.04 + Math.random() * 0.04,
    phase: Math.random() * Math.PI * 2,
    phaseSpeed: 0.002 + Math.random() * 0.003,
  };
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const orbsRef = useRef<Orb[]>([]);
  const rafRef = useRef<number>(0);
  const prefersReducedMotion = useRef(false);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    const count = w < 768 ? ORB_COUNT_MOBILE : ORB_COUNT_DESKTOP;
    orbsRef.current = Array.from({ length: count }, () => createOrb(w, h));
  }, []);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    init();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => init();
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouse, { passive: true });

    let time = 0;

    function draw() {
      if (!ctx || !canvas) return;
      const w = canvas.width;
      const h = canvas.height;

      // Clear with deep background
      ctx.fillStyle = '#030305';
      ctx.fillRect(0, 0, w, h);

      const { x: mx, y: my } = mouseRef.current;

      // Very subtle mouse-following glow (only on desktop)
      if (w >= 768 && mx > 0 && my > 0) {
        const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 400);
        grad.addColorStop(0, 'rgba(0, 229, 255, 0.025)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      if (!prefersReducedMotion.current) {
        time++;
      }

      // Draw orbs
      for (const orb of orbsRef.current) {
        if (!prefersReducedMotion.current) {
          orb.x += orb.vx;
          orb.y += orb.vy;
          orb.phase += orb.phaseSpeed;
        }

        // Wrap edges softly
        if (orb.x < -orb.radius) orb.x = w + orb.radius;
        if (orb.x > w + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = h + orb.radius;
        if (orb.y > h + orb.radius) orb.y = -orb.radius;

        // Organic pulsing
        const pulseFactor = 1 + Math.sin(orb.phase) * 0.08;
        const currentRadius = orb.radius * pulseFactor;
        const currentAlpha = orb.alpha * (0.85 + Math.sin(orb.phase * 0.7) * 0.15);

        // Subtle mouse influence
        let drawX = orb.x;
        let drawY = orb.y;
        if (w >= 768 && mx > 0 && my > 0) {
          const dx = mx - orb.x;
          const dy = my - orb.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / 600) * 8;
          drawX += (dx / (dist || 1)) * influence;
          drawY += (dy / (dist || 1)) * influence;
        }

        const grad = ctx.createRadialGradient(
          drawX,
          drawY,
          0,
          drawX,
          drawY,
          currentRadius,
        );
        grad.addColorStop(
          0,
          `hsla(${orb.hue}, ${orb.saturation}%, ${orb.lightness}%, ${currentAlpha * 1.5})`,
        );
        grad.addColorStop(
          0.5,
          `hsla(${orb.hue}, ${orb.saturation}%, ${orb.lightness}%, ${currentAlpha * 0.6})`,
        );
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(drawX, drawY, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(rafRef.current);
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
