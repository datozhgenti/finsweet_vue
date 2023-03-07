<template>
  <header
    class="contact-header p160 margin-top-81 padding-96 flex space-between wrap"
  >
    <div class="left opacity-0">
      <div class="rectangle margin-bottom-24"></div>
      <h2
        class="color-blue font-weight-600 font-48 line-height-58 margin-bottom-24"
      >
        Have a Question ? Let's Get in Touch with us 👋
      </h2>
      <p class="gray-color margin-bottom-64">
        Fill up the Form and our team will get back to within 24 hrs
      </p>
      <div class="contact-form">
        <form @submit.prevent="">
          <div class="input-wrapper">
            <label
              class="font-weight-500 font-14 color-blue line-height-20 opacity-60"
              for="name"
              >name</label
            >
            <input type="text" id="name" />
          </div>
          <div class="input-wrapper">
            <label
              class="font-weight-500 font-14 color-blue line-height-20 opacity-60"
              for="email"
              >E-mail</label
            >
            <input type="email" id="email" />
          </div>
          <div class="input-wrapper">
            <label
              class="font-weight-500 font-14 color-blue line-height-20 opacity-60"
              for="subject"
              >Subject</label
            >
            <input type="text" id="subject" />
          </div>
          <div class="input-wrapper" id="last-input-wrapper">
            <label
              class="font-weight-500 font-14 color-blue line-height-20 opacity-60"
              for="message"
              id="message-label"
              >Message</label
            >
            <textarea id="message" placeholder="Type your Messege"></textarea>
          </div>
          <blueBtn btnName="Send Message" type="submit"></blueBtn>
        </form>
      </div>
    </div>
    <div class="right">
      <div class="contact-info-wrapper opacity-0">
        <div class="horizontal-shape flex flex-end">
          <img
            src="@/assets/contact-shape-horizontal.png"
            alt="shape"
            class="display-block"
          />
        </div>
        <div class="flex">
          <div class="vertical-shape flex align-end">
            <img src="@/assets/contact-shape-vertical.png" alt="shape" />
          </div>
          <div class="contact-info">
            <div class="location margin-bottom-24">
              <p
                class="info-header font-weight-500 font-14 color-white line-height-20 opacity-60"
              >
                location
              </p>
              <p class="font-weight-500 font-18 color-white line-height-28">
                DLF Cybercity, Bhubaneswar, India, &52050
              </p>
            </div>
            <div class="working-hour margin-bottom-28">
              <p
                class="info-header font-weight-500 font-14 color-white line-height-20 opacity-60"
              >
                Working Hour
              </p>
              <p class="font-weight-500 font-18 color-white line-height-28">
                Monday To Friday
              </p>
              <p class="font-weight-500 font-18 color-white line-height-28">
                9:00 AM to 8:00 PM
              </p>
              <p
                class="font-weight-500 font-14 color-white line-height-20 opacity-60"
              >
                Our Support Team is available 24Hrs
              </p>
            </div>
            <div class="contact-us">
              <p
                class="info-header font-weight-500 font-14 color-white line-height-20 opacity-60"
              >
                Contact Us
              </p>
              <div>
                <a
                  class="font-weight-500 font-18 color-white line-height-28"
                  href="tel:+995591404227"
                >
                  020 7993 2905
                </a>
              </div>
              <div>
                <a
                  class="font-weight-500 font-14 color-white line-height-20 opacity-60"
                  href="mailto:datozhgenti1998@gmail.com"
                >
                  Hello@ether.com
                </a>
              </div>
            </div>
            <div class="contact-social-icons flex space-between align-center">
              <div class="facebook-img">
                <a
                  href="https://www.facebook.com/"
                  class="display-block"
                  target="_"
                >
                  <img
                    src="@/assets/overlay4.png"
                    alt="facebook-icon"
                    class="display-block"
                  />
                </a>
              </div>
              <div class="twitter-img">
                <a
                  href="https://www.twitter.com/"
                  class="display-block"
                  target="_"
                >
                  <img
                    src="@/assets/overlay1.png"
                    alt="twitter-icon"
                    class="display-block"
                  />
                </a>
              </div>
              <div class="instagram-img">
                <a
                  href="https://www.instagram.com/"
                  class="display-block"
                  target="_"
                >
                  <img
                    src="@/assets/overlay2.png"
                    alt="instagram-icon"
                    class="display-block"
                  />
                </a>
              </div>
              <div class="linkedin-img">
                <a
                  href="https://www.linkedin.com/"
                  class="display-block"
                  target="_"
                >
                  <img
                    src="@/assets/overlay3.png"
                    alt="linkedin-icon"
                    class="display-block"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import blueBtn from "../global components/blueBtn.vue";
import obeserveElement from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveElement(".contact-header .left", "fade-right");
  obeserveElement(".contact-info-wrapper", "fade-left");
});
</script>

<style scoped>
.rectangle {
  background-color: #ffd3af;
  margin-bottom: 24px;
}

.left {
  margin-right: 4px;
}

.margin-bottom-24 {
  margin-bottom: 24px;
}

.margin-bottom-28 {
  margin-bottom: 28px;
}

.margin-bottom-64 {
  margin-bottom: 64px;
}

.contact-header .left {
  width: 672px;
}

label,
input,
textarea {
  display: block;
}

label {
  margin-bottom: 8px;
}

input,
textarea {
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(35, 37, 54, 0.2);
  padding-bottom: 8px;
  color: #232536;
}

input:focus,
textarea:focus {
  outline: none;
}

.input-wrapper {
  margin-bottom: 24px;
}

.contact-form {
  width: 405px;
}

textarea {
  resize: none;
  height: 90px;
}

textarea::placeholder {
  color: #232536;
  opacity: 37%;
}

#message-label {
  margin-bottom: 14px;
}

#message {
  padding-bottom: 0;
}

#last-input-wrapper {
  margin-bottom: 76px;
}

.contact-info {
  background-color: #666dff;
}

.info-header {
  padding-bottom: 12px;
  border-bottom: 1px solid #00000014;
  margin-bottom: 12px;
}

.contact-us {
  margin-bottom: 54px;
}

.contact-social-icons {
  width: 144px;
}

.contact-info {
  padding: 83px 148px 128px 96px;
  width: 512px;
}

.flex-end {
  justify-content: flex-end;
}

.align-end {
  align-items: flex-end;
}

@media all and (max-width: 1531px) {
  .right {
    margin-top: 40px;
  }
}

@media all and (max-width: 570px) {
  .contact-header .left,
  .contact-info,
  .contact-form {
    width: auto;
  }

  h2 {
    font-size: 6vw;
    line-height: normal;
  }

  .vertical-shape {
    display: none;
  }

  .contact-info {
    padding: 30px;
  }
}
</style>
