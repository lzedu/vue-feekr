<template>
  <div>
      <div  v-if=" type == 'play'">
          <playitem
                v-for="item in list"
                :key="item.id"
                :item="item"
            ></playitem>
      
      </div>
      <resultitem
        v-for="item in list"
        :key="item.id"
        :item="item"
        v-else
      ></resultitem>
  </div>
</template>

<script>
import playitem from './playitem'
import resultitem from './resultItem'
export default {
    props:['list','type'],
    components:{
        resultitem,
        playitem
    }
}
</script>

<style>

</style>