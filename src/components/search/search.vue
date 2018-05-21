<template lang="html">
    <div class="">
        <Header title="搜索"/>
        <div class="topSearch2">
            <div class="searchCon2">
                <input
                    placeholder-class="phcolor"
                    type="text"
                    placeholder="请输入商品关键字"
                    :autofocus="true"
                    v-model="key_word" @keyup.enter="eventEnter(key_word)"/>
            </div>
            <button type="button" class="cancelBtn" @click="$router.go(-1);">取消</button>
        </div>

        <div class="seaHistory" v-if="histor_word.length">
            <h3>历史搜索</h3>
            <div class="seaHistoryCon">
                <router-link
                    v-for="historItem in histor_word"
                    :key="historItem"
                    :to="{ name: 'search-list', params: {key: historItem} }">{{historItem}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            key_word: '',
            histor_word: []
        }
    },
    created () {
        let histor_word = JSON.parse(localStorage.getItem('histor_word'));
        this.histor_word = histor_word || [];
    },
    methods: {
        eventEnter (val) {
            if (val !== '') {
                let histor_word = localStorage.getItem('histor_word');
                if (histor_word === null){
                    histor_word = [val];
                } else {
                    histor_word = JSON.parse(histor_word);
                    histor_word.unshift(val);
                    if (histor_word.length >= 10) {
                        histor_word.length = 10;
                    };
                    histor_word = [...new Set(histor_word)];
                };
                localStorage.setItem('histor_word', JSON.stringify(histor_word));
                this.$router.push({
                    name: 'search-list',
                    params: {
                        key: val
                    }
                });
            } else {
                this.$toast('请输入商品关键字');
            };
        }
    }
}
</script>
