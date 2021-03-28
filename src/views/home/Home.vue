<template>
  <div id='home'>
    <div class="home-nav"><nav-bar><div slot="center">购物街</div></nav-bar></div>
    <home-swiper :banner="banner"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childCopms/HomeSwiper'
import RecommendView from './childCopms/recommendView'
import {getHomeMultiData} from 'network/home'
export default {
  components: {
    navBar,
    HomeSwiper,
    RecommendView
  },
  data () {
    return {
      banner: [],
      recommends: []
    }
  },
  created () {
    getHomeMultiData().then(res => {
      this.banner = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color:#fff;
  }
</style>