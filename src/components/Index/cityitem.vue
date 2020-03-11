<template>
  <div class="listitem-wrap">
      <div class="listitem-top">
          <img :src="item.cover+'!621X327'" alt="">
          <p>{{item.cityName}}</p>
      </div>
      <div class="listitem-fxb">{{item.fxb}}位当地飞小编推荐</div>
  </div>
</template>

<script>
export default {
    props:['item']

}
</script>

<style lang="stylus" scoped>
.listitem-wrap
  padding 0.1rem 0
  width 49%
  .listitem-top
    position relative
    width 100%;
    img
      width 100%
    p
      position absolute
      top 0
      width 100%
      height 100%
      background rgba(0,0,0,0.5)
      color #fff
      font-size 0.16rem
      text-align center
      line-height 1rem
  .listitem-fxb
    font-size 0.12rem
    text-align center
</style>