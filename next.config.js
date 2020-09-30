// next.config.js
require("dotenv").config();
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const isDev = process.env.NODE_ENV !== "production";

const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  pwa: {
    dest: "public",
    disable: isDev,
  },
};

module.exports = withPlugins([], withPWA(nextConfig));
