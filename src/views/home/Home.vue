<template>
  <div id='home'>
    <div class="home-nav"><nav-bar><div slot="center">购物街</div></nav-bar></div>
    <home-swiper :banner="banner"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childCopms/HomeSwiper'
import RecommendView from './childCopms/recommendView'
import FeatureView from './childCopms/featureView'
import {getHomeMultiData} from 'network/home'

export default {
  components: {
    navBar,
    HomeSwiper,
    RecommendView,
    FeatureView
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
  #home{
    padding-top:44px;
  }
  .home-nav{
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:100;
    background-color: var(--color-tint);
    color:#fff;
  }
</style>