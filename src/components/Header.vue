<template lang="html">
    <div>
        <header class="mHeaderBox">
            <a @click="goBackPage" class="arrowLeft"></a>
            <h3>{{title}}</h3>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            title: {
                default: '产品库',
                type: String
            }
        },
        methods: {
            goBackPage () {
                this.$router.isBack = false;
                this.$router.go(-1);
            }
        }
    };
</script>
