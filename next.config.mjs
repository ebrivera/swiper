/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next", // Ensures that the build output is placed in the .next directory
  reactStrictMode: true, // Enables React's Strict Mode to help identify potential issues
  trailingSlash: true, // Ensures that all paths have a trailing slash, which might be helpful for Firebase Hosting
  // other configurations can be added here
};

export default nextConfig;
