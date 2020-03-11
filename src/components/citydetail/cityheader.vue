<template>
 <div class="city-container">
      <img :src="content.cover+'!640X376'" />
      <div class="city-name txt-center">
        <p class="city regular-font">{{content.cityName}}</p>
        <p class="font-md regular-font">{{content.fxbCount}}位飞小编为你推荐</p>
      </div>
    </div>
</template>

<script>
import { get } from 'utils/http'
export default {
    data(){
        return {
            id:this.$route.params.id,
            content:{}
        }
    },
    async mounted(){
        let result = await get({
            url:`/api/guide/detail?id=${this.id}`
        })
        this.$nextTick()
        // console.log(result)
        this.content = result.result
    }
}
</script>

<style lang="stylus" scoped>
.city-container
  position relative
  width 100%
  display flex
  justify-content center
  img 
    width 100%
  .city-name
    position absolute
    align-self center
    text-align center
    color #fff
    .city
      font-size 0.2rem
      line-height 0.4rem
    .font-md
      font-size 0.14rem
      line-height 0.28rem

</style>