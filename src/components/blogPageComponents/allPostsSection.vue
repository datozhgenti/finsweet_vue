<template>
  <section class="all-posts p160 padding-96">
    <h2
      class="color-blue font-weight-600 font-48 line-height-58 opacity-0"
      style="margin-bottom: 64px"
    >
      All posts
    </h2>
    <div class="all-posts-wrapper flex space-between wrap">
      <allPostsCard
        v-for="post in allPosts"
        :key="post"
        :imgProp="post"
      ></allPostsCard>
    </div>
  </section>
</template>

<script setup>
import allPostsCard from "../global components/allPostsCard.vue";
import { ref, onMounted } from "vue";
import obeserveElement from "@/composables/observer";

onMounted(() => {
  obeserveElement(".all-posts h2", "fade-right");
});

const allPosts = ref([
  require("@/assets/all1.png"),
  require("@/assets/all2.png"),
  require("@/assets/all3.png"),
  require("@/assets/all4.png"),
  require("@/assets/all5.png"),
  require("@/assets/all6.png"),
]);
</script>

<style scoped>
.all-posts {
  background-color: #f9f9f9;
  margin-top: 96px;
}

.all-posts-wrapper {
  row-gap: 32px;
}

@media all and (max-width: 1552px) {
  .all-posts-wrapper {
    justify-content: space-evenly;
  }
}
</style>
