const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        require('tailwindcss'),
        process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
        purgecss({
            content: ['./src/**/*.svelte'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
    ]
}