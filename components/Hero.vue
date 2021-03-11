<template>
  <SectionLayout class="hero-section">
    <div class="left">
      <div class="title-wrapper">
        <h1 class="title">
          Unleash de power of smart contracts<span class="dot">.</span>
        </h1>
      </div>
      <h4 class="description">{{ $t('description') }}</h4>
      <div class="buttons">
        <Button type="secondary" :font-size="14">Build with Witnet</Button>
        <Button class="card-button" type="secondary" :font-size="14">
          Start mining <span class="wit">wit</span>
        </Button>
      </div>
    </div>

    <div class="right">
      <p>(nice illustration here)</p>
    </div>
  </SectionLayout>
</template>

<script>
import SectionLayout from '@/components/layouts/SectionLayout.vue'

export default {
  components: {
    SectionLayout,
  },
}
</script>

<style lang="scss" scoped>
.hero-section {
  color: $white;
  background: $blue-5;
  min-height: 90vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-content: center;
  grid-column: span 2;
  column-gap: 48px;

  .left {
    .title-wrapper {
      display: block;
      width: 100%;

      .title {
        display: inline;
        color: $blue-5;
        word-wrap: break-word;
        background: $white;

        .dot {
          color: $green-1;
        }
      }

      margin-bottom: 48px;
    }

    .description {
      margin-bottom: 48px;
    }

    .buttons {
      .card-button {
        margin-top: 16px;
      }
    }
  }

  .right {
    border: 2px solid $white;
    position: relative;
    z-index: 10;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right::after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: -25px;
    left: -25px;
    right: 15px;
    bottom: 15px;
    border: 2px solid $green-1;
    border-radius: 6px;
  }
}
@media (max-width: 1200px) {
  .hero-section {
    padding: 0 40px;
    .right {
      display: none;
    }
    .right::after {
      display: none;
    }
    .left {
      .description {
        margin-bottom: 24px;
      }
    }
  }
}
</style>
