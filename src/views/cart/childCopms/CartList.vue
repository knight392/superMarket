<template>
  <div>
    <cart-list-item v-for="(item, index) in list" :key="index" :goods="item" />
  </div>
</template>

<script>
  import CartListItem from './CartListItem'
  export default {
    props: {
      list: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components:{
      CartListItem
    }
  }
</script>

<style  scoped>

</style>