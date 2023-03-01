<template>
  <section class="vision-section p160 padding-96">
    <div class="vision-top opacity-0">
      <p
        class="black-color font-weight-500 font-14 letter-spacing-3 capitalize"
        style="margin-bottom: 16px"
      >
        Our VISION
      </p>
      <h2
        class="color-blue font-weight-600 font-36 line-height-54"
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
    <div class="vision-bottom opacity-0">
      <img
        src="@/assets/visionImg.png"
        alt="vision image"
        class="display-block w100"
      />
    </div>
  </section>
</template>

<script setup>
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveFunc(".vision-top", "fade-right");
  obeserveFunc(".vision-bottom", "fade-left");
});
</script>

<style scoped>
.vision-top {
  width: 701px;
}

.vision-bottom {
  margin-top: 64px;
}

@media all and (max-width: 740px) {
  .vision-top {
    width: auto;
  }

  .vision-top h2 {
    font-size: 6vw;
    line-height: normal;
  }
}
</style>
