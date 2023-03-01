<template>
  <section class="services-section p160 padding-96 background-color-pink">
    <div class="services-section-top">
      <servicesCaption></servicesCaption>
    </div>
    <div class="services-section-bottom grid space-between">
      <servicesItem
        v-for="item in items"
        :key="item"
        :img-url="item.imgUrl"
        :caption-prop="item.caption"
      ></servicesItem>
    </div>
  </section>
</template>

<script setup>
import servicesCaption from "../global components/servicesCaption.vue";
import servicesItem from "../global components/servicesItem.vue";
import { ref } from "vue";
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveFunc(".services-section-top", "fade-right");
});

const items = ref([
  { caption: "Technical support", imgUrl: require("@/assets/headphone.png") },
  {
    caption: "Testing Management",
    imgUrl: require("@/assets/expertise-img2.png"),
  },
  { caption: "Development", imgUrl: require("@/assets/tag.png") },
]);
</script>

<style scoped>
.services-section-bottom {
  grid-template-columns: repeat(3, 405px);
  margin-top: 80px;
}

.services-section-top {
  opacity: 0;
}

@media all and (max-width: 1540px) {
  .services-section-bottom {
    grid-template-columns: 100%;
    row-gap: 40px;
  }
}
</style>
