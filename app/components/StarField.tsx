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

    // Initialize 3D wave mesh
    const initMesh = () => {
      pointsRef.current = [];
      // 移动端降低密度以提高性能
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
            baseY: 100, // offset below center
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

      ctx.fillStyle = 'rgba(0, 240, 255, 0.4)';

      pointsRef.current.forEach((point) => {
        // Calculate wave motion
        point.y = point.baseY + Math.sin(point.angle + timeRef.current) * 40;

        // Project 3D to 2D
        const scale = fov / (fov + point.z);
        const x2d = point.x * scale + centerX;
        const y2d = point.y * scale + centerY + 100; // shift down slightly

        // Only draw if within bounds and in front of camera
        if (point.z > 0 && x2d > 0 && x2d < canvas.width && y2d > 0 && y2d < canvas.height) {
          ctx.beginPath();
          // Scale size based on depth
          ctx.arc(x2d, y2d, scale * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Slowly move points towards camera to create infinite forward motion
        point.z -= 1;
        if (point.z < 10) {
          point.z = 100 + 40 * 40; // recycle to back
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
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40 mix-blend-screen"
      style={{ background: 'transparent' }}
    />
  );
}