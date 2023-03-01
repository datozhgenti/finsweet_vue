<template>
  <div class="cta-comp flex">
    <div class="blue-box flex space-between align-center relative">
      <div class="blue-box-right">
        <p
          class="color-white font-weight-500 font-14 letter-spacing-3 capitalize"
        >
          NEWSLETTER
        </p>
        <h3 class="color-white font-weight-600 font-36 line-height-54">
          Subscribe our News Letter to get Latest Updates.
        </h3>
      </div>
      <div class="form-wrapper">
        <form @submit.prevent="">
          <input type="email" placeholder="Paresh@Pixeto.com" />
        </form>
      </div>
      <img src="@/assets/cta-shapes.png" alt="shapes" class="absolute" />
    </div>
    <div>
      <img
        src="@/assets/about-shapes.png"
        alt="shapes"
        class="display-block"
        height="333"
        width="24"
      />
    </div>
  </div>
</template>

<script setup>
import obeserveFunc from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveFunc(".cta-comp", "fade-left");
});
</script>

<style scoped>
.blue-box {
  background-color: var(--light-blue);
  padding: 96px;
  width: 1256px;
}

.blue-box-right {
  width: 488px;
}

.cta-comp {
  opacity: 0;
}

.form-wrapper {
  width: 454px;
}

input {
  display: block;
  width: 100%;
  height: 64px;
  padding: 20px 0 20px 29px;
}

input:focus {
  outline: none;
  border: none;
}

.blue-box img {
  top: 0;
  left: 0;
}

@media all and (max-width: 1490px) {
  .blue-box {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
  }
}

@media all and (max-width: 890px) {
  .blue-box-right {
    width: 100%;
  }

  .form-wrapper {
    width: 100%;
  }
}

@media all and (max-width: 435px) {
  .blue-box {
    padding: 50px;
    width: 100%;
  }
}

@media all and (max-width: 582px) {
  .blue-box-right h3 {
    font-size: 6vw;
    line-height: initial;
    margin: 10px 0;
  }

  .blue-box {
    justify-content: initial;
  }

  p {
    margin-top: 10px;
  }

  input {
    padding: 4px;
  }
}
</style>
