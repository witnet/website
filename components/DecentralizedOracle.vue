<template>
  <SectionLayout class="decentralized-oracle-section">
    <div class="wrapper">
      <div class="content">
        <div class="left">
          <h2 class="title">
            {{ $t('decentralized_oracle.title') }}
          </h2>
          <p class="paragraph">
            {{ $t('decentralized_oracle.paragraph_1') }}
          </p>
          <p class="paragraph">
            {{ $t('decentralized_oracle.paragraph_2') }}
          </p>
        </div>
        <div class="vertical-line" />
        <div class="right">
          <TestimonialCard
            v-for="testimonial in testimonials"
            :key="testimonial.author"
            class="testimonial"
            :class="{ short: testimonial.text.length < 160 }"
            :author="testimonial.author"
            :text="testimonial.text"
            align="right"
          />
        </div>
      </div>
      <Button type="primary" :font-size="14" class="margin-top">{{
        $t('decentralized_oracle.button_label')
      }}</Button>
    </div>
    <img class="world" src="@/assets/svg/world.svg" />
  </SectionLayout>
</template>

<script>
import SectionLayout from '@/components/layouts/SectionLayout.vue'
import TestimonialCard from '@/components/cards/TestimonialCard.vue'

export default {
  name: 'DecentralizedOracle',
  components: {
    SectionLayout,
    TestimonialCard,
  },

  data() {
    return {
      testimonials: [
        {
          text: this.$t('testimonials.testimonial_1.text'),
          author: this.$t('testimonials.testimonial_1.author'),
        },
        {
          text: this.$t('testimonials.testimonial_2.text'),
          author: this.$t('testimonials.testimonial_2.author'),
        },
        {
          text: this.$t('testimonials.testimonial_3.text'),
          author: this.$t('testimonials.testimonial_3.author'),
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.decentralized-oracle-section {
  display: flex;
  justify-content: center;
  background: #112338;
  background-image: url('~@/assets/svg/circles.svg');
  min-height: 800px;
  background-size: 75%;
  background-position-x: center;
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 500px;

  &::after {
    content: '';
    position: absolute;
    top: -400px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 100vw solid transparent;
    border-bottom: 400px solid #13253a;
    z-index: -1;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 1280px;

    .content {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      color: white;

      .left {
        height: 100%;
        max-width: 554px;

        .title {
          margin-bottom: 32px;
          .gradient {
            background: linear-gradient(
              90deg,
              $aquamarine-3 0%,
              $aquamarine-3 43%,
              $purple-3 100%
            );
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        .paragraph {
          margin-bottom: 16px;
        }
      }

      .vertical-line {
        height: 100%;
        border-left: 1px solid white;
        margin-right: 1rem;
      }

      .right {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        justify-self: center;
        .testimonial {
          margin-bottom: 1.75rem;
          &.short {
            max-width: 380px;
          }
        }
      }
    }

    .margin-top {
      margin-top: 16px;
    }
  }
  .world {
    width: 1000px;
    bottom: -450px;
    position: absolute;
    z-index: 1;
  }
}

@media (max-width: 1200px) {
  .decentralized-oracle-section {
    .world {
      width: 75vw;
      bottom: -40vw;
    }
  }
}

@media (max-width: 600px) {
  .decentralized-oracle-section {
    margin-bottom: 250px;
    .wrapper {
      .content {
        grid-template-columns: 1fr;
        .right:first-of-type {
          margin-top: 32px;
        }
      }
      .vertical-line {
        display: none;
      }
    }
  }
}
</style>
