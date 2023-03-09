<template>
  <section class="job-requirments-section p160">
    <div class="requirments-wrapper">
      <div class="requirments-menu flex justify-center">
        <div class="menu-btns-wrapper flex space-between align-center">
          <router-link
            :to="'/career/' + $route.params.careerName"
            class="black-color font-weight-600 font-size-24 line-height-36 display-block relative"
            >Details</router-link
          >
          <router-link
            :to="`/career/${$route.params.careerName}/requirments`"
            class="black-color font-weight-600 font-size-24 line-height-36 display-block relative"
            >Requirements</router-link
          >
          <router-link
            :to="`/career/${$route.params.careerName}/responsibilities`"
            class="black-color font-weight-600 font-size-24 line-height-36 display-block relative"
            >Responsibilities</router-link
          >
        </div>
      </div>
      <div class="requirments-text-wrapper">
        <router-view class="req-text"></router-view>
        <router-view name="reqComp"></router-view>
        <router-view name="respComp"></router-view>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.requirments-wrapper {
  background-color: #ecf8f9;
}

.menu-btns-wrapper {
  width: 626px;
}

a {
  padding: 43px 0 29px;
}

.requirments-menu {
  border-bottom: 4px solid #e0f1f2;
}

.requirments-text-wrapper {
  padding: 96px 219px 96px 198px;
}

.router-link-active {
  color: #454dfd;
}

.router-link-active::after {
  content: "";
  position: absolute;
  width: 100%;
  border-bottom: 4px solid #454dfd;
  left: 0;
  bottom: -4px;
  animation: line 0.5s ease-in;
}
</style>

<style>
@keyframes line {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.req-text li {
  animation: fade-right 1s ease forwards;
}
</style>
