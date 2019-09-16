<template>
  <main class="container">
    <header class="hero">
      <div class="content-container">
        <h2 class="title">{{ this.$t('hero_title') }}</h2>
        <p class="description">
          {{ this.$t('hero_description') }}
        </p>
        <a href="#next" class="seconday-purple learn-more-btn">
          {{ this.$t('learn_more_btn') }}
          <img src="~/assets/arrow.svg" alt="arrow" />
        </a>
      </div>
      <img
        src="~/assets/witnet-ethereum.svg"
        alt="witnet-ethereum"
        class="witnet-ethereum"
      />
      <vue-particles
        color="#a48dbd"
        class="particles"
        :particle-opacity="0.7"
        :particles-number="80"
        shape-type="circle"
        :particle-size="4"
        lines-color="#6600de"
        :lines-width="2"
        :line-linked="true"
        :line-opacity="0.05"
        :lines-distance="150"
        :move-speed="3"
        :hover-effect="true"
        hover-mode="grab"
        :click-effect="true"
        click-mode="push"
      />
    </header>
    <section id="next" class="section1">
      <div class="blur-background">
        <h2 class="title-section">
          {{ this.$t('title_section_1') }}
        </h2>
      </div>
      <div class="items-container">
        <DescriptiveImage
          v-for="image in descriptiveImages"
          :key="image.title"
          :title="image.title"
          :img="image.img"
        />
      </div>
      <nuxt-link to="/about" class="primary">
        {{ this.$t('know_more_btn') }}
      </nuxt-link>
    </section>
    <section class="section2">
      <h2>{{ this.$t('title_section_2') }}</h2>
      <div class="items-container">
        <Card
          v-for="card in cards"
          :key="card.title"
          :title="card.title"
          :img="card.img"
        />
      </div>
    </section>
    <section class="section3">
      <h2>{{ this.$t('title_section_3') }}</h2>
      <div class="items-container">
        <Link
          v-for="question in questions"
          :key="question.title"
          :title="question.title"
        />
      </div>
    </section>
  </main>
</template>

<script>
import DescriptiveImage from '~/components/DescriptiveImage.vue'
import Card from '~/components/Card.vue'
import Link from '~/components/Link.vue'

export default {
  components: {
    DescriptiveImage,
    Card,
    Link,
  },
  computed: {
    descriptiveImages() {
      return {
        wit: {
          img: require('~/assets/wit.svg'),
          title: this.$t('s1_wit'),
        },
        fair: {
          img: require('~/assets/fair.svg'),
          title: this.$t('s1_fair'),
        },
        truth: {
          img: require('~/assets/truth.svg'),
          title: this.$t('s1_truth'),
        },
      }
    },
    cards() {
      return {
        node: {
          img: require('~/assets/node-icon.svg'),
          title: this.$t('s2_node'),
        },
        developers: {
          img: require('~/assets/developers-icon.svg'),
          title: this.$t('s2_developers'),
        },
        wallet: {
          img: require('~/assets/wallet-icon.svg'),
          title: this.$t('s2_wallet'),
        },
      }
    },
    questions() {
      return {
        question1: {
          title: this.$t('question1'),
        },
        question2: {
          title: this.$t('question2'),
        },
        question3: {
          title: this.$t('question3'),
        },
        question4: {
          title: this.$t('question4'),
        },
        question5: {
          title: this.$t('question5'),
        },
        question6: {
          title: this.$t('question6'),
        },
      }
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.container {
  margin: 0 auto;
}
header {
  display: flex;
  min-height: 90vh;
  .particles {
    position: absolute;
    z-index: -100;
    height: 100vh;
    width: 80vw;
    top: 0px;
  }
  .witnet-ethereum {
    width: 800px;
    position: absolute;
    z-index: 5;
    margin: 10vh 40vw;
  }
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 8vw;
    margin-top: 24vh;
    background-color: none;
    width: 400px;
    .title {
      font-size: 32px;
      color: $purple;
    }
    .description {
      font-size: 24px;
      color: rgb(61, 61, 61);
      padding-bottom: 30px;
    }
    .learn-more-btn {
      display: flex;
      align-items: center;
      & img {
        padding-left: 10px;
        width: 16px;
      }
    }
  }
}
.items-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.section1 {
  background-color: rgb(244, 244, 244);
  color: rgb(61, 61, 61);
  text-align: center;
  .blur-background {
    .title-section {
      background-color: $purple-1;
      margin: 64px 40px;
      display: inline-block;
    }
  }
}
.section2 {
  color: rgb(61, 61, 61);
  text-align: center;
  padding: 40px;
}
.section3 {
  background-color: rgb(244, 244, 244);
  text-align: right;
  padding: 40px;
}
@media screen and (max-width: 1200px) {
  .witnet-ethereum {
    display: none;
  }
}
</style>
