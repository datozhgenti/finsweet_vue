<template>
  <header class="p160 margin-top-81 padding-96 text-align-center relative">
    <div class="header-top opacity-0">
      <p
        class="black-color font-weight-500 font-14 letter-spacing-3 capitalize"
        style="margin-bottom: 24px"
      >
        CAREER AT FINSWEET
      </p>
      <h2
        class="color-blue font-weight-600 font-48 line-height-58"
        style="margin-bottom: 24px"
      >
        We hired people who are Always Passionate about what they do
      </h2>
      <p class="gray-color">
        Through True Rich Attended does no end it his mother since real had half
        every him case in packages enquire we up ecstatic unsatiable saw .
      </p>
    </div>
    <div class="shape absolute">
      <img src="@/assets/btn-shapes.svg" alt="shapes" width="48" height="52" />
    </div>
    <div class="header-bottom">
      <div class="careers-img-wrapper opacity-0">
        <img
          src="@/assets/careers_img.png"
          alt="careers image"
          class="display-block"
        />
      </div>
      <div class="cta-wrapper opacity-0">
        <p
          class="font-weight-500 font-18 color-blue"
          style="margin-bottom: 16px"
        >
          See Our open positions
        </p>
        <p>👇</p>
      </div>
    </div>
  </header>
</template>

<script setup>
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveFunc(".header-top", "fade-right");
  obeserveFunc(".careers-img-wrapper", "fade-left");
  obeserveFunc(".cta-wrapper", "fade-top");
});
</script>

<style scoped>
.header-top {
  width: 49%;
  margin: 0 auto;
}

.header-bottom {
  margin-top: 64px;
}

.shape img {
  transform: rotate(90deg);
}

.shape {
  top: 95px;
  right: 160px;
}

.careers-img-wrapper img {
  max-width: 100%;
  margin: 0 auto;
}

.cta-wrapper {
  margin-top: 80px;
}

@media all and (max-width: 1445px) {
  h2 {
    font-size: 6vw;
    line-height: normal;
  }

  .header-top {
    width: auto;
  }
}

@media all and (max-width: 675px) {
  .shape {
    display: none;
  }
}
</style>
