<template>
  <div class="container">
    <h2 class="title">A nascent, yet thriving ecosystem</h2>
    <p class="subtitle">
      Many pieces are already in place, and many others are being actively
      worked on by a broad community of BUIDLers.
    </p>
    <div class="ecosystem-card-container">
      <EcosystemCard
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :content="item.content"
        :url="item.url"
        :border="item.border"
      />
    </div>
  </div>
</template>

<script>
import EcosystemCard from '@/components/cards/EcosystemCard.vue'

export default {
  components: {
    EcosystemCard,
  },
  data() {
    return {
      items: [
        {
          title: 'witnet-rust full archival node',
          url: '/',
          border: false,
          content:
            'Run your fully verifying node and start earning wit tokens for mining blocks and resolving data requests.',
        },
        {
          title: 'Sheikah wallet for desktop',
          url: '/',
          border: false,
          content:
            'Sheikah is a privacy and user friendly wallet app for managing your wit tokens on Windows, Mac OS and GNU/Linux.',
        },
        {
          title: 'Ethereum Truffle Box',
          url: '/',
          border: false,
          content:
            'Integrating witnet into your Solidity contracts is almost immediate with the Witnet Truffle Box.',
        },
        {
          title: 'witnet.network block explorer',
          url: '/',
          border: false,
          content:
            'The witnet.network block explorer gives you a neutral view on what is going on in the Witnet block chain.',
        },
        {
          title: 'witnet.live network monitor',
          url: '/',
          border: false,
          content:
            'The witnet.live network monitor keeps tracks of the health of the witnet network.',
        },
        {
          title: 'What will you build next?',
          url: '/',
          border: true,
          content:
            'Do you have some exciting Witnet app in mind? Apply now for a grant from the Witnet Foundation.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 56px 180px;
  text-align: justify;
  .title {
    margin-bottom: 16px;
    text-align: center;
  }
  .subtitle {
    padding-bottom: 40px;
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }
  .ecosystem-card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    row-gap: 24px;
    justify-items: center;
  }
}
@media (max-width: 1200px) {
  .container {
    padding: 40px 40px;
  }
}
</style>
