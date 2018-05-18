const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');


const config = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader?sourceMap'
                ],
            },
        ]
    },
    plugins: [
        // mode=development
        // 会将 process.env.NODE_ENV 的值设为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。
        new webpack.HotModuleReplacementPlugin(),
    ],
});


module.exports = config;
