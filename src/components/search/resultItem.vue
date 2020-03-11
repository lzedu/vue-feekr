<template>
  <div>
      <div class="result-item-wrap">
          <img :src="item.cover" alt="">
          <div class="result-item-content">
              <p>{{item.title}}</p>
              <p v-if="typeof item.recommendCount !== 'undefined'" 
              class="sub-title"
              >{{item.recommendCount}}个推荐</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['item'],
    data(){
        return {
            showRecom:typeof this.item.recommendCount !== 'undefined'
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
    .result-item-wrap
      $border(0 0 1px 0)
      margin-top 0.11rem
      padding-bottom 0.11rem
      display flex
      img
        width 0.72rem
      .result-item-content
        align-self center
        margin-left 0.24rem
        font-size 0.14rem
        color 2d2d2d
        p:first-child
          margin-bottom 0.08rem
        .sub-title
            font-size 0.12rem
            color #999

</style>