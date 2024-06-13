<template>
  <div class="hero-container flex flex-col items-center">
    <!-- <SocialLinks class="fixed"/> -->

    <i18n-t keypath="hero.title.main" class="title-h1 text-center" tag="h1">
      <span class="blue">{{ $t('hero.title.gradient') }}</span>
    </i18n-t>

    <h2 class="text text-center">{{ $t('hero.description') }}</h2>

    <CustomButton :type="ButtonType.primary">
      {{ $t('hero.action') }}
    </CustomButton>

    <ArrowDownIcon class="m-xl" />
  </div>
</template>

<script setup>
import { ButtonType } from '@/types'

import ArrowDownIcon from '@/assets/svg/arrow_down.svg?component'
</script>

<style scoped lang="scss">
.title-h1 {
  max-width: 550px;
  margin-bottom: 32px;
}

.text {
  max-width: 550px;
  margin-bottom: 48px;
}

.hero-container {
    background-image: url('/assets/svg/dotted_background.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.blue {
  color: $blue;
}
</style>