/**
 * Created by Liqi on 18/4/26.
 */

// import {LRouteF} from "./LRoute";
import {LRoute} from "./LRoute";


/* 两种方式，慢慢体会下优缺点
export const routeHome = new LRoute({});
export const routeHome = LRouteF({});
*/

export const routeHome = new LRoute({
    path: '/fe/home',
    component: () => import('./pages/PageHome'),
});

export const routeReactPortal = new LRoute({
    path: '/fe/react-portal',
    component: () => import('./pages/PageReactPortal')
});

export const routePageFlip = new LRoute({
    path: '/page-flip',
    component: () => import('./pages/PageFlip')
});

export const routeLogicReuse = new LRoute({
    path: '/logic-reuse',
    component: () => import('./pages/LogicReuse')
});

