<template>
  <div>
    {{goodsItem}}
  </div>
</template>

<script>
  export default {
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>