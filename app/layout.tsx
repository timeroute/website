import type { Metadata } from "next";
import { Syne, IBM_Plex_Sans, IBM_Plex_Mono, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-zh",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const siteUrl = 'https://zhujia.me';
const siteTitle = 'Zhu Jia | WebGL & GIS 空间数据可视化工程师';
const siteDescription = '朱嘉（Zhu Jia）- 专注 WebGL、CesiumJS、MapboxGL 地图引擎开发与空间数据可视化的全栈工程师。开源作者，构建 MapVue、TimeMap、Vue-Cesium 等 GIS 组件库与地图引擎。';
const siteKeywords = '朱嘉, Zhu Jia, WebGL, GIS, CesiumJS, MapboxGL, 地图引擎, 空间数据可视化, 3D地球, 遥感影像, Vue3, React, TypeScript, 全栈工程师, 开源项目, MapVue, TimeMap, Vue-Cesium';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Zhu Jia Portfolio',
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: 'Zhu Jia', url: siteUrl }],
  creator: 'Zhu Jia',
  publisher: 'Zhu Jia',
  category: 'technology',
  alternates: {
    canonical: siteUrl,
    languages: {
      'zh-CN': '/',
      'en-US': '/',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'google-site-verification-token',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: ['en_US'],
    url: siteUrl,
    siteName: 'Zhu Jia Portfolio',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zhu Jia - WebGL & GIS Engineer Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    creator: '@timeroute',
    site: '@timeroute',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  archives: [siteUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${syne.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} ${notoSansSC.variable} antialiased font-body bg-atmosphere text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
