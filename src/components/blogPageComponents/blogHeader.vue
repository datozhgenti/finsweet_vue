<template>
  <header
    class="blog-header p160 margin-top-81 padding-96 flex space-between wrap"
  >
    <div class="left opacity-0">
      <div
        class="rectangle"
        style="margin-bottom: 21px; background-color: #ffd3af"
      ></div>
      <p
        class="black-color font-weight-500 font-14 letter-spacing-3 capitalize"
        style="margin-bottom: 24px"
      >
        TREnding
      </p>
      <h2
        class="color-blue font-weight-600 font-48 line-height-58"
        style="margin-bottom: 24px"
      >
        Breaking the code How did we build our Figma plugin
      </h2>
      <p class="gray-color" style="margin-bottom: 24px">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The Maker is a
        decentralized. We aim to attain the.
      </p>
      <div>
        <arrowLink
          color="#5D5FEF"
          name="Read More"
          :arrow-photo="require('@/assets/right-arrow-black.png')"
          class="font-weight-500"
        ></arrowLink>
      </div>
      <postAuhorHorizontal></postAuhorHorizontal>
      <div>
        <img
          src="@/assets/blogHeaderImg.png"
          alt="blog header image"
          class="display-block w100"
        />
      </div>
    </div>
    <div class="right">
      <div class="pink-section-wrapper relative">
        <div class="shape absolute">
          <img
            src="@/assets/btn-shapes.svg"
            alt="shapes"
            class="display-block"
          />
        </div>
        <div>
          <h4
            class="font-weight-600 font-24 line-height-36 color-blue"
            style="margin-bottom: 16px"
          >
            Great design expectations prejudice in digital products in Next Year
          </h4>
          <postAuthorVertical
            :imgProp="require('@/assets/andrew.png')"
            nameProp="Andrew Jonson"
            dateProp="Jan 19, 2021"
          ></postAuthorVertical>
        </div>
        <div class="middle-div">
          <h4
            class="font-weight-600 font-24 line-height-36 color-blue"
            style="margin-bottom: 16px"
          >
            Great design expectations prejudice in digital products in Next Year
          </h4>
          <postAuthorVertical
            :imgProp="require('@/assets/methew.png')"
            nameProp="Andrew Jonson"
            dateProp="Jan 19, 2021"
          ></postAuthorVertical>
        </div>
        <div>
          <h4
            class="font-weight-600 font-24 line-height-36 color-blue"
            style="margin-bottom: 16px"
          >
            Great design expectations prejudice in digital products in Next Year
          </h4>
          <postAuthorVertical
            :imgProp="require('@/assets/hussen.png')"
            nameProp="Andrew Jonson"
            dateProp="Jan 19, 2021"
          ></postAuthorVertical>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import arrowLink from "../global components/arrowLink.vue";
import postAuthorVertical from "../global components/postAuthorVertical.vue";
import postAuhorHorizontal from "@/components/global components/postAuhorHorizontal.vue";
import { onMounted } from "vue";
import obeserveElement from "@/composables/observer";

onMounted(() => {
  obeserveElement(".blog-header .left", "fade-right");
  obeserveElement(".pink-section-wrapper", "fade-left");
});
</script>

<style scoped>
.left {
  width: 624px;
  margin-right: 20px;
}

.pink-section-wrapper {
  background-color: #ffdfc6;
  padding: 72px;
  padding-right: 77px;
  width: 515px;
}

.shape {
  top: 0;
  right: 0;
  height: 52px;
  width: 48px;
}

.shape img {
  transform: rotate(90deg);
  width: 100%;
}

div.middle-div {
  margin: 48px 0;
}

@media all and (max-width: 1478px) {
  .right {
    margin-top: 40px;
  }
}

@media all and (max-width: 670px) {
  .left {
    width: auto;
  }

  h2 {
    font-size: 6vw;
    line-height: normal;
  }
}

@media all and (max-width: 574px) {
  .pink-section-wrapper {
    width: auto;
    padding: 35px;
  }

  h4 {
    font-size: 5vw;
    line-height: normal;
  }
}
</style>
