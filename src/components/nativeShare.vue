<template lang="html">
    <div class="">
        <mt-popup
            v-model="isShare"
            :modal="false"
            pop-transition="popup-fade"
            :closeOnClickModal="true"
            position="bottom">
            <div class="shareBox2"><a class="closeBtn2" @click="closeShare">x</a></div>
            <div id="nativeShare"></div>
        </mt-popup>


    </div>
</template>

<script>
import '../common/nativeShare/nativeShare.css';
import nativeShare from '../common/nativeShare/nativeShare.js';
export default {
    props: {
        isShare: {
            type: Boolean
        }
    },
    data () {
        return {
            config : {
                url: "https://m.hc360.com/b2b/",
                title: 'hello word'
            }
        }
    },
    mounted () {
        new nativeShare('nativeShare', this.config);
    },
    methods: {
        closeShare () {
            this.$emit('closeShare', false);
        }

    }
}
</script>

<style lang="css">
.mint-popup {
    transition: .2s ease-out;
}
.mint-popup-bottom {
    width: 100% !important;
    height: 100% !important;
    background: none !important;
    bottom: 0 !important;
    top: auto;
    right: auto;
    bottom: 0;
    left: 50%;
}
#nativeShare .list {
    width: 90%;
    margin: 0 auto;
    text-align: center;
}
#nativeShare .list {
    position: fixed;
    height: auto !important;
    bottom: 0 !important;
    width: 100% !important;
    background: #fff;
    left: 0;
    padding: 0.3rem 0;
    z-index: 2004;
}
.closeBtn2 {
    color: #ddd;
    font-size: 0.35rem;
    position: absolute;
    bottom: 4rem;
    right: 0.3rem;
    line-height: 0.4rem;
    height: 0.5rem;
    width: 0.5rem;
    text-align: center;
    border: 0.03rem solid #ddd;
    border-radius: 50%;
    z-index: 2005;
}
.shareBox2{
    display:block;
    position:fixed;
    top:0;
    height:100%;
    left:0;
    width:100%;
    background: rgba(0,0,0,0.53);
    z-index:2001;
}
</style>
