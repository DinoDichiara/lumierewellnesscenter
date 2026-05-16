/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // genera carpeta /out con HTML estático puro
  images: {
    unoptimized: true, // requerido con output: export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
