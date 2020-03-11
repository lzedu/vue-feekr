<template>
  <div class="citylist-wrap">
    <cityitem
        v-for="item in list"
        :key="item.scenic"
        :item="item"
        @click.native="handleClick(item.scenic)"
    ></cityitem>
  </div>
</template>

<script>
import { get } from 'utils/http'
import cityitem from 'components/Index/cityitem.vue'
export default {
    data(){
        return {
            list : []
        }
    },
    components:{
        cityitem
    },
    async mounted(){
        let result = await get({
            url:'/api/guide/cityrecommend'
        })
        await this.$nextTick()
        this.list = result.result.list.splice(0,4)
    },
    methods:{
        handleClick(id){
            console.log(id)
            this.$router.push(
                {
                    name:'citydetail',
                    params:{
                        id
                    }
                }
            )
        }
    }
}
</script>

<style lang="stylus" scoped>
.citylist-wrap
  padding 0.08rem 0.11rem
  display flex
  justify-content space-around
  flex-wrap wrap
</style>