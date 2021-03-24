<template>
  <SectionLayout class="main-section">
    <div class="info">
      <div class="title-wrapper">
        <i18n path="hero.title.main" class="title" tag="h1">
          <span class="gradient">{{ $t('hero.title.gradient') }}</span>
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
      src="@/assets/images/dragon_reading.png"
      class="hero-image"
      alt=""
      aria-hidden="true"
    />
  </SectionLayout>
</template>

<style lang="scss" scoped>
.main-section {
  display: flex;
  min-height: 100vh;
}
.info {
  min-width: 400px;

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

@media (max-width: 1200px) {
  .main-section {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .info {
    min-width: 0;
    .buttons:first-child {
      margin-top: 16px;
    }
    .button {
      margin: 8px 0;
      width: 100%;
    }
  }
  .hero-image {
    max-width: 100%;
  }
}
</style>
