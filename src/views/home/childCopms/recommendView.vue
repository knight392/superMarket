<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <img :src="item.image"/>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
 props: {
   recommends: {
     type: Array,
     default () {
       return []
     }
   }
 }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    padding:10px 0 20px;
    border-bottom: 8px solid #eee;
    font-size:12px;
    color:var(--color-text)
  }
  .recommend-item {
    /* 宽度平均分配 */
    flex:1;
    align-content:center;
    text-align: center;
  }
  .recommend-item img {
    width:65px;
    height:65px;
    margin-bottom:8px;
  }
</style>