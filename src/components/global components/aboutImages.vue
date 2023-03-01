<template>
  <div class="about-middle grid gapX-11">
    <div
      v-for="(img, index) in aboutImages"
      :key="img"
      :class="[index === 2 ? 'flex' : 'display-block']"
    >
      <img
        :src="img"
        class="display-block about-img"
        :alt="`about image ${index + 1}`"
        :id="index === 2 ? 'third-picture' : ''"
      />
      <img
        src="@/assets/about-shapes.png"
        v-if="index === 2"
        alt="about shapes"
        class="about-shapes"
        :style="{ display: displayProp }"
      />
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref } from "vue";
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveFunc(".about-img", "fade-left");
});

defineProps(["displayProp"]);

const aboutImages = ref([
  require("@/assets/about-img1.png"),
  require("@/assets/about-img2.png"),
  require("@/assets/about-img3.png"),
]);
</script>

<style scoped>
.about-middle {
  margin-top: 50px;
  grid-template-columns: repeat(3, 1fr);
}

.about-img {
  object-fit: cover;
  width: 418px;
  height: 446px;
  opacity: 0;
}

@media all and (max-width: 1450px) {
  .about-middle {
    grid-template-columns: 100%;
  }

  .about-middle div {
    display: flex;
    justify-content: center;
  }

  .about-img {
    width: 100%;
    height: auto;
  }

  #third-picture {
    width: 97%;
  }

  .about-shapes {
    width: 3%;
  }
}
</style>
