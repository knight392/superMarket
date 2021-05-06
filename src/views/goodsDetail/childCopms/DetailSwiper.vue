<template>
  <swiper class="banner">
    <swiper-item v-for="(item, index) in topImgs" :key="index">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.banner {
  height: 42vh;
}

</style>