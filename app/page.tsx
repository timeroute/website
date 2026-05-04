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
    <div className="min-h-screen bg-obsidian text-slate-300 font-mono relative selection:bg-chartreuse selection:text-black neon-frame">
      <div className="scanline" />
      <Navigation />
      <StarField />
      <ParticleEffect />
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-40" />
      
      <div
        className="fixed pointer-events-none z-10 w-[600px] h-[600px] rounded-full opacity-20 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,255,0.45) 0%, rgba(255,43,214,0.22) 35%, transparent 65%)',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Main Layout Container - Full width, strict grid */}
      <main className="relative z-20 w-full overflow-hidden">
        
        {/* === HERO SECTION === */}
        <section id="home" className="min-h-[100dvh] pt-24 pb-12 flex flex-col border-b border-[#222]">
          {/* Top Info Bar */}
          <div className="w-full px-6 lg:px-12 py-4 flex justify-between items-center border-b border-[#222]">
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 bg-chartreuse animate-blink shadow-[0_0_10px_rgba(204,255,0,0.8)]" />
              <span className="text-xs font-mono text-chartreuse tracking-[0.3em] uppercase">System.Init_OK</span>
            </div>
            <div className="text-xs font-mono text-slate-500 tracking-widest hidden sm:block">
              COORD: 39.9042° N, 116.4074° E
            </div>
          </div>

          {/* Hero Core */}
          <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left/Main Content */}
            <div className="lg:col-span-8 p-6 lg:p-12 xl:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#222] relative">
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-chartreuse/50 m-4 hidden lg:block" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-chartreuse/50 m-4 hidden lg:block" />
              
              <h1 className="font-space font-bold uppercase tracking-tighter mb-8 text-white flex flex-col leading-[0.85] neon-title">
                <span className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[10rem]">Zhu Jia</span>
                <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-fuchsia-400/70 font-zh tracking-widest mt-2 neon-subtitle">朱嘉</span>
              </h1>
              
              <div className="flex items-center gap-6 mb-12">
                <div className="h-[2px] w-24 bg-gradient-to-r from-chartreuse to-transparent" />
                <h2 className="text-xl sm:text-2xl md:text-3xl text-cyan-glow font-mono tracking-[0.2em] uppercase">
                  WebGL Map & Data Vis
                </h2>
              </div>
              
              <div className="max-w-2xl border-l-2 border-chartreuse pl-6 md:pl-8 mb-16">
                <p className="text-slate-400 text-lg md:text-xl font-zh tracking-widest mb-6">
                  &quot;敦兮其若朴，旷兮其若谷&quot;
                </p>
                <p className="text-slate-500 text-sm md:text-base font-mono leading-relaxed">
                  Focusing on high-performance geographic information systems, from CesiumJS to MapboxGL, exploring the infinite possibilities of spatial data.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-max">
                <button type="button" className="btn-tech text-sm sm:text-base w-full sm:w-auto" aria-label="Initialize Connection">
                  [INIT_LINK] 建立连接
                </button>
                <button type="button" className="btn-tech btn-tech-alt text-sm sm:text-base w-full sm:w-auto" aria-label="Download Resume Specs">
                  [DL_SPECS] 下载简历
                </button>
              </div>
            </div>

            {/* Right/Stats Content */}
            <div className="lg:col-span-4 p-6 lg:p-12 flex flex-col justify-between bg-[#050505]">
              <div className="mb-12">
                <div className="text-xs text-slate-500 font-mono mb-4">{`/// TECH_STACK`}</div>
                <ul className="space-y-6">
                  {['WebGL / Canvas', 'CesiumJS / 3D', 'React / Next.js', 'Vue3 Ecosystem', 'Rust / WebAssembly'].map((skill, i) => (
                    <li key={skill} className="flex items-center gap-4 group">
                      <span className="text-chartreuse/50 font-mono text-sm group-hover:text-chartreuse transition-colors">0{i + 1}</span>
                      <span className="text-slate-300 font-space tracking-widest text-lg group-hover:text-white transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-[#222] pt-8">
                <div>
                  <div className="text-[10px] text-slate-500 font-mono mb-1">STATUS</div>
                  <div className="text-chartreuse font-mono tracking-widest animate-pulse">ONLINE</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono mb-1">UPTIME</div>
                  <div className="text-cyan-glow font-mono tracking-widest">99.9%</div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* === SPECS SECTION === */}
        <section id="about" className="min-h-[100dvh] flex flex-col border-b border-[#222]">
          <div className="w-full px-6 lg:px-12 py-8 lg:py-12 border-b border-[#222] bg-[#050505] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-chartreuse font-mono text-sm mb-2">02 // SECTION</div>
              <h2 className="text-5xl md:text-7xl font-space font-bold text-white tracking-tighter uppercase leading-none">
                Tech_Specs
              </h2>
            </div>
            <div className="text-slate-500 font-mono text-sm max-w-md sm:text-right">
              Core competencies and architectural capabilities in spatial data processing.
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full">
            {[
              { id: 'SYS.01', title: 'WebGL Maps', cnTitle: '高性能地图引擎', desc: 'High-performance geographic rendering engines.', metrics: '99.9%' },
              { id: 'SYS.02', title: 'Data Vis', cnTitle: '复杂数据可视化', desc: 'Complex spatial data interpretation & visual layout.', metrics: '100%' },
              { id: 'SYS.03', title: 'UI/UX Comps', cnTitle: '地图组件库', desc: 'Reusable map component libraries (Vue/React).', metrics: 'OPT' },
              { id: 'SYS.04', title: 'Remote Sensing', cnTitle: '遥感数据解析', desc: 'Satellite data parsing and processing pipelines.', metrics: 'RAW' }
            ].map((item, idx) => (
              <div key={item.id} className={`tech-panel p-8 lg:p-12 flex flex-col border-r-0 border-b-0 ${idx % 2 === 0 ? 'md:border-r' : ''} ${idx !== 3 ? 'border-b md:border-b-0 xl:border-r' : ''}`}>
                <div className="flex justify-between items-center mb-12">
                  <span className="text-sm font-mono text-slate-500">{item.id}</span>
                  <span className="text-xs font-mono text-cyan-glow border border-cyan-glow/30 px-3 py-1">{item.metrics}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl lg:text-4xl font-space font-bold text-slate-200 mb-4">{item.title}</h3>
                  <p className="text-lg font-zh text-chartreuse mb-8 tracking-widest">{item.cnTitle}</p>
                  <p className="text-base text-slate-500 leading-relaxed font-mono">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="w-full px-6 lg:px-12 py-8 bg-[#0a0a0a] border-t border-[#222]">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-xs text-slate-500 font-mono mr-4">{`/// SKILLS`}</span>
              {['CesiumJS', 'MapboxGL', 'Three.js', 'Vue.js', 'React', 'TypeScript', 'Python', 'Rust', 'Docker', 'Flutter'].map((skill) => (
                <span key={skill} className="text-sm font-mono tracking-widest text-slate-300 hover:text-chartreuse transition-colors cursor-default">
                  [{skill}]
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* === DATA SECTION === */}
        <section id="projects" className="min-h-[100dvh] flex flex-col border-b border-[#222]">
          <div className="w-full px-6 lg:px-12 py-8 lg:py-12 border-b border-[#222] bg-[#050505] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-chartreuse font-mono text-sm mb-2">03 // SECTION</div>
              <h2 className="text-5xl md:text-7xl font-space font-bold text-white tracking-tighter uppercase leading-none">
                Data_Modules
              </h2>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {[
              { title: 'MapVue', desc: 'Vue3 MapboxGL component library.', tags: ['Vue3', 'MapboxGL', 'TS'], link: 'https://github.com/zhujia/mapvue' },
              { title: 'TimeMap', desc: 'WebGL high-perf map engine for big data.', tags: ['WebGL', 'Canvas', 'TS'], link: 'https://github.com/zhujia/timemap' },
              { title: 'Vue-Cesium', desc: 'CesiumJS wrapper for Vue3 3D earth apps.', tags: ['CesiumJS', 'Vue3'], link: 'https://github.com/zhujia/vue-cesium' },
              { title: 'Cesium-Extends', desc: 'Extensions: event sub, data loading, drawing.', tags: ['CesiumJS', 'GIS'], link: 'https://github.com/zhujia/cesium-extends' },
              { title: 'GaoFen-Parser', desc: 'Remote sensing satellite data parser.', tags: ['Python', 'Data'], link: 'https://github.com/zhujia/gaofen-parser' },
              { title: 'Flutter Map SDK', desc: 'Native map SDK integration for Flutter.', tags: ['Flutter', 'Android'], link: 'https://github.com/zhujia/flutter_with_map' }
            ].map((project, idx) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`tech-panel p-8 lg:p-12 block group hover:no-underline border-r-0 border-b-0 
                  ${idx % 2 === 0 ? 'md:border-r' : ''} 
                  ${idx % 3 !== 2 ? 'lg:border-r' : 'lg:border-r-0'} 
                  ${idx < 3 ? 'border-b' : ''} 
                  ${idx === 3 || idx === 4 ? 'border-b lg:border-b-0' : ''}`}
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 border border-[#333] flex items-center justify-center group-hover:border-chartreuse group-hover:bg-chartreuse/10 transition-all">
                    <svg className="w-6 h-6 text-slate-400 group-hover:text-chartreuse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <svg className="w-6 h-6 text-slate-600 group-hover:text-chartreuse group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                <h3 className="text-3xl font-space font-bold text-slate-200 mb-4 group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-base font-mono text-slate-500 mb-12 h-16 group-hover:text-slate-300 transition-colors leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs uppercase font-mono tracking-widest text-slate-400 border border-[#333] px-3 py-1.5 group-hover:border-chartreuse/50 group-hover:text-chartreuse transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* === LINK SECTION === */}
        <section id="contact" className="min-h-[80dvh] flex flex-col">
          <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-2">
            
            <div className="p-8 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#222] bg-[#050505]">
              <div className="text-chartreuse font-mono text-sm mb-6">04 // CONNECTION</div>
              <h2 className="text-6xl md:text-[5rem] font-space font-bold text-white mb-8 uppercase tracking-tighter leading-none">
                Init_Link
              </h2>
              <p className="text-slate-400 max-w-lg text-lg font-mono leading-relaxed mb-12">
                System ready for new inputs. Interested in geographic information systems or data visualization? Let&apos;s explore the boundaries of spatial tech.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-max">
                <a href="https://github.com/zhujia" target="_blank" rel="noopener noreferrer" aria-label="Visit Zhu Jia's GitHub Profile" className="btn-tech py-4 px-8 text-base text-center">
                  Access Git Node
                </a>
                <a href="https://zhujia.me" target="_blank" rel="noopener noreferrer" aria-label="Visit Zhu Jia's Personal Website" className="btn-tech btn-tech-alt py-4 px-8 text-base text-center">
                  Ping Server
                </a>
              </div>
            </div>

            <div className="p-8 lg:p-20 flex flex-col justify-center bg-[#0a0a0a]">
              <div className="space-y-8 max-w-md w-full mx-auto">
                <div className="border-b border-[#333] pb-6 group">
                  <div className="text-xs font-mono text-slate-500 mb-3 tracking-widest group-hover:text-chartreuse transition-colors">{`/// SYS.WEB`}</div>
                  <a href="https://zhujia.me" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl text-slate-200 font-space hover:text-chartreuse transition-colors">
                    zhujia.me
                  </a>
                </div>
                <div className="border-b border-[#333] pb-6 group">
                  <div className="text-xs font-mono text-slate-500 mb-3 tracking-widest group-hover:text-chartreuse transition-colors">{`/// SYS.GIT`}</div>
                  <a href="https://github.com/zhujia" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl text-slate-200 font-space hover:text-chartreuse transition-colors">
                    @zhujia
                  </a>
                </div>
                <div className="border-b border-[#333] pb-6 group">
                  <div className="text-xs font-mono text-slate-500 mb-3 tracking-widest group-hover:text-chartreuse transition-colors">{`/// SYS.LOC`}</div>
                  <div className="text-2xl md:text-3xl text-slate-200 font-space">
                    Beijing, CN
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

      </main>
    </div>
  );
}