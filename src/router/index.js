import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from './mapping.js';
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: routerConfig,
    base: '/mprod/',
    scrollBehavior (to, from, savedPosition) {
        // 如果有上次的滚动位置就反回上次的滚动位置
        if (savedPosition) {
            return savedPosition;
        // 否则将滚动条的位置初始化，到最上面和最左面
        } else {
            return {x: 0, y: 0};
        };
    },
    // 有些浏览器不支持前端history路由跳转
    // 自动不支持的情况下 vue自动转为hash方式
    fallback: true
})
