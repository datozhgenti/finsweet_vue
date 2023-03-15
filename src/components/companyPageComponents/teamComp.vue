<template>
  <section class="team-section p160">
    <div class="team-section-top opacity-0">
      <p
        class="black-color font-weight-500 font-14 letter-spacing-3 capitalize"
        style="margin-bottom: 16px"
      >
        MEET OUR TEAM
      </p>
      <h2
        class="color-blue font-weight-600 font-48 line-height-58"
        style="margin-bottom: 24px"
      >
        Teamwork is the only way we work
      </h2>
      <p class="gray-color">
        Through True Rich Attended does no end it his mother since real had half
        every him case in packages enquire we up ecstatic unsatiable.
      </p>
    </div>
    <div class="team-section-middle grid">
      <div
        v-for="member in members"
        :key="member"
        class="team-img-wrapper opacity-0"
      >
        <div class="relative">
          <img
            :src="member.imgUrl"
            alt="member"
            class="display-block obj-fit-cover"
          />
          <div class="overlay absolute w100 h100">
            <div>
              <h4
                class="font-weight-600 font-24 line-height-36 color-blue color-white"
                @click="
                  $router.push({
                    name: 'memberPage',
                    params: { name: member.name.split(' ').join('-') },
                  })
                "
              >
                {{ member.name }}
              </h4>
              <p
                class="font-weight-500 font-14 color-blue line-height-20 color-white"
              >
                Support Assist
              </p>
              <div class="icons flex space-between">
                <a href="https://twitter.com/"
                  ><img
                    src="@/assets/overlay1.png"
                    alt="social"
                    class="display-block"
                /></a>
                <a href="https://instagram.com/"
                  ><img
                    src="@/assets/overlay2.png"
                    alt="social"
                    class="display-block"
                /></a>
                <a href="https://linkedin.com/"
                  ><img
                    src="@/assets/overlay3.png"
                    alt="social"
                    class="display-block"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="team-section-bottom">
      <cta-comp></cta-comp>
    </div>
  </section>
</template>

<script setup>
import ctaComp from "../global components/ctaComp.vue";
import { ref, onMounted } from "vue";
import obeserveFunc from "@/composables/observer";

onMounted(() => {
  obeserveFunc(".team-section-top", "fade-right");
  obeserveFunc(".team-img-wrapper", "fade-left");
});

const members = ref([
  { imgUrl: require("@/assets/Ricardo-Diaz.png"), name: "Ricardo Diaz" },
  { imgUrl: require("@/assets/Liam-Nison.png"), name: "Liam Nison" },
  { imgUrl: require("@/assets/Oliver-Queen.png"), name: "Oliver Queen" },
  { imgUrl: require("@/assets/Barry-Allen.png"), name: "Barry Allen" },
  { imgUrl: require("@/assets/Bruce-Wayne.png"), name: "Bruce Wayne" },
  { imgUrl: require("@/assets/John-Diggle.png"), name: "John Diggle" },
  { imgUrl: require("@/assets/Peter-Parker.png"), name: "Peter Parker" },
  { imgUrl: require("@/assets/Clark-Kent.png"), name: "Clark Kent" },
]);
</script>

<style scoped>
.team-section {
  margin-bottom: 96px;
}

h4 {
  cursor: pointer;
}

h4:hover {
  text-decoration: underline;
}
.team-section-top {
  width: 624px;
}

.team-section-middle {
  grid-template-columns: repeat(4, 1fr);
  margin-top: 64px;
}

.overlay {
  background-color: rgba(35, 37, 54, 0.99);
  top: 0;
  opacity: 0.9;
  padding-top: 168px;
  padding-left: 48px;
  transform: translateY(-100%);
  transition: 1s;
}

.team-img-wrapper:hover .overlay {
  display: block;
  transform: translateY(0);
}

.team-img-wrapper {
  overflow: hidden;
}

.overlay .icons {
  width: 101.33px;
}

.overlay p {
  margin: 8px 0 24px;
}

@media all and (max-width: 1020px) {
  .team-section-middle {
    grid-template-columns: 1fr;
  }

  .team-section-middle > div {
    display: flex;
    justify-content: center;
  }
}

@media all and (max-width: 615px) {
  .team-section-top {
    width: auto;
  }

  .team-section-top h2 {
    font-size: 6vw;
    line-height: normal;
  }
}
</style>
