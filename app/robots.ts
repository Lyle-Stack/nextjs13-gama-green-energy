import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/images/', '/icons/']
        },
        sitemap: 'https://gama-green.tw/sitemap.xml',
    }
}