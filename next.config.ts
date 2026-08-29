import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'juenjdmydvanxsxnpfdn.supabase.co',
        pathname: '/storage/v1/object/public/payload-media/**',
      },
    ],
  },
}

export default withPayload(nextConfig)