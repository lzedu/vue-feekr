<template>
  <div class="searchResultArticle">
    <div class="result-guide-item result-section">
      <div class="thumb-wrap">
        <img
          :src="recommend.cover+'!300X225'"/>
      </div>
      <div class="txt-left describe-wrap">
        <div class="main-title font-lg">{{recommend.cityName}}小众攻略</div>
        <div class="sub-title font-sm">
          <span>{{recommend.theme}}个主题推荐</span> |
          <span>{{recommend.path}}个路线推荐</span>
        </div>
        <div class="desc font-sm"></div>
      </div>
    </div>
    <div class="result-section result-list-item">
      <header class="header-title-wrap txt-center font-lg regular-font"> 
        <span>-</span> 
        <span class="section-title">主编精选</span> 
        <span>-</span> 
      </header>
      <resultlist
        :list="articleList"
        type="article"
      ></resultlist>
      <div class="footer-more-btn">
        <p>更多主编精选</p>
      </div>
    </div>
    <div class="result-section result-list-item">
      <header class="header-title-wrap txt-center font-lg regular-font"> 
        <span>-</span> 
        <span class="section-title">主题推荐</span> 
        <span>-</span> 
      </header>
      <resultlist
        :list="themeList"
        type="theme"
      ></resultlist>
      <div class="footer-more-btn">
        <p>更多主题推荐</p>
      </div>
    </div>
    <div class="result-section result-list-item">
      <header class="header-title-wrap txt-center font-lg regular-font"> 
        <span>-</span> 
        <span class="section-title">飞小编推荐</span> 
        <span>-</span> 
      </header>
      <resultlist
        :list="playList"
        type="play"
      ></resultlist>
      <div class="footer-more-btn">
        <p>更多飞小编推荐</p>
      </div>
    </div>
  </div>
</template>

<script>
import resultlist from 'components/search/resultList.vue'
import { get } from 'utils/http'
export default {
    data(){
        return {
            recommend:{},
            articleList:[],
            playList:[],
            themeList:[]
        }
    },
    components:{
      resultlist
    },
    async mounted(){
        let result = await get({
            url:`/api/guide/search`,
            data:{
                id:this.$store.state.search.id,
                key_word:this.$store.state.search.key_word,
                pv_from:'guide_search_current',
                type:'shop'
            },
            method:'post'
        })
        await this.$nextTick()
        // console.log(result)
        this.recommend = result.result.recommend
        this.articleList = result.result.articleList
        this.playList = result.result.playList
        this.themeList = result.result.themeList
    }
};
</script>

<style lang="stylus" scoped>
  .result-section
    background #fff
    padding 0.1rem
    margin-top 0.1rem
    display flex
    .header-title-wrap
      width 100%
      padding 0.1rem 0
    .txt-center 
      text-align center
    .font-lg 
      font-size .16rem
    .footer-more-btn
      padding 0.15rem 0
      p
        font-size 0.14rem
        color #1abc9c
        text-align center
  .result-list-item
    flex-direction column

  .result-guide-item
    width 100%
    .thumb-wrap
      overflow hidden
      width 40%
      margin-bottom 0.05rem
      img 
        width 100%
    .describe-wrap
      padding-left 0.1rem
      align-self center
      .main-title
        color #2d2d2d
        font-size 0.16rem
        margin-bottom 0.08rem
      .sub-title
        margin-bottom 0.05rem
        color #999
        font-size 0.12rem
        span 
          padding-right 0.05rem
</style>