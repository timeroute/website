import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "时空路由器 - TimeRoute | 地图可视化与前端开发专家",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
