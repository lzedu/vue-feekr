<template>
  <div class="guide-wrap guide-detail-wrap">
    <cityheader></cityheader>
    <cityNav></cityNav>
    <themelist></themelist>
    <pathList></pathList>
    <articleList></articleList>
    <shopList></shopList>
    <nearbyList></nearbyList>
  </div>
</template>

<script>
import cityheader from 'components/citydetail/cityheader.vue'
import cityNav from 'components/citydetail/cityNav.vue' 
import themelist from 'components/citydetail/themelist.vue'
import pathList from 'components/citydetail/pathList.vue'
import articleList from 'components/citydetail/articleList.vue'
import shopList from 'components/citydetail/shopList.vue'
import nearbyList from 'components/citydetail/nearbyList.vue'
export default {
    components:{
        cityheader,
        cityNav,
        themelist,
        pathList,
        articleList,
        shopList,
        nearbyList
    }
};
</script>

<style lang="stylus" scoped>

</style>