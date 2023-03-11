<template>
  <header
    class="career-inner-header margin-top-81 padding-96 p160 flex space-evently wrap"
  >
    <div class="left">
      <div class="career-name-wrapper opacity-0">
        <p
          class="black-color font-weight-500 font-14 letter-spacing-3 capitalize"
          style="margin-bottom: 24px"
        >
          CAREER AT Ether
        </p>
        <h2
          class="color-blue font-weight-600 font-48 line-height-58"
          style="margin-bottom: 16px"
        >
          {{ $route.params.careerName.split("-").join(" ") }}
        </h2>
        <div class="gray-text-color-wrapper">
          <p class="gray-color">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages.
          </p>
        </div>
        <div class="blue-btn-wrapper">
          <blueBtn btnName="Apply Now">
            <a href="#apply-form" class="absolute display-block"></a>
          </blueBtn>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="job-description relative opacity-0">
        <h4 class="font-weight-600 color-blue font-size-24 line-height-36">
          Job Description
        </h4>
        <p class="black-color line-height-24">
          Remote, India , 4 to 5 Years Of Experience
        </p>
        <p class="black-color line-height-24">
          Department: Product Engineering
        </p>
        <p class="black-color line-height-24" id="margin-bottom-0">
          Full Time 5 Position Available.
        </p>
        <img
          src="@/assets/shape4852.png"
          alt="shapes"
          class="absolute display-block"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import blueBtn from "../global components/blueBtn.vue";
import { onMounted } from "vue";
import obeserveElement from "@/composables/observer";

onMounted(() => {
  obeserveElement(".career-name-wrapper", "fade-right");
  obeserveElement(".job-description", "fade-left");
});
</script>

<style scoped>
.blue-btn-wrapper {
  margin-top: 40px;
}

.career-name-wrapper {
  margin-top: 31px;
}

.gray-text-color-wrapper {
  width: 430px;
}

.job-description {
  background-color: #ffe0c7;
  padding: 82px 0 78px 80px;
  width: 515px;
}

.job-description img {
  top: 0;
  right: 0;
}

.job-description p {
  margin-bottom: 16px;
}

h4 {
  margin-bottom: 24px;
}

a {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.left {
  margin-right: 20px;
}

@media all and (max-width: 1398px) {
  header {
    row-gap: 40px;
    justify-content: space-between;
  }
}

@media all and (max-width: 550px) {
  .job-description {
    width: auto;
    padding: 30px;
  }

  .gray-text-color-wrapper {
    width: auto;
  }

  h2 {
    font-size: 6vw;
    line-height: normal;
  }
}
</style>

<style>
.font-size-24 {
  font-size: 24px;
}

.line-height-24 {
  line-height: 24px;
}

#margin-bottom-0 {
  margin-bottom: 0;
}

.space-evently {
  justify-content: space-evenly;
}
</style>
