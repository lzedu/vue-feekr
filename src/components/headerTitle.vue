<template>
  <header class="header-title-wrap txt-center font-lg regular-font">
    <span>- </span>
    <span class="section-title">{{title}}</span>
    <span> -</span>
  </header>
</template>

<script>
export default {
    props:['title']
}
</script>

<style lang="stylus" scoped>
    .header-title-wrap
      width 100%
      font-size 0.16rem
      color #2d2d2d
      line-height 0.288rem
      padding 0.15rem 0
      text-align center
</style>