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
  { title: 'Flutter Map SDK', desc: 'Native map SDK integration for Flutter.', tags: ['Flutter', 'Android'], link: 'https://github.com/zhujia/flutter_with_map' },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCursorGlow, setShowCursorGlow] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setShowCursorGlow(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-slate-200 font-mono relative overflow-hidden">
      <div className="cyber-scanline" />
      <div className="cyber-vignette" />
      <div className="cyber-noise" />

      <Navigation />
      <StarField />
      <ParticleEffect />
      <div className="fixed inset-0 pointer-events-none z-0 cyber-grid" />

      <div
        className="fixed pointer-events-none z-10 w-[400px] h-[400px] rounded-full opacity-20 mix-blend-screen transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(0,240,255,0.5) 0%, rgba(255,0,255,0.25) 35%, transparent 70%)',
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          opacity: showCursorGlow ? 0.2 : 0,
        }}
      />

      <main className="relative z-20 w-full">
        <section id="home" className="min-h-[100dvh] pt-24 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-neon-cyan via-neon-pink to-transparent" />
                <div className="cyber-panel p-8 md:p-10 lg:p-12">
                  <div className="absolute -top-3 left-8 bg-obsidian px-3 py-1">
                    <span className="cyber-tag flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_8px_var(--neon-cyan)]" />
                      SYSTEM READY
                    </span>
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-xs tracking-[0.3em] text-neon-pink uppercase font-mono">
                        &lt; FULL STACK ENGINEER /&gt;
                      </span>
                    </div>

                    <h1 className="cyber-title text-5xl md:text-7xl lg:text-8xl leading-none mb-4" data-text="ZHU JIA">
                      ZHU JIA
                    </h1>

                    <p className="text-neon-pink text-xl md:text-2xl lg:text-3xl font-space mb-8 tracking-wider">
                      朱嘉
                    </p>

                    <p className="text-slate-400 leading-relaxed text-base md:text-lg mb-10 max-w-md">
                      Building high-performance GIS experiences, from CesiumJS and MapboxGL to real-time spatial data systems.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {skills.map((skill) => (
                        <span key={skill} className="cyber-chip">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a href="#projects" className="cyber-btn">
                        VIEW PROJECTS
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                      <a href="#contact" className="cyber-btn cyber-btn-alt">
                        GET IN TOUCH
                      </a>
                    </div>
                  </div>
                </div>

                <div className="cyber-divider mt-12" />

                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neon-yellow rounded-full animate-pulse" />
                      <span>CPU: 12%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse" />
                      <span>MEM: 4.2GB</span>
                    </div>
                  </div>
                  <span>v3.0.0</span>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 border border-neon-pink/20 translate-x-4 translate-y-4" />
                  <div className="relative cyber-card p-8">
                    <div className="absolute top-0 right-0 cyber-corner cyber-corner-tr" />
                    <div className="absolute bottom-0 left-0 cyber-corner cyber-corner-bl border-neon-pink" />

                    <div className="font-mono text-xs text-neon-cyan mb-4 tracking-widest">
                      [ SYSTEM DIAGNOSTICS ]
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-400">SPATIAL RENDERING</span>
                          <span className="text-neon-cyan">98%</span>
                        </div>
                        <div className="cyber-progress">
                          <div className="cyber-progress-bar" style={{ width: '98%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-400">3D VISUALIZATION</span>
                          <span className="text-neon-pink">95%</span>
                        </div>
                        <div className="cyber-progress">
                          <div className="cyber-progress-bar" style={{ width: '95%', background: 'linear-gradient(90deg, var(--neon-pink), var(--neon-cyan))' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-400">DATA PROCESSING</span>
                          <span className="text-neon-yellow">92%</span>
                        </div>
                        <div className="cyber-progress">
                          <div className="cyber-progress-bar" style={{ width: '92%', background: 'linear-gradient(90deg, var(--neon-yellow), var(--neon-cyan))' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-400">UI/UX DESIGN</span>
                          <span className="text-neon-pink">88%</span>
                        </div>
                        <div className="cyber-progress">
                          <div className="cyber-progress-bar" style={{ width: '88%', background: 'linear-gradient(90deg, var(--neon-pink), var(--neon-yellow))' }} />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neon-cyan/20">
                      <div className="font-mono text-xs text-slate-500 space-y-1">
                        <div className="flex justify-between">
                          <span>STATUS</span>
                          <span className="text-neon-cyan">OPERATIONAL</span>
                        </div>
                        <div className="flex justify-between">
                          <span>LAST UPDATE</span>
                          <span>{new Date().toISOString().split('T')[0]}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>LOCATION</span>
                          <span>BEIJING, CN</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="cyber-section-title mb-4">SKILL MATRIX</h2>
              <p className="text-slate-500 font-mono text-sm tracking-wider uppercase">
                TECHNICAL CAPABILITIES
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'WebGL Maps', cn: '高性能地图引擎', desc: 'High-performance geographic rendering engines.', color: 'cyan' },
                { title: 'Data Visualization', cn: '复杂数据可视化', desc: 'Complex spatial data interpretation and visual storytelling.', color: 'pink' },
                { title: 'UI Component System', cn: '地图组件库', desc: 'Reusable map component libraries (Vue/React).', color: 'yellow' },
                { title: 'Remote Sensing', cn: '遥感数据解析', desc: 'Satellite data parsing and processing pipelines.', color: 'blue' },
              ].map((item, index) => (
                <div key={item.title} className="cyber-card group">
                  <div className="p-6 relative">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                      item.color === 'cyan' ? 'from-neon-cyan via-neon-pink to-transparent' :
                      item.color === 'pink' ? 'from-neon-pink via-neon-cyan to-transparent' :
                      item.color === 'yellow' ? 'from-neon-yellow via-neon-pink to-transparent' :
                      'from-blue-500 via-neon-cyan to-transparent'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className="text-xs font-mono mb-4 tracking-widest opacity-50">
                      0{index + 1}
                    </div>

                    <h3 className="font-space text-2xl text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className={`text-sm mb-4 ${
                      item.color === 'cyan' ? 'text-neon-cyan' :
                      item.color === 'pink' ? 'text-neon-pink' :
                      item.color === 'yellow' ? 'text-neon-yellow' :
                      'text-blue-400'
                    }`}>
                      {item.cn}
                    </p>

                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className={`${
                        item.color === 'cyan' ? 'text-neon-cyan' :
                        item.color === 'pink' ? 'text-neon-pink' :
                        item.color === 'yellow' ? 'text-neon-yellow' :
                        'text-blue-400'
                      }`}>→</span>
                      <span className="text-slate-400">EXPLORE</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 md:py-28 border-y border-neon-cyan/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
              <div>
                <h2 className="cyber-section-title mb-4">PROJECTS</h2>
                <p className="text-slate-500 font-mono text-sm tracking-wider uppercase">
                  SHOWCASE & PORTFOLIO
                </p>
              </div>
              <div className="font-mono text-xs text-slate-600 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full" />
                  <span>TOTAL: {projects.length}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-card group"
                >
                  <div className="p-6 relative h-full flex flex-col">
                    <div className="absolute top-0 right-0 cyber-corner cyber-corner-tr" />
                    <div className="absolute bottom-0 left-0 cyber-corner cyber-corner-bl border-neon-pink" />

                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-mono text-neon-pink tracking-widest">
                        PROJECT
                      </span>
                      <svg className="w-4 h-4 text-slate-600 group-hover:text-neon-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>

                    <h3 className="font-space text-2xl text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span key={tag} className="cyber-chip text-[10px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="cyber-card p-8 md:p-12">
              <div className="absolute top-0 left-0 cyber-corner cyber-corner-tl" />
              <div className="absolute bottom-0 right-0 cyber-corner cyber-corner-br border-neon-pink" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="cyber-section-title mb-4">CONNECT</h2>
                  <p className="text-slate-400 max-w-md mb-6">
                    System ready for new inputs. Let's build meaningful spatial intelligence products together.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm font-mono">
                      <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_8px_var(--neon-cyan)]" />
                      <span className="text-slate-500">STATUS:</span>
                      <span className="text-neon-cyan">AVAILABLE FOR HIRE</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com/zhujia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-btn w-full sm:w-auto justify-center"
                  >
                    GITHUB
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://zhujia.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-btn cyber-btn-alt w-full sm:w-auto justify-center"
                  >
                    WEBSITE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 border-t border-neon-cyan/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="font-mono text-xs text-slate-600">
                &copy; {new Date().getFullYear()} ZHU JIA. ALL RIGHTS RESERVED.
              </div>
              <div className="font-mono text-xs text-slate-600 flex items-center gap-2">
                <span className="w-1 h-1 bg-neon-cyan rounded-full animate-pulse" />
                <span>BUILD: v3.0.0</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
