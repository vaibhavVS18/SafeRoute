/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
    images: {
      domains: ["encrypted-tbn0.gstatic.com", "lh3.googleusercontent.com"], //allow external image domain
    },
};

export default nextConfig;
