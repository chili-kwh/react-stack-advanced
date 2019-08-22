/**
 * Created by Liqi on 18/5/10.
 */
// const webpack = require('webpack'); //访问内置的插件

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


function resolve(dir) {
    return path.resolve(__dirname, dir)
}


const config = {
    entry: {
        app: './src/entry.js',
    },
    output: {
        filename: '[name].[hash].js',
        //name代表entry对应的名字; hash代表 整个app打包完成后根据内容加上hash。一旦整个文件内容变更，hash就会变化
        path: resolve('dist-prepare'),
        publicPath: '/', // 静态资源文件引用时的路径（加在引用静态资源前面的）
        chunkFilename: 'chunk.[name].[id].[chunkhash].js',

    },
    module: {
        rules: [
            {
                include: path.resolve("node_modules", "lodash"),
                sideEffects: false
            },
            {
                test: /\.js$/, //使用loader的目标文件。这里是.js
                loader: 'babel-loader',
                // pand 未编译，要转译一遍
                /*exclude: [
                    resolve('node_modules')
                ],*/
                include: [
                    resolve('src'),
                    resolve('node_modules/pand')
                ]
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
        new HtmlWebpackPlugin({
            title: 'Custom template',
            filename: 'index.html',
            template: './src/index.ejs',
            templateParameters: {
                a: ''
            }
        }),
    ],
};


module.exports = config;
