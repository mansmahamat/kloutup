/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tqggmficmdxnvopaqpid.supabase.co",
      "fwyhrzyvairfoptielok.supabase.co",
      "cdn-icons-png.flaticon.com",
      "images.pexels.com",
      "images.unsplash.com",
    ],
  },
}

module.exports = nextConfig
