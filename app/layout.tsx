import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "TimeRoute | WebGL & Data Visualization",
  description: "专注于WebGL地图开发、数据可视化、Vue/React组件库开发的全栈工程师。敦兮其若朴，旷兮其若谷。",
  keywords: "WebGL, 地图开发, 数据可视化, Vue, React, CesiumJS, MapboxGL, 前端开发",
  authors: [{ name: "时空路由器", url: "https://zhujia.info" }],
  openGraph: {
    title: "时空路由器 - TimeRoute",
    description: "专注于WebGL地图开发、数据可视化的全栈工程师",
    url: "https://zhujia.info",
    siteName: "TimeRoute Portfolio",
    type: "website",
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
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased font-mono bg-obsidian text-slate-300`}
      >
        {children}
      </body>
    </html>
  );
}
