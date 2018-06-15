<template lang="html">
    <div class="" style="padding-bottom: 1rem;">
        <Header title="产品综述" />

        <!-- tab切换 暂时没有 -->
        <pageTitle :keyword="prodinfo.name" :id="id"></pageTitle>

        <!-- 轮播图功能 -->
        <div class="proImgBox">
            <mt-swipe
                :defaultIndex="activeIndex"
                :auto="4000"
                :show-indicators="false"
                @change="handleChange">
                <mt-swipe-item
                    v-for="swipeItem in prodimage"
                    :key="swipeItem.id">
                    <img v-lazy="swipeItem.name" />
                </mt-swipe-item>
            </mt-swipe>
            <!-- <ul>
                <li><img src="https://style.org.hc360.com/images/microMall/program/dImg1.png"></li>
            </ul> -->
            <div class="scrollIco" v-if="prodimage.length > 1">
                <em
                    v-for="(imageItem, index) in prodimage"
                    :class="{'cur': activeIndex === index}"></em>
            </div>
        </div>

        <!-- 商品详情标题价格等... -->
        <div class="proTit">
            <div class="proTitLeft">
                <div class="proTitle">{{prodinfo.name}}</div>
                <div class="proPrice">
                    <span v-if="prodinfo.price > 0">
                        <span class="proPriceText">&yen;</span>{{number(prodinfo.price, 0)}}.<span class="proPriceText">{{number(prodinfo.price, 1)}}</span>
                    </span>
                    <span v-else class="proPriceText">价格面议</span>
                    <a v-if="!isAdd" href="javascript:;" class="contrast" @click="addContrast">对比</a>
                    <a v-else @click="removeContrast">取消对比</a>
                </div>
            </div>
            <button class="shareBox" @click="shareFn" v-if="isShareHide">分享</button>
        </div>

        <div class="detailBox"
            v-if="Object.keys(prodatt).length"
            :style="{'padding-bottom':productList.length ? '' : '1rem'}">
            <div class="detailTit">常固M20详细参数</div>
            <div class="parameterListBox">
                <div class="parameterBoxCon" :style="{
                    'overflow': 'hidden',
                    'height': count > 5 ? '4.3rem' : 'auto'
                    }">
                    <div class="parameterListCon" v-for="(prodattItem, prodattKey) in prodatt">
                    <div class="parameterLeft"><h6>{{prodattKey}}</h6></div>
                    <div class="parameterRig">
                    	<ul>
                        	<li  v-for="prodChildItem in prodattItem">
                                <span class="pLeft">{{prodChildItem.attName}}</span>
                                <span class="pRig">{{prodChildItem.attValue}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                <a v-if="count > 5" href="javascript:;" class="moreBtn" @click="count = 0">更多参数</a>
            </div>
        </div>

        <!-- 供应商报价 -->
        <!-- 本期不做 -->
        <!-- <div class="detailBox">
            <div class="detailTit">供应商报价</div>
            <div class="bjBoxCon">
                <ul>
                    <li>
                        <div class="bjName">
                            <a href="#" class="bjNameLeft">永年县西苏乡孔村国磊紧固件加工厂</a>
                            <div class="bjPrice"><span class="proPriceText">&yen;</span>3880.<span class="proPriceText">00</span></div>
                        </div>
                        <div class="bjNameBot">
                            <span class="bjBotState">分期</span>
                            <span class="bjBotAddress">河北</span>
                            <span class="bjBotScore">综合评分：9.8</span>
                            <a href="#" class="telBtn">电话咨询</a>
                        </div>
                    </li>
                    <li>
                        <div class="bjName">
                            <a href="#" class="bjNameLeft">永年县西苏乡孔村国磊紧固件加工厂</a>
                            <div class="bjPrice"><span class="proPriceText">&yen;</span>3880.<span class="proPriceText">00</span></div>
                        </div>
                        <div class="bjNameBot">
                            <span class="bjBotState">分期</span>
                            <span class="bjBotAddress">河北</span>
                            <span class="bjBotScore">综合评分：9.8</span>
                            <a href="#" class="telBtn">电话咨询</a>
                        </div>
                    </li>
                    <li>
                        <div class="bjName">
                            <a href="#" class="bjNameLeft">永年县西苏乡孔村国磊紧固件加工厂</a>
                            <div class="bjPrice"><span class="proPriceText">&yen;</span>3880.<span class="proPriceText">00</span></div>
                        </div>
                        <div class="bjNameBot">
                            <span class="bjBotState">分期</span>
                            <span class="bjBotAddress">河北</span>
                            <span class="bjBotScore">综合评分：9.8</span>
                            <a href="#" class="telBtn">电话咨询</a>
                        </div>
                    </li>
                </ul>
                <a href="#" class="moreBtn">更多报价</a>
            </div>
        </div> -->

        <!-- 相关资讯-->
        <div class="detailBox"
            v-if="productList.length"
            style="padding-bottom:1rem;">
            <div class="detailTit">专业评测</div>
            <div class="newsListCon">
                <consultation :productList="productList"></consultation>
                <router-link
                    class="moreBtn"
                    tag="div"
                    :to="{
                        name: 'news',
                        params: {id: id, keyword: prodinfo.name }
                    }"
                >更多评测</router-link>
            </div>
        </div>
        <!-- 产品问答 -->
        <!-- <div class="detailBox">
            <div class="detailTit">产品问答<text class="askBtn">提问</text></div>
            <div class="askBoxCon">
                <ul>
                    <li>
                        <a href="#">
                            <div class="askName">桌子能用吗？</div>
                            <div class="answerCon">
                                <p class="answerConLeft">桌子还可以桌子还可以</p>
                                <span class="answerConRig">2个回答</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="askName">桌子能用吗？</div>
                            <div class="answerCon">
                                <p class="answerConLeft">桌子还可以桌子还可以</p>
                                <span class="answerConRig">2个回答</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="askName">桌子能用吗？</div>
                            <div class="answerCon">
                                <p class="answerConLeft">桌子还可以桌子还可以</p>
                                <span class="answerConRig">2个回答</span>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="moreBtn">更多回答</div>
            </div>
        </div> -->

        <div class="detailBotFixed">
            <a :href="'tel:' + phoneNum" class="botTel" style="width:30%;">咨询</a>
            <!-- <div class="collectionIco" style="display:none;">收藏</div> -->
            <!-- <div class="collectionIcoCur">收藏</div> -->
            <!-- <a href="#" class="botBtn1">下载铺货</a> -->
            <a href="javascript:;" class="botBtn2" style="width:70%;" @click="application">申请分销</a>
        </div>
        <router-link
            class="fixedBtnRig"
            :to="{ name: 'proContarst', params: {catid: prodinfo.catId}}">{{ProdsNum ? ProdsNum: 'VS'}}</router-link>
        <nativeShare :isShare="isShare" :config="shareConfig" @closeShare="closeShare"></nativeShare>
    </div>
</template>

<script>
import pageTitle from '../view/pageTitle.vue';
import consultation from '../view/consultation.vue';
import nativeShare from '../nativeShare.vue';

import { detail, news } from '../../common/config.js';
export default {
    data () {
        return {
            id: null,   // 页面id
            activeIndex: 0,
            prodatt: {},
            prodimage: [],
            prodinfo: {
                price: 0,
                catId: 0
            },
            phoneNum: '010-xxxxxxxx',
            applicationId: '',
            isShare: false,
            isShareHide: false,
            UUID: '',
            ProdsNum: 'VS',
            isAdd: true,
            count: 0,
            shareConfig: {
                title: '产品库',
                url: window.location.href
            },
            // 咨询列表数据
            productList: []
        }
    },
    methods: {
        number(value, index) {
            let toFixedNum = Number(value).toFixed(2);
            let realVal = toFixedNum.split('.');
            return realVal[index];
        },
        handleChange (index) {
            this.activeIndex = index;
        },
        shareFn () {
            this.isShare = true;
            document.body.style.overflow = 'hidden';
        },
        closeShare () {
            this.isShare = false;
            document.body.style.overflow = '';
        },
        browserIdenty () {
            var bLevel = {
                    qq: {forbid: 0, lower: 1, higher: 2},
                    uc: {forbid: 0, allow: 1}
                },
                useragent = navigator.userAgent.toLowerCase(),
                isWeixin = useragent.indexOf('micromessenger') !== -1;
            let UA = navigator.appVersion;
            let isqqBrowser = (UA.split("MQQBrowser/").length > 1) ? bLevel.qq.higher : bLevel.qq.forbid;
            let isucBrowser = (UA.split("UCBrowser/").length > 1) ? bLevel.uc.allow : bLevel.uc.forbid;
            if((isqqBrowser && isqqBrowser > 0) || (isucBrowser && isucBrowser > 0) && (!isWeixin)){
                this.isShareHide = true;
            };
        },
        /**
         * [addContrast() ]
         * [ps: 添加对比 ]
         * [-------------------------------------------------]
         */
        addContrast () {
            const _this = this;
            let UUID = this.UUID
            let { id, catId, supcatid } = this.prodinfo;
            _this.$ajax('get',`${detail.addCompared}/${id}/${catId}/${supcatid}/${UUID}`).then(res => {
                let prompt = ''
                switch (res) {
                    case 0: prompt = '添加失败,请重试'; break;
                    case 1: prompt = '添加对比成功'; break;
                    case 2: prompt = '已添加过,请勿重复添加'; break;
                    case 3: prompt = '商机不存在'; break;
                    case 4: prompt = '对比个数超限'; break;
                    default : prompt = '添加失败';
                };
                _this.$toast({
                    message: prompt,
                    iconClass: res === 1 ? 'icon icon-success' : ''
                }, () => {
                    res === 1 && setTimeout(() => {
                        _this.contrastNum(catId, id);
                    }, 1000);
                });
            });
        },
        /**
         * [removeContrast() ]
         * [ps: 取消对比 ]
         * [-------------------------------------------------]
         */
        removeContrast () {
            const _this = this;
            let { id, catId } = this.prodinfo;
            let UUID = this.UUID;
            _this.$ajax('get', `${detail.deleteCompared}/${UUID}/${id}`).then(res => {
                let cludes = res.includes('1');
                _this.$toast({
                    message: cludes ? '取消对比成功':'取消对比失败',
                });
                cludes && setTimeout(() => {
                    _this.contrastNum(catId, id);
                }, 1000);
            });
        },

        /**
         * [contrastNum() ]
         * [ps: 过取对比个数 ]
         * [-------------------------------------------------]
         */
        contrastNum(catId , id) {
            const _this = this;
            let UUID = this.UUID;
            this.$ajax('get', detail.prodsNum, {
                params: {
                    catid: catId,
                    openid: UUID
                }
            }).then(result => {
                if (result){
                    let isAdd = result.some(item => item.product_Id === Number(id));
                    _this.ProdsNum = result.length;
                    _this.isAdd = isAdd;
                } else {
                    _this.$toast('对比个数请求错误');
                }
            });
        },
        /**
         * [application() ]
         * [ps: 申请分销 ]
         * [-------------------------------------------------]
         */
        application () {
            const _this = this;
            _this.$ajax('get', detail.ssohelper).then(result => {
                if (result.islogin === '0') {
                    window.location.href = 'https://mlogin.hc360.com/login.html?flag=m&ReturnURL=' + window.location.href;
                } else {
                    let { prodimage, prodinfo, pcid } = _this;
                    _this.$ajax('get', detail.distribut, {
                        params: {
                            pid: prodinfo.id,
                            pic: prodimage[0].name,
                            title: prodinfo.name,
                            openid: result.usersession.username
                        }
                    }).then(res => {
                        let hint = ''
                        switch (res) {
                            case 0: hint = '您的申请已经提交成功,请等待厂商和您联系'; break;
                            case 1: hint = '已申请过，请勿重复申请'; break;
                            case 2: hint = '系统异常'; break;
                        };
                        _this.$toast(hint);
                    });
                }
            });
        },
        async httpRequest (id){
            const _this = this;
            // 装载页面新属性
            let {prodatt, prodimage, prodinfo, mfbo, count} = await _this.$ajax('get', detail.prodinfo, {
                    params: {id: id}
                });
            _this.prodatt = prodatt || {};
            _this.prodimage = prodimage || [];
            _this.prodinfo = prodinfo || {};
            _this.phoneNum = (mfbo && mfbo.tel) || '';
            _this.applicationId = (mfbo && mfbo.id) || '';
            _this.pcid = 1;
            _this.count = count;
            _this.shareConfig.title = prodinfo.name;
            _this.contrastNum(prodinfo.catId, id);

            let getinfoData = await _this.$ajax('get', news.getinfoCMS + id);
                if (getinfoData.length > 3 && getinfoData !== ''){
                    getinfoData = getinfoData.slice(3, getinfoData.length);
                    _this.productList = getinfoData.length || []
                } else {
                    _this.productList = getinfoData;
                    let result = await _this.$ajax('get', `${news.getinfo}&keyword=${prodinfo.name || ''}&page=${1}`);
                    let productList = _this.productList;
                    if (result && result.length){
                        let list = result.splice(0, 3 - getinfoData.length);
                        _this.productList = productList.concat(list)
                    };
                }
        }
    },
    created () {
        let {id } = this.$route.params;
        this.UUID = window.localStorage.getItem('UUID');
        const _this = this;
        _this.id = id;
        this.httpRequest(id)
        // _this.$ajax('get', detail.prodinfo, {
        //     params: {id: id}
        // }).then(({prodatt, prodimage, prodinfo, mfbo, count}) => {
        //     _this.prodatt = prodatt || {};
        //     _this.prodimage = prodimage || [];
        //     _this.prodinfo = prodinfo || {};
        //     _this.phoneNum = (mfbo && mfbo.tel) || '';
        //     _this.applicationId = (mfbo && mfbo.id) || '';
        //     _this.pcid = 1;
        //     _this.count = count;
        //     _this.contrastNum(prodinfo.catId, id);
        //     _this.shareConfig.title = prodinfo.name
        // });
        _this.browserIdenty();
    },
    components: {
        nativeShare,
        pageTitle,
        consultation
    }
}
</script>

<style lang="css">
.proImgBox img{
    width: 100%;
}
</style>
