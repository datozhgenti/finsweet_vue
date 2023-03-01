<template>
  <header class="p160 margin-top-81 padding-96">
    <div class="header-top relative">
      <div class="header-top-text-wrapper opacity-0">
        <div
          class="rectangle"
          style="margin-bottom: 24px; background-color: var(--secondary-orange)"
        ></div>
        <p
          class="black-color font-weight-500 font-14 letter-spacing-3 capitalize"
          style="margin-bottom: 16px"
        >
          Company
        </p>
        <h2
          class="color-blue font-weight-600 font-48 line-height-58"
          style="margin-bottom: 16px"
        >
          Award-winning Company seen and used by millions around the world.
        </h2>
        <p class="gray-color">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The Maker is a
          decentralized.
        </p>
      </div>
      <div class="shape-img-wrapper absolute">
        <img
          src="@/assets/btn-shapes.svg"
          alt="btn shapes"
          class="display-block"
          width="48"
          height="52"
        />
      </div>
    </div>

    <div class="header-bottom-1">
      <div class="shape-img flex justify-end">
        <img
          src="@/assets/horizontal-shape.png"
          alt="shape"
          class="display-block"
        />
      </div>
      <aboutImages id="margin-top-0" displayProp="none"></aboutImages>
    </div>
    <div class="header-bottom-2 flex space-between">
      <div class="left opacity-0">
        <div
          class="rectangle"
          style="margin-bottom: 16px; background-color: var(--light-blue)"
        ></div>
        <h6 class="black-color font-16">Our Story 👇</h6>
        <h3 class="font-weight-600 font-36 line-height-54 color-blue">
          From Startups to Titans of Industry
        </h3>
        <p class="gray-color" data-v-3fb9528c="">
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic
          unsatiable saw his giving Remain expense of gay produce excited
          perceived do an a china mean its so ye when in explained Hearts am
          next over match mr partiality not shoud latter thus as out no passed
          forming middleton exercise up
        </p>
      </div>
      <div class="right flex">
        <statisticComp></statisticComp>
      </div>
    </div>
    <div class="header-bottom-3 flex space-between background-color-blue">
      <clientIcons></clientIcons>
    </div>
  </header>
</template>

<script setup>
import aboutImages from "../global components/aboutImages.vue";
import statisticComp from "../global components/statisticComp.vue";
import clientIcons from "../global components/clientIcons.vue";
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveFunc(".header-top-text-wrapper", "fade-right");
  obeserveFunc(".header-bottom-2 .left", "fade-left");
});
</script>

<style scoped>
.header-top-text-wrapper {
  width: 719px;
}

.shape-img-wrapper {
  top: 0;
  right: 0;
}

.shape-img {
  width: 1276px;
}

.shape-img-wrapper img {
  transform: rotate(90deg);
}

.header-bottom-1 {
  margin-top: 40px;
}

.header-bottom-2 {
  margin-top: 96px;
}

.header-bottom-2 h3 {
  margin: 16px 0 24px;
}

.header-bottom-2 .left {
  width: 550px;
  margin-right: 30px;
}

.header-bottom-2 .right {
  background-color: rgba(255, 211, 175, 0.57);
  padding: 62px 0 80px 110px;
  width: 624px;
  flex-wrap: wrap;
  gap: 30px 62px;
}

.header-bottom-3 {
  margin-top: 96px;
  padding: 30px 112px;
}

@media all and (max-width: 750px) {
  .header-top-text-wrapper {
    width: auto;
  }

  .header-top-text-wrapper h2 {
    font-size: 6vw;
    line-height: normal;
  }
}

@media all and (max-width: 860px) {
  .header-bottom-2 {
    flex-direction: column;
  }

  .header-bottom-2 .left {
    margin-bottom: 40px;
    width: auto;
  }
}

@media all and (max-width: 655px) {
  .header-bottom-2 .right {
    width: auto;
    padding: 40px;
    justify-content: center;
  }

  .header-bottom-2 .left h3 {
    font-size: 6vw;
    line-height: normal;
  }
}

@media all and (max-width: 990px) {
  .header-bottom-3 {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
}
</style>
