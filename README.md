# 时空路由器 - TimeRoute Portfolio

> "敦兮其若朴，旷兮其若谷"

专注于WebGL地图开发与数据可视化的全栈工程师个人作品集网站。

## 🌟 特色

- **现代化设计**: 基于 Next.js 14 + TypeScript 构建
- **动态效果**: WebGL 星空背景、粒子效果、鼠标跟随光晕
- **响应式布局**: 完美适配桌面端和移动端
- **性能优化**: 使用 Canvas 和 WebGL 实现高性能动画
- **无障碍访问**: 遵循 WCAG 标准的可访问性设计

## 🛠️ 技术栈

- **前端框架**: Next.js 16.0.1
- **开发语言**: TypeScript
- **样式方案**: Tailwind CSS 4.0
- **动画效果**: Canvas API + WebGL
- **字体**: Geist Sans & Geist Mono
- **包管理**: pnpm

## 🚀 快速开始

### 环境要求

- Node.js 18.0+
- pnpm 8.0+

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
pnpm build
pnpm start
```

## 📁 项目结构

```
├── app/
│   ├── components/          # React 组件
│   │   ├── Navigation.tsx   # 导航栏组件
│   │   ├── StarField.tsx    # WebGL 星空背景
│   │   └── ParticleEffect.tsx # 粒子效果
│   ├── globals.css          # 全局样式
│   ├── layout.tsx           # 根布局
│   └── page.tsx             # 主页面
├── public/                  # 静态资源
└── package.json
```

## 🎨 核心功能

### 动态星空背景
使用 Canvas 和 WebGL 技术实现的高性能 3D 星空效果，包含：
- 800+ 动态星点
- 流星雨效果
- 深度视差滚动

### 粒子系统
鼠标跟随的粒子效果系统：
- 实时粒子生成
- 生命周期管理
- 透明度渐变动画

### 响应式导航
智能导航系统：
- 滚动位置检测
- 平滑锚点跳转
- 移动端汉堡菜单

## 🌐 在线访问

- **个人网站**: [zhujia.info](https://zhujia.info)
- **GitHub**: [@timeroute](https://github.com/timeroute)

## 📊 主要项目

- **[MapVue](https://github.com/timeroute/mapvue)**: Vue3 MapboxGL 组件库
- **[TimeMap](https://github.com/timeroute/timemap)**: WebGL 地图引擎
- **[Vue-Cesium](https://github.com/timeroute/vue-cesium)**: CesiumJS Vue3 组件
- **[Cesium-Extends](https://github.com/timeroute/cesium-extends)**: CesiumJS 扩展库
- **[GaoFen-Parser](https://github.com/timeroute/gaofen-parser)**: 遥感数据解析工具

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

**专注于地图可视化与前端开发 | 北京 | 2024**
