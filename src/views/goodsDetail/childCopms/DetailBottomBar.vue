<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.$emit('addCart');
      console.log('添加到购物车');
    }
  }
};
</script>

<style scoped>
/* 底部工具栏 */
.bottom-bar {
  position: absolute;
  display: flex;
  bottom: 0;
  height: 58px;
  width: 100vw;
  overflow: hidden;
  border-top:1px solid rgba(0,0,0,.1);
  justify-content: center;
  z-index: 10;
  background-color: #fff;
}
.bar-item {
  display: flex;
  width:50vw;
  justify-content: space-around;
  text-align: center;
}
.bar-left .icon {
  display: block;
  width:22px;
  height: 22px;
  margin:10px auto 3px;
  background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}
.bar-left .service {
  background-position: 0 -54px;
}
.bar-left .shop {
  background-position: 0 -98px;
}

.bar-right div{
  line-height: 58px;
  width: 50%;
}

.cart {
  background-color: #ffe817;
  color: #333;
}
.buy {
  color: #fff;
  background-color: var(--color-tint);
}

</style>