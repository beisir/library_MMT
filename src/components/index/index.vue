<template lang="html">
    <div class="index">

        <div class="topSearch">
            <div class="searchCon"><input placeholder-class="phcolor" type="text" placeholder="请输入商品关键字" /></div>
        </div>

        <div class="scroll">
            <div class="scrollCon">
                <swiper :options="swiperOption"  ref="mySwiper">
                    <!-- 这部分放你要渲染的那些内容 -->
                    <swiper-slide
                        v-for="item in swiperImgList"
                        :key="item.path">
                        <a href="javascript:;" target="_blank">
                            <img class="scrollImg" :src="item.src" />
                        </a>
                    </swiper-slide>
                </swiper>
                <div class="scrollIco" style="z-index:10000">
                    <em v-for="(actived, activedIndex) in swiperImgList" :class="activedIndex === 0? 'cur': ''"></em>
                </div>
            </div>

        </div>

        <div class="navBox">
            <ul>
                <li class="navTit"><a href="#"><em class="ico1"></em><p>装修建材</p></a></li>
                <li class="navTit"><a href="#"><em class="ico2"></em><p>五金工具</p></a></li>
                <li class="navTit"><a href="#"><em class="ico3"></em><p>建筑保温</p></a></li>
                <li class="navTit"><a href="#"><em class="ico4"></em><p>管材管件</p></a></li>
            </ul>
        </div>

        <div class="hcNewsList">
            <em class="newsIco"></em>
            <div class="newsListCon2">
            	<ul>
                	<li><a href="#"><em class="hotIco">HOT</em><p>响应建筑节能大潮设计成趋势响应建筑节能大趋势响应建筑节能大</p></a></li>
                    <li><a href="#"><em class="hotIco">HOT</em><p>响应建筑节能大潮设计成趋势响应建筑</p></a></li>
                </ul>
            </div>
        </div>

        <div class="box1">
            <div class="box1Tit"><h2>大家都在看</h2><a class="moreLink">更多</a></div>
            <SearchList />
        </div>

        <div class="box2">
            <div class="box2Tit"><h2>为你推荐</h2><a class="moreLink">更多</a></div>
            <SearchList />
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            swiperOption: {
                notNextTick: true, // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                autoplay: true,
                loop: true,
                direction: 'horizontal', //水平滑动  'vertival’ 垂直方向
                grabCursor: true,
                setWrapperSize: true,
                autoHeight: true,
                pagination: {
                el: '.swiper-pagination'
                },
                centeredSlides: true,
                paginationClickable: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                keyboard: true,
                mousewheelControl: true,
                observeParents: true, // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                debugger: true,
                onSlideChangeEnd: swiper => {
                    console.log(swiper);
                    //这个位置放swiper的回调方法
                    this.page = swiper.realIndex+1;
                    this.index = swiper.realIndex;
                }
            },
            swiperImgList: [{
                path: 'indexOf',
                src: 'https://style.org.hc360.com/images/cpk/bImg1.png'
            }, {
                path: 'asdasdas',
                src: 'https://style.org.hc360.com/images/cpk/bImg1.png'
            }, {
                path: 'asdkxxx',
                src: 'https://style.org.hc360.com/images/cpk/bImg1.png'
            }]
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted () {
        this.swiper.onSlideChangeEnd = function (options){
            console.log(options);
        }
        console.log(this.swiper)
    }
}
</script>

<style lang="css">
</style>
