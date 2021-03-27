<template>
  <div class="tab-bar-item" @click='itemClick'>
    <div v-if="!isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>
    <div :style = 'activeStyle' :class="{active: isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    props: {
        path: String,
        activeColor: {
            type: String,
            default: '#dd6572'
        }
    },
    computed: {
        isActive () {
            return this.$route.path.indexOf(this.path) != -1
        },
        activeStyle () {
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods: {
        itemClick () {
            this.$router.push(this.path)
        }
    }
};
</script>

<style scope>
.tab-bar-item {
  flex: 1;
  height: 49px;
  align-content: center;
  text-align: center;
  font-size: 12px;
}
.tab-bar-item img {
  margin-top: 3px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

</style>