<template>
  <div class="blog-post flex">
    <div class="blog-post-photo-wrapper">
      <img
        :src="imgURL"
        alt="blog post image 1"
        class="display-block blog-post-img"
      />
    </div>
    <div class="blog-post-text-wrapper background-color-white">
      <p class="font-weight-500 font-14 color-blue opacity-60">Jan 19, 2021</p>
      <h4 class="font-weight-600 font-24 line-height-36 color-blue">
        {{ captionProp }}
      </h4>
      <arrowLink
        name="Read More"
        color="var(--btn-blue)"
        :arrowPhoto="require('@/assets/right-arrow-black.png')"
        :pageLink="`/blog/${captionProp.split(' ').join('-')}`"
      ></arrowLink>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import arrowLink from "./arrowLink.vue";
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveFunc(".blog-post", "fade-left");
});

defineProps(["imgURL", "captionProp"]);
</script>

<style scoped>
.blog-post {
  width: 624px;
  opacity: 0;
}

.blog-post-text-wrapper {
  padding: 32px;
  height: 248px;
}

h4 {
  padding-top: 8px;
  padding-bottom: 24px;
}

@media all and (max-width: 1573px) {
  .blog-post {
    width: 100%;
  }

  .blog-post-text-wrapper {
    flex-grow: 1;
  }
}

@media all and (max-width: 887px) {
  .blog-post {
    flex-direction: column;
    align-items: center;
  }

  .blog-post-text-wrapper {
    width: 296px;
  }
}
</style>
