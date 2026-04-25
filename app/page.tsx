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
        <section id="home" className="min-h-[90dvh] flex items-center justify-center px-6 sm:px-12 lg:px-20 pt-28 md:pt-36 pb-12 sm:pb-20">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex border border-chartreuse/40 bg-chartreuse/5 px-4 py-1.5 mb-8 self-start">
                <span className="text-chartreuse text-[10px] sm:text-xs tracking-[0.2em] uppercase flex items-center gap-3">
                  <span className="w-2 h-2 bg-chartreuse animate-blink shadow-[0_0_8px_rgba(223,255,0,0.8)]" />
                  System Initialization Complete
                </span>
              </div>
              
              <h1 className="text-6xl sm:text-7xl md:text-[6rem] lg:text-[7rem] font-space font-bold uppercase tracking-tighter mb-6 text-white flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 leading-[0.9]">
                <span className="leading-[0.9]">Zhu Jia</span>
                <span className="text-4xl sm:text-5xl md:text-6xl text-slate-500 font-zh tracking-normal leading-none mt-2 sm:mt-0">朱嘉</span>
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10">
                <div className="hidden sm:block h-[2px] w-16 bg-chartreuse" />
                <div className="sm:hidden w-12 h-[2px] bg-chartreuse" />
                <p className="text-lg sm:text-xl md:text-2xl text-cyan-glow font-mono tracking-widest uppercase">
                  WebGL Map & Data Vis Engineer
                </p>
              </div>
              
              <p className="text-slate-400 max-w-2xl mb-12 leading-[1.8] text-base md:text-lg border-l-2 border-slate-800 pl-6 font-zh tracking-wide">
                &quot;敦兮其若朴，旷兮其若谷&quot; <br/>
                <span className="text-slate-500 mt-4 block text-sm md:text-base font-mono">Focusing on high-performance geographic information systems, from CesiumJS to MapboxGL, exploring the infinite possibilities of spatial data.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mt-2">
                <button type="button" className="btn-tech font-space tracking-wider w-full sm:w-auto py-4 px-8 text-base">
                  建立连接 [INIT_LINK]
                </button>
                <button type="button" className="btn-tech btn-tech-alt font-space tracking-wider w-full sm:w-auto py-4 px-8 text-base">
                  下载简历 [DL_SPECS]
                </button>
              </div>
            </div>

            {/* Tech Decoration Panel */}
            <div className="hidden lg:flex lg:col-span-5 relative h-[500px] items-center justify-end">
              <div className="w-full max-w-[420px] h-full tech-panel p-8 flex flex-col justify-between shadow-2xl">
                <div className="flex justify-between items-start border-b border-[#222] pb-6">
                  <span className="text-sm font-mono text-slate-500 tracking-widest">SYS.DIAGNOSTICS</span>
                  <span className="text-chartreuse text-sm font-mono animate-pulse">● REC</span>
                </div>
                <div className="space-y-6 flex-1 py-8 flex flex-col justify-center">
                  {['WebGL / Canvas', 'CesiumJS / 3D', 'React / Next.js', 'Vue3 Ecosystem', 'Rust / WebAssembly'].map((skill, i) => (
                    <div key={skill} className="flex items-center gap-4 text-base">
                      <span className="text-slate-600 font-mono">0{i + 1}</span>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-[#222] to-transparent" />
                      <span className="text-slate-300 font-space tracking-widest">{skill}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#222] pt-6 flex justify-between text-sm font-mono">
                  <span className="text-slate-500">MEM: OPTIMAL</span>
                  <span className="text-chartreuse">CPU: 42%</span>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* SPECS SECTION */}
        <section id="about" className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-20 py-24 md:py-32 relative">
          <div className="max-w-7xl w-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-16 sm:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold text-white tracking-tighter uppercase">
                Technical_Specs
              </h2>
              <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-[#222] to-transparent" />
              <div className="sm:hidden w-16 h-[2px] bg-chartreuse" />
              <span className="text-chartreuse font-mono text-base self-start sm:self-auto hidden sm:block">02</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { id: 'SYS.01', title: 'WebGL Maps', cnTitle: '高性能地图引擎', desc: 'High-performance geographic rendering engines.', metrics: '99.9%' },
                { id: 'SYS.02', title: 'Data Vis', cnTitle: '复杂数据可视化', desc: 'Complex spatial data interpretation & visual layout.', metrics: '100%' },
                { id: 'SYS.03', title: 'UI/UX Comps', cnTitle: '地图组件库', desc: 'Reusable map component libraries (Vue/React).', metrics: 'OPT' },
                { id: 'SYS.04', title: 'Remote Sensing', cnTitle: '遥感数据解析', desc: 'Satellite data parsing and processing pipelines.', metrics: 'RAW' }
              ].map((item) => (
                <div key={item.id} className="tech-panel p-8 group cursor-default shadow-lg">
                  <div className="flex justify-between items-center mb-8 border-b border-[#222] pb-4">
                    <span className="text-sm font-mono text-slate-500 group-hover:text-chartreuse transition-colors">{item.id}</span>
                    <span className="text-xs font-mono text-cyan-glow bg-cyan-glow/10 px-2.5 py-1.5">{item.metrics}</span>
                  </div>
                  <h3 className="text-2xl font-space font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-base font-zh text-slate-400 mb-6 tracking-wider">{item.cnTitle}</p>
                  <p className="text-sm text-slate-500 leading-[1.8] group-hover:text-slate-400 transition-colors h-16">
                    {item.desc}
                  </p>
                  <div className="mt-10 h-[2px] w-full bg-[#1a1a1a] relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-chartreuse w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 flex flex-wrap gap-4">
              {['CesiumJS', 'MapboxGL', 'Three.js', 'Vue.js', 'React', 'TypeScript', 'Python', 'Rust', 'Docker', 'Flutter'].map((skill) => (
                <span key={skill} className="px-4 py-2 text-sm font-mono tracking-wide border border-[#222] bg-[#0a0a0a] text-slate-400 hover:border-chartreuse hover:text-chartreuse transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(223,255,0,0.15)]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* DATA SECTION */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-20 py-24 md:py-32 relative">
          <div className="max-w-7xl w-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-16 sm:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold text-white tracking-tighter uppercase">
                Data_Modules
              </h2>
              <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-[#222] to-transparent" />
              <div className="sm:hidden w-16 h-[2px] bg-chartreuse" />
              <span className="text-chartreuse font-mono text-base self-start sm:self-auto hidden sm:block">03</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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
                  className="tech-panel p-8 block group hover:no-underline shadow-lg"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 border border-[#222] bg-[#0a0a0a] flex items-center justify-center group-hover:border-chartreuse group-hover:text-chartreuse transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <svg className="w-5 h-5 text-slate-600 group-hover:text-chartreuse group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-space font-bold text-slate-200 mb-3 group-hover:text-white">{project.title}</h3>
                  <p className="text-base font-zh text-slate-500 mb-8 h-12 group-hover:text-slate-400 transition-colors tracking-wide leading-[1.6]">{project.desc}</p>

                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs uppercase font-mono tracking-widest text-slate-400 bg-[#0a0a0a] border border-[#222] px-3 py-1.5 group-hover:border-chartreuse/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <button type="button" className="btn-tech py-4 px-10 text-base">
                Load All Modules
              </button>
            </div>
          </div>
        </section>

        {/* LINK SECTION */}
        <section id="contact" className="min-h-[70dvh] flex items-center justify-center px-6 sm:px-12 lg:px-20 py-24 md:py-32 relative">
          <div className="max-w-4xl w-full">
            <div className="tech-panel p-10 md:p-20 text-center border-t-4 border-t-chartreuse shadow-2xl">
              <div className="w-20 h-20 mx-auto border border-chartreuse flex items-center justify-center mb-10 animate-pulse">
                <div className="w-10 h-10 bg-chartreuse/20" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold text-white mb-8 uppercase tracking-tighter">
                Establish_Connection
              </h2>
              
              <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-base md:text-lg leading-[1.8]">
                Interested in geographic information systems or data visualization?
                Let&apos;s explore the boundaries of spatial tech.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
                <div className="border border-[#222] p-6 hover:border-chartreuse transition-colors bg-[#0a0a0a]">
                  <div className="text-sm font-mono text-slate-500 mb-2">SYS.WEB</div>
                  <a href="https://zhujia.info" target="_blank" rel="noopener noreferrer" className="text-lg text-slate-200 font-space hover:text-chartreuse transition-colors">
                    zhujia.info
                  </a>
                </div>
                <div className="border border-[#222] p-6 hover:border-chartreuse transition-colors bg-[#0a0a0a]">
                  <div className="text-sm font-mono text-slate-500 mb-2">SYS.GIT</div>
                  <a href="https://github.com/timeroute" target="_blank" rel="noopener noreferrer" className="text-lg text-slate-200 font-space hover:text-chartreuse transition-colors">
                    @timeroute
                  </a>
                </div>
                <div className="border border-[#222] p-6 hover:border-chartreuse transition-colors bg-[#0a0a0a]">
                  <div className="text-sm font-mono text-slate-500 mb-2">SYS.LOC</div>
                  <span className="text-lg text-slate-200 font-space">
                    Beijing, CN
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a href="https://github.com/timeroute" target="_blank" rel="noopener noreferrer" className="btn-tech py-4 px-10 text-base">
                  Access Git Node
                </a>
                <a href="https://zhujia.info" target="_blank" rel="noopener noreferrer" className="btn-tech btn-tech-alt py-4 px-10 text-base">
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