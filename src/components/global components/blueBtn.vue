<template>
  <button class="header-btn font-weight-500 color-white">
    {{ btnName }}
    <img
      src="@/assets/right-arrow.png"
      alt="right arrow"
      style="margin-left: 16px"
    />
    <img
      src="@/assets/btn-shapes.svg"
      alt="button shapes"
      style="position: absolute; top: 0; left: 0"
    />
  </button>
</template>

<script setup>
/* eslint-disable */
defineProps({
  btnName: {
    type: String,
    default: "Request Quote",
  },
});
</script>

<style>
.header-btn {
  padding: 20px 32px;
  background-color: var(--btn-blue);
  border: none;
  cursor: pointer;
  position: relative;
  font-size: 16px;
}
</style>
