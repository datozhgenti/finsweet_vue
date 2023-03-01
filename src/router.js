import { createRouter, createWebHistory } from "vue-router";

import homePage from "@/pages/homePage.vue";
import servicePage from "@/pages/servicePage.vue";
import companyPage from "@/pages/companyPage.vue";
import careerPage from "@/pages/careerPage.vue";
import blogPage from "@/pages/blogPage.vue";
import contactPage from "@/pages/contactPage.vue";

const routes = [
  { path: "/", component: homePage },
  { path: "/service", component: servicePage },
  { path: "/company", component: companyPage },
  { path: "/career", component: careerPage },
  { path: "/blog", component: blogPage },
  { path: "/contact", component: contactPage },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
