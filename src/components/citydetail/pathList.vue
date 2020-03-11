<template>
  <div class="path-container theme-mode guide-path-list-wrap detail-container">
    <headerTitle title="路线推荐"></headerTitle>
    <pathItem
      v-for="(item,index) in list"
      :key="item.id"
      :item="item"
      :index="index"
    ></pathItem>
    <moreBtn title="更多路线"></moreBtn>
  </div>
</template>

<script>
import headerTitle from 'components/headerTitle.vue'
import moreBtn from 'components/moreBtn.vue'
import pathItem from 'components/citydetail/pathItem.vue'
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
        pathItem
    },
    async mounted(){
        let result = await get({
            url:`/api/guide/pathlist?id=${this.id}&count=2&recommend=1`
        })
        await this.$nextTick()
        this.list = result.result.list
    }
};
</script>

<style lang="stylus" scoped>
.path-container
  padding 0 0.1rem
  background #fff
  margin-top 0.1rem
</style>