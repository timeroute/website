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

      {/* 主要内容 */}
      <main className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* 头部区域 */}
          <div id="home" className="text-center mb-32">
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 gradient-text neon-glow">
                朱佳
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                探索数字宇宙的<span className="gradient-text-blue">创造者</span>
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-base md:text-lg mb-16">
              <span className="px-6 py-3 glass-card">全栈开发</span>
              <span className="px-6 py-3 glass-card">UI/UX设计</span>
              <span className="px-6 py-3 glass-card">创意编程</span>
            </div>
          </div>

          {/* 导航卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-24">
            <div className="glass-card p-10 lg:p-12 text-center group cursor-pointer">
              <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 gradient-text">项目作品</h3>
              <p className="text-gray-400 text-base lg:text-lg leading-relaxed">探索我的创意项目和技术实验</p>
            </div>
            
            <div className="glass-card p-10 lg:p-12 text-center group cursor-pointer">
              <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💫</div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 gradient-text">关于我</h3>
              <p className="text-gray-400 text-base lg:text-lg leading-relaxed">了解我的技能、经历和理念</p>
            </div>
            
            <div className="glass-card p-10 lg:p-12 text-center group cursor-pointer">
              <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🌌</div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 gradient-text">联系方式</h3>
              <p className="text-gray-400 text-base lg:text-lg leading-relaxed">让我们一起创造无限可能</p>
            </div>
          </div>

          {/* 行动按钮 */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button type="button" className="cosmic-button text-lg px-10 py-4">
              查看作品集
            </button>
            <button type="button" className="px-10 py-4 text-lg border border-gray-600 rounded-full text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
              下载简历
            </button>
          </div>
        </div>

        {/* 底部装饰 */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-12 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1.5 h-4 bg-gradient-to-b from-blue-400 to-transparent rounded-full mt-3 animate-bounce"></div>
          </div>
        </div>
      </main>

      {/* 关于我 Section */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <div id="about" className="text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-16 gradient-text">关于我</h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="glass-card p-12 md:p-16 lg:p-20 mb-16">
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto">
                  我是一名充满激情的全栈开发者，专注于创造令人惊叹的数字体验。
                  <br className="hidden md:block" />
                  在代码的世界里，我不仅是一名工程师，更是一名数字艺术家。
                </p>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                  <div className="text-center group">
                    <div className="text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
                    <div className="text-base lg:text-lg text-gray-400 font-medium">快速开发</div>
                    <div className="text-sm text-gray-500 mt-2 hidden lg:block">高效的开发流程</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
                    <div className="text-base lg:text-lg text-gray-400 font-medium">创意设计</div>
                    <div className="text-sm text-gray-500 mt-2 hidden lg:block">独特的视觉体验</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🔧</div>
                    <div className="text-base lg:text-lg text-gray-400 font-medium">技术专精</div>
                    <div className="text-sm text-gray-500 mt-2 hidden lg:block">深度技术掌握</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
                    <div className="text-base lg:text-lg text-gray-400 font-medium">用户体验</div>
                    <div className="text-sm text-gray-500 mt-2 hidden lg:block">以用户为中心</div>
                  </div>
                </div>
              </div>
              
              {/* 技能标签 */}
              <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'UI/UX', 'WebGL', 'Three.js'].map((skill) => (
                  <span key={skill} className="px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300 hover:border-blue-400/40 transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 项目 Section */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <div id="projects" className="text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-20 gradient-text">精选项目</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12">
              {[
                { 
                  title: '星际导航系统', 
                  desc: '基于WebGL的3D星空导航界面，融合了现代设计与交互体验', 
                  icon: '🌌',
                  tags: ['Three.js', 'WebGL', 'React']
                },
                { 
                  title: '智能数据可视化', 
                  desc: '实时数据分析平台，将复杂数据转化为直观的视觉呈现', 
                  icon: '📊',
                  tags: ['D3.js', 'Python', 'AI']
                },
                { 
                  title: '未来UI组件库', 
                  desc: '下一代组件库，专为现代Web应用设计的可复用组件系统', 
                  icon: '🎨',
                  tags: ['React', 'TypeScript', 'Storybook']
                }
              ].map((project) => (
                <div key={project.title} className="glass-card p-8 lg:p-10 group cursor-pointer h-full">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-8 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <div className="text-5xl lg:text-6xl group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
                  </div>
                  
                  <div className="text-left">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4 gradient-text">{project.title}</h3>
                    <p className="text-gray-400 text-base lg:text-lg mb-6 leading-relaxed">
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 text-sm bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 查看更多按钮 */}
            <div className="mt-16">
              <button type="button" className="cosmic-button text-lg px-10 py-4">
                查看所有项目
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 联系 Section */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <div id="contact" className="text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-16 gradient-text">联系我</h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="glass-card p-12 md:p-16 lg:p-20">
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-20 leading-relaxed max-w-4xl mx-auto">
                  准备好开始一个令人兴奋的项目了吗？
                  <br className="hidden md:block" />
                  让我们一起创造些什么吧！
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
                  <div className="text-center group">
                    <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📧</div>
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4 gradient-text-blue">邮箱</h3>
                    <p className="text-gray-400 text-lg lg:text-xl">hello@zhujia.dev</p>
                    <p className="text-gray-500 text-sm mt-2">随时欢迎您的来信</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💼</div>
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4 gradient-text-blue">LinkedIn</h3>
                    <p className="text-gray-400 text-lg lg:text-xl">@zhujia</p>
                    <p className="text-gray-500 text-sm mt-2">专业网络连接</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🐙</div>
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4 gradient-text-blue">GitHub</h3>
                    <p className="text-gray-400 text-lg lg:text-xl">@zhujia</p>
                    <p className="text-gray-500 text-sm mt-2">开源项目合作</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button type="button" className="cosmic-button text-lg px-10 py-4">
                    开始合作
                  </button>
                  <button type="button" className="px-10 py-4 text-lg border border-gray-600 rounded-full text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                    预约通话
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 背景装饰元素 */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gray-700 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-gray-700 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-5 w-2 h-20 bg-gradient-to-b from-blue-500 to-transparent opacity-40"></div>
      <div className="absolute top-1/3 right-5 w-2 h-16 bg-gradient-to-b from-purple-500 to-transparent opacity-40"></div>
    </div>
  );
}
