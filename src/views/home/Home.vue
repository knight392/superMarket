<template>
  <div id="home">
    <div class="home-nav">
      <nav-bar><div slot="center">购物街</div></nav-bar>
    </div>
     <tab-control
        :titles="['流行', '新款', '精选']"
        @tab-click="changeGoodsList"
        v-show="isFixed"
        class="tab-control1"
        ref="tabControl1"
      />
    <scroll class="content" ref="wrapper" :pull-up-load="true" :probe-type="3" @scroll="contentScroll" @pullingUp="loadMore">
      <home-swiper :banner="banner" @swiperImgLoad="swiperImgLoad"/>
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tab-click="changeGoodsList"
        ref='tabControl2'
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="topClick" v-show="isShow"/>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childCopms/HomeSwiper";
import RecommendView from "./childCopms/recommendView";
import FeatureView from "./childCopms/featureView";
import TabControl from "components/content/tabControl/TabControl";
import Scroll from "components/common/scroll/Scroll";
import { requestHomeMultiData, requestHomeGoodsData } from "network/home";
import GoodsList from "components/content/goods/GoodsList";
import {itemListenerMixin, toTopMixin} from 'common/mixin'
export default {
  name: 'home',
  components: {
    navBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
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
      currentType: "pop",
      isFixed: false,
      tabOffSetTop: 0,
      cueY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  mixins: [itemListenerMixin, toTopMixin],
  // vue实例创建的时候调用钩子函数，发送异步请求
  created() {
    // 轮播图及其下方的推荐链接数据
    this.getHomeMultiData();
    this.getHomeGoodsData("pop");
    this.getHomeGoodsData("new");
    this.getHomeGoodsData("sell");
  },
  activated() {
    this.$refs.wrapper.scrollTo(0, this.cueY, 100);
  },
  deactivated() {
    this.cueY = this.$refs.wrapper.getCueY();
  },
  mounted() {
   
  },
  methods: {
    changeGoodsList(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // 两个样式保存一致
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 是否显示返回顶部按钮
    contentScroll(position) {
      this.isShow = (-position.y) > 1000
      this.isFixed = (-position.y) >= this.tabOffSetTop
    },
    loadMore() {
      this.getHomeGoodsData(this.currentType)
    },
    swiperImgLoad() {
      // 设置物品切换控制栏的offsetTop
      this.tabOffSetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /**
     * 请求方法
     */
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
        this.$refs.wrapper.finishPullUp();
        this.$refs.wrapper.refresh();
      });
    }
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  /* margin-top:44px;
  height: calc(100% - 93px); */
  position: absolute;
  top:44px;
  left:0;
  right:0;
  bottom:49px;
  overflow: hidden;
}
.tab-control1 {
  position: relative;
  top: -1px;
}
</style>