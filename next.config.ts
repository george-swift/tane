import type { NextConfig } from 'next'

import './env.ts'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/blocks'
      }
    ]
  }
}

export default nextConfig
