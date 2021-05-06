<template>
  <div v-if="Object.keys(info).length !== 0" class="params-info">
    <!-- 尺码参数  -->
    <table class="table-size" v-for="(table, index) in info.sizes" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">
          {{ td }}
        </td>
      </tr>
    </table>
    <!-- 商品参数  -->
    <table class="table-info">
      <tr v-for="(item, index) in info.infos" :key="index">
        <td>{{ item.key }}</td>
        <td class="info-value">{{ item.value }}</td>
      </tr>
    </table>
    
    <!-- 可能有图片  -->
    <!-- <div class="info-img" v-if="info.image.length !== 0">
      <img :src="info.image" alt="">
    </div> -->
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
  }

};
</script>

<style scoped>
.params-info {
  padding:10px;
  font-size: 4.0vw;
  text-align: left;
}
.params-info  table{
  width: 100%;
  border-collapse: collapse;
}
.params-info tr {
  border-bottom: 1px solid rgba(0,0,0,.1);
   line-height: 12vw;
}
.params-info tr td:first-of-type {
  width: 4.5em;
}
.info-value {
  color: var(--color-high-text);
}
</style>