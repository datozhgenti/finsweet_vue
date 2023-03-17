<template>
  <header class="privacy-policy-header margin-top-81 p160 padding-96">
    <div class="privacy-top relative opacity-0">
      <div class="rectangle margin-bottom-24" id="background-color-pink"></div>
      <h2 class="color-blue font-weight-600 font-48 line-height-58">
        Privacy Policy
      </h2>
      <p class="gray-color">Last Updated on 27th January 2021</p>
      <img
        src="@/assets/shape4852.png"
        alt="shape"
        class="display-block absolute topRight shape"
      />
    </div>
    <div class="privacy-bottom">
      <div class="privacy-wrapper padding-96 opacity-0">
        <h2
          class="color-blue font-weight-600 font-36 line-height-54 margin-bottom-24"
        >
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h2>
        <p class="gray-color margin-bottom-24">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, Designing voice and tone for error messages.
        </p>
        <p class="gray-color margin-bottom-24">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged.
        </p>
        <p class="gray-color margin-bottom-24">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged.
        </p>
        <p class="gray-color margin-bottom-40">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, Designing voice.
        </p>
        <h4
          class="font-weight-600 font-24 line-height-36 color-blue margin-bottom-24"
        >
          We disclose your information in the following manner:
        </h4>
        <p class="gray-color margin-bottom-24">
          Business partners, suppliers and sub-contractors (“Affiliates”):
          Affiliates may use this information to help provide, understand, and
          improve our services and Affiliate’s own services for the performance
          of any contract we enter into
        </p>
        <p class="gray-color margin-bottom-24">
          Financial Institutions and Auditors: In order to complete third party
          financial, technical and legal audits of our operations to help us
          operate our business, we may need to share your information with
          financial institutions and auditors.
        </p>
        <p class="gray-color">
          Advertisers and Advertising Networks: To provide you with select and
          serv e relevant advertisements to you and others, we may share your
          data with advertiser sand advertising networks. We do not disclose
          your Personal Information or Sensitive Personal Information to our
          advertisers, but we may provide them with aggregate information about
          our users (for example, we may inform them that any given number of
          participants in a specified age group who clicked on their
          advertisement on any given day). We may also use such aggregate
          information to help advertisers reach the kind of audience they want
          to target.
        </p>
      </div>
      <div>
        <img
          src="@/assets/horizontal-shape.png"
          alt="shapes"
          class="display-block"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import obeserveElement from "@/composables/observer";
import { onMounted } from "vue";

onMounted(() => {
  obeserveElement(".privacy-top", "fade-right");
  obeserveElement(".privacy-wrapper", "fade-left");
});
</script>

<style scoped>
.privacy-top h2 {
  margin-bottom: 8px;
}

h4 {
  margin-bottom: 16px;
}

.privacy-bottom {
  margin-top: 72px;
}

.privacy-wrapper {
  background-color: #ecf8f9;
  padding-left: 221px;
  padding-right: 218px;
}

@media all and (max-width: 470px) {
  .shape {
    display: none;
  }

  .privacy-top h2 {
    font-size: 7vw;
    line-height: normal;
  }
}

@media all and (max-width: 905px) {
  .privacy-wrapper {
    padding: 30px;
  }
}

@media all and (max-width: 526px) {
  .privacy-wrapper h2 {
    font-size: 6vw;
    line-height: normal;
  }

  img {
    width: 100%;
  }
}
</style>
