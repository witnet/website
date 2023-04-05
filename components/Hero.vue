<template>
  <SectionLayout class="main-section">
    <div class="info">
      <i18n path="hero.title.main" class="title header-1" tag="h1">
        <span class="gradient">{{ $t('hero.title.gradient') }}</span>
      </i18n>
      <p class="description">{{ $t('hero.description') }}</p>
      <Socials />
      <div class="buttons">
        <a :href="urls.mining" target="_blank">
          <Button type="primary">
            <i18n path="hero.buttons.start_mining.base">
              <span class="wit">{{ $t('hero.buttons.start_mining.wit') }}</span>
            </i18n>
          </Button>
        </a>
        <a :href="urls.coin">
          <Button type="secondary" :font-size="14">{{
            $t('hero.buttons.buy')
          }}</Button>
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
  min-width: 479px;

  .title {
    color: $dark-blue;
    line-height: 1.1em;
    .gradient {
      background: linear-gradient(90deg, $aquamarine-1 43%, $green-2 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
      display: inline;
    }
    &::after {
      content: ' ';
      background-color: $green-2;
      display: inline-block;
      height: 0.15em;
      margin-bottom: -0.01em;
      margin-left: 0.08em;
      width: 0.15em;
    }
  }
  .description {
    font-size: 1.3125rem;
    margin: 32px 0 24px 0;
    color: $grey-3;
  }
}

.hero-image {
  max-width: 77%;
  right: 40px;
}

@media (max-width: 1200px) {
  .main-section {
    display: flex;
    min-height: max-content;
  }
  .hero-image {
    position: relative;
    max-width: 99%;
    right: 200px;
    z-index: -50;
    top: 60px;
  }
}

@media (max-width: 750px) {
  .main-section {
    display: flex;
    flex-direction: column;
  }
  .info {
    width: 100%;
    min-width: 100%;
    .title {
      font-size: 3.9rem;
    }
    .buttons:first-child {
      margin-top: 16px;
    }
    .button {
      margin: 8px 0;
    }
  }
  .hero-image {
    display: none;
  }
}
@media (max-width: 300px) {
  .info {
    .title {
      font-size: 3.5rem;
    }
  }
}
</style>
