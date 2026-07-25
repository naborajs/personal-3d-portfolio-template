import React, { useEffect, useRef, useCallback } from 'react';

/**
 * Siri-like Neural Network Background
 *
 * Connected particle system with glowing nodes and flowing connection
 * lines, inspired by Apple Siri's neural visualization. Uses warm
 * orange/amber/red palette. Mouse-reactive, performance-optimized.
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  hue: number;
  saturation: number;
  lightness: number;
  pulsePhase: number;
  pulseSpeed: number;
}

const PARTICLE_COUNT_DESKTOP = 90;
const PARTICLE_COUNT_MOBILE = 45;
const CONNECTION_DIST = 160;
const MOUSE_RADIUS = 250;

function createParticle(w: number, h: number): Particle {
  // Warm palette distribution
  const roll = Math.random();
  let hue: number, saturation: number, lightness: number;

  if (roll < 0.45) {
    // Orange
    hue = 18 + Math.random() * 15;
    saturation = 85 + Math.random() * 15;
    lightness = 50 + Math.random() * 10;
  } else if (roll < 0.75) {
    // Amber / Gold
    hue = 38 + Math.random() * 10;
    saturation = 90 + Math.random() * 10;
    lightness = 50 + Math.random() * 8;
  } else if (roll < 0.9) {
    // Warm Red
    hue = 5 + Math.random() * 10;
    saturation = 80 + Math.random() * 15;
    lightness = 48 + Math.random() * 10;
  } else {
    // Soft warm white (rare nodes for depth)
    hue = 30 + Math.random() * 10;
    saturation = 20 + Math.random() * 20;
    lightness = 70 + Math.random() * 15;
  }

  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    radius: 1 + Math.random() * 1.5,
    baseAlpha: 0.15 + Math.random() * 0.3,
    hue,
    saturation,
    lightness,
    pulsePhase: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.015,
  };
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const prefersReducedMotion = useRef(false);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    const count = w < 768 ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
    particlesRef.current = Array.from({ length: count }, () =>
      createParticle(w, h),
    );
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
    const handleMouseLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouse, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    function draw() {
      if (!ctx || !canvas) return;
      const w = canvas.width;
      const h = canvas.height;
      const particles = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Clear with deep warm-tinted black
      ctx.fillStyle = '#060608';
      ctx.fillRect(0, 0, w, h);

      // Mouse-following warm glow (desktop only)
      if (w >= 768 && mx > 0 && my > 0) {
        const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 350);
        grad.addColorStop(0, 'rgba(255, 107, 44, 0.04)');
        grad.addColorStop(0.5, 'rgba(255, 170, 0, 0.015)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      // Update particles
      if (!prefersReducedMotion.current) {
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          p.pulsePhase += p.pulseSpeed;

          // Mouse repulsion (subtle)
          if (mx > 0 && my > 0) {
            const dx = p.x - mx;
            const dy = p.y - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MOUSE_RADIUS && dist > 0) {
              const force = (1 - dist / MOUSE_RADIUS) * 0.8;
              p.vx += (dx / dist) * force * 0.1;
              p.vy += (dy / dist) * force * 0.1;
            }
          }

          // Soft velocity dampening
          p.vx *= 0.998;
          p.vy *= 0.998;

          // Clamp speed
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > 0.6) {
            p.vx = (p.vx / speed) * 0.6;
            p.vy = (p.vy / speed) * 0.6;
          }

          // Wrap edges
          if (p.x < -20) p.x = w + 20;
          if (p.x > w + 20) p.x = -20;
          if (p.y < -20) p.y = h + 20;
          if (p.y > h + 20) p.y = -20;
        }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < CONNECTION_DIST * CONNECTION_DIST) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / CONNECTION_DIST) * 0.12;

            // Gradient connection line between the two node colors
            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(
              0,
              `hsla(${p1.hue}, ${p1.saturation}%, ${p1.lightness}%, ${alpha})`,
            );
            grad.addColorStop(
              1,
              `hsla(${p2.hue}, ${p2.saturation}%, ${p2.lightness}%, ${alpha})`,
            );

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw nodes with glow
      for (const p of particles) {
        const pulse = 1 + Math.sin(p.pulsePhase) * 0.3;
        const currentAlpha = p.baseAlpha * pulse;
        const currentRadius = p.radius * (0.9 + Math.sin(p.pulsePhase * 0.7) * 0.15);

        // Mouse proximity boost
        let proximityBoost = 0;
        if (mx > 0 && my > 0) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS) {
            proximityBoost = (1 - dist / MOUSE_RADIUS) * 0.4;
          }
        }

        // Outer glow
        const glowRadius = currentRadius * (3 + proximityBoost * 4);
        const glowGrad = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, glowRadius,
        );
        glowGrad.addColorStop(
          0,
          `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${(currentAlpha + proximityBoost) * 0.3})`,
        );
        glowGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Core node
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, ${p.saturation}%, ${p.lightness + 10}%, ${currentAlpha + proximityBoost})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
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
