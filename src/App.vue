<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view/>
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
                this.transitionName = 'slide-right'
            } else {
                this.transitionName = 'slide-left'
            }
            this.$router.isBack = false
        }
    }
}
</script>

<style>
/* @import 'https://style.org.hc360.com/css/cpk/cpkStyle.css'; */
@import './cpkStyle.css';

.mint-toast * {
    font-size: 0.26rem !important;
    width: 5rem !important;
    padding: 0.15rem 0.2rem !important;
}

.Router {
    position: absolute;
    width: 100%;
    transition: all .8s ease;
    top: 40px;
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
