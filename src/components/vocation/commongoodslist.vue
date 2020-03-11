<template>
  <div class="common-goods-list-wrap">
      <gooditem
        v-for="good in goodslist"
        :key="good.id"
        :item="good"
        :type="goods"
        @click.native="handleClick(good.id)"
      ></gooditem>
  </div>
</template>

<script>
import gooditem from 'components/vocation/commongoods.vue'
export default {
    props:['goodslist'],
    data(){
      return {
        goods:'goods'
      }
    },
    components:{
        gooditem
    },
    methods:{
      handleClick(id){
        // console.log(id)
        // this.$store.dispatch('detail/saveDetail',{id})
        this.$router.push({
          name:'detail',
          params:{
            id
          }
        })
      }
    }
}
</script>

<style lang="stylus" scoped>
.common-goods-list-wrap
  display flex
  justify-content space-around
</style>