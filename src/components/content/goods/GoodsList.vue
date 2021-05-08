<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :key="item.iid" :goodsItem="item"  />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  }
};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 10px;
  padding: 2px;
}
</style>