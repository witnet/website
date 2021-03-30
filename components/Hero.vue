<template>
  <SectionLayout class="main-section">
    <div class="info">
      <div class="title-wrapper">
        <i18n path="hero.title.main" class="title header-1" tag="h1">
          <span class="gradient">{{ $t('hero.title.gradient') }}</span>
        </i18n>
      </div>
      <p class="description">{{ $t('hero.description') }}</p>
      <div class="buttons">
        <a :href="urls.docs" target="_blank">
          <Button type="primary" :font-size="14">Build with Witnet</Button>
        </a>
        <a :href="urls.minning" target="_blank">
          <Button class="card-button" type="secondary" :font-size="14">
            <i18n
              path="hero.buttons.start_mining.base"
              class="title"
              tag="null"
            >
              <span class="wit">{{ $t('hero.buttons.start_mining.wit') }}</span>
            </i18n>
          </Button>
        </a>
      </div>
    </div>
    <img
      src="@/assets/images/dragon_reading.png"
      class="hero-image"
      alt=""
      aria-hidden="true"
    />
  </SectionLayout>
</template>

<script>
import { urls } from '../constants'

export default {
  data() {
    return {
      urls,
    }
  },
}
</script>

<style lang="scss" scoped>
.main-section {
  display: flex;
  min-height: 700px;
  align-items: center;
}
.info {
  min-width: 400px;
  width: 400px;

  .title {
    color: $dark-blue;
    .gradient {
      background: linear-gradient(
        90deg,
        $aquamarine-1 0%,
        $aquamarine-1 43%,
        $green-2 100%
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .description {
    font-size: 1.4rem;
    margin: 32px 0;
    color: $grey-3;
  }
}

.hero-image {
  max-width: 77%;
  right: 40px;
  height: 100%;
}

@media (max-width: 1200px) {
  .main-section {
    display: flex;
    flex-direction: column;
  }
  .info {
    width: auto;
    min-width: auto;
    .buttons:first-child {
      margin-top: 16px;
    }
    .button {
      margin: 8px 0;
    }
  }
  .hero-image {
    margin-top: 16px;
    align-self: center;
  }
}

@media (max-width: 426px) {
  .main-section {
    margin-bottom: 32px;
    .hero-image {
      display: none;
    }
  }
}
</style>
