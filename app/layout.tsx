import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-zh",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Zhu Jia | WebGL & GIS Data Visualization Engineer",
  description: "Zhu Jia - 全栈工程师，专注于 WebGL、CesiumJS、MapboxGL 地图引擎开发与复杂空间数据可视化。探索地理信息系统的无限可能。",
  keywords: "Zhu Jia, 朱嘉, WebGL, GIS, 地图开发, 数据可视化, Vue3, React, CesiumJS, MapboxGL, 前端开发, 全栈工程师",
  authors: [{ name: "Zhu Jia", url: "https://zhujia.me" }],
  creator: "Zhu Jia",
  publisher: "Zhu Jia",
  metadataBase: new URL('https://zhujia.me'),
  openGraph: {
    title: "Zhu Jia | WebGL & GIS Engineer",
    description: "专注于 WebGL 地图开发与数据可视化的全栈工程师。From CesiumJS to MapboxGL.",
    url: "https://zhujia.me",
    siteName: "Zhu Jia Portfolio",
    images: [
      {
        url: '/og-image.jpg', // 可以后续补充真实的截图
        width: 1200,
        height: 630,
        alt: 'Zhu Jia Portfolio',
      },
    ],
    locale: 'zh_CN',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zhu Jia | WebGL & GIS Engineer",
    description: "专注于 WebGL 地图开发与数据可视化的全栈工程师。",
    creator: '@zhujia',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${notoSansSC.variable} antialiased font-zh bg-obsidian text-slate-300`}
      >
        {children}
      </body>
    </html>
  );
}
