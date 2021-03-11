<template>
  <SectionLayout class="ecosystem-section">
    <h2 class="title">
      A nascent, <span class="gradient">yet thriving ecosystem</span>
    </h2>
    <p class="ecosystem-subtitle">
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
  </SectionLayout>
</template>

<script>
import EcosystemCard from '@/components/cards/EcosystemCard.vue'
import SectionLayout from '@/components/layouts/SectionLayout.vue'

export default {
  components: {
    EcosystemCard,
    SectionLayout,
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
.ecosystem-section {
  text-align: justify;
  .title {
    margin-bottom: 16px;
    text-align: center;
    .gradient {
      background: linear-gradient(
        90deg,
        $pink 0%,
        $pink 43%,
        $electric-blue 100%
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .ecosystem-subtitle {
    padding-bottom: 40px;
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }
  .ecosystem-card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    row-gap: 24px;
    column-gap: 56px;
    justify-items: center;
  }
}
</style>
