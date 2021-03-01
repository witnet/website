<template>
  <div>
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
}
</script>
