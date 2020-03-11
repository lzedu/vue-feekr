<template>
  <div>
    <searchbox></searchbox>
    <section class="season-recommend-container">
      <div class="season-recommend"> 
        <header class="header-title-wrap txt-center font-lg regular-font"> 
          <span>- </span> 
          <span class="section-title">当季小众推荐</span> 
          <span> -</span> 
        </header>  
      </div>
      <seasonlist></seasonlist>
    </section>
    <arealist
      v-for="list in arealist"
      :key="list.area"
      :list="list"
      :layout="list.layout"
    ></arealist>
  </div>
</template>

<script>
import searchbox from 'components/searchdiv.vue'
import seasonlist from 'components/strategy/seasonlist.vue'
import arealist from 'components/strategy/arealist.vue'
import { get } from 'utils/http'
export default {
  data(){
    return{
      arealist:[]
    }
  },
  components:{
    seasonlist,
    arealist,
    searchbox
  },
  async mounted(){
    let result = await get({
      url:'/api/guide/citylist'
    })
    await this.$nextTick()
    this.arealist = result.result.list
  }
}
</script>

<style lang="stylus" scoped>
.season-recommend-container
  background #fff
  margin-top 0.11rem
  font-size 0.16rem
  color #2d2d2d
  .header-title-wrap
    text-align center
    font-size 0.16rem
    padding 0.15rem 0


</style>