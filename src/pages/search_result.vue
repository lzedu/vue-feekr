<template>
  <div class="search-body-wrap">
    <searchbox></searchbox>
    <nav class="nav-wrap">
      <ul>
        <router-link tag="li" active-class to="/searchresult/information">资讯</router-link>
        <span class="gap"></span>
        <router-link tag="li" active-class to="/searchresult/shop">商城</router-link>
      </ul>
    </nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import searchbox from 'components/searchdiv.vue'
export default {
  data(){
    return {
      id:this.$store.state.search.id,
      key_word:this.$store.state.search.key_word
    }
  },
  components:{
    searchbox
  }
}
</script>

<style lang="stylus" scoped>
.search-body-wrap
  overflow-y scroll
  .nav-wrap
    border-top 1px solid #e9e9e9
    padding 0.12rem 0.12rem 0
    background #ffffff
    ul
      display flex
      justify-content space-around
      .gap
        width 1px
        background #e9e9e9
        margin-bottom 0.12rem
      li
        text-align center
        width 40%
        font-size 0.16rem
        color #707070
        padding-bottom 0.12rem
      .router-link-exact-active 
        color #1abc9c
        border-bottom 2px solid #1abc9c


</style>