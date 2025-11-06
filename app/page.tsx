'use client';

import { useEffect, useState } from 'react';
import StarField from './components/StarField';
import Navigation from './components/Navigation';
import ParticleEffect from './components/ParticleEffect';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 生成星星
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 3 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 3;

      stars.push(
        <div
          key={i}
          className="star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }
    return stars;
  };

  // 生成流星
  const generateShootingStars = () => {
    const shootingStars = [];
    for (let i = 0; i < 3; i++) {
      const delay = Math.random() * 10;
      const duration = Math.random() * 3 + 2;

      shootingStars.push(
        <div
          key={i}
          className="shooting-star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    }
    return shootingStars;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 导航栏 */}
      <Navigation />

      {/* 动态星空背景 */}
      <StarField />

      {/* 粒子效果 */}
      <ParticleEffect />

      {/* 静态星空装饰 */}
      <div className="stars">
        {generateStars()}
        {generateShootingStars()}
      </div>

      {/* 鼠标跟随光晕 */}
      <div
        className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(79, 172, 254, 0.3) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.1s ease-out',
        }}
      />

      {/* 首页 Hero Section */}
      <section id="home" className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* 主标题 */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 neon-glow">
            Zhu Jia
          </h1>
          
          {/* 副标题 */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 leading-relaxed">
            专注于<span className="gradient-text-blue">WebGL地图开发</span>与数据可视化的全栈工程师
          </p>
          
          {/* 座右铭 */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 italic">
            "敦兮其若朴，旷兮其若谷"
          </p>

          {/* 技能标签 */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['WebGL地图开发', '数据可视化', 'Vue/React组件库', 'CesiumJS专家'].map((skill) => (
              <span key={skill} className="px-6 py-3 glass-card text-sm md:text-base">
                {skill}
              </span>
            ))}
          </div>

          {/* 导航卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card p-8 text-center group cursor-pointer">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🗺️</div>
              <h3 className="text-lg font-semibold mb-2 gradient-text">地图项目</h3>
              <p className="text-gray-400 text-sm">WebGL地图引擎与可视化组件</p>
            </div>
            <div className="glass-card p-8 text-center group cursor-pointer">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-lg font-semibold mb-2 gradient-text">技术栈</h3>
              <p className="text-gray-400 text-sm">从前端框架到地理信息系统</p>
            </div>
            <div className="glass-card p-8 text-center group cursor-pointer">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📡</div>
              <h3 className="text-lg font-semibold mb-2 gradient-text">开源贡献</h3>
              <p className="text-gray-400 text-sm">GitHub上的开源项目与社区</p>
            </div>
          </div>

          {/* 行动按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" className="cosmic-button">
              查看作品集
            </button>
            <button type="button" className="px-8 py-3 border border-gray-600 rounded-full text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
              下载简历
            </button>
          </div>
        </div>

        {/* 滚动指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-transparent rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* 关于我 Section */}
      <section id="about" className="relative z-20 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 gradient-text">技术专长</h2>

          {/* 简介 */}
          <div className="glass-card p-8 md:p-12 mb-12">
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              专注于WebGL地图开发与数据可视化的全栈工程师，致力于构建高性能的地理信息系统。
              从CesiumJS到MapboxGL，从Vue组件库到React生态，探索地图技术的无限可能。
            </p>

            {/* 核心技能 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '🌍', title: 'WebGL地图', desc: '高性能地理可视化' },
                { icon: '📊', title: '数据可视化', desc: '复杂数据的直观呈现' },
                { icon: '🧩', title: '组件库开发', desc: '可复用的地图组件' },
                { icon: '🛰️', title: '遥感数据', desc: '卫星数据解析处理' }
              ].map((item) => (
                <div key={item.title} className="text-center group">
                  <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="text-sm md:text-base text-gray-400 font-medium mb-1">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 技能标签 */}
          <div className="flex flex-wrap justify-center gap-3">
            {['CesiumJS', 'MapboxGL', 'WebGL', 'Vue.js', 'React', 'TypeScript', 'Python', 'Rust', 'Three.js', 'GIS', 'Docker', 'Flutter'].map((skill) => (
              <span key={skill} className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300 hover:border-blue-400/40 transition-colors duration-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 项目 Section */}
      <section id="projects" className="relative z-20 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 gradient-text">精选项目</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'MapVue',
                desc: '基于Vue3的MapboxGL组件库，提供完整的地图开发解决方案',
                icon: '🗺️',
                tags: ['Vue3', 'MapboxGL', 'TypeScript'],
                link: 'https://github.com/timeroute/mapvue'
              },
              {
                title: 'TimeMap',
                desc: '基于WebGL的高性能地图引擎，支持大数据量地理可视化',
                icon: '🌍',
                tags: ['WebGL', 'TypeScript', 'Canvas'],
                link: 'https://github.com/timeroute/timemap'
              },
              {
                title: 'Vue-Cesium',
                desc: 'CesiumJS的Vue3组件封装，用于构建3D地球应用',
                icon: '🌐',
                tags: ['CesiumJS', 'Vue3', '3D'],
                link: 'https://github.com/timeroute/vue-cesium'
              },
              {
                title: 'Cesium-Extends',
                desc: 'CesiumJS扩展库，提供事件订阅、数据加载、绘图工具等功能',
                icon: '🛰️',
                tags: ['CesiumJS', 'JavaScript', 'GIS'],
                link: 'https://github.com/timeroute/cesium-extends'
              },
              {
                title: 'GaoFen-Parser',
                desc: '遥感卫星原始数据解析工具，支持多种卫星数据格式',
                icon: '📡',
                tags: ['Python', 'Remote Sensing', 'Data'],
                link: 'https://github.com/timeroute/gaofen-parser'
              },
              {
                title: 'Flutter Map SDK',
                desc: 'Flutter原生地图SDK集成，支持Android原生地图显示',
                icon: '📱',
                tags: ['Flutter', 'Android', 'Java'],
                link: 'https://github.com/timeroute/flutter_with_map'
              }
            ].map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 group cursor-pointer block hover:no-underline"
              >
                {/* 项目图标 */}
                <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>

                {/* 项目信息 */}
                <div className="text-left">
                  <h3 className="text-lg font-semibold mb-2 gradient-text">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* 技术标签 */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded border border-blue-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 查看链接 */}
                  <div className="flex items-center text-blue-400 text-xs font-medium">
                    <span>查看项目</span>
                    <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* 查看更多按钮 */}
          <div className="mt-12">
            <button type="button" className="cosmic-button">
              查看所有项目
            </button>
          </div>
        </div>
      </section>

      {/* 联系 Section */}
      <section id="contact" className="relative z-20 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 gradient-text">联系我</h2>

          <div className="glass-card p-8 md:p-12">
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
              对地图开发或数据可视化项目感兴趣？
              <br className="hidden md:block" />
              让我们一起探索地理信息技术的无限可能！
            </p>

            {/* 联系方式 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌐</div>
                <h3 className="text-lg font-semibold mb-2 gradient-text-blue">个人网站</h3>
                <a href="https://zhujia.info" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  zhujia.info
                </a>
                <p className="text-gray-500 text-sm mt-1">技术博客与项目展示</p>
              </div>

              <div className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🐙</div>
                <h3 className="text-lg font-semibold mb-2 gradient-text-blue">GitHub</h3>
                <a href="https://github.com/timeroute" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  @timeroute
                </a>
                <p className="text-gray-500 text-sm mt-1">开源项目与代码分享</p>
              </div>

              <div className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📍</div>
                <h3 className="text-lg font-semibold mb-2 gradient-text-blue">位置</h3>
                <p className="text-gray-400">北京，中国</p>
                <p className="text-gray-500 text-sm mt-1">欢迎技术交流与合作</p>
              </div>
            </div>

            {/* 行动按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/timeroute" target="_blank" rel="noopener noreferrer" className="cosmic-button no-underline">
                查看GitHub
              </a>
              <a href="https://zhujia.info" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-gray-600 rounded-full text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 no-underline">
                访问博客
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 背景装饰元素 */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gray-700 rounded-full opacity-30" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-gray-700 rounded-full opacity-20" />
      <div className="absolute top-1/2 left-5 w-2 h-20 bg-gradient-to-b from-blue-500 to-transparent opacity-40" />
      <div className="absolute top-1/3 right-5 w-2 h-16 bg-gradient-to-b from-purple-500 to-transparent opacity-40" />
    </div>
  );
}
