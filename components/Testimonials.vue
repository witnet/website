<template>
  <div>
    <TestimonialCard
      v-for="testimonial in testimonials"
      :key="testimonial.author"
      class="testimonial"
      :author="testimonial.author"
      :text="testimonial.text"
      :reference="testimonial.reference"
      :align="testimonial.align"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          text: this.$t('testimonials.testimonial_1.text'),
          author: this.$t('testimonials.testimonial_1.author'),
          reference: 'https://twitter.com/arrington/status/1334932934202048512',
          align: 'right',
        },
        {
          text: this.$t('testimonials.testimonial_2.text'),
          author: this.$t('testimonials.testimonial_2.author'),
          reference: '#',
          align: 'left',
        },
        {
          text: this.$t('testimonials.testimonial_2.text'),
          author: this.$t('testimonials.testimonial_2.author'),
          reference:
            'https://rivexofficial.medium.com/rivex-teams-up-with-witnet-decentralized-oracle-network-94de8a806163',
          align: 'left',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.testimonials-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto auto;
  margin: 0 48px;
  column-gap: 48px;
  row-gap: 32px;
  justify-content: center;
}
.testimonial:first-of-type {
  grid-row: span 2;
}
</style>
