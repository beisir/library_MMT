// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueAwesomeSwiper from 'vue-awesome-swiper';

import Header from './components/Header.vue';
import SearchList from './components/SearchList.vue';


import 'swiper/dist/css/swiper.css'
Vue.use(vueAwesomeSwiper);


/* eslint-disable no-new */
Vue.component(Header.name, Header);
Vue.component(SearchList.name, SearchList);


Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
