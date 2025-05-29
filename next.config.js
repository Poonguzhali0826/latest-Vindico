/** @type {import('next').NextConfig} */
require('dotenv').config()
const webpack = require('webpack')

const nextConfig = {
  images: {
    domains: [
      "primefaces.org",
      "edbrix.info",
      "asset.edbrix.info",
      "hexalytics.in",
      "vindico.hexalytics.in"
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**.edbrix.info',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: '**.hexalytics.in',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    return config
  }
}
module.exports = nextConfig


