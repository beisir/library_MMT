<template lang="html">
    <div class="tabTitBox">
        <ul>
            <router-link
                v-for="item in titleList"
                :key="item.key"
                :class="$route.name === item.key?'cur':''"
                :to="{
                    name: item.key,
                    params: {
                        id: id,
                        keyword: keyword
                    },
                    query: {
                        keyword: keyword
                    }
                }"
                tag="li"
            >{{item.text}}</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        keyword: {
            default: ''
        },
        id: {
            default: ''
        }
    },
    data (){
        return {
            titleList: [
                {
                    key: 'detail',
                    text: '综述'
                },
                // {
                //     text: '报价'
                // },
                {
                    key: 'news',
                    text: '评测'
                }
                // ,
                // {
                //     text: '问答'
                // }
            ]
        }
    }
}
</script>
