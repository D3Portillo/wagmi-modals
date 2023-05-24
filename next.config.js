/** @type { import('next').NextConfig } */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["polygonscan.com", "tokens-data.1inch.io", "tokens.1inch.io"],
  },
}

module.exports = nextConfig
