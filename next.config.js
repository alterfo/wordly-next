/** @type {import('next').NextConfig} */

const Temporal = require("@js-temporal/polyfill").Temporal;
const currentPlainMonth = Temporal.Now.plainDateISO().toPlainYearMonth().toString();

module.exports = {
    experimental: {
        appDir: true
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/' + currentPlainMonth,
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
