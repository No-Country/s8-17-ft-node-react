/** @type {import('next').NextConfig} */
const nextConfig = {
  onDemandEntries: {
    maxInactiveAge: 8 * 1000
  },
  images: {
    domains: ["res.cloudinary.com", "images.pexels.com"]
  }
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer(nextConfig);
