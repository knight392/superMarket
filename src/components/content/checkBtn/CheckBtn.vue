<template>
  <div class="check-btn" :class="{checked: isChecked}">
    <img v-show="isChecked" src="~assets/img/cart/tick.svg" />
  </div>
</template>

<script>
export default {
 props: {
   isChecked: {
     type: Boolean,
     default: false
   }
 }
};
</script>

<style scoped>
.check-btn {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
}

.checked {
  border: 2px solid var(--color-tint);
  background-color: var(--color-tint);
}
.checked img {
  display: inline-block;
}
img {
  display: none;
  width: 20px;
}
</style>