<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      // 触发父组件的自定义事件
      this.$emit("tab-click", index);
    },
  }
};
</script>

<style>
.tab-control {
  /* 当距离顶部为44px时换成fixed */
  /* position: sticky;
  top: 44px; */
  display: flex;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: var(--color-text);
  align-content: center;
  text-align: center;
  background-color: #fff;
  z-index: 9;
}
.control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  padding: 5px;
  border-bottom: 3px solid var(--color-high-text);
}
</style>