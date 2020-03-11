<template>
  <div class="productlist-wrap">
        <productitem
            v-for="item in list"
            :key="item.productId"
            :item = "item"
            @click.native="handleClick(item.productId)"
        ></productitem>
  </div>
</template>

<script>
import productitem from 'components/Index/productitem.vue'
import { get } from 'utils/http'
export default {
    data(){
        return {
            list:[]
        }
    },
    components:{
        productitem
    },
    mounted: async function(){
        let result = await get({
            // url: '/news/lists?page=1&count=3'
            url: '/api/product/module?moduleId=1'
        })
        await this.$nextTick()
        this.list = result.result.product[0].list
        // console.log(result)
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
    .productlist-wrap
      width 100%
      display flex
      justify-content space-around
      padding 0.14rem 0.11rem
</style>