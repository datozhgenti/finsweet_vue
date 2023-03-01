<template>
  <div
    class="client-icons-wrapper flex align-center"
    v-for="(icon, index) in icons"
    :key="icon"
  >
    <img :src="icon" :alt="`union ${index + 1}`" class="client-icon" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import obeserveFunc from "@/composables/observer.js";

const icons = ref([
  require("@/assets/Union1.png"),
  require("@/assets/Union2.png"),
  require("@/assets/Union3.png"),
  require("@/assets/Union4.png"),
  require("@/assets/Union5.png"),
]);

onMounted(() => {
  obeserveFunc(".client-icons-wrapper", "fade-top");
});
</script>

<style scoped>
.client-icons-wrapper {
  opacity: 0;
}
</style>
