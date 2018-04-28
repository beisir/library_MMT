<template lang="html">
    <div class="classBox">
        <div class="classLeft">
            <ul>
                <li
                    v-for="(item, index) in asideTtile"
                    :key="item.supcatname"
                    :class="index === asideCur? 'classCur': ''"
                    @click="selectAside(index, item.supcatid)"
                    >{{item.supcatname}}</li>
            </ul>
        </div>
        <div class="classRig">
            <div class="classRigCon">
                <div class="classRigTitCon">
                    <h3 class="classRigTit">{{title}}</h3>
                    <router-link
                        class="classRigMore"
                        :to="{ name: 'search-list', params: {supcatid: title_supid} }"
                        >所有产品</router-link>
                </div>
                <div class="classRigBot">
                    <router-link
                        class="classLink"
                        v-for="classItem in contentArr"
                        :key="classItem.supcatname"
                        :to="{name: 'search-list', params: {
                            bcid: classItem.catid,
                            key: classItem.supcatname
                        }}">
                        <a href="javascript:;">
                            <img :src="classItem.catLogo" />
                            <p>{{classItem.supcatname}}</p>
                        </a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {classy} from '../../common/config.js';
export default {
    data () {
        return {
            title: '',      // 显示所有产品右侧的标题文字
            title_supid: '',// 所有产品的商机id
            asideCur: 0,    // 侧边栏tabIndex
            asideTtile: [], // 侧边栏数据列表
            contentArr: []  // 右边content数据列表
        }
    },
    created () {
        const _this = this;
        _this.getLevelMenu('001').then(list => {
            if (list && list.length) {
                    _this.asideTtile = list;
                _this.getLevelMenu(list[0].supcatid, true).then(result => {
                    _this.contentArr = result;
                    _this.title = list[0].supcatname;
                    _this.title_supid = list[0].supcatid;
                });
            };
        })
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
            _this.getLevelMenu(supcatid).then(list => {
                _this.contentArr = list;
                _this.title = title;
                _this.asideCur = index;   // 侧边栏tabIndexdex;
                _this.title_supid = supcatid   //
            }); // 右边content数据列表
        }
    }
}
</script>

<style lang="css">
</style>
