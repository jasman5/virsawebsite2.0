/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagizer.imageshack.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Optimize build performance
  experimental: {
    optimizePackageImports: ['framer-motion', '@tsparticles/react', 'swiper'],
  },
  // Reduce bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig