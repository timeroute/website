import ContourField from './components/ContourField';
import Navigation from './components/Navigation';

const focuses = [
  {
    title: 'WebGL 地图引擎',
    desc: '用 CesiumJS、MapboxGL 与自研渲染管线，把大体量空间数据做成可交互的实时地图。',
  },
  {
    title: '空间数据可视化',
    desc: '把复杂地理数据讲清楚：轨迹、网格、遥感与三维场景，都服务于可读的空间叙事。',
  },
  {
    title: '地图组件体系',
    desc: '为 Vue / React 沉淀可复用的地图组件与扩展，让工程里的地图能力可维护、可组合。',
  },
];

const projects = [
  {
    title: 'MapVue',
    desc: 'Vue3 MapboxGL 组件库，把常用地图能力封装成可组合的组件接口。',
    tags: ['Vue3', 'MapboxGL', 'TypeScript'],
    link: 'https://github.com/zhujia/mapvue',
  },
  {
    title: 'TimeMap',
    desc: '面向大体量地理数据的 WebGL 地图引擎，强调渲染性能与交互流畅度。',
    tags: ['WebGL', 'Canvas', 'TypeScript'],
    link: 'https://github.com/zhujia/timemap',
  },
  {
    title: 'Vue-Cesium',
    desc: 'CesiumJS 的 Vue3 封装，用于快速搭建三维地球与空间场景应用。',
    tags: ['CesiumJS', 'Vue3'],
    link: 'https://github.com/zhujia/vue-cesium',
  },
  {
    title: 'Cesium-Extends',
    desc: '事件、数据加载与绘制等扩展能力，补齐 Cesium 工程化中的常见缺口。',
    tags: ['CesiumJS', 'GIS'],
    link: 'https://github.com/zhujia/cesium-extends',
  },
  {
    title: 'GaoFen-Parser',
    desc: '高分遥感卫星数据解析工具，连接原始影像与可用的分析流程。',
    tags: ['Python', 'Remote Sensing'],
    link: 'https://github.com/zhujia/gaofen-parser',
  },
  {
    title: 'Flutter Map SDK',
    desc: '在 Flutter 中接入原生地图 SDK，打通跨平台地图集成路径。',
    tags: ['Flutter', 'Android'],
    link: 'https://github.com/zhujia/flutter_with_map',
  },
];

export default function Home() {
  return (
    <div className="site-atmosphere relative min-h-screen">
      <Navigation />

      <main>
        <section id="home" className="relative min-h-[100dvh] overflow-hidden pt-16">
          <ContourField />

          <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-center px-6 py-12 lg:px-10 lg:py-16">
            <h1 className="brand-mark reveal whitespace-nowrap text-[clamp(3.4rem,10vw,7.5rem)]">
              ZHU JIA
            </h1>
            <p className="reveal reveal-delay-1 mt-2 font-zh text-xl text-meridian md:text-2xl" style={{ fontWeight: 500 }}>
              朱嘉
            </p>

            <p className="headline reveal reveal-delay-2 mt-6 max-w-xl text-[clamp(1.35rem,2.6vw,2rem)]">
              把地图做成可交互的产品
            </p>
            <p className="lede reveal reveal-delay-3 mt-3">
              专注 WebGL、CesiumJS 与 MapboxGL，构建高性能空间数据可视化体验。
            </p>

            <div className="reveal reveal-delay-4 mt-8 flex flex-wrap gap-3">
              <a href="#work" className="btn-primary">
                查看作品
              </a>
              <a
                href="https://github.com/zhujia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="focus" className="relative z-10 border-t border-ink/8 bg-snow/55 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <p className="section-kicker">方向</p>
            <h2 className="headline mt-4 max-w-2xl text-[clamp(2rem,4vw,3.25rem)]">
              把地理数据变成可交互的空间界面
            </h2>

            <div className="mt-12">
              {focuses.map((item) => (
                <div key={item.title} className="focus-block">
                  <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl" style={{ fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="relative z-10 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <p className="section-kicker">作品</p>
            <h2 className="headline mt-4 max-w-2xl text-[clamp(2rem,4vw,3.25rem)]">
              开源与工程实践
            </h2>
            <p className="lede mt-5">
              选一些能说明问题的项目——组件库、引擎、解析工具，以及跨平台地图集成。
            </p>

            <div className="mt-12 border-t border-contour/35">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-row group"
                >
                  <div>
                    <h3 className="project-title group-hover:text-meridian transition-colors">
                      {project.title}
                    </h3>
                    <p className="project-meta mt-2">{project.tags.join(' · ')}</p>
                  </div>
                  <p className="text-ink/65 leading-relaxed">{project.desc}</p>
                  <span className="font-mono text-sm text-ember md:justify-self-end">
                    打开 →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative z-10 border-t border-ink/8 bg-snow/70 py-20 md:py-28">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
            <div>
              <p className="section-kicker">联系</p>
              <h2 className="headline mt-4 max-w-xl text-[clamp(2rem,4vw,3.25rem)]">
                一起做有意义的空间产品
              </h2>
              <p className="lede mt-5">
                如果你在做地图、可视化或 GIS 相关的事，欢迎直接来聊。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/zhujia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                访问 GitHub
              </a>
              <a
                href="https://zhujia.me"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                zhujia.me
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-ink/8 px-6 py-8 text-sm text-ink/50 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display tracking-tight text-ink/70" style={{ fontWeight: 700 }}>
            ZHU JIA
          </span>
          <span className="font-mono text-xs tracking-wider uppercase">
            Maps · WebGL · Beijing
          </span>
        </div>
      </footer>
    </div>
  );
}
