<template>
  <div
    class="popup-wrapper fixed flex justify-center align-center"
    @click.self="closePopup"
  >
    <div class="popup background-color-white">
      <div class="close-icon flex justify-end">
        <img
          src="@/assets/closeIcon.png"
          alt="close icon"
          class="display-block"
          @click="closePopup"
        />
      </div>
      <div class="popup-text-wrapper">
        <h2 class="color-blue font-weight-600">
          Have a Question ? Let’s Get in Touch with us 👋
        </h2>
        <p class="gray-color">
          Fill up the form and the team will get back to within 24 hrs
        </p>
      </div>

      <div class="contact-form" data-v-0f380a23="">
        <form data-v-0f380a23="">
          <div class="input-wrapper" data-v-0f380a23="">
            <label
              class="font-weight-500 font-14 color-blue line-height-20 opacity-60"
              for="name"
              data-v-0f380a23=""
              >name</label
            ><input type="text" id="name" data-v-0f380a23="" ref="name" />
          </div>
          <div class="input-wrapper" data-v-0f380a23="">
            <label
              class="font-weight-500 font-14 color-blue line-height-20 opacity-60"
              for="email"
              data-v-0f380a23=""
              >E-mail</label
            ><input type="email" id="email" data-v-0f380a23="" ref="email" />
          </div>
          <div class="input-wrapper" data-v-0f380a23="">
            <label
              class="font-weight-500 font-14 color-blue line-height-20 opacity-60"
              for="subject"
              data-v-0f380a23=""
              >Subject</label
            ><input type="text" id="subject" data-v-0f380a23="" ref="subject" />
          </div>
          <div
            class="input-wrapper"
            id="last-input-wrapper"
            data-v-0f380a23=""
            style="margin-bottom: 20px"
          >
            <label
              class="font-weight-500 font-14 color-blue line-height-20 opacity-60"
              for="message"
              id="message-label"
              data-v-0f380a23=""
              >Message</label
            ><textarea
              id="message"
              placeholder="Type your Messege"
              data-v-0f380a23=""
              ref="message"
            ></textarea>
          </div>
          <blueBtn btnName="Send Messege" @click.prevent="sendEmail"></blueBtn>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import blueBtn from "./blueBtn.vue";
import closePopup from "@/composables/closePopup.js";
import Email from "@/smtp.js";
import { ref } from "vue";

const name = ref(null);
const email = ref(null);
const subject = ref(null);
const message = ref(null);

function sendEmail() {
  if (
    name.value.value !== "" &&
    email.value.value !== "" &&
    subject.value.value !== "" &&
    message.value.value !== ""
  ) {
    Email.send({
      SecureToken: "45ae150e-84b4-43e6-b2b8-1cfb51aac945",
      To: "datozhgenti1998@gmail.com",
      From: "datozhgenti1998@gmail.com",
      Subject: subject.value.value,
      Body: `Hello, my name is ${name.value.value}. My Email is ${email.value.value} and this is my question: ${message.value.value}`,
    }).then(() => {
      alert("Your Message is Sent");
      name.value.value = "";
      email.value.value = "";
      subject.value.value = "";
      message.value.value = "";
      document.querySelector(".popup-wrapper").click();
    });
  } else {
    alert("Fill all inputs");
  }
}
</script>

<style scoped>
.popup-wrapper {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: rgba(35, 37, 54, 0.9);
  display: none;
}

.popup p {
  margin-bottom: 20px;
}

.close-icon {
  margin-bottom: 5px;
}

#message {
  height: 29px;
}

.popup {
  padding: 20px;
  animation: 0.5s fade-top ease-in;
  margin: 0 10px;
  overflow: auto;
}

.popup-text-wrapper {
  width: 320px;
}

h2 {
  margin-bottom: 5px;
  font-size: 20px;
}

.close-icon img {
  cursor: pointer;
}

@media all and (max-height: 617px) {
  .popup {
    height: 100vh;
  }
}

@media all and (max-width: 380px) {
  .popup-text-wrapper {
    width: auto;
  }
}
</style>
