<template>
  <div class="guess-list-wrap">
      <gooditem
        v-for="item in guesslist"
        :key="item.id"
        :item="item"
        type="guess"
        @click.native="handleClick(item.id)"
      ></gooditem>
  </div>
</template>

<script>
import gooditem from 'components/vocation/commongoods.vue'
import { get } from 'utils/http'
export default {
  props:['guesslist'],
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
.guess-list-wrap
  padding-top 0.2rem
  display flex
  flex-wrap wrap
  justify-content space-around

</style>