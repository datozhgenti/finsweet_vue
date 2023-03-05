<template>
  <div class="post-author flex">
    <div class="name flex align-center">
      <img src="@/assets/andrew.png" alt="andrew" class="display-block" />
      <p class="font-weight-400 font-16">Andrew Jonson</p>
    </div>
    <div class="post-date flex align-center">
      <p class="gray-color">Posted on 27th January 2021</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.name p {
  color: #232536;
  margin-left: 12px;
  margin-right: 16px;
}

.post-date {
  margin-left: 16px;
}

.post-author {
  margin-top: 40px;
  margin-bottom: 49px;
}

.name:after {
  content: "";
  border-right: 1px solid #00000033;
  height: 16px;
}
</style>
