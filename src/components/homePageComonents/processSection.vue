<template>
  <section class="process-section p160 padding-96" :class="sectionBackground">
    <div class="process-section-top grid space-between">
      <div>
        <p
          class="black-color font-weight-500 font-14 letter-spacing-3 capitalize"
          style="margin-bottom: 16px"
        >
          Our Process
        </p>
        <h2
          class="color-blue font-weight-600 font-48 line-height-58"
          style="margin-bottom: 16px"
        >
          The process we are working With Our client Worldwide
        </h2>
        <p class="gray-color">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable.
        </p>
      </div>
      <div class="relative">
        <img src="@/assets/btn-shapes.svg" alt="shapes" class="shape-image" />
      </div>
    </div>
    <div class="process-section-bottom grid space-between baseline">
      <processItem
        v-for="(item, index) in items"
        :key="item"
        :img-url="item.img"
        :caption-prop="item.caption"
        :numb="index + 1"
      ></processItem>
    </div>
  </section>
</template>

<script setup>
/* eslint-disable */
import processItem from "../global components/processItem.vue";
import { ref, onMounted } from "vue";
import obeserveFunc from "@/composables/observer";

defineProps(["sectionBackground"]);

onMounted(() => {
  obeserveFunc(".process-section-top", "fade-left");
});

const items = ref([
  { img: require("@/assets/process-icon1.png"), caption: "Discover" },
  { img: require("@/assets/process-icon2.png"), caption: "Designing" },
  { img: require("@/assets/process-icon3.png"), caption: "Development" },
  { img: require("@/assets/process-icon4.png"), caption: "Testing" },
  { img: require("@/assets/process-icon5.png"), caption: "Deployment" },
  { img: require("@/assets/process-icon6.png"), caption: "Maintenance" },
]);
</script>

<style>
.process-section-top {
  grid-template-columns: 733px 28px;
  opacity: 0;
}

.shape-image {
  transform: rotate(90deg);
  right: 0;
  top: 22px;
}

.process-section-bottom {
  margin-top: 68px;
  grid-template-columns: 395px 394px 395px;
  row-gap: 48px;
}

@media all and (max-width: 1540px) {
  .process-section-bottom {
    grid-template-columns: 100%;
  }

  .procces-item-content {
    align-items: center;
  }
}

@media all and (max-width: 1110px) {
  .process-section-top {
    grid-template-columns: auto 28px;
  }
}
</style>

<style scoped>
@media all and (max-width: 536px) {
  h2 {
    font-size: 6vw;
    line-height: initial;
  }
}
</style>
