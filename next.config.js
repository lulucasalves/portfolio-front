/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['github.com'],
    formats: ['image/webp']
  },
  env: {
    NEXT_PUBLIC_SERVICEID: process.env.NEXT_PUBLIC_SERVICEID,
    NEXT_PUBLIC_USERID: process.env.NEXT_PUBLIC_USERID
  }
}

module.exports = nextConfig
