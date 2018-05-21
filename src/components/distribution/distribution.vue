<template lang="html">
    <div class="">
        <Header title="分销申请记录" />
        <div class="distributionBox">
        	<ul>
            	<li v-for="(item, index) in library_arr">
                    <div class="disListTop">
                        <div class="disImg">
                            <a href="javascript:;">
                                <img :src="item.pic">
                            </a>
                        </div>
                        <p class="proName"><a href="javascript:;">{{item.title}}</a></p>
                    </div>
                    <p class="disListBot">
                        <span class="disBotLeft">申请日期：{{item.date}}</span>
                        <span class="disBotRig">状态：已提交给厂商</span>
                    </p>
                </li>
            </ul>
        </div>
        <div class="more">
            <div class="lineBot">
                <p class="textBot">没有更多了</p>
            </div>
        </div>
    </div>
</template>

<script>
import {distribution} from '../../common/config.js';
export default {
    data () {
        return {
            library_arr: []
        }
    },
    created () {
        const {username} = this.$route.params;
        const _this = this;
        this.$ajax('get', distribution.getByOpenid, {
            params: {
                page: 1,
                openid: username
            }
        }).then(result => {
            if (result && result.length){
                _this.library_arr = result;
            };
        });
    }
}
</script>
