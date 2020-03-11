<template>
  <div class="product-item-wrap" :class="type">
      <div class="sales-in-wrap">
        <img :src="(type==='cityShop')? item.cover+'!640X360' : item.productCover+'!200X200'" alt="">
        <p class="product-title">{{(type==='cityShop')?item.title:item.productName}}</p>
        <p class="product-addr"><span class="product-addr-country">{{(type==='cityShop')?item.area:item.productArea}}</span><span>{{(type==='cityShop')? ' - '+item.site :item.productCity}}</span></p>
        <p class="product-price">￥<span class="product-price-num">{{(type==='cityShop')?item.price:item.productPrice}}</span>起</p>
      </div>
  </div>
</template>

<script>
export default {
  props:['item','type']
}
</script>

<style lang="stylus" scoped>
  .product-item-wrap
    width 32%
    .sales-in-wrap
      width 100%
      img 
        width 100%
      .product-title
        padding: 0 .03rem;
        margin-top: 0.1rem;
        text-overflow: ellipsis;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        font-size 0.12rem
        color 2d2d2d
        margin-top 0.1rem
        padding 0 0.03rem
      .product-addr
        color #666
        font-size 0.1rem
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        width 100%
        text-align center
      .product-price
        color #000
        font-size 0.12rem
        text-align center
        .product-price-num
          font-size 0.14rem
  .cityShop
    width 49%
    margin-bottom 0.1rem
</style>