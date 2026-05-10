'use client';

import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  z: number;
  baseY: number;
  angle: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initMesh();
    };

    const initMesh = () => {
      pointsRef.current = [];
      const isMobile = window.innerWidth < 768;
      const cols = isMobile ? 20 : 40;
      const rows = isMobile ? 20 : 40;
      const spacing = isMobile ? 60 : 40;
      
      const startX = -((cols - 1) * spacing) / 2;
      const startZ = 100;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = startX + i * spacing;
          const z = startZ + j * spacing;
          const angle = Math.sqrt(x * x + z * z) * 0.05;
          pointsRef.current.push({
            x,
            baseY: 100,
            y: 100,
            z,
            angle
          });
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const fov = 350;

      timeRef.current += 0.02;

      pointsRef.current.forEach((point) => {
        point.y = point.baseY + Math.sin(point.angle + timeRef.current) * 40;

        const scale = fov / (fov + point.z);
        const x2d = point.x * scale + centerX;
        const y2d = point.y * scale + centerY + 100;

        if (point.z > 0 && x2d > 0 && x2d < canvas.width && y2d > 0 && y2d < canvas.height) {
          // Alternate colors for cyberpunk vibe
          const isCyan = (Math.floor(point.x + point.z) % 2 === 0);
          ctx.fillStyle = isCyan ? 'rgba(0, 240, 255, 0.6)' : 'rgba(255, 0, 255, 0.5)';
          ctx.shadowColor = isCyan ? 'rgba(0, 240, 255, 0.5)' : 'rgba(255, 0, 255, 0.5)';
          
          ctx.beginPath();
          const pointSize = scale * 2;
          ctx.arc(x2d, y2d, pointSize, 0, Math.PI * 2);
          ctx.fill();
        }
        
        point.z -= 1;
        if (point.z < 10) {
          point.z = 100 + 40 * 40;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-50 mix-blend-screen"
      style={{ background: 'transparent' }}
    />
  );
}
