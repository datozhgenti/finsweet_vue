<template>
  <div class="service-caption">
    <p
      class="black-color font-weight-500 font-14 letter-spacing-3 capitalize"
      style="margin-bottom: 12px"
    >
      Our Services
    </p>
    <h2
      class="color-blue font-weight-600 font-48 line-height-58"
      :style="{ marginBottom: marginProp + 'px' }"
    >
      We build software solutions that solve client's business challenges
    </h2>
    <p class="gray-color" v-if="showGrayText">
      Through True Rich Attended does no end it his mother since real had half
      every him case in packages enquire we up ecstatic unsatiable.
    </p>
    <blueBtn btn-name="Start a Project" @click="openPopup"></blueBtn>
  </div>
</template>

<script setup>
/* eslint-disable */
import openPopup from "@/composables/openPopup";
import blueBtn from "./blueBtn.vue";
defineProps({
  showGrayText: {
    default: false,
  },
  marginProp: {
    default: 40,
  },
});
</script>

<style scoped>
.service-caption {
  width: 770px;
}

@media all and (max-width: 990px) {
  .service-caption {
    width: auto;
  }
}

p.gray-color {
  margin-top: 15px;
  margin-bottom: 25px;
}
</style>

<style scoped>
@media all and (max-width: 712px) {
  h2 {
    font-size: 6vw;
    line-height: initial;
  }
}
</style>
