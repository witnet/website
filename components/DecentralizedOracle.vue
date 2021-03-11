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
        <div class="vertical-line"></div>
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
      <Button color="plain" :font-size="16" class="margin-top">
        {{ $t('decentralized_oracle.button_label') }}
      </Button>
    </div>
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

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 1280px;

    .content {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      align-items: center;

      .text {
        max-width: 554px;

        .title {
          margin-bottom: 32px;
        }

        .paragraph {
          margin-bottom: 16px;
        }
      }
      .image {
        justify-self: center;
        .illustration {
          border-radius: 50%;
          background: $white;
          width: 300px;
          height: 300px;
          align-items: center;
          display: flex;
          justify-content: center;
        }
      }
    }

    .margin-top {
      margin-top: 16px;
    }
  }
}
</style>
