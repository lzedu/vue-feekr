<template>
  <div class="body-wrap">
    <div id="global-overlayer" class="global-overlayer" :class="{'show':show}"></div>
    <div id="global-loading" class="global-loading" :class="{'show':show}">
      <div class="spinner">
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
      </div>
      <p class="loading-txt">加载中...</p>
    </div>
      <main>
        <router-view>
        </router-view>
      </main>
      <footer>
          <ul>
              <li active-class>
                <router-link to="/index/home">
                <span class="yo-ico">&#xe614;</span>
                <span>首页</span>
                </router-link>
              </li>
              <li active-class >
                <router-link to="/index/vocation">
                <span class="yo-ico">&#xe60b;</span>
                <span>度假</span>
                </router-link>
              </li>
              <li active-class >
                <router-link to="/index/strategy">
                <span class="yo-ico">&#xe60a;</span>
                <span>攻略</span>
                </router-link>
              </li>
              <li active-class >
                <router-link to="/index/profile">
                <span class="yo-ico">&#xe602;</span>
                <span>我的</span>
                </router-link>
              </li>
          </ul>
      </footer>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show:false
    }
  },
  async mounted(){
      await this.$nextTick()
      // console.log(this.show)
      this.show = true
  }
}
</script>

<style lang="stylus" scoped>
    .show
      display none
  .body-wrap
    display flex 
    height 100%
    flex-direction column
    main
      flex 1
      overflow-y scroll
    footer
        height 0.44rem
        padding-top 0.04rem 
        ul
          display flex
          li
            flex 1
            list-style none
            text-align center 
            font-size 0.1rem
            .yo-ico
              font-size 0.19rem
              display block
            a
              text-decoration none
              color #333
            .router-link-active
              color #1abc9c

</style>