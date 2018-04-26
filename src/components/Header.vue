<template lang="html">
    <div>
        <header class="mHeaderBox">
            <a href="javascript:history.go(-1);" class="arrowLeft"></a>
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
        }
    }
</script>
