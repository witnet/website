<template>
  <div>
    <Hero />
    <DecentralizedOracle />
    <!-- <nuxt-content :document="page" /> -->
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
import Hero from '@/components/Hero.vue'
import DecentralizedOracle from '@/components/DecentralizedOracle.vue'

export default {
  components: {
    Footer,
    JoinCommunity,
    GetInvolved,
    Ecosystem,
    WitToken,
    DecentralizedOracle,
    Hero,
  },
}
</script>
