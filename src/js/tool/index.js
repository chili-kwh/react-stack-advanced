function getWindowSize() {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    };
}

// 是否为本地服务
function isLocalServer() {
    return (
        [
            'localhost',
            '0.0.0.0',
            '127.0.0.1',
            'zhuo.local',
        ].indexOf(window.location.hostname) >= 0
    );
}

// 是否为测试服务
function isDevServer() {
    return (
        [
            'dev.xiongmaojinku.com',
            'test.xiongmaojinku.com',
        ].indexOf(window.location.hostname) >= 0
    );
}

// 是否为开发环境（）
function isDebugServer() {
    return process.env.NODE_ENV !== 'production' || isLocalServer() || isDevServer();
}

// 是否为线上服务器
function isOnlineServer() {
    return (
        [
            'www.xiongmaojinku.com',
            'xiongmaojinku.com',
        ].indexOf(window.location.hostname) >= 0
    );
}

function isPc() {
    const system = {
        win: false,
        mac: false,
        x11: false,
    };
    const p = navigator.platform;
    system.win = p.indexOf('Win') === 0;
    system.mac = p.indexOf('Mac') === 0;
    system.x11 = (p === 'X11') || (p.indexOf('Linux') === 0);
    if (system.win || system.mac || system.x11) {
        if (!/iphone/i.test(navigator.userAgent) && !/android/i.test(navigator.userAgent)) {
            return true;
        }
    }
    return false;
}

function isFirefox(userAgent = navigator.userAgent) {
    return userAgent.match(/Firefox|firefox/i);
}

function isIOS(userAgent = navigator.userAgent) {
    return userAgent.match(/ipad|iphone|ipod/i);
}

function isIPhoneX(userAgent = navigator.userAgent) {
    return userAgent.match(/iphone/i) && (screen.height === 812 && screen.width === 375);
}

function isAndroid(userAgent = navigator.userAgent) {
    return userAgent.match(/android/i);
}

function isWeiXin() {
    const ua = window.navigator.userAgent.toLowerCase();
    return /MicroMessenger/i.test(ua);
}

export {
    getWindowSize,
    isPc,
    isIOS,
    isAndroid
}