'use client';

import { useEffect, useRef } from 'react';

export default function ParticleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x, y } = mouseRef.current;

      if (x > -100 && y > -100) {
        ctx.strokeStyle = 'rgba(223, 255, 0, 0.15)'; // chartreuse
        ctx.lineWidth = 1;

        // Draw Crosshair
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();

        // Draw Center Target
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)'; // cyan
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.stroke();

        // Draw Coordinate Text
        ctx.fillStyle = 'rgba(223, 255, 0, 0.5)';
        ctx.font = '10px monospace';
        ctx.fillText(`X:${x} Y:${y}`, x + 15, y - 15);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-30 mix-blend-screen"
      style={{ background: 'transparent' }}
    />
  );
}