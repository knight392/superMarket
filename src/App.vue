<template>
  <div id="app">
    <keep-alive include="home">
       <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>

import MainTabBar from 'components/content/mainTabbar/MainTabbar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style scope>
@import url(assets/css/base.css);
</style>
