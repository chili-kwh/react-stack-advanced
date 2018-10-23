const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');


const config = merge(commonConfig, {
    mode: 'development',
    output: {
        publicPath: '/', // 静态资源文件引用时的路径（加在引用静态资源前面的）
    },
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
            {
                test: /\.(png|jpe?g|ico|otf|gif|svg|woff|ttf|eot)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            // fallback: 'file-loader',
                            // Default file-loader config
                            name: '[path][name].[ext]',
                            // outputPath: '/',
                            // publicPath: '/'
                        }
                    }
                ]
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
