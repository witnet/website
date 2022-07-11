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
        {
          title: 'MojitoSwap',
          src: require('@/assets/images/partners/mojitoswap.svg'),
          link: 'https://www.mojitoswap.finance/',
          scale: 0.9,
          brightness: 0.5,
        },
        {
          title: '0xLend',
          src: require('@/assets/images/partners/0xLend.svg'),
          link: 'https://www.0xlend.io/#/',
          scale: 0.9,
          brightness: 1,
        },
        {
          title: 'Cube Chain',
          src: require('@/assets/images/partners/cube-chain.svg'),
          link: 'https://www.cube.network/',
          scale: 0.7,
          brightness: 1,
        },
        {
          title: 'Ethereum',
          src: require('@/assets/images/partners/ethereum.svg'),
          link: 'https://ethereum.org/',
          scale: 0.9,
          brightness: 0.5,
        },
        {
          title: 'Hoo Smart Chain',
          src: require('@/assets/images/partners/hsc.svg'),
          link: 'https://www.hoosmartchain.com/',
          scale: 1,
          brightness: 1,
        },
        {
          title: 'Klaynt',
          src: require('@/assets/images/partners/klaynt.svg'),
          link: 'https://klaytn.foundation/',
          scale: 0.8,
          brightness: 0.5,
        },
        {
          title: 'Meter',
          src: require('@/assets/images/partners/meter.svg'),
          link: 'https://meter.io/',
          scale: 0.9,
          brightness: 0.5,
        },
        {
          title: 'OKX',
          src: require('@/assets/images/partners/okx.svg'),
          link: 'https://www.okx.com/',
          scale: 0.6,
          brightness: 0.5,
        },
        {
          title: 'SmartBCH',
          src: require('@/assets/images/partners/smart-bch.svg'),
          link: 'https://smartbch.org/',
          scale: 0.9,
          brightness: 0.5,
        },
        {
          title: 'Moonbeam',
          src: require('@/assets/images/partners/moonbeam.svg'),
          link: 'https://moonbeam.network/',
          scale: 0.9,
          brightness: 0.5,
        },
        {
          title: 'Cronos',
          src: require('@/assets/images/partners/cronos.svg'),
          link: 'https://cronos.org/',
          scale: 0.9,
          brightness: 0.4,
        },
        {
          title: 'Kava',
          src: require('@/assets/images/partners/kava.svg'),
          link: 'https://www.kava.io/',
          scale: 0.5,
          brightness: 0.5,
        },
        {
          title: 'Mai Finance',
          src: require('@/assets/images/partners/mai-finance.svg'),
          link: 'https://www.mai.finance/',
          scale: 1.1,
          brightness: 1,
        },
      ]
        // This sorting algorithm is far for perfect (somehow biased), but it simply does the job here
        .sort(() => 0.5 - Math.random())
        // Limit the number of integrations shown, so they don't take too much space once we have dozens of them
        // TODO: raise limit to 16 or 20
        .slice(0, 12),
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

@media (max-width: 790px) {
  .integrations-section {
    text-align: justify;
    .integrations-card-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 25px;
      justify-items: center;
    }
  }
}

@media (max-width: 494px) {
  .integrations-section {
    .integrations-card-container {
      grid-template-columns: 1fr;

      /* In the 1-column version, show only 10 logos */
      a:nth-of-type(n + 10) ~ a {
        display: none;
      }
    }
  }
}
</style>
