<template>
  <div class="author flex">
    <div class="flex align-center">
      <img :src="imgProp" alt="author image" class="display-block" />
    </div>
    <div>
      <p class="name font-weight-400 font-16">{{ nameProp }}</p>
      <p class="date font-weight-500 font-14 color-blue line-height-20">
        {{ dateProp }}
      </p>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
defineProps(["imgProp", "nameProp", "dateProp"]);
</script>

<style scoped>
p.name {
  color: #232536;
  opacity: 0.87;
}

p.date {
  color: #232536;
  opacity: 0.6;
}

.author {
  gap: 12px;
}
</style>
