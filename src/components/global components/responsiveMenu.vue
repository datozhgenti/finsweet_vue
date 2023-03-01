<template>
  <div class="responsive-menu absolute background-color-white p160">
    <router-link
      :to="item.to"
      class="font-weight-500 display-block color-blue"
      v-for="item in menuItems"
      :key="item.name"
      >{{ item.name }}</router-link
    >
    <arrowLink
      name="Clone project"
      color="orange"
      page-link="/contact"
      id="border-none "
      class="display-block"
      :arrow-photo="require('@/assets/right-arrow-black.png')"
      style="padding: 10px 0; opacity: 1"
    ></arrowLink>
  </div>
</template>

<script setup>
import { ref } from "vue";
import arrowLink from "./arrowLink.vue";

const menuItems = ref([
  { name: "Home", to: "/" },
  { name: "Service", to: "/service" },
  { name: "Company", to: "/company" },
  { name: "Career", to: "/career" },
  { name: "Blog", to: "/blog" },
  { name: "Contact us", to: "/contact" },
]);
</script>

<style scoped>
.responsive-menu {
  left: 0;
  right: 0;
  top: 81px;
  text-align: center;
  z-index: 10;
}

a {
  padding: 10px 0;
}

.router-link-active {
  opacity: 0.5;
}

@media all and (min-width: 1220px) {
  .responsive-menu {
    display: none;
  }
}
</style>
