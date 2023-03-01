<template>
  <div v-for="stat in statistic" :key="stat" class="statistic-wrapper">
    <h3 class="color-blue font-weight-600 font-36" style="margin-bottom: 8px">
      {{ stat.number }}
    </h3>
    <img
      src="@/assets/statistic-shapes.png"
      class="display-block"
      alt="statistic shapes"
      style="margin-bottom: 4px"
    />
    <p class="black-color">{{ stat.name }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveFunc(".statistic-wrapper", "fade-bottom");
});

const statistic = ref([
  {
    name: "Project Delivered",
    number: "1560+",
  },
  {
    name: "Professional",
    number: "100+",
  },
  {
    name: "Happy Client",
    number: "950+",
  },
  {
    name: "Experience",
    number: "10 yrs",
  },
]);
</script>

<style scoped>
div {
  width: 133px;
}

.statistic-wrapper {
  opacity: 0;
}
</style>
