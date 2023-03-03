<template>
  <section class="careers p160">
    <div class="vacancies-wrapper flex space-between">
      <vacanciesCard
        v-for="vacancy in vacancies"
        :key="vacancy"
        :nameProp="vacancy.name"
        :firstProp="vacancy.firstLine"
        :secondProp="vacancy.secondLine"
      ></vacanciesCard>
    </div>
  </section>
</template>

<script setup>
import vacanciesCard from "../global components/vacanciesCard.vue";
import { ref } from "vue";

const vacancies = ref([
  {
    name: "Full Stack Developer",
    firstLine: "Bengaluru · Full Time",
    secondLine: "$10K - $18K · No equity",
  },
  {
    name: "Testing Engineer",
    firstLine: "Remote · Full Time",
    secondLine: "$08K - $10K · No equity",
  },
  {
    name: "Hr Manager",
    firstLine: "Mumbai . Fultime",
    secondLine: "$08K - $10K · 4 to 5 Yrs Exp",
  },
  {
    name: "Product Designer",
    firstLine: "Mumbai . Fultime",
    secondLine: "$08K - $10K · 4 to 5 Yrs Exp",
  },
  {
    name: "Wordpress Developer",
    firstLine: "Mumbai, Full Time",
    secondLine: "$08K - $10K · 4 to 5 Yrs Exp",
  },
  {
    name: "Jr. QA Tester",
    firstLine: "California, USA . Full Time",
    secondLine: "$14K - $23K · No equity",
  },
  {
    name: "Sr. UX Designer",
    firstLine: "California, USA . Full Time",
    secondLine: "$14K - $23K · No equity",
  },
  {
    name: "Social Media Manager",
    firstLine: "Kolkata, India .  Fulltime",
    secondLine: "$5K - $6K ·  Fresher  ",
  },
  {
    name: "Golang Developer",
    firstLine: "Mumbai . Fultime",
    secondLine: "$08K - $10K · 4 to 5 Yrs Exp",
  },
]);
</script>

<style scoped>
.vacancies-wrapper {
  background-color: #ecf8f9;
  padding: 78px;
  padding-left: 76px;
  row-gap: 32px;
  flex-wrap: wrap;
}

@media all and (max-width: 1565px) {
  .vacancies-wrapper {
    justify-content: space-evenly;
  }
}

@media all and (max-width: 472px) {
  .vacancies-wrapper {
    padding: 20px;
  }
}
</style>
