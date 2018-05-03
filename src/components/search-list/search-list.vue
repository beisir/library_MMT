<template lang="html">
    <div class="">
        <Header title="五金工具" />
        <div class="topSearch">
            <div class="searchCon">
                <input
                    class="phcolor"
                    type="text"
                    v-model="keyword"
                    @keyup.enter="enterEvent(keyword)"
                    placeholder="请输入商品关键字" />
            </div>
        </div>
        <div class="box1">
            <SearchList
                v-infinite-scroll="loadMore"
                infinite-scroll-distance="35"
                infinite-scroll-disabled="ispullup"
                infinite-scroll-immediate-check="true"
                :searchList="searchList"
                :loading="loading"
                :ispullup="ispullup"
                />
             <div style="height:20px;wdith:100%;"></div> 
        </div>
    </div>
</template>

<script>
import { search_listPath } from '../../common/config.js';
export default {
    data () {
        return {
            keyword: '',
            searchList: [],
            pageNo: 1,
            isPullDown: false,
            ispath: '',
            prodbycat_path: '',
            prodbytitle_path: '',
            prodbysupid_path: '',
            pageNo: 1,
            loading: false,
            ispullup: false
        }
    },
    created () {
        this.judgmentPath(this.$route.params);
    },
    methods: {
        enterEvent (val) {
            if (val !== '') {
                this.pageNo = 1;
                this.ispullup = false;
                this.searchList = [];
                this.judgmentPath({key: val});
            } else {
                this.$toast('请输入商品关键字');
            }
        },
        judgmentPath ({supcatid, bcid, key}) {
            try {


            let pageNo = this.pageNo,
                url = '',
                ispath = '',
                prodbycat_path = '',
                prodbytitle_path = '',
                prodbysupid_path = '';

                if (supcatid) {
                    ispath = 'prodbysupid';
                    prodbysupid_path = `${search_listPath.prodbysupid}&supid=${supcatid}&pageNo=`
                    url = `${prodbysupid_path}${pageNo}`
                } else if (bcid) {
                    ispath = 'prodbycat';
                    prodbycat_path = `${search_listPath.prodbycat}&catid=${'100000000'}&pageNo=`
                    url = `${prodbycat_path}${pageNo}`;
                } else {
                    ispath = 'prodbytitle';
                    prodbytitle_path = `${search_listPath.prodbytitle}&`
                    url = `${prodbytitle_path}title=${encodeURIComponent(key)}&pageNo=${pageNo}`;
                };
                this.keyword = key || '';
                this.ispath = ispath;
                this.prodbycat_path = prodbycat_path;
                this.prodbytitle_path = prodbytitle_path;
                this.prodbysupid_path = prodbysupid_path;
                this.getSearchList(url);
            } catch (e) {
                alert(e);
            }
        },
        getSearchList (params) {
            const _this = this;
            _this.loading = true;
            this.$ajax('get', params).then(result => {
                if (result.content.length){
                    let searchList = _this.searchList;
                    _this.searchList = searchList.concat(result.content);
                    _this.loading = false;
                } else {
                    _this.ispullup = true;
                    _this.pageNo = result.number;
                    _this.$toast('暂无数据');
                };
            });
        },
        loadMore (options) {
            let { keyword, pageNo, ispath, prodbycat_path, prodbytitle_path, prodbysupid_path } = this;
            let url = '';
            this.pageNo = this.pageNo + 1;
            if (ispath === 'prodbytitle') {  // 搜索接口
                url = `${prodbytitle_path}title=${encodeURIComponent(keyword)}&pageNo=${this.pageNo}`;
            } else if (ispath === 'prodbycat') {    // bcid接口
                url = `${prodbycat_path}${this.pageNo}`
            } else if (ispath === 'prodbysupid') {
                url = `${prodbysupid_path}${this.pageNo}`
            }
            this.getSearchList(url);
        }
    }
}
</script>

<style lang="css">
</style>
