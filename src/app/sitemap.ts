import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://4pointcontractors.com'
  
  // Last modified date for the sitemap (can be updated dynamically if tied to a CMS)
  const lastModDate = new Date().toISOString()
  
  return [
    {
      url: `${baseUrl}`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/bakersfield-remodels`,
      lastModified: lastModDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastModDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/roof-coatings`,
      lastModified: lastModDate,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/additions`,
      lastModified: lastModDate,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/steel-builds`,
      lastModified: lastModDate,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/remodels`,
      lastModified: lastModDate,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: lastModDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
