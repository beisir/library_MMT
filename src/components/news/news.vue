<template lang="html">
    <div class="" style="position: relative;">
        <Header title="评测" />
        <pageTitle :keyword="$route.params.keyword" :id="$route.params.id"></pageTitle>
        <div class="newsListCon mTop110"
            v-infinite-scroll="loadMore"
            infinite-scroll-distance="10"
            infinite-scroll-disabled="ispullup"
            infinite-scroll-immediate-check="true">
            <consultation :productList="productList"></consultation>
        </div>
        <div class="more">
            <div class="lineBot" v-if="ispullup">
                <p class="textBot">没有更多了</p>
            </div>
            <div class="page-infinite-loading" v-if="!ispullup && loading">
                <mt-spinner type="snake"></mt-spinner>
            </div>
        </div>
    </div>
</template>

<script>
import { news } from '../../common/config.js';
import pageTitle from '../view/pageTitle.vue';
import consultation from '../view/consultation.vue';
export default {
    data (){
        return {
            productList: [],
            keyword: '',
            pageNo: 0,
            loading: false,
            ispullup: false
        }
    },
    created () {
        let {id, keyword} = this.$route.params;
        this.keyword = keyword || this.$route.query.keyword;
        this.getProduct(id, keyword);
    },
    methods: {
        async getProduct (id, keyword) {
            const _this = this;
            let getinfoData = await _this.$ajax('get', news.getinfoCMS + id);
            if (getinfoData.length){
                _this.productList = getinfoData;
            } else {
                _this.productList = [];
            }
            this.loadMore(_this.pageNo);
        },
        async getInfoList (pageNo){
            const _this = this;
            this.loading = true;
            let keyword = _this.keyword || '';
            let result = await _this.$ajax('get', `${news.getinfo}&keyword=${keyword}&page=${pageNo}`);
            if (result.length){
                let productList = _this.productList;
                _this.productList = productList.concat(result)
                _this.ispullup = false;
                _this.loading = false;
            } else {
                _this.ispullup = true;
                _this.$toast('没有更多数据...');
            };
        },
        loadMore (options) {
            this.pageNo = this.pageNo + 1;
            this.getInfoList(this.pageNo);
        }
    },
    components: {
        pageTitle,
        consultation
    }
}
</script>

<style lang="css">
    .mint-spinner-snake{
        margin: 0 auto;
    }
    .page-infinite-loading{
        line-height: normal;
    }
</style>
