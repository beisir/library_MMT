<template lang="html">
    <div class="contarast_page">
        <Header title="常固M20" />
        <div class="contrastPro">
            <div class="contrastProTop">
                <div class="vsCon">对比</div>
                <div class="contrastProRig">
                    <div v-for="(item, index) in productWithAtt" :class="index ? 'pro1': 'pro2'">
                        <div class="pro1Img">
                            <img :src="item.imgs[0].name" />
                        </div>
                        <p class="proName">{{item.name}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="detailBox_wrapper">
            <div class="detailBox"
                v-for="(vsItem, vsKey) in vsObj" :key="vsKey">
                <div class="detailTit">{{vsKey}}</div>
                <div class="parameterBoxCon">
                    <ul>
                        <li v-for="(vschild, vschildKey) in vsItem" :key="vschildKey">
                            <h3 class="parameterLeft">{{vschildKey}}</h3>
                            <div class="parameterRig">
                                <div class="parameterList">
                                    <p v-for="(typeItem, typeIndex) in vschild"
                                        :class="!typeIndex ? 'pLeft': 'pRig'"
                                        :key="typeIndex">{{typeItem ? typeItem: '-'}}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { contrast2 } from '../../common/config.js';
export default {
    data () {
        return {
            categoryAttPram: [],
            productWithAtt: [],
            vsObj: {},
            rects: [],
            paramsIndex: {},
            top: 0,
            UUID: ''
        }
    },
    created () {
        const _this = this;
        this.UUID = localStorage.getItem('UUID');
        let {catid, prodid} = this.$route.query;
        this.getConrastParams(catid || 100000000, prodid || '1,2');
    },
    methods: {
        getConrastParams (catid, prodid) {
            const _this = this;
            this.$ajax('get', contrast2.productWithAtts, {
                params: {
                    catid: catid,
                    prodids: prodid
                }
            }).then(result => {
                if (result) {
                    _this.filterParams(result);
                    _this.categoryAttPram = result.categoryAttPram;
                    _this.productWithAtt = result.productWithAtt;
                }

            });
        },
        filterParams ({ categoryAttPram, productWithAtt}) {
            let obj = {};
            let paramsIndex = {}
            categoryAttPram.forEach((item, index) => {
                paramsIndex[item.groupName] = index;
                obj[item.groupName] = {};
                item.params.forEach((val, ind) => {
                   obj[item.groupName][val.name] = new Array(2);
                });
            });
            productWithAtt.forEach((attItem, attIndex) => {
                attItem.attvalues.forEach((valItem, valIndex) => {
                    let keyItem = Object.keys(obj[valItem.attGroup]);
                    if (keyItem.indexOf(valItem.attName) === -1){
                        obj[valItem.attGroup][valItem.attName] = new Array(2);
                    };
                    obj[valItem.attGroup][valItem.attName][attIndex] = valItem.attValue;
                });
            });
            this.vsObj = obj;
            this.paramsIndex = paramsIndex;
        },
    }



}
</script>

<style lang="css">
    .contarast_page {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        flex-direction: column;

    }
    .detailBox_wrapper {
        flex: 1;
        overflow-y: scroll;
    }
</style>
