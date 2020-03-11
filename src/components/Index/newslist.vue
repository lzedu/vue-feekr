<template>
  <div class="newslist-wrap">
    <newsitem 
      v-for="item in list"
      :key="item.id"
      :item="item"
      @click.native="handleClick(item.id)"
    >

    </newsitem>
  </div>
</template>

<script>
import Vue from 'vue'
import { get } from 'utils/http'
import newsitem from './newsItem.vue'
export default {
    data(){
      return{
        list:[]
      }
    },
    components:{
        newsitem
    },
    mounted:async function(){
        let result = await get({
            url: '/api/news/lists?page=1&count=3'
        })
        await this.$nextTick()
        this.list = result.result.list
    },
    methods:{
      handleClick(id){
        // this.$store.dispatch('detail/saveDetail',{id})
        this.$router.push({
          name:'article',
          params:{
            id
          }
        })
      }
    }
}
</script>

<style lang="stylus" scoped>
  .newslist-wrap
    padding 0.14rem 0.11rem
</style>