import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import './js/tool/viewportFix'
import App from './js/pages/App';
import {isPc, isIOS, isIPhoneX, isAndroid} from "./js/tool";
// import registerServiceWorker from './js/registerServiceWorker';

window.Swiper = Swiper

function addDeviceClassName (){
    const oBody = document.querySelector('body');

    if (isPc()) {
        oBody.className = oBody.className + 'pc-fix-style';
    } else if (isIOS()) {
        oBody.className = oBody.className + 'ios-fix-style';
        if (isIPhoneX()) {
            oBody.className = oBody.className + 'iphoneX-fix-style';
        }
    } else if (isAndroid()) {
        oBody.className = oBody.className + 'android-fix-style';
    } else {
        oBody.className = oBody.className + 'other-fix-style';
    }
}



addDeviceClassName();
ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
