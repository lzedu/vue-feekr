<template>
  <div>
      <searchbox></searchbox>
      <nav class="nav justify-content-center">
        <div class="nav-link" @click="pickNav(0)">{{ style || '分类'}}<span></span></div>
        <div class="nav-link"  @click="pickNav(1)">目的地<span></span></div>
        <div  @click="pickNav(2)">推荐<span></span></div>
      </nav>
      <div v-show="show" class="dropmenu">
          <dropmenuitem
            v-if="type"
            :list="[{id:'1001',name:'全部分类 '}]"
          ></dropmenuitem>
          <dropmenuitem
            :list="list"
          ></dropmenuitem>
      </div>
      <div class="choose-result-list">
          <chooseitem
            v-for="item in dotList"
            :key="item.productId"
            :item="item"
          ></chooseitem>
      </div>
  </div>
</template>

<script>
import chooseitem from 'components/shopitem.vue'
import dropmenuitem from 'components/dropMenu.vue'
import searchbox from 'components/searchdiv'
import Vue from 'vue';
import { get } from 'utils/http'
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);
export default {
    data(){
        return {
            style:'',
            type:false,
            lastType:-1,
            show:false,
            id1:'1001',
            id2:'2001',
            id3:'3001',
            stylelist:[],
            sortlist:[],
            citylist:[],
            list:[],
            dotList:[]
        }
    },
    components:{
        searchbox,
        dropmenuitem,
        chooseitem
    },
    methods:{
        pickNav(type){
            this.show = true
            if(this.lastType == type){
                this.lastType = -1
                this.show =!this.show
            }else{
                this.lastType = type
            }
            if(type===0){
                this.type = true
                this.list = this.stylelist
            }else if(type===1){
                this.list = this.citylist
            }else if(type === 2){
                this.list = this.sortlist
            }
        },
    },
    async mounted(){
        this.style = this.$store.state.choose.name
        // console.log(this.$store.state.choose.name)
        let result = await get({
            url:'/api/shop/product/search_item?style[]=0&city[]=&keyword=&shopid=FK'
        })
        let resultList = await get({
            url:`/api/shop/product/search?style[]=${this.$store.state.choose.id}&city[]=&sort=&keyword=&productType[]=1&paymentType=1&page=1&shopid=FK`
        })
        await this.$nextTick()
        console.log(resultList)
        this.dotList = resultList.result.list
        this.stylelist = result.result.style
        this.sortlist = result.result.sort
        this.citylist = result.result.city
    },
    watch:{
        '$store.state.choose.id':async function (){
            this.show = false
            this.lastType = -1
            this.style = this.$store.state.choose.name
            console.log(0)
            let resultList = await get({
                url:`/api/shop/product/search?style[]=${this.$store.state.choose.id}&city[]=&sort=&keyword=&productType[]=1&paymentType=1&page=1&shopid=FK`
            })
            await this.$nextTick()
            this.dotList = resultList.result.list

        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
.nav
  display flex
  padding 0.115rem 0
  border 1px solid #f6f6f6
  background #fff
  >div
    flex 1
    font-size 0.11rem
    color #2d2d2d
    text-align center
  >div.nav-link
    $border(0 1px 0 0)    
.dropmenu
  position relative
  z-inde 10
  background #fff
</style>