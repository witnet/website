<template>
  <div class="layout">
    <Hero />
    <Announcement />
    <DecentralizedOracle />
    <!-- <nuxt-content :document="page" /> -->
    <Testimonials />
    <WitToken />
    <Ecosystem />
    <GetInvolved />
    <JoinCommunity />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import JoinCommunity from '@/components/JoinCommunity.vue'
import GetInvolved from '@/components/GetInvolved.vue'
import Ecosystem from '@/components/Ecosystem.vue'
import WitToken from '@/components/WitToken.vue'
import Testimonials from '@/components/Testimonials.vue'
import Hero from '@/components/Hero.vue'
import Announcement from '@/components/Announcement.vue'
import DecentralizedOracle from '@/components/DecentralizedOracle.vue'

export default {
  components: {
    Footer,
    JoinCommunity,
    GetInvolved,
    Ecosystem,
    WitToken,
    Testimonials,
    DecentralizedOracle,
    Hero,
    Announcement,
  },
  async asyncData({ app, params, $content }) {
    const { slug } = params
    const page = await $content(
      app.i18n.locale,
      'current_announcement',
      slug
    ).fetch()

    console.dir(page, { depth: null })

    return {
      page,
    }
  },
}
</script>

<style lang="scss">
// lightgreen = #5fbfae
// background =#12243a
</style>
