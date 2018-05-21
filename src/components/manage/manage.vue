<template lang="html">
    <div class="">
        <div class="signBox">
            <div class='signLogo'>
                <a href="#"><img class="logoImg" src='https://style.org.hc360.com/images/microMall/program/mGrayLogo.png'></a>
            </div>
            <h3 class='signName'>{{usersession.corname}}</h3>
            <p class='signClass' @click="aniStyle=true">{{shopName}}</p>
        </div>
        <div class="serviceBox">
        	<ul>
            	<router-link
                    v-for="(item, index) in manage_arr"
                    :to="{ name: item.url, params: {username: usersession.username}}"
                    :key="item.text"
                    tag="li">
                    <em :class="item.icon"></em>
                    <p class="stxt">{{item.text}}</p>
                </router-link>
            </ul>
        </div>
        <div class="signClassAlert"
            v-if="aniStyle"
            @click="aniStyle=false">
            <div :class="['signClassCon', aniStyle ? 'slideup': 'slidedown']">
                <ul>
                    <li v-for="(item, index) in shopkeeper" @click.stop="selectShop(index)">{{item}}</li>
                </ul>
            <button type="button" class="signClassBtn">取消</button>
            </div>
        </div>

    </div>
</template>

<script>
import { detail, manage } from '../../common/config.js';
export default {
    data () {
        return {
            usersession: {},
            manage_arr: [
                {
                    icon: 'icon1',
                    text: '分销申请记录',
                    url: 'distribution'
                },/*{
                    icon: 'icon2',
                    text: '我的提问',
                    url: ''
                },{
                    icon: 'icon3',
                    text: '我的收藏',
                    url: '/pages/collection/collection'
                },*/{
                    icon: 'icon4',
                    text: '常见问题',
                    url: 'problem'
                },{
                    icon: 'icon5',
                    text: '关于我们',
                    url: 'about-us'
                }
            ],
            aniStyle: false,
            shopName: '实体店店主',
            shopkeeper: ['实体店店主', '微商店主', '国内电商', '跨境电商', '贸易公司', '生产加工企业', '其他']
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.$ajax('get', detail.ssohelper).then(res => {
                if (res.islogin === '0') {
                    window.location.href = 'https://mlogin.hc360.com/login.html?flag=m&ReturnURL=' + window.location.href;
                } else {
                    vm.usersession = res.usersession;
                    vm.getShopkeeper(vm.usersession.username);
                }
            });
        });
    },

    methods: {
        getShopkeeper (username) {
            const _this = this;
            _this.$ajax('get', manage.getUser, {
                params: {
                    openid: username
                }
            }).then(result => {
                if (String(result) !== '') {
                    _this.shopName = _this.shopkeeper[result]
                };
            });
        },
        selectShop (index) {
            let shopkeeper = this.shopkeeper;
            const _this = this,
                username = this.usersession.username;
            this.$ajax('get', manage.addUser, {
                params: {
                    openid: username,
                    ui: index
                }
            }).then(result => {
                if (result){
                    _this.$toast('修改成功');
                } else {
                    _this.$toast('修改失败');
                };
                _this.shopName = shopkeeper[index];
                _this.aniStyle = false;
            });
        }
    }
}
</script>

<style lang="css">
    .slidedown {
        animation: slidedown 0.3s linear;
        animation-fill-mode: forwards;
    }
    .slideup {
        animation: slideup 0.3s linear;
        animation-fill-mode: forwards;
    }

    @keyframes slidedown {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(100%);
        }
    }

    @keyframes slideup {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(0);
        }
    }
</style>
