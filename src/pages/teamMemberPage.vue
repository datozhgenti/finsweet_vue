<template>
  <navMenu></navMenu>
  <teamMemberHeader></teamMemberHeader>
  <blogSection
    captionProp="Blog posts from Javena"
    class="margin-bottom-96"
  ></blogSection>
  <footerComp></footerComp>
</template>

<script setup>
import navMenu from "@/components/global components/navMenu.vue";
import teamMemberHeader from "@/components/teamMemberPageComponents/teamMemberHeader.vue";
import blogSection from "@/components/homePageComonents/blogSection.vue";
import footerComp from "@/components/homePageComonents/footerComp.vue";
</script>

<style></style>
