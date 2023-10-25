/** @type {import('next').NextConfig} */
const nextConfig = {
    
    env: {
        DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
    },
    async rewrites() {
        return [
            {
                source: '/inprogress',
                destination: '/', // or whatever the actual route is
            },
        ];
    },
};

module.exports = nextConfig;
