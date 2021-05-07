import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  // 购物车列表
  cartList: []
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store;