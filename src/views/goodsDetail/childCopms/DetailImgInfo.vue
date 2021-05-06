<template>
  <div v-if="Object.keys(info).length !== 0" class="img-info">
    <div class="info-desc">
      <!-- 展示标题 -->
      <div class="start line"></div>
      <div class="desc clear-fix">{{ info.desc }}</div>
      <div class="end line"></div>
    </div>
    <!-- 展示图片 -->
    <div v-for="(item, index) in info.detailImage" :key="index">
      <div class="info-key">{{ item.key }}</div>
      <div class="info-list">
        <img v-for="(srcItem, i) in item.list" :key="i" :src="srcItem" @load="imgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      this.$emit("detailImgLoad")
    }
  },
};
</script>

<style  scoped>
.img-info {
  border-top: 5px solid rgba(0, 0, 0, 0.1);
}
/* 做标题修饰效果 */
.info-desc {
  margin-top:20px;
  padding: 10px;
}
.line {
  width: 30vw;
  height: 1px;
  border-radius: 0.5px;
  background-color: rgba(0, 0, 0, 0.1);
}
.desc {
  margin:10px 0;
  font-size:4.0vw;
  line-height: 5.2vw;
  font-weight: 600;
}
.clear-fix {
  clear:both;
}
.start {
  position: relative;
  top:-10px;
  float: left;
}
.end {
  float: right;
}
.start::after, .end::after{
  display: inline-block;
  position: relative;
  top:-6px;
  content: "";
  width:6px;
  height:6px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5)
}
.start::after {
  float: left;
}
.end::after {
  float: right;
}

/* 图片展示 */
.info-key{
  padding: 10px;
}
.info-list img {
  width: 100vw;
}
</style>