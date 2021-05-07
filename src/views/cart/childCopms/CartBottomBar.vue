<template>
  <div class="cart-bottom-bar">
    <div class="check-selector">
      <check-btn class="check-btn" :isChecked="isSelectedAll" @click.native="checkedClick" />
      <span class="text">全选</span>
    </div>
    <div class="info-price text">￥{{ totalPrice.toFixed(2) }}</div>
    <div class="calculate-btn text">去结算（{{ selectedNum }}）</div>
  </div>
</template>

<script>
import CheckBtn from "components/content/checkBtn/CheckBtn.vue";

export default {
  components: { CheckBtn },
  props: {
    totalPrice: {
      type: Number,
      default: 0,
    },
    selectedNum: {
      type: Number,
      default: 0,
    },
    isSelectedAll: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkedClick() {
      this.$emit("checkedClick")
    }
  },
};
</script>

<style  scoped>
.cart-bottom-bar {
  position: absolute;
  bottom: 49px;
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100vw;
  text-align: center;
  border-top:1px solid #ccc;
  background-color: #eee;
}
.check-selector {
  display: flex;
}
.check-btn {
  margin: 8px 5px 0 5px;
}
.info-price {
  font-size:5.5vw;
  font-weight: 600;
}
.calculate-btn {
  padding:0 5px;
  background-color: var(--color-tint);
  color:#fff;
}
.text {
  line-height: 40px;
}


</style>