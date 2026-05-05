'use client';

import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import ParticleEffect from './components/ParticleEffect';
import StarField from './components/StarField';

const skills = ['CesiumJS', 'MapboxGL', 'Three.js', 'React', 'TypeScript', 'Rust'];
const projects = [
  { title: 'MapVue', desc: 'Vue3 MapboxGL component library.', tags: ['Vue3', 'MapboxGL', 'TS'], link: 'https://github.com/zhujia/mapvue' },
  { title: 'TimeMap', desc: 'WebGL map engine for big geospatial datasets.', tags: ['WebGL', 'Canvas', 'TS'], link: 'https://github.com/zhujia/timemap' },
  { title: 'Vue-Cesium', desc: 'CesiumJS wrapper for Vue3 3D earth apps.', tags: ['CesiumJS', 'Vue3'], link: 'https://github.com/zhujia/vue-cesium' },
  { title: 'Cesium-Extends', desc: 'Event, data loading and drawing extensions.', tags: ['CesiumJS', 'GIS'], link: 'https://github.com/zhujia/cesium-extends' },
  { title: 'GaoFen-Parser', desc: 'Remote sensing satellite data parser.', tags: ['Python', 'Data'], link: 'https://github.com/zhujia/gaofen-parser' },
  { title: 'Flutter Map SDK', desc: 'Native map SDK integration for Flutter.', tags: ['Flutter', 'Android'], link: 'https://github.com/zhujia/flutter_with_map' }
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-slate-200 font-mono relative selection:bg-cyan-glow/60 selection:text-black">
      <div className="scanline" />
      <Navigation />
      <StarField />
      <ParticleEffect />
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-30" />
      <div
        className="fixed pointer-events-none z-10 w-[560px] h-[560px] rounded-full opacity-20 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,255,0.5) 0%, rgba(139,92,246,0.24) 38%, transparent 70%)',
          left: mousePosition.x - 280,
          top: mousePosition.y - 280
        }}
      />

      <main className="relative z-20 w-full">
        <section id="home" className="min-h-[100dvh] pt-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="glass-panel p-8 md:p-12 lg:p-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 bg-cyan-glow rounded-full shadow-[0_0_16px_rgba(0,229,255,0.9)] animate-pulse" />
                <span className="text-xs tracking-[0.28em] text-cyan-glow uppercase">Neural Interface Online</span>
              </div>
              <h1 className="font-space text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] neon-title">ZHU JIA</h1>
              <p className="text-fuchsia-300/80 font-zh text-2xl md:text-4xl mt-3 neon-subtitle">朱嘉</p>
              <p className="mt-8 max-w-3xl text-slate-300/80 leading-relaxed text-base md:text-lg">
                Building high-performance GIS experiences, from CesiumJS and MapboxGL to real-time spatial data systems.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {skills.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="section-title">Tech Specs</div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                ['WebGL Maps', '高性能地图引擎', 'High-performance geographic rendering engines.'],
                ['Data Visualization', '复杂数据可视化', 'Complex spatial data interpretation and visual storytelling.'],
                ['UI Component System', '地图组件库', 'Reusable map component libraries (Vue/React).'],
                ['Remote Sensing', '遥感数据解析', 'Satellite data parsing and processing pipelines.']
              ].map(([title, cn, desc], i) => (
                <div key={title} className="glass-panel p-7 md:p-8 tech-panel">
                  <div className="text-xs text-cyan-glow mb-4">0{i + 1}</div>
                  <h3 className="font-space text-3xl text-white mb-2">{title}</h3>
                  <p className="text-chartreuse tracking-wider mb-4">{cn}</p>
                  <p className="text-slate-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 md:py-24 border-y border-cyan-glow/10">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="section-title">Project Matrix</div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project) => (
                <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="glass-panel p-7 group transition-all hover:-translate-y-1">
                  <h3 className="font-space text-2xl text-white group-hover:text-cyan-glow transition-colors">{project.title}</h3>
                  <p className="mt-3 text-slate-400 min-h-[72px]">{project.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="glass-panel p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <div className="section-title mb-4">Init Link</div>
                <p className="text-slate-400 max-w-xl">System ready for new inputs. Let&apos;s build meaningful spatial intelligence products together.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://github.com/zhujia" target="_blank" rel="noopener noreferrer" className="btn-tech">Access Git Node</a>
                <a href="https://zhujia.me" target="_blank" rel="noopener noreferrer" className="btn-tech btn-tech-alt">Ping Server</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
