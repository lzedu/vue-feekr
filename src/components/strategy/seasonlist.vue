<template>
  <div class="season-list-wrap">
    <seasonitem
      v-for="item in seasonlist"
      :key="item.scenic"
      :item="item"
      @click.native="handleClick(item.scenic)"
    >

    </seasonitem>
  </div>
</template>

<script>
import { get } from 'utils/http'
import seasonitem from './seasonitem.vue'
export default {
  data(){
    return {
      seasonlist:[]
    }
  },
  components:{
    seasonitem
  },
  async mounted(){
    let result = await get({
      url:'/api/guide/cityrecommend'
    })
    await this.$nextTick()
    this.seasonlist = result.result.list.splice(0,4)
  },
  methods:{
    handleClick(id){
      this.$router.push({
        name:'citydetail',
        params:{
          id
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.season-list-wrap
  padding 0 0.1rem
  display flex
  flex-wrap wrap
  justify-content space-around

</style>