<template lang="html">
    <div class="index">

        <div class="topSearch">
            <div class="searchCon">
                <input
                    placeholder-class="phcolor"
                    type="text"
                    placeholder="请输入商品关键字"
                    @focus="searchPage"/>
            </div>
        </div>

        <div class="scroll">
            <div class="scrollCon">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide
                        v-for="item in swiperImgList"
                        :key="item.path">
                        <!-- <a href="javascript:;" target="_blank"> -->
                            <img class="scrollImg" :src="item.src" />
                        <!-- </a> -->
                    </swiper-slide>
                </swiper>
                <!-- <div class="scrollIco" style="z-index:10000">
                    <em v-for="(actived, activedIndex) in swiperImgList" :class="activedIndex === 0? 'cur': ''"></em>
                </div> -->
            </div>

        </div>

        <div class="navBox">
            <ul>
                <li class="navTit" v-for="navTit in navTitle">
                    <router-link :to="{ name: '', params: {} }" :key="navTit.icon">
                        <em :class="navTit.icon"></em><p>{{navTit.text}}</p>
                    </router-link>
                </li>
            </ul>
        </div>

        <!-- 今日热点功能暂时不上 -->
        <!-- <div class="hcNewsList">
            <em class="newsIco"></em>
            <div class="newsListCon2">
            	<ul>
                	<li><a href="#"><em class="hotIco">HOT</em><p>响应建筑节能大潮设计成趋势响应建筑节能大趋势响应建筑节能大</p></a></li>
                    <li><a href="#"><em class="hotIco">HOT</em><p>响应建筑节能大潮设计成趋势响应建筑</p></a></li>
                </ul>
            </div>
        </div> -->

        <div class="box1">
            <div class="box1Tit"><h2>大家都在看</h2></div>
            <SearchList
                v-infinite-scroll="loadMore"
                infinite-scroll-distance="10"
                infinite-scroll-disabled="ispullup"
                infinite-scroll-immediate-check="true"
                :searchList="searchList"
                :loading="loading"
                :ispullup="ispullup"
                />
                <!-- infinite-scroll-listen-for-event="forEvent" -->

        </div>

        <!-- 为你推荐数据列表 -->
        <!-- <div class="box2">
            <div class="box2Tit"><h2>为你推荐</h2><a class="moreLink">更多</a></div>
            <SearchList />
        </div> -->
    </div>
</template>

<script>
import { index_page } from '../../common/config.js';
export default {
    data () {
        return {
            swiperOption: {
                // notNextTick: true, // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                autoplay: 500,
                // initialSlide: 1,
                effect: 'cube',
                loop: true,
                pagination: '.swiper-pagination',
                onSlideChangeEnd: swiper => {
                    console.log('onSlideChangeEnd', swiper.realIndex)
                },
                onClick (swiper){
                    console.log(swiper);
                }
            },
            swiperImgList: [{
                path: 'indexOf',
                src: 'https://style.org.hc360.com/images/cpk/bImg1.png'
            }, {
                path: 'asdasdas',
                src: 'https://style.org.hc360.com/images/cpk/cpkIndexIco.png'
                }, {
                    path: 'asdkxxx',
                    src: 'https://style.org.hc360.com/images/cpk/bImg1.png'
                }],
                navTitle: [{
                    icon: 'ico1',
                    text: '装修建材',
                    path: ''
                }, {
                    icon: 'ico2',
                    text: '五金工具',
                    path: ''
                }, {
                    icon: 'ico3',
                    text: '建筑保温',
                    path: ''
                }, {
                    icon: 'ico4',
                    text: '管材管件',
                    path: ''
                }
              ],
            searchList: [],
            pageNo: 1,
            loading: false,
            ispullup: false
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    methods: {
        getSearchList (pageNo = 1) {
            const _this = this;
            let searchList = _this.searchList;
            console.log(pageNo)
            _this.loading = true;
            // _this.$ajax('get', index_page.prodbytime + pageNo).then(options => {
            _this.$ajax('get', index_page.prodbytime + '?a='+ pageNo).then(options => {
                if (options.content.length) {
                    _this.loading = false;
                    _this.searchList = searchList.concat(options.content);
                } else {
                    _this.pageNo = options.number;
                    _this.ispullup = true;
                    _this.$toast('没有更多数据...');
                }
            });
        },
        loadMore (options) {
          this.pageNo = this.pageNo + 1;
          this.getSearchList(this.pageNo)
            console.log(options)
        },
        searchPage () {
            this.$router.push({
                path: '/search'
            });
        }
        // pageEvent (num) {
        //     if (!this.loading){
        //         this.pageNo = this.pageNo + 1;
        //         this.getSearchList(this.pageNo);
        //     }
        // }
    },
    created () {
        this.getSearchList();
    },
    mounted () {
        // this.swiper.on('slideChangeEnd', function (options){
        //     console.log(options);
        // });
        // console.log(this.swiper)
    }
}
</script>

<style lang="css">
    .page-infinite-loading {
      /* margin-top:20px; */
      text-align: center;
      height: 50px;
      line-height: 50px;
    }
    .page-infinite-loading span {
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
    }
</style>
