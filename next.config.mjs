/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/ordina',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
