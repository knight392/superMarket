<template>
  <div class = 'tab-bar'>
      <slot></slot>
  </div>
</template>


<style scoped>
.tab-bar{
    display: flex;
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    z-index:9;
    box-shadow: 0px -2px 10px rgba(100, 100, 100, .2);
    background-color: #f6f6f6;
  }
</style>