<template>
  <div class="list-wrap">
    list
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$router.history.current.params.key)
  }
}
</script>

<style>

</style>