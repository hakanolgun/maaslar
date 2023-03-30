/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/maaslar",
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
