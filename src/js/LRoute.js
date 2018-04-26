/**
 * Created by Liqi on 18/4/25.
 */
import Loadable from 'react-loadable';
import {Loading} from "./components";

/**
 * 使用react-loadable进行 动态引入
 * https://reactjs.org/docs/code-splitting.html
 * https://github.com/jamiebuilds/react-loadable
 */


// 两种方式，慢慢体会下优缺点
// 函数方式
function LRouteF({
                     path,
                     component,
                     delay = 200,
                     timeout = 10,
                     loading = Loading,
                 }) {

    return {
        path,
        getComponent() {
            return Loadable({
                loading,
                delay,
                timeout,
                loader: component
            });
        }
    }

}

// 类方式
class LRoute {

    constructor({
                    path,
                    component,
                    delay = 200,
                    timeout = 10,
                    loading = Loading,
                }) {
        this.path = path;
        this.component = component;
        this.delay = delay;
        this.timeout = timeout;
        this.loading = loading;
    }

    getComponent() {
        return Loadable({
            loading: this.loading,
            delay: this.delay,
            timeout: this.timeout,
            loader: this.component
        });
    };
}

export {
    LRoute,
    LRouteF,
}
