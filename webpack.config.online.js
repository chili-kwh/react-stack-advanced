const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const config = merge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader?sourceMap'
                ]
            },
        ]
    },
    optimization: {
        minimize: true, // This is true by default in production mode.

        splitChunks: {
            chunks: 'all', // 只对入口文件处理
            // name: true,
            cacheGroups: {
                default: {
                    name: true,
                    reuseExistingChunk: true,
                },

                vendor: { // split `node_modules`目录下被打包的代码到 `vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
                    test: /node_modules\//,
                    name: 'vendor',
                    // chunks: 'async',
                    // name: true,
                    priority: 10,
                    enforce: true
                },
                /*
                commons: { // split `common`和`components`目录下被打包的代码到`commons.js && .css`
                    test: /common\/|components\//,
                    name: 'commons',
                    priority: 10,
                    enforce: true
                }*/
            }
        },

        runtimeChunk: {
            name: 'manifest'
        }
    },
    plugins: [
        new CleanWebpackPlugin(['docs']),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            // chunkFilename: "[id].css",
            chunkFilename: "[name].[id].[contenthash].css"
        }),
        /*new UglifyJSPlugin({
            sourceMap: true
        })*/
    ],
});

module.exports = config;
