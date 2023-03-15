<template>
  <header class="team-member-header p160 padding-96 margin-top-81">
    <div class="member-info-wrapper center-with-margin opacity-0">
      <div class="member-image flex justify-center">
        <img
          :src="require(`@/assets/${$route.params.name}.png`)"
          alt="memeber image"
          class="display-block obj-fit-cover"
        />
      </div>
      <h3 class="font-weight-600 font-36 line-height-54 color-blue">
        {{ $route.params.name.split("-").join(" ") }}
      </h3>
      <p
        class="position-name font-weight-500 font-14 color-blue line-height-20 margin-bottom-24"
      >
        CEO
      </p>
      <p class="gray-color">
        Through True Rich Attended does no end it his mother since real had half
        every him case in packages enquire we up ecstatic unsatiable.
      </p>
      <div class="icons flex space-between">
        <a href="https://facebook.com/" target="_"
          ><img src="@/assets/facebook.png" alt="social" class="display-block"
        /></a>
        <a href="https://twitter.com/" target="_"
          ><img src="@/assets/twitter.png" alt="social" class="display-block"
        /></a>
        <a href="https://instagram.com/" target="_"
          ><img src="@/assets/instagram.png" alt="social" class="display-block"
        /></a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from "vue";
import obeserveElement from "@/composables/observer";

onMounted(() => {
  obeserveElement(".member-info-wrapper", "fade-right");
});
</script>

<style scoped>
.member-image img {
  border-radius: 50%;
}

.member-info-wrapper {
  width: 505px;
  text-align: center;
}

h3 {
  margin-top: 48px;
}

.position-name {
  opacity: 0.7;
  margin-top: 8px;
}

.icons {
  width: 101.33px;
  margin: 0 auto;
  margin-top: 32px;
}

@media all and (max-width: 560px) {
  .member-info-wrapper {
    width: auto;
  }
}

@media all and (max-width: 362px) {
  .member-image img {
    width: 100%;
  }
}
</style>
