<template>
      <div :class="className">
        <div class="common-hot-wrap">
          <img :src="item.cover || item.productCover+'!200X200'" alt="">
          <p class="common-hot-title">{{item.productName}}</p>
          <p class="common-hot-price">￥<span class="product-price-num">{{item.currentPrice || item.productPrice}}</span>起 /<span class="product-unitnum">{{item.unitCount || item.productUnitCount}}</span> <span class="product-unit">{{item.unit || item.productUnit}}</span></p>
        </div>
    </div>
</template>

<script>
export default {
  props:['item','type'],
  data(){
    return {
      className:this.type ==='goods'?'common-hot-item-wrap':'guess-item-wrap'
    }
  }

}
</script>

<style lang="stylus" scoped>
  .guess-item-wrap
    padding-bottom 0.175rem
    width 48%
    img 
      height 1.0875rem
  .common-hot-item-wrap
      width 32%
  .common-hot-wrap
    width 100%
    img 
      width 100%
    .common-hot-title
      padding: 0 .03rem;
      margin-top: 0.06rem;
      text-overflow: ellipsis;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      font-size 0.12rem
      color #2d2d2d
    .common-hot-price
      color rgb(26, 188, 156)
      font-size 0.11rem
      text-align center
      .product-price-num
        color rgb(26, 188, 156)
        font-size 0.13rem
        font-weight 700
        
</style>