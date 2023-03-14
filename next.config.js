/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "i.annihil.us",
        port: "",
      },
    ],
  },
  env: {
    MARVEL_BASE_URL: process.env.MARVEL_BASE_URL,
    MARVEL_PRIVATE_API_KEY: process.env.MARVEL_PRIVATE_API_KEY,
    MARVEL_PUBLIC_API_KEY: process.env.MARVEL_PUBLIC_API_KEY,
  },
};

module.exports = nextConfig;
