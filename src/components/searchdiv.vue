<template>
  <div class="search-box">
      <div class="search-content" @click="handleClick">
        <span></span>
        <span>搜索目的地</span>
      </div>
    </div>
</template>

<script>
export default {
  methods:{
    handleClick(){
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-box
  padding 0.2rem 0.1rem
  background #ffffff
  .search-content
    border-radius 0.2rem
    padding 0.05rem 0
    font-size 0.16rem
    background #f5f5f5
    text-align center
    span 
      font-size 0.12rem
      color #999
</style>