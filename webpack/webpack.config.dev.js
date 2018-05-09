// const webpack = require('webpack'); //访问内置的插件

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// import {webpackRules} from "./rules";
// const webpackRules = require('./rules')
// const extractSass = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
//     disable: process.env.NODE_ENV === "development"
// });


function resolve(dir) {
    return path.resolve(__dirname, dir)
}


const config = {
    mode: 'development',
    entry: './src/entry.js',
    output: {
        // filename: '[name].[hash].js',  //name代表entry对应的名字; hash代表 整个app打包完成后根据内容加上hash。一旦整个文件内容变更，hash就会变化
        filename: '[name].[hash].js',
        path: resolve('dist-prepare'),
        publicPath: '/' // 静态资源文件引用时的路径（加在引用静态资源前面的）

    },
    module: {
        rules: [
            {
                test: /\.js$/, //使用loader的目标文件。这里是.js
                loader: 'babel-loader',
                include: [
                    resolve('./../src')
                ],
                // exclude: [
                //     path.join(__dirname, '../node_modules')  // 由于node_modules都是编译过的文件，这里我们不让babel去处理其下面的js文件
                // ]
            },
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
                    'sass-loader'
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
                            name:'[path][name].[ext]',
                            outputPath: '/',
                            publicPath: '/'
                        }
                    }
                ]
            }
            /*{
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
                    "css-loader",
                    'sass-loader'
                ]
            },*/
            /*{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader', 'sass-loader']
                })
            }*/
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: '',
            template: './src/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        /*new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })*/
    ],
};


module.exports = config;
