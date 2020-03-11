<template>
    <div class="pull-left"> 
        <img :src="item.cover+'!412X310'">
        <p class="item-title txt-center city-title font-md" :class="className">{{item.name}}</p> 
        <p class="city-distance" v-if="type">距离<span> {{item.distance}} </span>公里</p>
    </div>
</template>

<script>
export default {
  props:['item','layout','type'],
  data(){
    return {
      className:''
    }
  },
  mounted(){
    // console.log(this.type)
    if(this.layout == 6){
      this.className = 'others'
    }
  }
}
</script>

<style lang="stylus" scoped>
.pull-left
  width 32%
  margin-bottom 0.15rem
  position relative
  img 
    width 100%
    max-height 0.9rem
  p
    text-align center
    font-size 0.14rem
    color #2d2d2d
    padding-top 0.05rem
  .others
    position absolute
    top 0
    width 100%
    height 100%
    background rgba(0,0,0,0.3)
    color #fff
    font-size 0.16rem
    text-align center
    line-height 0.85rem
  .city-distance
    text-align center
    margin-top 0.03rem
    font-size 0.12rem
    span
      font-weight 700
</style>