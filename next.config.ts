import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  turbopack: {
    root: '.',
    resolveAlias: {
      // '@/components': 'src/components',
      // '@/styles': 'styles',
      // '@/assets': 'src/assets',
      // '@/layouts': 'src/layouts',
      // '@/screens': 'src/screens',
      // '@/helpers': 'src/helpers',
      // '@/ui': 'src/components/ui'
      '@/*': './*'
    },
    resolveExtensions: ['.ts', '.tsx', '.js', '.json', '.scss']
  }
}

export default nextConfig
