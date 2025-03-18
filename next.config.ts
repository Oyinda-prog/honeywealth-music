// import { WithPWA } from "next-pwa";
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["your-image-host.com"],
//     deviceSizes: [320, 420, 768, 1024, 1200],
//     imageSizes: [16, 32, 48, 64, 96],
//   },
// };

// export default WithPWA({
//   ...nextConfig, 
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });
import withPWA from "next-pwa"; // ✅ Correct import
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["your-image-host.com"],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
};

export default withPWA({
  ...nextConfig, 
    dest: "public",
    register: true,
    skipWaiting: true,

});
