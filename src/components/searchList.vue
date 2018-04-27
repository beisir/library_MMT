<template lang="html">
        <div class="spareProList">
            <!--  -->
            <ul>
                <li v-for="item in searchList" :key="item.id">
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
        <div v-show="loading" class="page-infinite-loading">
            <mt-spinner type="snake"></mt-spinner>正在加载...
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
        pageNo: {
            type: Number
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
            this.loading = true;
            this.$emit('pageEvent')
        },
        forEvent (options) {
            console.log(options);
        }
    }
}
</script>
