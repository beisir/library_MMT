<template>
<div class="demo-infinite-container">
    <div>
        <mt-popup
            v-model="isShare"
            :modal="true"
            pop-transition="popup-fade"
            closeOnClickModal="true"
            position="bottom">
            <div class="box">

            </div>
        </mt-popup>
        <button type="button" name="button" @click="clickAFn">button</button>
    </div>
</div>
</template>

<script>
export default {
  data () {
    const list = []
    for (let i = 0; i < 10; i++) {
      list.push('item' + (i + 1))
    }
    return {
    isShare: false,
      list,
      num: 10,
      loading: false,
      scroller: null
    }
  },
  mounted () {
    this.scroller = this.$el
  },
  methods: {
      clickAFn (){
          this.isShare = true;
      },
    loadMore () {
      this.loading = true
      setTimeout(() => {
        for (let i = this.num; i < this.num + 10; i++) {
          this.list.push('item' + (i + 1))
        }
        this.num += 10
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="css">
.mint-popup {
    width: 100%;
}
.v-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    background: #000;
}
.mint-popup .box{
    height: 500px;
    width: 100%;
    background-color: #ccc;
}
button {
    position: fixed;
    bottom: 0;
}
</style>
