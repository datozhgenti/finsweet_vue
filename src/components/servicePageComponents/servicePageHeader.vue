<template>
  <header class="p160 margin-top-81 flex background-color-pink align-center">
    <div class="header-left">
      <servicesCaption
        :show-gray-text="true"
        :margin-prop="0"
        class="serviceCap"
        style="width: 628px"
      ></servicesCaption>
    </div>
    <div class="header-right flex justify-center align-center">
      <div>
        <a
          v-for="(link, index) in links"
          :key="link"
          :href="'#' + link.split(' ')[0]"
          class="service-link font-24 font-weight-600 display-block color-blue align-center"
          :class="[index === 1 ? 'flex' : '']"
          >{{ link }}
          <span
            ><img
              :class="[index === 1 ? 'display-block' : 'display-none']"
              src="@/assets/right-arrow-black.png"
              alt="right arrow"
          /></span>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import servicesCaption from "../global components/servicesCaption.vue";
import observerFunc from "@/composables/observer";
import { ref, onMounted } from "vue";

onMounted(() => {
  observerFunc(".header-left", "fade-right");
  observerFunc(".service-link", "fade-left");
});

const links = ref([
  "Technical support",
  "Development",
  "AWS / Azure",
  "Consulting",
  "Information Technology",
]);
</script>

<style scoped>
header {
  padding-top: 96px;
  padding-bottom: 62px;
}

a:not(:last-child) {
  margin-bottom: 16px;
}

.header-right {
  flex-grow: 1;
}

a,
.header-left {
  opacity: 0;
}

span {
  margin-left: 16px;
}

@media all and (max-width: 1243px) {
  header {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 20px;
  }

  .header-right {
    margin-top: 40px;
  }

  .serviceCap {
    width: auto !important;
  }
}

@media all and (max-width: 333px) {
  a {
    font-size: 6vw;
  }
}
</style>

<style>
.serviceCap {
  width: 628px;
}
</style>
