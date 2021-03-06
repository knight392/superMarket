import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'


Vue.config.productionTip = false
// 原型方式创建事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
