<template>
  <nav class="p160 flex space-between align-center background-color-blue fixed">
    <div>
      <router-link to="/" class="display-block" id="border-none">
        <img
          src="@/assets/finsweet_logo.svg"
          class="display-block"
          alt="finsweet logo"
        />
      </router-link>
    </div>
    <div class="menu-items">
      <router-link
        :to="item.to"
        class="opacity-60 font-weight-500"
        v-for="item in menuItems"
        :key="item.name"
        >{{ item.name }}</router-link
      >
      <arrowLink
        name="Clone project"
        color="var(--secondary-orange)"
        page-link="/contact"
        id="border-none"
      ></arrowLink>
    </div>
    <div class="burger-btn-wrapper">
      <span
        @click="responsiveNavActive = !responsiveNavActive"
        class="material-symbols-outlined burger-btn color-white"
      >
        menu
      </span>
    </div>
    <transition name="menu">
      <responsiveMenu v-if="responsiveNavActive"></responsiveMenu>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import arrowLink from "./arrowLink.vue";
import responsiveMenu from "./responsiveMenu.vue";

const responsiveNavActive = ref(false);

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
nav {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.burger-btn {
  cursor: pointer;
}

.burger-btn-wrapper {
  display: none;
}

a:not(a:last-child) {
  margin-right: 32px;
}

a {
  padding-top: 27px;
  padding-bottom: 28.29px;
  position: relative;
}

.router-link-active {
  opacity: 1;
}

.router-link-active:before {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid var(--active-link-top-border);
  position: absolute;
  animation: border-anim 500ms forwards linear;
}

@keyframes border-anim {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@media all and (max-width: 1220px) {
  .menu-items {
    display: none;
  }

  .burger-btn-wrapper {
    display: block;
  }
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

.menu-enter-active,
.menu-leave-active {
  transition: all 1s;
}
</style>

<style>
@media all and (max-width: 1220px) {
  .p160 {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
