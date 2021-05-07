<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车（{{ goodsTypeNum }}）</div>
    </nav-bar>
    <scroll class="content">
      <cart-list :list="cartList" class="cart-list" />
    </scroll>
    <cart-bottom-bar :isSelectedAll="isSelectedAll" :totalPrice="totalPrice" :selectedNum="selectedNum" @checkedClick="selectedAllChange"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import CartList from "./childCopms/CartList";
import CartBottomBar from "./childCopms/CartBottomBar";
export default {
  components: { NavBar, Scroll, CartList, CartBottomBar },
  computed: {
    ...mapGetters(["cartList"]),
    goodsTypeNum() {
      return this.cartList.length;
    },
    isSelectedAll() {
      if(this.cartList.length == 0) return false;
      // 是否全选 === 是否能找到未选的
      return this.cartList.find(item => ! item.checked) === undefined;
    },
    totalPrice() {
      // 计算总价格
      return this.cartList.filter(item => item.checked).reduce((prev, cur) => prev + cur.count * cur.price, 0);
    },
    selectedNum() {
      return this.cartList.filter(item => item.checked).length
    }
  },
  methods: {
    selectedAllChange() {
      // 如果当前是选中了，则变为全未选中
      if( this.isSelectedAll ) {
        this.cartList.forEach(item => item.checked = false);
      }else {
        this.cartList.forEach(item => item.checked = true);
      }

    }
  },
};
</script>

<style  scoped>
/* 顶部 */
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 5vw;
  font-weight: 600;
}
/* 滚动 */
.content {
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>