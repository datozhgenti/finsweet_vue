import { createRouter, createWebHistory } from "vue-router";

import homePage from "@/pages/homePage.vue";
import servicePage from "@/pages/servicePage.vue";
import companyPage from "@/pages/companyPage.vue";
import careerPage from "@/pages/careerPage.vue";
import careerInner from "@/pages/careerInner";
import blogPage from "@/pages/blogPage.vue";
import contactPage from "@/pages/contactPage.vue";
import detailsComp from "@/components/careerInnerComponents/detailsComp.vue";
import reqComp from "@/components/careerInnerComponents/reqComp.vue";
import respComp from "@/components/careerInnerComponents/respComp.vue";
import blogInner from "@/pages/blogInner.vue";
import teamMemberPage from "@/pages/teamMemberPage.vue";

const routes = [
  { path: "/", component: homePage },
  { path: "/service", component: servicePage },
  { path: "/company", component: companyPage },
  { path: "/career", component: careerPage },
  {
    path: "/career/:careerName",
    component: careerInner,
    children: [
      { path: "details", component: detailsComp, alias: "" },
      { path: "requirments", component: reqComp },
      { path: "responsibilities", component: respComp },
    ],
  },
  { path: "/blog", component: blogPage },
  { path: "/blog/:post", component: blogInner, name: "postPage" },
  { path: "/contact", component: contactPage },
  { path: "/team-member/:name", component: teamMemberPage, name: "memberPage" },
];

export default createRouter({
  routes,
  history: createWebHistory("/finsweet_vue/"),
});
