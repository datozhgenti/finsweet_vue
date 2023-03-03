<template>
  <section class="culture">
    <div class="culture-wrapper p160 padding-96">
      <div class="culture-top opacity-0">
        <p
          class="black-color font-weight-500 font-14 letter-spacing-3 capitalize"
          style="margin-bottom: 16px"
        >
          CAREER AT FINSWEET
        </p>
        <h2
          class="color-blue font-weight-600 font-36 line-height-54"
          style="margin-bottom: 24px"
        >
          Come and join a team of highly skilled professionals.
        </h2>
        <p class="gray-color">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw
          his giving Remain expense you position concluded.
        </p>
      </div>
      <div class="culture-bottom flex space-between">
        <cultureItem
          v-for="item in cultureItems"
          :key="item"
          :imgProp="item.imgURL"
          :captionProp="item.caption"
          :subcaptionProp="item.subcaption"
        ></cultureItem>
      </div>
    </div>
  </section>
</template>

<script setup>
import cultureItem from "../global components/cultureItem.vue";
import { ref, onMounted } from "vue";
import obeserveElement from "@/composables/observer";

onMounted(() => {
  obeserveElement(".culture-top", "fade-left");
});

const cultureItems = ref([
  {
    imgURL: require("@/assets/CultureIcon1.png"),
    caption: "Covid-19 insurance",
    subcaption:
      "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
  },
  {
    imgURL: require("@/assets/CultureIcon2.png"),
    caption: "Flexible working time",
    subcaption:
      "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
  },
  {
    imgURL: require("@/assets/CultureIcon3.png"),
    caption: "Work from home",
    subcaption:
      "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
  },
  {
    imgURL: require("@/assets/CultureIcon4.png"),
    caption: "Annual retreats",
    subcaption:
      "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
  },
  {
    imgURL: require("@/assets/CultureIcon5.png"),
    caption: "Learning stipend",
    subcaption:
      "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
  },
  {
    imgURL: require("@/assets/CultureIcon6.png"),
    caption: "Gym membership",
    subcaption:
      "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
  },
]);
</script>

<style scoped>
.culture {
  padding-top: 96px;
}
.culture-wrapper {
  background-color: #fafafc;
}

.culture-top {
  width: 49%;
  margin-bottom: 64px;
}

.culture-bottom {
  flex-wrap: wrap;
  row-gap: 12px;
}

@media all and (max-width: 820px) {
  h2 {
    font-size: 6vw;
    line-height: normal;
  }

  .culture-top {
    width: auto;
  }
}

@media all and (max-width: 879px) {
  .culture-bottom {
    justify-content: center;
  }
}
</style>
