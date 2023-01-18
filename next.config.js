const { config } = require("flowbite/plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
