import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      '@/components': 'src/components',
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
  }
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
