<template>
  <div class="sel-wrap">
      <div class="list-item-wrap">
        <div class="list-item-title"> {{subitem.title}}</div>
        <div class="list-item-content">
            <img :src="subitem.cover+'!600X400'" alt="">
            <div class="list-item-text">
                <p class="list-item-title">{{subitem.desc}}</p>
                <p class="list-item-addr"><span class="list-item-add1">{{subitem.tag[0]}} </span> <span class="list-item-add"> {{subitem.tag[1]}}</span></p>
            </div>
        </div>

      </div>
  </div>
</template>

<script>
export default {
    props:['subitem']
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
  .sel-wrap
    $border(0 0 1px 0);
    padding 0.2rem 0.11rem 0.25rem
    .list-item-wrap
      display flex
      flex-direction column
      .list-item-title
        font-size 0.16rem
        color #2d2d2d
        margin-bottom 0.15rem
      .list-item-content
        display flex
        img
          width 1.36rem
        .list-item-text
          margin-left 0.15rem
          .list-item-title
            font-size 0.12rem
            color #2d2d2d
          .list-item-addr
            font-size 0.1rem
            color #999
            margin-top 0.08rem
            
      
    
</style>