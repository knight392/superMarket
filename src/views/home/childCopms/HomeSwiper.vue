 <template>
  <swiper>
    <swiper-item v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad"/>
      </a>
    </swiper-item>
  </swiper>
 </template>
 
 <script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        flag: true
      }
    },
    props: {
      banner: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imgLoad() {
        // 只发一次事件请求
        if(this.flag) {
          this.$emit('swiperImgLoad')
          this.flag = false
        }
      }
    }
  }
</script>
 
 <style>
 
 </style>
