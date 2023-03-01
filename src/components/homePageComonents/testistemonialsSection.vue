<template>
  <section
    class="testistemonials-section p160 flex space-between align-center background-testistemonials"
  >
    <div class="testistemonial-section-left">
      <div
        class="rectangle"
        style="background-color: var(--light-blue); width: 16px; height: 16px"
      ></div>
      <h2 class="color-blue font-weight-600 font-48 line-height-58">
        Our customers love what we do
      </h2>
      <p class="font-weight-500 font-18 color-blue first-paragraph">
        Transform your idea into reality with finsweet
      </p>
      <p class="gray-color">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div class="members-wrapper">
        <div class="memebers-top flex space-between">
          <img
            v-for="(member, index) in membersPhotos"
            :src="member"
            :key="member"
            class="display-block"
            :alt="`member ${index + 1}`"
          />
        </div>
        <div class="members-bottom">
          <p class="font-weight-500 font-12 black-color">
            <span class="font-16">30+</span> Customer Reviews
          </p>
        </div>
      </div>
    </div>
    <template v-for="(member, index) in membersPhotos" :key="member">
      <sliderComp
        :personImg="member"
        :indexProp="count"
        :arrayLength="membersPhotos.length"
        v-if="index === count"
        @circleClick="(n) => (count = n)"
        class="slider-responsive"
      ></sliderComp>
    </template>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import sliderComp from "../global components/sliderComp.vue";
import obeserveFunc from "@/composables/observer";

onMounted(() => {
  obeserveFunc(".testistemonial-section-left", "fade-top");
});

const count = ref(0);

let interval = null;

const membersPhotos = ref([
  require("@/assets/members1.png"),
  require("@/assets/members2.png"),
  require("@/assets/members3.png"),
]);

function incrementCount() {
  interval = setInterval(() => {
    if (count.value === membersPhotos.value.length - 1) {
      count.value = -1;
    }
    count.value++;
  }, 3000);
}

onMounted(() => {
  incrementCount();
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.testistemonials-section {
  padding-top: 102px;
  padding-bottom: 119px;
}

.testistemonial-section-left {
  width: 502px;
  opacity: 0;
}

.testistemonial-section-right {
  width: 624px;
}

h2,
.rectangle,
.first-paragraph {
  margin-bottom: 16px;
}

.members-wrapper {
  width: 168px;
  margin-top: 24px;
}

.members-bottom {
  margin-top: 14px;
}

@media all and (max-width: 1475px) {
  .testistemonials-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }

  .slider-responsive {
    width: 100%;
  }
}

@media all and (max-width: 700px) {
  .testistemonial-section-left {
    width: auto;
  }

  .testistemonials-section {
    padding-left: 3px;
  }
}

@media all and (max-width: 416px) {
  h2 {
    font-size: 6vw;
    line-height: initial;
  }
}
</style>
