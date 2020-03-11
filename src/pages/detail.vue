<template>
  <div class="body-wrap">
    <main>
      <div class="swiper-wrap">
        <div class="banner swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="slider in list.productThumb" :key="slider">
              <img :src="slider" />
            </div>
          </div>
        </div>
        <div class="swiper-index">{{swiperIndex}} / {{len}}</div>
      </div>
      <div class="product-detail-head">
        <h5 class="product-detail-art">{{list.productDesc}}</h5>
        <h3 class="product-detail-name">{{list.productName}}</h3>
        <p class="product-detail-price">
          <b>¥{{list.productPrice}}</b>
          <span>起/{{list.productUnitCount === 1?'':list.productUnitCount}}晚</span>
          <span
            v-if="list.productMarketPrice"
            class="thin-color text-through product-detail-market-price"
          >市场价{{list.productMarketPrice}}</span>
          <!---->
        </p>
      </div>
      <div class="product-detail-menu">
        <span>选择套餐/有效期</span>
        <i class="yo-ico"></i>
      </div>
      <section class="product-guide">
        <img :src="list.head" />
        <p>旅游体验师 - {{list.user}}</p>
        <h4>为你推荐</h4>
        <h5>{{list.recom}}</h5>
      </section>
      <ul class="product-detail-tab">
        <li @click="handleClick('contain')" class="contain" :class="{ active:active['contain'] }">费用包含</li> 
        <li @click="handleClick('detail')" class="detail" :class="{ active:active['detail'] }">产品详情</li> 
        <li @click="handleClick('notice')" class="notice" :class="{ active:active['notice'] }">购买须知</li>
      </ul>
      <div class="product-detail-contain">
        <pre  v-show="tabtype === 'contain'">{{list.productContain}}
        </pre>
        <pre v-show="tabtype === 'detail'">

        </pre>
        <pre v-show="tabtype === 'notice'">{{list.usage}}
        </pre>
      </div>
      <div class="product-detail-wxcs">
        <h4>客服微信</h4> 
        <p>【注】关于产品有任何咨询需求，都可添加客服微信：feekr_cs3（国内度假），FEEKR3344（出境度假）</p>
      </div>
      <div class="product-detail-guess">
          <h4>猜你喜欢</h4>
          <guesslist
            :guesslist="guesslist"
          ></guesslist>
      </div>
    </main>
    <footer>
      <ul class="product-footer-nav">
        <li @click="clickToIndex">
          <i class="yo-ico">&#xe61e;</i>
          <p>首页</p>
        </li>
        <li class="product-footer-dot">
          <i class="yo-ico">&#xe608;</i>
          <p>客服</p>
        </li>
        <li>
          <i class="yo-ico">&#xe600;</i>
          <p>收藏</p>
        </li>
        <li
          class="product-footer-buy product-footer-heavy"
          style="background-color: rgb(26, 188, 156);"
        >立即预订</li>
        <!---->
      </ul>
    </footer>
  </div>
</template>

<script>
import guesslist from 'components/vocation/guesslist.vue'
import Swiper from "swiper";
import { get } from "utils/http";
export default {
  data() {
    return {
      id: this.$route.params.id,
      len:0,
      list: [],
      guesslist:[],
      swiperIndex:1,
      tabtype:'contain',
      active:{
        'contain':true,
        'detail':false,
        'notice':false,
      }
    }
  },
  components:{
    guesslist
  },
  async mounted() {
    let result = await get({
      url: `/api/shop/product/detail?productId=${this.id}&pvFrom=guide_search_result&shopid=FK`
    })
    let guessresult = await get({
      url:`/api/shop/product/like?productCategoryId=${this.id}&count=4&shopid=FK`
    })
    await this.$nextTick()
    // console.log(result)
    this.list = result.result
    this.len = this.list.productThumb.length
    this.guesslist = guessresult.result.list
    setTimeout(()=>{
      let mySwiper = new Swiper(".swiper-container", {
        observer: true,
        loop: true,
        observeParents: true,  
      });
      mySwiper.on('slideChangeTransitionEnd',()=> {
        this.swiperIndex = mySwiper.realIndex+1
      });
    },0)
  },
  methods:{
    handleClick(type){
      this.tabtype = type
      for(var i in this.active) {
        this.active[i] = false
      }
      this.active[this.tabtype] = true
    },
    clickToIndex(){
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
.banner 
  width 100%
  img 
    width 100%
    height 2.11rem
    overflow hidden
.body-wrap 
  height 100%
  display flex
  flex-direction column
  main 
    flex: 1
    overflow-y scroll
    .swiper-wrap
      position relative
      .swiper-index
        position absolute
        font-size 0.12rem
        color #fff
        bottom 0.075rem
        right 0.075rem
        z-index 1000
    .product-detail-contain
      padding 0.15rem 0.11rem
      line-height 0.3rem
      width 100%
      background #fff
      pre
        white-space pre-wrap
    .product-detail-head 
      text-align center
      background #fff
      padding 0 0.12rem
      h5 
        padding 0.125rem 0 0.16rem
        font-size 0.17rem
        font-weight 400
      .product-detail-name 
        font-size 0.11rem
        color #666
        font-weight 400
      .product-detail-price 
        margin-top 0.1rem
        padding-bottom 0.19rem
        line-height 0.3rem
        font-weight 400
        color #1abc9c
        font-size 0.11rem

        .text-through 
          text-decoration line-through
          color #9b9b9b
        b 
          font-size 0.17rem
          font-weight 700
          line-height 0.15rem
    .product-detail-menu 
      margin-top 0.13rem
      padding 0 0.21rem
      line-height 0.6rem
      background #fff
      color #1abc9c
      display flex
      justify-content space-between
    
    .product-guide
      margin-top 0.13rem
      padding 0.19rem 0.21rem 0.3rem 0.21rem
      background #fff
      text-align center
      img 
        display block
        margin 0 auto
        width 0.5rem
        height 0.5rem
        border-radius 50%
      p
        margin .12rem .1rem
        font-size .1rem
        color #9b9b9b
      h4
        font-weight 700
        font-size .13rem
      h5
        position relative
        margin-top .25rem
        padding .08rem .1rem
        font-size .13rem
        line-height .25rem
        color #282828
        background-color #f5f5f5
        font-weight 400
        text-align left
    .product-detail-tab
      display: flex
      flex-wrap nowrap
      font-size 0.13rem
      line-height .41rem
      text-align center
      margin-top .13rem
      background-color #fff
      $border(0 0 1px 0)
      li
        flex 1
      .active
        border-bottom 2px solid #1abc9c
    .product-detail-wxcs
      background #fff
      margin-top 0.09rem
      padding 0 0.13rem 0.075rem
      h4
        padding .1rem 0
        text-align center
        font-weight 400
      p
        padding-bottom 0.1rem
        font-size 0.14rem
    .product-detail-guess
      padding 0 .13rem .075rem
      margin-top .09rem
      background-color #fff
      h4
        font-size .15rem
        line-height .49rem
        text-align center
        font-weight 400
  footer 
    ul 
      height 0.47rem
      display flex
      align-items center
      li 
        width 15%
        color #666
        font-size 0.12rem
        text-align center
        .yo-ico
          font-size 0.18rem

      .product-footer-buy 
        flex-grow 1
        font-size 0.16rem
        font-weight 700
        line-height 0.47rem
        text-align center
        color: #fff

</style>