import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type InteractiveBackgroundProps = {
  variant?: "page" | "hero";
};

export default function InteractiveBackground({ variant = "page" }: InteractiveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frameId = 0;
    let containerObserver: ResizeObserver | undefined;
    const pointer = { x: -1000, y: -1000 };
    const pointerRadius = 155;
    const connectionDistance = 118;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.min(96, Math.max(30, Math.floor((width * height) / 14000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
      }));
      render(false);
    };

    const render = (moveParticles: boolean) => {
      context.clearRect(0, 0, width, height);

      if (pointer.x >= 0 && pointer.y >= 0) {
        const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 190);
        glow.addColorStop(0, "rgba(83, 161, 112, 0.09)");
        glow.addColorStop(1, "rgba(83, 161, 112, 0)");
        context.fillStyle = glow;
        context.fillRect(pointer.x - 190, pointer.y - 190, 380, 380);
      }

      for (const particle of particles) {
        if (moveParticles) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.hypot(dx, dy);

          if (distance > 0 && distance < pointerRadius) {
            const force = ((pointerRadius - distance) / pointerRadius) * 0.34;
            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;
          }

          particle.vx *= 0.985;
          particle.vy *= 0.985;
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < -12) particle.x = width + 12;
          if (particle.x > width + 12) particle.x = -12;
          if (particle.y < -12) particle.y = height + 12;
          if (particle.y > height + 12) particle.y = -12;
        }
      }

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const nextParticle = particles[nextIndex];
          const distance = Math.hypot(particle.x - nextParticle.x, particle.y - nextParticle.y);
          if (distance < connectionDistance) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(nextParticle.x, nextParticle.y);
            context.strokeStyle = `rgba(34, 115, 78, ${(1 - distance / connectionDistance) * 0.15})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }

        const pointerDistance = Math.hypot(particle.x - pointer.x, particle.y - pointer.y);
        if (pointerDistance < pointerRadius) {
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(pointer.x, pointer.y);
          context.strokeStyle = `rgba(31, 133, 91, ${(1 - pointerDistance / pointerRadius) * 0.2})`;
          context.lineWidth = 1;
          context.stroke();
        }

        context.beginPath();
        context.arc(particle.x, particle.y, 1.45, 0, Math.PI * 2);
        context.fillStyle = "rgba(28, 112, 77, 0.3)";
        context.fill();
      }
    };

    const animate = () => {
      render(true);
      frameId = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      window.cancelAnimationFrame(frameId);
      if (motionPreference.matches) {
        render(false);
      } else {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      if (pointer.x < 0 || pointer.y < 0 || pointer.x > width || pointer.y > height) {
        pointer.x = -1000;
        pointer.y = -1000;
      }
      if (motionPreference.matches) render(false);
    };

    const clearPointer = () => {
      pointer.x = -1000;
      pointer.y = -1000;
      if (motionPreference.matches) render(false);
    };

    resizeCanvas();
    startAnimation();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", clearPointer);
    motionPreference.addEventListener("change", startAnimation);
    if (variant === "hero" && typeof ResizeObserver !== "undefined" && canvas.parentElement) {
      containerObserver = new ResizeObserver(resizeCanvas);
      containerObserver.observe(canvas.parentElement);
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", clearPointer);
      motionPreference.removeEventListener("change", startAnimation);
      containerObserver?.disconnect();
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`interactive-background interactive-background--${variant}`}
      aria-hidden="true"
    />
  );
}