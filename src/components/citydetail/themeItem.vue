<template>
  <div class="theme-item theme-item-city">
      <div class="img-wrap">
        <img :src="item.cover"/>
      </div>
    <div class="theme-desc">
      <div class="content">{{item.title}}</div>

      <div class="style-tag">
        <span class="series font-md regular-font">{{item.recommendCount}}大推荐</span>
      </div>
    </div>
    <div class="cover"></div>
  </div>
</template>

<script>
export default {
    props:['item']
};
</script>

<style lang="stylus" scoped>
    .theme-item
      width 100%
      margin-top 0.15rem
      position relative
      display flex
      justify-content center
      .img-wrap
        width 100%
        max-height 1.49453rem
        overflow hidden
        img
          width 100%
          margin-top -0.4rem
      .theme-desc
        z-index 2
        position absolute
        align-self center
        text-align center
        color #fff
        width 80%
        .content
          font-size 0.16rem
          line-height 0.24rem
          font-weight bold
        .style-tag
          margin-top 0.1rem
          font-size 0.14rem
          .series
            padding 0.05rem 0
      .cover
        height 100%
        width 100%
        position absolute
        background rgba(0,0,0,0.2)
</style>