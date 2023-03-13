<template>
  <router-link :to="pageLink" :style="{ color: color }"
    >{{ name }}
    <span
      ><img
        :src="arrowPhoto"
        alt="right arrow after button clone project" /></span
  ></router-link>
</template>

<script setup>
/* eslint-disable */
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveFunc(".arrow-link", "fade-top");
});

defineProps({
  color: {
    type: String,
  },
  name: {
    type: String,
  },
  pageLink: {
    default: "/",
  },
  arrowPhoto: {
    default: require("@/assets/right-arrow.png"),
  },
});
</script>

<style scoped>
span {
  margin-left: 8px;
}
</style>
