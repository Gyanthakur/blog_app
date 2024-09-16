/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname: "www.pexels.com",
                hostname: "images.pexels.com"
                
            },
            {
                protocol:'https',
                hostname: "images.unsplash"
            },
            {
                protocol: 'https',
                hostname: 'assets.vogue.in',
            },
            {
                protocol: 'https',
                hostname: '**',  // Allow images from any domain
            }

        ]
    }
}

module.exports = nextConfig
