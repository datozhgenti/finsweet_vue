<template>
  <section class="blog-post-section p160">
    <div class="blog-post-top flex column margin-bottom-96 opacity-0">
      <div>
        <img
          src="@/assets/visionImg.png"
          alt="vision image"
          class="display-block w100"
        />
      </div>
      <div class="flex flex-end">
        <img
          src="@/assets/horizontal-shape.png"
          alt="shapes"
          class="display-block"
        />
      </div>
    </div>
    <div class="blog-post-bottom opacity-0">
      <div class="blog-post-text-wrapper center-with-margin">
        <h2
          class="color-blue font-weight-600 font-36 line-height-54 margin-bottom-24"
        >
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h2>
        <p class="gray-color margin-bottom-24">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, Designing voice and tone for error messages.
        </p>
        <p class="gray-color margin-bottom-24">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged.
        </p>
        <p class="gray-color margin-bottom-24">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged.
        </p>
        <p class="gray-color margin-bottom-40">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, Designing voice.
        </p>
        <h4
          class="font-weight-600 font-24 line-height-36 color-blue margin-bottom-24"
        >
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h4>
        <p class="gray-color">
          Step 1: Download the plugin from Figma community, search Ghost
          UXWriter
        </p>
        <p class="gray-color">Step 2: Open the plugin on your artboard</p>
        <p class="gray-color">
          Step 3: Search for your copy or look through the different categories
          of the copies
        </p>
        <p class="gray-color">
          Step 4: Select the type of error you are looking for. You will get
          three different copies for each error
        </p>
        <p class="gray-color">
          Step 5: Tap on the cards to insert text in your frames
        </p>
        <p class="gray-color margin-bottom-40">
          And you are all geared up to make your UX copies more fun and exciting
          😎
        </p>
        <h4
          class="font-weight-600 font-24 line-height-36 color-blue margin-bottom-24"
        >
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h4>
        <p class="gray-color">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, Designing voice and tone for error messages.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import obeserveElement from "@/composables/observer";

onMounted(() => {
  obeserveElement(".blog-post-top", "fade-left");
  obeserveElement(".blog-post-bottom", "fade-right");
});
</script>

<style scoped>
@media all and (max-width: 386px) {
  img[alt="shapes"] {
    width: 100%;
  }
}

@media all and (max-width: 930px) {
  .blog-post-text-wrapper {
    width: auto;
  }
}

@media all and (max-width: 466px) {
  h2 {
    font-size: 6vw;
    line-height: normal;
  }
}
</style>

<style>
.margin-bottom-96 {
  margin-bottom: 96px;
}

.column {
  flex-direction: column;
}

.flex-end {
  justify-content: flex-end;
}

.center-with-margin {
  margin: 0 auto;
}

.blog-post-text-wrapper {
  width: 842px;
}

.margin-bottom-40 {
  margin-bottom: 40px;
}
</style>
