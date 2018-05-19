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
                <mt-swipe
                    :defaultIndex="activeIndex"
                    :auto="4000"
                    :show-indicators="false"
                    @change="handleChange">
                    <mt-swipe-item
                        v-for="(swipeItem, swipeIndex) in swiperImgList"
                        :key="swipeItem.path">
                        <a :href="swipeItem.path" target="_blank">
                            <img :src="swipeItem.src" />
                        </a>
                    </mt-swipe-item>
                </mt-swipe>

                <!-- <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide
                        v-for="item in swiperImgList"
                        :key="item.path">
                        <a href="javascript:;" target="_blank">
                            <img class="scrollImg" :src="item.src" />
                        </a>
                    </swiper-slide>
                </swiper> -->
                <div v-if="swiperImgList.length > 1" class="scrollIco" style="z-index:10000">
                    <em
                        v-for="(actived, activedIndex) in swiperImgList"
                        :class="{'cur': activedIndex === activeIndex}"></em>
                </div>
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

        <div class="box1" style="padding-bottom: 1rem;">
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
            activeIndex: 0,
            swiperImgList: [
                {
                    path: 'https://www.hc360.com/zt/cpk/index.html',
                    src: 'https://style.org.hc360.com/images/prod/banner1.jpg'
                }, {
                    path: '/mprod/detail/2',
                    src: 'https://style.org.hc360.com/images/prod/banner2.jpg'
                }, {
                    path: '/mprod/detail/5',
                    src: 'https://style.org.hc360.com/images/prod/banner3.jpg'
                }
            ],
            navTitle: [
                {
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
            pageNo: 0,
            loading: false,
            ispullup: false
        }
    },
    methods: {
        handleChange (index) {
            this.activeIndex = index;
        },
        getSearchList (pageNo = 0) {
            const _this = this;
            _this.loading = true;
            _this.$ajax('get', index_page.prodbytime + pageNo).then(options => {
                if (options.content.length) {
                    let searchList = _this.searchList;
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
        },
        searchPage () {
            this.$router.push({
                path: '/search'
            });
        }
    },
    created () {
        this.getSearchList();
    }
}
</script>

<style lang="css">
    .mint-swipe-item > a{
        overflow: hidden;
    }
    .scrollCon img {
        width: 100%;
        height: 100%;
    }
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
