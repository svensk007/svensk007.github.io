/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "./public",
  },
  basePath: "/_next",
  assetPrefix: "/_next",
};

module.exports = nextConfig;
