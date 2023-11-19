// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
// module.exports = withBundleAnalyzer({});

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  pwa: {
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    cacheOnFrontEndNav: true,
    fallbacks: {
      document: '/',
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
