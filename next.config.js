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
        hostname: "digitalhippo-two.vercel.app",
        pathname: "**",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
