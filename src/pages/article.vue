<template>
  <div>
      <header class="back-title">
        <span class="yo-ico article-back" @click="backClick">&#xe641;</span>
        <span class="yo-ico article-sc">&#xe600;</span>
        <span class="yo-ico article-share">&#xe685;</span>
    </header>
    <div class="article-container ">
        <div class="title regular-font">{{list.title}}</div>
        <div class="author">
            <img src="https://res01.feekr.com/logo/feekr-logo-180X180.jpg" alt=""><span>Feekr旅行</span>
            <div class="view-count"><span>总阅读数</span>{{list.viewCount}}</div>
        </div>
        <van-skeleton
          title
          :row="30"
          :loading="loading"
        >
        <pre v-html="list.content" class="article-content">
        {{list.content}}
        </pre>
      </van-skeleton>
    </div>
    <div class="qcode-wrap article-qcode-wrap">
        <p class="iconfont icon-feekr"></p>
        <p class="describe">每天推荐小众特色私藏冷门，人少好玩的旅行地</p>
        <img src="https://res01.feekr.com/logo/feekr_copyright.png" class="feekr-right">
        <img class="qrcode" src="https://res01.feekr.com/logo/qrcode.jpg" alt="">
        <p class="contact">投稿联系</p>
        <p class="contact">mytrip2@feekr.com</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Skeleton } from 'vant';

Vue.use(Skeleton);
import { get } from "utils/http";
export default {
    data(){
        return {
            id: this.$route.params.id,
            list: [],
            loading:true
        }
    },
    async mounted() {
        let result = await get({
        url: `/api/article/detail?id=${this.id}`
        })
        await this.$nextTick()
        // console.log(result)
        this.list = result.result.content
        this.loading = false
    },
    methods:{
        backClick(){
            this.$router.back()
        }
    }
}
</script>

<style lang="stylus" scoped>
    .back-title
      display flex
      text-align: center;
      position: relative;
      padding: 0.1rem;
      font-size: 0.17rem;
      border-bottom: 1px solid #e5e5e5;
      background: #fff;
      line-height 0.224rem
      justify-content space-between
      span 
        font-size 0.3rem
        color #999
      .article-sc
        font-size 0.28rem
        margin-left 70%
      .article-share
        font-size 0.25rem
    
    .article-container
        background #fff
        padding 0.1rem 0.1rem 0.2rem
        .title
            font-size .16rem
            line-height .27rem
    .author 
      display flex
      padding 0.1rem 0
      img 
        display inline-block
        vertical-align middle
        margin 0
        width .2rem
        height .2rem
        border-radius 50%
      span 
        font-size 0.12rem
        color #666
        margin-left 0.05rem
      .view-count
        font-size 0.12rem
        color #666
        display inline-block
        margin-left 0.1rem
    .qcode-wrap
      border-top 1px solid #E8E8E8
      padding .2rem
      background #fff
    .article-qcode-wrap 
      text-align center
      .describe
        font-size 0.1rem
        color #2d2d2d
      .feekr-right
        margin 0.2rem auto 0
        width 60%
      .qrcode
        width 40%
        margin-top 0.1rem
      .contact
        font-size 0.1rem
        line-height 0.18rem



</style>