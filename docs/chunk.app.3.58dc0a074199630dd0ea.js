(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{114:function(e,t,n){"use strict";t.__esModule=!0,t.SummaryCard=void 0;var r=s(n(0));s(n(28)),n(37);function s(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.state={rate:99.99,total:9999},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){var e=this;fetch("http://www.dandywei.com/car/query").then(function(e){return e.json()}).then(function(t){e.setState({rate:t[e.props.resultKey]})}),fetch("http://www.dandywei.com/car/queryCount").then(function(e){return e.json()}).then(function(t){e.setState({total:t})})},t.prototype.render=function(){this.props.resultKey;var e=this.state,t=e.rate,n=e.total;Math.floor(8*Math.random());return r.default.createElement("div",{className:"pageCarTest-summary"},r.default.createElement("div",{className:"pageCarTest-summary-title"},r.default.createElement("div",null,"您是第 ",r.default.createElement("span",{className:"highlight"},n)," 位测试者"),r.default.createElement("div",null,"与 ",r.default.createElement("span",{className:"highlight"},t,"%")," 的测试者选择相同")))},t}(r.default.Component);t.SummaryCard=o},115:function(e,t){e.exports="./asset/imgs/rrc/7.png"},116:function(e,t){e.exports="./asset/imgs/rrc/6.png"},117:function(e,t){e.exports="./asset/imgs/rrc/5.png"},118:function(e,t){e.exports="./asset/imgs/rrc/4.png"},119:function(e,t){e.exports="./asset/imgs/rrc/3.png"},120:function(e,t){e.exports="./asset/imgs/rrc/2.png"},121:function(e,t){e.exports="./asset/imgs/rrc/1.png"},122:function(e,t){e.exports="./asset/imgs/rrc/0.png"},123:function(e,t,n){var r={"./0.png":122,"./1.png":121,"./2.png":120,"./3.png":119,"./4.png":118,"./5.png":117,"./6.png":116,"./7.png":115};function s(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error('Cannot find module "'+e+'".');throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id=123},124:function(e,t){e.exports="./asset/imgs/carTest/car/Y.jpg"},125:function(e,t){e.exports="./asset/imgs/carTest/car/X.jpg"},126:function(e,t){e.exports="./asset/imgs/carTest/car/W.jpg"},127:function(e,t){e.exports="./asset/imgs/carTest/car/V.jpg"},128:function(e,t){e.exports="./asset/imgs/carTest/car/U.jpg"},129:function(e,t){e.exports="./asset/imgs/carTest/car/T.jpg"},130:function(e,t){e.exports="./asset/imgs/carTest/car/S.jpg"},131:function(e,t){e.exports="./asset/imgs/carTest/car/R.jpg"},132:function(e,t){e.exports="./asset/imgs/carTest/car/Q.jpg"},133:function(e,t){e.exports="./asset/imgs/carTest/car/P.jpg"},134:function(e,t){e.exports="./asset/imgs/carTest/car/O.jpg"},135:function(e,t){e.exports="./asset/imgs/carTest/car/N.jpg"},136:function(e,t){e.exports="./asset/imgs/carTest/car/M.jpg"},137:function(e,t){e.exports="./asset/imgs/carTest/car/L.jpg"},138:function(e,t){e.exports="./asset/imgs/carTest/car/K.jpg"},139:function(e,t){e.exports="./asset/imgs/carTest/car/J.jpg"},140:function(e,t){e.exports="./asset/imgs/carTest/car/I.jpg"},141:function(e,t){e.exports="./asset/imgs/carTest/car/H.jpg"},142:function(e,t){e.exports="./asset/imgs/carTest/car/G.jpg"},143:function(e,t){e.exports="./asset/imgs/carTest/car/F.jpg"},144:function(e,t){e.exports="./asset/imgs/carTest/car/E.jpg"},145:function(e,t){e.exports="./asset/imgs/carTest/car/D.jpg"},146:function(e,t){e.exports="./asset/imgs/carTest/car/C.jpg"},147:function(e,t){e.exports="./asset/imgs/carTest/car/B.jpg"},148:function(e,t){e.exports="./asset/imgs/carTest/car/A.jpg"},149:function(e,t,n){var r={"./A.jpg":148,"./B.jpg":147,"./C.jpg":146,"./D.jpg":145,"./E.jpg":144,"./F.jpg":143,"./G.jpg":142,"./H.jpg":141,"./I.jpg":140,"./J.jpg":139,"./K.jpg":138,"./L.jpg":137,"./M.jpg":136,"./N.jpg":135,"./O.jpg":134,"./P.jpg":133,"./Q.jpg":132,"./R.jpg":131,"./S.jpg":130,"./T.jpg":129,"./U.jpg":128,"./V.jpg":127,"./W.jpg":126,"./X.jpg":125,"./Y.jpg":124};function s(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error('Cannot find module "'+e+'".');throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id=149},150:function(e,t){e.exports="./asset/imgs/carTest/result.png"},151:function(e,t,n){"use strict";t.__esModule=!0,t.ResultCard=void 0;var r=o(n(0)),s=(o(n(28)),n(37));function o(e){return e&&e.__esModule?e:{default:e}}var a=n(150),i=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.state={rate:99.99,total:9999},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){var e=this;fetch("http://www.dandywei.com/car/query").then(function(e){return e.json()}).then(function(t){e.setState({rate:t[e.props.resultKey]})}),fetch("http://www.dandywei.com/car/queryCount").then(function(e){return e.json()}).then(function(t){e.setState({total:t})})},t.prototype.render=function(){var e=this.props.resultKey,t=this.state,o=t.rate,i=t.total,u=Math.floor(8*Math.random());return r.default.createElement("div",{className:"pageCarTest-result"},r.default.createElement("div",{className:"pageCarTest-summary-title"},r.default.createElement("div",null,"您是第 ",r.default.createElement("span",{className:"highlight"},i)," 位测试者"),r.default.createElement("div",null,"与 ",r.default.createElement("span",{className:"highlight"},o,"%")," 的测试者选择相同")),r.default.createElement("div",{className:"pageCarTest-result-pic-wrapper"},r.default.createElement("img",{src:n(149)("./"+e+".jpg"),alt:"",className:"pageCarTest-result-pic"})),r.default.createElement("div",{className:"pageCarTest-result-content"},r.default.createElement("div",{className:"pageCarTest-result-rrc"},r.default.createElement("div",{className:"pageCarTest-result-rrcPic2",style:{backgroundImage:"url("+n(123)("./"+u+".png")+")"}})),r.default.createElement("div",{className:"pageCarTest-result-anwser"},r.default.createElement("img",{src:a,alt:"",className:"pageCarTest-result-anwser-pic"}),r.default.createElement("div",{className:"pageCarTest-result-anwser-content"},s.RESULTS[e]))))},t}(r.default.Component);t.ResultCard=i},152:function(e,t){e.exports="./asset/imgs/carTest/bgb.png"},153:function(e,t,n){"use strict";t.__esModule=!0,t.TestCard=void 0;var r=o(n(0)),s=o(n(28));function o(e){return e&&e.__esModule?e:{default:e}}var a=n(152),i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=e.question,n=e.answers,o=e.selectIndex,i=e.handleChoose;return r.default.createElement("div",{className:"pageCarTest-card"},r.default.createElement("div",{className:"pageCarTest-ques"},r.default.createElement("img",{src:a,alt:"",className:"pageCarTest-quesImg"}),r.default.createElement("div",{className:"pageCarTest-ques-inner"},r.default.createElement("div",{className:"pageCarTest-ques-title"},t),r.default.createElement("div",{className:"pageCarTest-ques-optionWrapper"},n.map(function(e,t){return r.default.createElement("div",{style:{transition:"all "+(.7+.4*t)+"s cubic-bezier(0.25, 0.8, 0.25, 1)"},className:(0,s.default)("pageCarTest-ques-option",{arrow:o===t}),key:t,onTouchEnd:function(){i({chosenIndex:t,questionKey:e.toQues,resultKey:e.toResult})}},e.desc)})))))},t}(r.default.Component);i.defaultProps={answers:[]},t.TestCard=i},258:function(e,t,n){"use strict";t.__esModule=!0,t.MView=void 0;var r=o(n(0)),s=(o(n(257)),o(n(28)),o(n(254)),n(60));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(){return r.default.createElement("div",{className:"pc-phone-bg"},r.default.createElement("div",{className:"pc-phone_bg-top"},r.default.createElement("div",{className:"pc-phone_bg-top-1"}),r.default.createElement("div",{className:"pc-phone_bg-top-2"})),r.default.createElement("div",{className:"pc-phone_bg-bottom"}))};t.MView=function(e){var t=e.children;return r.default.createElement("div",{className:"MView"},t,(0,s.getWindowSize)().width>480&&r.default.createElement(a,null))}},259:function(e,t,n){"use strict";t.__esModule=!0,t.Loading=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));t.Loading=function(){return r.default.createElement("div",null,"Loading...")}},268:function(e,t,n){"use strict";t.__esModule=!0,t.Modal=void 0;var r=a(n(0)),s=a(n(20)),o=n(34);function a(e){return e&&e.__esModule?e:{default:e}}var i=document.getElementById("root"),u=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.el=document.createElement("div"),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){i.appendChild(this.el)},t.prototype.componentWillUnmount=function(){i.removeChild(this.el)},t.prototype.render=function(){var e=this.props.visible,t=r.default.createElement(o.CSSTransition,{in:e,timeout:300,classNames:"modal-transition",mountOnEnter:!0},r.default.createElement("div",{className:"modal",onClick:this.props.onClose},this.props.children));return s.default.createPortal(t,this.el)},t}(r.default.Component);t.Modal=u},273:function(e,t,n){"use strict";t.__esModule=!0,t.routeCarTest=t.routeReactPortal=t.routeHome=void 0;var r=n(96);t.routeHome=new r.LRoute({path:"/fe/home",component:function(){return Promise.resolve().then(function(){var e=n(92);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}}),t.routeReactPortal=new r.LRoute({path:"/fe/react-portal",component:function(){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=n(302);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}}),t.routeCarTest=new r.LRoute({path:"/fe/car-test",component:function(){return Promise.resolve().then(function(){var e=n(70);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}})},279:function(e,t,n){"use strict";t.__esModule=!0;var r=o(n(0)),s=(n(69),function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(n(273)),n(96),o(n(92)),o(n(70)));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.default.createElement("div",{className:"App"},r.default.createElement(s.default,null))},t}(r.default.Component);t.default=a},290:function(e,t,n){"use strict";t.__esModule=!0,t.fixBaseFontSizeDebounce=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(289));n(60);var s=16;var o=(0,r.default)(function(){document.head.querySelector("meta[name=viewport]").content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0",document.documentElement.style.fontSize=s+"px"},300);document.addEventListener("DOMContentLoaded",o),t.fixBaseFontSizeDebounce=o},291:function(e,t,n){},300:function(e,t,n){"use strict";var r=i(n(0)),s=i(n(20));n(291),n(290);var o=i(n(279)),a=n(60);function i(e){return e&&e.__esModule?e:{default:e}}window.Swiper=Swiper,function(){var e=document.querySelector("body");(0,a.isPc)()?e.className=e.className+"pc-fix-style":(0,a.isIOS)()?(e.className=e.className+"ios-fix-style",(0,a.isIPhoneX)()&&(e.className=e.className+"iphoneX-fix-style")):(0,a.isAndroid)()?e.className=e.className+"android-fix-style":e.className=e.className+"other-fix-style"}(),s.default.render(r.default.createElement(o.default,null),document.getElementById("root"))},37:function(e,t,n){"use strict";t.__esModule=!0;t.QUESTIONS={1:{key:1,question:"你买二手车更倾向于什么？",answers:[{desc:"情怀",toQues:2},{desc:"实用",toQues:10}]},2:{key:2,question:"你有很多钱吗？",answers:[{desc:"有",toQues:3},{desc:"没有",toQues:9}]},3:{key:3,question:"你愿意花很多时间折腾车子吗？",answers:[{desc:"愿意",toQues:4},{desc:"不愿意",toQues:8}]},4:{key:4,question:"你买车是出于什么目的？",answers:[{desc:"投资",toQues:5},{desc:"充场面",toQues:6},{desc:"儿时的梦想",toQues:7}]},5:{key:5,question:"投资回报是？",answers:[{desc:"收取使用补偿",toResult:"A"},{desc:"屯着未来卖",toResult:"B"}]},6:{key:6,question:"你想要主流的答案还是非主流的？",answers:[{desc:"主流",toResult:"C"},{desc:"非主流",toResult:"D"}]},7:{key:7,question:"你有充足的养车预算吗？",answers:[{desc:"有",toResult:"E"},{desc:"没有",toResult:"F"}]},8:{key:8,question:"你会买日系车吗？",answers:[{desc:"考虑购买",toResult:"G"},{desc:"不考虑购买",toResult:"H"}]},9:{key:9,question:"你愿意花很多时间折腾车子吗？",answers:[{desc:"愿意",toResult:"I"},{desc:"不愿意",toResult:"J"}]},10:{key:10,question:"你有很多钱吗？",answers:[{desc:"有",toQues:11},{desc:"没有",toQues:19}]},11:{key:11,question:"你喜欢什么车系的车子？",answers:[{desc:"日系",toQues:12},{desc:"韩系",toQues:15},{desc:"美系",toQues:16},{desc:"德系",toQues:17}]},12:{key:12,question:"你是否有本田情怀？",answers:[{desc:"有",toQues:13},{desc:"没有",toQues:14}]},13:{key:13,question:"你的预算超过8w吗？",answers:[{desc:"超过",toResult:"K"},{desc:"不超过",toResult:"L"}]},14:{key:14,question:"你对舒适性的优先级要求高吗？",answers:[{desc:"高",toResult:"M"},{desc:"不高",toResult:"N"}]},15:{key:15,question:"你会选择起亚还是现代？",answers:[{desc:"起亚",toResult:"O"},{desc:"现代",toResult:"P"}]},16:{key:16,question:"你有充足的养车预算吗？",answers:[{desc:"有",toResult:"Q"},{desc:"没有",toResult:"R"}]},17:{key:17,question:"你是否具有大众信仰？",answers:[{desc:"有",toResult:"S"},{desc:"没有",toResult:"T"}]},18:{key:18,question:"你目前有喜欢的自主品牌吗？",answers:[{desc:"有",toResult:"U"},{desc:"没有",toResult:"V"}]},19:{key:19,question:"你有时间和耐心折腾车子吗？",answers:[{desc:"有",toQues:20},{desc:"没有",toResult:"W"}]},20:{key:20,question:"你会选择购买日系车吗？",answers:[{desc:"考虑购买",toResult:"X"},{desc:"不考虑购买",toResult:"Y"}]}},t.RESULTS={A:"一些大型活动如婚庆、开幕式用来撑场子的，各种美系大轿车、加长车、老款跑车等。",B:"限量车型或情怀性能车，例如纯原装未改装的三菱EVO 7/8/9、思域Si。",C:"有钱有闲又要有面，BBA的豪华车，蝴蝶奔、W12的A8、V12宝马760。",D:"有钱还不怕修车，捷豹路虎玛莎拉蒂，开着10年前的英国豹，装逼装得猝不及防，秒咖喱豹几条街好么。",E:"欧系性能车，尤其是奔驰AMG，加得起油不买AMG简直是犯罪。",F:"老甲虫、老Mini、老宝马、老奔驰、老皇冠、萨博、大众系性能车，但要注意翻新零部件的获得渠道。",G:"下地5年内的雷克萨斯、讴歌、英菲尼迪",H:"下地两年内的美系、德系（非豪华）、韩系、自主品牌车，5年内的奥迪。",I:"有时间那就滚去赚钱啊，没钱想玩情怀，反被情怀玩。",J:"买锤子四个轮啊，小牛电动车、凤凰二八大杠也很有情怀的。",K:"买GK5，剩下的钱买理财产品。",L:"那就买经济实惠的飞度吧。",M:"日产，除GTR外，每一个车型在细分市场几乎都是最舒服的。",N:"丰田或马自达都是不错的选择。",O:"买起亚，别买出租车同款。",P:"买现代，别买出租车同款。",Q:"别克涡轮化之前的车，君威GS、老君越，福特非双离合非6AT车型。",R:"别克涡轮化之后的车，新科鲁兹、新英朗，福特1.5T系列轿车。",S:"大众旗下各款都是不错的选择哟。",T:"法系？俄系？呆梨系？只有德系靠谱啊。德国车只有大众算是非豪华品牌，所以……",U:"喜欢谁买谁，喜欢电动车的例外。",V:"荣威、长安比较买的过。",W:"10年车龄左右的保有量大的日系车。",X:"帕杰罗、老雅阁、老凯美瑞、老风度、跑车如丰田赛利卡、三零GTO。",Y:"别克老凯越、赛欧2，大众老捷达、桑塔纳，五菱各种后驱超跑。"}},60:function(e,t,n){"use strict";t.__esModule=!0,t.getWindowSize=function(){return{width:window.innerWidth,height:window.innerHeight}},t.isPc=function(){var e={win:!1,mac:!1,x11:!1},t=navigator.platform;return e.win=0===t.indexOf("Win"),e.mac=0===t.indexOf("Mac"),e.x11="X11"===t||0===t.indexOf("Linux"),!(!(e.win||e.mac||e.x11)||/iphone/i.test(navigator.userAgent)||/android/i.test(navigator.userAgent))},t.isIOS=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent).match(/ipad|iphone|ipod/i)},t.isIPhoneX=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent).match(/iphone/i)&&812===screen.height&&375===screen.width},t.isAndroid=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent).match(/android/i)}},68:function(e,t,n){"use strict";t.__esModule=!0,t.MView=t.Loading=t.Modal=void 0;var r=n(268),s=n(259),o=n(258);t.Modal=r.Modal,t.Loading=s.Loading,t.MView=o.MView},70:function(e,t,n){"use strict";t.__esModule=!0;var r=u(n(0)),s=(u(n(28)),n(68)),o=n(153),a=n(37),i=n(151);n(114);function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.setIndex=function(e){r.setState({currIndex:e})},r.updatePages=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;r.setState(e?{questionMap:[].concat(r.state.questionMap.slice(0,r.state.currIndex+1),[a.QUESTIONS[e]]),resultKey:t}:{questionMap:[].concat(r.state.questionMap.slice(0,r.state.currIndex+1)),resultKey:t},function(){r.mySwiper.updateSlides(),r.mySwiper.slideNext()})},r.saveUserChoice=function(e){r.userChoiceArr=r.userChoiceArr.splice(0,r.state.currIndex),r.userChoiceArr[r.state.currIndex]=e},r.handleToNextPage=function(e){var t=e.chosenIndex,n=e.questionKey,s=e.resultKey;r.postResult(s),r.userChoiceArr[r.state.currIndex]!==t?(r.saveUserChoice(t),r.updatePages(n,s)):r.mySwiper.slideNext()},r.handleStartTest=function(){r.updatePages(1)},r.state={currIndex:0,questionMap:[],resultKey:null},r.userChoiceArr=[],r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.initSwiper()},t.prototype.postResult=function(e){e&&fetch("http://www.dandywei.com/car/test?key="+e)},t.prototype.initSwiper=function(){var e=this;this.mySwiper=new window.Swiper(".swiper-container",{direction:"vertical",on:{slideChangeTransitionEnd:function(){e.setIndex(this.activeIndex-1)}}})},t.prototype.render=function(){var e=this,t=this.state.questionMap;return r.default.createElement(s.MView,null,r.default.createElement("div",{className:"scroll pageCarTest"},r.default.createElement("div",{className:"pageCarTest-wrapper swiper-container"},r.default.createElement("div",{className:"swiper-wrapper"},r.default.createElement("div",{className:"pageCarTest-swiper swiper-slide swiper-no-swiping",key:"frontPage"},r.default.createElement("div",{className:"pageCarTest-frontPage"},r.default.createElement("div",{className:"pageCarTest-frontPage-btnWrapper"},r.default.createElement("div",{className:"btn",onTouchEnd:this.handleStartTest},"立即测试")))),t.map(function(t,n){return r.default.createElement("div",{className:"pageCarTest-swiper swiper-slide",key:t.key},r.default.createElement(o.TestCard,{question:t.question,answers:t.answers,selectIndex:e.userChoiceArr[n],handleChoose:e.handleToNextPage}))}),this.state.resultKey&&r.default.createElement("div",{className:"pageCarTest-swiper swiper-slide",key:"resultPage"},r.default.createElement(i.ResultCard,{resultKey:this.state.resultKey,handleNextTouch:function(){e.mySwiper.slideNext()}}))))))},t}(r.default.Component);t.default=c},92:function(e,t,n){"use strict";t.__esModule=!0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),s=n(69);var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.default.createElement("div",null,r.default.createElement(s.Link,{to:"/fe/react-portal"},"portal"))},t}(r.default.Component);t.default=o},96:function(e,t,n){"use strict";t.__esModule=!0,t.LRouteF=t.LRoute=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(272)),s=n(68);var o=function(){function e(t){var n=t.path,r=t.component,o=t.delay,a=void 0===o?200:o,i=t.timeout,u=void 0===i?10:i,c=t.loading,l=void 0===c?s.Loading:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.path=n,this.component=r,this.delay=a,this.timeout=u,this.loading=l}return e.prototype.getComponent=function(){return(0,r.default)({loading:this.loading,delay:this.delay,timeout:this.timeout,loader:this.component})},e}();t.LRoute=o,t.LRouteF=function(e){var t=e.path,n=e.component,o=e.delay,a=void 0===o?200:o,i=e.timeout,u=void 0===i?10:i,c=e.loading,l=void 0===c?s.Loading:c;return{path:t,getComponent:function(){return(0,r.default)({loading:l,delay:a,timeout:u,loader:n})}}}}},[[300,2,0]]]);
//# sourceMappingURL=chunk.app.3.58dc0a074199630dd0ea.js.map