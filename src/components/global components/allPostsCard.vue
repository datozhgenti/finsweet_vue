<template>
  <div class="all-post-card opacity-0">
    <div class="card-image">
      <img
        :src="imgProp"
        alt="post image"
        class="display-block w100 obj-fit-cover"
      />
    </div>
    <div class="card-text">
      <h4 class="font-weight-600 font-24 line-height-36 color-blue">
        We aim to attain the greatest satisfaction for our clients
      </h4>
      <p class="gray-color">
        It is a long established fact that a reader will be distracted by the
        readable content of a page.
      </p>
      <postAuthorVertical
        :imgProp="require('@/assets/andrew.png')"
        nameProp="Andrew Jonson"
        dateProp="Jan 19, 2021"
      ></postAuthorVertical>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import postAuthorVertical from "./postAuthorVertical.vue";
import { onMounted } from "vue";
import obeserveElement from "@/composables/observer";

onMounted(() => {
  obeserveElement(".all-post-card", "fade-left");
});

defineProps(["imgProp"]);
</script>

<style scoped>
.all-post-card {
  width: 405px;
  margin: 3px;
}

.card-text {
  background-color: #ffffff;
  padding: 32px;
}

.card-text .gray-color {
  margin: 16px 0 24px;
}

.all-post-card {
  cursor: pointer;
}

.all-post-card:hover h4 {
  text-decoration: underline;
}
</style>
