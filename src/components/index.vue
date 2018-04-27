<template lang="html">
    <div class="">
        <Header />
        <!-- <header class="mHeaderBox"><a href="#" class="arrowLeft"></a><h3>工业品库</h3></header> -->
        <transition name="component-fade" mode="out-in">
          <router-view />
        </transition>
        <div class="indexBotFixed" style="z-index:100000000">
        	<ul>
                <router-link
                    v-for="(item, index) in routerLink"
                    :class="activeIndex === index ? item.activeClass: item.routerClass"
                    :to="item.path"
                    :key="item.text"
                    @click.native="activeIndex = index"
                    tag="li"><a href="javascript:;">{{item.text}}</a></router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            activeIndex: 0,
            routerLink: [{
                routerClass: 'indexLink',
                activeClass: 'indexLinkCur',
                text: '首页',
                path: '/app/index'
            }, {
                routerClass: 'classLink',
                activeClass: 'classLinkCur',
                text: '分类',
                path: '/app/class'
            }/*, {
                routerClass: 'manageLink',
                activeClass: 'manageLinkCur',
                text: '我的',
                path: '/app/manage'
            }*/]
        }
    }
}
</script>

<style lang="css">
.component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ;
}
.component-fade-enter, .component-fade-leave-to{
    opacity: 0;
}
</style>
