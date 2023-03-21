<template>
  <section class="apply-section p160" id="apply-form">
    <div>
      <h3
        class="color-blue font-weight-600 font-36 line-height-54"
        style="margin-bottom: 29px"
      >
        Apply Now
      </h3>
    </div>
    <div>
      <form @submit.prevent="sendEmail">
        <div class="apply-inputs-wrapper grid">
          <div>
            <input
              type="text"
              placeholder="First Name"
              class="left-input"
              ref="firstName"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              class="right-input"
              ref="lastName"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Id"
              class="left-input"
              ref="email"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Mobile No"
              class="right-input"
              ref="tel"
            />
          </div>
          <div class="text-area-div">
            <textarea
              placeholder="Why do you think you are good fit for Ether?"
              ref="coverLetter"
            ></textarea>
          </div>
        </div>
        <div class="checkbox-input-div flex align-center">
          <input type="checkbox" id="terms" v-model="checkbox" />
          <label for="terms">
            I agree to accept the privacy policy, We will add your contact
            details provided in this form to our system for contacting you
            regarding your request.
          </label>
        </div>
        <div class="submit-btn-wrapper">
          <blueBtn btnName="Submit Application" type="submit"></blueBtn>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import blueBtn from "../global components/blueBtn.vue";
import { onMounted, ref } from "vue";
import obeserveElement from "@/composables/observer";
import Email from "@/smtp.js";

const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const tel = ref(null);
const coverLetter = ref(null);
const checkbox = ref(false);

function sendEmail() {
  if (
    checkbox.value &&
    firstName.value.value !== "" &&
    lastName.value.value !== "" &&
    email.value.value !== "" &&
    tel.value.value !== "" &&
    coverLetter.value.value !== ""
  ) {
    Email.send({
      SecureToken: "45ae150e-84b4-43e6-b2b8-1cfb51aac945",
      To: "datozhgenti1998@gmail.com",
      From: "datozhgenti1998@gmail.com",
      Subject: "Vacancy",
      Body: `Hello my name is ${firstName.value.value} ${lastName.value.value}, my Email is ${email.value.value} and my tel is ${tel.value.value}. this is my cover letter:${coverLetter.value.value}`,
    }).then(() => {
      alert("Your Application is Sent");
      firstName.value.value = "";
      lastName.value.value = "";
      email.value.value = "";
      tel.value.value = "";
      coverLetter.value.value = "";
      checkbox.value = false;
    });
  } else {
    alert("Accept our terms and Fill all inputs");
  }
}

onMounted(() => {
  obeserveElement(".left-input", "fade-right");
  obeserveElement(".right-input", "fade-left");
  obeserveElement(".text-area-div", "fade-left");
});
</script>

<style scoped>
.apply-section {
  margin-top: 96px;
}

.apply-inputs-wrapper {
  grid-template-columns: repeat(2, 624px);
  justify-content: space-between;
  row-gap: 32px;
}

.apply-inputs-wrapper input {
  border: none;
  height: 96px;
  width: 100%;
  background-color: #d2daed2b;
  padding: 34px 0 34px 40px;
  font-size: 18px;
}

input:focus {
  outline: none;
}

textarea {
  resize: none;
  width: 100%;
  height: 225px;
  background-color: #d2daed2b;
  border: none;
  padding-top: 34px;
  padding-left: 40px;
  font-size: 18px;
  display: block;
}

.text-area-div {
  grid-column: span 2;
}

textarea:focus {
  outline: none;
}

input[type="checkbox"] {
  margin-right: 24px;
  width: 36px;
  height: 36px;
}

.checkbox-input-div {
  margin-top: 36px;
}

.submit-btn-wrapper {
  margin-top: 36px;
}

input:not(input[type="checkbox"]),
.text-area-div {
  opacity: 0;
}

@media all and (max-width: 1580px) {
  .apply-inputs-wrapper {
    grid-template-columns: 100%;
  }

  .text-area-div {
    grid-column: 1 span;
  }

  textarea {
    widows: 100%;
  }
}

@media all and (max-width: 485px) {
  input,
  textarea {
    padding: 20px !important;
  }
}
</style>
