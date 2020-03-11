<template>
<div>
  <div 
  class="list-container"
  v-for="item in list"
  :key="item.id"
  :item="item"
  >
      <div class="sub-title-wrap">
        <div class="font-md">{{item.column}}</div>
        <div class="flex-item-line"></div>
        <div class="btn-more">更多</div>
      </div>
      <selitem
        v-for="subitem in item.article"
        :key="subitem.id"
        :subitem="subitem"
        @click.native="handleClick(subitem.id)"
      ></selitem>
    </div>
</div>
</template>

<script>
import { get } from 'utils/http'
import selitem from 'components/Index/selecteditem.vue'
export default {
  data(){
    return {
      list:[],
      listsub:[]
    }
  },
    components:{
      selitem
    },
    async mounted(){
      let result = await get({
        url:'/api/editor/selected'
      })
      await this.$nextTick()
      this.list = result.result.list 
    },
    methods:{
      handleClick(id){
        this.$router.push(
          {
            name:'article',
            params:{
              id,
            }
          }
        )
      }
    }

}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
.list-container
  margin-top 0.11rem
  background #ffffff
  .list-title
    padding 0.2rem 0.11rem
    .list-title-hand-line
      border-left 3px solid #1ABC9C
      font-size 0.1rem
    .list-title-name
      font-size 0.18rem
      padding 0 0.1rem
      color #2d2d2d
      font-weight 200
      display inline-block
    .list-title-desc
      font-size 0.1rem
      color #999
  .btn-more-list
    font-size 0.14rem
    padding 0.2rem 0
    text-align center
    color #1abc9c
  .sub-title-wrap
    padding 0.11rem
    display flex
    font-size 0.12rem
    color 2d2d2d
    .flex-item-line
      height 0
      align-self center
      flex 1
      margin 0 0.05rem
      $border(0 0 1px 0)
    .btn-more
      color #1abc9c
</style>