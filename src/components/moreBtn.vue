<template>
  <div
        class="get-more-list"
      >{{title}}</div>
</template>

<script>
export default {
    props:['title'],
}
</script>

<style lang="stylus" scoped>
    .get-more-list 
      display block
      text-align center
      color #1abc9c
      font-size .14rem
      padding .15rem 0

</style>