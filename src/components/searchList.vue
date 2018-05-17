<template lang="html">
    <div class="spareProList" style="position: relative;">
        <ul>
            <router-link
                v-for="(item, index) in searchList"
                :to="{ name: 'detail', params: {id: item.productInfo.id} }"
                :key="index" tag="li">
                <div class="proImgCon">
                    <a href="javascript:;">
                        <img class="proImg" :src="item.name" @error="imgError(index)" />
                    </a>
                </div>
                <p class="protil">
                    <a href="javascript:;">{{item.productInfo.name}}</a>
                </p>
                <p class="price" v-html="number(item.productInfo.price)"></p>
            </router-link>
        </ul>

        <div class="more">
            <div class="lineBot" v-if="ispullup">
                <p class="textBot">没有更多了</p>
            </div>
            <div class="page-infinite-loading" v-if="!ispullup && loading">
                <mt-spinner type="snake"></mt-spinner><span>正在加载...</span>
            </div>
        </div>
    </div>
</template>

<script>
import {errImg} from '../common/config.js';
export default {
    name: 'SearchList',
    props: {
        searchList: {
            type: Array,
            default: []
        },
        ispullup: {
            type: Boolean
        },
        loading: {
            type: Boolean
        },
        errImg: {
            default: errImg
        }
    },
    methods: {
        imgError (index) {
            this.searchList[index].name = errImg;
        },
        number(value) {
            let toFixedNum = Number(value).toFixed(2);
            let realVal = toFixedNum.split('.');
            return `&yen;<span class="allprice">${realVal[0]}.</span>${realVal[1]}`;
        }
    }
}
</script>
<style media="screen">
.mint-spinner-snake{
    margin: 0 auto;
}
.page-infinite-loading{
    line-height: normal;
}
</style>
