<template>
  <section class="area-list">  
    <div>
        <div class="item-container body-space clearfix"> 
            <header class="header-title-wrap txt-center font-lg"> 
            <span class="section-title regular-font">{{list.area}}</span> 
            <div class="sub-title txt-center font-sm"> {{list.desc}} </div> 
            </header>    
        </div> 
        <div class="arealist-wrap">
            <areaitem
                v-for="item in list.city"
                :key="item.id"
                :item="item"
                :layout="layout"
                @click.native="handleClick(item.id)"
            ></areaitem>
        </div>
    </div>
  </section>
</template>

<script>
import areaitem from 'components/strategy/areaitem.vue'
export default {
    props:['list','layout'],
    components:{
        areaitem
    },
    methods:{
      handleClick(id){
        this.$router.push({
          name:'citydetail',
          params:{
            id
          }
        })
      }
    }
}
</script>

<style lang="stylus" scoped>
.area-list
  padding 0.1rem
  background #fff
  margin-top 0.1rem
.header-title-wrap
  padding 0.15rem 0
  text-align center
  .section-title
    line-height 0.18rem
    font-size 0.16rem
    color #2d2d2d
  .sub-title
    line-height 0.18rem
    font-size 0.12rem
    color #666
.arealist-wrap
  width 100%
  display flex
  flex-wrap wrap
  justify-content space-around


</style>