<template>
  <div class="article-container guide-article-list-wrap detail-container">
    <headerTitle title="私藏资讯"></headerTitle>
    <articleItem
      v-for="(item,index) in list"
      :key="item.id"
      :item="item"
      :index="index"
      @click.native="handleClick(item.id)"
    ></articleItem>
    <moreBtn title="更多私藏资讯"></moreBtn>
  </div>
</template>

<script>
import headerTitle from 'components/headerTitle.vue'
import moreBtn from 'components/moreBtn.vue'
import articleItem from 'components/citydetail/articleItem.vue'
import { get } from 'utils/http'
export default {
    data(){
        return {
            id:this.$route.params.id,
            list:[]
        }
    },
    components:{
        headerTitle,
        moreBtn,
        articleItem
    },
    async mounted(){
        let result = await get({
            url:`/api/guide/articlelist?id=${this.id}&count=2&recommend=1`
        })
        await this.$nextTick()
        this.list = result.result.list
    },
    methods:{
      handleClick(id){
        this.$router.push({
          name:'article',
          params:{
            id
          }
        })
      }
    }
};
</script>

<style lang="stylus" scoped>
  .article-container
    background #fff
    padding 0 .1rem
    margin-top .1rem
</style>