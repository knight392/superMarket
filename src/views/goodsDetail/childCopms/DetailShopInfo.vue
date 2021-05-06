<template>
  <div class="shop-info">
    <!-- 店家头像和名字 -->
    <div class="shop-top">
      <img class="shop-logo" :src="info.shopLogo" />
      <span class="shop-name">{{ info.name }}</span>
    </div>
    <!-- 销量，得分 -->
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{ info.cSells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{ info.cGoods }}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in info.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              {{ item.isBetter ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- 商铺入口 -->
    <div class="shop-bottom">
      <a class="enter-btn" :href="info.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script >
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellCountFilter(value) {
      let res = value;
      if (value > 10000) {
        res = (value / 10000).toFixed(1) + "万";
      }
      return res;
    },
  },
};
</script>

<style scoped>
.shop-info {
  margin-top: 15px;
  padding: 8px;
}
/* 顶部 */
.shop-logo {
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,.2);
  vertical-align: middle;
}
.shop-name {
  margin-left: 5px;
}

/* 中间 */
.shop-middle {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.shop-middle-item {
  width: 46vw;
  font-weight: 600;
  font-size:4.0vw;
  vertical-align: middle;
}
.shop-middle-left {
  display: flex;
  justify-content: space-around;
  border-right: 1px solid rgba(0,0,0,.1);
  text-align: center;
}
.sells-count, .goods-count {
  margin-top:15px;
}
.sells-text, .goods-text{
  margin-top:5px;
  font-size:13px;
}
.shop-middle-right td {
  padding:2px 5px;
}
.better {
  color: #fff;
  border-radius: 4px;
  background-color: #53a732;
}
.better-more {
  background-color: #f13e3a;
}
.score {
  color:#53a732;
}
.score-better {
  color: #f13e3a
}
/* 底部 */
.shop-bottom {
  margin-top:15px;
}
.shop-bottom {
  display: flex;
  justify-content: center;
}
.shop-bottom .enter-btn {
  display: inline-block;
  padding: 5px 8px;
  width:40vw;
  font-size:4.0vw;
  border-radius: 4px;
  font-weight: 600;
  text-align: center;
  background-color: #f2f5f8;
}

</style>