import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://zhujia.me',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // 如果后续有更多的子页面（如 /projects, /about），可以在这里继续追加
  ]
}