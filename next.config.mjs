/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["tslabs.s3.eu-west-2.amazonaws.com"],
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
