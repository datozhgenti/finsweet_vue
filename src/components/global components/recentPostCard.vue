<template>
  <div class="recent-post flex opacity-0">
    <div class="card-left">
      <img
        :src="imgProp"
        alt="recent post"
        class="display-block h100 obj-fit-cover"
      />
    </div>
    <div class="card-right">
      <h4 class="font-weight-600 font-24 line-height-36 color-blue">
        Today's best design trends for digital products
      </h4>
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
  obeserveElement(".recent-post", "fade-right");
});

defineProps(["imgProp"]);
</script>

<style scoped>
.card-right {
  background-color: #f9f9ff;
  padding: 32px;
}

.recent-post {
  width: 624px;
  margin: 1px;
}

h4 {
  margin-bottom: 34px;
}

img {
  width: 296px;
}

@media all and (max-width: 609px) {
  .recent-post {
    flex-direction: column;
  }

  .card-left img {
    width: 100%;
  }
}
</style>
