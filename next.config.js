/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true, // This will ignore all ESLint errors during build
  }
}

module.exports = nextConfig
