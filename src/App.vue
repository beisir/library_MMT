<template>
    <div id="app">
        <!-- <transition name="component-fade" mode="out-in"> -->
        <!--     <router-view/>
        </transition> -->
        <transition :name="transitionName">
            <router-view class="Router" />
　　　　</transition>
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return  {
            transitionName: 'slide-right'
        }
    },
    watch: {
        '$route' (to, from) {
            let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
            if(isBack) {
                this.transitionName = 'slide-right';
            } else {
                this.transitionName = 'slide-left';
            };
            this.$router.isBack = true;
        }
    }
}
</script>

<style>
html, body ,.Router{
    height: 100%;
    width: 100%;
}
/* @import 'http://192.168.120.32/css/cpk/cpkStyle.css'; */
/* @import './cpkStyle.css'; */
/* @import './assets/css/cpkStyle.css'; */
.component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ;
}
.component-fade-enter, .component-fade-leave-to{
    opacity: 0;
}

.Router {
    width: 100%;
    transition: all .6s ease;
    position: absolute;
    width: 100%;
    top: 0;
}

.slide-left-enter,
 .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
</style>
