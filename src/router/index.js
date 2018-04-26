import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from './mapping.js';
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: routerConfig
})
