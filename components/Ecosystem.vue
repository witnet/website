<template>
  <SectionLayout class="ecosystem-section">
    <h2 class="title">{{ $t('ecosystem.title') }}</h2>
    <p class="ecosystem-subtitle">
      {{ $t('ecosystem.subtitle') }}
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
          title: this.$t('ecosystem.cards.node.title'),
          title: 'witnet-rust full archival node',
          url: '/',
          border: false,
          content: this.$t('ecosystem.cards.node.content'),
        },
        {
          title: this.$t('ecosystem.cards.sheikah.title'),
          title: 'Sheikah wallet for desktop',
          url: '/',
          border: false,
          content: this.$t('ecosystem.cards.sheikah.content'),
        },
        {
          title: this.$t('ecosystem.cards.truffle_box.title'),
          title: 'Ethereum Truffle Box',
          url: '/',
          border: false,
          content: this.$t('ecosystem.cards.truffle_box.content'),
        },
        {
          title: this.$t('ecosystem.cards.explorer.title'),
          title: 'witnet.network block explorer',
          url: '/',
          border: false,
          content: this.$t('ecosystem.cards.explorer.content'),
        },
        {
          title: this.$t('ecosystem.cards.monitor.title'),
          title: 'witnet.live network monitor',
          url: '/',
          border: false,
          content: this.$t('ecosystem.cards.monitor.content'),
        },
        {
          title: this.$t('ecosystem.cards.next.title'),
          title: 'What will you build next?',
          url: '/',
          border: true,
          content: this.$t('ecosystem.cards.next.content'),
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
