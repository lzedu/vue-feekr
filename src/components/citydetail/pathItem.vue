<template>
  <div class="theme-item theme-item-path" :class="{thenmemargin:index}">
    <div class="thumb-wrap clearfix">
      <img 
        class="pull-left"
        v-for="img in item.cover"
        :key="img"
        :src="img+'!200X200'"
         />
    </div>
    <div class="content">
      <span class="regular-font">{{item.title}}</span>
      <p>路线包括：<span 
      v-for="(name,index) in item.scenic"
      :key="name+index"
      ><span
          v-if="index">－</span>{{name}}</span></p>
    </div>
  </div>
</template>

<script>
export default {
    props:['item','index']
};
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
.thenmemargin
  margin-top 0.2rem
.theme-item
  padding-bottom 0.2rem
  $border(0 0 1px 0)
  .thumb-wrap
    width 100%;
    display flex
    justify-content space-between
    margin-bottom 0.1rem
    img 
      width 32%
      overflow hidden
  .content
    font-size 0.14rem
    span 
      line-height 0.21rem
    p
      font-size 0.12rem
      color #333
      margin-top 0.1rem
</style>