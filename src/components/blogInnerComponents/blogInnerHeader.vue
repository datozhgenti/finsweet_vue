<template>
  <header class="blog-inner-header p160 margin-top-81 padding-96">
    <div class="inner-header-wrapper relative">
      <div class="inner-header-text-wrapper opacity-0">
        <div
          class="rectangle margin-bottom-24"
          id="background-color-pink"
        ></div>
        <h2
          class="color-blue font-weight-600 font-48 line-height-58 margin-bottom-24"
        >
          {{ $route.params.post.split("-").join(" ") }}
        </h2>
        <p class="gray-color">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The Maker is a
          decentralized. We aim to attain the greatest satisfaction for our
          clients
        </p>
        <postAuhorHorizontal class="horizonal-author"></postAuhorHorizontal>
      </div>
      <img
        src="@/assets/shape4852.png"
        alt="shape"
        class="display-block absolute topRight shape"
      />
    </div>
  </header>
</template>

<script setup>
import postAuhorHorizontal from "../global components/postAuhorHorizontal.vue";
import { onMounted } from "vue";
import obeserveElement from "@/composables/observer";

onMounted(() => {
  obeserveElement(".inner-header-text-wrapper", "fade-right");
});
</script>

<style scoped>
.horizonal-author {
  margin: 0;
  margin-top: 32px;
}

.inner-header-wrapper > div {
  width: 719px;
}

@media all and (max-width: 830px) {
  .shape {
    display: none;
  }

  .inner-header-wrapper > div {
    width: auto;
  }

  h2 {
    font-size: 6vw;
    line-height: normal;
  }
}
</style>

<style>
#background-color-pink {
  background-color: #ffd3af;
}

.margin-bottom-24 {
  margin-bottom: 24px;
}

.topRight {
  top: 0;
  right: 0;
}
</style>
