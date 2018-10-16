/*
 # viewport修复

 因为在安卓和iOS下，对viewport的表现行为不一致
 有些需要initial-scale=1，而有些不需要
 有些屏幕大于375宽度时也需要设置
 */


import throttle from 'lodash/throttle';
import {getWindowSize} from './index';


/*
 document.addEventListener('DOMContentLoaded', () => {
 const viewportMeta = document.head.querySelector('meta[name=viewport]');

 if (isIOS() && getWindowSize().width > 375) {
 // 如果大于375（设计图尺寸），必须加上 initial-scale=1 否则在iOS 10的Safari上，页面不会放到到整个屏幕
 // 而是缩放在左上角
 // 【如果安卓机设置了initial-scale=1，会导致横向滚动，所以这里限定为仅iOS设置】
 viewportMeta.content = 'width=375,initial-scale=1,maximum-scale=1,user-scalable=no';
 } else {
 // 如果小于375（设计图尺寸），不能加上 initial-scale=1 ，否则不会自动整个缩小
 viewportMeta.content = 'width=375,maximum-scale=1,user-scalable=no';
 }
 });
 */

// ----------------------------------------------------
// 优化方案
/*
 - 确定设计图的设计尺寸为375
 - 设置 width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0
 - 如果宽度小于375，等比调小，设置 document.documentElement.style.fontSize
 - 如果宽度大于375，根据实际情况调整html的fontSize（正常页面不进行等比调整，如果是活动性质的页面，等比调大）

 参考网易、airbnb
 */
const BASE_FONT_SIZE = 16;
const DESIGN_WIDTH = 375;

function fixBaseFontSize() {
    const viewportMeta = document.head.querySelector('meta[name=viewport]');
    viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0';
    document.documentElement.style.fontSize = `${BASE_FONT_SIZE}px`;
/*    const windowWidth = getWindowSize().width;

    if (windowWidth < DESIGN_WIDTH || (alwaysFixRatio && !isPc())) {
        document.documentElement.style.fontSize = `${(windowWidth / DESIGN_WIDTH) * BASE_FONT_SIZE}px`;
    }*/
}
const fixBaseFontSizeDebounce = throttle(fixBaseFontSize, 300);


document.addEventListener('DOMContentLoaded', fixBaseFontSizeDebounce);

export {
    fixBaseFontSizeDebounce,
};

