<template>
  <div class="container">
    <h2 class="title">{{ $t(ecosystem.title) }}</h2>
    <p class="subtitle">
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
          title: this.$t('ecosystem.cards.node.title'),
          url: '/',
          border: false,
          content: this.$t('ecosystem.cards.node.content'),
        },
        {
          title: this.$t('ecosystem.cards.sheikah.title'),
          url: '/',
          border: false,
          content: this.$t('ecosystem.cards.sheikah.content'),
        },
        {
          title: this.$t('ecosystem.cards.truffle_box.title'),
          url: '/',
          border: false,
          content: this.$t('ecosystem.cards.truffle_box.content'),
        },
        {
          title: this.$t('ecosystem.cards.explorer.title'),
          url: '/',
          border: false,
          content: this.$t('ecosystem.cards.explorer.content'),
        },
        {
          title: this.$t('ecosystem.cards.monitor.title'),
          url: '/',
          border: false,
          content: this.$t('ecosystem.cards.monitor.content'),
        },
        {
          title: this.$t('ecosystem.cards.next.title'),
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
