<template>
  <SectionLayout class="decentralized-oracle-section">
    <div class="wrapper">
      <div class="content">
        <div class="left">
          <i18n path="decentralized_oracle.title.main" class="title" tag="h2">
            <span class="gradient">{{
              $t('decentralized_oracle.title.gradient')
            }}</span>
          </i18n>
          <p class="paragraph">
            {{ $t('decentralized_oracle.paragraph_1') }}
          </p>
          <p class="paragraph">
            {{ $t('decentralized_oracle.paragraph_2') }}
          </p>
          <Button type="primary" :font-size="14" class="btn">{{
            $t('decentralized_oracle.button_label')
          }}</Button>
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
    </div>
    <img
      class="world"
      src="@/assets/images/world.png"
      aria-hidden="true"
      alt=""
    />
  </SectionLayout>
</template>

<script>
export default {
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
  background-image: url('~@/assets/images/circles.png');
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
        margin-right: 16px;

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
        .btn {
          margin-top: 16px;
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
      width: 100vw;
      bottom: -65vw;
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
