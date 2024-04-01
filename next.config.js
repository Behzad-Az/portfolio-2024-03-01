/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media.licdn.com",
        protocol: "https"
      }
    ]
  },
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
