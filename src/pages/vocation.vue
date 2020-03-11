<template>
  <div id="vocation-wrap">
    <div>
      <div class="vocation-search-box">
        <div class="vocation-search-content">
          <span></span>
          <span>搜索目的地/关键词</span>
        </div>
      </div>
      <div class="vocation-banner swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
          v-for="slider in sliderlist"
          :key="slider.webUrl"
          >
            <img :src="slider.cover+'!750X360'">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="nav-container">
        <ul class="nav-list">
            <div
            class="nav-item"
            v-for="navitem in navlist"
            :key="navitem.id"
            @click="handleClick(navitem.id,navitem.name)"
            >
              <img :src="navitem.icon"/>
              <span>{{navitem.name}}</span>
            </div>        
        </ul>
      </div>
      <div class="list-container home-hot-container">
        <div class="sub-title-wrap">
          <div class="font-md">新品&独家</div>
          <div class="flex-item-line"></div>
          <div class="btn-more">更多</div>
        </div>
        <goodslist
          :goodslist="goodslist"
        ></goodslist>
        <div class="sub-title-wrap">
          <div class="font-md">本周特卖</div>
          <div class="flex-item-line"></div>
          <div class="btn-more">更多</div>
        </div>
        <goodslist
          :goodslist="weeklysalelist"
        ></goodslist>
      </div>
      <div class="list-container theme-container">
        <div class="theme-title list-title">
          <span class="theme-title-hand-line list-title-hand-line"></span>
          <h2 class="theme-title-name list-title-name">主题推荐</h2>
          <span class="theme-title-desc list-title-desc">给出最新的出游主题</span>
        </div>
        <themelist
          :themelist="themelist"
        >
        </themelist>
      </div>
      <div class="list-container news-container">
        <div class="news-title list-title">
          <span class="news-title-hand-line list-title-hand-line"></span>
          <h2 class="news-title-name list-title-name">最新旅行资讯</h2>
          <span class="news-title-desc list-title-desc">给你最新的旅行热点</span>
        </div>
        <newslist>
        </newslist>
      </div>
      <div class="list-container guess-container">
        <div>
          <div class="guess-title list-title">
            <span class="guess-title-hand-line list-title-hand-line"></span>
            <h2 class="guess-title-name list-title-name">猜你喜欢</h2>
            <span class="guess-title-desc list-title-desc">这些也许是你喜欢的</span>
          </div>
          <guesslist
          :guesslist="guesslist"
          >
          </guesslist>
          <div v-if="loading" class="loading">
            <van-loading type="spinner" />
          </div>
        </div>
      </div>
      <div class="footer-box list-container">
        <div class="footer-box-brand">
          <p class="footer-box-logo"></p>
          <p class="footer-box-copyright">@2016Feekr</p>
        </div>
        <div class="footer-box-qrcode">
          <img src="https://m.feekr.com/resource/img/icon/feekr_code.png">
          <p>长按二维码或添加微信：feekr_trip</p>
          <p>关注feekr小众旅行, 获取最新玩法攻略</p>
        </div>
        <div class="footer-box-btns">
          <div>关于Feekr</div>
          <div>联系我们</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import guesslist from 'components/vocation/guesslist.vue'
import newslist from 'components/Index/newslist.vue'
import themelist from 'components/vocation/themelist.vue'
import goodslist from 'components/vocation/commongoodslist.vue'
import Swiper from 'swiper'
import { get } from 'utils/http'
import BScroll from 'better-scroll'
import { Loading,Toast } from 'vant'
import 'vant/lib/index.css';
Vue.use(Loading,Toast)
export default {
  data(){
    return {
      page:0,
      loading:true,
      sliderlist:[],
      navlist:[],
      goodslist:[],
      weeklysalelist:[],
      themelist:[],
      guesslist:[]
    }
  },
  components:{
    goodslist,
    themelist,
    newslist,
    guesslist
  },
  methods:{
    handleClick(id,name){
      this.$store.dispatch('choose/saveNav',{id,name})
      this.$router.push('/choose')
    }
  },
  async mounted(){
    let result = await get({
      url:'/api/shop/home/index?shopid=FK'
    })
    await this.$nextTick()
    this.sliderlist = result.result.slider
    this.navlist = result.result.style
    this.goodslist = result.result.newProduct
    this.weeklysalelist = result.result.specialsProduct
    this.themelist = result.result.theme
    new Swiper('.swiper-container', {
      observer:true,
      autoplay:true,
      loop:true,
      pagination: {
        el:'.swiper-pagination'
      }
    })
    let bscroll = new BScroll('#vocation-wrap',{
      pullUpLoad:true,
      probeType:2,
      click:true,
      pullUpLoad: {
          threshold: 320 // 当距离底部不超过320px时触发 pullingUp 事件
        }
    })
    bscroll.on('pullingUp',async ()=>{
        this.loading = true
        console.log(bscroll.maxScrollY)
        this.page++
        let guess = await get({
          url:'/api/shop/home/guess_like',
          params:{
              page:this.page,
              shopid:'FK'
          }
        })
        await this.$nextTick()
        this.loading = false
        if(guess.status.code == 200){
          this.guesslist = [
            ...this.guesslist,
            ...guess.result.list
          ]
          bscroll.refresh()
        }else{
          Toast({
            message:'没有啦~',
            position:'bottom'
          });
        }
      bscroll.finishPullUp()
    })
    bscroll.on('scrollEnd',()=>{

    })
  },
  updated(){
    
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl';
    #vocation-wrap
      max-height 100%
      overflow hidden
    .vocation-search-box
      margin 0.1rem auto
      .vocation-search-content
        font-size 0.26rem
        width 94%
        margin 0 auto
        background #fff
        border 1px solid #E8E8E8
        text-align center
        line-height 0.3rem
        border-radius 0.03rem
        span 
          font-size 0.12rem
          color #999
    .vocation-banner
      width 100%
      img 
        width 100%
    .home-hot-container
      margin-bottom 0.15rem
    .nav-container
      margin-top -0.05rem
      background #fff
      padding-bottom 0.2rem
      .nav-list
        display flex
        flex-wrap wrap
        .nav-item
          padding-top 0.2rem
          width 25%
          text-align center
          font-size 0.12rem
          img 
            display: block;
            margin: 0 auto .09rem;
            width: .4rem;
    

    .list-container
      margin-top 0.1rem
      padding 0 3%
      .list-title
        padding 0.2rem 0 0
        .list-title-name
          font-size 0.15rem
      .theme-title
        .theme-title-name
          font-size 0.15rem
          color #000
          font-weight 500
      .sub-title-wrap
        padding 0.225rem 0 0.325rem
        font-size 0.14rem
        .btn-more
          font-size 0.12rem
    .footer-box
      padding 0.12rem 0 0.3rem
      margin-bottom 0.25rem
      .footer-box-brand
        width 40%
        margin 0 auto 
        text-align center    
        padding 0.1rem 0
      .footer-box-qrcode
        width 70%
        margin 0 auto
        padding-bottom 0.15rem
        $border(0 0 1px 0)
        text-align center
        img
          margin 0.15rem auto
          width 1rem
        p
          color #888
          font-size 0.12rem
          line-height 0.2rem
      .footer-box-btns
        margin 0 auto
        display flex
        justify-content space-around
        margin-top 0.15rem
        width 70%
        >div
          font-size 0.14rem
          background #1abc9c
          padding 0.06rem 0.17rem
          margin 0 0.1rem
          border-radius 0.12rem
          color #fff
          display inline-block
    .loading
      margin 0.1rem auto 
      text-align center  
</style>