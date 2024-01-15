/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "**",
        port: "3001",
        protocol: "http",
      },
      {
        hostname: "127.0.0.1",
        pathname: "**",
        port: "3001",
        protocol: "http",
      },
    ],
  },
};

module.exports = nextConfig;
