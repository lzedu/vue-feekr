<template>
  <div class="item-container clearfix body-space">
      <img :src="item.cover"/>
      <p class="item-title txt-center city-title font-md">{{item.cityName}}</p>
      <p class="item-desc txt-center city-desc font-sm">{{item.desc}}</p>
  </div>
</template>

<script>
export default {
  props:['item']
};
</script>

<style lang="stylus" scoped>
.item-container
  padding 0 0 0.15rem
  width 49%
  img
    width 100%
    max-height: 0.9rem;
  .item-title
    color #2d2d2d
    font-size 0.14rem
    text-align center
    padding-top 0.05rem
  .item-desc
    font-size 0.12rem
    text-align center
    color #666
</style>