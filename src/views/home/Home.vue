<template>
  <div id="home">
    <div class="home-nav">
      <nav-bar><div slot="center">购物街</div></nav-bar>
    </div>
    <home-swiper :banner="banner" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control :titles="['流行', '新款', '精选']" />
    <goods-list  :goods="showGoods"/>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childCopms/HomeSwiper";
import RecommendView from "./childCopms/recommendView";
import FeatureView from "./childCopms/featureView";

import TabControl from "components/content/tabControl/TabControl";

import { requestHomeMultiData, requestHomeGoodsData } from "network/home";
import GoodsList from "components/content/goods/GoodsList";

export default {
  components: {
    navBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
  data() {
    return {
      // 轮播图
      banner: [],
      // 推荐
      recommends: [],
      // 商品列表
      goods: {
        // 流行
        pop: { page: 0, list: [] },
        // 新款
        new: { page: 0, list: [] },
        // 精选
        sell: { page: 0, list: [] },
      },
      currentType: 'pop'
    };
  },
  computed: {
    showGoods() {
      return this.goods[currentType].list
    }
  },
  // vue实例创建的时候调用钩子函数，发送异步请求
  created() {
    // 轮播图及其下方的推荐链接数据
    this.getHomeMultiData();
    this.getHomeGoodsData("pop");
    this.getHomeGoodsData("new");
    this.getHomeGoodsData("sell");
  },
  methods: {
    getHomeMultiData() {
      requestHomeMultiData().then((res) => {
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoodsData(type) {
      const page = this.goods[type].page + 1;
      requestHomeGoodsData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  padding-bottom: 44px;
}
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: var(--color-tint);
  color: #fff;
}
</style>