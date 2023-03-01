<template>
  <section class="blog-section p160 padding-96 background-color-cyan">
    <div
      class="rectangle"
      style="background-color: var(--light-blue); width: 16px; height: 16px"
    ></div>
    <h2 class="color-blue font-weight-600 font-48 line-height-58">
      Read our latest blogs & news
    </h2>
    <div class="flex space-between blogs-wrapper">
      <blogPost
        v-for="post in blogPosts"
        :key="post"
        :imgURL="post.img"
        :captionProp="post.caption"
      ></blogPost>
    </div>
  </section>
</template>

<script setup>
import blogPost from "../global components/blogPost.vue";
import { ref } from "vue";
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveFunc(".blog-section h2", "fade-right");
});

const blogPosts = ref([
  {
    img: require("@/assets/blog-post-image1.png"),
    caption: "Today's best design trends for digital products",
  },
  {
    img: require("@/assets/blog-post-image2.png"),
    caption: "A practical guide to building a brand strategy",
  },
]);
</script>

<style scoped>
.rectangle {
  margin-bottom: 19px;
}

h2 {
  margin-bottom: 48px;
  opacity: 0;
}

@media all and (max-width: 1573px) {
  .blogs-wrapper {
    flex-direction: column;
    gap: 20px;
  }
}

@media all and (max-width: 408px) {
  h2 {
    font-size: 6vw;
    line-height: initial;
  }
}
</style>
