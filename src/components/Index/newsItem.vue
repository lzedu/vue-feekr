<template>
  <div>
      <div class="news-item-wrap">
          <img :src="item.cover+'!300X300'" alt="">
          <div class="news-item-content">
              <p>{{item.title}}</p>
              <p><span>{{item.viewCount}}</span>人阅读 / <span>{{item.time}}</span></p>
          </div>
      </div>
  </div>
</template>

<script>
import img from 'assets/news1.jpg'
export default {
  props:['item'],
    data(){
        return {
            img
        }
    }

}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
    .news-item-wrap
      $border(0 0 1px 0)
      margin-top 0.11rem
      padding-bottom 0.11rem
      display flex
      img
        width 0.72rem
      .news-item-content
        margin-left 0.24rem
        font-size 0.14rem
        color 2d2d2d
        text-overflow ellipsis
        p:first-child
          margin-bottom 0.08rem
        p:nth-child(2)
          font-size 0.1rem
    

</style>