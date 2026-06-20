/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  eslint: {
    // ESLint 不作为运行时依赖;CI/本地用 `npm run lint` 单独执行
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "**" },
      { protocol: "https", hostname: "**" },
    ],
  },
};

module.exports = nextConfig;
