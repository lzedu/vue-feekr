<template>
  <div class="guide-nav">
    <nav class="table-mode">
      <div class="menu" 
        v-for="item in navList"
        :key="item.icon"
        :category="item.id"
      >
        <p class="cate-icon">
          <img :src="item.img">
        </p>
        <p class="cate-name font-sm">
          <span class="nav-name">{{item.title}}</span>
        </p>
      </div>
    </nav>
  </div>
</template>

<script>
import { get } from 'utils/http'
export default {
    data(){
        return {
            id:this.$route.params.id,
            navList:[]
        }
    },
    async mounted(){
        let result = await get({
            url:`/api/guide/guidecategory?id=${this.id}`
        })
        await this.$nextTick()
        this.navList = result.result.list
    }
};
</script>

<style lang="stylus" scoped>
    .guide-nav
      padding 0.15rem 0
      nav
        display flex
        .menu
          text-align center
          flex 1
          .cate-icon
            margin 0 auto
            width 0.45rem
            height 0.45rem
            background #fff
            border-radius 50%
            img 
              width 60%
              margin-top 0.1rem
          .cate-name
            font-size 0.12rem
            color #666
            margin-top 0.03rem
</style>