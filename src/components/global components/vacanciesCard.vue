<template>
  <div class="vacancy-card">
    <h6 class="black-color font-16">{{ nameProp }}</h6>
    <div class="p-tags">
      <p class="gray-color" style="margin-bottom: 3px">{{ firstProp }}</p>
      <p class="gray-color">{{ secondProp }}</p>
    </div>
    <arrowLink
      color="#5D5FEF"
      name="Apply Now"
      :arrow-photo="require('@/assets/right-arrow-black.png')"
      class="font-weight-500"
    ></arrowLink>
  </div>
</template>

<script setup>
/* eslint-disable */
import arrowLink from "./arrowLink.vue";

defineProps(["nameProp", "firstProp", "secondProp"]);
</script>

<style scoped>
.vacancy-card {
  background-color: #ffffff;
  padding: 48px 30px 48px;
  width: 354px;
  margin: 5px;
}

.p-tags {
  margin: 10px 0 52px;
}
</style>
