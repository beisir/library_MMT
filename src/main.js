// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueAwesomeSwiper from 'vue-awesome-swiper';

// import 'mint-ui/lib/style.css'
import {InfiniteScroll,Spinner,TabContainer, TabContainerItem,Toast} from 'mint-ui';
import Header from './components/Header.vue';
import SearchList from './components/SearchList.vue';


import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

import UTils from './common/util.js';
import 'mint-ui/lib/style.css';
import 'swiper/dist/css/swiper.css'
Vue.use(vueAwesomeSwiper);

/* eslint-disable no-new */
Vue.use(InfiniteScroll);
Vue.component(Spinner.name, Spinner);
Vue.component(Header.name, Header);
Vue.component(SearchList.name, SearchList);
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
    components: { App },
    template: '<App/>'
});
