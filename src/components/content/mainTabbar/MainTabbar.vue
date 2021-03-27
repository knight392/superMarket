<template>
  <tab-bar>
      <!-- 父传子 path传入路由路径 -->
      <!-- 传入活跃状态的字体颜色 -->
      <tab-bar-item path='/home' activeColor='#dd6572'>
         <img slot="item-img" src = '~assets/img/tabbar/home.svg'>
         <img slot="item-img-active" src = '~assets/img/tabbar/home_active.svg'>
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
         <img slot="item-img" src = '~assets/img/tabbar/category.svg'>
         <img slot="item-img-active" src = '~assets/img/tabbar/category_active.svg'>
        <div slot='item-text'>分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img slot="item-img" src = '~assets/img/tabbar/shopcart.svg'>
        <img slot="item-img-active" src = '~assets/img/tabbar/shopcart_active.svg'>
        <div slot='item-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
         <img slot="item-img" src = '~assets/img/tabbar/profile.svg'>
          <img slot="item-img-active" src = '~assets/img/tabbar/profile_active.svg'>
        <div slot='item-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import tabBar from '../common/tabbar/Tabbar'
import tabBarItem from '../common/tabbar/TabbarItem'
export default {
    components: {
        tabBar,
        tabBarItem
    }
}
</script>

<style>

</style>