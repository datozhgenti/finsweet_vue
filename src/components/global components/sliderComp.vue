<template>
  <div class="testistemonial-section-right relative">
    <transition name="slide" appear="" mode="out-in">
      <div class="top flex">
        <div class="left">
          <img
            src="@/assets/about-shapes.png"
            class="display-block"
            alt="shapes"
            height="340"
          />
        </div>
        <div class="right background-color-white relative">
          <img
            src="@/assets/quote.png"
            alt="quotes icon"
            class="absolute quote-icon"
          />
          <img
            src="@/assets/testistemonialsLogo.png"
            alt="union 2"
            class="absolute union2-icon"
          />
          <h4 class="font-weight-600 font-24 line-height-36 color-blue">
            Finsweet has been a wonderful partner to work with. I have been a
            customer now for the past few months now and I have had nothing but
            positive experiences!
          </h4>
          <div class="person-wrapper flex space-between">
            <div class="flex align-center">
              <img :src="personImg" alt="memebe 1" width="38" height="38" />
            </div>
            <div>
              <h6 class="black-color font-16">Johnny Andro</h6>
              <p class="font-weight-500 font-14 color-blue opacity-60">
                Director, Company
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <div class="circles-wrapper absolute flex">
      <div
        v-for="n in arrayLength"
        :key="n"
        class="background-color-blue"
        :class="[indexProp === n - 1 ? '' : 'opacity-20']"
        @click="$emit('circleClick', n - 1)"
      ></div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
defineProps(["personImg", "indexProp", "arrayLength"]);
defineEmits(["circleClick"]);
</script>

<style scoped>
/* right section styling */

.testistemonial-section-right .right {
  flex-grow: 1;
  padding: 48px 69px 42px 41px;
}

.quote-icon {
  bottom: 329px;
  right: 40px;
}

.union2-icon {
  bottom: 42.5px;
  right: 42.3px;
}

/* person div styling */

.person-wrapper {
  margin-top: 24px;
  width: 187px;
}

/* circles styling */

.circles-wrapper {
  margin-top: 24px;
  left: 50%;
  gap: 10px;
  transform: translate(-50%);
}

.circles-wrapper div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
}

.slide-enter-from {
  transform: translateX(-40px);
  opacity: 0;
}

.slide-enter-active {
  transition: all 1s ease-in-out;
}

@media all and (max-width: 552px) {
  .quote-icon {
    display: none;
  }

  h4 {
    font-size: 4.9vw;
    line-height: initial;
  }
}

@media all and (max-width: 450px) {
  .union2-icon {
    display: none;
  }
}
</style>
