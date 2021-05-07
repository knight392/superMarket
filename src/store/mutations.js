import {ADDGOODSNUM, ADDGOODSTYPE} from './mutations-type'
export default {
  // 添加已有商品的数量
  [ADDGOODSNUM](state, payload) {
    state.cartList.find(item => item.iid == payload).count ++;
  },
  // 添加新的商品
  [ADDGOODSTYPE](state, payload) {
    payload.count = 1;
    payload.checked = false;
    state.cartList.push(payload)
  }
}