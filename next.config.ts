import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["next-office-production.up.railway.app"],
  },
};

export default withPayload(nextConfig);
