<template>
  <div>
      <themeitem
        v-for="item in themelist"
        :key="item.id"
        :item="item"
      ></themeitem>
  </div>
</template>

<script>
import themeitem from 'components/vocation/themeitem.vue'
export default {
    props:['themelist'],
    components:{
        themeitem
    }
}
</script>

<style>

</style>