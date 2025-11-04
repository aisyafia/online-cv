/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
