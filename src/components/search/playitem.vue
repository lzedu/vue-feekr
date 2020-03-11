<template>
  <div class="result-item">
      <div class="thumb-wrap">
          <img :src="item.avatar">
      </div>
      <div class="txt-left describe-wrap">
        <div class="info font-sm">
          <span>{{item.nickname}}</span> | 
          <span>{{item.scenicName}}</span>
        </div>
        <div>
          <div class="main-title font-md">{{item.title}}</div>
          <div class="desc font-sm">{{item.desc}}</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['item']
};
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
.result-item
  display flex
  margin 0.05rem
  padding 0.1rem 0
  $border(0 0 1px 0)
  .thumb-wrap
    width 10%
    flex-shrink 0
    img
      width 100%
      border-radius 50%
  .txt-left
    padding-left 0.1rem
    .font-sm
      font-size 0.12rem
      color #999
      span:nth-child(1)
        color #1abc9c
    .main-title
      margin 0.08rem 0
      color #2d2d2d
    .desc
      color #666
</style>