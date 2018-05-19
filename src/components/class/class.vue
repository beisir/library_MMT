<template lang="html">
    <div class="classBox">
        <div class="classLeft">
            <ul>
                <li
                    v-for="(item, index) in asideTtile"
                    :key="item.supcatname"
                    :class="index === asideCur? 'classCur': ''"
                    @click="selectAside(index, item.productCategory.supcatid)"
                    >{{item.productCategory.supcatname}}</li>
            </ul>
        </div>
        <div class="classRig" v-if="asideTtile.length">
            <div class="classRigCon"
                v-for="(secondItem, secondIndex) in asideTtile[asideCur].secondCategory"
                :key="secondItem.productCategory.supcatname">
                <div class="classRigTitCon">
                    <h3 class="classRigTit">{{secondItem.productCategory.supcatname}}</h3>
                    <router-link
                        class="classRigMore"
                        :to="{ name: 'search-list', params: {supcatid: secondItem.productCategory.supcatid} }"
                        >所有产品</router-link>
                </div>
                <div class="classRigBot">
                    <router-link
                        class="classLink"
                        tag="div"
                        v-for="(threeItem, threeIndex) in secondItem.thirdProductCategory"
                        :key="threeIndex"
                        :to="{name: 'search-list', params: {
                            bcid: threeItem.catid,
                            key: threeItem.supcatname
                        }}">
                        <a href="javascript:;">
                            <img :src="threeItem.catLogo" />
                            <p>{{threeItem.supcatname}}</p>
                        </a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {classy} from '../../common/config.js';
import {mapGetters, mapMutations} from 'vuex';
export default {
    data () {
        return {
            title: '',      // 显示所有产品右侧的标题文字
            asideTtile: [], // 侧边栏数据列表
            contentArr: []  // 右边content数据列表
        }
    },
    computed: mapGetters(['asideCur']),
    created () {
        const _this = this;
        _this.getLevelMenu('').then(list => {
            if (list && list.length) {
                _this.asideTtile = list;
            };
        });
    },
    methods: {
        getLevelMenu (params, isLoading) {
            return this.$ajax('get', classy.prodcategory, {
                params: {
                    itemid: params
                }
            });
        },
        selectAside (index, supcatid) {
            const _this = this;
            let title = this.title;
            _this.saveAsideCur(index);
        },
        ...mapMutations(['saveAsideCur'])
    }
}
</script>

<style lang="css">
</style>
