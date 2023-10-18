/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "www.otempo.com.br",
            port: "",
            pathname: "/polopoly_fs/**",
        },],
    },
}
