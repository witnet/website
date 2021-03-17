<template>
  <SectionLayout class="main-section">
    <div class="info">
      <div class="title-wrapper">
        <i18n path="hero.title" class="title" tag="h1">
          <span class="dot">.</span>
        </i18n>
      </div>
      <p class="description">{{ $t('hero.description') }}</p>
      <div class="buttons">
        <Button type="secondary" :font-size="14">Build with Witnet</Button>
        <Button class="card-button" type="secondary" :font-size="14">
          <i18n path="hero.buttons.start_mining.base" class="title" tag="null">
            <span class="wit">{{ $t('hero.buttons.start_mining.wit') }}</span>
          </i18n>
        </Button>
      </div>
    </div>
    <img
      src="@/assets/svg/dragon_reading.svg"
      alt="Witnet pet doing creating requests"
      class="hero-image"
    />
  </SectionLayout>
</template>

<script>
import Button from '@/components/Button.vue'
import SectionLayout from '@/components/layouts/SectionLayout.vue'

export default {
  components: {
    Button,
    SectionLayout,
  },
}
</script>

<style lang="scss" scoped>
.main-section {
  min-height: 100vh;
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

  .hero-image {
    max-width: 77%;
    position: relative;
    right: 40px;
  }

  .right {
    border: 2px solid $white;
    position: relative;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right::after {
    content: '';
    display: block;
    position: absolute;
    top: -25px;
    left: -25px;
    right: 15px;
    bottom: 15px;
    border: 2px solid $green-1;
    border-radius: 6px;
  }
}

@media (max-width: 1200px) {
  .main-section {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .info {
    min-width: 0;
    .buttons {
      .button {
        margin: 16px 0;
        width: 100%;
      }
    }
  }
  .hero-image {
    max-width: 100%;
  }
}
</style>
