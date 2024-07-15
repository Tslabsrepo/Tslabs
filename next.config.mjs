/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["ts-labs-admin-0ff0c6162225.herokuapp.com"],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
