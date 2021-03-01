<template>
  <SectionLayout class="testimonials-section">
    <TestimonialCard
      v-for="testimonial in testimonials"
      :key="testimonial.author"
      class="testimonial"
      :author="testimonial.author"
      :text="testimonial.text"
      :align="testimonial.align"
    />
  </SectionLayout>
</template>

<script>
import TestimonialCard from '@/components/cards/TestimonialCard.vue'
import SectionLayout from '@/components/layouts/SectionLayout.vue'

export default {
  name: 'Testimonials',
  components: {
    TestimonialCard,
    SectionLayout,
  },
  data() {
    return {
      testimonials: [
        {
          text:
            '"Oracle price manipulation was a hot topic in 2020, causing many financial losses. We are confident that Witnet is able to withstand these issues and provide the security and decentralization we’re looking for"',
          author: 'Mark Tan, Co-Founder of RiveX',
          align: 'right',
        },
        {
          text:
            '"The oracle that truly decentralized blockchains and the Web3 deserve"',
          author: 'Luis Cuende, Co-Founder of Aragon',
          align: 'left',
        },
        {
          text:
            '"Witnet isanextgenerationcryptoOracle. You\'ll hear a lot more about it in 2021."',
          author: 'Michael Arrington, Founder of TechCrunch',
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
