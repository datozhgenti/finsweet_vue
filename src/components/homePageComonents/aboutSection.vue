<template>
  <section class="about-us-section p160">
    <div class="about-top">
      <div class="about-caption">
        <p class="black-color font-weight-500 font-14 letter-spacing-3">
          ABOUT US
        </p>
      </div>
      <div class="about-top-content flex space-between">
        <div>
          <h2 class="color-blue font-weight-600 font-48 line-height-58">
            The company leads entire webdesign process from concept to delivery.
          </h2>
        </div>
        <div>
          <h3 class="color-blue font-36" style="margin-bottom: 16px">
            The Era Of Technology.
          </h3>
          <p class="gray-color">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
        </div>
      </div>
    </div>
    <aboutImages></aboutImages>
    <div class="about-bottom flex space-between align-center">
      <div class="about-bottom-left flex gapX-66">
        <statisticComp></statisticComp>
      </div>
      <div class="about-bottom-right">
        <arrowLink
          name="Read about us"
          color="var(--btn-blue)"
          :arrow-photo="require('@/assets/right-arrow-black.png')"
          page-link="/company"
          class="display-block arrow-link"
        ></arrowLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import aboutImages from "@/components/global components/aboutImages.vue";
import statisticComp from "../global components/statisticComp.vue";
import arrowLink from "../global components/arrowLink.vue";
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveFunc(".about-top", "fade-right");
});
</script>

<style scoped>
.about-us-section {
  padding-top: 120px;
  padding-bottom: 98px;
}

.about-top {
  opacity: 0;
}

.arrow-link {
  opacity: 0;
}

.about-top-content {
  margin-top: 16px;
}

.about-top-content div:first-child {
  width: 640px;
}

.about-top-content div:last-child {
  width: 547px;
}
.about-bottom {
  margin-top: 48px;
}

@media all and (max-width: 1185px) {
  .about-bottom {
    flex-direction: column;
    gap: 40px;
  }
}

@media all and (max-width: 1515px) {
  .about-top-content {
    flex-direction: column;
    gap: 40px;
  }
}

@media all and (max-width: 513px) {
  .about-top-content h2 {
    font-size: 5vw;
    line-height: initial;
  }

  .about-top-content h3 {
    font-size: 4vw;
  }

  .about-us-section {
    padding-top: 50px;
  }
}

@media all and (max-width: 840px) {
  .about-top-content div:first-child {
    width: auto;
  }

  .about-top-content div:last-child {
    width: auto;
  }
}

@media all and (max-width: 953px) {
  .about-bottom-left {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>

<style></style>
