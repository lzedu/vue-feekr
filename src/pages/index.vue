<template>
  <div>
    <div class="home-search-box">
      <div class="home-search-content" @click="handleSearchClick">
        <span class="yo-ico search-ico">&#xe601;</span>
        <span>搜索目的地/攻略/旅行资讯</span>
      </div>
    </div>
    <div class="nav-container">
      <ul class="nav-list">
        <li class="nav-item"><router-link to="/index/strategy"><span><img src="../assets/gl.png" alt=""> </span><span>攻略</span></router-link></li>
        <li class="nav-item"><router-link to="/index/vocation"><span><img src="../assets/dj.png" alt=""> </span><span>度假</span></router-link></li>
        <li class="nav-item"><router-link to="/"><span><img src="../assets/wl.png" alt=""> </span><span>玩乐</span></router-link></li>
        <li class="nav-item"><router-link to="/"><span><img src="../assets/mw.png" alt=""> </span><span>美物</span></router-link></li>
        <li class="nav-item"><router-link to="/"><span><img src="../assets/yjs.png" alt=""> </span><span>研究所</span></router-link></li>
      </ul>
    </div>
    <div class="list-container news-container">
      <div class="news-title list-title">
        <span class="news-title-hand-line list-title-hand-line"></span>
        <h2 class="news-title-name list-title-name">最新旅行资讯</h2>
        <span class="news-title-desc list-title-desc">给你最新的旅行热点</span>
      </div>
      <newslist>
      </newslist>
      <div class="btn-more-list" @click="morelist('lyzx')">
        <p>更多旅游资讯</p>
      </div>
    </div>
    <div class="list-container product-container">
      <div class="product-title list-title">
        <span class="product-title-hand-line list-title-hand-line"></span>
        <h2 class="product-title-name list-title-name">当季特惠</h2>
        <span class="product-title-desc list-title-desc">本季度最优惠的出游商品</span>
      </div>
      <div class="sub-title-wrap">
        <div class="font-md">国外度假</div>
        <div class="flex-item-line"></div>
        <div class="btn-more">更多</div>
      </div>
      <productlist></productlist>
    </div>

    <div class="list-container city-container">
      <div class="city-title list-title">
        <span class="city-title-hand-line list-title-hand-line"></span>
        <h2 class="city-title-name list-title-name">目的地推荐</h2>
        <span class="city-title-desc list-title-desc">开启城市深度攻略</span>
      </div>
      <citylist></citylist>
      <div class="btn-more-list" @click="morelist('mddtj')">
        <p>更多目的地推荐</p>
      </div>
    </div>
    <div class="list-container selected-container">
      <div class="selected-title list-title">
        <span class="selected-title-hand-line list-title-hand-line"></span>
        <h2 class="selected-title-name list-title-name">编辑精选</h2>
        <span class="selected-title-desc list-title-desc">推荐最具小众特色的旅行体验</span>
      </div>
      <listvue></listvue>
      <div class="btn-more-list" @click="morelist('lmtj')">
        <p>更多栏目推荐</p>
      </div>
    </div>
  </div>
</template>

<script>
import citylist from 'components/Index/citylist.vue'
import listvue from 'components/Index/list.vue'
import bodywrap from './layout.vue'
import newslist from 'components/Index/newslist.vue'
import productlist from 'components/Index/productlist.vue'
// import newsitem from 'components/Index/newsItem.vue'
export default {
  
  components:{
    bodywrap,
    newslist,
    productlist,
    listvue,
    citylist
  },
  methods:{
    handleSearchClick(){
      this.$router.push('/search')
    },
    morelist(key){
      if(key === 'lyzx'){
        this.$router.push('/list/'+key)
      }
    }
  }
  
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
    .body-wrap
      display flex 
      height 100%
      flex-direction column
      main
        flex 1
        .home-search-box
          height 0.572rem
          padding 0.1rem
          .home-search-content
            height 100%
            background #fff
            border 1px solid #E8E8E8
            text-align center
            line-height 0.3rem
            border-radius 0.06rem
            .search-ico
              font-size 0.2rem
            span 
              font-size 0.1rem
              color #999
        .news-title,.city-title
          $border(0 0 1px 0)
        .nav-container
          background #fff
          height 0.892rem
          padding 0.15rem
          .nav-list
            display flex
            justify-content center
            .nav-item
              flex 1
              align-self center
              text-align center
              span 
                display block
                color #2d2d2d
                font-size 0.12rem
              img 
                width 0.4rem
                margin 0 auto
              

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
            a
              text-decoration none
              color #333
        

</style>