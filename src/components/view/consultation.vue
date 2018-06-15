<template lang="html">
    <ul>
        <li :class="products.picpath ? '': 'noImg'"
            v-for="(products, index) in productList">
            <p class="newsName">
                <a :href="products.infourl">{{products.infotitle}}</a>
            </p>
            <p class="newsTime">{{products.publictime}}</p>
            <div class="newsImg" v-if="products.picpath">
                <a :href="products.infourl">
                    <img :src="products.picpath" />
                </a>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        productList: {
            type: Array,
            default: []
        }
    }
}
</script>
