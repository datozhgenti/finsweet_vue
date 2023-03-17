<template>
  <header class="p160 background-color-blue color-white margin-top-81">
    <div class="header-top gapX-93 flex align-center">
      <div class="header-top-left">
        <div class="header-text-wrapper">
          <div class="rectangle" style="margin-bottom: 24px"></div>
          <div class="header">
            <h1 class="font-weight-600 line-height-68">
              Transform Your Idea Into Reality with Finsweet
            </h1>
          </div>
          <div id="bottom32">
            <p class="opacity-60">
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>
          </div>
          <div>
            <blueBtn @click="openPopup"></blueBtn>
          </div>
        </div>
      </div>
      <div class="header-top-right">
        <img
          src="@/assets/header_picture.png"
          alt="header picture"
          class="display-block"
        />
      </div>
    </div>
    <div class="header-bottom align-center flex space-between">
      <div class="header-bottom-left">
        <p class="font-weight-500 opacity-60 font-14">Our Clients</p>
        <h3 class="font-weight-500">We've Worked with</h3>
      </div>

      <clientIcons></clientIcons>
    </div>
  </header>
</template>

<script setup>
/* eslint-disable */
import blueBtn from "@/components/global components/blueBtn.vue";
import clientIcons from "../global components/clientIcons.vue";
import { onMounted } from "vue";
import observeFunc from "@/composables/observer.js";
import openPopup from "@/composables/openPopup";

onMounted(() => {
  observeFunc(".header-top-right img", "fade-left");
  observeFunc(".header-top-left", "fade-right");
  observeFunc(".header-bottom-left", "fade-bottom");
});
</script>

<style scoped>
header {
  padding-top: 96px;
  padding-bottom: 32px;
}

.header-top-right img {
  opacity: 0;
}

.header-top-left {
  opacity: 0;
}

.header-text-wrapper div::not(div:last-child) {
  margin-bottom: 24px;
}

h1 {
  font-size: 56px;
}

.header-bottom {
  height: 106px;

  margin-top: 32px;
}

h3 {
  font-size: 18px;
}

.header-bottom-left {
  width: 187px;
  opacity: 0;
}

.header-bottom-right {
  width: 106px;
}

@media all and (max-width: 1433px) {
  .header-top {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }

  header {
    padding-top: 40px;
  }
}

@media all and (max-width: 1290px) {
  .header-bottom {
    flex-direction: column;
    gap: 20px;
    height: auto;
  }

  .header-bottom-left {
    text-align: center;
  }
}

@media all and (max-width: 630px) {
  .header-top-right img {
    width: 100%;
  }
}

@media all and (max-width: 497px) {
  h1 {
    font-size: 7vw;
    line-height: initial;
    margin-bottom: 20px;
  }
}

@media all and (max-width: 1120px) {
  p {
    opacity: 1;
  }
}
</style>
