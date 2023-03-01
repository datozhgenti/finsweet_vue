<template>
  <div
    class="relative procces-item"
    :class="[numb === 2 || numb === 5 ? 'lines' : '']"
  >
    <img
      v-if="numb === 6"
      src="@/assets/process-shapes.png"
      alt="process shape"
      class="display-block procces-item-shape"
    />
    <div class="flex gapX-16 procces-item-content">
      <div>
        <img :src="imgUrl" :alt="captionProp + ' image'" />
      </div>
      <div>
        <h6 class="black-color font-16">{{ captionProp }}</h6>
        <p class="gray-color">
          We aim to attain the greatest satisfaction for our clients and be one
          of the prominent.
        </p>
      </div>
    </div>
    <span class="color-blue opacity-20 font-24 font-weight-600 absolute"
      >0{{ numb }}</span
    >
    <img
      v-if="numb === 1"
      src="@/assets/process-shapes.png"
      alt="process shape"
      class="display-block procces-item-shape"
    />
  </div>
</template>

<script setup>
/* eslint-disable */
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveFunc(".procces-item", "fade-bottom", true);
});

defineProps(["imgUrl", "captionProp", "numb"]);
</script>

<style scoped>
.procces-item {
  background: white;
}
.procces-item-content {
  height: 164px;
  border: 1px solid var(--border-color);
  padding: 32px 11px 28px 32px;
}

h6 {
  margin-bottom: 6px;
}

span {
  top: 12px;
  right: 16px;
}

.lines:before {
  content: "";
  position: absolute;
  width: 48px;
  border: 2px dashed var(--lines-color);
  top: 50%;
  left: -20px;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.lines::after {
  content: "";
  position: absolute;
  width: 48px;
  border: 2px dashed var(--lines-color);
  top: 50%;
  right: -71px;
  transform: translate(-50%, -50%);
  z-index: -1;
}

@media all and (max-width: 1220px) {
  .lines::after {
    content: "";
    display: none;
  }

  .lines::before {
    content: "";
    display: none;
  }
}

@media all and (max-width: 888px) {
  .procces-item-content {
    flex-direction: column;
    height: auto;
    text-align: center;
    padding-right: 28px;
  }
}

@media all and (max-width: 436px) {
  .procces-item-shape {
    width: 100%;
  }
}
</style>
