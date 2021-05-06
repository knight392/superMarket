<template>
  <div>
    <!-- 导航栏 -->
    <nav-bar class="detail-nav">
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center" class="center">
        <span
          v-for="(item, i) in title"
          :key="i"
          :class="{ active: i == cueIndex }"
          @click="navClick(i)"
          >{{ item }}
        </span>
      </div>
    </nav-bar>
    <scroll class="content" ref="wrapper" :probe-type="3" @scroll="viewScroll">
      <!-- 轮播图 -->
      <detail-swiper ref="goods" :topImgs="topImgs" />
      <detail-base-info :info="goodsDesc" />
      <detail-shop-info :info="shopInfo" />
      <detail-img-info :info="imgInfo" @detailImgLoad="detailImgLoad" />
      <detail-params-info ref="params" :info="paramsInfo" />
      <detail-comments-info ref="comments" :info="commentsInfo" />
      <goods-list ref="recommends" :goods="recommend" />
    </scroll>
    <detail-bottom-bar class="bottom-bar" />
    <back-top @click.native="topClick" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {
  requestGoodsDetail,
  Goods,
  GoodsParam,
  requestRecommend,
} from "network/detail";
import Scroll from "components/common/scroll/Scroll";
import DetailSwiper from "./childCopms/DetailSwiper";
import DetailBaseInfo from "./childCopms/DetailBaseInfo";
import DetailShopInfo from "./childCopms/DetailShopInfo";
import DetailImgInfo from "./childCopms/DetailImgInfo";
import DetailParamsInfo from "./childCopms/DetailParamsInfo";
import DetailCommentsInfo from "./childCopms/DetailCommentsInfo";
import GoodsList from "components/content/goods/GoodsList";
import { itemListenerMixin, toTopMixin } from "common/mixin";
import { debounce } from "common/utils";
import DetailBottomBar from "./childCopms/DetailBottomBar";

export default {
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      cueIndex: 0,
      iid: null,
      topImgs: [],
      goodsDesc: {},
      shopInfo: {},
      imgInfo: {},
      paramsInfo: {},
      commentsInfo: {},
      recommend: [],
      scrollY: [],
      setScrollY: null,
    };
  },
  mixins: [itemListenerMixin, toTopMixin],
  components: {
    NavBar,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImgInfo,
    DetailParamsInfo,
    DetailCommentsInfo,
    GoodsList,
    DetailBottomBar
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    navClick(i) {
      this.cueIndex = i;
      this.$refs.wrapper.scrollTo(0, -this.scrollY[i], 200);
    },
    detailImgLoad() {
      this.setScrollY();
    },
    viewScroll(position) {
      // 回到顶部
      this.isShow = -position.y > 1000;
      // 控制栏显示
      for (let i in this.scrollY) {
        if (-position.y + 30 > this.scrollY[i]) {
          this.cueIndex = i;
        }
      }
    },
   
    // 请求数据
    getDetail(id) {
      requestGoodsDetail(id).then(
        (res) => {
          const data = res.result;
          // 轮播图数据
          this.topImgs = data.itemInfo.topImages;
          // 商品描述数据
          this.goodsDesc = new Goods(
            data.itemInfo,
            data.columns,
            data.shopInfo.services
          );
          // 店铺信息
          this.shopInfo = data.shopInfo;
          // 图片效果
          this.imgInfo = data.detailInfo;
          // 商品参数
          this.paramsInfo = new GoodsParam(
            data.itemParams.info,
            data.itemParams.rule
          );
          // 评论可能为0
          if (data.rate.cRate !== 0) {
            this.commentsInfo = data.rate.list[0];
          }

          // 数据更新后回调
          //  this.$nextTick(() => {
          //   this.scrollY.push(0);
          //   this.scrollY.push(this.$refs.params.$el.offsetTop);
          //   this.scrollY.push(this.$refs.comments.$el.offsetTop);
          //   this.scrollY.push(this.$refs.recommends.$el.offsetTop);
          //   console.log(this.scrollY);
          // });
        },
        (err) => {
          console.log(err);
        }
      );
    },
    getRecommend() {
      requestRecommend().then((res) => {
        this.recommend = res.data.list;
      });
    },
  },
  created() {
    // 请求商品详情数据
    this.iid = this.$route.params.iid;
    this.getDetail(this.iid);
    // 请求推荐信息
    this.getRecommend();

    // 设置ScrollY函数
    this.setScrollY = debounce(() => {
      this.scrollY = [];
      this.scrollY.push(0);
      this.scrollY.push(this.$refs.params.$el.offsetTop);
      this.scrollY.push(this.$refs.comments.$el.offsetTop);
      this.scrollY.push(this.$refs.recommends.$el.offsetTop);
    }, 500);
  },
  // 数据更新时重新设置scroolY
  mounted() {},
};
</script>
<style  scoped>
.detail-nav img {
  vertical-align: middle;
}
.detail-nav .center {
  display: flex;
  justify-content: space-around;
  font-size: 4.2vw;
}
.detail-nav .active {
  color: var(--color-high-text);
}
.content {
  /* margin-top:44px;
  height: calc(100% - 93px); */
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: #fff;
  z-index: 10;
}


</style>