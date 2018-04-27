<template lang="html">
    <div class="">
        <header class="mHeaderBox"><a href="#" class="arrowLeft"></a><h3>五金工具</h3></header>
        <div class="topSearch">
          <div class="searchCon"><input class="phcolor" type="text" placeholder="请输入商品关键字" /></div>
        </div>
        <div class="box1">
          <SearchList :searchList="search_list" />
          <div class="more">
            <div class="lineBot">
              <p class="textBot">没有更多了</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { search_listPath } from '../../common/config.js';
export default {
    data () {
        return {
            keyword: '',
            search_list: [],
            pageNo: 1,
            isPullDown: false,
            ispath: '',
            prodbycat_path: '',
            prodbytitle_path: '',
            prodbysupid_path: '',
            loadingTxt: 'drop'
        }
    },
    created () {
        // let params = this.$route.params;
        // let pageNo = _thi.pageNo,
        //         url = '',
        //         ispath = '',
        //         prodbycat_path = '',
        //         prodbytitle_path = '',
        //         prodbysupid_path = '';
        //     if (supcatid) {
        //         ispath = 'prodbysupid';
        //         prodbysupid_path = `${search_listPath.prodbysupid}&supid=${supcatid}&pageNo=`
        //         url = `${prodbysupid_path}${pageNo}`
        //     } else if (bcid) {
        //         ispath = 'prodbycat';
        //         prodbycat_path = `${search_listPath.prodbycat}&catid=${'100000000'}&pageNo=`
        //         url = `${prodbycat_path}${pageNo}`;
        //     } else {
        //         ispath = 'prodbytitle';
        //         prodbytitle_path = `${search_listPath.prodbytitle}&`
        //         url = `${prodbytitle_path}title=${encodeURIComponent(key)}&pageNo=${pageNo}`;
        //     };
        //         this.keyword = key || '';
        //         this.ispath = ispath;
        //         this.prodbycat_path = prodbycat_path;
        //         this.prodbytitle_path = prodbytitle_path;
        //         this.prodbysupid_path = prodbysupid_path;
        //
        //     this.getSearchList(url);
    },
    getSearchList (params) {
        const _this = this;
        _this.loadingTxt = 'load';
        this.$ajax(params).then(result => {
            if (result.content.length){
                let search_list = this.search_list;
                _this.search_list = search_list.concat(result.content);
                _this.pageNo = result.number;
                _this.loadingTxt = 'drop';
            } else {
                _this.loadingTxt = 'more'
                _this.$toast('暂无数据');
            };
        });
    }

}
</script>

<style lang="css">
</style>
