const path = require('path');
const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-plugin-svgr');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // keep development cache indefinitely
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 1000,
    pagesBufferLength: 1000,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  poweredByHeader: false,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    (config.plugins ?? []).push(new ForkTsCheckerWebpackPlugin());
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withSvgr,
      {
        svgrOptions: {
          configFile: path.resolve(__dirname, 'svgr.config.js'),
        },
      },
    ],
  ],
  nextConfig,
);
