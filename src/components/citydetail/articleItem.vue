<template>
   <div
      class="item" :class="{itemmargin:index}"
    >
      <img :src="item.cover+'!600X400'"/>
      <div class="title regular-font txt-center">{{item.title}}</div>
    </div>
</template>

<script>
export default {
    props:['item','index']
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
    .itemmargin
      margin-top 0.15rem
    .item
      $border(0 0 1px 0)
      width 100%
      img
        width 100%
        max-height 2.35522rem
      .title
        padding 0.1rem
        color #333
        line-height 2
        text-align center
</style>