/** @type {import('next').NextConfig} */

const Temporal = require("@js-temporal/polyfill").Temporal;
const currentPlainDate = Temporal.Now.plainDateISO().toString();

module.exports = {
    experimental: {
        appDir: true
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/' + currentPlainDate,
                permanent: true
            }
        ]
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
