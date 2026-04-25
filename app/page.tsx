'use client';

import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import ParticleEffect from './components/ParticleEffect';
import StarField from './components/StarField';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-slate-300 font-mono relative selection:bg-chartreuse selection:text-black">
      {/* CRT Scanline */}
      <div className="scanline" />

      {/* Navigation */}
      <Navigation />

      {/* Background Effects */}
      <StarField />
      <ParticleEffect />
      
      {/* Static Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-30" />

      {/* Mouse Follow Glow (Utilitarian variant) */}
      <div
        className="fixed pointer-events-none z-10 w-[500px] h-[500px] rounded-full opacity-10 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, var(--color-cyan-glow) 0%, transparent 60%)',
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Main Content */}
      <main className="relative z-20">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[100dvh] flex items-center justify-center px-6 pt-24 md:pt-32 pb-16">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-block border border-chartreuse/30 bg-chartreuse/5 px-3 py-1 mb-6">
                <span className="text-chartreuse text-xs tracking-widest uppercase flex items-center gap-2">
                  <span className="w-2 h-2 bg-chartreuse animate-blink" />
                  System Initialization Complete
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-space font-bold uppercase tracking-tighter mb-4 text-white flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 leading-none">
                <span className="leading-none">Zhu Jia</span>
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-500 font-zh tracking-normal leading-none">朱嘉</span>
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                <div className="hidden sm:block h-[1px] w-12 bg-chartreuse" />
                <div className="sm:hidden w-8 h-[2px] bg-chartreuse" />
                <p className="text-base sm:text-lg md:text-xl text-cyan-glow font-mono tracking-widest uppercase">
                  WebGL Map & Data Vis Engineer
                </p>
              </div>
              
              <p className="text-slate-400 max-w-2xl mb-12 leading-relaxed text-sm md:text-base border-l border-slate-800 pl-4 font-zh tracking-wide">
                &quot;敦兮其若朴，旷兮其若谷&quot; <br/>
                <span className="text-slate-500 mt-2 block">Focusing on high-performance geographic information systems, from CesiumJS to MapboxGL, exploring the infinite possibilities of spatial data.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button type="button" className="btn-tech font-space tracking-wider w-full sm:w-auto">
                  建立连接 [INIT_LINK]
                </button>
                <button type="button" className="btn-tech btn-tech-alt font-space tracking-wider w-full sm:w-auto">
                  下载简历 [DL_SPECS]
                </button>
              </div>
            </div>

            {/* Tech Decoration Panel */}
            <div className="hidden lg:block lg:col-span-4 relative h-[400px]">
              <div className="absolute inset-0 tech-panel p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start border-b border-[#1a1a1a] pb-4">
                  <span className="text-xs text-slate-500">SYS.DIAGNOSTICS</span>
                  <span className="text-chartreuse text-xs animate-pulse">REC</span>
                </div>
                <div className="space-y-4">
                  {['WebGL', 'CesiumJS', 'React', 'Vue3', 'Rust'].map((skill, i) => (
                    <div key={skill} className="flex items-center gap-3 text-sm">
                      <span className="text-slate-600">0{i + 1}</span>
                      <div className="flex-1 h-[1px] bg-[#1a1a1a]" />
                      <span className="text-slate-300 font-space tracking-wider">{skill}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#1a1a1a] pt-4 flex justify-between text-xs">
                  <span className="text-slate-500">MEM: OK</span>
                  <span className="text-slate-500">CPU: OK</span>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* SPECS SECTION */}
        <section id="about" className="min-h-[100dvh] flex items-center justify-center px-6 py-16 md:py-24 relative">
          <div className="max-w-6xl w-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12 sm:mb-16">
              <h2 className="text-3xl md:text-5xl font-space font-bold text-white tracking-tighter uppercase">
                Technical_Specs
              </h2>
              <div className="hidden sm:block flex-1 h-[1px] bg-[#1a1a1a]" />
              <div className="sm:hidden w-12 h-[1px] bg-chartreuse" />
              <span className="text-chartreuse font-mono text-sm self-start sm:self-auto">02</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { id: 'SYS.01', title: 'WebGL Maps', cnTitle: '高性能地图引擎', desc: 'High-performance geographic rendering engines.', metrics: '99.9%' },
                { id: 'SYS.02', title: 'Data Vis', cnTitle: '复杂数据可视化', desc: 'Complex spatial data interpretation & visual layout.', metrics: '100%' },
                { id: 'SYS.03', title: 'UI/UX Comps', cnTitle: '地图组件库', desc: 'Reusable map component libraries (Vue/React).', metrics: 'OPT' },
                { id: 'SYS.04', title: 'Remote Sensing', cnTitle: '遥感数据解析', desc: 'Satellite data parsing and processing pipelines.', metrics: 'RAW' }
              ].map((item) => (
                <div key={item.id} className="tech-panel p-6 group cursor-default">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs text-slate-500 group-hover:text-chartreuse transition-colors">{item.id}</span>
                    <span className="text-xs font-mono text-cyan-glow bg-cyan-glow/10 px-2 py-1">{item.metrics}</span>
                  </div>
                  <h3 className="text-xl font-space font-bold text-slate-200 mb-1">{item.title}</h3>
                  <p className="text-sm font-zh text-slate-400 mb-4 tracking-wider">{item.cnTitle}</p>
                  <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                    {item.desc}
                  </p>
                  <div className="mt-8 h-1 w-full bg-[#1a1a1a] relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-chartreuse w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap gap-3">
              {['CesiumJS', 'MapboxGL', 'Three.js', 'Vue.js', 'React', 'TypeScript', 'Python', 'Rust', 'Docker', 'Flutter'].map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs border border-[#1a1a1a] bg-[#0d0d0d] text-slate-400 hover:border-chartreuse hover:text-chartreuse transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* DATA SECTION */}
        <section id="projects" className="min-h-[100dvh] flex items-center justify-center px-6 py-16 md:py-24 relative">
          <div className="max-w-6xl w-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12 sm:mb-16">
              <h2 className="text-3xl md:text-5xl font-space font-bold text-white tracking-tighter uppercase">
                Data_Modules
              </h2>
              <div className="hidden sm:block flex-1 h-[1px] bg-[#1a1a1a]" />
              <div className="sm:hidden w-12 h-[1px] bg-chartreuse" />
              <span className="text-chartreuse font-mono text-sm self-start sm:self-auto">03</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'MapVue', desc: 'Vue3 MapboxGL component library.', tags: ['Vue3', 'MapboxGL', 'TS'], link: 'https://github.com/timeroute/mapvue' },
                { title: 'TimeMap', desc: 'WebGL high-perf map engine for big data.', tags: ['WebGL', 'Canvas', 'TS'], link: 'https://github.com/timeroute/timemap' },
                { title: 'Vue-Cesium', desc: 'CesiumJS wrapper for Vue3 3D earth apps.', tags: ['CesiumJS', 'Vue3'], link: 'https://github.com/timeroute/vue-cesium' },
                { title: 'Cesium-Extends', desc: 'Extensions: event sub, data loading, drawing.', tags: ['CesiumJS', 'GIS'], link: 'https://github.com/timeroute/cesium-extends' },
                { title: 'GaoFen-Parser', desc: 'Remote sensing satellite data parser.', tags: ['Python', 'Data'], link: 'https://github.com/timeroute/gaofen-parser' },
                { title: 'Flutter Map SDK', desc: 'Native map SDK integration for Flutter.', tags: ['Flutter', 'Android'], link: 'https://github.com/timeroute/flutter_with_map' }
              ].map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-panel p-6 block group hover:no-underline"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 border border-[#1a1a1a] flex items-center justify-center group-hover:border-chartreuse group-hover:text-chartreuse transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <svg className="w-4 h-4 text-slate-600 group-hover:text-chartreuse group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-space font-bold text-slate-200 mb-2 group-hover:text-white">{project.title}</h3>
                  <p className="text-sm font-zh text-slate-500 mb-6 h-10 group-hover:text-slate-400 transition-colors tracking-wide">{project.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider text-slate-400 bg-[#1a1a1a] px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button type="button" className="btn-tech">
                Load All Modules
              </button>
            </div>
          </div>
        </section>

        {/* LINK SECTION */}
        <section id="contact" className="min-h-[70dvh] flex items-center justify-center px-6 py-16 md:py-24 relative">
          <div className="max-w-4xl w-full">
            <div className="tech-panel p-8 md:p-16 text-center border-t-4 border-t-chartreuse">
              <div className="w-16 h-16 mx-auto border border-chartreuse flex items-center justify-center mb-8 animate-pulse">
                <div className="w-8 h-8 bg-chartreuse/20" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-6 uppercase tracking-tighter">
                Establish_Connection
              </h2>
              
              <p className="text-slate-400 max-w-xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
                Interested in geographic information systems or data visualization?
                Let&apos;s explore the boundaries of spatial tech.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
                <div className="border border-[#1a1a1a] p-4 hover:border-chartreuse transition-colors">
                  <div className="text-xs text-slate-600 mb-1">SYS.WEB</div>
                  <a href="https://zhujia.info" target="_blank" rel="noopener noreferrer" className="text-slate-200 font-space hover:text-chartreuse transition-colors">
                    zhujia.info
                  </a>
                </div>
                <div className="border border-[#1a1a1a] p-4 hover:border-chartreuse transition-colors">
                  <div className="text-xs text-slate-600 mb-1">SYS.GIT</div>
                  <a href="https://github.com/timeroute" target="_blank" rel="noopener noreferrer" className="text-slate-200 font-space hover:text-chartreuse transition-colors">
                    @timeroute
                  </a>
                </div>
                <div className="border border-[#1a1a1a] p-4 hover:border-chartreuse transition-colors">
                  <div className="text-xs text-slate-600 mb-1">SYS.LOC</div>
                  <span className="text-slate-200 font-space">
                    Beijing, CN
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://github.com/timeroute" target="_blank" rel="noopener noreferrer" className="btn-tech">
                  Access Git Node
                </a>
                <a href="https://zhujia.info" target="_blank" rel="noopener noreferrer" className="btn-tech btn-tech-alt">
                  Ping Server
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}