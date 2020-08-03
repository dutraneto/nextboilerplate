const withPWA = require('next-pwa')

// Check if the Env is in production
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
    pwa: {
        dest: 'public',
        disable: !isProd
    }
})
