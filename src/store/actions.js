import {ADDTOCART} from './actions-type';
import {ADDGOODSNUM, ADDGOODSTYPE} from './mutations-type';
export default {
  // context就是store实例
  [ADDTOCART] (context, payload) {
    const cartList = context.state.cartList
    let goods = cartList.find(item => item.iid === payload.iid);
    if(goods) {
      // 添加已有商品数量
      context.commit(ADDGOODSNUM, payload.iid)
    }else {
      // 添加新的商品
     context.commit(ADDGOODSTYPE, payload)
    }
  }
}