<template lang="html">
    <div class="">
        <mt-popup
            v-model="isShare"
            pop-transition="popup-fade"
            :closeOnClickModal="false"
            position="bottom">
            <a class="closeBtn2" @click="closeShare">x</a>
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
        },
        config: {
            type: Object
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
.mint-popup{
    width: 100%;
}
#nativeShare .list {
    width: 100% !important;
    height: auto !important;
    padding: 0.3rem 0;
    position: fixed;
    bottom: 0 !important;
    left: 0;
    z-index: 2004;
    background: #fff;
    margin: 0 auto;
    text-align: center;
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
</style>
