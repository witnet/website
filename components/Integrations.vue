<template>
  <SectionLayout class="integrations-section" :full-background="true">
    <div class="integrations-card-container">
      <IntegrationsCard
        v-for="integration in integrations"
        :key="integration.title"
        :link="integration.link"
        :title="integration.title"
        :src="integration.src"
        :brightness="integration.brightness"
        :scale="integration.scale"
      />
    </div>
  </SectionLayout>
</template>

<script>
export default {
  data() {
    return {
      integrations: [
        {
          title: 'Boba Network',
          src: require('@/assets/images/partners/boba.svg'),
          link: 'https://boba.network',
          scale: 0.8,
        },
        {
          title: 'Aragon',
          src: require('@/assets/images/partners/aragon.svg'),
          link: 'https://aragon.org/',
          brightness: 0.4,
        },
        {
          title: 'Conflux Network',
          src: require('@/assets/images/partners/conflux.svg'),
          link: 'https://confluxnetwork.org/',
          scale: 0.8,
        },
        {
          title: 'TriAngle DAO',
          src: require('@/assets/images/partners/triangle.svg'),
          link: 'https://www.triangledao.finance/',
          brightness: 0.7,
        },
        {
          title: 'Agora Space',
          src: require('@/assets/images/partners/agora.svg'),
          link: 'https://agora.space/',
          scale: 0.7,
          brightness: 1.4,
        },
        {
          title: 'Gate.io',
          src: require('@/assets/images/partners/gate.svg'),
          link: 'https://gate.io/',
          scale: 0.8,
          brightness: 0.4,
        },
        {
          title: 'Metis',
          src: require('@/assets/images/partners/metis.svg'),
          link: 'https://metis.io/',
          scale: 0.8,
          brightness: 0.3,
        },
        {
          title: 'Celo',
          src: require('@/assets/images/partners/celo.svg'),
          link: 'https://celo.org/',
          scale: 0.8,
          brightness: 0.5,
        },
        {
          title: 'KuCoin Community Chain',
          src: require('@/assets/images/partners/kcc.svg'),
          link: 'https://kcc.io/',
          scale: 0.75,
          brightness: 0.3,
        },
        {
          title: 'Harmony',
          src: require('@/assets/images/partners/harmony.svg'),
          link: 'https://harmony.one/',
          scale: 0.8,
          brightness: 0.3,
        },
        {
          title: 'Polygon',
          src: require('@/assets/images/partners/polygon.svg'),
          link: 'https://polygon.technology/',
          scale: 1.2,
        },
        {
          title: 'RiveX',
          src: require('@/assets/images/partners/rivex.svg'),
          link: 'https://rivex.io/',
          scale: 0.8,
          brightness: 0.5,
        },
      ].sort(() => 0.5 - Math.random()),
    }
  },
}
</script>

<style lang="scss" scoped>
.integrations-section {
  .integrations-card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    row-gap: 30px;
    column-gap: 40px;
    justify-items: center;
    margin-top: 60px;
  }
}

@media (max-width: 1200px) {
  .integrations-section {
    .integrations-card-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media (max-width: 690px) {
  .integrations-section {
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
        display: inline-block;
      }
    }
    .integrations-card-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 25px;
      justify-items: center;
    }
  }
}
</style>
