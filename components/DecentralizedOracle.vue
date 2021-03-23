<template>
  <SectionLayout class="decentralized-oracle-section">
    <div class="wrapper">
      <div class="content">
        <div class="text">
          <h2 class="title">
            {{ $t('decentralized_oracle.title') }}
          </h2>
          <p class="paragraph">
            {{ $t('decentralized_oracle.paragraph_1') }}
          </p>
          <p class="paragraph">
            {{ $t('decentralized_oracle.paragraph_2') }}
          </p>
        </div>
        <div class="image">
          <p class="illustration">(Nice illustration here)</p>
        </div>
      </div>
        {{ $t('decentralized_oracle.button_label') }}
    </div>
  </SectionLayout>
</template>

<script>
import SectionLayout from '@/components/layouts/SectionLayout.vue'
export default {
  name: 'DecentralizedOracle',
  components: {
    SectionLayout,
  },
}
</script>

<style scoped lang="scss">
.decentralized-oracle-section {
  display: flex;
  justify-content: center;

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 1280px;

    .content {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      align-items: center;

      .text {
        max-width: 554px;

        .title {
          margin-bottom: 32px;
        }

        .paragraph {
          margin-bottom: 16px;
        }
      }
      .image {
        justify-self: center;
        .illustration {
          border-radius: 50%;
          background: $white;
          width: 300px;
          height: 300px;
          align-items: center;
          display: flex;
          justify-content: center;
        }
      }
    }

    .margin-top {
      margin-top: 16px;
    }
  }
}
</style>
