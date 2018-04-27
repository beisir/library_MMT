<template lang="html">
    <div class="">
        <Header title="搜索"/>
        <div class="topSearch2">
            <div class="searchCon2">
                <input
                    placeholder-class="phcolor"
                    type="text"
                    placeholder="请输入商品关键字"
                    v-model="key_word" @keyup.enter="eventEnter(key_word)"/>
            </div>
            <button type="button" class="cancelBtn">取消</button>
        </div>

        <div class="seaHistory">
            <h3>历史搜索</h3>
                <div class="seaHistoryCon">
                <a href="#">螺栓</a>
                <a href="#">螺母</a>
                <a href="#">螺栓</a>
                <a href="#">螺母</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            key_word: ''
        }
    },
    methods: {
        eventEnter (key_word) {
            if (key_word !== '') {
                this.$router.push({
                    name: 'search-list',
                    params: {
                        key: key_word
                    }
                });
            } else {
                this.$toast('请输入商品关键字');
            };
        }
    }
}
</script>
