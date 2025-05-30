const nextConfig = {
  images: {
    unoptimized: true, // 🔧 disables incompatible image optimization
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
    return config;
  },
};

module.exports = nextConfig;
