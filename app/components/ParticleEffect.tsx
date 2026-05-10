'use client';

import { useEffect, useRef } from 'react';

export default function ParticleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
      return;
    }

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
      timeRef.current += 0.05;

      const { x, y } = mouseRef.current;

      if (x > -100 && y > -100) {
        // Neon Cyan Vertical Line
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();

        // Neon Pink Horizontal Line
        ctx.strokeStyle = 'rgba(255, 0, 255, 0.3)';
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();

        // Inner Glow Lines
        ctx.lineWidth = 2;
        ctx.shadowColor = 'rgba(0, 240, 255, 0.5)';
        ctx.shadowBlur = 10;
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();

        ctx.shadowColor = 'rgba(255, 0, 255, 0.5)';
        ctx.shadowBlur = 10;
        ctx.strokeStyle = 'rgba(255, 0, 255, 0.2)';
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();

        ctx.shadowBlur = 0;

        // Center Target Rings
        const ringColors = [
          { color: 'rgba(0, 240, 255, 0.6)', size: 20 + Math.sin(timeRef.current) * 5 },
          { color: 'rgba(255, 0, 255, 0.6)', size: 15 },
          { color: 'rgba(0, 240, 255, 0.8)', size: 10 },
        ];

        ringColors.forEach((ring, i) => {
          ctx.strokeStyle = ring.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(x, y, ring.size, 0, Math.PI * 2);
          ctx.stroke();
        });

        // Center Dot
        ctx.fillStyle = 'rgba(0, 240, 255, 0.8)';
        ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Target Cross
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.6)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x - 8, y);
        ctx.lineTo(x - 3, y);
        ctx.moveTo(x + 3, y);
        ctx.lineTo(x + 8, y);
        ctx.moveTo(x, y - 8);
        ctx.lineTo(x, y - 3);
        ctx.moveTo(x, y + 3);
        ctx.lineTo(x, y + 8);
        ctx.stroke();

        // Coordinate Display
        ctx.font = '10px monospace';
        ctx.fillStyle = 'rgba(0, 240, 255, 0.7)';
        ctx.shadowColor = 'rgba(0, 240, 255, 0.5)';
        ctx.shadowBlur = 5;
        ctx.fillText(`X:${x} Y:${y}`, x + 15, y - 15);
        ctx.shadowBlur = 0;

        // Decorative Corner Brackets
        ctx.strokeStyle = 'rgba(255, 0, 255, 0.4)';
        ctx.lineWidth = 1;
        const bracketSize = 15;
        ctx.beginPath();
        ctx.moveTo(x - bracketSize, y - bracketSize);
        ctx.lineTo(x - bracketSize, y - bracketSize + 5);
        ctx.moveTo(x - bracketSize, y - bracketSize);
        ctx.lineTo(x - bracketSize + 5, y - bracketSize);
        ctx.moveTo(x + bracketSize, y - bracketSize);
        ctx.lineTo(x + bracketSize - 5, y - bracketSize);
        ctx.moveTo(x + bracketSize, y - bracketSize);
        ctx.lineTo(x + bracketSize, y - bracketSize + 5);
        ctx.moveTo(x - bracketSize, y + bracketSize);
        ctx.lineTo(x - bracketSize, y + bracketSize - 5);
        ctx.moveTo(x - bracketSize, y + bracketSize);
        ctx.lineTo(x - bracketSize + 5, y + bracketSize);
        ctx.moveTo(x + bracketSize, y + bracketSize);
        ctx.lineTo(x + bracketSize - 5, y + bracketSize);
        ctx.moveTo(x + bracketSize, y + bracketSize);
        ctx.lineTo(x + bracketSize, y + bracketSize - 5);
        ctx.stroke();
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
