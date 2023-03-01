<template>
  <section
    class="feature p160 flex align-center space-between"
    v-bind="$attrs"
    :id="idProp"
  >
    <div class="feature-text" v-bind="$attrs">
      <h4 class="font-24 font-weight-600 black-color">{{ captionProp }}</h4>
      <h3 class="font-weight-600 font-36 line-height-54 color-blue">
        {{ subcaptionProp }}
      </h3>
      <p class="gray-color">
        {{ textProp }}
      </p>
    </div>
    <div class="feature-img">
      <img :src="imgUrl" alt="feature 1" class="display-block" />
    </div>
  </section>
</template>

<script setup>
/* eslint-disable */
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

defineProps(["imgUrl", "captionProp", "subcaptionProp", "textProp", "idProp"]);

onMounted(() => {
  obeserveFunc(".feature-text", "fade-top");
  obeserveFunc(".feature-img", "fade-left");
});
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<style scoped>
.feature {
  padding-bottom: 96px;
}

.feature-text,
.feature-img {
  opacity: 0;
}

.feature-text {
  width: 624px;
}

h3 {
  margin-top: 16px;
  margin-bottom: 24px;
}

@media all and (max-width: 1480px) {
  .feature {
    flex-direction: column;
    align-items: flex-start;
  }

  img,
  .feature-text {
    margin-top: 20px;
    width: auto;
  }

  h3 {
    font-size: 5vw;
    line-height: initial;
  }

  .changeOrder {
    order: initial;
  }
}

@media all and (max-width: 560px) {
  img {
    width: 100%;
  }
}
</style>
