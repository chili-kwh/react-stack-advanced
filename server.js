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
const options = {
    historyApiFallback: true,
    // 保证任何url请求都返回index.html(默认情况下，只有/才返回index.html，这个为true可以保证例如/frontend/home等都返回html)
    /*historyApiFallback:{
        index:'./src/index.html'
    },*/
    publicPath: "/",
    hot: true,
    // contentBase: './dist-prepare',
    host: HOST
};


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