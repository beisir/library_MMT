<template lang="html">
        <div class="spareProList" style="position: relative;padding-bottom:1.5rem;">
            <!--  -->
            <ul>
                <li v-for="(item, index) in searchList" :key="index">
                    <div class="proImgCon">
                        <a href="#">
                            <img class="proImg" :src="item.name">
                        </a>
                    </div>
                    <p class="protil">
                        <a href="#">{{item.productInfo.name}}</a>
                    </p>
                    <p class="price" v-html="number(item.productInfo.price)"></p>
                </li>
            </ul>
          <div v-if="loading && !ispullup" class="page-infinite-loading">
              <mt-spinner type="snake"></mt-spinner>正在加载...
          </div>
          <div v-else-if="ispullup" class="page-infinite-loading">
              暂无数据
          </div>
          <div v-else class="page-infinite-loading">
              下拉加载
          </div>
    </div>

</template>

<script>
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
        }
    },
    data () {
        return {
            list: [1,2,3,4,5,6,7,8]
        }
    },
    methods: {
        number(value) {
            let toFixedNum = Number(value).toFixed(2);
            let realVal = toFixedNum.substring(0, toFixedNum.toString().length - 1).split('.');
            return `&yen;<span class="allprice">${realVal[0]}.</span>${realVal[1]}`;
            //
        },
        loadMore (options) {
            // this.loading = true;
            // this.$emit('pageEvent')
        },
        forEvent (options) {
            console.log(options);
        }
    }
}
</script>
<style media="screen">
.page-infinite-loading{position: absolute;
bottom: 1rem;
z-index: 200000000000;
left: 38%;}
</style>
