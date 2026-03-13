/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/portifolio",
  assetPrefix: "/portifolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
