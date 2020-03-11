<template>
    <div class="search-panel edit-wrap show">
      <div class="search-container search-site-container">
          <span class="yo-ico icon-fanhui txt-left back-to-guide " @click="backClick">&#xe641;</span>
          <div class="search-bar">
            <form class="search-input guide-search-form" data-search="site">
              <input type="search" class="search-position" placeholder="搜索目的地" id="search-site" 
              @keyup.enter="keyupSearch"
              ref="input"
              @input="handleInput"
              />
              <span class="icon-search-clear yo-ico" v-show="isClear" @click="clearInput">&#xe65f;</span>
            </form>
          </div>
          <div class="table-cell">
            <a href="javascript:;" 
            class="search-btn"
            @click="keyupSearch"
            >搜索</a>
          </div>
      </div>
      <div class="search-result">
        <div class="search-item"
          v-for="item in searchlist"
          :key="item.id"
          @click="handleClick(item.id,item.site)"
        >
        <span class="search-site">{{item.site}}</span>
        <span class="search-area">{{item.area}}</span>
        <span class="search-detail yo-ico">&#xe6cc;</span>
        </div>
      </div>
      <div class="scroll-wrap">
        <section class="recent-search">
          <div class="search-tag-panel recent-search-panel">
            <header class="header-title-wrap">
              <span>-</span>
              <span class="section-title">最近搜索</span>
              <span>-</span>
            </header>
            <div class="pull-right del-search-btn" @click="clearRecentClick">
              <span class="yo-ico icon-lajitong">&#xed44;</span>
            </div>
            <div class="tag-container">
              <a
                class="tag-item search-keyword"
                v-for=" hitem in historylist"
                :key="hitem.id"
                data-id="hitem.id"
                data-keyword="hitem.keyword"
                @click="handleClick(hitem.id,hitem.keyword)"
              >{{hitem.keyword}}</a>
            </div>
          </div>
        </section>
        <section class="hot-search">
          <div class="search-tag-panel hot-search-panel">
            <header class="header-title-wrap">
              <span>-</span>
              <span class="section-title">热门搜索</span>
              <span>-</span>
            </header>
            <div class="tag-container">
              <a class="tag-item search-keyword"
                v-for="city in hotcitylist"
                :key="city.id"
                :data-id="city.id"
                @click="handleClick(city.id,city.title)"
              >{{city.title}}</a>
            </div>
          </div>
        </section>
      </div>
    </div>
</template>

<script>
import { get } from 'utils/http'
import store from 'store'
import _ from 'lodash'

export default {
    data(){
        return {
            hotcitylist:[],
            searchlist:[],
            historylist:[],
            isClear:false
        }
    },
    methods:{
        async keyupSearch(){
            let keyword = this.$refs['input'].value
            let historylist = store.get('guideRecentSearch') || []
            let searchResult = await get({
              url:`/api/guide/searchlist?keyword=${keyword}`
            })
            await this.$nextTick()
            this.searchlist = searchResult.result.list
            // console.log(searchlist)
            for(var i=0;i<this.searchlist.length;i++){
              let {id } = this.searchlist[i]
              historylist.unshift({
                keyword,
                id
              })
            }
            // console.log(historylist)
            historylist =  _.unionBy(historylist,(value)=>{
              return value.id
            })
            store.set('guideRecentSearch',historylist)
            // console.log(historylist)
        },
        handleClick(id,key_word){
          //跳转搜索列表页
          let historylist = store.get('guideRecentSearch') || []
          historylist.unshift({
            keyword:key_word,
            id
            })
              historylist =  _.unionBy(historylist,(value)=>{
            return value.id
          })
          store.set('guideRecentSearch',historylist)
          this.$store.dispatch('search/saveCity', {
              id,
              key_word
            })
          console.log(key_word)
          this.$router.push('/searchresult')
        },
        backClick(){
          this.$router.back()
        },
        clearRecentClick(){
          store.set('guideRecentSearch','')
          this.historylist = []
        },
        handleInput(){
          if(this.$refs['input'].value.length>0){
            console.log(111)
            this.isClear = true
          }else{
            this.isClear = false
          }
        },
        clearInput(){
          this.$refs['input'].value=''
          this.isClear = false
        }
    },
    async mounted(){
        // console.log(this.historylist)
        this.historylist = store.get('guideRecentSearch')
        // console.log(this.historylist)
        let hotcity =  await get({
            url:'/api/guide/keywordlist'
        })
        // let historylist = localStorage.getItem('guideRecentSearch')
        await this.$nextTick()
        this.hotcitylist = hotcity.result.list
    }
};
</script>

<style lang="stylus" scoped>
  .search-container
    background #fff
    padding 0.1rem
    display flex
    align-items center
    .back-to-guide
      font-size 0.28rem
      color #ccc;
      width 12%
      text-align center
    .search-bar
      width 72%
      .search-input
        position relative
        width 100%
        background #F5F5F5
        border-radius 4rem
        padding .03rem .08rem .03rem 0.1rem
        input
          width 100%
          padding 0.05rem 0
          border none
          background #F5F5F5
          font-size 0.12rem
      .icon-search-clear
        position absolute
        right 2%
        padding 0.05rem
    .search-btn
      background #1abc9c
      color #fff
      padding .05rem .08rem
      border-radius 6px
      font-size .12rem
      margin-left 0.1rem
  .search-result
    padding 0 0.1rem
    background #ffffff
    .search-item
      width 100%
      padding 0.12rem 0.1rem
      display flex
      font-size 0.12rem
      .search-site
        color #1abc9c
      .search-area
        margin-left 0.1rem
        color #2d2d2d
      .search-detail
        margin-left auto
        color #999
  .scroll-wrap
    section 
      margin-top 0.1rem
      padding 0.2rem 0.1rem
      background #fff
      position relative
    .header-title-wrap
      text-align center
      color #000
      font-size 0.16rem
      line-height 0.288rem
  .tag-container
    width 80%
    margin 0.1rem auto 0
    .tag-item
      margin-top .1rem
      display inline-block
      border 1px solid #ccc
      padding .04rem .12rem
      border-radius .2rem
      margin-right .06rem
      color #666
      font-size 0.1rem
  .pull-right
    position absolute
    right 10%
    top 50%
    font-size 0.2rem
</style>