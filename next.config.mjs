/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portifolio" : "";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: isProd ? "/portifolio" : "",
  assetPrefix: isProd ? "/portifolio/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;