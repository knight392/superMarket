<template>
  <!-- 评论头部 -->
  <div v-if="Object.keys(info).length !== 0" class="comments-info">
    <div class="info-header">
      <div class="header-title">用户评论</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <!-- 用户信息 -->
    <div class="info-user">
      <img :src="info.user.avatar" alt=""/>
      <span>{{info.user.uname}}</span>
    </div>
    <!-- 评论信息 -->
    <div class="info-detail">
      <p>{{info.content}}</p>
      <div class="info-other">
        <span class="data">{{info.created | showDate}}</span>
        <span>{{info.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item, index) in info.images" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
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
    showDate(value) {
      return formatDate(value, 'yyyy-MM-dd', 0);
    }
  }
};
</script>

<style scoped>
.comments-info {
  border-top: 5px solid rgba(0,0,0,.1);
  border-bottom: 5px solid rgba(0,0,0,.1);
  padding: 10px;
}
/* 头部 */
.info-header {
  display: flex;
  justify-content: space-between;
  line-height: 11vw;
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.header-more {
  font-size:4.0vw;
  font-weight: 600;
}

/* 用户信息 */
.info-user {
  line-height: 11vw;
  font-weight: 600;
}
.info-user img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  vertical-align: middle;
}

/* 评论内容 */
.info-detail {
  margin-top: 10px;
}
.info-detail p{
  line-height: 7vw;
}

/* 其他信息  */
.info-other {
  margin-top:5px;
  font-size: 4.0vw;
}
.info-other .data {
  margin-right: 15px;
}

/* 图片展示 */
.info-imgs {
  display: flex;
  margin-top: 5px;
  justify-content: left;
}
.info-imgs img{
  width: 80px;
  height: 80px;
  margin-right:5px;
  border:1px solid rgba(0,0,0,.4);
 
}
</style>