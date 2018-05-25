/**
 * Created by zuozhuo on 2017/3/21.
 */
'use strict';

// const colors = require('colors');
// const mockProxyUrls = require('./mock/webpackMockProxyUrls');

// proxy到后端访问的api的url前缀
// 默认为所有url进行proxy，后面的配置将进行忽略排除
const apiProxyUrls = [
    '**',
    '!/fe/**', // 这个排除貌似没用，请用后面的bypass来忽略/fe的代理请求
];
// 忽略proxy的url，例如/fe/开头的所有前端页面
const bypassProxyRegexUrls = [
    /^\/fe\//i,
    /^\/fe$/i,
];
const bypassProxyFunc = function (req, res, proxyOptions) {
    var reqUrl = req.url;
    for (let i = 0; i < bypassProxyRegexUrls.length; i++) {
        if (bypassProxyRegexUrls[i].test(reqUrl)) {
            return reqUrl;
        }
    }
    return false;
};

// proxyReq和proxyRes才是proxy的请求，而req和res是express的
function createOnProxyReq(info = {}) {

    return function onProxyReq(proxyReq, req, res) {
        // add custom header to request
        // proxyReq.setHeader('x-added', 'foobar');
        // or log the req

        console.log(`${proxyReq.method}: ${proxyReq.path}`.green);
        // console.log(`Proxy: ${info.target}`.yellow);
        // console.log(proxyReq._headers);

    }
}

function createOnProxyRes(info = {}) {

    return function onProxyRes(proxyRes, req, res) {
        // proxyRes.headers['x-added'] = 'foobar';     // add new header to response
        proxyRes.headers['XM-Response-From-Server'] = `${info.type} ${info.target}`;

        // console.log(this);  // this = ProxyServer = { options }
        // delete proxyRes.headers['x-removed'];       // remove header from response
    }
}


module.exports = function createProxyList(MOCK_API_SERVER, BACKEND_API_SERVER) {
    // 给各个proxy添加自定义头，方便调试
    const mockProxyOptions = {
        target: MOCK_API_SERVER,
        targetName: 'MockApiServer',
        xfwd: true,
        secure: false,
        changeOrigin: true,
        bypass: bypassProxyFunc,
        headers: {
            'XM-Proxy-Request-To': `MockApiServer: ${MOCK_API_SERVER}`
        },
        onProxyReq: createOnProxyReq({
            target: MOCK_API_SERVER,
        }),
        onProxyRes: createOnProxyRes({
            type: 'MockApiServer',
            target: MOCK_API_SERVER,
        }),
    };
    const apiProxyOptions = {
        // Proxy到Django服务
        // forward: 'http://127.0.0.1:8888', // 这里可以将proxy的请求从 Charles 中转发，但是只能看到req，看不到res，res还是需要在Chrome中查看
        target: BACKEND_API_SERVER,
        targetName: 'BackendApiServer',
        xfwd: true, // adds x-forward headers
        secure: false,
        // 这里在proxy的时候,带上origin host访问,否则默认是纯IP请求,线上服会拒绝服务直接返回503的
        changeOrigin: true,
        bypass: bypassProxyFunc,
        toProxy: true,
        headers: {
            'XM-Proxy-Request-To': `BackendApiServer: ${BACKEND_API_SERVER}`
        },
        onProxyReq: createOnProxyReq({
            target: BACKEND_API_SERVER,
        }),
        onProxyRes: createOnProxyRes({
            type: 'BackendApiServer',
            target: BACKEND_API_SERVER,
        }),

    };

    let proxyConfig = [];
// 更多配置请参考 https://github.com/chimurai/http-proxy-middleware
//     proxyConfig = proxyConfig
//         .concat(mockProxyUrls.map(path => Object.assign({path}, mockProxyOptions)));
    proxyConfig = proxyConfig
        .concat(apiProxyUrls.map(path => Object.assign({path}, apiProxyOptions)));


    return proxyConfig;
};