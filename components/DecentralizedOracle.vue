<template>
  <div class="container">
    <SectionLayout class="decentralized-oracle-section" :full-background="true">
      <div class="wrapper">
        <div class="content">
          <div class="left">
            <i18n
              path="decentralized_oracle.title.main"
              class="title header-2"
              tag="h1"
            >
              <span class="gradient">{{
                $t('decentralized_oracle.title.gradient')
              }}</span>
            </i18n>
            <p class="paragraph subtitle">
              {{ $t('decentralized_oracle.paragraph_1') }}
            </p>
            <p class="paragraph subtitle">
              {{ $t('decentralized_oracle.paragraph_2') }}
            </p>
            <a :href="urls.documentation" target="_blank">
              <Button type="primary" class="btn">{{
                $t('decentralized_oracle.button_label')
              }}</Button>
            </a>
          </div>
          <div class="vertical-line" />
          <div class="right">
            <TestimonialCard
              v-for="testimonial in testimonials"
              :key="testimonial.author"
              class="testimonial"
              :class="{ short: testimonial.text.length < 160 }"
              :author="testimonial.author"
              :reference="testimonial.reference"
              :text="testimonial.text"
              align="right"
            />
          </div>
        </div>
      </div>
    </SectionLayout>
    <img
      class="world"
      src="@/assets/images/world.png"
      aria-hidden="true"
      alt=""
    />
  </div>
</template>

<script>
import { urls } from '../constants'

export default {
  data() {
    return {
      urls,
      testimonials: [
        {
          text: this.$t('testimonials.testimonial_1.text'),
          author: this.$t('testimonials.testimonial_1.author'),
          reference: 'https://twitter.com/arrington/status/1334932934202048512',
        },
        {
          text: this.$t('testimonials.testimonial_2.text'),
          author: this.$t('testimonials.testimonial_2.author'),
        },
        {
          text: this.$t('testimonials.testimonial_3.text'),
          author: this.$t('testimonials.testimonial_3.author'),
          reference:
            'https://rivexofficial.medium.com/rivex-teams-up-with-witnet-decentralized-oracle-network-94de8a806163',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.container {
  text-align: center;
}

.decentralized-oracle-section {
  text-align: initial;
  display: flex;
  justify-content: center;
  background: url('@/assets/images/circles.svg') #13253a;
  min-height: 800px;
  background-size: contain;
  background-position-x: center;
  background-repeat: no-repeat;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -300px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 100vw solid transparent;
    border-bottom: 300px solid #13253a;
    z-index: -100;
  }

  &::before {
    content: '';
    z-index: -100;
    left: 0;
    right: 0;
    bottom: -100px;
    height: 200px;
    background-color: $dark-blue;
    position: absolute;
    clip-path: ellipse(60% 100% at 50% 0%);
  }

  .wrapper {
    display: flex;
    flex-direction: column;

    .content {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      color: white;

      .left {
        height: 100%;
        max-width: 554px;
        margin-right: 25px;

        .title {
          display: inline-block;
          margin-bottom: 32px;
          .gradient {
            display: inline-block;
            background: linear-gradient(
              90deg,
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
        .btn {
          margin-top: 16px;
        }
      }

      .vertical-line {
        height: 100%;
        border-left: 1px solid $alpha-white;
        margin-right: 1rem;
      }

      .right {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        .testimonial {
          margin-bottom: 1.75rem;
          &.short {
            max-width: 380px;
          }
        }
      }
    }
  }
}

.world {
  width: 70vw;
  margin-top: -350px;
  max-width: 1100px;
  position: relative;
  pointer-events: none;
}

@media (max-width: 1200px) {
  .world {
    margin-top: -150px;
  }

  .decentralized-oracle-section {
    background-size: cover;
    &::after {
      content: '';
      position: absolute;
      top: -49px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 100vw solid transparent;
      border-bottom: 50px solid #13253a;
      z-index: -100;
    }
  }
}

@media (max-width: 600px) {
  .world {
    display: none;
  }
  .decentralized-oracle-section {
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
    &::before {
      bottom: -60px;
      clip-path: ellipse(80% 100% at 50% 0%);
    }
  }
}
@media (max-width: 300px) {
  .decentralized-oracle-section {
    .wrapper {
      .right {
        margin-right: 16px;
      }
    }
  }
}
</style>
