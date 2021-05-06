<template>
  <div class="good-item" @click="goodsClick">
    <img :src="showImage" key="showImage" alt="" @load="imgLoad"/>
    <div class="info">
      <p class="title">{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="cfav">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: `/goodsDetail/${this.goodsItem.iid}`
    }
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImage() {
      // 商品详情与home的list的image不一样
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  methods: {
    imgLoad() {
      // 事件总线，告诉使用者图片加载完
      this.$bus.$emit('itemImgLoad');
    },
    // 路由导航到物品详情页
    goodsClick() {
      this.$router.push(this.path)
    }
  }
};
</script>

<style scoped>
.good-item {
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}
.good-item > img {
  width: 100%;
  border-radius: 5px;
}
.info {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
  overflow: hidden;
}
.info .title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 3px;
}
.info .price {
  margin-right: 20px;
  color: var(--color-high-text);
}
.info .cfav {
  position: relative;
}
.info .cfav::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>