<template>
<!-- <van-skeleton
  title
  avatar
  :row="10"
  :loading = 'loading'
> -->
  <div class="market-item">
    <img
      class="market-cover"
      :src="item.productCover"
    />
    <h5 class="market-desc font-md">{{item.productDesc}}</h5>
    <p class="market-name">{{item.productName}}</p>
    <span class="font-md market-label">¥{{item.productPrice}}</span>
  </div>
  <!-- </van-skeleton> -->
</template>

<script>
import Vue from 'vue';
import { Skeleton } from 'vant';

Vue.use(Skeleton);
export default {
    props:['item'],
    data(){
        return {
            loading:true
        }
    },
    async mounted(){
        await this.$nextTick()
        this.loading = false

    }
};
</script>

<style lang="stylus" scoped>
.market-item
  margin-bottom 0.1rem
  border 1px solid #e9e9e9
  overflow hidden
  background #fff
  position relative
  img
    width 100%
    max-height 1.99688rem
  .market-desc
    margin-top 0.25rem
    font-size 0.14rem
    font-weight normal
    text-align center
  .market-name
    margin 0.12rem 0 0.25rem
    font-size 0.1rem
    color #666
    text-align center
  .market-label
    font-size 0.14rem
    position absolute
    color #ffffff
    background #1abc9c
    padding 0 0.11rem
    top 0.16rem
    line-height 0.34rem
</style>