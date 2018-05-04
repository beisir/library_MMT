// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import routerConfig from './router';
import vuexConfig from './store/store.js';
import App from './App'
// import vueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(Router);
Vue.use(Vuex);
const router = routerConfig(Router);
const store = vuexConfig(Vuex);


import 'mint-ui/lib/style.css'
import {
    InfiniteScroll,
    Spinner,
    TabContainer,
    TabContainerItem,
    Toast,
    Swipe,
    Popup,
    SwipeItem,
    Lazyload} from 'mint-ui';
import Header from './components/Header.vue';
import SearchList from './components/SearchList.vue';

Vue.use(InfiniteScroll);
Vue.use(Lazyload);
Vue.component(Spinner.name, Spinner);
Vue.component(Header.name, Header);
Vue.component(SearchList.name, SearchList);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Popup.name, Popup);

import UTils from './common/util.js';

Vue.prototype.$ajax = UTils.ajax;
// / 全局注册提示信息的方法
Vue.prototype.$toast = (mes, toastCallback) => {
    Toast({
        message: mes,
        position: "middle",
        duration: 1500
    });
};



Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
