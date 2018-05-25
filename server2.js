/**
 * Created by Liqi on 18/5/7.
 */
"use strict";

// "webpack-dev-server --config ./webpack/webpack.config.dev.js"
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const openBrowser = require('react-dev-utils/openBrowser');
const HTTPS_ENABLE = !!process.env.HTTPS;
const URL_PROTOCOL = HTTPS_ENABLE ? "https" : 'http';
const PORT = process.env.PORT || 8848;
const HOST = process.env.HOST || '0.0.0.0';
const URI = `${URL_PROTOCOL}://${HOST}:${PORT}`;
const config = require('./webpack.config.dev.js');


const proxyMaker = require('./server.local.proxy');
const MOCK_API_SERVER = 'http://127.0.0.1:10086';
const BACKEND_API_SERVER = process.env.API_PROXY || `http://127.0.0.1:8000`;




const shelljs = require('shelljs');
const opn = require('opn'); // open files urls exe in node.
const WebpackDevServer = require('webpack-dev-server');
const Path = require('path');






// const options = {
//     historyApiFallback: true,
//     // 保证任何url请求都返回index.html(默认情况下，只有/才返回index.html，这个为true可以保证例如/frontend/home等都返回html)
//     /*historyApiFallback:{
//         index:'./src/index.html'
//     },*/
//     publicPath: "/",
//     hot: true,
//     // contentBase: './dist-prepare',
//     host: HOST
// };
const options = {
    noInfo: true,  // suppress boring information. 隐藏一堆编译文件列表展示信息
    quiet: true, // don’t output anything to the console.
    disableHostCheck: true,//  Invalid Host header
    https: HTTPS_ENABLE,
    inline: true, // inline模式：保证和客户端建立WebSocket连接，「正在编译」信息将在客户端console输出，请同时在webpackConfig的entry里加上 `webpack-dev-server/client?${DEV_SERVER}` 生效
    overlay: { // 增加报错浮层（只有webpack-dev-server 2.0才支持）
        errors: true,
        warnings: false
    },
    hot: true, // 激活 Hot Module Replacement
    compress: true, // gzip
    publicPath: config.output.publicPath, // 静态文件路径前缀，对应 webpack.config.js 中的publicPath
    // contentBase: Path.join(__dirname, './dist'), // static文件服务根路径
    historyApiFallback: true, // 保证任何url请求都返回index.html(默认情况下，只有/才返回index.html，这个为true可以保证例如/frontend/home等都返回html)
    proxy: proxyMaker(MOCK_API_SERVER, BACKEND_API_SERVER),
    watchOptions: {
        ignored: /node_modules/,
    },
    // Control the console log messages shown in the browser when using [inline] mode. Can be `error`, `warning`, `info` or `none`.
    clientLogLevel: 'info', // 不要设置none，否则客户端收不到「正在编译」的输出信息

    // 给html和静态文件增加自定义头
    headers: {
        'XM-Response-From-Server': `WebpackDevServer ${URI}`
    },
    host: HOST,
    port: PORT,

}







// 想要启用 HMR，还需要修改 webpack 配置对象，使其包含 HMR 入口起点。
// webpack-dev-server package 中具有一个叫做 addDevServerEntrypoints 的方法
webpackDevServer.addDevServerEntrypoints(config, options);

const compiler = webpack(config);
const devServer = new webpackDevServer(compiler, options);
devServer.listen(PORT, HOST, () => {
    console.log('webpackDevServer: 正在编译代码,请稍后...');
    console.log(`Starting server on http://${HOST}:${PORT}`);
});

compiler.plugin("done", createCompileDoneCallback());

function createCompileDoneCallback() {
    let hasLogged = false;

    return function (stats) {
        if (!hasLogged) {
            hasLogged = true;
            setTimeout(() => {

                let indexPageUrl = `${URI}/home`;
                console.log(`
=====================================
Server start OK!
主入口: ${indexPageUrl}
=====================================
`);
                openBrowser(indexPageUrl);
            }, 1000);
        }
    }
}


