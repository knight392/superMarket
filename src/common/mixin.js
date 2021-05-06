import { debounce } from './utils'
// 把每个组件重复相同的抽出来，放在同一个对象中，之后再混入其中
export const itemListenerMixin = { 
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    // 商品图片加载完后重新refresh设置better-scroll 的高度
    this.itemImgListener = debounce(this.$refs.wrapper.refresh);
    this.$bus.$on('itemImgLoad', this.itemImgListener);
  },
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListener);
  },
}

import BackTop from 'components/content/backTop/BackTop'
export const toTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    topClick() {
      this.$refs.wrapper.scrollTo(0, 0, 600);
    }
  }
}