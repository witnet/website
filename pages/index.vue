<template>
  <main class="container">
    <header class="hero">
      <div class="content-container">
        <h2 class="title">{{ this.$t('hero_title') }}</h2>
        <p class="description">
          {{ this.$t('hero_description') }}
        </p>
        <nuxt-link to="/about" class="secondary-purple learn-more-btn">
          {{ this.$t('learn_more_btn') }}
        </nuxt-link>
      </div>
      <img
        src="~/assets/APIs.svg"
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
        :lines-width="1"
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
    <!-- <section id="next" class="section1">
      <h3 class="title-section">
        {{ this.$t('title_section_1') }}
      </h3>
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
    </section> -->
    <section id="participate" class="section2">
      <h3>{{ this.$t('title_section_2') }}</h3>
      <div class="items-container">
        <Card
          v-for="card in cards"
          :key="card.title"
          :title="card.title"
          :img="card.img"
          :url="card.url"
        />
      </div>
    </section>
    <section class="section3">
      <h3>{{ this.$t('title_section_3') }}</h3>
      <div class="items-container">
        <Link
          v-for="question in questions"
          :key="question.title"
          :title="question.title"
          :link="question.link"
        />
      </div>
    </section>
  </main>
</template>

<script>
// import DescriptiveImage from '~/components/DescriptiveImage.vue'
import Card from '~/components/Card.vue'
import Link from '~/components/Link.vue'

export default {
  head() {
    return {
      title: 'Witnet - Smart Contracts with Real Power',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'The Witnet protocol gives smart contracts real power by connecting them to any online data source. Sport results, stock prices, weather forecasts or even other ...',
        },
      ],
    }
  },
  components: {
    // DescriptiveImage,
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
          url: 'https://docs.witnet.io/try/run-a-node/',
        },
        developers: {
          img: require('~/assets/developers-icon.svg'),
          title: this.$t('s2_developers'),
          url: 'https://docs.witnet.io/try/use-from-ethereum/',
        },
        wallet: {
          img: require('~/assets/wallet-icon.svg'),
          title: this.$t('s2_wallet'),
          url: 'https://github.com/witnet/sheikah',
        },
      }
    },
    questions() {
      return {
        question1: {
          title: this.$t('question1'),
          link: '#development-status',
        },
        question2: {
          title: this.$t('question2'),
          link: '#don',
        },
        question3: {
          title: this.$t('question3'),
          link: '#consensus',
        },
        question4: {
          title: this.$t('question4'),
          link: '#witnet-as-a-blockchain',
        },
        question5: {
          title: this.$t('question5'),
          link: '#different-from-others',
        },
        question6: {
          title: this.$t('question6'),
          link: '#wit-token',
        },
        question7: {
          title: this.$t('question7'),
          link: '#run-a-node',
        },
        question8: {
          title: this.$t('question8'),
          link: '#defense-attacks',
        },
        question9: {
          title: this.$t('question9'),
          link: '#sheikah-radon',
        },
        question10: {
          title: this.$t('question10'),
          link: '#bridges',
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
  align-items: center;
  .particles {
    position: absolute;
    z-index: -100;
    height: 100vh;
    width: 100vw;
    top: 0px;
  }
  .witnet-ethereum {
    width: 65vw;
    max-height: 65vh;
    position: absolute;
    z-index: 5;
    margin: 0vh 40vw;
  }
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 8vw;
    background-color: none;
    width: 400px;
    .title {
      font-size: 32px;
      font-weight: 900;
      color: $purple;
    }
    .description {
      font-size: 24px;
      color: rgb(61, 61, 61);
      padding-bottom: 30px;
    }
    .learn-more-btn {
      display: flex;
      text-decoration: none;
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
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 4vh 0;
}
.section1 {
  background-color: rgb(244, 244, 244);
  color: rgb(61, 61, 61);
  text-align: center;
  padding: 8vh 0;
  // .title-section {
  //   padding-bottom: 5vh;
  //   display: inline-block;
  // }
}
.section2 {
  background-color: rgb(244, 244, 244);
  color: rgb(61, 61, 61);
  text-align: center;
  padding: 8vh 0;
}
.section3 {
  text-align: center;
  padding: 8vh 0;
}
@media screen and (max-width: 1200px) {
  .witnet-ethereum {
    display: none;
  }
  header {
    .content-container {
      width: 90vw;
    }
  }
}
</style>
