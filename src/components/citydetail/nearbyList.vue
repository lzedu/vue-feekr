<template>
  <div class="nearby-city-container clearfix detail-container">
    <headerTitle title="周边城市"></headerTitle>
    <div class="list-wrap flex-wrap">
      <nearbyItem
        v-for="item in list"
        :key="item.id"
        :item="item"
        type="cityNearby"
        ></nearbyItem>
    </div>
  </div>
</template>

<script>
import headerTitle from 'components/headerTitle.vue'
import moreBtn from 'components/moreBtn.vue'
import nearbyItem from 'components/strategy/areaitem.vue'
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
        nearbyItem
    },
    async mounted(){
        let result = await get({
            url:`/api/guide/nearby?cityId=${this.id}`
        })
        await this.$nextTick()
        this.list = result.result.list
    }
};
</script>

<style lang="stylus" scoped>
    .nearby-city-container
      background #fff
      padding 0 0.1rem
      margin 0.1rem 0 0
      .list-wrap
        display flex
        justify-content space-between
</style>