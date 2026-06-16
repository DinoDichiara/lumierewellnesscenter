/** @type {import('next').NextConfig} */
const BASE_PATH = ""; // set to "/your-path" if deployed under a sub-path

const nextConfig = {
  // output: "export",
  basePath: BASE_PATH,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
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
