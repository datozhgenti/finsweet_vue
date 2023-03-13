<template>
  <section class="recent-posts-section p160">
    <h2
      class="color-blue font-weight-600 font-48 line-height-58 opacity-0"
      style="margin-bottom: 64px"
    >
      Read Recent Post
    </h2>
    <div class="recent-posts-wrapper flex space-between wrap">
      <recentPostCard
        v-for="post in recentPosts"
        :key="post"
        :imgProp="post"
        @click="
          $router.push({
            name: 'postPage',
            params: {
              post: 'Today\'s best design trends for digital products'
                .split(' ')
                .join('-'),
            },
          })
        "
      ></recentPostCard>
    </div>
  </section>
</template>

<script setup>
import recentPostCard from "../global components/recentPostCard.vue";
import { ref, onMounted } from "vue";
import obeserveElement from "@/composables/observer";

onMounted(() => {
  obeserveElement(".recent-posts-section h2", "fade-left");
});

const recentPosts = ref([
  require("@/assets/recent1.png"),
  require("@/assets/recent2.png"),
  require("@/assets/recent3.png"),
  require("@/assets/recent4.png"),
]);
</script>

<style scoped>
.recent-posts-wrapper {
  row-gap: 32px;
}

@media all and (max-width: 1571px) {
  .recent-posts-wrapper {
    justify-content: center;
  }
}

@media all and (max-width: 463px) {
  h2 {
    font-size: 7vw;
  }
}
</style>
