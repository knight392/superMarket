<template>
  <div v-if="Object.keys(info).length !== 0" class="base-info">
    <!-- 商品标题  -->
    <div class="info-title">{{info.title}}</div>
    <!-- 商品价格 -->
    <div class="info-price">
      <span class="n-price">{{info.price}}</span>
      <span class="o-price">{{info.oldPrice}}</span>
      <span v-if="info.discount" class="discount">{{info.discount}}</span>
    </div>
    <!-- 商品其他信息 -->
    <div class="info-other">
      <span >{{info.columns[0]}}</span>
      <span >{{info.columns[1]}}</span>
      <span >{{info.service[info.service.length - 1].name}}</span>
    </div>
    <!-- 商品服务 -->
    <div class="info-service">
      <span class="item" v-for="(item, index) in info.service" :key="index">
        <img v-if="item.icon" :src="item.icon">
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style  scoped>
  .base-info {
    padding: 8px;
  }
  /* 标题 */
  .info-title {
    padding:4px 0;
    margin:10px 0;
    font-size: 4.1vw;
    font-weight: bold;
  }
  /* 价格 */
  .info-price {
    padding:4px 0;
  }
  .n-price {
    color: var(--color-high-text);
    font-size:6.0vw;
  }
  .o-price {
    margin-left: 8px;
    text-decoration: line-through;
  }
  .discount {
    margin-left:8px;
    padding: 1px;
    border-radius: 4px;
    background-color: #f13e3a;
    color: #fff;
  }
  /* 其他 */
  .info-other {
    margin-top:10px;
    padding:4px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
  }
  /* 服务 */
  .info-service {
    display: flex;
    margin-top:12px;
    font-weight: 600;
    font-size:4.0vw;
    justify-content: space-between;
    flex-wrap: wrap;
    columns: 2;
  }
  .info-service .item {
    display: inline-block;
    line-height: 25px;
    margin:0 5px;
    
  }
  .info-service img{
    width:14px;
  }


</style>