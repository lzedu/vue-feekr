<template>
  <div class="item-wrap">
      <img :src="item.cover" alt="">
      <p>{{item.name}}</p>
  </div>
</template>

<script>
export default {
    props:['item']
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
.item-wrap
  width 100%
  margin-top 0.225rem
  $border(0 0 1px 0)
  img 
    width 100%
    height 141.2px
  p
    font-size 0.13rem
    padding 0.09rem 0 0.19rem

</style>