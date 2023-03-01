<template>
  <section
    class="expertise-section p160 flex align-center gapX-141 background-color-cyan padding-96"
  >
    <div class="expertise-section-left">
      <p
        class="black-color font-weight-500 font-14 letter-spacing-3 capitalize"
        style="margin-bottom: 16px"
      >
        Our expertise
      </p>
      <h2
        class="color-blue font-weight-600 font-48 line-height-58"
        style="margin-bottom: 24px"
      >
        We want to get local identification in every corner of the world in this
        era of global citizenship
      </h2>
      <p class="gray-color">
        Through True Rich Attended does no end it his mother since real had half
        every him case in packages enquire we up ecstatic unsatiable saw his
        giving Remain expense you position concluded.
      </p>
    </div>
    <div class="expertise-section-right">
      <div>
        <div
          class="rectangle"
          style="background-color: var(--btn-blue); height: 16px; width: 16px"
        ></div>
        <expertiseItem
          v-for="(item, index) in items"
          :key="item"
          :image-url="item.img"
          :caption-prop="item.caption"
          :text-prop="item.text"
          :style="{ marginBottom: index < 2 ? '12px' : '0' }"
        ></expertiseItem>
      </div>
    </div>
  </section>
</template>

<script setup>
import expertiseItem from "../global components/expertiseItem.vue";
import { ref } from "vue";
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveFunc(".expertise-section-left", "fade-left");
});

const items = ref([
  {
    img: require("@/assets/expertise-img1.png"),
    caption: "On Time Delivery",
    text: "Through True Rich Attended does no end it his mother since real had half every him.",
  },
  {
    img: require("@/assets/expertise-img2.png"),
    caption: "Best Quality",
    text: "Through True Rich Attended does no end it his mother since real had half every him.",
  },
  {
    img: require("@/assets/expertise-img3.png"),
    caption: "Support Assist",
    text: "Through True Rich Attended does no end it his mother since real had half every him.",
  },
]);
</script>

<style scoped>
.expertise-section-left {
  opacity: 0;
}

@media all and (max-width: 1463px) {
  .expertise-section {
    flex-direction: column;
    gap: 30px;
  }

  .expertise-section-right {
    width: 100%;
  }
}

@media all and (max-width: 873px) {
  .expertise-section-left h2 {
    font-size: 5vw;
    line-height: initial;
  }
}
</style>
