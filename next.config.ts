import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_IMAGE_HOSTNAME!,
        pathname: '/wp-content/uploads/**'
      }
    ]
  }
}

export default nextConfig
