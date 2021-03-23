<template>
  <SectionLayout class="hero-section">
    <div class="left">
      <div class="title-wrapper">
          <i18n path="hero.title" class="title" tag="h1">
            <span class="dot">.</span>
          </i18n>
      </div>
        <p class="description">{{ $t('hero.description') }}</p>
      <div class="buttons">
          <Button color="plain" :font-size="16">Build with Witnet</Button>
          <Button class="card-button" color="plain" :font-size="16">
            <i18n
              path="hero.buttons.start_mining.base"
              class="title"
              tag="null"
            >
              <span class="wit">{{ $t('hero.buttons.start_mining.wit') }}</span>
            </i18n>
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
