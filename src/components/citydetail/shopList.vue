<template>
  <div class="exp-container detail-container clearfix" v-if="list.length>0">
    <headerTitle title="玩乐度假"></headerTitle>
    <div class="list-wrap">
      <shopItem
        v-for="item in list"
        :key="item.productId"
        :item="item"
        type="cityShop"
      ></shopItem>
    </div>
    <moreBtn title="更多玩乐度假"></moreBtn>
  </div>
</template>

<script>
import headerTitle from 'components/headerTitle.vue'
import moreBtn from 'components/moreBtn.vue'
import shopItem from 'components/Index/productitem.vue'
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
        shopItem
    },
    async mounted(){
        let result = await get({
            url:`/api/guide/shoplist?id=${this.id}&count=2&recommend=1`
        })
        await this.$nextTick()
        this.list = result.result.list
    }
};
</script>

<style lang="stylus" scoped>
    .exp-container
      background #ffffff
      padding 0 0.1rem
      margin-top 0.1rem
      .list-wrap
        display flex
        flex-wrap wrap
        justify-content space-between
</style>