'use strict'
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    mode: 'development',
    entry: [
        './src/app.js'
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
               /* include: [
                    // Use `include` vs `exclude` to whitelist vs blacklist
                    path.resolve(__dirname, 'src'), // Whitelist your app source files
                    require.resolve('bootstrap-vue') // Whitelist bootstrap-vue
                ],*/
                // loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}