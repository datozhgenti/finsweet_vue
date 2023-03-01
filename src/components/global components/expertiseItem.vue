<template>
  <div class="expertise-item background-color-white flex gapX-16">
    <div>
      <img :src="imageUrl" alt="expertise image 1" />
    </div>
    <div>
      <h6 class="black-color font-16">{{ captionProp }}</h6>
      <p class="font-weight-500 gray-color font-14">
        {{ textProp }}
      </p>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveFunc(".expertise-item", "fade-bottom");
});

defineProps(["imageUrl", "captionProp", "textProp"]);
</script>

<style scoped>
.expertise-item {
  width: 515px;
  height: 140px;
  padding: 32px 117px 32px 32px;
  opacity: 0;
}

@media all and (max-width: 1463px) {
  .expertise-item {
    width: 100%;
    align-items: center;
  }
}

@media all and (max-width: 459px) {
  .expertise-item {
    padding-right: 10px;
    padding-left: 10px;
  }
}
</style>
