<template>
  <footer class="p160">
    <div class="top-shape-wrapper">
      <img
        src="@/assets/btn-shapes.svg"
        alt="shapes"
        width="36.72"
        height="34"
        class="display-block"
      />
    </div>
    <div class="footer-top flex space-between relative">
      <div class="absolute footer-arrow-link flex align-center">
        <div>
          <img
            src="@/assets/arrow-link-shape.png"
            class="display-block"
            alt=""
          />
        </div>
        <arrow-link
          class="font-weight-500"
          name="Contact Us"
          color="var(--blue-color)"
          :arrow-photo="require('@/assets/right-arrow-black.png')"
          page-link="/contact"
        ></arrow-link>
      </div>

      <div class="left">
        <h2 class="color-blue font-weight-600 font-48 line-height-58">
          Let's make something special
        </h2>
        <h4 class="font-weight-600 font-24 line-height-36 color-blue">
          Let's talk! 🤙
        </h4>
        <div class="number-wrapper">
          <a
            class="font-weight-500 font-18 color-blue first-paragraph display-block"
            href="tel:+995591404227"
          >
            020 7993 2905
          </a>
        </div>
        <div class="email-wrapper">
          <a
            class="font-weight-500 font-18 color-blue first-paragraph display-block"
            href="mailto:datozhgenti1998@gmail.com"
          >
            hi@finsweet.com
          </a>
        </div>
        <div class="location-wrapper">
          <p class="font-weight-500 font-14 color-blue line-height-20">
            DLF Cybercity, Bhubaneswar, India, &52050
          </p>
        </div>
      </div>
      <div class="right flex justify-center">
        <div class="right-content space-between flex">
          <div class="first-row">
            <div v-for="item in firstRowItems" :key="item">
              <router-link
                class="color-blue font-16 font-weight-600 line-height-28"
                :to="item.to"
                >{{ item.name }}</router-link
              >
            </div>
          </div>
          <hr />
          <div class="second-row">
            <h6 class="color-blue font-16 font-weight-600 line-height-28">
              Service
            </h6>
            <div v-for="item in secondRowItems" :key="item">
              <router-link
                :to="item.to"
                class="font-weight-500 font-14 color-blue"
                >{{ item.name }}</router-link
              >
            </div>
          </div>
          <div class="third-row">
            <h6 class="color-blue font-16 font-weight-600 line-height-28">
              Resourses
            </h6>
            <div v-for="item in thirdRowItems" :key="item">
              <router-link
                :to="item.to"
                class="font-weight-500 font-14 color-blue"
                >{{ item.name }}</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div
    class="footer-bottom background-color-pink p160 flex space-between align-center"
  >
    <div class="left flex align-center">
      <div>
        <router-link to="/" class="display-block">
          <img
            src="@/assets/finsweet-footer.png"
            alt="finsweet icon"
            class="display-block"
          />
        </router-link>
      </div>
      <div class="flex align-center">
        <p class="font-weight-500 black-color">©2021 Finsweet</p>
      </div>
    </div>
    <div class="right flex align-center">
      <a
        v-for="icon in icons"
        :key="icon"
        target="_"
        :href="icon.to"
        class="display-block"
      >
        <img
          :src="icon.imgURL"
          :alt="`${icon.name} icon`"
          class="display-block"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import arrowLink from "../global components/arrowLink.vue";
import { ref } from "vue";
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveFunc(".footer-top .left", "fade-right");
  obeserveFunc(".first-row", "fade-left");
  obeserveFunc(".second-row", "fade-left");
  obeserveFunc(".third-row", "fade-left");
  obeserveFunc(".footer-arrow-link", "fade-right");
  obeserveFunc(".footer-bottom .left", "fade-top");
  obeserveFunc(".footer-bottom .right", "fade-top");
});

const firstRowItems = ref([
  { name: "Home", to: "/" },
  { name: "Service", to: "/service" },
  { name: "Company", to: "/company" },
  { name: "Career", to: "/career" },
  { name: "News", to: "/blog" },
]);

const secondRowItems = ref([
  { name: "Technical support", to: "/service" },
  { name: "Testing", to: "/service" },
  { name: "Development", to: "/service" },
  { name: "AWS/Azure", to: "/service" },
  { name: "Consulting", to: "/service" },
  { name: "Information Technology", to: "/service" },
]);

const thirdRowItems = ref([
  { name: "About Us", to: "/company" },
  { name: "Testimonial", to: "/" },
  { name: "Privacy Policy", to: "/privacy-policy" },
  { name: "Terms of use", to: "/" },
  { name: "Blog", to: "/blog" },
]);

const icons = ref([
  {
    name: "facebook",
    to: "https://www.facebook.com/",
    imgURL: require("@/assets/facebook.png"),
  },
  {
    name: "twitter",
    to: "https://www.twitter.com/",
    imgURL: require("@/assets/twitter.png"),
  },
  {
    name: "instagram",
    to: "https://www.instagram.com/",
    imgURL: require("@/assets/instagram.png"),
  },
  {
    name: "linkedin",
    to: "https://www.linkedin.com/",
    imgURL: require("@/assets/linkedin.png"),
  },
]);
</script>

<style scoped>
/* footer top styling */
.top-shape-wrapper img {
  top: 0;
  left: 0;
  margin-bottom: 32px;
}

hr {
  display: none;
}

.footer-top .left {
  width: 453px;
  opacity: 0;
}

h2 {
  margin-bottom: 40px;
}

h4 {
  margin-bottom: 28px;
}

.location-wrapper {
  width: 207px;
}

.number-wrapper {
  margin-bottom: 4px;
}

.email-wrapper {
  margin-bottom: 30px;
}

.footer-top .right {
  flex-grow: 1;
}

.right-content {
  width: 505px;
}

.first-row div:not(div:last-child) {
  margin-bottom: 12px;
}

.second-row div:not(div:last-child) {
  margin-bottom: 12px;
}

.third-row div:not(div:last-child) {
  margin-bottom: 12px;
}

.first-row,
.second-row,
.third-row,
.footer-arrow-link,
.footer-bottom .left,
.footer-bottom .right {
  opacity: 0;
}

.second-row h6 {
  margin-bottom: 13px;
}

.third-row h6 {
  margin-bottom: 8px;
}

.footer-arrow-link {
  bottom: 0;
  right: 0;
  gap: 8px;
}

/* footer bottom styling */

.footer-bottom {
  margin-top: 64px;
  padding-top: 28px;
  padding-bottom: 27.7px;
}

.footer-bottom .left {
  gap: 42px;
  height: 26px;
}

.footer-bottom .left p {
  padding-top: 5px;
}

.footer-bottom .right {
  gap: 26.67px;
}

@media all and (max-width: 1390px) {
  .footer-top {
    flex-direction: column;
  }

  .footer-top .right {
    justify-content: flex-start;
    margin-top: 40px;
  }
}

@media all and (max-width: 670px) {
  .footer-top .left {
    width: auto;
  }
}

@media all and (max-width: 530px) {
  .footer-bottom {
    flex-direction: column;
    gap: 40px;
  }
}

@media all and (max-width: 768px) {
  .footer-arrow-link {
    position: static;
    order: 4;
    margin-top: 40px;
  }
}

@media all and (max-width: 425px) {
  .footer-top .right-content {
    flex-direction: column;
    gap: 20px;
  }

  hr {
    display: initial;
  }
}

@media all and (max-width: 323px) {
  .footer-bottom p {
    font-size: 14px;
  }
}
</style>
