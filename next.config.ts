import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      '@/components': 'src/components',
      '@/services': 'src/services',
      '@/api': 'src/api',
      '@/styles': 'styles',
      '@/assets': 'assets',
      '@/layouts': 'src/layouts',
      '@/screens': 'src/screens',
      '@/helpers': 'src/helpers',
      '@/hooks': 'src/hooks',
      '@/ui': 'src/components/ui',
      '@/*': './*'
    },
    resolveExtensions: ['.ts', '.tsx', '.js', '.json', '.scss']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.myanimelist.net',
        port: '',
        pathname: '/images/anime/**'
      }
    ]
  }
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
