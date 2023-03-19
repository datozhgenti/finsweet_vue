<template>
  <div
    class="page-loader-wrapper background-color-blue fixed flex justify-center align-center"
    ref="preloader"
  >
    <div class="loader"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const preloader = ref(null);

onMounted(() => {
  window.addEventListener("load", () => {
    preloader.value.style.display = "none";
  });
});
</script>

<style>
.page-loader-wrapper {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  z-index: 3;
}

.loader {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 10px solid white;
  border-top-color: cornflowerblue;
  animation: rotate 1s infinite ease;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
