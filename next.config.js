/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/maaslar",
  experimental: {
    appDir: false,
  },
  assetPrefix: isProd ? "/maaslar/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
