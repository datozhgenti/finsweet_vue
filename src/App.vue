<template>
  <teleport to="body">
    <popupComp></popupComp>
    <preloaderComp></preloaderComp>
  </teleport>

  <router-view></router-view>
</template>

<script>
export default {};
</script>

<script setup>
import preloaderComp from "./components/global components/preloaderComp.vue";
import popupComp from "./components/global components/popupComp.vue";
</script>

<style>
/* font import */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

/* css variables */

:root {
  --blue-color: #232536;
  --btn-blue: #444cfc;
  --light-blue: #666dff;
  --white-color: #ffffff;
  --secondary-orange: #ffd3af;
  --gray-color: rgba(255, 255, 255, 0.06);
  --active-link-top-border: #ffa155;
  --black-color: #000000;
  --p-gray-color: #5d5f6d;
  --expertise-background-color: #ecf8f9;
  --services-background-color: #ffe6d2;
  --border-color: #2325362b;
  --lines-color: #dadadd;
  --testistemonials-background: #f9f9ff;
}

/* body styles */

body,
html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* styles for all tags */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

/* all image styles */

/* 160px left and right padding */
.p160 {
  padding: 0 160px;
}

.p161 {
  padding: 0 161px;
}

/* a tage default styles delete */
a {
  text-decoration: none;
  color: var(--white-color);
}

/* global classes */

/* displays */

.grid {
  display: grid;
}

.display-block {
  display: block;
}

.flex {
  display: flex;
}

.display-none {
  display: none;
}

/* flex wraps*/

.wrap {
  flex-wrap: wrap;
}

/* opacities */

.opacity-60 {
  opacity: 0.6;
}

.opacity-20 {
  opacity: 0.2;
}

.opacity-0 {
  opacity: 0;
}

/* font-weghts */

.font-weight-500 {
  font-weight: 500;
}

.font-weight-600 {
  font-weight: 600;
}

/* justify-contents */

.space-between {
  justify-content: space-between;
}

.justify-center {
  justify-content: center;
}

.justify-end {
  justify-content: flex-end;
}

/* align-items */

.align-center {
  align-items: center;
}

.baseline {
  align-items: baseline;
}

/* pseudo-classes */

#border-none:before {
  content: "";
  display: none;
}

/* background-colors */

.background-color-blue {
  background: var(--blue-color);
}

.background-color-cyan {
  background-color: var(--expertise-background-color);
}

.background-color-white {
  background-color: var(--white-color);
}

.background-color-pink {
  background-color: var(--services-background-color);
}

.background-testistemonials {
  background-color: var(--testistemonials-background);
}

/* colors */

.black-color {
  color: var(--black-color);
}

.color-blue {
  color: var(--blue-color);
}

.gray-color {
  color: var(--p-gray-color);
}

.color-white {
  color: var(--white-color);
}

/* letter spacings */

.letter-spacing-3 {
  letter-spacing: 3px;
}

/* font-sizes */

.font-48 {
  font-size: 48px;
}

.font-36 {
  font-size: 36px;
}

.font-14 {
  font-size: 14px;
}

.font-16 {
  font-size: 16px;
}

.font-12 {
  font-size: 12px;
}

.font-24 {
  font-size: 24px;
}

/* text-alings */

.text-align-center {
  text-align: center;
}

/* gaps */

.gapX-93 {
  gap: 93px;
}

.gapX-11 {
  gap: 11px;
}

.gapX-66 {
  gap: 66px;
}

.gapX-16 {
  gap: 16px;
}

.gapX-141 {
  gap: 141px;
}

/* 24x24 rectangle styles */

.rectangle {
  width: 24px;
  height: 24px;
  background-color: var(--gray-color);
}

/* margins */

#bottom32 {
  margin-bottom: 32px;
}

.margin-top-81 {
  margin-top: 81.28px;
}

#margin-top-0 {
  margin-top: 0;
}

/* text-transforms */
.capitalize {
  text-transform: uppercase;
}

/* line-heights */

.line-height-58 {
  line-height: 58px;
}

.line-height-68 {
  line-height: 68px;
}

.line-height-36 {
  line-height: 36px;
}

.line-height-54 {
  line-height: 54px;
}

.line-height-20 {
  line-height: 20px;
}

.line-height-28 {
  line-height: 28px;
}

/* paddings */

.padding-96 {
  padding-top: 96px;
  padding-bottom: 96px;
}

/* positions */

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.fixed {
  position: fixed;
}

/* widths and heights */

.w100 {
  width: 100%;
}

.h100 {
  height: 100%;
}

/* image styles */

.obj-fit-cover {
  object-fit: cover;
}

/* animation keyframes */

@keyframes fade-right {
  from {
    transform: translateX(-200px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-left {
  from {
    transform: translateX(200px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-bottom {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-top {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* animation classes */

.fade-left {
  animation: fade-left 1s forwards ease;
}

.fade-right {
  animation: fade-right 1s forwards ease;
}

.fade-bottom {
  animation: fade-bottom 1s forwards ease;
}

.fade-top {
  animation: fade-top 1s forwards ease;
}
</style>
