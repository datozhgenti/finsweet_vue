<template>
  <div class="culture-item opacity-0">
    <div class="culture-item-img">
      <img :src="imgProp" alt="culture icon" class="display-block" />
    </div>
    <h6 class="black-color font-16">{{ captionProp }}</h6>
    <p class="gray-color">
      {{ subcaptionProp }}
    </p>
  </div>
</template>

<script setup>
/* eslint-disable */
import { onMounted } from "vue";
import obeserveElement from "@/composables/observer";

onMounted(() => {
  obeserveElement(".culture-item", "fade-right");
});

defineProps(["imgProp", "captionProp", "subcaptionProp"]);
</script>

<style scoped>
.culture-item {
  background-color: #ffffff;
  width: 418px;
  padding: 30px 0 32px 32px;
  margin: 1px;
}

h6 {
  margin: 8px 0;
}
</style>
