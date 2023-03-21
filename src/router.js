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
import privacyPolicy from "@/pages/privacyPolicy.vue";
import notFoundPage from "@/pages/notFoundPage.vue";

const teamMembers = [
  "Ricardo-Diaz",
  "Liam-Nison",
  "Oliver-Queen",
  "Barry-Allen",
  "Bruce-Wayne",
  "John-Diggle",
  "Peter-Parker",
  "Clark-Kent",
];

const professions = [
  "Full-Stack-Developer",
  "Testing-Engineer",
  "Hr-Manager",
  "Product-Designer",
  "Wordpress-Developer",
  "Jr.-QA-Tester",
  "Sr.-UX-Designer",
  "Social-Media-Manager",
  "Golang-Developer",
];

const posts = [
  "Today's-best-design-trends-for-digital-products",
  "A-practical-guide-to-building-a-brand-strategy",
  "Breaking-the-code-How-did-we-build-our-Figma-plugin",
  "Great-design-expectations-prejudice-in-digital-products-in-Next-Year",
  "We-aim-to-attain-the-greatest-satisfaction-for-our-clients",
];

const routes = [
  { path: "/", component: homePage, meta: { available: true } },
  { path: "/service", component: servicePage },
  { path: "/company", component: companyPage },
  { path: "/career", component: careerPage },
  {
    path: "/career/:careerName",
    component: careerInner,
    beforeEnter: (to, _, next) => {
      if (professions.includes(to.params.careerName)) {
        next();
      } else {
        next("/404");
      }
    },
    children: [
      { path: "details", component: detailsComp, alias: "", name: "details" },
      { path: "requirments", component: reqComp, name: "requirments" },
      {
        path: "responsibilities",
        component: respComp,
        name: "responsibilities",
      },
    ],
  },
  { path: "/blog", component: blogPage },
  {
    path: "/blog/:post",
    component: blogInner,
    name: "postPage",
    beforeEnter: (to, _, next) => {
      if (posts.includes(to.params.post)) {
        next();
      } else {
        next("/404");
      }
    },
  },
  { path: "/contact", component: contactPage },
  {
    path: "/team-member/:name",
    component: teamMemberPage,
    name: "memberPage",
    beforeEnter: (to, _, next) => {
      if (teamMembers.includes(to.params.name)) {
        next();
      } else {
        next("/404");
      }
    },
  },
  { path: "/privacy-policy", component: privacyPolicy },
  { path: "/:pathMatch(.*)*", redirect: "/404" },
  { path: "/404", component: notFoundPage },
];

const router = createRouter({
  routes,
  history: createWebHistory("/finsweet_vue/"),
  scrollBehavior: (to, from, savedPosition) => {
    if (
      (to.name === "details" ||
        to.name === "requirments" ||
        to.name === "responsibilities") &&
      from.path !== "/career"
    ) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
