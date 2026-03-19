/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      { source: '/ordina', destination: '/', permanent: true },
      { source: '/professionisti', destination: '/', permanent: true },
      { source: '/strumenti', destination: '/', permanent: true },
      { source: '/le-mie-scadenze', destination: '/', permanent: true },
      { source: '/quanto-mi-spetta', destination: '/', permanent: true },
      { source: '/checklist', destination: '/', permanent: true },
      { source: '/stipendio', destination: '/', permanent: true },
      { source: '/tg', destination: '/novita', permanent: true },
    ];
  },
};

export default nextConfig;
