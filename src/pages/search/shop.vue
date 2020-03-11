<template>
  <div class="shop-body-wrap">
      <shopitem
        v-for="item in shoplist"
        :key="item.productId"
        :item="item"
        @click.native="handleClick(item.productId)"
      ></shopitem>
      <div class="footer-more-btn">
        <p>更多商品推荐</p>
      </div>
  </div>
</template>

<script>
import shopitem from 'components/shopitem.vue'
import { get } from 'utils/http'
export default {
  data(){
    return {
      shoplist:[]
    }
  },
  components:{
    shopitem
  },
  async mounted(){
    let keyword=this.$store.state.search.key_word
    console.log(this.$store.state.search)
    let result = await get({
      url:`/api/shop/product/search?sort=&paymentType=1&keyword=${keyword}&page=1&count=5&shopid=FK`,
    })
    await this.$nextTick()
    // console.log(result)
    this.shoplist = result.result.list
  },
  methods:{
    handleClick(id){
      console.log(id)
      this.$store.dispatch('detail/saveDetail',{id})
      this.$router.push('/detail')
    }
  }
}
</script>

<style lang="stylus" scoped>
.shop-body-wrap
  padding 0.1rem
  .footer-more-btn
    padding 0.15rem 0
    p
      font-size 0.14rem
      color #1abc9c
      text-align center

</style>