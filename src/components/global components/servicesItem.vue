<template>
  <div class="service-item background-color-white">
    <div>
      <img :src="imgUrl" alt="headephones" class="display-block" />
    </div>
    <h6 class="black-color font-16">{{ captionProp }}</h6>
    <p class="gray-color">
      We aim to attain the greatest satisfaction for our clients and be one of
      the prominent names when it comes to world-class service
    </p>
    <arrowLink
      name="Read more"
      color="var(--btn-blue)"
      :arrow-photo="require('@/assets/right-arrow-black.png')"
      page-link="/service"
    ></arrowLink>
  </div>
</template>

<script setup>
/* eslint-disable */
import arrowLink from "./arrowLink.vue";
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveFunc(".service-item", "fade-left");
});

defineProps(["imgUrl", "captionProp"]);
</script>

<style scoped>
.service-item {
  padding: 48px 31px 44px 48px;
  height: 335px;
  opacity: 0;
}

.service-item img {
  margin-bottom: 16px;
}

.service-item h6 {
  margin-bottom: 8px;
}

.service-item p {
  margin-bottom: 24px;
}

@media all and (max-width: 395px) {
  .service-item {
    height: auto;
  }
}
</style>
