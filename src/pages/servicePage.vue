<template>
  <navMenu></navMenu>
  <servicePageHeader></servicePageHeader>
  <processSection
    class="relative"
    style="z-index: -2"
    section-background="background-testistemonials"
  ></processSection>
  <div class="features-section-wrapper">
    <featureComp
      v-for="(feature, index) in features"
      :key="feature"
      :imgUrl="feature.imgUrl"
      :captionProp="feature.caption"
      :subcaptionProp="feature.subCaption"
      :textProp="feature.text"
      :idProp="feature.caption.split(' ')[0]"
      :class="[
        index % 2 === 0 ? '' : 'changeOrder',
        index === 1 ? 'background-color-cyan' : '',
        index === 3 ? 'background-testistemonials' : '',
      ]"
    ></featureComp>
  </div>
  <ctaSection id="servicesCta"></ctaSection>
  <footerComp></footerComp>
</template>

<script setup>
import navMenu from "@/components/global components/navMenu.vue";
import servicePageHeader from "@/components/servicePageComponents/servicePageHeader.vue";
import processSection from "@/components/homePageComonents/processSection.vue";
import featureComp from "@/components/servicePageComponents/featureComp.vue";
import ctaSection from "@/components/homePageComonents/ctaSection.vue";
import footerComp from "@/components/homePageComonents/footerComp.vue";
import { ref } from "vue";

const features = ref([
  {
    imgUrl: require("@/assets/feature1.png"),
    caption: "Technical Support",
    subCaption:
      "Best in class tech support for your company. We become your tech backbone",
    text: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
  },
  {
    imgUrl: require("@/assets/feature2.png"),
    caption: "Development",
    subCaption:
      "Bring your ideas to reality with certified team of developers, working with latest technologies",
    text: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
  },
  {
    imgUrl: require("@/assets/feature3.png"),
    caption: "AWS / Azure",
    subCaption:
      "We help you deploy, manage and secure your application on leading web services",
    text: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
  },
  {
    imgUrl: require("@/assets/feature4.png"),
    caption: "Consulting",
    subCaption: "Get advice from world class professionals ",
    text: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
  },
  {
    imgUrl: require("@/assets/feature5.png"),
    caption: "Information Technology",
    subCaption:
      "We want to get local identification in every corner of the world in this era of global citizenship.",
    text: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
  },
]);
</script>

<style scoped>
.features-section-wrapper {
  margin-top: 32px;
}

#servicesCta {
  padding-top: 0;
}
</style>

<style>
.changeOrder {
  order: 1;
}
</style>
