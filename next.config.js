/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const path = require("path");
module.exports = {
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, "./src/assets");

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
