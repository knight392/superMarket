<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <check-btn class="check-btn" @click.native="checkedClick" :isChecked="goods.checked"/>
    </div>
    <div class="item-img">
      <img :src="goods.img" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ goods.title }}</div>
      <div class="item-desc">{{ goods.desc }}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{ goods.price }}</div>
        <div class="item-count">x{{ goods.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBtn from 'components/content/checkBtn/CheckBtn.vue';
export default {
  components: { CheckBtn },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkedClick() {
      // 偷懒了，实际中应该是要发送actions事件的
      this.goods.checked = ! this.goods.checked;
    }
  },
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding:5px;
  border-bottom:1px solid #999;
}
.item-selector{
  position: relative;
  width: 7vw;
}
.check-btn {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
}
.item-img {
  width: 25vw;
}
.item-img img {
  width: 80px;
  height: 100px;
  border-radius: 6px;
}
.item-info {
  width:67vw;
  position: relative;
}
.item-title,.item-desc{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.item-title {
   margin-bottom: 12px;
  font-weight: 700;
  font-size:5.0vw;
  color:#666;
}
.item-desc {
  margin-bottom: 30px;
  font-size:4.0vw;
}
.info-bottom {
  display: flex;
  justify-content: space-between;
}
.item-price {
  font-weight: 700;
  font-size:5.5vw;
  color:rgb(235, 83, 28);
}
.item-count {
  position: relative;
  right:10px;
  font-weight: 700;
  font-size:5.5vw;
}
</style>