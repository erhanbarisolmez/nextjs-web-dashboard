/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['cdn.pixabay.com'], // İzin vermek istediğiniz resim kaynaklarını burada ekleyin
  },

    async redirects() {
      return [
        {
          source: '/',
          destination: '/en/login',
          permanent: true,
        },
      ];
    },
  };

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
);
 
module.exports = withNextIntl({
  // Other Next.js configuration ...
});

module.exports = withNextIntl(nextConfig);
