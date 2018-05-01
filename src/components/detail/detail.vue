<template lang="html">
    <div class="" style="padding-bottom: 1rem;">
        <Header title="产品综述" />

        <!-- tab切换 暂时没有 -->
        <!-- <div class="tabTitBox">
        	<ul>
            	<li class="cur">综述</li>
                <li>报价</li>
                <li>资讯</li>
                <li>问答</li>
            </ul>
        </div> -->

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
                    <span class="proPriceText">&yen;</span>3880.<span class="proPriceText">00</span>
                    <!-- c产品对比暂时不上 -->
                    <!-- <a href="#" class="contrast">对比</a><a href="#">产品说明书</a> -->
                </div>
            </div>
            <button class="shareBox">分享</button>
        </div>

        <!-- <div class="detailBox">
            <div class="detailTit">常固M20详细参数</div>
            <div class="parameterBoxCon">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <th rowspan="4" scope="row">主要参数</th>
                        <td>
                            <p class="pLeft">产品类型</p>
                            <p class="pRig">地脚螺栓</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="pLeft">产品类型</p>
                            <p class="pRig">地脚螺栓</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="pLeft">产品类型</p>
                            <p class="pRig">地脚螺栓</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="pLeft">产品类型</p>
                            <p class="pRig">地脚螺栓</p>
                        </td>
                    </tr>
                    <tr>
                        <th rowspan="4" scope="row">规格参数</th>
                        <td>
                            <p class="pLeft">产品类型</p>
                            <p class="pRig">地脚螺栓</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="pLeft">产品类型</p>
                            <p class="pRig">地脚螺栓</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="pLeft">产品类型</p>
                            <p class="pRig">地脚螺栓</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="pLeft">产品类型</p>
                            <p class="pRig">地脚螺栓</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">机械性能</th>
                        <td>
                            <p class="pLeft">产品类型</p>
                            <p class="pRig">地脚螺栓</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div> -->

        <div class='detailBox' v-if="Object.keys(prodatt).length">
            <div class='detailTit'>常固M20详细参数</div>
            <div class='parameterBoxCon'>
                    <div class='parameterListCon'
                        v-for="(item, key) in prodatt"
                        :key="key">
                        <div class='parameterLeft'><span>{{key}}</span></div>
                        <div class='parameterRig'>
                                <div class='parameterList'
                                    v-for="childItem in item"
                                    :key="childItem.id">
                                    <span class='pLeft'>{{childItem.attName}}</span>
                                    <span class='pRig'>{{childItem.attValue}}</span>
                                </div>
                        </div>
                    </div>
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

        <!-- 相关资讯 本期不做 -->
        <!-- <div class="detailBox">
            <div class="detailTit">相关资讯</div>
            <div class="newsListCon">
                <ul>
                    <li>
                        <p class="newsName">
                            <a href="#">【慧聪头条】奔驰召回产品 因前后桥螺栓损因前后桥螺栓损</a>
                        </p>
                        <p class="newsTime">2018-04-16  18:12:23</p>
                        <div class="newsImg">
                            <a href="#">
                                <img src="https://style.org.hc360.com/images/microMall/program/aimg2.jpg" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <p class="newsName">
                            <a href="#">【慧聪头条】奔驰召回产品 因前后桥螺栓损因前后桥螺栓损</a>
                        </p>
                        <p class="newsTime">2018-04-16  18:12:23</p>
                        <div class="newsImg">
                            <a href="#">
                                <img src="https://style.org.hc360.com/images/microMall/program/aimg2.jpg" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <p class="newsName">
                            <a href="#">【慧聪头条】奔驰召回产品 因前后桥螺栓损因前后桥螺栓损</a>
                        </p>
                        <p class="newsTime">2018-04-16  18:12:23</p>
                        <div class="newsImg">
                            <a href="#">
                                <img src="https://style.org.hc360.com/images/microMall/program/aimg2.jpg">
                            </a>
                        </div>
                    </li>
                    <li class="noImg">
                        <p class="newsName">
                            <a href="#">【慧聪头条】奔驰召回产品 因前后桥螺栓损因前后桥螺栓损</a>
                        </p>
                        <p class="newsTime">2018-04-16  18:12:23</p>
                    </li>
                </ul>
                <div class="moreBtn">更多资讯</div>
            </div>
        </div> -->

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
            <a href="javascript:;" class="botBtn2" style="width:70%;">申请分销</a>
        </div>
        <!-- <a class="fixedBtnRig">5</a> -->
    </div>
</template>

<script>
import { detail } from '../../common/config.js';
export default {
    data () {
        return {
            activeIndex: 0,
            prodatt_arr: [],
            prodatt: {},
            prodimage: [],
            prodinfo: {
                price: 0
            },
            phoneNum: '010-xxxxxxxx',
            applicationId: ''
        }
    },
    methods: {
        handleChange (index) {
            this.activeIndex = index;
            console.log(options)
        }
    },
    created () {
        const _this = this;
        _this.$ajax('get', detail.prodinfo, {
            params: {id: 1}
        }).then(result => {
            _this.prodatt_arr = Object.keys(result.prodatt);
            _this.prodatt = result.prodatt;
            _this.prodimage = result.prodimage;
            _this.prodinfo = result.prodinfo;
            _this.phoneNum = result.mfbo.tel;
            _this.applicationId = result.mfbo.id;
            _this.pcid = 1;
        });
    }
}
</script>

<style lang="css">
.proImgBox img{
    width: 100%;
}
</style>
