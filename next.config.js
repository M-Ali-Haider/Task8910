/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "Task8910",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.course-api.com",
      },
    ],
  },
};

export default nextConfig;
