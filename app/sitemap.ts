import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://gama-green.tw',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://gama-green.tw/faq',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://gama-green.tw/showcase',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://gama-green.tw/solution',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://gama-green.tw/en',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://gama-green.tw/en/faq',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://gama-green.tw/en/showcase',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://gama-green.tw/en/solution',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}