/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TOOLTIP_DELAY_DURATION: "150",
  },
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
