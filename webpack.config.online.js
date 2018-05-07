// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const webpack = require('webpack'); //访问内置的插件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


function resolve(dir) {
    return path.resolve(__dirname, dir)
}

const config = {
    mode: 'production',
    entry: './src/entry.js',
    output: {
        // filename: '[name].[hash].js',  //name代表entry对应的名字; hash代表 整个app打包完成后根据内容加上hash。一旦整个文件内容变更，hash就会变化
        filename: '[name].[hash].js',
        path: resolve('dist-prepare'),
        publicPath: '' // 静态资源文件引用时的路径（加在引用静态资源前面的）

    },
    module: {
        rules: [
            {
                test: /\.js$/, //使用loader的目标文件。这里是.js
                loader: 'babel-loader',
                include: [
                    resolve('src')
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
        })
    ],

    /*module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
        //如果想要传入选项，你可以这样做：
        //new ExtractTextPlugin({
        //  filename: 'style.css'
        //})
    ]*/
};

module.exports = config;
