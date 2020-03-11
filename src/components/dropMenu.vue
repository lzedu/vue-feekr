<template>
    <div class="dropdown-item">
        <div
          class="menu-item"
          role="button"
          v-for="item in list"
          :key="item.id"
          @click="pickSort(item.id,item.name)"
          >
          <div class="van-cell__title">
            <span>{{item.name}}</span>
            <p v-if="item.city !== undefined"><span class="city">{{item.city}}</span><span :v-if="item.area !== ''" class="area">({{item.area}})</span></p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['list'],
    methods:{
      pickSort(id,name){
        // console.log(0)
        this.$nextTick()
        this.$store.dispatch('choose/saveNav',{id,name})
      }
    }
};
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
.dropdown-item
  max-height 3.57rem
  background #fff
  position fixed
  z-index 100
  right 0
  left 0
  overflow auto
  font-size 0.13rem
  .menu-item
    padding-left 0.175rem
    $border(1px)
    line-height 0.355rem
</style>