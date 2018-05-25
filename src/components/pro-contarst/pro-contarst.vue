<template lang="html">
    <div class="">
        <Header title="产品对比" />
        <div class="contrastBox">
            <div class="contrastCon">
                <ul>
                	<li v-for="(item, index) in contrastList"
                        @click="modifyState(index)">
                        <em :class="item.flag ? 'contrastIcoCur' : 'contrastIco'"></em>
                        <router-link
                            class="godetail"
                            :to="{ name: 'detail', params: {id: item.prodid} }">
                            <div class="contrastImg">
                                <span>
                                    <img :src="item.picpath" />
                                </span>
                            </div>
                            <p class="contrastName">{{item.prodname}}</p>
                        </router-link>
                    </li>
                </ul>
                <router-link
                    class="contrastAdd"
                    :to="{ name: 'search-list', params: {'catid':catId} }">添加产品</router-link>
            </div>
        </div>
        <button type="button" class="contrastBtn" @click="startContras">开始对比</button>
    </div>
</template>

<script>
import { pro_contrast } from '../../common/config.js';
export default {
    name: 'proContarst',
    data () {
        return {
            openid: '',
            contrastList: [],
            statusList: [],
            catId: ''
        }
    },
    created () {
        let { catid } = this.$route.params;
        this.UUID = localStorage.getItem('UUID');
        this.catId = catid;
        this.contrastPageList(this.UUID, catid);
    },
    methods: {
        contrastPageList (openid, catid) {
            const _this = this;
            this.$ajax('get', pro_contrast.comparedProds, {
                params: {
                    catid: catid,
                    openid: openid
                }
            }).then(result => {
                _this.contrastList = result;
            });
        },

        modifyState (index) {
            let { contrastList, statusList } = this;
            contrastList[index].flag = !contrastList[index].flag;
            if (contrastList[index].flag) {
                statusList.push(contrastList[index].prodid);
                if (statusList.length > 2) {
                    statusList.shift();
                };
                contrastList = contrastList.map(statusItem => {
                    statusItem.flag = statusList.indexOf(statusItem.prodid) !== -1 ? true : false;
                    return statusItem;
                });
            } else {
                statusList.shift()
            };
            this.contrastList = contrastList;
            this.statusList = statusList;
        },
        /**
         * [startContras() ]
         * [开始对比 ]
         * [-------------------------------------------------]
         */
        startContras () {
            let { contrastList, catId } = this;
            let statusList = contrastList.filter(item => item.flag === true);
            if (statusList.length === 2) {
                this.$router.push({
                    path: '/contrast-2',
                    query: {
                        catid: catId,
                        prodid: `${statusList[0].prodid},${statusList[1].prodid}`
                    }
                });
            } else {
                this.$toast('请选择两项进行对比');
            }
        }
    }
}
</script>

<style lang="css">
    .godetail{
        display: block;
        overflow: hidden;
    }
</style>
