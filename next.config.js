/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['flagcdn.com'], // Add 'flagcdn.com' to the list of trusted domains
        domains: ['upload.wikimedia.org'], // Add 'upload.wikimedia.org' to the list of allowed domains
    },
}


module.exports = nextConfig
