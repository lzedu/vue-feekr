<template>
  <div class="theme-container guide-theme-list-container theme-mode detail-container">
    <headerTitle title="主题推荐"></headerTitle>
      <themeItem
        v-for="item in list"
        :key="item.id"
        :item="item"
      ></themeItem>
      <moreBtn title="更多主题推荐"></moreBtn>
  </div>
</template>

<script>
import { get } from 'utils/http'
import headerTitle from 'components/headerTitle.vue'
import moreBtn from 'components/moreBtn.vue'
import themeItem from 'components/citydetail/themeItem.vue'
export default {
    components:{
        themeItem,
        headerTitle,
        moreBtn
    },
    data(){
        return {
            id:this.$route.params.id,
            list:[]
        }
    },
    async mounted(){
        let result = await get({
            url:`/api/guide/themelist?id=${this.id}&count=3&recommend=1`
        })
        await this.$nextTick()
        // console.log(result)
        this.list = result.result.list
    }
}
</script>

<style lang="stylus" scoped>
  .theme-container
    background #fff
    padding 0 0.1rem
    margin-top 0.1rem
</style>