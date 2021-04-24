<template>
  <div>
    <goods-list-item v-for="item in goods" :key="item" :goods="item"/>
  </div>
  
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>