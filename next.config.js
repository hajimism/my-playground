const { withPlaiceholder } = require("@plaiceholder/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ["opengraph.githubassets.com"],
  },
};

module.exports = withPlaiceholder({
  ...nextConfig,
});
