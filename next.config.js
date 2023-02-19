/** @type {import('next').NextConfig} */
module.exports = {
    experimental: {
        appDir: false // will be back to it when it passes beta
    },
    async headers() {
        return [
            {
                source: '/',
                headers: [
                    {
                        key: 'x-timezone',
                        value: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    },
                ],
            },
        ]
    },
}
